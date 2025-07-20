import { useMutation } from "@tanstack/react-query";

import { LoginRequest } from "@/apis/security/models/Login";
import { RestErrorResponse, RestResponse } from "@/models/RestResponse";
import restService from "@/service/restService";

const useLoginMutation = () => {
  const authLoginMutation = (request: LoginRequest) => {
    return restService.post("/login", request);
  };

  return useMutation<RestResponse<object>, RestErrorResponse, LoginRequest>({
    mutationFn: authLoginMutation,
  });
};

export default useLoginMutation;
