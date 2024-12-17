import { Check } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'
import { activity } from '../../utils/activityProperties'
import { Category } from '@pom/shared-dtos'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { useTranslation } from 'react-i18next'
import Layout from '../layout/Layout'
import LeftWaveSvg from '../features/background/LeftWaveSvg'

function AddActivity() {
  const { t } = useTranslation('common', { keyPrefix: 'NewActivities' })
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  // const [duration, setDuration]= useState<string>('')
  // const [reminder, setReminder]= useState<number>()

  const handleDisplayCategory = (category: string) => {
    setSelectedCategory(category)
  }
  const selectedActivities = activity[selectedCategory as Category] || []

  return (
    <>
      <Layout background="bg-tertiary" svg={<LeftWaveSvg fill="#364861" />}>
        <Layout.Section className="flex gap-5">
          <h1>{t('title.selectCategory')}</h1>
          <div className="flex justify-between">
            <Button
              variant="icon"
              size="icon"
              className="bg-primary border-none shadow-xl"
              onClick={() => handleDisplayCategory(Category.SPORTY)}
            >
              <div className="bg-sporty rounded-full p-3 shadow-xl">⚽</div>
            </Button>
            <Button
              variant="icon"
              size="icon"
              className="bg-audio border-none shadow-xl"
              onClick={() => handleDisplayCategory(Category.AUDIO)}
            >
              <div className="bg-audio-foreground rounded-full p-3 shadow-xl">🎧</div>
            </Button>
            <Button
              variant="icon"
              size="icon"
              className="bg-relaxation border-none shadow-xl"
              onClick={() => handleDisplayCategory(Category.RELAXATION)}
            >
              <div className="bg-relaxation-foreground rounded-full p-3 shadow-xl">🌱</div>
            </Button>

            <Button
              variant="icon"
              size="icon"
              className="bg-cerebral border-none shadow-xl"
              onClick={() => handleDisplayCategory(Category.CEREBRAL)}
            >
              <div className="bg-cerebral-foreground rounded-full p-3 shadow-xl">🧠</div>
            </Button>
            <Button
              variant="icon"
              size="icon"
              className="bg-creative border-none shadow-xl"
              onClick={() => handleDisplayCategory(Category.CREATIVE)}
            >
              <div className="bg-creative-foreground rounded-full p-3 shadow-xl">🎨</div>
            </Button>
          </div>
        </Layout.Section>
        <Layout.Section className="flex gap-6">
          <h1>{t('title.chooseActivities')}</h1>

          <div className="flex justify-between ">
            {selectedActivities.length &&
              selectedActivities.map((activityItem) => (
                <div
                  key={activityItem.details}
                  className={`w-[110px] h-[120px] rounded-xl p-3 ${activityItem.background}`}
                >
                  <div className="flex flex-col items-end justify-around h-full">
                    <Checkbox className={`${activityItem.checkboxColor}`} />
                    <h1 className="flex flex-col w-full ">
                      <span className="font-light text-xs">{activityItem.details.split(' ')[0]}</span>
                      <span className="font-semibold text-xs">
                        {activityItem.details.slice(activityItem.details.indexOf(' ') + 1)}
                      </span>
                    </h1>
                  </div>
                </div>
              ))}
          </div>
        </Layout.Section>
        {/* <Layout.Section className="flex gap-6">
          <h1>{t('title.defineDurationAndReminderTime')}</h1>
          <div className="flex justify-between">
             <Timer
                className="bg-creative-foreground w-7 h-7 rounded-md p-1"
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#FFB76D',
                }}
              /> 
            <Input type="number" className="pl-9" />

             <Bell
                className="bg-creative-foreground w-7 h-7 rounded-md p-1"
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#FFB76D',
                }}
              /> 
            <Input type="time" className="pl-9" />
          </div>
        </Layout.Section> */}
        <Layout.Footer>
          <Button variant="default">
            {t('button.validateActivity')}
            <Check />
          </Button>
        </Layout.Footer>
      </Layout>
    </>
  )
}
export default AddActivity
