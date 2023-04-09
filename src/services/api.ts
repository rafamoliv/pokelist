import {
  createApi,
  fetchBaseQuery,
  FetchArgs
} from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders(headers) {
      return headers
    }
  }),
  endpoints(builder) {
    return {
      fetchPokemons: builder.query({
        query: (limit): FetchArgs => ({
          url: `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        })
      }),
      fetchPokemonStats: builder.query({
        query: (url): FetchArgs => ({
          url: `${url}`
        })
      })
    }
  }
})

export const { useFetchPokemonsQuery, useLazyFetchPokemonStatsQuery } = api
