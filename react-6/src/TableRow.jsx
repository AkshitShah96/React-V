function TableRow({ id, name, age, course }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{course}</td>
    </tr>
  );
}

export default TableRow;
