import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { useState } from 'react'
import { Check } from 'lucide-react'
import ReactEmojis from '@souhaildev/reactemojis'
import { toast, Toaster } from 'sonner'
import { useNavigate } from 'react-router'
import { Mood } from '@pom/shared-dtos'
import { moodProperties } from '../../utils/moodProperties'
import Layout from '../layout/Layout'
import LeftWaveSvg from '../features/background/LeftWaveSvg'
import EmojiButton from '../features/buttons/EmojiButtons'

function Choices() {
  const { t } = useTranslation('common', {
    keyPrefix: 'Choices',
  })
  const navigate = useNavigate()
  const [selectedMood, setSelectedMood] = useState<Mood>()
  const [isBouncing, setIsBouncing] = useState(false)
  const currentMood = selectedMood ? moodProperties[selectedMood] : null

  const handleIconClick = (emoji: Mood) => {
    if (emoji !== selectedMood) {
      setSelectedMood(emoji)
      setIsBouncing(true)

      setTimeout(() => {
        setIsBouncing(false)
      }, 800)
    }
  }

  const handleValidate = () => {
    if (selectedMood) {
      localStorage.setItem('userMood', selectedMood)
      toast.success('Your mood has been saved !')
      setTimeout(() => navigate('/dashboard'), 1500)
    } else {
      toast.error(t('toast.error'))
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <Layout
        background={currentMood?.background || 'bg-tertiary'}
        svg={currentMood?.moodSvg || <LeftWaveSvg />}
      >
        <Layout.Header>
          {selectedMood ? (
            <h1 className="font-semibold text-4xl">{t(moodProperties[selectedMood].text)}</h1>
          ) : (
            <h1 className="font-semibold text-4xl">{t('header.hello')}</h1>
          )}
        </Layout.Header>
        <Layout.Content className=" text-center justify-center ">
          {selectedMood ? (
            <ReactEmojis
              emoji={moodProperties[selectedMood].emoji}
              emojiStyle="3"
              style={{ width: 180, height: 180 }}
              className={isBouncing ? 'animate-bounceEmoji' : ''}
            />
          ) : (
            <h2 className="font-semibold text-2xl">{t('content.howDoYouFeelToday')}</h2>
          )}
        </Layout.Content>
        <Layout.Footer className="gap-6 flex-col ">
          <div className="flex gap-2 justify-center">
            {Object.values(Mood).map((emoji) => (
              <EmojiButton
                key={emoji}
                emoji={moodProperties[emoji].emoji}
                onClick={() => handleIconClick(emoji)}
              />
            ))}
          </div>

          {selectedMood ? (
            <Button
              onClick={handleValidate}
              variant={moodProperties[selectedMood].buttonVariant}
              size="default"
              className="text-xl font-normal"
              iconRight={<Check className="ml-1" />}
            >
              {t('button.validate')}
            </Button>
          ) : (
            <p className="text-base">{t('footer.selectYourMood')}</p>
          )}
        </Layout.Footer>
      </Layout>
    </>
  )
}

export default Choices
