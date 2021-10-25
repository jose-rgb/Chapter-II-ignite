import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

//especificando que componentre recebe qualquert conteudo valido
interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionInput {
    title: string;
    amount: number;
    type: string;
    category: string;
}

//qial conteudo tem dentro do context
interface TransactionsContextData {
    //um array 
    transactions: Transaction[];
    //uma function
    createTransaction: (Transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
     //array de transactions vazio
     const [transactions, setTransactions] = useState<Transaction[]>([]);
   
     useEffect(()=>{
         api.get('transactions').then(response => setTransactions(response.data.transactions))
     }, []);   

    //salvar dados da transaction na api
    async function createTransaction(transactionInput: TransactionInput) {
        
        //salvar todos os dados dos inputs + a data 
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data;

        //copiar as transactions q ja existem e add a nova ao final
        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

     return (
         //repassando as transactions e a function de salvar na api
         <TransactionsContext.Provider value={{ transactions,  createTransaction}}>
             {children}
         </TransactionsContext.Provider>
     );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}