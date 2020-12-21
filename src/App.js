import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import ImageComponent from "./components/ImageComponent.jsx";
import Counter from "./components/Counter.jsx";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <Paragraph />
        <ImageComponent imageSrc={logo} />
        <Counter />
      </header>
    </div>
  );
}

export default App;
