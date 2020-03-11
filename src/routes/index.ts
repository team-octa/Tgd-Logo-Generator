import { Router, Request, Response } from 'express'

import { ti } from './text-to-image'

import path from 'path'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  ti.generate('트게더', {
    debug: true,
    maxWidth: 150,
    fontFamily: 'TmonMonsori',
    fontSize: 48,
    lineHeight: 50,
    bgColor: 'transparent',
    textColor: '#6b4aa9',
    textAlign: 'center',
  }).then(function(dataUri) {
    res.render('index', { src: dataUri, fontSize: 48 })
  })
})

router.post('/', (req: Request, res: Response) => {
  const { font = 46 } = req.body

  ti.generate('청게더', {
    debug: true,
    maxWidth: 140,
    fontFamily: 'TmonMonsori',
    fontSize: font,
    lineHeight: 50,
    margin: 5,
    bgColor: 'transparent',
    textColor: '#8A2BE2',
    textAlign: 'center',
  }).then(dataUri => {
    res.render('index', { src: dataUri, fontSize: font })
  })
})

export const IndexRouter = {
  router,
}
