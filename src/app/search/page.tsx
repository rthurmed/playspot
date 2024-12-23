import { albums } from "@/database";

export default async function SearchPage({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const queryString = (await searchParams)["q"]?.toString() || undefined;

    const filteredAlbums = queryString === undefined ? [] : albums
        .filter((a) => (
            a.title.toUpperCase().includes(queryString.toUpperCase()) ||
            a.artist.name.toUpperCase().includes(queryString.toUpperCase())
        ));

    return (
        <div className="max-w-5xl py-6 px-6 m-auto">
            {queryString === undefined ? (
                <div className="text-center">
                    <p>Type something in the search bar above to find your favorite albums</p>
                </div>
            ) : (
                <>
                    <div className="flex flex-row justify-between">
                        <h2>Results for "{queryString}"</h2>
                        <span>{filteredAlbums.length} albums</span>
                    </div>
                    <div className="flex flex-col">
                        {filteredAlbums.map((album) => (
                            <div
                                key={album.id}
                                className="card card-side bg-base-100 hover:bg-base-300"
                            >
                                <figure className="pl-6">
                                    <img src="https://placecats.com/300/300" alt="Album" className="rounded-2xl h-16 aspect-square" />
                                </figure>
                                <div className="card-body">
                                    <p>{album.title}</p>
                                    <p>{album.artist.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
