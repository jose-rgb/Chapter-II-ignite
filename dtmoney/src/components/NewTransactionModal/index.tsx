import { api } from '../../services/api';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg  from '../../assets/close.svg';
import  { Container,  TransactionButtonsContainer,  ButtonType } from './style';



//propriedades q o modal vai receber
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: ()  => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    //inputs.value
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    
    //tipo da transaction
    const [type, setType] = useState('deposit');

    //function para o submit do form
    function handleCreateNewTransaction(event: FormEvent) {
        /*
        prevenir o funcionamento padrao do form
        pois toda vez q um form e enviado um reload acontece
         */
        event.preventDefault();

        //salvar dados da transaction na api
        const data = {
            title,
            value,
            category,
            type,
        };

        api.post('/transactions', data)
    }

    return (
        <Modal isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
        >

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>cadastrar transação</h2>

                <input 
                    placeholder="Título"
                    value={title}  
                    //valor q esta no input
                    onChange={event => setTitle(event.target.value)}
                 />

                <input 
                    type="number" 
                    placeholder="Valor"
                    value={value}  
                    //valor q esta no input
                    onChange={event => setValue(Number(event.target.value))}
                />

                < TransactionButtonsContainer>
                    <ButtonType
                        type="button"
                        //arrow function que seta o type da operação
                        onClick={() => { setType('deposit') }}
                        //propriedade que diz se btn esta ativo
                        isActive={type === 'deposit'}
                        //cor 
                        activeColor = "green"
                    >
                        <img src={incomeImg} alt="+" />
                        <span>Entrada</span>
                    </ButtonType>

                    <ButtonType
                        type="button"
                        //seta o type da operação para retirada
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor = "red"
                    >
                        <img src={outcomeImg} alt="-" />
                        <span>Saída</span>
                    </ButtonType>
                </TransactionButtonsContainer>

                <input  
                    placeholder="Categoria" 
                    value={category}  
                    //valor q esta no input
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}


