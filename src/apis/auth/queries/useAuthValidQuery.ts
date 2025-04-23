import { useQuery } from "@tanstack/react-query";

import { AuthValidResponse } from "@apis/auth/models/AuthValid";

import { RestErrorResponse, RestResponse } from "@models/RestResponse";

import rest from "@utils/rest";

const useAuthValidQuery = () => {
  const queryFn = async () => {
    return await rest.get("/auth/valid");
  };

  return useQuery<
    RestResponse<AuthValidResponse>,
    RestErrorResponse,
    AuthValidResponse
  >({
    queryKey: generateQueryKey(),
    queryFn,
    select: (data) => data.data.value,
  });
};

const generateQueryKey = () => {
  return ["auth", "valid"];
};

useAuthValidQuery.generateQueryKey = generateQueryKey;

export default useAuthValidQuery;
