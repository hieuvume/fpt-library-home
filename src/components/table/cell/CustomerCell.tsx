import { User } from "@/models/auth";
import { formatDateTime } from "@/utils";
import Image from "next/image";

const CustomerCell = ({ value }: { value: User }) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        className="w-8 h-8 rounded-full"
        src={value.avatar_url}
        alt=""
        width={50}
        height={50}
      />
      <span className="text-gray-800 fw-semibold">{value.full_name}</span>
    </div>
  );
};

export default CustomerCell;
