"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({ origin: "*" }));
const router = express_1.default.Router();
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
