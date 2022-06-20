

const Table1 = ({sortData, contactData}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px'}}>
    <table
      border="1px"
      style={{
        borderCollapse: "collapse",
        borderSpacing: "10px 30px",
        width: "400px",
      }}
    >
      <thead>
        <tr>
          <th></th>
          <th onClick={() => sortData("name")}>
              Name
          </th>
          <th onClick={() => sortData("surname")}>
              Surname
          </th>
          <th onClick={() => sortData("middleName")}>
              Patronymic
          </th>
          <th onClick={() => sortData("birthday")}>
              Birthday
          </th>
        </tr>
      </thead>
      <tbody>
        {contactData.map((item) => (
          <tr key={item.name}>
            <td>{contactData.indexOf(item)+1}</td>
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
};

export default Table1;
