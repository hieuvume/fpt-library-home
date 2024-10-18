import authApi from "@/api/auth";
import { User } from "@/models/auth";
import { removeAccessToken } from "@/utils/auth";
import useSWR from "swr";

const useAuth = () => {
    const { data, error, mutate } = useSWR<User>('/auth/me', () => authApi.me(), {
        onError: (err) => {
            if (err.response?.status === 401) {
                logout()
            }
        },
        revalidateOnFocus: false,
        shouldRetryOnError: false,
    });


    const login = (user: User) => {
        mutate(user, false)
    }

    const logout = () => {
        removeAccessToken()
        authApi.logout()
        mutate(null, false)
    }

    return {
        user: data,
        isAuthenticated: !!data,
        isLoading: !error && !data,
        isError: !!error,
        mutateAuth: mutate,
        login,
        logout
    };
}

export default useAuth;