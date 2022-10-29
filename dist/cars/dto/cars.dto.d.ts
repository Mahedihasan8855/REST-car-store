export declare class CreateCarRequest {
    make: string;
    model: string;
}
export declare class CarYearRequest {
    years: [];
    expiry: string;
}
export declare class GetCarRequest {
    id: number;
}
export declare class GetCarDetailsRequest {
    years: any;
}
export declare class NewCar {
    id: number;
    name: string;
    model: string;
    year: number;
    years: [];
    expiry: number;
}
export declare class GetCarInfo {
    id: number;
    info: string;
    years: [];
}
export declare class GetCarByYears {
    id: number;
    name: string;
    years: [];
}
