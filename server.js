const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json());

const otpRoutes = require('./routes/userRoutes');
app.use('/api/otp', otpRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});