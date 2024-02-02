import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Table from 'react-bootstrap/Table';

function Users() {

  let [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        setdata(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <div>
      <Header></Header>
      <Table bordered className='table-danger table-striped'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>address</th>
            <th>phone</th>
            <th>website</th>
            <th>company</th>
          </tr>

        </thead>
        <tbody>
          {
            data.map((ele, ind) => {
              return (
                <>
                  <tr key={ind}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.username}</td>
                    <td>{ele.email}</td>
                    <td>
                      <Table>
                        <tr>                        
                          <th>Street:</th>{ele.address.street}
                        </tr>
                       <tr>                        
                          <th>suite:</th>{ele.address.suite}
                        </tr>
                        <tr>                        
                          <th>city:</th>{ele.address.city}
                        </tr>
                        <tr>                        
                          <th>zipcode:</th>{ele.address.zipcode}
                        </tr>
                        <ul className='flex'>
                          <h5>Geo:</h5>
                          <li>lat: {ele.address.geo.lat}</li>
                          <li>lng: {ele.address.geo.lng}</li>
                        </ul>
                      </Table>
                    </td>
                    <td>{ele.phone}</td>
                    <td>{ele.website}</td>
                    <td>
                      <Table>
                        <tr>                        
                          <th>name:</th>{ele.company.name}
                        </tr>
                        <tr>                        
                          <th>catchPhrase:</th>{ele.company.catchPhrase}
                        </tr>
                        <tr>                        
                          <th>bs:</th>{ele.company.bs}
                        </tr>
                        </Table>
                    </td>
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
export default Users;
