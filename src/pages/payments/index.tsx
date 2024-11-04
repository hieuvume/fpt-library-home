import PaymentWrapper from "@/components/layouts/home/payment/PaymentWrapper";
import ProfileHeader from "@/components/layouts/home/profile/ProfileHeader";
import ProfileTopBar from "@/components/layouts/home/profile/ProfileTopBar";
import { withAuth } from "@/components/withAuth";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";

const PaymentPage = () => {
  const { mutateAuth } = useAuth();

  useEffect(() => {
    mutateAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ProfileHeader />
      <ProfileTopBar />
      <PaymentWrapper />
    </>
  );
};

export default withAuth(PaymentPage);
