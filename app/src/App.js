import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Table1 from './components/Table';

const data = [
  {name: 'Ivan', surname: 'Ivanov', middleName: 'Ivanovich', birthday: '23.04.2000'},
  {name: 'Dmitriy', surname: 'Dementev', middleName: 'Aleksandrovich', birthday: '30.12.1993'},
  {name: 'Sergey', surname: 'Sidorov', middleName: 'Andreevich', birthday: '07.11.1996'},
];

function App() {
  const [contactData, setContactData] = useState([])
  const [directionSort, setDirectionSort] = useState(true)

  const sortData = (field) => {
    const copyData = contactData.concat()
    let sortData
    if(directionSort){
    sortData = copyData.sort((a, b)=>{
      return a[field]>b[field] ? 1: -1
    });
    setContactData(sortData)
    setDirectionSort(!directionSort)}
    else {
      sortData = copyData.sort((a, b)=>{
        return a[field]>b[field] ? -1: 1
      });
      setContactData(sortData)
      setDirectionSort(!directionSort)
    }
  }
  useEffect(()=> {
    setContactData(data)
  },[])

  return (
      <div className="container">
      <Main />
      <Table1 contactData={contactData} sortData={sortData}/>
    </div>
  );
}

export default App;
