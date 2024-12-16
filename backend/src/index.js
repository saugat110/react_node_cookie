import express from "express"
import cors from "cors"
import cookieroutes from './routes/cookieroute.js'
import cookieParser from "cookie-parser"


const app = express();

app.use(express.json());
app.use(cors({
  // origin:"http://localhost:5173",
  origin:"https://react.saugatsthapit.com.np",
  credentials:true
}));
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use('/api', cookieroutes);