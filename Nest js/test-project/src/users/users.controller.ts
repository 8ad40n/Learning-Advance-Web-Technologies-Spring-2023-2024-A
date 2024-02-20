import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private user: UsersService){

    }
  @Get()
  getAll() {
    return [];
  }
  @Get("name")
  findAllUsers(): string[]
  {
    return this.user.findAllUser();
  }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return { id };
//   }
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: []) {
    return { id, ...userUpdate };
  }
}
