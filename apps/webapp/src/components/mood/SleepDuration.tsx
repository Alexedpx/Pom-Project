import { useState } from 'react'
import { toast } from 'sonner'
import LeftWaveSvg from '../features/background/LeftWaveSvg'
import Layout from '../layout/Layout'
import { Toaster } from '../ui/sonner'
import { useNavigate } from 'react-router'
import { SleepDuration } from '@pom/shared-dtos'
import ReactEmojis from '@souhaildev/reactemojis'
import EmojiButton from '../features/buttons/EmojiButtons'
import { sleepDurationProperties } from '../../utils/sleepProperties'
import { Button } from '../ui/button'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function SleepDurationChoice() {
  const { t } = useTranslation('common', {
    keyPrefix: 'Choices',
  })
  const navigate = useNavigate()
  const [selectedSleepDuration, setSelectedSleepDuration] = useState<SleepDuration | null>(null)
  const currentSleepDuration = selectedSleepDuration ? sleepDurationProperties[selectedSleepDuration] : null

  const handleIconClick = (duration: SleepDuration) => {
    if (duration !== selectedSleepDuration) {
      setSelectedSleepDuration(duration)
    }
  }

  const handleValidate = () => {
    if (selectedSleepDuration) {
      localStorage.setItem('userSleepDuration', selectedSleepDuration)
      toast.success('Your sleep duration has been saved!')
      setTimeout(() => navigate('/dashboard'), 1500)
    } else {
      toast.error('Please select a sleep duration.')
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <Layout background="bg-tertiary" svg={<LeftWaveSvg />}>
        <Layout.Header>
          {selectedSleepDuration ? (
            <h1 className="font-semibold text-4xl">{currentSleepDuration?.title}</h1>
          ) : (
            <h1 className="font-semibold text-4xl">Votre sommeil</h1>
          )}
        </Layout.Header>
        <Layout.Content className="text-center justify-center items-center">
          {selectedSleepDuration ? (
            <ReactEmojis
              emoji={currentSleepDuration?.emoji}
              emojiStyle="3"
              style={{ width: 180, height: 180 }}
            />
          ) : (
            <h2 className="font-semibold text-2xl">Quelle a été votre durée de sommeil cette nuit ? </h2>
          )}
        </Layout.Content>
        <Layout.Footer className="gap-6 flex-col ">
          <div className="flex gap-3 justify-center">
            {Object.values(SleepDuration).map((duration) => (
              <EmojiButton
                key={duration}
                emoji={sleepDurationProperties[duration].emoji}
                onClick={() => handleIconClick(duration)}
              />
            ))}
          </div>

          {selectedSleepDuration ? (
            <Button
              variant="default"
              onClick={handleValidate}
              size="default"
              className="text-xl font-normal"
              iconRight={<Check className="ml-1" />}
            >
              {t('button.validate')}
            </Button>
          ) : (
            <p className="text-base">Veuillez sélectionner la durée</p>
          )}
        </Layout.Footer>
      </Layout>
    </>
  )
}

export default SleepDurationChoice
