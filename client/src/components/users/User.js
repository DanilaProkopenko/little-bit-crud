import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    movieName: "",
    movieReview: ""
  });

  // const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function loadUser(){
      const result = await axios.get(`http://localhost:3002/api/${id}`);
      setUser(result.data[0 ]);
      console.log("Стейт юсера ", result.data)}
    loadUser()
  }, [id]);


  // useEffect(() => {
  //   loadUser();
  // }, []);

  // const loadUser = async () => {
  //   const result = await axios.get(`http://localhost:3002/api/${id}`);
  //   setUser(result.data);
  //   console.log("Стейт юсера ", result.data)
  // };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">movieName: {user.movieName}</li>
        <li className="list-group-item">movieReview: {user.movieReview}</li>
      </ul>
    </div>
  );
};

export default User;