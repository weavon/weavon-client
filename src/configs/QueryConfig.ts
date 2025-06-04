import { QueryClient } from "@tanstack/react-query";

const QueryConfig = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default QueryConfig;
