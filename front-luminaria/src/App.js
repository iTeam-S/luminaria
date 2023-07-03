import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { useEffect } from 'react';
import Contact from './Contact';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css';

function App() {
  <Router>
    <Route path="/contact" component={Contact} />
  </Router>
  useEffect(() => {
    AOS.init({
      duration: 1200
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
