import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private userService: UserService,
  ) {}

  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user: User = await this.userService.findByUsername(username);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

}
