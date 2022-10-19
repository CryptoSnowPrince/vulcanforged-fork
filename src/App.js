import { BrowserRouter } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen/HomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
function App() {
  return (
    <main>
      <BrowserRouter>
        <HomeScreen />
      </BrowserRouter>
    </main>
  );
}

export default App;
