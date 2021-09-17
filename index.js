const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://MerrimanLyon:13qeadzc%21%23QEADZC@cluster0.xqosq.mongodb.net/kisadb?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));