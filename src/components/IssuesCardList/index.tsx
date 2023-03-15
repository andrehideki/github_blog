import { FormEvent, useContext, useState } from "react";
import { GithubContext } from "../../contexts/github";
import { diffInDays, diffInHours, diffInMinutes, diifFormatedPeriod } from "../../utils/dateFormatter";
import { Container, SearchForm, IssuesList, Issue } from "./styles";

export function IssuesCardList() {

    const [filter, setFilter] = useState("");
    const {githubIssues, searchIssues} = useContext(GithubContext);
    const amountOfIssues = githubIssues.length;

    function handleOnSubmit(event: FormEvent) {
        event.preventDefault();
        console.log(filter)
        searchIssues(filter);
    }

    return (
        <Container>
            <SearchForm onSubmit={handleOnSubmit}>
                <header>
                    <h2>Publicações</h2>
                    <span>
                        {amountOfIssues > 0 && <>
                            <span>{amountOfIssues == 1 && `${amountOfIssues} publicação`}</span>
                            <span>{amountOfIssues > 1 && `${amountOfIssues} publicações`}</span>
                            </>
                        }
                    </span>
                </header>
                <input 
                    value={filter}
                    onChange={({target}) => setFilter(target.value)}
                    placeholder="Buscar conteúdo"
                />
            </SearchForm>
            <IssuesList>
                {githubIssues.map(issue => {
                    const createdAt = issue.createdAt || new Date();
                    const createdTimeFormated = diifFormatedPeriod(new Date(), createdAt);

                    return (
                        <Issue 
                            key={issue.id}
                            to={`issue/${issue.id}`}>
                            <header>
                                <h1>{issue.title}</h1>
                                <time dateTime={createdAt.toISOString()}>{createdTimeFormated}</time>
                            </header>
                            <p>{issue.content}</p>
                        </Issue>
                    )
                })}
            </IssuesList>
        </Container>
    )
}