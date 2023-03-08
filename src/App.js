import './App.css';
import { Button } from 'my-personal-button'
function App() {
  return (
    <div className="App">
      <Button kind="primary" id="1" type="button" name="button" value="button" disabled={false} handleClick={() => console.log('clicked')} label="Click Me" />
    </div>
  );
}

export default App;
