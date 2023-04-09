import {
  createApi,
  fetchBaseQuery,
  FetchArgs
} from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
    prepareHeaders(headers) {
      return headers
    }
  }),
  endpoints(builder) {
    return {
      fetchPokemons: builder.query({
        query: (limit): FetchArgs => ({
          url: `pokemon?limit=${limit}`
        })
      })
    }
  }
})

export const { useFetchPokemonsQuery } = api
