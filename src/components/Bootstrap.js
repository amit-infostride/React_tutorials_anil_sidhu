//  install       npm install react-bootstrap bootstrap
// {/* The following line can be included in your src/index.js or App.js file */}
// import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import {Button,Alert} from 'react-bootstrap'

const Bootstrap = () => {
  return (
    <div>
        <h1>Bootstrap</h1>
        <Button onClick={()=>alert('hello')}>Click Me !</Button>
        <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
    <hr />
    <hr />

    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
    </div>
  )
}

export default Bootstrap