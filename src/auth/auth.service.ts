import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User> ){}

    async createUser(formData){
        try{
            const user = this.userRepository.create({
                email:formData.email,
                name:formData.name
            })
            await this.userRepository.save(user);
            return user;
        }catch(error){
            return error;
        }

    }
    async updateUser(id, formData:CreateUserDto){
        const user =await this.userRepository.findOne({where:{id:id}})
        Object.assign(user, formData);
        return this.userRepository.save(user);
    }
    getData(){
        return {
            id: 1,
            name:'Fuad'
        }
    }
}
