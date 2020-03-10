import { Router, Request, Response } from 'express'


import { registerFont } from 'canvas';

import ti from "text-to-image";

import path from "path"

const router = Router()

router.get('/', (req: Request, res: Response) => {
    registerFont(path.join("src/public", "font", "TmonMonsori.ttf"), { family: "TmonMonsori" })

    ti.generate('웨 안돼 ㅠㅠ', {
        debug: true,
        maxWidth: 720,
        fontFamily: "TmonMonsori",
        lineHeight: 30,
        margin: 5,
        bgColor: "white",
        textColor: "red"
    }).then(function (dataUri) {
        res.render('index', { src: dataUri })
    });
})

export const IndexRouter = {
    router,
};