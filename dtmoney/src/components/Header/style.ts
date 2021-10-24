import styled from "styled-components";

export const Container = styled.header`

    background: ${props => props.theme.colors.blue};


`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        justify-content: center;

    }

    button {
        margin-left: 1rem;
        font-size: 1rem;
        color: #FFF;
        background: ${props => props.theme.colors.bluelight};
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`
