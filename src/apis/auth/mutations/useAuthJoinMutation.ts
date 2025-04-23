import { useMutation } from "@tanstack/react-query";

import { AuthJoinRequest } from "@apis/auth/models/AuthJoin";

import { RestErrorResponse, RestResponse } from "@models/RestResponse";

import rest from "@utils/rest";

const useAuthJoinMutation = () => {
  const mutationFn = async (request: AuthJoinRequest) => {
    return await rest.post("/auth/join", request);
  };

  return useMutation<RestResponse<string>, RestErrorResponse, AuthJoinRequest>({
    mutationFn,
  });
};

export default useAuthJoinMutation;
