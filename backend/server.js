const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const adminRoutes = require("./routes/adminRoutes");

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/admin", adminRoutes);

app.get('/', (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((error) => {
    console.log("Error connecting to MongoDB:", error);
})

