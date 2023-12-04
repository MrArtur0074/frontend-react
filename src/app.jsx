import React, {useEffect} from 'react'

import {RouterProvider} from 'react-router-dom'
import {router} from './app/index.js'
import {useDispatch} from 'react-redux'
import {setToken} from './store/actions/actionCreators'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setToken())
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App
