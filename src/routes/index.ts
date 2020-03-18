import { Router, Request, Response } from 'express'

import { ti } from './text-to-image'

import path from 'path'

const router = Router()

router.get('/', (req: Request, res: Response) => {  

  ti.generate('트게더', {
    maxWidth: 150,
    fontFamily: 'TmonMonsori',
    fontSize: 48,
    lineHeight: 50,
    bgColor: 'transparent',
    textColor: '#6c4baa',
    textAlign: 'center',
    strokeSize: 3,
    strokeColor: "#000000",
  }).then(function(dataUri) {
    res.render('index', { 
      src: dataUri, 
      text: "트게더",
      width: 150, 
      height: 50, 
      fontSize: 48, 
      fontColor: "#6c4baa",
      strokeSize: 3,
      strokeColor : "#000000"
    })
  })
})

router.post('/', (req: Request, res: Response) => {
  const {
    text = "트게더",
    width = 150,
    height = 50,
    fontSize = 48,
    fontColor = "#6c4baa",
    strokeSize = 3,
    strokeColor = "#000000"
  } = req.body

  ti.generate(text, {
    debug: false,
    maxWidth: Number(width),
    fontFamily: 'TmonMonsori',
    fontSize: fontSize,
    lineHeight: Number(height),
    bgColor: 'transparent',
    textColor: fontColor,
    textAlign: 'center',
    strokeSize: strokeSize,
    strokeColor: strokeColor,
  }).then(dataUri => {
    res.render('index', {
      src: dataUri,
      text,
      width, 
      height, 
      fontSize, 
      fontColor,
      strokeSize,
      strokeColor
    })
  }).catch((err) => {
    console.log(err);
    
  })
})

export const IndexRouter = {
  router,
}
