import authApi from "@/api/auth";
import useAuth from "@/hooks/useAuth";
import { removeAccessToken, saveAccessToken } from "@/utils/auth";
import { useRouter } from "next/router";
import { Report } from "notiflix";
import { useEffect } from "react";

const GoogleLoginPage = () => {
  const router = useRouter();
  const { redirect } = router.query;

  const { token } = router.query;
  const { mutateAuth, redirectToLogin } = useAuth();

  useEffect(() => {
    if (token) {
      saveAccessToken(token);
      authApi
        .me()
        .then((data) => {
          mutateAuth(data, false);
          if (redirect) {
            router.push(redirect as string);
          } else {
            router.push("/");
          }
        })
        .catch(() => {
          Report.failure(
            "Error",
            "Failed to login with Google",
            "Try Again",
            () => {
              removeAccessToken();
              redirectToLogin();
            }
          );
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return <div>Logging...</div>;
};

export default GoogleLoginPage;
