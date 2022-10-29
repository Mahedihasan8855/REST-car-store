"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
const cars_dto_1 = require("./dto/cars.dto");
let CarsController = class CarsController {
    constructor(service) {
        this.service = service;
    }
    getHello() {
        return this.service.getHello();
    }
    async createCar(body) {
        let response = await this.service.createCar(body);
        return response;
    }
    async getCar(id) {
        let response = await this.service.getCar(id);
        return response;
    }
    async carYears(id, body) {
        let response = await this.service.carYear(id, body);
        return response;
    }
    async getCarByYear(query) {
        let response = await this.service.getCarByYear(query);
        return response;
    }
};
__decorate([
    (0, common_1.Post)('cars'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cars_dto_1.CreateCarRequest]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "createCar", null);
__decorate([
    (0, common_1.Get)('cars/:id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getCar", null);
__decorate([
    (0, common_1.Post)('cars/:id/years'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, cars_dto_1.CarYearRequest]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "carYears", null);
__decorate([
    (0, common_1.Get)('cars'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getCarByYear", null);
CarsController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map