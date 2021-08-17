import './App.css';
import  image1 from "./assests/image1.png"
function App() {
  return (
    <div className="App">
    <div style={{border:'solid', borderWidth:'1px', borderColor:'black', maxWidth:'100vw'}}>
    <h1 className="title" style={{color:`red`}}>Amira Zrelli</h1> 
     <br />
       <img src={image1} alt= "html" />
      <br />
      <img src="/asset/code.jpg" />
      </div>
      <video style={{width:320, height:240,}} controls >
 <source src={myVideo.mp4} type="video/mp4" />
</video>
    </div>  

  );
}

export default App;
