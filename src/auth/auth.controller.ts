import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Get()
    index(){
        let data = this.authService.getData();
        return data;
        
    }

    @Get(':id')
    details(@Param('id') id:string, @Query('type') type: String){
        return [
            {id: id},
            {
                param_type: type
            }
        ]

        
    }


    @Post('create-user')
    async create_user(@Body() createUserData:CreateUserDto){
        let user = await this.authService.createUser(createUserData);
        return {
            user
        }
    }

    @Put('update-user/:id')
    async update_user(@Param('id') id:number, @Body() updateUserData:CreateUserDto){
        return this.authService.updateUser(id, updateUserData);
    }

}
