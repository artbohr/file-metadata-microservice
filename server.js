'use strict';

const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const upload = multer();

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  res.send({
    filename: req.file.originalname,
    filesize: `${req.file.size} bytes`});
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Node.js listening ...');
});
