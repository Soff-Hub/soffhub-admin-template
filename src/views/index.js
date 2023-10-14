import AppRoute from 'components/route/AppRoute'
import { authRoutes } from 'configs/routes.config/routes'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'

export default function Views() {

  const { isLoginning } = useSelector(state => state.admin)
  const navigate = useNavigate()


  useEffect(() => {
    if (!isLoginning) {
      navigate('/login')
    }
  }, [])

  return (
    <Routes>
      {
        authRoutes.map(route => {
          return <Route  key={route.key} path={route.path} element={<AppRoute component={route.component} />} />
        })
      }
    </Routes>
  )
}
