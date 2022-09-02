import {useState} from "react" 
import './App.css';

function App() {
  const [select, setSelect] = useState("home")
  return (
    <div>
      <header className="section sec1 header active">
      
      </header>
      <main className="">
        <section className="section sec2 about"></section>
        <section className="section sec3 portfolio"></section>
        <section className="section sec4 blogs"></section>
        <section className="section sec5 contact"></section>
      </main>
  
      <div className="controlls">
        {/* className={ select == "home ? "controller controller-1-1 active-btn" : "controller controller-1-1"} */}
        <div onClick={()=>setSelect("home")} className={ select == "home"? "control control1-1 active-btn": "control control1-1"}>
        <i className="fas fa-home"></i>
        </div>
        <div onClick={()=>setSelect("user")} className={ select == "user"? "control control1-2 active-btn": "control control1-2"}>
          <i className="fas fa-user"></i>
        </div>
        <div onClick={()=>setSelect("briefcase")} className={ select == "briefcase"? "control control1-3 active-btn": "control control1-3"}>
          <i className="fas fa-briefcase"></i>
        </div>
        <div onClick={()=>setSelect("github")} className= { select == "github"? "control control1-4 active-btn": "control control1-4"}>
          <i className="fas fa-newspaper"></i>
        </div>
        <div onClick={()=>setSelect("envelope")} className={ select == "envelope"? "control control1-5 active-btn": "control control1-5"}>
          <i className="fas fa-envelope"></i>
        </div>
      </div>
      <script src="app.js"></script>
    </div>
  );
}

export default App;
