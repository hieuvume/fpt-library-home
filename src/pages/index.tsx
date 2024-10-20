import BestOfTheMonth from "@/components/home/BestOfTheMonth";
import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import SearchBar from "@/components/layouts/home/SearchBar";
import { useState } from "react";

export default function Home() {

  return <>
    <div className="mb-5">
      <SearchBar />
    </div>
    <BestOfTheMonth />



  </>;
}

Home.getLayout = function getLayout(page) {
  return <FullWidthLayout>{page}</FullWidthLayout>;
};
