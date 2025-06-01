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

    verifyOtp: build.mutation({
      query: (body) => ({
        method: "POST",
        url: `/auth/verify-otp`,
        body,
      }),
      invalidatesTags: ["AUTH"],
    }),

    register: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/auth/register",
        body,
      }),
      invalidatesTags: ["AUTH"],
    }),

    login: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/auth/login",
        body,
      }),
      invalidatesTags: ["AUTH"],
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
