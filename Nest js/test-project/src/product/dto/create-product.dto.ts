import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  id: number;

  @IsString({ message: 'valid name is required' })
  @IsNotEmpty()
  name: string;


  @IsString()
  type: string;
}