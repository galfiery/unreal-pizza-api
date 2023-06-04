import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from 'src/dto/login.dto';
import * as GlobalConstants from '../common/global-constants';
import { LoginReponseDto } from 'src/dto/login-reponse.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = await this.authService.generateToken({
      payload: user,
      secretKey: GlobalConstants.JWT_SECRET,
    });

    const response = new LoginReponseDto({ 
        username: user.username, 
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: token,
    });
    
    return response;
  }
}
