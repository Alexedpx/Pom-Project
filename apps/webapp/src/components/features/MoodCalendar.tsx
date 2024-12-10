import { useEffect, useState } from 'react'
import Layout from './Layout'
import HomePageSvg from './background/HomepageSvg'
import { Moods } from '@pom/shared-dtos'
import { generateFakeData } from '../../services/fakeData'
import { useTranslation } from 'react-i18next'
import { moodsProperties } from '../../utils/moodsProperties'

const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

const getMonday = (currentDate: Date): Date => {
  const day = currentDate.getDay()
  const diff = day === 0 ? -6 : 1
  const monday = new Date(currentDate)
  monday.setDate(currentDate.getDate() + diff)
  return monday
}

const formatDate = (date: Date): string => {
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`
}

function MoodCalendar() {
  const { t } = useTranslation('common', { keyPrefix: 'MoodCalendar' })
  const [userMood, setUserMood] = useState<Moods | null>(null)
  // Index du jour actuel
  const [currentDayIndex] = useState(new Date().getDay() - 1)
  const [historicalMoods, setHistoricalMoods] = useState<{ date: string; mood: Moods }[]>([])
  const [tasks, setTasks] = useState<{ title: string; duration: number; background: string }[]>([])
  // Dates dynamiques de la semaine
  const [weekDates, setWeekDates] = useState<string[]>([])

  useEffect(() => {
    // Calculer les dates de la semaine actuelle
    const monday = getMonday(new Date())
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(monday)
      date.setDate(monday.getDate() + i)
      return formatDate(date)
    })
    setWeekDates(dates)

    // Récupérer l'humeur stockée dans le localStorage
    const storedMood = localStorage.getItem('userMood') as Moods
    if (storedMood && Object.values(Moods).includes(storedMood)) {
      setUserMood(storedMood)
      console.log('Stored mood:', storedMood)

      const taskProps = moodsProperties[storedMood]?.task
      if (taskProps) {
        console.log('Mood task:', taskProps)
        setTasks([
          {
            title: taskProps.title,
            duration: taskProps.duration || 0,
            background: taskProps.background,
          },
        ])
      }
    }

    const fakeMoods = generateFakeData(currentDayIndex)
    setHistoricalMoods(fakeMoods)
  }, [currentDayIndex])

  return (
    <Layout background="bg-tertiary" svg={<HomePageSvg fill="#364861" width="100%" height="auto" />}>
      <Layout.Header className="absolute h-1/2 w-full flex justify-center items-center">
        <div className="border w-[360px] h-[180px] rounded-lg flex flex-col justify-around p-6 ">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium">{t('title.myWeek')}</h2>
          </div>

          <div className="grid grid-cols-7 gap-8 ">
            {daysOfWeek.map((day, index) => {
              let emoji = null

              if (index === currentDayIndex) {
                emoji = userMood ? moodsProperties[userMood]?.emoji : null
              } else if (index < currentDayIndex) {
                const mood = historicalMoods[index]?.mood
                emoji = mood ? moodsProperties[mood]?.emoji : null
              } else {
                emoji = null
              }

              return (
                <div key={index} className="flex flex-col justify-between items-center text-center h-full">
                  <span className="text-2xl">{emoji}</span>
                  <div className="flex flex-col">
                    <span className="font-medium"> {index === currentDayIndex ? 'Auj' : day}</span>
                    <span className="text-sm text-gray-500">{weekDates[index]}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Layout.Header>
      <Layout.Content className="h-full items-center justify-center">
        {userMood && (
          <ul>
            {tasks.map((task, index) => {
              return (
                <li key={index}>
                  <div className={`w-[345px] h-[95px] p-6 rounded-3xl ${task.background}`}>
                    <p>{task.title}</p>
                    <p>{task.duration} min</p>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </Layout.Content>
    </Layout>
  )
}

export default MoodCalendar
