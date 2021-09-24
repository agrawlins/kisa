const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const dids = require('./routes/dids');
const kisas = require('./routes/kisas');
const policemen = require('./routes/policemen');
const auth = require('./routes/auth')

connectDB();

app.use(express.json());
app.use('/api/dids', dids);
app.use('/api/kisas', kisas);
app.use('/api/policemen', policemen);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});