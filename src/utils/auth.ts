import storage from "@utils/storage";

const auth = (() => {
  const login = (token: string) => {
    storage.setData("AUTH_TOKEN", {
      token,
    });
  };

  const logout = () => {
    storage.removeData("AUTH_TOKEN");
  };

  return {
    login,
    logout,
  };
})();

export default auth;
