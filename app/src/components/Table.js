

const Table1 = ({sortData, contactData}) => {
  return (
    <div>
    <div >
    <table
      border="1px" className="table">
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
    <nav aria-label="Статьи по Bootstrap 4">
    <ul className="pagination pagination-sm justify-content-center">
        <li className="page-item"><a className="page-link" href="#">Предыдущая</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Следующая</a></li>
    </ul>
</nav>
    </div>
  );
};

export default Table1;
