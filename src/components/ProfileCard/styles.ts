import styled from "styled-components";


export const Container = styled.div`


`;

export const Card = styled.div`
    display: flex;
    gap: 2rem;
    background: ${props => props.theme.color.baseProfile};
    border-radius: 7px;
    padding: 2.5rem;
    box-shadow: 0 2px 28px rgba(0, 0, 0, .2);

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;

        > header {
            display: flex;
            justify-content: space-between;

            a {
                gap: .5rem;
            }
        }


    }
`;

export const CardContent = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    > header {
        display: flex;
        justify-content: space-between;

        a {
            gap: .5rem;
        }
    }

    > footer {
        display: flex;
        gap: 1.5rem;

        span {
            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }
`

export const UserImg = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
`