import  * as S from './styles'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'


export const Summary = () => {
    return (
        <S.Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={IncomeImg} alt="income"/>
                </header>
                <strong>R$10000</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={OutcomeImg} alt="oucome"/>
                </header>
                <strong>R$230</strong>
            </div>
            <div className="highlight-bg">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="total"/>
                </header>
                <strong>R$770</strong>
            </div>
        </S.Container>
    )
}