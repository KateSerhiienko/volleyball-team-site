import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LastEvent from './components/LastEvent';
import Events from './components/Events';
import Team from './components/Team';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <LastEvent />
        <Events />
        <Team />
      </main>

      <footer>
        <Contacts />
      </footer>
    </>
  );
};

export default App;
