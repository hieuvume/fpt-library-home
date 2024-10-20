import authApi from "@/api/auth";
import useAuth from "@/hooks/useAuth";
import { removeAccessToken, saveAccessToken } from "@/utils/auth";
import { useRouter } from "next/router";
import { Report } from "notiflix";
import { useEffect } from "react";

const GoogleLoginPage = () => {

    const router = useRouter()
    const { token } = router.query
    const { mutateAuth } = useAuth()

    useEffect(() => {
        if (token) {
            saveAccessToken(token);
            authApi
                .me()
                .then((data) => {
                    mutateAuth(data, false);
                    router.push("/");
                }).catch(() => {
                    Report.failure("Error", "Failed to login with Google", "Try Again", () => {
                        removeAccessToken()
                        router.push("/auth/sign-in");
                    });
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])


    return <div>Logging...</div>;
}

export default GoogleLoginPage;