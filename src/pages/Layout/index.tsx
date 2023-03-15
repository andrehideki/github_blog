import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import { defaultTheme } from "../../styles/theme";
import { Container, Header, LogoImg, Main } from "./styles";
import logo from "../../assets/logo.svg";
import cover from "../../assets/cover.svg";
import { GihubContextProvider } from "../../contexts/github";

export function LayoutPage() {
    return (
        <Container>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Header background={cover}>
                    <LogoImg src={logo} />
                </Header>
                <Main>
                    <GihubContextProvider>
                        <Outlet />
                    </GihubContextProvider>
                </Main>
            </ThemeProvider>
        </Container>
    )
}