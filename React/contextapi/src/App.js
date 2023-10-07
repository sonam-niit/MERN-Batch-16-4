import logo from './logo.svg';
import './App.css';
import GrandParent from './components/usecase1/GrandParent';
import MyGrandParent from './components/usecase2/MyGrandParent';
import { ThemeProvider } from './components/usecase3/TheameContext';
import ThemedComponent from './components/usecase3/ThemedComponent';
import { AuthProvide } from './components/usecase4/AuthContext';
import UserInfo from './components/usecase4/UserInfo';

function App() {
  return (
    <AuthProvide>
      <h1>Authentication App</h1>
      <UserInfo />
    </AuthProvide>
    // <div className="App">
    //   {/* Prop Drilling */}
    //   {/* <GrandParent /> */}

    //   {/* Using Context API */}
    //   {/* <MyGrandParent /> */}
    //   {/* Use Thme Context */}
    //   <ThemeProvider>
    //     <h1>Themed App</h1>
    //     <ThemedComponent />
    //   </ThemeProvider>
    // </div>
  );
}

export default App;
