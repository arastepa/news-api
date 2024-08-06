export interface Info {
    status: string;
    sources: [
        {
            id: string;
            name: string;
            descr: string;
            url: string;
            category: string;
            country: string;
            language: string;
        },
    ];
}

export interface Source {
    id: string;
    name: string;
}

export interface InfoArt {
    status: string;
    totalResults: number;
    articles: [
        {
            author: string;
            content: string;
            descr: string;
            publishedAt: string;
            source: Source;
            title: string;
            url: string;
            urlToImage: string;
        },
    ];
}
