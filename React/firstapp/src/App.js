import { Greetings } from "./components/session2/greeting";
import { ProductList } from "./components/session2/productlist";

function App() {

  return (
    <div>
      {/* Passing Props from App component to 
      Greetings Component */}
      <Greetings name="Sonam Soni" 
      message="Hello EveryOne"/>
      <ProductList />
    </div>
  );
}

export default App;
