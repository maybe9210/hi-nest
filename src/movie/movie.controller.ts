import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movie')
export class MovieController {
    @Get()
    getAll() {
        return "getAll\\\\ from moview"
    }

    @Get("search")
    search(@Query("year") searchingYear: string) {
        return `we are searcing ..., ${searchingYear}`
    }

    @Get('/:id')
    getOne(@Param('id') id:string) {
        return `This will return on movie, id => ${id}`
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string) {
        return `this will delete a movie with the id:${movieId}`;
    }

    @Patch('/:id')
    path(@Param('id') movieId:string, @Body() updatedData) {
        return {
            updatedMovie: movieId,
            ...updatedData,
        }
    }


}
