import { mainApi } from ".";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getRegions: build.query({
      query: (params) => ({
        method: "GET",
        url: "/region",
        params,
      }),
      providesTags: ["US"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetRegionsQuery } = extendedApi;
