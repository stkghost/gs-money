import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'
import * as S from './styles'


export const Summary: React.FC = () => {

    const {transactions} = useTransactions()

    const totalDeposit = transactions.reduce((acc, transaction) =>{
        if (transaction.type === 'deposit') {
            return acc + transaction.amount;
        }

        return acc;
    }, 0)

    const totalWithDraw = transactions.reduce((acc, transaction) =>{
        if (transaction.type === 'withdraw') {
            return acc + transaction.amount
        }

        return acc;
    }, 0)

    const totalAmount = totalDeposit - totalWithDraw;

    return (
        <S.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="income"/>
                </header>
                <strong>{totalDeposit.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="oucome"/>
                </header>
                <strong>{totalWithDraw.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}</strong>
            </div>
            <div className="highlight-bg">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="total"/>
                </header>
                <strong>{totalAmount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})}</strong>
            </div>
        </S.Container>
    )
}