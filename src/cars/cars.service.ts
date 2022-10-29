import { Injectable } from '@nestjs/common';
import { CarYearRequest, CreateCarRequest, GetCarInfo, GetCarByYears, NewCar } from './dto/cars.dto';

let allCars=[];

@Injectable()
export class CarsService {  

      public async getCar(id: number): Promise<any> {  
        let tId=id;
        for (let i = 0; i < allCars.length; i++) {
          if(allCars[i].id==tId){
            const car= new GetCarInfo;
            car.id=allCars[i].id;
            car.info=allCars[i].name.concat(", Model:",allCars[i].model);
            car.years=allCars[i].years;
            return car;
          }
        }
        return `Not get By this ID ${tId}`;
      }
      

      public async getCarByYear(query: any): Promise<any> {  
        let splitQuery = query.years.split(',');
        let years = splitQuery.map(Number);    
        let findCars=[];
        function findCommonElement(arr1, arr2) {
          return arr1.some(item => arr2.includes(item));
      }
        for (let i = 0; i < allCars.length; i++) {
          let carYears=allCars[i].years;  
          let include= findCommonElement(years,carYears);
          if(include){
            const car= new GetCarByYears;
            car.id=allCars[i].id;
            car.name=allCars[i].name.concat(" ",allCars[i].model," " ,allCars[i].years[0]);
            car.years=allCars[i].years;
            findCars.push(car);
          }
          
        }
        return {"cars":findCars};
      }

      public async carYear(id:number,dto: CarYearRequest): Promise<any> {  
        let tId=id;
        for (let i = 0; i < allCars.length; i++) {
          if(allCars[i].id==tId){
            const car= new GetCarInfo;
            car.id=allCars[i].id;
            car.info=allCars[i].name.concat(", Model:",allCars[i].model);
            allCars[i].years=dto.years;
            return {"success": true};
          }
        }
        return {"success": false};
      }

      public async createCar(dto: CreateCarRequest): Promise<any> {  

        let carDetails=new NewCar;
        carDetails.id=allCars.length+1;
        carDetails.name=dto.make;
        carDetails.model=dto.model;
        carDetails.years=[];
        allCars.push(carDetails);
        return {"id":carDetails.id};

      }



}
