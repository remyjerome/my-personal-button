import './App.css';
import Modal from './lib/components/Modal';

function App() {
  return (
    <div className="App">
      <Modal isOpen={true} allowEscape={true}>
        <h1>Modal</h1>
      </Modal>
    </div>
  );
}

export default App;
