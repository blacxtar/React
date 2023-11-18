import Counter from "./counter";
import Greeting from "./greeting";
import Card from "./Card";
import Entry from "./Entry";
// import emojees from "./emoji";
import "./App.css";

// console.log(emojees)


function App() {
  return(
    <>
    {/* <Entry emoji='A' meaning="SALMAN"/> */}
    <Greeting/>
    < Card name ="salman Ahmad" course="MCA" address="Mau"/>
    <Counter name="salman"/>
    </>
  )
}

export default App;
