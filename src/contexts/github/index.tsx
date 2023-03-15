import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GithubIssue, GithubUser } from "../../@types/github";
import { githubApi } from "../../lib/axios";

interface GithubContextProps {
    children: ReactNode
}

interface GithubContextType {
    githubUser?: GithubUser;
    githubIssues: GithubIssue[];
    selectedGithubIssue?: GithubIssue;
    searchIssues: (filter?: string) => void;
}

export const GithubContext = createContext<GithubContextType>({} as GithubContextType)

export function GihubContextProvider({children}: GithubContextProps) {

    const [githubUser, setGithubUser] = useState<GithubUser>();
    const [githubIssues, setGithubIssues] = useState<GithubIssue[]>([]);
    const [selectedGithubIssue, setSelectedGithubIssue] = useState<GithubIssue>();

    useEffect(() => {
        loadGithubuser();
        searchIssues();
    }, []);

    const location = useLocation();

    useEffect(() => {
        const {pathname} = location;
        if (pathname.includes("/issue/")) {
            const issueId = pathname.split("/")[2];
            const issue = githubIssues.find(issue => issue.id == issueId);
            setSelectedGithubIssue(issue);
        }
    }, [location]);

    async function loadGithubuser() {
        const response = await githubApi.get(`users/andrehideki`);
        const {data} = response;
        setGithubUser({
            name: data.name,
            company: data.company || "",
            description: data.bio,
            followers: data.followers || 0,
            githubLink: data.html_url,
            user: data.login,
            avatarUrl: data.avatar_url
        });
    }

    async function searchIssues(filter?: string) {
        const response = await githubApi.get(`repos/andrehideki/github_blog/issues`);
        const {data} = response;
        setGithubIssues(data
            .filter((issue: any) => !filter || issue.title.includes(filter))
            .map((issue: any) => {
            return {
                id: issue.number,
                title: issue.title,
                content: issue.body,
                createdAt: issue.created_at? new Date(issue.created_at) : null,
                updatedAt: issue.updated_at? new Date(issue.updated_at): null,
                comments: issue.comments,
                url: issue.html_url
            }
        }))
    }




    return (
        <GithubContext.Provider value={{
            githubUser,
            selectedGithubIssue,
            githubIssues,
            searchIssues
        }}>
            {children}
        </GithubContext.Provider>
    )
}