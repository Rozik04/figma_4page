import { mainApi } from ".";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getRegions: build.query({
      query: (params) => ({
        method: "GET",
        url: "/region",
        params,
      }),
      providesTags: ["AUTH"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetRegionsQuery } = extendedApi;
