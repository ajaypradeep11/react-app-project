import React from 'react'

const Purchase = React.lazy(() => import('./views/purchase/purchase.js'))

const List = React.lazy(() => import('./views/list/list.js'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/purchase', name: 'Purchase', element: Purchase },
  { path: '/list', name: 'List', element: List },
]

export default routes
