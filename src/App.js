import Navbar from './Navbar';
import About from './About';
import Calismalar from './Calismalar';
import Iletisim from './Iletisim';
import './App.scss';
import YorumEkle from './YorumEkle';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Calismalar />
      <Iletisim />
      <YorumEkle />
      <Footer />
    </>
  );
}

export default App;
