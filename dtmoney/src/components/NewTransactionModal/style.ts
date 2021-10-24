import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
    h2 {
        color: ${props => props.theme.colors.texttitle};
        font-size: 1.5rem;
        margin-bottom: 2rem;
        font-family: 'Poppins';
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: ${props => props.theme.colors.textbody};
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: ${props => props.theme.colors.green};
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

    }
`;

export const TransactionButtonsContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 01.5rem;

   
`

//propriedades do btn
interface ButtonTypeProps {
    isActive: boolean;
    //essa propriedade pode receber g.. ou r..
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D'
}

export const ButtonType = styled.button<ButtonTypeProps >`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    //muda de cor de acordo com a propriedade, se ta ativa ou n
    //if ternario q tedermina a cor
    background: ${(props)=> props.isActive ? transparentize(0.7, colors[props.activeColor]) : 'trasnparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    //escurecendo 10% a cor:
    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
        height: 20px;
        width: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: ${props => props.theme.colors.texttitle};
    }
    
`;
