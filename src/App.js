import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
