import { useEffect, useState } from 'react'
import Layout from './Layout'
import HomePageSvg from './background/HomepageSvg'
import { MoodValues } from '@pom/shared-dtos'
import { generateFakeData } from '../../services/fakeData'
import { useTranslation } from 'react-i18next'
import { moodsProperties } from '../../utils/moodsProperties'
import { Bell, Timer } from 'lucide-react'
import { Button } from '../ui/button'

const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']

const getMonday = (currentDate: Date): Date => {
  const day = currentDate.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const monday = new Date(currentDate)
  monday.setDate(currentDate.getDate() + diff)
  return monday
}

const formatDate = (date: Date): string => {
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`
}

function MoodCalendar() {
  const { t } = useTranslation('common', { keyPrefix: 'MoodCalendar' })
  const [userMood, setUserMood] = useState<MoodValues | null>(null)
  // Index du jour actuel
  const [currentDayIndex] = useState(new Date().getDay() - 1)
  const [historicalMoods, setHistoricalMoods] = useState<{ date: string; mood: MoodValues }[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    const storedMood = localStorage.getItem('userMood') as MoodValues
    if (storedMood && Object.values(MoodValues).includes(storedMood)) {
      setUserMood(storedMood)
      console.log('Stored mood:', storedMood)

      const tasks = moodsProperties[storedMood]?.task
      if (tasks) {
        setTasks(
          tasks.map((task) => ({
            title: task.title,
            duration: task.duration || 0,
            background: task.background,
          }))
        )
      }
    }

    const fakeMoods = generateFakeData(currentDayIndex)
    setHistoricalMoods(fakeMoods)
  }, [currentDayIndex])

  return (
    <Layout background="bg-tertiary" svg={<HomePageSvg fill="#364861" width="100%" height="auto" />}>
      <Layout.Header>
        <div className="border w-3/4 h-auto rounded-lg flex flex-col justify-around p-6 ">
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
                    <span className="text-xs text-gray-500">{weekDates[index]}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Layout.Header>
      <Layout.Content>
        {userMood && (
          <ul>
            {moodsProperties[userMood]?.task?.map((task, index) => (
              <li key={index} className="mb-4">
                <div
                  className={`w-[345px] h-[100px]  rounded-3xl ${task.background} flex flex-col gap-2 pt-5 pl-7`}
                >
                  <p className="font-bold text-white">{task.title}</p>
                  <div className="flex gap-3">
                    <div className="bg-white w-[68px] h-[28px] rounded-3xl flex items-center justify-center gap-1">
                      <Timer style={{ width: '16px', color: '#FFB76D' }} />
                      <p className="text-lightBlack font-semibold text-xs">{task.duration} min</p>
                    </div>
                    <div className="border-2 border-white w-[68px] h-[28px] rounded-3xl flex items-center justify-center gap-1">
                      <Bell style={{ width: '16px', color: '#FFB76D' }} />
                      <p className="text-white font-semibold text-xs">{task.reminderTime}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Layout.Content>
      <Layout.Footer className="justify-center mt-auto">
        <Button>
          <span>+</span>Ajouter une nouvelle activité
        </Button>
      </Layout.Footer>
    </Layout>
  )
}

export default MoodCalendar
