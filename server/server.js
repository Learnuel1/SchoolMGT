const  app = require("./src/app");
const { dbConnect } = require("./src/config/db.config");
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, async() => {
  try {  
    await dbConnect();
      console.log(`server is running on port:${PORT}`);
    } catch (error) {
      console.log(error);
    }
  })

