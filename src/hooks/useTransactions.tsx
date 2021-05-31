import dayjs from "dayjs";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { http } from "../services/api";

//Foi criado a interface Transaction para typar o resultado
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
  isDeposit: boolean;
}

//Foi Typado o resultado que vem dos inputs do modal, passando como children para ser passado para o contexto
interface TransactionsProviderProps {
  children: ReactNode;
}

//Aqui foi criado o contexto do Transaction passando o "Transaction" e a função createTransaction que faz o get da API
interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

//Cria um type passando tudo que vem de Transaction menos o id, createdAt e isDeposit. TransactionInput é usado como o tipo da transaction na função createTransaction
type TransactionInput = Omit<Transaction, 'id' | 'createdAt' | 'isDeposit'>

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

//TransactionsProvider é o provider com todas as informações que podem ser usadas em outros componentes
export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    http.get("transections").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  console.log("ITENS", transactions)

  async function createTransaction(transactionInput: TransactionInput) {

    const response = await http.post('/transections', {
      ...transactionInput,
      createdAt: dayjs().format('DD-MM-YYYY')
    })

    const {transaction} = response.data

    setTransactions([...transactions, transaction])
  }
   
  return (
    <TransactionContext.Provider value={{transactions, createTransaction}} >
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionContext)

  return context
}