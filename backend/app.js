const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();

app.use(bodyParser.json);
const uri = "mongodb+srv://vaibhavraina12345:Um8quSgsfnsHDoJ3@landfill.wqmsist.mongodb.net/?retryWrites=true&w=majority&appName=LandFill";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

    await mongoose.disconnect();
  }
}
run().catch(console.dir);

app.listen(8080, async function () {
  console.log("Started server on port 8080");
})

