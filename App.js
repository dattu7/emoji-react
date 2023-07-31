import logo from './logo.svg';
import './App.css';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import NameList from './components/NameList';
import EmojiSearch from './EmojiSearch';

function App() {
  return (
    <div className="App">
      {/* <ClassClick></ClassClick>
      <FunctionClick></FunctionClick>
      <NameList></NameList> */}
      <EmojiSearch></EmojiSearch>
    </div>
  );
}

export default App;
