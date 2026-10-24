import app from "./src/app/app";
import config from "./src/config/config";
import connectDb from "./src/config/db";

await connectDb();


app.listen(config.PORT, ()=> {
    console.log("Server is running on port", config.PORT);
})

