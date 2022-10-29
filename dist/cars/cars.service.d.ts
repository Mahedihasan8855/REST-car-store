import { CarYearRequest, CreateCarRequest } from './dto/cars.dto';
export declare class CarsService {
    getHello(): string;
    getCar(id: number): Promise<any>;
    getCarByYear(query: any): Promise<any>;
    carYear(id: number, dto: CarYearRequest): Promise<any>;
    createCar(dto: CreateCarRequest): Promise<any>;
}
