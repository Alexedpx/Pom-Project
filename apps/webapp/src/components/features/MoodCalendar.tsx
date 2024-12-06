import { useEffect, useState } from 'react'
import Layout from './Layout'
import HomePageSvg from './background/HomepageSvg'
import { Moods } from '@pom/shared-dtos'
import { generateFakeData } from '../../services/fakeData'
import { useTranslation } from 'react-i18next'
import { moodsProperties } from '../../utils/moodsProperties'

const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven']
const getDayOfWeek = (date: Date) => daysOfWeek[date.getDay()]

function MoodCalendar() {
  const { t } = useTranslation('common', { keyPrefix: 'MoodCalendar' })
  const [userMood, setUserMood] = useState<Moods | null>(null)
  const [currentDayOfWeek] = useState(getDayOfWeek(new Date()))
  const [historicalMoods, setHistoricalMoods] = useState<{ date: string; mood: Moods }[]>([])
  const [tasks, setTasks] = useState<{ title: string; duration: number }[]>([])

  useEffect(() => {
    // Récupérer l'humeur stockée dans le localStorage
    const storedMood = localStorage.getItem('userMood') as Moods
    if (storedMood && Object.values(Moods).includes(storedMood)) {
      setUserMood(storedMood)
      const moodTask = moodsProperties[storedMood]?.task
      if (moodTask) {
        // Remplir tasks avec la tâche récupérée
        setTasks([
          {
            title: moodTask.title,

            duration: moodTask.duration || 0,
          },
        ])
      }
    }

    const fakeMoods = generateFakeData(4)
    setHistoricalMoods(fakeMoods)
  }, [])

  return (
    <Layout background="bg-tertiary" svg={<HomePageSvg fill="#364861" width="100%" height="auto" />}>
      <Layout.Header className="absolute h-1/2 w-full flex justify-center items-center">
        <div className="border w-[360px] h-[180px] rounded-lg flex flex-col justify-around p-6 ">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium">{t('title.myWeek')}</h2>
          </div>

          <div className="grid grid-cols-5 gap-8 ">
            {daysOfWeek.map((day, index) => {
              let emoji = null

              if (day === currentDayOfWeek) {
                emoji = userMood ? moodsProperties[userMood]?.emoji : null
              } else {
                const mood = historicalMoods[index]?.mood
                emoji = mood ? moodsProperties[mood]?.emoji : null
              }

              return (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center gap-1 text-center h-full"
                >
                  <span className="text-3xl">{emoji}</span>
                  <span className="font-normal">{day === currentDayOfWeek ? 'Auj' : day}</span>
                </div>
              )
            })}
          </div>
        </div>
      </Layout.Header>
      <Layout.Content className="">
        {userMood && (
          <>
            <h3>{t('content.yourDailyProgram')}</h3>
            <ul>
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <li key={index} className="">
                    <div>
                      <p>{task.title}</p>
                      <p>{task.duration} min</p>
                    </div>
                  </li>
                ))
              ) : (
                <p>{t('content.noTask')}</p>
              )}
            </ul>
          </>
        )}
      </Layout.Content>
    </Layout>
  )
}

export default MoodCalendar
