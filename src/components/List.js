import { useEffect, useState } from "react";
import "./List.css";
export default function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/employees`)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetched data");
        setData(data);
      });
  }, []);
  return (
    <div className="List">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.firstName}</td>
              <td>{d.lastName}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
