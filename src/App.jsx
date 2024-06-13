import Navbar from './components/Navbar';
import Upcoming from './components/Upcoming';
import Hero from './components/Hero';
import Events from './components/Events';
import Team from './components/Team';
import Contacts from './components/Contacts';

const App = () => {
  const data = {
    upcomingEvents: [
      {
        title:
          'Sächsische Hochschulmeisterschaften im Beachvolleyball Männer und Frauen',
        date: '09.07.2024',
        time: '09:00',
        place: 'Dresden, Sportanlage des Dresdner SSV',
      },
      {
        title: 'Sächsische Hochschulmeisterschaften im Beachvolleyball mixed',
        date: '10.07.2024',
        time: '09:00',
        place: 'Dresden, Sportanlage des Dresdner SSV',
      },
      {
        title:
          'Sächsische Hochschulmeisterschaften im Beachvolleyball Männer und Frauen',
        date: '13.06.2024',
        time: '09:00',
        place: 'Dresden, Sportanlage des Dresdner SSV',
      },
    ],
    teamMembers: [
      {
        name: 'Hans Müller',
        dateOfBirth: '12.03.1985',
        position: 'Coach',
      },
      {
        name: 'Friedrich Becker',
        dateOfBirth: '22.07.1976',
        position: 'Captain',
      },
      {
        name: 'Klaus Wagner',
        dateOfBirth: '14.05.1994',
        position: 'Setter',
      },
      {
        name: 'Jürgen Schmidt',
        dateOfBirth: '30.11.1968',
        position: 'Libero',
      },
      {
        name: 'Ursula Fischer',
        dateOfBirth: '08.01.1989',
        position: 'Outside Hitter',
      },
      {
        name: 'Monika Weber',
        dateOfBirth: '19.04.1972',
        position: 'Opposite Hitter',
      },
      {
        name: 'Helga Hoffmann',
        dateOfBirth: '03.09.2003',
        position: 'Middle Blocker',
      },
      {
        name: 'Heinz Schäfer',
        dateOfBirth: '15.06.1997',
        position: 'Team Mascot',
      },
      {
        name: 'Brigitte Wolf',
        dateOfBirth: '25.12.1962',
        position: 'Statistician',
      },
      {
        name: 'Günther Meyer',
        dateOfBirth: '07.08.2001',
        position: 'Assistant Coach',
      },
      {
        name: 'Erika Bauer',
        dateOfBirth: '11.10.1982',
        position: 'Water Boy/Girl',
      },
      {
        name: 'Gertrud Keller',
        dateOfBirth: '20.02.1958',
        position: 'Cheerleader',
      },
      {
        name: 'Rainer Koch',
        dateOfBirth: '29.06.1991',
        position: 'Bench Warmer',
      },
      {
        name: 'Dieter Richter',
        dateOfBirth: '04.12.1978',
        position: 'Ace Server',
      },
      {
        name: 'Elfriede Klein',
        dateOfBirth: '16.11.1965',
        position: 'Fan Club President',
      },
      {
        name: 'Gisela Frank',
        dateOfBirth: '23.03.1980',
        position: 'Court Jester',
      },
    ],
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero>
          <Upcoming upcomingEvents={data.upcomingEvents} />
        </Hero>
        <Events />
        <Team teamMembers={data.teamMembers} />
      </main>

      <footer>
        <Contacts />
      </footer>
    </>
  );
};

export default App;
