import BorrowsWrapper from "@/components/layouts/home/borrows/BorrowsWrapper";
import ProfileHeader from "@/components/layouts/home/profile/ProfileHeader";
import ProfileTopBar from "@/components/layouts/home/profile/ProfileTopBar";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";

const BorrowPage = () => {
  const { mutateAuth } = useAuth();

  useEffect(() => {
    mutateAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ProfileHeader />
      <ProfileTopBar />
      <BorrowsWrapper />
    </>
  );
};

BorrowPage.requiresAuth = true;

export default BorrowPage;
