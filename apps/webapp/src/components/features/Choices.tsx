import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import Layout from './Layout'
import { useState } from 'react'
import { Check } from 'lucide-react'
import ReactEmojis from '@souhaildev/reactemojis'
import { toast, Toaster } from 'sonner'
import { useNavigate } from 'react-router'
import EmojiButton from './buttons/EmojiButtons'
import { Moods } from '@pom/shared-dtos'
import CustomSvg from './background/MoodSvg'
import { moodsProperties } from '../../utils/moodsProperties'

function Choices() {
  const { t } = useTranslation('common', {
    keyPrefix: 'Choices',
  })
  const navigate = useNavigate()
  const [selectedMood, setSelectedMood] = useState<Moods | null>(null)
  const currentMood = selectedMood ? moodsProperties[selectedMood] : null

  // Change les propriétés selon l'emoji sélectionné
  const handleIconClick = (mood: Moods) => {
    setSelectedMood(mood)
  }

  const handleValidate = () => {
    if (selectedMood) {
      localStorage.setItem('userMood', selectedMood)
      toast.success('Your mood has been saved !')
      setTimeout(() => navigate('/homepage'), 1500)
    } else {
      toast.error(t('toast.error'))
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <Layout
        background={currentMood?.background || 'bg-tertiary'}
        svg={currentMood?.moodSvg || <CustomSvg />}
      >
        <Layout.Header className="absolute h-1/3 w-full flex justify-center items-center flex-col">
          {selectedMood ? (
            <h1 className="font-semibold text-4xl text-white">{t(moodsProperties[selectedMood].text)}</h1>
          ) : (
            <h1 className="font-semibold text-4xl">{t('header.hello')}</h1>
          )}
        </Layout.Header>
        <Layout.Content className="flex text-center flex-grow w-full items-center mt-52 justify-center">
          {selectedMood ? (
            <ReactEmojis
              emoji={moodsProperties[selectedMood].emoji}
              emojiStyle="3"
              style={{ width: 180, height: 180 }}
            />
          ) : (
            <h2 className="font-semibold text-2xl">{t('content.howDoYouFeelToday')}</h2>
          )}
        </Layout.Content>
        <Layout.Footer>
          <div className="flex gap-3 justify-center">
            {Object.values(Moods).map((mood) => (
              <EmojiButton
                key={mood}
                emoji={moodsProperties[mood].emoji}
                onClick={() => handleIconClick(mood)}
              />
            ))}
          </div>
          <div className="flex justify-center">
            {selectedMood ? (
              <Button
                onClick={handleValidate}
                variant={moodsProperties[selectedMood].buttonVariant}
                size="default"
                className="text-xl font-normal text-white"
                iconRight={<Check className="ml-1" />}
              >
                {t('button.validate')}
              </Button>
            ) : (
              <p className="text-base">{t('footer.selectYourMood')}</p>
            )}
          </div>
        </Layout.Footer>
      </Layout>
    </>
  )
}

export default Choices
