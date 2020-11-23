import logo from './logo.svg';
import './App.css';
import MyGreet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message'
import Count from './components/Count';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      {
      <MyForm />  
      //<NameList />  
      //<ParentComponent />
      //<Count /> 
      //<Message />
      /* <MyGreet name = "Bruce" heroname = "Batman">
        <p>This is function children</p>
      </MyGreet>
      <MyGreet name = "Clark" heroname = "Superman"/>
      <Welcome name = "Bruce" heroname = "Batman">
      <p>This is class children</p>
      </Welcome> */
      }
    </div>
  );
}

export default App;
