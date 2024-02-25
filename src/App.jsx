import Student from "./student";
import "./App.css";
import Contant from"./contant";
const App=()=>{
  return (
    <div className="App">
      <h1>yaman alrfai</h1>
      <Student name="yaman" id={2000} graduation={false}/>
      <Contant />
    </div>
  );
};
export default App;