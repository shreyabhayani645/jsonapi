import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Table from 'react-bootstrap/Table';

function Todos() {

  let[data,setdata]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      setdata(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },[])
  return (
    <div>
          <Header></Header>  
          <Table bordered  className='table-success table-striped table-hover'>
            <thead>
              <tr>
                <th>userId</th>
                <th>Id</th>
                <th>Title</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
          {
            data.map((ele,ind)=>{
              return(
                <>
                  <tr key={ind}>
                    <td>{ele.userId}</td>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                    <td>{ele.completed ? "true" : "false"}</td>
                  </tr>
                </>
              )
            })
          }     
          </tbody>
        </Table>
    </div>
  );
}
export default Todos;
