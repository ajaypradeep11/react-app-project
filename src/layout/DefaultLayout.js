import React from 'react'
import { AppContent, AppFooter} from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
