export interface GithubUser {
    name: string;
    user: string;
    description: string;
    githubLink: string;
    company: string;
    followers: number;
    avatarUrl: string;
}

export interface GithubIssue {
    id: string;
    title: string;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
    comments: number;
    url: string;
}