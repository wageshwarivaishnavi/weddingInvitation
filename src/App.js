
import Countdown from './components/Countdown';
import Footer from './components/Footer';

import Header from './components/Header';
import Organization from './components/Organization';

import Seeyou from './components/Seeyou';
import Sidebar from './components/Sidebar';
import Story from './components/Story';
import Where from './components/Where';

function App() {
  return (
    <>
      <Sidebar />
      <div id='oliven-main'>
        <Header />
      <Organization />
      <Story />
        <Countdown />
        
        <Where />
        <Seeyou />
         <Footer />
        
      </div>
    </>
  );
}

export default App;
