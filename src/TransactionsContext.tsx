import { createContext, ReactNode, useEffect, useState } from "react";
import { http } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
  isDeposit: boolean;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt' | 'isDeposit'>

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    http.get("transections").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  console.log("ITENS", transactions)

  const createTransaction = (transaction: TransactionInput) => {

    http.post('/transections', transaction)
  }
   
  return (
    <TransactionContext.Provider value={{transactions, createTransaction}} >
      {children}
    </TransactionContext.Provider>
  )
}