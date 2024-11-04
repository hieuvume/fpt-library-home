import { getSetting } from "@/api/setting";
import { Setting } from "@/models/setting";
import useSWR from "swr";

const useSetting = () => {
  const { data, mutate } = useSWR<Setting>("/settings", () => getSetting(), {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    setting: data,
    mutate
  };
};

export default useSetting;
