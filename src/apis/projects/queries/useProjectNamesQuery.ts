import { useQuery } from "@tanstack/react-query";

import {
  ProjectNamesRequest,
  ProjectNamesResponse,
} from "@/apis/projects/models/ProjectNames";
import { RestErrorResponse, RestResponse } from "@/models/RestResponse";
import restService from "@/service/restService";

const useProjectNamesQuery = (request: ProjectNamesRequest) => {
  const projectNamesQuery = () => {
    return restService.get("/projects/names", {
      params: {
        userId: request.userId,
      },
    });
  };

  return useQuery<
    RestResponse<ProjectNamesResponse[]>,
    RestErrorResponse,
    ProjectNamesResponse[]
  >({
    queryKey: generateQueryKey(request),
    queryFn: projectNamesQuery,
    select: (response) => response.data.value,
  });
};

const generateQueryKey = (request: ProjectNamesRequest) => {
  return ["projects", "names", { ...request }];
};

export default useProjectNamesQuery;
