import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewModal } from './components/Modal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root')


function App() {

  const [open, setOpen] = useState<boolean>(false);

  function handleModal() {
    setOpen(!open);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewModal={handleModal}/>
      <Dashboard />
      <NewModal 
        isOpen={open}
        onRequestClose={handleModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
