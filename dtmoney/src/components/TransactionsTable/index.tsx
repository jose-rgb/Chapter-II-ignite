import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
    useEffect(()=>{
        api.get('/transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
               <thead>
                   <tr>
                       <th>Título</th>
                       <th>Valor</th>
                       <th>Categoria</th>
                       <th>Data</th>
                   </tr>
               </thead>

                <tbody>
                    <tr>
                        <td>aluguel</td>
                        <td className="withdrawal">-R$ 12000</td>
                        <td>despesas</td>
                        <td>07/02/2020</td>
                    </tr>

                    <tr> 
                        <td>Desenvolvimento web</td>
                        <td className="deposit">R$ 12000</td>
                        <td>dev</td>
                        <td>20/02/2020</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    )
}