import { Controller, Get, Post, Body ,Param,Query} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarYearRequest, CreateCarRequest,  } from './dto/cars.dto';
import { ApiParam  } from '@nestjs/swagger';

@Controller('')
export class CarsController {
  constructor(private readonly service: CarsService) {}

  @Post('cars')  
  public async createCar(@Body() body: CreateCarRequest): Promise<any> {
    let response = await this.service.createCar(body);
    return response;
  }

  @Get('cars/:id')
  public async getCar(@Param("id") id: number): Promise<any> {
    let response = await this.service.getCar(id);
    return response;
  }

  @Post('cars/:id/years')
  public async carYears(@Param("id") id: number,@Body() body: CarYearRequest): Promise<any> {
    let response = await this.service.carYear(id,body);
    return response;
  }

  @Get('cars')
  public async getCarByYear(@Query() query): Promise<any> {
    let response = await this.service.getCarByYear(query);
    return response;
  }
}
