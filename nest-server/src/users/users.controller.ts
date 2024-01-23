import {
  Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards, Logger, Inject,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from './auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    
  ) {}
  
  
  // @Public()
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.usersService.signIn(signInDto.email, signInDto.password);
  }

  // @UseGuards(AuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      const user = this.usersService.createUser(createUserDto);
      return user;
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  @Get()
  findAll() {
    try {
      return this.usersService.findAllUser();
    } catch (error) {
      throw new BadRequestException(error)
    }
  }


  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  // @Get(':email')
  // findOneByEmail(@Param('email') email: string) {
  //   return this.usersService.findEmail(email);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    this.usersService.updateUser(+id, updateUserDto);
    return 'successfully updated';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.usersService.removeUser(+id);
    return 'successfully updated';
  }
}

