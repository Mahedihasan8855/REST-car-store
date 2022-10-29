"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const cars_dto_1 = require("./dto/cars.dto");
let allCars = [];
let CarsService = class CarsService {
    getHello() {
        return 'Hello World!';
    }
    async getCar(id) {
        let tId = id;
        for (let i = 0; i < allCars.length; i++) {
            if (allCars[i].id == tId) {
                const car = new cars_dto_1.GetCarInfo;
                car.id = allCars[i].id;
                car.info = allCars[i].name.concat(", Model:", allCars[i].model);
                car.years = allCars[i].years;
                return car;
            }
        }
        return `Not get By this ID ${tId}`;
    }
    async getCarByYear(query) {
        let splitQuery = query.years.split(',');
        let years = splitQuery.map(Number);
        let findCars = [];
        function findCommonElement(arr1, arr2) {
            return arr1.some(item => arr2.includes(item));
        }
        for (let i = 0; i < allCars.length; i++) {
            let carYears = allCars[i].years;
            let include = findCommonElement(years, carYears);
            if (include) {
                const car = new cars_dto_1.GetCarByYears;
                car.id = allCars[i].id;
                car.name = allCars[i].name.concat(" ", allCars[i].model, " ", allCars[i].years[0]);
                car.years = allCars[i].years;
                findCars.push(car);
            }
        }
        return { "cars": findCars };
    }
    async carYear(id, dto) {
        let tId = id;
        for (let i = 0; i < allCars.length; i++) {
            if (allCars[i].id == tId) {
                const car = new cars_dto_1.GetCarInfo;
                car.id = allCars[i].id;
                car.info = allCars[i].name.concat(", Model:", allCars[i].model);
                allCars[i].years = dto.years;
                return { "success": true };
            }
        }
        return { "success": false };
    }
    async createCar(dto) {
        let carDetails = new cars_dto_1.NewCar;
        carDetails.id = allCars.length + 1;
        carDetails.name = dto.make;
        carDetails.model = dto.model;
        carDetails.years = [];
        allCars.push(carDetails);
        return { "id": carDetails.id };
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)()
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map