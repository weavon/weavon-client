import { useMutation } from "@tanstack/react-query";

import { LoginRequest } from "@/apis/security/models/Login";
import { RestErrorResponse, RestResponse } from "@/models/RestResponse";
import rest from "@/service/rest";

const useLoginMutation = () => {
  const authLoginMutation = (request: LoginRequest) => {
    return rest.post("/login", request);
  };

  return useMutation<RestResponse<object>, RestErrorResponse, LoginRequest>({
    mutationFn: authLoginMutation,
  });
};

export default useLoginMutation;
