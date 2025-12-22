import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './utils/role.entity';

@Module({
  imports: [RoleModule,TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5433,
    username:'postgres',
    password:'12345678',
    database:'newUser2',
    synchronize:true,
    logging:true,
    entities:[Role]

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
