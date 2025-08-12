import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TypographyStyles from './pages/TypographyStyles/TypographyStyles';
import ColorStyles from './pages/ColorStyles/ColorStyles';
import SimpleComponents from './pages/SimpleComponents';
import Home from './pages/Home'; // Import Home page
import PageNav from './components/PageNav/PageNav';

function App() {
  return (
    <BrowserRouter>
      <PageNav>
        <Link to="/">Home</Link>
        <Link to="/TypographyStyles">TypographyStyles</Link>
        <Link to="/ColorStyles">ColorStyles</Link>
        <Link to='/SimpleComponents'>Simple Components</Link>
      </PageNav>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/TypographyStyles" element={<TypographyStyles />} /> {/* TypographyStyles page route */}
        <Route path="/ColorStyles" element={<ColorStyles />} /> {/* TypographyStyles page route */}
        <Route path="/SimpleComponents" element={<SimpleComponents />} /> {/* TypographyStyles page route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;