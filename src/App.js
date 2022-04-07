import './App.css';
import Navigation from 'components/navigation';
import Video from "components/video"
import Collection from "components/collection"
import Mint from "components/mint"

function App() {
  return (
    <div className='w-full relative'>
      <Navigation />
      <Video />  
      <Collection />    
      <Mint />
    </div>
  )
}

export default App;
