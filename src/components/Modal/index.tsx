import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { http } from '../../services/api';
import * as S from './styles';

interface NewModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewModal = ({isOpen, onRequestClose}: NewModalProps) => {

  const [type, setType] = useState<string>('')
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('')

  const data = {
    title,
    value,
    type,
    category
  }

  

  const handleNewTransaction = (e: FormEvent) => {
    e.preventDefault()
    http.post('/transections', data)
  }
  
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="overlay-modal"
      className="content-modal"
    >
    <button type="button" onClick={onRequestClose} className="close-btn">
      <img src={closeImg} alt="close modal"/>
    </button>
    <S.Container onSubmit={handleNewTransaction}>
      <h2>Cadastrar transação</h2>
      <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)}/>
      <input placeholder="Valor"value={value} onChange={e => setValue(Number(e.target.value))}/> 

      <S.ChecksContainer>
        <S.CheckButton 
          type="button"
          // className="income"
          onClick={() => setType('deposit')}
          isActive={type === 'deposit'}
          activeColor="green"
        >
          <img src={IncomeImg} alt="income"/>
        </S.CheckButton>

        <S.CheckButton
          type="button"
          // className="outcome"
          onClick={() => setType('withdraw')}
          isActive={type === 'withdraw'}
          activeColor="red"
        >
          <img src={OutcomeImg} alt="outcome" />
        </S.CheckButton>
      </S.ChecksContainer>
      <input placeholder="Categoria" value={category} onChange={e => setCategory(e.target.value)}/>

      <S.SubmitBtn type="submit" >Cadastrar</S.SubmitBtn>
    </S.Container>
      
      
    </Modal>
  )
}