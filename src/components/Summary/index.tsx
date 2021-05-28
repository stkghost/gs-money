import { useEffect, useState } from 'react'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { http } from '../../services/api'
import * as S from './styles'


export const Summary: React.FC = () => {

    useEffect(() => {
        http.get("transections").then((response) => {
          setItems(response.data);
        });
      }, []);

    const [items, setItems] = useState<any[]>([])
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalOutcome, setTotalOutcome] = useState(0)

    return (
        <S.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="income"/>
                </header>
                <strong>R$ {totalIncome}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="oucome"/>
                </header>
                <strong>R$ {totalOutcome}</strong>
            </div>
            <div className="highlight-bg">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="total"/>
                </header>
                <strong>R$ {totalAmount}</strong>
            </div>
        </S.Container>
    )
}