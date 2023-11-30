export default interface ProjectInfo {
    name: string;
    description: string;
    relevance: number;
    imageUrl: string;
    urls: ProjectUrl[];
    tags: string[];
}

interface ProjectUrl {
    name: string;
    url: string;
}