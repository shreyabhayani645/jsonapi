import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Table from 'react-bootstrap/Table';

function Albums() {

  let[data,setdata]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/albums')
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
          <Table bordered  className="table-primary table-hover">
            <thead>
              <tr>
                <th>userId</th>
                <th>Id</th>
                <th>Title</th>
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
export default Albums;
