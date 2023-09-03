import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCardComponents';

function App() {
  const Person = [
    {firstName :"Doe", lastName :"Jane", age : 45, hairColor :"Black"},
    {firstName :"Smith", lastName :"Jhon", age : 88, hairColor :"Brown"},
    {firstName :"Fillmore", lastName :"Millard", age : 50, hairColor :"Brown"},
    {firstName :"Smith", lastName :"Maria", age : 62, hairColor :"Brown"},
  ]
  return (
    <fieldset className="App">
      {Person.map ((person,idx) => <PersonCard person = {person} key={idx}/>)}
    </fieldset>
  );
}

export default App;
