import logo from './logo.svg';
import im from "./assets/login.png"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LeftContainer, LoginForm, MainHeader, RightContainer, SubHeader } from './insideComp/components';
import { CreatePlanScreen, PlayBack, SigninScreen, Telemetry } from './insideComp/screens';


function App() {
  return (
    <div className="App">
      <header className="App-header">
<CreatePlanScreen/>
      </header>
    </div>
  );
}

export default App;
