import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    CommonModule,
    ProductsModule,
    UsersModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000, // not more than 4 request in 1sec
        limit: 4,
      },
      {
        name: 'long',
        ttl: 60000, // not more than 100 request in 1min
        limit: 100,
      },
    ]),
    MyLoggerModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
