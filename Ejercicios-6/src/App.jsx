import {NavBar, Body} from "./components/";
import s from "./App.module.css"

function App() {
  return (
    <div className={s.container}>
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
