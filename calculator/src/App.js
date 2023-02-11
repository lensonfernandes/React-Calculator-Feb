import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Heading from './components/Heading';
import Input from './components/Input';
import Operators from './components/Operators';
import Result from './components/Result';
import Message from './components/Message';

function App() {
  return (
    <div className="App bg-black vh-100 ">
      <div  className='d-flex  flex-column justify-content-center align-items-start h-100 w-100 bg-black ms-5 gap-3'>
         <Heading />
         <Input />
         <Operators />
         <Result />
         <Message />
      </div>
     
    </div>
  );
}

export default App;
