import "./App.css";
import Card from "./component/card";

function App() {
  return (
    <div className="App">
      <h1 className="bg-green-400 text-black rounded-xl p-5">Tailwind test</h1>
      <Card channel="Dipesh" btnText="Click me" />
      <Card channel="Simmy" btnText="Visit me" />
    </div>
  );
}

export default App;
