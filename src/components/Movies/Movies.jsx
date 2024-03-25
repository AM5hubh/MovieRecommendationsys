import React from 'react'
import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';
import { useGetMoviesQuery } from '../../services/Api';

const Movies = () => {
    const { data, isFetching, error} = useGetMoviesQuery();
    console.log(data)

    return (
        <section className='justify-center items-center w-full h-auto p-9 mt-2 '>
            <MovieList movies={data} />
            <Pagination />
        </section>
    )
}

export default Movies