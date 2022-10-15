import './App.css';
import { Deal } from './Deal';
import image from './BlackToDo.jpg';


function App() {
  return (
    <div>
      <div className="app">
        <img src={image} width="800px" alt="ToDoList"/>
        <div className="data">
          <Deal/>
          </div>
      </div>
  </div>
  );
}

export default App;
