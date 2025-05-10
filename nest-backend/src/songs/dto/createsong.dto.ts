import { IsNotEmpty, isNotEmpty, IsString, isString } from "class-validator";

export class createsong {
    @IsString()
    @IsNotEmpty()
    readonly title: string;
    @IsString()
    @IsNotEmpty()
    readonly artist: string
}