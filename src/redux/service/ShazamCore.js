import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ShazamApi = createApi({
    reducerPath: 'ShazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-api6.p.rapidapi.com/shazam',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '412421b958msh5ddff2391eaa7ffp15e682jsnb1e36ea66bcc');
            headers.set('x-rapidapi-host', 'shazam-api6.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ 
            query: () => ({
                url: '/top_tracks_country',
            })
        }),
        getSongDetail: builder.query({ 
            query: ({ songId }) => ({  url: `/songs/${songId}` })
        }),
        getSongRelated: builder.query({ 
            query: ({ songId }) => ({  url: `/track/related?track_id${ songId }` })
        }),
        getArtistDeatils: builder.query({ 
            query: ({ artistId }) => ({  url: `/artists/detail?atist_id=${ artistId }` })
        }),
    }),
});

export const { useGetTopChartsQuery , usegetSongDetail , useGetSongRelatedQuery , useGetArtistDeatilsQuery } = ShazamApi;
