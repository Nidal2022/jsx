import logo from './logo.svg';
import './App.css';
import mimageInSrc from "./imageInSrc.jpg"


function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Nidhal</h1>
      <br />
      <img src={mimageInSrc} alt ='myImage' />
      <br />
      <img className='imagepublic' src="/imageInPublic.jpg" />
    </div>
    <video width={320} height={240} controls>
      <source src="Quand a-t-on besoin d'utiliser React JS _.mp4" type="video/mp4" />
    </video>
  </div>
  
  );
}

export default App;
