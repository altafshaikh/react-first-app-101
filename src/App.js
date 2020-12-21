import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <Paragraph />
      </header>
    </div>
  );
}

export default App;
