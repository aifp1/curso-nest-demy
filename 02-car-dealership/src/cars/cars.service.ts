import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './dto';

import { Car } from './interfaces/car.interface';



@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla',
        // },
        // {
        //     id: uuid(),
        //     brand: 'Honda',
        //     model: 'Civic',
        // },
        // {
        //     id: uuid(),
        //     brand: 'Jeep',
        //     model: 'Cherokee',
        // },
    ];

    findAll(){
        return this.cars;
    }

    findById(id: string){
        const car = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car With ID '${id}' Not Found`);
        return car;
    }

    createCar(createCarDto: CreateCarDTO){
        const newCar: Car = {
            id: uuid(),
            ...createCarDto,
        }
        this.cars.push(newCar);
        return this.cars;
    }

    updateCar(id: string, updateCarDto: UpdateCarDTO){
        let carDB = this.findById(id);
        this.cars = this.cars.map(car =>{
            if(car.id === id){
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    deleteCar(id: string){
        this.findById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars
    }
}