import './App.css'
function App() {

  
  return (
    <div className="screen">
      <video autoPlay muted loop id="myVideo">
        <source src="https://a2development.s3.amazonaws.com/H264HD1080.mov" type="video/mov" />
      </video>
      <div className="" id="fs-overlay">
      <img 
      id ="header-image" 
      src="https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png"></img>
      </div>
    </div>
  )
}

export default App