import { Check } from 'lucide-react'
import { Button } from '../ui/button'
import LeftWaveSvg from './background/LeftWaveSvg'
import Layout from './Layout'
import { useState } from 'react'
import { activity } from '../../utils/activityProperties'
import { Category } from '@pom/shared-dtos'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'

function NewActivities() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const handleDisplayCategory = (category: string) => {
    setSelectedCategory(category)
  }
  const selectedActivities = activity[selectedCategory as Category] || []

  return (
    <>
      <Layout background="bg-tertiary" svg={<LeftWaveSvg fill="#364861" />}>
        <Layout.Section className="flex gap-5">
          <h1>Sélectionnez une catégorie</h1>
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
          <h1>Sélectionnez les activités à effectuer</h1>

          <div className="flex justify-between ">
            {selectedActivities.length > 0 ? (
              selectedActivities.map((activityItem) => (
                <div
                  key={activityItem.title}
                  className={`w-[110px] h-[120px] rounded-xl p-3 ${activityItem.background}`}
                >
                  <div className="flex flex-col items-end justify-around h-full">
                    <Checkbox className={`${activityItem.checkboxColor}`} />
                    <h1 className="flex flex-col w-full ">
                      <span className="font-light text-xs">{activityItem.title.split(' ')[0]}</span>
                      <span className="font-semibold text-xs">
                        {activityItem.title.slice(activityItem.title.indexOf(' ') + 1)}
                      </span>
                    </h1>
                  </div>
                </div>
              ))
            ) : (
              <p>Aucune activité disponible pour cette catégorie.</p>
            )}
          </div>
        </Layout.Section>
        <Layout.Section className="flex gap-6">
          <h1>Définissez la durée et l'heure du rappel</h1>
          <div className="flex justify-between">
            {/* <Timer
                className="bg-creative-foreground w-7 h-7 rounded-md p-1"
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#FFB76D',
                }}
              /> */}
            <Input type="number" className="pl-9" />

            {/* <Bell
                className="bg-creative-foreground w-7 h-7 rounded-md p-1"
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#FFB76D',
                }}
              /> */}
            <Input type="time" className="pl-9" />
          </div>
        </Layout.Section>
        <Layout.Footer>
          <Button variant="secondary">
            Valider l’activité <Check />
          </Button>
        </Layout.Footer>
      </Layout>
    </>
  )
}
export default NewActivities
