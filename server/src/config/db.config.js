const { connect } = require("mongoose");

exports.dbConnect = async () => {
  try {
    console.log(`Connecting to database...`);
    await connect(process.env.DB_URI);
    console.log(`Database connected...`);
  } catch (error) {
    console.log(error);
    process.exit(-1);
  }
}