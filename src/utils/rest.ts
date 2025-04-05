import axiosClient from "@configs/axiosClient";

const rest = (() => {
  const requestGet = async (
    url: string,
    params?: { [key: string]: object }
  ) => {
    return await axiosClient.get(url, { params });
  };

  const requestPost = async (url: string, data: object) => {
    return await axiosClient.post(url, data);
  };

  const requestPut = async (url: string, data: object) => {
    return await axiosClient.put(url, data);
  };

  const requestPatch = async (url: string, data: object) => {
    return await axiosClient.patch(url, data);
  };

  const requestDelete = async (url: string) => {
    return await axiosClient.delete(url);
  };

  return {
    get: requestGet,
    post: requestPost,
    put: requestPut,
    patch: requestPatch,
    delete: requestDelete,
  };
})();

export default rest;
