import authApi from "@/api/auth";
import { config } from "@/config";
import { User } from "@/models/auth";
import { removeAccessToken } from "@/utils/auth";
import { useRouter } from "next/router";
import useSWR from "swr";

const useAuth = () => {
  const router = useRouter();
  const { data, error, mutate } = useSWR<User>("/auth/me", () => authApi.me(), {
    onError: (err) => {
      if (err?.statusCode == 401) {
        removeAccessToken();
        mutate(null, false);
        // if (router.pathname != "/login") {
        //   router.push("/login");
        // }
      }
    },
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  const login = (user: User) => {
    mutate(user, false);
  };

  const logout = () => {
    removeAccessToken();
    // authApi.logout()
    mutate(null, false);
    router.push("/");
  };

  const loginWithGoogle = () => {
    window.location.href = config.GOOGLE_LOGIN_URL;
  };

  return {
    user: data,
    isAuthenticated: !!data,
    isLoading: !error && !data,
    isError: !!error,
    mutateAuth: mutate,
    login,
    logout,
    loginWithGoogle,
  };
};

export default useAuth;
