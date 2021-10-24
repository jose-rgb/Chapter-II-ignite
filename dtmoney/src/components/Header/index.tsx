import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';
import Switch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import dark from '../../styles/themes/dark';

//função que n recebe nenhum parametro e n retorna nd
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
    toggleTheme: () => void;
}

export function Header({onOpenNewTransactionModal, toggleTheme}: HeaderProps) {
    //pegando o thema
    const title = useContext(ThemeContext)


    return (
        <Container>
            
            <Content>
                <img src={logoImg} alt="dt money" />
                <div>
                    <Switch
                        onChange={toggleTheme}
                        checked = {title === dark}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={14}
                        width={46}
                        handleDiameter={20}
                        offColor="#12090C"
                        onColor="#5429CC"
                    />
                    <button type="button" onClick={  onOpenNewTransactionModal}>
                        Nova transação
                    </button>
                </div>
                
            </Content>
        
        </Container >
    )
}