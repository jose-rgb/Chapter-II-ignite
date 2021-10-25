import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

         th {
            color: ${props => props.theme.colors.textbody};
            font-weight: 500;
            font-size: 1.2rem;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        
        td {
            font-size: 1.2rem;
            padding: 1rem 2rem;
            border: 0;
            background: ${props => props.theme.colors.shape};
            font-weight: 400;
            color: ${props => props.theme.colors.textbody};
            border-radius: 0.25rem;

            /*Primeiro td */
            &:first-child {
                color: ${props => props.theme.colors.texttitle};
            }

            &.deposit {
                color: ${props => props.theme.colors.green};
            }
            
            &.withdrawal{
                color: ${props => props.theme.colors.red};
            }
        }

    }
`