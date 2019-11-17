import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Events from './Events'

export default (events: Eventlite.Events) => {
  const listings = renderToStaticMarkup(<Events events={events} />)
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Eventlite</title>
    <style>
      @media (prefers-color-scheme: dark) {
        body {
          color: #f9f9fa;
          background-color: #2a2a2e;
        }
        a {
          color: #45a1ff;
        }
        a:hover {
          color: #0a84ff;
        }
      }
    </style>
  </head>
  <body>
    <h1>Eventlite</h1>
    ${listings}
  </body>
</html>`
  console.log(html)
}
