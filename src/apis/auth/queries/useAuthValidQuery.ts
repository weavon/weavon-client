import { useQuery } from "@tanstack/react-query";

import { AuthValidResponse } from "@/apis/auth/models/AuthValid";
import { RestErrorResponse, RestResponse } from "@/models/RestResponse";
import restService from "@/service/restService";
import useAuthStore from "@/stores/useAuthStore";

const useAuthValidQuery = () => {
  const { accessToken } = useAuthStore();

  const authValidQuery = () => {
    return restService.get("/auth/valid");
  };

  return useQuery<
    RestResponse<AuthValidResponse>,
    RestErrorResponse,
    AuthValidResponse
  >({
    queryKey: generateQueryKey(accessToken),
    queryFn: authValidQuery,
    select: (data) => data.data.value,
  });
};

const generateQueryKey = (accessToken?: string | null) => {
  return ["auth", "valid", accessToken];
};

useAuthValidQuery.generateQueryKey = generateQueryKey;

export default useAuthValidQuery;
