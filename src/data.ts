import { randomUUID } from "crypto";

export const albums: Album[] = [
    {
        id: randomUUID(),
        title: "What's Going On",
        artist: {
            id: randomUUID(),
            name: "Marvin Gaye"
        }
    },
    {
        id: randomUUID(),
        title: "The Beach Boys",
        artist: {
            id: randomUUID(),
            name: "Pet Sounds",
        }
    },
    {
        id: randomUUID(),
        title: "Joni Mitchell",
        artist: {
            id: randomUUID(),
            name: "Blue",
        }
    },
    {
        id: randomUUID(),
        title: "Stevie Wonder",
        artist: {
            id: randomUUID(),
            name: "Songs in the Key of Life",
        }
    },
    {
        id: randomUUID(),
        title: "The Beatles",
        artist: {
            id: randomUUID(),
            name: "Abbey Road",
        }
    },
    {
        id: randomUUID(),
        title: "Nirvana",
        artist: {
            id: randomUUID(),
            name: "Nevermind",
        }
    },
    {
        id: randomUUID(),
        title: "Fleetwood Mac",
        artist: {
            id: randomUUID(),
            name: "Rumours",
        }
    },
    {
        id: randomUUID(),
        title: "Prince and the Revolution",
        artist: {
            id: randomUUID(),
            name: "Purple Rain",
        }
    },
    {
        id: randomUUID(),
        title: "Bob Dylan",
        artist: {
            id: randomUUID(),
            name: "Blood on the Tracks",
        }
    },
    {
        id: randomUUID(),
        title: "Lauryn Hill",
        artist: {
            id: randomUUID(),
            name: "The Miseducation of Lauryn Hill",
        }
    },
    {
        id: randomUUID(),
        title: "The Beatles",
        artist: {
            id: randomUUID(),
            name: "Revolver",
        }
    },
    {
        id: randomUUID(),
        title: "Michael Jackson",
        artist: {
            id: randomUUID(),
            name: "Thriller",
        }
    },
    {
        id: randomUUID(),
        title: "Aretha Franklin",
        artist: {
            id: randomUUID(),
            name: "I Never Loved a Man the Way I Love You",
        }
    },
];