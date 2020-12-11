import { Injectable } from '@nestjs/common';
import {Movie} from './entities/movie.entity';

@Injectable()
export class MovieService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        return this.movies.find(movie => movie.id === +id);
    }

    deleteOne(id: string): boolean {
        const prevCount = this.movies.length;
        this.movies.filter(movie => movie.id !== +id);
        const nextCount = this.movies.length;
        return prevCount !== nextCount;
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length +1,
            ...movieData
        })
    }
}
