import authApi from "@/api/auth";
import { config } from "@/config";
import { authRoutes, privateRoutes } from "@/middleware";
import { User } from "@/models/auth";
import { removeAccessToken } from "@/utils/auth";
import { useRouter } from "next/router";
import useSWR from "swr";

const useAuth = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const { data, error, mutate } = useSWR<User>("/auth/me", () => authApi.me(), {
    onError: (err) => {
      if (err?.statusCode == 401) {
        removeAccessToken();
        mutate(null, false);
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
    if (privateRoutes.includes(router.pathname)) {
      router.push("/auth/sign-in");
    }
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
    redirectToLogin: () => {
      if (redirect) {
        router.push(`/auth/sign-in?redirect=${redirect}`);
      } else {
        if (authRoutes.includes(router.pathname)) {
          router.push("/auth/sign-in");
          return;
        }
        router.push(`/auth/sign-in?redirect=${router.asPath}`);
      }
    },
  };
};

export default useAuth;
