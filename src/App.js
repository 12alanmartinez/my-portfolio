import logo from './logo.svg';
import './App.css';

function App() {
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
        <div className="control control1-1 active-btn">
        <i className="fas fa-home"></i>
        </div>
        <div className="control control1-2">
          <i className="fas fa-user"></i>
        </div>
        <div className="control control1-3">
          <i className="fas fa-briefcase"></i>
        </div>
        <div className="control control1-4">
          <i className="fas fa-newspaper"></i>
        </div>
        <div className="control control1-5">
          <i className="fas fa-envelope"></i>
        </div>
      </div>
      <script src="app.js"></script>
    </div>
  );
}

export default App;
