import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        line-height: 160%;
    }

    body, html {
        background: ${props => props.theme.color.baseBackground};
        font-family: ${props => props.theme.font.family};

        color: ${props => props.theme.color.baseText};
    }

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme.color.baseTitle};
    }

    h2 {
        font-size: 1.125rem;
        color: ${props => props.theme.color.baseSubtitle};
    }

    span {
        color: ${props => props.theme.color.baseSpan};
    }

    label {
        color: ${props => props.theme.color.baseLabel};
    }

    input {
        width: 100%;
        background: ${props => props.theme.color.baseInput};
        color: ${props => props.theme.color.baseText};
        border: none;
        font-size: 1rem;
        padding: 0.75rem;
        border-radius: 7px;
        outline: 1px solid ${props => props.theme.color.baseLabel};

        :focus {
            outline: 1px solid ${props => props.theme.color.blue};
            transition: .2s;
        }


        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: ${props => props.theme.color.baseLabel};
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: ${props => props.theme.color.baseLabel};
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: ${props => props.theme.color.baseLabel};
        }   
    }

    p {
        color: ${props => props.theme.color.baseText};
    }

    a {
        display: flex;
        gap: .5rem;
        font-weight: bold;
        align-items: center;
        text-decoration: none;
        font-size: 0.75rem;
        color: ${props => props.theme.color.blue};
    }
`;