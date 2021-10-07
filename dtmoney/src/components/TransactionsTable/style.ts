import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

         th {
            color: var(--text-body);
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
            background: var(--shape);
            font-weight: 400;
            color: var(--text-body);
            border-radius: 0.25rem;

            /*Primeiro td */
            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdrawal{
                color: var(--red);
            }
        }

    }
`