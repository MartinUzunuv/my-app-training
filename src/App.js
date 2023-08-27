import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import Page2 from './components/Page2';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
