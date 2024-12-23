import { BackButton } from "@/components/BackButton";
import { albums } from "@/database";
import { redirect } from "next/navigation";

export default async function AlbumOnePage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id;
    const album = albums.find((album) => album.id == id);

    if (album === undefined) {
        redirect("/error/not-found");
    }

    const songs = Array(10).fill(undefined).map((v, k) => k);

    return (
        <div className="flex flex-col gap-6 max-w-5xl py-6 px-6 m-auto">
            <div>
                <BackButton default="/" />
            </div>
            <div className="flex flex-row items-stretch gap-6">
                <figure>
                    <img src="https://placecats.com/300/300" alt="Album" className="rounded-2xl w-full aspect-square" />
                </figure>
                <div className="flex flex-col gap-4 flex-grow">
                    <p>
                        Album
                    </p>
                    <h1 className="text-4xl font-bold">{album.title}</h1>
                    <p>
                        {album.artist.name}
                    </p>
                    <div className="flex-grow"></div>
                    <div className="flex flex-row justify-end">
                        <button className="btn btn-ghost rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path d="M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                            </svg>
                        </button>
                        <button className="btn rounded-full btn-primary">
                            <span>Play</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h2>Songs</h2>
                <div>
                    {songs.map((v) => (
                        <div
                            key={v}
                            className="card bg-base-100 hover:bg-base-300"
                        >
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit</p>
                                <p>3:45</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
