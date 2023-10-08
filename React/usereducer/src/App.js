import logo from './logo.svg';
import './App.css';
import Counter from './usecase1/Counter';
import Bugs from './usecase2/bugs';
import SimpleForm from './usecase3/SimpleForm';
import ShoppingCart from './usecase4/ShoppingCart';

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Bugs />
      <SimpleForm /> */}
      <ShoppingCart />
    </div>
  );
}

export default App;
