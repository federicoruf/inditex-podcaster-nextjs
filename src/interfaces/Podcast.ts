export interface Podcast {
    id: {
        attributes: { "im:id": string };
    },
    "im:name": { label: string };
    "im:artist": { label: string };
    "im:image": { label: string }[];
    summary: { label: string };
}
