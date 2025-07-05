import { useMutation } from "@tanstack/react-query";

import { AuthJoinRequest } from "@/apis/auth/models/AuthJoin";
import { RestErrorResponse, RestResponse } from "@/models/RestResponse";
import rest from "@/service/rest";

const useAuthJoinMutation = () => {
  const authJoinMutation = (request: AuthJoinRequest) => {
    return rest.post("/auth/join", request);
  };

  return useMutation<RestResponse<string>, RestErrorResponse, AuthJoinRequest>({
    mutationFn: authJoinMutation,
  });
};

export default useAuthJoinMutation;
