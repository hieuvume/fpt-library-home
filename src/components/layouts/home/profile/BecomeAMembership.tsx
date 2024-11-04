import Link from "next/link"

const BecomeAMembership = () => {
    return (
        <div className="card flex-col gap-5 justify-between bg-[center_top_1.3rem] bg-no-repeat pt-5 pb-5 lg:pt-10 px-5 start-now-bg bg-[length:700px]">
            <div className="text-center">
                <h3 className="text-gray-900 text-lg font-semibold leading-6 mb-1.5">
                    Become a Membership
                    <br />
                    Enjoy Exclusive Book-Borrowing Benefits
                </h3>
                <span className="text-gray-700 text-sm block mb-5">
                    Discover membership plans that unlock access to a wider
                    selection of great books and exclusive offers.
                </span>
                <Link className="btn btn-dark btn-sm" href="/plans">
                    Join Now
                </Link>
            </div>
        </div>
    )
}

export default BecomeAMembership