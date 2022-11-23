import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import { NavBar } from './components/NavBar/NavBar.js'
import './components/NavBar/NavBar.scss'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Items"}/>
    </div>
  );
}

export default App;
