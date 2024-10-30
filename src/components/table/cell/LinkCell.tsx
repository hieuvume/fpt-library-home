import Link from "next/link";

const LinkCell = ({ value ,href}: { value: string,href:any }) => {
  return <Link href={href} className="text-teal-500 font-normal hover:text-primary text-gray-900">{value}</Link>;
};

export default LinkCell;
