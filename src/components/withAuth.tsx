import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/router";

export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { isAuthenticated, isLoading, redirectToLogin } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        redirectToLogin();
      }
    }, [isLoading, isAuthenticated, redirectToLogin]);

    if (isLoading) return <div>Loading...</div>;

    return isAuthenticated ? <Component {...props} /> : null;
  };
}
