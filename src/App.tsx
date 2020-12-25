import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import FunctionDefault from '@/pages/FunctionDefault'
import { FunctionNamed } from '@/pages/FunctionNamed'
import ClassDefault from '@/pages/ClassDefault'
import { ClassNamed } from '@/pages/ClassNamed'

const LazyComponent = React.lazy(() => import('@/components/LazyComponent'))

export default function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <React.Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route exact path="/" component={FunctionDefault} />
            <Route path="/functionnamed" component={FunctionNamed} />
            <Route path="/classdefault" component={ClassDefault} />
            <Route path="/classnamed" component={ClassNamed} />
            <Route path="/lazycomponent" component={LazyComponent} />
          </Switch>
        </React.Suspense>
      </Layout>
    </Router>
  )
}
