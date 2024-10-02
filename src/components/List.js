import { useEffect, useState } from "react";
import "./List.css";
export default function List() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const sampleData = [{
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
  }]
    fetch(`/api/employees`)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetched data");
        setData(data);
      }).catch(()=>{
        console.log("Unable to fetch data from server. Setting sample data");
        setData(sampleData)
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
