import './App.css';
import NavBar from './components/NavBar';
import Box1 from './components/Box1';
import Box2 from './components/Box2';

function App() {
  return (
    <div className="App">
      <header></header>
      <nav><NavBar /></nav>
        <main>
            <Box1 name={'Elizabeth Gollahon'} />
            <Box2 name={"Gertrude"} age={"102"} color={"black"} />
            <Box2 name={"Theodora"} age={"4"} color={"pink"} />
            <Box2 name={"Edith"} age={"56"} color={"purple"} />
        </main>
    </div>
  );
}

export default App;
