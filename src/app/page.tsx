import { albums } from "@/database";
import { TabSelector } from "./TabSelector";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="px-6">
        <div className="hero rounded-xl bg-base-300 py-24">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6">
        <TabSelector />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-xl:grid-cols-8">
        {albums.map((album) => (
          <div
            key={album.id}
            className="card bg-base-100 hover:bg-base-300 shadow-xl"
          >
            <div className="py-6 px-6">
              <figure>
                <img src="https://placecats.com/300/300" alt="Album" className="rounded-2xl w-full aspect-square bg-stone-800 text-center p-4" />
              </figure>
            </div>
            <div className="card-body pt-0">
              <h2 className="card-title">{album.title}</h2>
              <p>{album.artist.name}</p>
              <div className="card-actions justify-end">
                <Link
                  className="btn btn-primary"
                  href={`/album/${album.id}`}
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
