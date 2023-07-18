import './App.css';
import Following from './Components/Following/Following';
import Post from './Components/Post/Post';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
       <Sidebar/>
       <Post/>
       <Following/>
    </div>
  );
}

export default App;
