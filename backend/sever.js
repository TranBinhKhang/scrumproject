const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config()
//mongooseatlas
const MONGODB_URI = 'mongodb+srv://webproject:admin123@webproject.rtf8r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))
//mongoose.connect('mongodb://localhost/myTable').then(() => console.log("conected to mongodb...")).catch(err => console.log("could not connect to mongDB...", err));
mongoose.connect(MONGODB_URI || 'mongodb://localhost/myTable', {
    userNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("conected to mongodb...")).catch(err => console.log("could not connect to mongDB...", err));

app.use(bodyParser.json({ limit: '500mb' }))
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false,
}));
app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running"))