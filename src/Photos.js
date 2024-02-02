import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Photos() {

  let[data,setdata]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
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
          
         <div className='grid'>
          {
            data.map((ele,ind)=>{
              return(
                <>
                  <Card style={{ width: '22rem' }} className='m-2 card'>
                    <Card.Body>
                      <Card.Title>{ele.albumId}</Card.Title>
                      <Card.Img variant="top" src={ele.url} className='card_img'/>
                      <Card.Text className='id'>{ele.id}</Card.Text>
                      <Card.Text>{ele.title}</Card.Text>
                      <Button variant="primary" href={ele.thumbnailUrl}>Thubnail url</Button>
                    </Card.Body>
                  </Card>
                
                </>
              )
            })
          }     
         </div>
         
    </div>
  );
}
export default Photos;
