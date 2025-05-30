import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    sendOtp: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/auth/send-otp",
        body,
      }),
      invalidatesTags: ["AUTH"],
    }),
  }),
  overrideExisting: false,
});

export const { useSendOtpMutation } = extendedApi;
