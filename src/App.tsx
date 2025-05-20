import "./App.css";
import Hackathon from "./hackathon";
import InfoPanel from "./InfoPanel";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { Pitches } from "./Pitches";
function App() {
  return (
    <>
      <Navbar />
      <InfoPanel />
      <Hackathon />
      <Pitches />
      <Footer />
    </>
  );
}

export default App;
