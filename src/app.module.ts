import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './utils/role.entity';
import { SubscriptionModule } from './subscription/subscription.module';
import { Subscription } from './utils/subscription.entity';

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
    entities:[Role,Subscription]

  }), SubscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
