import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark'
import {usePersistedState} from './styles/themes/usePersistedState'
import { TransactionsProvider } from "./hooks/useTransactions";

//definindo qual e o root da aplicação para a lib react-modal
Modal.setAppElement('#root');


export function App() {
  //definindo modal como fechado
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  //tema
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  //seta o modal para aberto
  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true);
  }

  //seta o modal para fechado
  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen(false);
  }

  //verifica o tema e o troca
  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark: light)
  }


  return (
    <ThemeProvider theme={theme}>
        <TransactionsProvider>
          <Header onOpenNewTransactionModal ={handleOpenNewTransactionModal} toggleTheme={toggleTheme}/>
          <Dashboard />
          <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
          <GlobalStyle />
        </TransactionsProvider>
    </ThemeProvider>
  );
}
 
  