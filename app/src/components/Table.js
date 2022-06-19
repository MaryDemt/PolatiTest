import Table from 'react-bootstrap/Table';

function Table1(props) {

  console.log(props.data)
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px'}}>
        <table>
        <thead>
    <tr>
      <th width="20%">Name</th>
      <th>Surname</th>
      <th>Patronymic</th>
      <th>Birthday</th>
    </tr>
        </thead>
  <tbody>
  { props.data.map(item =>(
                <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.middleName}</td>
                    <td>{item.birthday}</td>
                </tr>
            ))}
  </tbody>
      </table>
      </div>
    );
  }
 
export default Table1;