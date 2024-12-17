import { useState } from 'react'
import { Mood } from '@pom/shared-dtos'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router'
import Layout from '../layout/Layout'
import RightWaveSvg from '../features/background/RightWaveSvg'
import MoodCalendar from '../mood/MoodCalendar'
import CurrentActivities from '../activities/CurrentActivities'

function DailyOverview() {
  const { t } = useTranslation('common', { keyPrefix: 'DailyOverview' })
  const navigate = useNavigate()
  const [, setUserMood] = useState<Mood | null>(null)

  const addActivites = () => {
    navigate('/activities')
  }

  const seeAll = () => {
    navigate('/all')
  }
  return (
    <Layout background="bg-tertiary" svg={<RightWaveSvg />}>
      <Layout.Header>
        <MoodCalendar onMoodChange={setUserMood} />
      </Layout.Header>
      <Layout.Section>
        <h1 className="mb-4 mt-4 pl-2 text-xl font-semibold ">{t('title.yourDailyProgram')}</h1>
        <div className="flex justify-between items-center pl-2 pr-2 mb-6">
          <div className="w-fit">
            <p className="text-sm font-medium">{t('content.activitiesList')}</p>
            <p className="text-xs font-extralight">{t('content.activitiesDone')}(0/3)</p>
          </div>
          <p onClick={seeAll} className="cursor-pointer text-sm font-light text-gray-400">
            {t('content.seeAll')}
          </p>
        </div>
      </Layout.Section>
      <Layout.Content>
        <CurrentActivities />
      </Layout.Content>
      <Layout.Footer>
        <Button onClick={addActivites}>+ {t('button.addNewActivities')}</Button>
      </Layout.Footer>
    </Layout>
  )
}

export default DailyOverview
