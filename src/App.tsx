import "./App.css";
import Hackathon from "./components/hackathon";
import InfoPanel from "./components/InfoPanel";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Pitches } from "./components/Pitches";
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
