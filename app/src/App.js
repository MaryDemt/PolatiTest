import './App.css';
import Main from './components/Main';
import Table1 from './components/Table';

const data = [
  {name: 'Ivan', surname: 'Ivanov', middleName: 'Ivanovich', birthday: '23.04.2000'},
  {name: 'Dmitriy', surname: 'Dementev', middleName: 'Aleksandrovich', birthday: '30.12.1993'},
  {name: 'Sergay', surname: 'Sidorov', middleName: 'Andreevich', birthday: '07.11.1996'},
];

function App() {
  return (
    <div className="App">
      <div className="container">
      <Main />
      <Table1 data={data}/>
    </div>
    </div>
  );
}

export default App;
