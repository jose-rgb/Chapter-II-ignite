import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    /*3 colunas de mesmo tamanho */
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -9rem;
    font-family: 'Poppins';

    div {
        background: ${props => props.theme.colors.shape};
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: ${props => props.theme.colors.texttitle};

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    
        &.grenn-background {
            background: ${props => props.theme.colors.green};
            color: #FFF;
        }
        
    }
`