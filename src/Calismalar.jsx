import ScrollAnimation from 'react-animate-on-scroll';

const Calismalar = () => {
  return (
    <>
      <h1 className="big-header" id="works">PROJELERIM </h1>
      <div className="works" >
        <div className="about-top">
          <h4>X</h4>
          <ul>
            <li>
              _
          </li>
            <li>
              ?
          </li>
            <li>
              ◼
          </li>
          </ul>
        </div>
        <div className="item">
          <img className="item-img" src="https://eray-durak.netlify.app/static/media/triwow.2d068464.png" alt="1" />
          <h3>Triwow</h3><br />
          <p>Built a quiz game with ReactJs. Drew inspiration from Trivia Crack mobile game and tried to adapt it to web browsers. Used https://opentdb.com/api_category.php for question APIs. We used many technologies in this project such as JavaScript, React, Redux, SASS, React-router-dom, Firebase(Firestore).</p>
        </div>
        <div className="item">
          <img className="item-img" src="https://eray-durak.netlify.app/static/media/weatherapp.1fe63d41.png" alt="1" />
          <h3>
            3-Day WeatherCast App with React</h3><br />
          <p>The project will show you 3-days weathercast. There is a input area that you can search for your city. Used axios to get weather apis.
Techs in this project : React, SASS, JavaScript, Fetch API</p>
        </div>
        <div className="item">
          <img className="item-img" src="https://eray-durak.netlify.app/static/media/memorycard.ed894992.png" alt="1" />
          <h3>
            Memory Card Game with React.Js</h3><br />
          <p>It is a memory card game. Choose 2 cards if they match then they stay open. Otherwise they return back to their first states which is face down.
Techs in this project: React, JavaScript, SASS</p>
        </div>
        <div className="item">
          <img className="item-img" src="https://eray-durak.netlify.app/static/media/quotegen.a6e2d2c9.png" alt="1" />
          <h3>Kanye West Quote Generator</h3><br />
          <p>This is my first try at fetching some API from certain websites.
          It has HTML, CSS, Vanilla JavaScript in it. Not responsive yet.</p>
        </div>
        <div className="item">
          <img className="item-img" src="https://eray-durak.netlify.app/static/media/calculator.34d32358.png" alt="1" />
          <h3>
            Calculator with ReactJS</h3><br />
          <p>Simple calculator created with ReactJS. I did not use any other library like math.js. All the functions and operations were written by me. I used SASS and JavaScript mostly.</p>
        </div>
      </div >
    </>
  );
}

export default Calismalar;