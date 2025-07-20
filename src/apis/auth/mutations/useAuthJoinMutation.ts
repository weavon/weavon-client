import { useMutation } from "@tanstack/react-query";

import { AuthJoinRequest } from "@/apis/auth/models/AuthJoin";
import { RestErrorResponse, RestResponse } from "@/models/RestResponse";
import restService from "@/service/restService";

const useAuthJoinMutation = () => {
  const authJoinMutation = (request: AuthJoinRequest) => {
    return restService.post("/auth/join", request);
  };

  return useMutation<RestResponse<string>, RestErrorResponse, AuthJoinRequest>({
    mutationFn: authJoinMutation,
  });
};

export default useAuthJoinMutation;
