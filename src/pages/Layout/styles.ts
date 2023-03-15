import styled from "styled-components";


export const Container = styled.div`


`;

interface HeaderProps {
    background: string;
}

export const Header = styled.header<HeaderProps>`
    position: relative;
    width: 100%;
    height: 18.5rem;
    background-image: url(${props => props.background});
`;


export const LogoImg = styled.img`
    position: absolute;
    left: 50%;
    top: 4rem;
    transform: translate(-50%);
`;

export const Main = styled.main`
    position: relative;
    width: 100%;
    max-width: 864px;
    margin: -5.5rem auto;
    z-index: 999;
    padding: 0 1rem;
    padding-bottom: 2rem;
`