import { useLocation } from 'react-router-dom'
import Layout from '../layout/Layout'
import EllipseSvg from '../features/background/EllipseSvg'
import { Button } from '../ui/button'
import { Check, Timer } from 'lucide-react'
import { Badge } from '../ui/badge'
import ReactEmojis from '@souhaildev/reactemojis'
import { useTranslation } from 'react-i18next'

function ActivityDetails() {
  const { t } = useTranslation('common', {
    keyPrefix: 'ActivityDetails',
  })
  const location = useLocation()
  const activityDetails = location.state?.activityDetails

  return (
    <>
      <Layout background="bg-tertiary" svg={<EllipseSvg />}>
        <Layout.Header className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">{activityDetails.title}</h1>
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-sm">{activityDetails.details}</h2>
            <Badge variant="default">
              <Timer style={{ width: '16px', color: '#FFB76D' }} />
              <p className="text-lightBlack font-semibold text-xs">{activityDetails.duration} min</p>
            </Badge>
          </div>
        </Layout.Header>
        <Layout.Content className="justify-center mt-16">
          {/* <h1 className="pl-2 font-semibold text-xl">{t('title.benefits')}</h1> */}
          <div className="gap-3 grid grid-cols-2 ">
            {activityDetails.benefits?.map((benefit, index) => {
              const isLargeBlock = index % 4 === 0 || index % 4 === 3
              const [firstWord, ...rest] = benefit.details.split(' ')
              const secondWord = rest.join(' ')

              return (
                <div
                  key={index}
                  className={`${
                    isLargeBlock ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                  } h-24 bg-audio rounded-lg shadow-lg flex flex-col relative `}
                >
                  <div className="absolute w-full flex justify-end p-3">
                    <ReactEmojis emoji={benefit.emoji} emojiStyle="2" style={{ width: 35, height: 35 }} />
                  </div>
                  <div className="flex h-full flex-col justify-end p-4">
                    <span className="text-sm font-light ">{firstWord}</span>
                    <span className="text-xl font-bold">{secondWord}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </Layout.Content>
        <Layout.Footer>
          <Button variant="validate" iconRight={<Check className="ml-1" />}>
            {t('button.markAsDone')}
          </Button>
        </Layout.Footer>
      </Layout>
    </>
  )
}

export default ActivityDetails
