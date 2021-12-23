import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/'
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'bfe382da6amsh08faa74337226a4p152632jsnba24844983d5'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })



export const cryptoApi = createApi(
    {
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        endpoints: (builder) => ({
            getCryptos: builder.query({
                query: () => createRequest('/coins')
            })
        })
    }
);


export const {
    useGetCryptosQuery,
} = cryptoApi;






// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//         'x-rapidapi-key': 'bfe382da6amsh08faa74337226a4p152632jsnba24844983d5'
//     }
// };
