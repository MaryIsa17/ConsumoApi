import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Api from './pages/api';
import Maps from './pages/maps';
import Register from './pages/register';

import Nav from './components/nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/api" element={<Api />}/>
        <Route path="/maps" element={<Maps />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <footer className="bg-black text-center py-5">
            <div className="container px-5">
                <div className="text-white-50 small">
                    <div className="mb-2">&copy; Your Website 2021. All Rights Reserved.</div>
                    <a href="#!">Privacy</a>
                    <span className="mx-1">&middot;</span>
                    <a href="#!">Terms</a>
                    <span className="mx-1">&middot;</span>
                    <a href="#!">FAQ</a>
                </div>
            </div>
        </footer>
    </>
  );
}

export default App;
