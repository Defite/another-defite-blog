export interface IPost {
    frontmatter?: {
        title: string;
        description?: string;
        date: string;
    }
    fields: {
        slug: string;
    }
    excerpt: string;
}

export interface IPosts {
    items: IPost[];
}