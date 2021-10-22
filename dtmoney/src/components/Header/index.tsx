import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style'

//função que n recebe nenhum parametro e n retorna nd
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={  onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
            
        </Container >
    )
}