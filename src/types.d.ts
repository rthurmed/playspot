interface Artist {
    id: string;
    name: string;
}

interface Album {
    id: string;
    title: string;
    artist: Artist;
}
