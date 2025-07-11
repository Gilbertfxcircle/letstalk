
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Delta Plax API is running.'));
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 10000, () => {
        console.log(`Server is running on port ${process.env.PORT || 10000}`);
    });
}).catch(err => console.log("MongoDB connection error:", err));
