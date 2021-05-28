import { useEffect, useState } from "react";
import { http } from "../../services/api";
import * as S from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
  isDeposit: boolean;
}

export const TransacionTable: React.FC = () => {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    http.get("transections").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  console.log("ITENS", transactions)
   
  const data: Transaction[] = transactions
  
  return (
    <S.Container>
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
          
          {data.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td className={item.type}>
                  {/* {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(item.amount)} */}
                  {item.amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}
                </td>
                <td>{item.category}</td>
                <td>{item.createdAt}</td>
              </tr>
          ))}
          
        </tbody>
      </table>
    </S.Container>
  );
};
