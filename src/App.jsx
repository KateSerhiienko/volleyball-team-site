function App() {
  return (
    <>
      <header>
        <nav>
          <img src="" alt="Logo" />
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Team</li>
          </ul>
          <input type="search" />
        </nav>

        <section>
          {/* hero */}
          <h1>
            Welcome to <i>Freiberger Maulwürfe</i> Team
          </h1>
        </section>
      </header>

      <main>
        <section>
          <div>Upcoming</div>

          <div>
            Last event
            <h2>Tournament in ...</h2>
            <p>Tournament description</p>
            <div>{/* results */}</div>
            {/* eventGallery */}
            <div>
              <ul>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <img src="" alt="" />
                </li>
              </ul>
            </div>
          </div>

          <div>Last events</div>
        </section>

        <section>
          Team
          <h2>Our Team</h2>
          <p>Team description</p>
          <div>
            {/* teamGallery */}
            <ul>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div>Footer</div>
      </footer>
    </>
  );
}

export default App;
