 

 import {Header} from './components';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';

 export const App = () => {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}