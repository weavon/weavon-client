import { AxiosError, AxiosResponse } from "axios";

export enum RestResponseType {
  SUCCESS = "SUCCESS",
  AUTH_ERROR = "AUTH_ERROR",
  BUSINESS_ERROR = "BUSINESS_ERROR",
  CLIENT_ERROR = "CLIENT_ERROR",
  SERVER_ERROR = "SERVER_ERROR",
}

export interface RestCommonResponse<T> {
  type: RestResponseType;
  value: T;
}

export interface RestSuccessResponse<T> extends RestCommonResponse<T> {
  type: RestResponseType.SUCCESS;
}

export interface RestFailResponse
  extends RestCommonResponse<{
    message: string;
  }> {
  type: Exclude<RestResponseType, RestResponseType.SUCCESS>;
}

export type RestResponse<T> = AxiosResponse<RestSuccessResponse<T>>;

export type RestErrorResponse = AxiosError<RestFailResponse>;
