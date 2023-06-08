import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
    return () => {
      AOS.refresh();
    }
  }, []);
  return (
    <div className="App">

      <Header />
      <Body />
      <Footer />

    </div>
  );
}

export default App;
