import { useMutation } from "@tanstack/react-query";

import { AuthLoginRequest } from "@apis/auth/models/AuthLogin";

import { RestErrorResponse, RestResponse } from "@models/RestResponse";

import rest from "@utils/rest";

const useAuthLoginMutation = () => {
  const mutationFn = async (request: AuthLoginRequest) => {
    return await rest.post("/auth/login", request);
  };

  return useMutation<RestResponse<object>, RestErrorResponse, AuthLoginRequest>(
    {
      mutationFn,
    },
  );
};

export default useAuthLoginMutation;
