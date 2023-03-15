import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IssueCard } from "../../components/IssueCard";
import { GithubContext } from "../../contexts/github";
import { Container, Issue } from "./sytles";

export function IssuePage() {
    
    const {selectedGithubIssue} = useContext(GithubContext);

    const strongRegex = /\*\*(.+)\*\*/g
    const italicRegex = /_(.+)_/g
    const codeRegex = /`(.*?)`/gs
    const formatedIssueContent = (selectedGithubIssue?.content || "")
        .replaceAll("\n", "<br>")
        .replace(strongRegex, '<strong>$1</strong>')
        .replace(italicRegex, '<i>$1</i>')
        .replace(codeRegex, '<code>$1</code>')
        
    console.log(selectedGithubIssue?.content)

    return (
        <Container>
            <IssueCard />
            <Issue dangerouslySetInnerHTML={{__html: formatedIssueContent}}>
            </Issue>
        </Container>
    )
}