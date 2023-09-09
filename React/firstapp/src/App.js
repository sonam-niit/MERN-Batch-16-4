import logo from '../src/logo.svg';
import { Counter } from './components/counter';
import { Header } from './components/header';
import {NavbarComp} from './components/navbar';
import { Slider } from './components/slider';
import { UserDetails } from './components/userDetails';

function App() {

  const name="Sonam Soni";
  return (
    <div>
      <Header />
      <Counter />
      <UserDetails />
      <NavbarComp />
      <Slider />
    </div>
  );
}

export default App;
