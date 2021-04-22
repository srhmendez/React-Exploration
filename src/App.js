import Tweet from './tweet';
import './App.css';

function App() {

  return (
    <div className="app">
      <Tweet name="Dev Ed" message="This is a random Tweet :)"/>
      <Tweet name="John Snow" message="Feeling sad :/"/>
      <Tweet name="Traverse Media" message="Now Hiring Office Plebs"/>
      <Tweet name="Mosh" message="Felt cute, might delete l8r :P"/>
    </div>
  );
}

export default App;
