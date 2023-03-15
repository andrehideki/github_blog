import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    margin-top: 7.5rem;
`;

export const SearchForm = styled.form`
    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.75rem;
    }
`;

export const IssuesList = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`

export const Issue = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100% !important;
    max-width: 416px;
    max-height: 260px;
    min-height: 260px;
    background: ${props => props.theme.color.basePost};
    padding: 2rem;
    border-radius: 7px;
    overflow-x: hidden;
    cursor: pointer;

    header {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    p {
        margin-top: 1.25rem; 
        text-overflow:ellipsis;
        overflow:hidden;
        // Addition lines for 2 line or multiline ellipsis
        display: -webkit-box !important;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        white-space: normal;
        font-size: 1rem;
    }

    :hover {
        outline: 3px solid ${props => props.theme.color.baseSpan};
        transition: .2s;
    }
`