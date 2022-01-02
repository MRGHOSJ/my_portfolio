import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <ReactFullpage
    scrollOverflow={true}
    scrollingSpeed = {1000}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Home />
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section vertical-scrolling">
            <Portfolio />
          </div>
          <div className="section">
            <Contact />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}

export default App;
