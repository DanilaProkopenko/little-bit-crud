import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  // useEffect(async() => {
  //   loadUsers();
  // }, []);

  // const loadUsers = async () => {
  //   const result = await axios.get("http://localhost:3002/api/get");
  //   setUser(result.data);
  //   console.log("Стейт пользователей",  result.data)
  // };


  
  useEffect(() => {
    async function loadUsers(){
    const result = await axios.get("http://localhost:3002/api/get");
    setUser(result.data);
    console.log("Стейт пользователей",  result.data)}
    loadUsers()
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.movieName}</td>
                <td>{user.movieReview}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
