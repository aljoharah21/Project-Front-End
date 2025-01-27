import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";

function Rooms(){
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        axios
          .get("http://localhost:8080/rooms")
          .then((response) => setRooms(response.data))
          .catch((error) => console.log(error));
      },[]);
      




    return(
        <>
<div className="tableInfo">
        <Table striped bordered hover>
            <thead>
              <tr>
              <th>ID</th>
                <th>Num_seats</th>
                <th>Type</th>
                
              </tr>
            </thead>
            {rooms.map(e=>{
                return(
                <tbody>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.num_seats}</td>
                  <td>{e.type}</td>
                </tr>
              </tbody>
              )
            })}
          </Table>
          </div>
        </>
    )
}

export default Rooms