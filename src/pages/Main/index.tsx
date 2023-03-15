import { IssuesCardList } from "../../components/IssuesCardList";
import { ProfileCard } from "../../components/ProfileCard";
import { Container } from "./styles";

export function MainPage() {
    return (
        <Container>
            <ProfileCard />
            <IssuesCardList />
        </Container>
    )
}