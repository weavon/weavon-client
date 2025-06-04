import { useMutation } from "@tanstack/react-query";

import { AuthLoginRequest } from "@/apis/auth/models/AuthLogin";
import { RestErrorResponse, RestResponse } from "@/models/RestResponse";
import restService from "@/service/restService";

const useAuthLoginMutation = () => {
  const authLoginMutation = (request: AuthLoginRequest) => {
    return restService.post("/auth/login", request);
  };

  return useMutation<RestResponse<object>, RestErrorResponse, AuthLoginRequest>(
    {
      mutationFn: authLoginMutation,
    },
  );
};

export default useAuthLoginMutation;
