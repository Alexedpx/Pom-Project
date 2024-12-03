import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'
import Choices from './components/features/Choices'


function App(): JSX.Element {



  return (
    <I18nextProvider i18n={i18n}>
      <Choices />
    </I18nextProvider>
  )
}

export default App
