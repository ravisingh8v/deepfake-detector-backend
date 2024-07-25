import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
const router = express.Router();

router.post("/detect-deepfake", (req, res) => {
  const data = req.body;
  console.log(data);
  if (!data) {
    res.status(401).json({
      status: "failed",
      message: "Bad request",
    });
    return;
  }
  res.status(500).json({
    status: "fialed",
    message: "Internal server error",
  });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server up and running on port " + 3000);
});
