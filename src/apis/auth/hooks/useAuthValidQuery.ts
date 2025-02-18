import { useQuery } from "@tanstack/react-query";
import rest from "@utils/rest";

const useAuthValidQuery = () => {
  const queryFn = async () => {
    return await rest.get("/auth/valid");
  };

  return useQuery({
    queryKey: generateQueryKey(),
    queryFn,
  });
};

const generateQueryKey = () => {
  return ["auth", "valid"];
};

useAuthValidQuery.generateQueryKey = generateQueryKey;

export default useAuthValidQuery;
