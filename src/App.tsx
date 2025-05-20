import "./App.css";
import Hackathon from "./hackathon";
import InfoPanel from "./InfoPanel";
import Navbar from "./Navbar";
import { Pitches } from "./Pitches";
function App() {
  return (
    <>
      <Navbar />
      <Hackathon />
      <InfoPanel />
      <Pitches />
      {/* <Footer /> */}
    </>
  );
}

export default App;
