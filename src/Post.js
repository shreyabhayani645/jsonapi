import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Table from 'react-bootstrap/Table';

function Post() {

  let[data,setdata]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
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
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>userId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
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
export default Post;
