import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { subscriptionRepo } from './subscription.repository';

@Module({
  providers: [SubscriptionService,subscriptionRepo],
  controllers: [SubscriptionController]
})
export class SubscriptionModule {}
