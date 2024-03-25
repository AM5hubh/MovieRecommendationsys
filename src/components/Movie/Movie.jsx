import React from 'react'
import Star from '../Star/Star'
import { Link } from 'react-router-dom'

const Movie = ({ movie, index}) => {
    return (
        <div className=' h-[440px] w-[250px] text-white flex flex-col justify-start items-center'>
            <Link to={`/movie/:${movie?.id}`}>
                <div className="w-[250px] shadow-2xl  hover:shadow-zinc-900 rounded-2xl bg-cover overflow-hidden">
                    <img 
                    src={movie.poster_path?`http://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'} 
                    alt={movie?.title} />
                </div>
            </Link>
            <h1 className="font-semibold mt-3 whitespace-nowrap w-full overflow-hidden overflow-ellipsis">{movie?.title}</h1>
            <Star />
        </div>
    )
}

export default Movie;