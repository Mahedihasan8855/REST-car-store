import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsDecimal,
  IsNotEmpty,
  isNumber,
  IsNumber,
  IsString,
  IsOptional,
  IsEthereumAddress,
  ValidateNested,
  MaxLength,
  IsObject,
} from 'class-validator';

export class CreateCarRequest {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(300)
  make: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(300)
  model: string;
}

export class CarYearRequest {

  @IsNotEmpty()
  @ApiProperty()
  years: [];

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MaxLength(300)
  expiry: string;
}

export class GetCarRequest {

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()  
  id:number; 
      
  }
  
  export class GetCarDetailsRequest {

    years:any; 
        
    }

export class NewCar {
  id:number;  
  name: string;
  model: string;
  year:number;
  years:[];
  expiry:number;
}

export class GetCarInfo {
  id:number;  
  info: string;
  years:[];
}

export class GetCarByYears {
  id:number;  
  name: string;
  years:[];
}
