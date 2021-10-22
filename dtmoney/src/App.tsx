import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from "./components/NewTransactionModal";

//definindo qual e o root da aplicação para a lib react-modal
Modal.setAppElement('#root');


export function App() {
  //definindo modal como fechado
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  //seta o modal para aberto
  function handleOpenNewTransactionModal () {
      setIsNewTransactionModalOpen(true);
  }

  //seta o modal para fechado
  function handleCloseNewTransactionModal () {
      setIsNewTransactionModalOpen(false);
  }


  return (
    <>
     <Header onOpenNewTransactionModal ={handleOpenNewTransactionModal}/>
     <Dashboard />
     <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
     <GlobalStyle />
    </>
  );
}
 
  