import { useContext } from 'react'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionsContext'
import * as S from './styles'


export const Summary: React.FC = () => {

    const {transactions} = useContext(TransactionContext);

    const totalAmount = transactions.reduce((acc, transaction) =>{
        if (transaction.type === 'deposit') {
            return acc + transaction.amount;
        }
    })

    return (
        <S.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="income"/>
                </header>
                <strong>R$ </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="oucome"/>
                </header>
                <strong>R$ </strong>
            </div>
            <div className="highlight-bg">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="total"/>
                </header>
                <strong>R$ </strong>
            </div>
        </S.Container>
    )
}