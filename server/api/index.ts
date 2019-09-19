import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('./upload-files'));
    },
    filename: function (req, file, cb) {
        cb(null, 'file.png');
    }
})

const upload = multer({ storage: storage })

const router = express.Router();

router.all("/", (req: Request, _res: Response, next: NextFunction) => {

    console.log(`${req.method} for ${req.url}`);

    next();

});

router.get("*", function (_req: Request, res: Response) {

    res.json({
        "Name": "Samuel"
	});

});

router.post('/uploadImage', upload.single('file'), (req, res) => {
    console.log(req.body);

    res.status(200);
});

export default router;
