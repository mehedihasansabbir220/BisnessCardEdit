import React, { Fragment, useEffect, useState } from 'react'
import spinning from '../../assets/images/Rolling-1s-24px.svg';

function Spinning() {
  
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, [])

  return (
    <Fragment>
      <img src={spinning} className={'spinning ' + (!show ? 'hide' : '')}
        style={{height: '1em', margin: 'auto', display: 'block', marginRight: '0.3em'}}
        alt='Loading...'
      />
    </Fragment>
  )
}

export default Spinning
