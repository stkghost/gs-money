import { useContext } from 'react';
import { TransactionContext } from "../../TransactionsContext";
import * as S from "./styles";

export const TransacionTable: React.FC = () => {

  const {transactions} = useContext(TransactionContext)

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
          
          {transactions.map((item) => (
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
