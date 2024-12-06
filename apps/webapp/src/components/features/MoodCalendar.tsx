import { useEffect, useState } from 'react'
import Layout from './Layout'
import HomePageSvg from './background/HomepageSvg'
import { Moods } from '@pom/shared-dtos'
import { generateFakeData } from '../../services/fakeData'
import { useTranslation } from 'react-i18next'
import { moodProperties } from '../../utils/moodProperties'

// const getDate = () => {
//     const today = new Date()
//     const month = today.getMonth() + 1
//     const date = today.getDate().toString().padStart(2, '0')
//     return `${date}/${month}`
// }

const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
const getDayOfWeek = (date: Date) => daysOfWeek[date.getDay()]

function MoodCalendar() {
  const { t } = useTranslation('common', {
    keyPrefix: 'MoodCalendar',
  })
  const [userMood, setUserMood] = useState<Moods | null>(null)
  const [currentDayOfWeek] = useState(getDayOfWeek(new Date()))
  const [historicalMoods, setHistoricalMoods] = useState<{ date: string; mood: Moods }[]>([])

  useEffect(() => {
    const storedMood = localStorage.getItem('userMood') as Moods
    if (storedMood && Object.values(Moods).includes(storedMood)) {
      setUserMood(storedMood)
    }

    const fakeMoods = generateFakeData(4)
    setHistoricalMoods(fakeMoods)
  }, [])

  return (
    <Layout background="bg-tertiary" svg={<HomePageSvg fill="#364861" width="100%" height="auto" />}>
      <Layout.Header className="absolute h-1/2 w-full flex justify-center items-center">
        <div className="w-[345px] h-auto border border-lightBlue rounded-xl bg-softBlue p-6">
          <h2 className="text-xl font-medium mb-4"> {t('title.myWeek')}</h2>
          <div className="grid grid-cols-7 h-16*">
            {daysOfWeek
              .slice(1)
              .concat(daysOfWeek[0])
              .map((day, index) => {
                let emoji = null

                if (day === currentDayOfWeek) {
                  emoji = userMood ? moodProperties[userMood]?.emoji : null
                } else {
                  const mood = historicalMoods[index]?.mood
                  emoji = mood ? moodProperties[mood]?.emoji : null
                }

                return (
                  <div key={index} className="flex flex-col items-center justify-between text-center h-full">
                    <span className="text-2xl">{emoji}</span>
                    <span className="font-normal">{day === currentDayOfWeek ? 'Auj' : day}</span>
                  </div>
                )
              })}
          </div>
        </div>
      </Layout.Header>
    </Layout>
  )
}

export default MoodCalendar
