import { AuthLoginRequest } from "@apis/auth/model/AuthLogin";
import { RestErrorResponse, RestResponse } from "@models/RestResponse";
import { useMutation } from "@tanstack/react-query";
import rest from "@utils/rest";

const useAuthLoginMutation = () => {
  const mutationFn = async (request: AuthLoginRequest) => {
    return await rest.post("/auth/login", request);
  };

  return useMutation<RestResponse<object>, RestErrorResponse, AuthLoginRequest>(
    {
      mutationFn,
    }
  );
};

export default useAuthLoginMutation;
