import { Module } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationController } from './operation.controller';
import { operationRepo } from './operation.repository';

@Module({
  providers: [OperationService,operationRepo],
  controllers: [OperationController]
})
export class OperationModule {}
