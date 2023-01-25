import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express()
const port = 3030
const uri = "mongodb+srv://rafaseoanes:mango2301@cluster0.gvyfi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let db;
app.use(cors())
app.use(express.json())
client.connect(err => {
    app.post('/', async (req, res) => {
        console.log(req.body)
        await client.db("test").collection('pokemon').insertOne(req.body)
        return res.send(`Saved Pokemon: ${req.body.name}`);
    })

    app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
});

