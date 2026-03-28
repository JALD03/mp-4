export type Types = {
    id: number;
    name: string;
    description: string;
    thumbnails: {
        url: string;
        size: string;
    }[];
    tags: string[];
    family: {
        name: string;
    };
};