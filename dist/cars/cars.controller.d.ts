import { CarsService } from './cars.service';
import { CarYearRequest, CreateCarRequest } from './dto/cars.dto';
export declare class CarsController {
    private readonly service;
    constructor(service: CarsService);
    getHello(): string;
    createCar(body: CreateCarRequest): Promise<any>;
    getCar(id: number): Promise<any>;
    carYears(id: number, body: CarYearRequest): Promise<any>;
    getCarByYear(query: any): Promise<any>;
}
