"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

export function NavbarSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const inputRef = useRef<HTMLInputElement>(null);

    const [query, setQuery] = useState(searchParams.get("q") || "");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        router.push("/search?q=" + query);
    }

    function handleReset(e: FormEvent) {
        e.preventDefault();
        setQuery("");
        router.push("/search");
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    }

    function handleFocus() {
        router.push("/search?q=" + query);
    }

    return (
        <form
            className="lg:w-96 w-full"
            onSubmit={handleSubmit}
            onReset={handleReset}
        >
            <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value || '')}
                        onFocus={handleFocus}
                    />
                    {query.length > 0 && (
                        <button
                            className="btn btn-sm btn-ghost btn-circle"
                            type="reset"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                            </svg>
                        </button>
                    )}
                    <button
                        className="btn btn-sm btn-ghost btn-circle"
                        type="submit"
                    >
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
                    </button>
                </label>
            </div>
        </form>
    )
}
