import { useRouteError } from "react-router-dom";
import { Container } from "./styles";

export function ErrorPage() {
    const error: any = useRouteError();
    return (
        <Container>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </Container>
    )
}