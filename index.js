const app = require('./src/app');
const connectDb = require('./src/server');
require('dotenv').config();

// Db connection
connectDb()

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})