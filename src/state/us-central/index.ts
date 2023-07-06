import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../common/constants';
import {Stock} from '@/types/interfaces';

const US_CENTRAL_API = 'usCentralApi';

export const usCentralApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  reducerPath: US_CENTRAL_API,
  endpoints: builder => ({
    getEquipment: builder.query<Stock[], void>({
      query: () => `${baseUrl}/equipamiento`,
    }),
    getOpenings: builder.query<Stock[], void>({
      query: () => `${baseUrl}/aberturas`,
    }),
    getFittings: builder.query<Stock[], void>({
      query: () => `${baseUrl}/terminaciones`,
    }),
  }),
});

export const {useGetEquipmentQuery, useGetFittingsQuery, useGetOpeningsQuery} =
  usCentralApi;
