"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export function NavbarSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [query, setQuery] = useState(searchParams.get("q") || "");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        router.push("/search?q=" + query);
    }

    function handleFocus() {
        router.push("/search?q=" + query);
    }

    return (
        <form
            className="lg:w-96 w-full"
            onSubmit={handleSubmit}
        >
            <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value || '')}
                        onFocus={handleFocus}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
        </form>
    )
}
