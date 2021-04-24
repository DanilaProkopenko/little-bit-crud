import './App.css';
// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';



import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";

import User from "./components/users/User";
import {
 BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


function App() {

  // const [movieName, setMovieName] = useState('');
  // const [review, setReview] = useState('');
  // const [movieReviewList, setMovieReviewList] = useState([]);


  // useEffect(() => {
  //   Axios.get('http://localhost:3003/api/get').then((response) => {
  //     console.log(response.data)
  //     setMovieReviewList(response.data)
  //   })
  // })

  // console.log("coolfirstName")

  // const submitReview = () => {
  //   Axios.post('http://localhost:3002/api/insert', { movieName: movieName, movieReview: review }).then(() => {
  //     alert("successful insert")
  //   })
  // };

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

    // <div className="App">
    //   <h1>hello</h1>

    //   <div className="form">
    //     <label>Movie name:</label>
    //     <input type="text" name="movieName" onChange={(e =>
    //       setMovieName(e.target.value))} />
    //     <label>Review:</label>
    //     <input type="text" name="review" onChange={(e =>
    //       setReview(e.target.value))} />

    //     <button onClick={submitReview}>Submit</button>

    //     {movieReviewList.map((movie, index) => {
    //       return (
    //           <div>{index + 1}
    //             <h1>movieId:{movie.id} || movieName:{movie.movieName} || movieReview:{movie.movieReview}</h1>
    //           </div>
    //       )
    //     })}
    //   </div>
    // </div>
  );
}

export default App;
