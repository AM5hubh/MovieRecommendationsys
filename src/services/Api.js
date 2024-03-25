import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const page = 1;


export const TMDBAPI = createApi({
    reducerPath: 'TMDBAPI',
    baseQuery: fetchBaseQuery({baseUrl: "https://api.themoviedb.org/3/"}),
    endpoints: (builder) => ({

        getMovies: builder.query({
            query: () => `movie/popular?page=${page}&api_key=1f687d1c777fb0328f99682669cd1685`
        }),

        getMovie: builder.query({
            query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=1f687d1c777fb0328f99682669cd1685`
        })   
    })
    
});

export const {
    useGetMoviesQuery,
    useGetMovieQuery,

} = TMDBAPI;