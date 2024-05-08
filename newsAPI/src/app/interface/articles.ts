export interface Articles {
    source: {
        id: string;
        name: string;
        author: string;
        title: string;
        description: string;
        url: string;
        content: string;
        }
}

export interface ExtendedArticles extends Articles {
    liked: boolean;
}