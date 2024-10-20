import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { isMacOs, isWindows } from "react-device-detect";

const HeaderSearch = () => {
    const router = useRouter()
    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const [deviceType, setDeviceType] = useState(1);
    const [keyword, setKeyword] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (keyword.trim()) {
            router.push(`/search?keyword=${encodeURIComponent(keyword)}`);
        }
    };

    useEffect(() => {
        if (isWindows) {
            setDeviceType(1);
        } else if (isMacOs) {
            setDeviceType(2);
        }

        if (router.query.keyword) {
            setKeyword(router.query.keyword as string);
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey && event.key === '/') || (event.metaKey && event.key === '/')) {
                event.preventDefault();
                searchInputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <form onSubmit={handleSearch}>
            <div className="input input-sm w-[36px] lg:w-60">
                <i className="ki-filled ki-magnifier"></i>
                <input
                    ref={searchInputRef}
                    className="min-w-0"
                    placeholder="Search"
                    type="text"
                    defaultValue={router.query.keyword as string}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <span className="text-2sm text-gray-700 text-nowrap hidden lg:inline">
                    {deviceType === 1 ? "ctrl + /" : "cmd + /"}
                </span>
            </div>
        </form>
    )
}

export default HeaderSearch;