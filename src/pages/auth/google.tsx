import authApi from "@/api/auth";
import useAuth from "@/hooks/useAuth";
import { saveAccessToken } from "@/utils/auth";
import { useRouter } from "next/router";
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
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])


    return <div>Logging...</div>;
}

export default GoogleLoginPage;