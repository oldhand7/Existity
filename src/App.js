import './App.css';
import Navigation from 'components/navigation';
import Video from "components/video"
import Collection from "components/collection"

function App() {
  return (
    <div className='w-full relative'>
      <Navigation />
      <Video />  
      <Collection />    
    </div>
  )
}

export default App;
