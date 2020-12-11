import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './entities/movie.entity';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searcing ..., ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string): boolean {
    return this.movieService.deleteOne(movieId);
  }

  @Patch('/:id')
  path(@Param('id') movieId: string, @Body() updatedData) {
    return {
      updatedMovie: movieId,
      ...updatedData,
    };
  }
}
