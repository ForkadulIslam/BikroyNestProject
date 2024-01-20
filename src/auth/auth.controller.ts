import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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
    create_user(@Body() createUserData:CreateUserDto){
        return createUserData;
    }
}
