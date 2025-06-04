import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    sendOtp: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/auth/send-otp",
        body,
      }),
      invalidatesTags: ['US'],
    }),

    verifyOtp: build.mutation({
      query: (body) => ({
        method: "POST",
        url: `/auth/verify-otp`,
        body,
      }),
      invalidatesTags: ["US"],
    }),

    register: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/auth/register",
        body,
      }),
      invalidatesTags: ["US"],
    }),

    login: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/auth/login",
        body,
      }),
      invalidatesTags: ["US"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useSendOtpMutation,
  useVerifyOtpMutation,
  useRegisterMutation,
  useLoginMutation,
} = extendedApi;
