import { useState, useEffect } from 'react'
import { Mood } from '@pom/shared-dtos'
import { moodProperties } from '../../utils/moodProperties'
import { generateFakeData } from '../../services/fakeData'
import { formatDate, getDaysOfWeek } from '../../utils/date'
import ReactEmojis from '@souhaildev/reactemojis'

const daysOfWeek = getDaysOfWeek()

interface MoodCalendarProps {
  onMoodChange: (mood: Mood | null) => void
}

function MoodCalendar({ onMoodChange }: MoodCalendarProps) {
  const [userMood, setUserMood] = useState<Mood | null>(null)
  const [currentDayIndex] = useState(new Date().getDay() - 1)
  const [historicalMoods, setHistoricalMoods] = useState<{ date: string; mood: Mood }[]>([])
  const [weekDates, setWeekDates] = useState<string[]>([])

  useEffect(() => {
    const dates = daysOfWeek.map((_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - date.getDay() + i + 1)
      return formatDate(date)
    })
    setWeekDates(dates)

    const storedMood = localStorage.getItem('userMood') as Mood
    if (storedMood && Object.values(Mood).includes(storedMood)) {
      setUserMood(storedMood)
      console.log('Stored mood:', storedMood)
    }

    const fakeMoods = generateFakeData(currentDayIndex)
    setHistoricalMoods(fakeMoods)
  }, [currentDayIndex])

  useEffect(() => {
    onMoodChange(userMood)
  }, [userMood, onMoodChange])

  return (
    <div className="border h-auto rounded-lg flex flex-col justify-around p-8 ">
      <div className="grid grid-cols-7 gap-8 ">
        {daysOfWeek.map((day, index) => {
          let emoji = null

          if (index === currentDayIndex) {
            emoji = userMood ? moodProperties[userMood]?.emoji : null
          } else if (index < currentDayIndex) {
            const mood = historicalMoods[index]?.mood
            emoji = mood ? moodProperties[mood]?.emoji : null
          }

          return (
            <div key={index} className="flex flex-col justify-between items-center text-center gap-2 h-full">
              <span className="text-3xl">
                {' '}
                <ReactEmojis emoji={emoji} emojiStyle="3" style={{ width: 35, height: 35 }} />
              </span>

              <div className="flex flex-col">
                <span className="text-sm font-medium">{index === currentDayIndex ? 'AUJ' : day}</span>
                <span className="text-xs text-gray-500">{weekDates[index]}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MoodCalendar
