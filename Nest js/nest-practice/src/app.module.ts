import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookService } from './book.service';
import { ChatModule } from './chat/chat.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule],
  controllers: [AppController],
  providers: [AppService, BookService],
  exports: []
})
export class AppModule {
  constructor(){
    console.log("App Module");
  }
}
