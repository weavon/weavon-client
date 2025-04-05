import axiosClient from "@configs/axiosClient";

const rest = (() => {
  const get = async (url: string, params?: { [key: string]: object }) => {
    return await axiosClient.get(url, { params });
  };

  const post = async (url: string, data: object) => {
    return await axiosClient.post(url, data);
  };

  const put = async (url: string, data: object) => {
    return await axiosClient.put(url, data);
  };

  const patch = async (url: string, data: object) => {
    return await axiosClient.patch(url, data);
  };

  const del = async (url: string) => {
    return await axiosClient.delete(url);
  };

  return { get, post, put, patch, del };
})();

export default rest;
