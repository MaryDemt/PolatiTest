const SmallTable = ({ contactData }) => {
  const smallData = contactData.slice(0, 15);
  return (
    <div className="display-flex align-items-center justify-content-center">
      <table border="1px" className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Surname</th>
            <th>Patronymic</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {smallData.map((item) => (
            <tr key={item.name}>
              <td>{smallData.indexOf(item) + 1}</td>
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

export default SmallTable;
