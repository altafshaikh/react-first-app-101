import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import ImageComponent from "./components/ImageComponent";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <Paragraph />
        <ImageComponent imageSrc={logo} />
      </header>
    </div>
  );
}

export default App;
