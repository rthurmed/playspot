"use client";

import { NavbarSearch } from "@/components/NavbarSearch";
import { albums } from "@/database";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function SearchPage() {
    return (
        <Suspense>
            <SearchPageComponent />
        </Suspense>
    )
}

function SearchPageComponent() {
    const searchParams = useSearchParams();
    const queryString = searchParams.get("q")?.toString() || undefined;

    const filteredAlbums = queryString === undefined ? [] : albums
        .filter((a) => (
            a.title.toUpperCase().includes(queryString.toUpperCase()) ||
            a.artist.name.toUpperCase().includes(queryString.toUpperCase())
        ));
    
    const currentUrl = "/search?q=" + queryString;

    return (
        <div className="max-w-5xl py-6 px-6 m-auto">
            <div className="md:hidden pb-6">
                <NavbarSearch />
            </div>
            {queryString === undefined ? (
                <div className="text-center">
                    <p>Type something in the search bar above to find your favorite albums</p>
                </div>
            ) : (
                <>
                    <div className="flex flex-row justify-between">
                        <h2>Results for &quot;{queryString}&quot;</h2>
                        <span>{filteredAlbums.length} albums</span>
                    </div>
                    <div className="flex flex-col">
                        {filteredAlbums.map((album) => (
                            <div
                                key={album.id}
                                className="card card-side bg-base-100 hover:bg-base-300"
                            >
                                <div className="pl-6 flex align-middle">
                                    <figure>
                                        <img src="https://placecats.com/300/300" alt="Album" className="rounded-2xl h-16 aspect-square bg-stone-800" />
                                    </figure>
                                </div>
                                <div className="card-body">
                                    <div className="flex flex-row">
                                        <div className="flex-grow">
                                            <p>{album.title}</p>
                                            <p>{album.artist.name}</p>
                                        </div>
                                        <Link
                                            className="btn btn-primary"
                                            href={`/album/${album.id}?back=${encodeURIComponent(currentUrl)}`}
                                        >
                                            Explore
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
