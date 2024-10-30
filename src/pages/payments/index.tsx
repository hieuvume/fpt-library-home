import PaymentWrapper from "@/components/layouts/home/payment/PaymentWrapper";
import Profile from "@/components/layouts/home/profile/Profile";
import ProfileHeader from "@/components/layouts/home/profile/ProfileHeader";
import ProfileTopBar from "@/components/layouts/home/profile/ProfileTopBar";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PaymentPage = () => {

    const { user, mutateAuth, isLoading, isAuthenticated } = useAuth();
    const router = useRouter()

    useEffect(() => {
        mutateAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        router.push('/auth/sign-in')
        return <div>Redirecting...</div>
    }

    return (
        <>
            <ProfileHeader />
            <ProfileTopBar />
            <PaymentWrapper />
        </>
    );
}

export default PaymentPage