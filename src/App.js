import Sobre from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projetos from "./Components/Projetos";
import './Styles.scss';

function App() {

  return (
    <div>
      <Header/>
      <Home/>
      <Projetos/>
      <Sobre/>
      
    </div>
  );
}

export default App;
