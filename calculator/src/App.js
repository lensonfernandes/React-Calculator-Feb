import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Heading from './components/Heading';
import Input from './components/Input';

function App() {
  return (
    <div className="App bg-black vh-100 ">
      <div  className='d-flex  flex-column justify-content-center align-items-center h-100 w-100'>
         <Heading />
         <Input />
      </div>
     
    </div>
  );
}

export default App;
