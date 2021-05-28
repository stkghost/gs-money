import LogoImg from "../../assets/logo.svg";
import * as S from "./styles";

interface HeaderProps {
  onOpenNewModal: () => void;
}

export const Header = ({ onOpenNewModal }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <img src={LogoImg} alt="gs-money" />
        <button type="button" onClick={onOpenNewModal}>
          Nova Transação
        </button>
      </S.Content>
    </S.Container>
  );
};
