"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.resolve('./upload-files'));
    },
    filename: function (req, file, cb) {
        cb(null, 'file.png');
    }
});
const upload = multer_1.default({ storage: storage });
const router = express_1.default.Router();
router.all("/", (req, _res, next) => {
    console.log(`${req.method} for ${req.url}`);
    next();
});
router.get("*", function (_req, res) {
    res.json({
        "Name": "Samuel"
    });
});
router.post('/uploadImage', upload.single('file'), (req, res) => {
    console.log(req.body);
    res.status(200);
});
exports.default = router;
//# sourceMappingURL=index.js.map