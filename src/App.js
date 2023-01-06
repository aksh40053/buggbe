import './App.css';
import partyImg from '../src/assets/imgs/party.webp';
import Countdown from 'react-countdown';

function App() {
  // Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

  return (
    <div className="App">
     <h1>Hi Buddies!</h1>
     <h2><Countdown date={new Date('2023-01-07 19:00:00')} renderer={renderer}/></h2>
     <h3>Let's go for party.........</h3>
     <p><strong>Venue:</strong> <a target="_blank" href='https://goo.gl/maps/vmqSdiMbkMchb5QV8'>3b2-market</a> </p>
     <img src={partyImg} />
    </div>
  );
}

export default App;
