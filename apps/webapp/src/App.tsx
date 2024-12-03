import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'
import Choices from './components/features/Choices'
import Calendar from './components/features/Calendar'
import { createBrowserRouter, RouterProvider } from 'react-router'


function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Choices />

    },
    {
      path: '/homepage',
      element: <Calendar />

    },
  ])


  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  )
}


export default App
