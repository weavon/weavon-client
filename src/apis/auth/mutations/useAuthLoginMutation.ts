import { useMutation } from "@tanstack/react-query";

import { AuthLoginRequest } from "@/apis/auth/models/AuthLogin";
import { RestErrorResponse, RestResponse } from "@/models/RestResponse";
import rest from "@/service/rest";

const useAuthLoginMutation = () => {
  const authLoginMutation = (request: AuthLoginRequest) => {
    return rest.post("/auth/login", request);
  };

  return useMutation<RestResponse<object>, RestErrorResponse, AuthLoginRequest>(
    {
      mutationFn: authLoginMutation,
    },
  );
};

export default useAuthLoginMutation;
