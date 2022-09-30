import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container/Container';
import Questions from './Components/Questions/Questions';


function App() {
  return (
    <div className="App">
      <Container></Container>
      <Questions></Questions>
    </div>
  );
}

export default App;
