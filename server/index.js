const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
// const { query } = require('express')

const db = mysql.createPool({
    host: 'localhost',
    user: 'mysql',
    password: 'mysql',
    database: 'crud',
});

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'mysql',
//     password: 'mysql',
//     database: 'crud',
// });

// db.connect(err => {
//     if (err) {
//         console.log(err)
//         return err
//     } else{
//         console.log('db--------------ok')
//     }
// })

// let query = "INSERT INTO `movies_reviews` (movieName, movieReview) VALUES ('s', 'good movie');"

// db.query(query, (err, res) => {
//     console.log(err);
//     console.log(res);
// })

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get", (req, res)=> {
    const sqlSelect = "SELECT * FROM `movies_reviews`"

    // db.query(sqlSelect, (err, result) =>{
    //     res.send(result)
    // })
    db.query(sqlSelect, (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for users: " + err)
        res.sendStatus(500)
        return
      }
      console.log("I think we fetched users successfully")
    
      const users = rows.map((row) => {
        return {id:row.id, movieName: row.movieName, movieReview: row.movieReview}
      })
    
      res.json(users)
    })
})

//_______________________________________________________________
app.get("/api/:id", (req, res) => {
    console.log("Fetching user with id: " + req.params.id)
  
  const userId = req.params.id
  const queryString = "SELECT * FROM `movies_reviews` where id = ?"
  db.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
    }
    console.log("I think we fetched users successfully")
    console.log("ID is: ", req.params.id)
  
    const users = rows.map((row) => {
      return {id:row.id, movieName: row.movieName, movieReview: row.movieReview}
    })
  
    res.json(users)
  })
    //res.end()
  })
  
//________________________________________________________________

// app.get("/api/:id", (req, res)=> {
//     console.log("" + req.params.id)

//     const userId = req.params.id
//     const sqlSelectOne = "SELECT * FROM `movies_reviews` where id = 10"
//     db.query(sqlSelectOne[userId], (err, rows, field) =>{
//         if(err){
//             console.log("Failed " + err)
//             res.sendStatus(500)
//             res.end()
//             return
//         }

//         console.log("Fetched isers successful")
//         res.json(rows)
//     })
// })

app.post("/api/insert", (req, res) =>{
    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO `movies_reviews` (movieName, movieReview) VALUES (?, ?)" 
    db.query(sqlInsert, [movieName, movieReview], (err, res) =>{
        console.log(res)
    })
})

app.listen(3002, () => {
    console.log("running on port 3002");
})