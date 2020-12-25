import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="main">
      <ul>
        <li>
          <Link to="/">Home-FunctionDefault</Link>
        </li>
        <li>
          <Link to="/functionnamed">FunctionNamed</Link>
        </li>
        <li>
          <Link to="/classnamed">ClassNamed</Link>
        </li>
        <li>
          <Link to="/classdefault">ClassDefault</Link>
        </li>
        <li>
          <Link to="/lazycomponent">LazyComponent</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
