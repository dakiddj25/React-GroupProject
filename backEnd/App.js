const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express(); 
const PORT = 3001;

const usersRouter = require('./routes/usersRoutes');
const postRouter = require('./routes/postRoutes');
const hashtagRouter = require('./routes/hashtagRoutes');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('/posts', postRouter);
app.use('/hashtag', hashtagRouter);


app.use((err, req, res, next) => {
    res.status(500).json({        err    })
})

app.listen(PORT, () => console.log("Listening", PORT));