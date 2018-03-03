import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Events from './Events'

export default events => {
  const listings = renderToStaticMarkup(<Events events={events} />)
  const html =
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Eventlite</title>
  </head>
  <body>
    <h1>Eventlite</h1>
    ${listings}
  </body>
</html>`
  console.log(html)
}
