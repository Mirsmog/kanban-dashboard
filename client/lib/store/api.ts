import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

if (!apiBaseUrl) {
	throw Error('ENV: BASE_API_URL not found check your .env config')
}

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
	reducerPath: '',
	tagTypes: [],
	endpoints: build => ({})
})

export const {} = api
