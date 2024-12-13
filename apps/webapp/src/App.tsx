import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'
import Choices from './components/features/Choices'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MoodCalendar from './components/features/MoodCalendar'
import NewActivities from './components/features/NewActivities'

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Choices />,
    },
    {
      path: '/homepage',
      element: <MoodCalendar />,
    },
    {
      path: '/activities',
      element: <NewActivities />,
    },
  ])

  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  )
}

export default App
