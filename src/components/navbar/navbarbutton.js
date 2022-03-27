import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {v4 as uuid} from 'uuid'

export default function NavbarButton(props) {
  return (
    <Fragment>
      <Link to={props.link} title={props.title}>
        <span><img src={props.image} alt="" /></span>
        {props.content}
      </Link>

      { props.children ? (
        <ul>
          {props.children.map(child => (<li key={uuid()}>{child}</li>))}
        </ul>
      ) : null}
      
    </Fragment>
  )
}
