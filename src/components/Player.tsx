export function Player() {
    return (
        <div className="fixed left-0 bottom-0 w-screen flex flex-row items-center gap-4 bg-base-100 p-6 rounded-t-2xl">
            <div className="pl-6">
                <figure>
                    <img src="https://placecats.com/300/300" alt="Album" className="rounded-2xl h-16 aspect-square bg-stone-800 text-center p-2" />
                </figure>
            </div>
            <button className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                </svg>
            </button>
            <button className="btn btn-ghost btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
            </button>
            <button className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
            </button>
            <div className="flex-grow">
                <div className="flex justify-between pb-2">
                    <p>
                        Music - The Beatles
                    </p>
                    <p>
                        3:45
                    </p>
                </div>
                <input type="range" min="0" max="100" className="range range-xs" />
            </div>
        </div>
    )
}
