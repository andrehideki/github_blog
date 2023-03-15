import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, Container, UserImg } from "./styles";
import { faArrowUpRightFromSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GithubContext } from "../../contexts/github";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub"
import {FaBuilding} from "@react-icons/all-files/fa/FaBuilding"


export function ProfileCard() {

    const {githubUser} = useContext(GithubContext);

    return (
        <Container>
        {githubUser && (
            <Card>
                <UserImg src={githubUser.avatarUrl} />
                <CardContent>
                    <header>
                        <h1>{githubUser.name}</h1>
                        <a href={githubUser.githubLink}>
                            GITHUB
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </header>
                    <p>{githubUser.description || "Sem descrição"}</p>
                    <footer>
                        <span>
                            <FaGithub/>
                            {githubUser.user}
                        </span>
                        <span>
                            <FaBuilding />
                            {githubUser.company || "Autônomo"}
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faUserGroup} />                        
                            {githubUser.followers}
                        </span>
                    </footer>
                </CardContent>
            </Card>
        )}
        </Container>
    )
}