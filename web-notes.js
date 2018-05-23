const notes = [

];

const express = require('express')
const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => {
  res.render('notes', { notes: notes });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.set('view engine', 'ejs');

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/notes', (req, res) => { 
  notes.push(req.body.note);
  res.redirect('/');
});

app.delete('/notes/:id', (req, res) => {
  notes.splice(req.params.id, 1);
  res.send('**deleted**')
})


  
