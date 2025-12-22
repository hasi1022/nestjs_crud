import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { roleRepo } from './role.repository';

@Module({
  providers: [RoleService,roleRepo],
  controllers: [RoleController]
})
export class RoleModule {}
