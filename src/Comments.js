import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Table from 'react-bootstrap/Table';

function Comments() {

  let[data,setdata]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
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
          <Table bordered  striped>
            <thead>
              <tr>
                <th>PostId</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
          {
            data.map((ele,ind)=>{
              return(
                <>
                  <tr key={ind}>
                    <td>{ele.postId}</td>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.body}</td>
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
export default Comments;
