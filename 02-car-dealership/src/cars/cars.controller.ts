import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes } from '@nestjs/common';
import { ParseIntPipe, ParseUUIDPipe, ValidationPipe } from '@nestjs/common/pipes';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
    
    constructor(
        private readonly carsService: CarsService,
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({version: '4'})) id: string){
        return this.carsService.findById(id);
    }

    @Post()
    //@UsePipes( ValidationPipe )
    createCar(@Body() createCarDto: CreateCarDTO ){
        return this.carsService.createCar(createCarDto);
    }

    @Patch(':id')
    updateCars(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDTO
    ){
        return this.carsService.updateCar(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string){
        return this.carsService.deleteCar(id);
    }

}
