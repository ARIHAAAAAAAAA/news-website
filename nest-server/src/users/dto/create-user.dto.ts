import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @Length(4,10)
    password: string;

    @IsString()
    language: string;

    @IsString()
    location: string;

    @IsString()
    Favorite_news: string;

    admin:boolean
}



