import express from 'express'

const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("Hello Word")
})
//postman check for post
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    newItem.id=1;
    res.status(201).json({message: 'New item created', data: newItem})
  })

  app.put('/api/items/:id', (req, res) => {
    res.status(201).json({message: 'item created edited!', data: newItem})
  })

  app.delete('/api/items/:id', (req, res) => {
    res.status(201).json({message: 'item deleted!', data: newItem})
  })

app.listen(PORT,()=>{
    console.log(`app listenting at: http://localhost:${PORT}`)
})