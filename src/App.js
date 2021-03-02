import './styles/global.css';

import Header from './page-division/Header';
import Features from './page-division/Features';
import Download from './page-division/Download';
import Questions from './page-division/Questions';
import Footer from './page-division/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Features />
      <Download />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;