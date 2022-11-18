import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Slider />
      <div className="px-[10px]">
      <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
