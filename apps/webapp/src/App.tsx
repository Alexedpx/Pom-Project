import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import LogIn from './components/pages/LogIn'
import i18n from './i18n/config'

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },

    {
      path: '/login',
      element: <LogIn />,
    },
  ])

  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  )
}

export default App
