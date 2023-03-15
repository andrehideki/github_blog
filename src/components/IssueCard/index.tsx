import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Container } from "./styles";
import { faArrowUpRightFromSquare, faUserGroup, faAngleLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GithubContext } from "../../contexts/github";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub"
import { Link } from "react-router-dom";
import { diifFormatedPeriod } from "../../utils/dateFormatter";

export function IssueCard() {

    const {githubUser, selectedGithubIssue} = useContext(GithubContext);
    const userAndIssueIsPresent = !!(githubUser && selectedGithubIssue);

    const createdAt = selectedGithubIssue?.createdAt || new Date();
    const createdTimeFormated = diifFormatedPeriod(new Date(), createdAt);

    const formatedComments = `${selectedGithubIssue?.comments} ${selectedGithubIssue?.comments == 1? 'comentário' : 'comentários'}`
    
    return (
        <Container>
        {userAndIssueIsPresent && (
            <Card>
                <CardContent>
                    <header>
                        <Link to={"/"}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                            VOLTAR
                        </Link>
                        <a href={selectedGithubIssue.url}>
                            VER NO GITHUB
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </header>
                    <h1>{selectedGithubIssue.title}</h1>
                    <footer>
                        <span>
                            <FaGithub/>
                            {githubUser.user}
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faCalendarDay} />
                            <time>{createdTimeFormated}</time>
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faComment} />                        
                            {formatedComments}
                        </span>
                    </footer>
                </CardContent>
            </Card>
        )}
        </Container>
    )
}