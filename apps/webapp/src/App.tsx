import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Choices from './components/mood/Choices'
import DailyOverview from './components/dashboard/DailyOverview'
import AddActivity from './components/activities/AddActivity'
import ActivityDetails from './components/activities/ActivityDetails'
import AllActivities from './components/activities/AllActivities'

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Choices />,
    },
    {
      path: '/dashboard',
      element: <DailyOverview />,
    },
    {
      path: '/activities',
      element: <AddActivity />,
    },
    {
      path: '/details',
      element: <ActivityDetails />,
    },
    {
      path: '/all',
      element: <AllActivities />,
    },
  ])

  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  )
}

export default App
