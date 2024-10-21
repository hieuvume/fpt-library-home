import { useRouter } from "next/router";

const SearchPage = () => {
    const router = useRouter()
    return (
        <div className="container-fixed">
            You are looking for: {router.query.keyword}
        </div>
    );
}

export default SearchPage