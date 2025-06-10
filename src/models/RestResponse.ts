import { AxiosError, AxiosResponse } from "axios";

export const RestResponseType = {
  SUCCESS: "SUCCESS",
  AUTH_ERROR: "AUTH_ERROR",
  BUSINESS_ERROR: "BUSINESS_ERROR",
  CLIENT_ERROR: "CLIENT_ERROR",
  SERVER_ERROR: "SERVER_ERROR",
} as const;

type TRestResponseType =
  (typeof RestResponseType)[keyof typeof RestResponseType];

export interface RestCommonResponse<T> {
  type: TRestResponseType;
  value: T;
}

export interface RestSuccessResponse<T> extends RestCommonResponse<T> {
  type: typeof RestResponseType.SUCCESS;
}

export interface RestFailResponse
  extends RestCommonResponse<{
    message: string;
  }> {
  type: Exclude<TRestResponseType, typeof RestResponseType.SUCCESS>;
}

export type RestResponse<T> = AxiosResponse<RestSuccessResponse<T>>;

export type RestErrorResponse = AxiosError<RestFailResponse>;
