import LogoImg from '../../assets/logo.svg'
import * as S from './styles'


export const Header = () => {

    return (
        <S.Container>
            <S.Content>
                <img src={LogoImg} alt="gs-money" />
                <button type="button">Nova Transação</button>
            </S.Content>
        </S.Container>
    )
}