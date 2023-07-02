import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ItemModule } from './modules/item.module';
import { Item } from './entities/item.entity';
import { AuthModule } from './modules/auth.module';
import { User } from './entities/user.entity';
import { DB_NAME, DB_PASSWORD, DB_USERNAME } from './common/global-constants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [Item, User],
      synchronize: true,
    }),
    ItemModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
