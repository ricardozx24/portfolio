import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Clients from "./components/Clients/clients";


function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
