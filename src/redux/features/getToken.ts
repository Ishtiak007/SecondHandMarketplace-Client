export const getToken = () => {
  if (typeof window !== "undefined") {
    const persistedAuth = sessionStorage.getItem("persist:auth");
    if (persistedAuth) {
      const parsedAuth = JSON.parse(persistedAuth);
      const token = parsedAuth.token ? JSON.parse(parsedAuth.token) : null;
      return token;
    }
  }
  return null;
};
