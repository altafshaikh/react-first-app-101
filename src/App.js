import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <Paragraph />
        <ImageComponent />
      </header>
    </div>
  );
}

export default App;
