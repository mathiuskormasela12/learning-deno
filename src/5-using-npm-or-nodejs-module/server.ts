import express from "npm:express@4";

const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Hello Express");
});

app.listen(3000, () => {
  console.info('Magic happens at port 3000');
});