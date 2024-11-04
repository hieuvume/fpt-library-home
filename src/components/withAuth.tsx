import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/router";

export function withAuth(Component, roles = []) {
  return function AuthenticatedComponent(props) {
    const { user, isAuthenticated, isLoading, redirectToLogin } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        redirectToLogin();
      } else if (
        isAuthenticated &&
        roles.length > 0 &&
        !roles.includes(user?.role?.role_name)
      ) {
        router.push("/403");
      }
    }, [isLoading, isAuthenticated, redirectToLogin]);

    if (isLoading) return <div>Loading...</div>;
    if (isAuthenticated && roles.length > 0 && !roles.includes(user?.role?.role_name)) {
      return <div>Unauthorized</div>;
    }

    return <Component {...props} />;
  };
}