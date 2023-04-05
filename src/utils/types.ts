export type Film = {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer?: string,
    release_date: string,
    characters?: string[],
    planets?: string[],
    starships?: string[],
    vehicles?: string[],
    species?: string[],
    created?: string,
    edited?: string,
    url?: string,
    image?: string
}

export type Image = {
    src: string,
    alt: string
}