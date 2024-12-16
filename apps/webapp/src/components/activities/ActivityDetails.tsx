import { useLocation } from 'react-router-dom'
import Layout from '../layout/Layout'
import EllipseSvg from '../features/background/EllipseSvg'
import { Button } from '../ui/button'
import { Check, Timer } from 'lucide-react'
import { Badge } from '../ui/badge'

function ActivityDetails() {
  const location = useLocation()
  const activityDetails = location.state?.activityDetails

  return (
    <>
      <Layout background="bg-tertiary" svg={<EllipseSvg />}>
        <Layout.Header className="flex flex-col  gap-6">
          <h1 className="text-2xl font-bold">{activityDetails.title}</h1>
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-sm">{activityDetails.details}</h2>
            <Badge variant="default">
              <Timer style={{ width: '16px', color: '#FFB76D' }} />
              <p className="text-lightBlack font-semibold text-xs">{activityDetails.duration} min</p>
            </Badge>
          </div>
        </Layout.Header>
        <Layout.Content className="flex  justify-center border">
          <Layout.Section className="mt-0 ">
            <h1>Bienfaits</h1>
          </Layout.Section>
          <div className="bg-softBlue p-4 grid grid-cols-2 gap-4">
            {' '}
            {activityDetails.benefits.map((benefit, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
                <p>{benefit.details}</p>
              </div>
            ))}
          </div>
        </Layout.Content>
        <Layout.Footer>
          <Button variant="secondary" iconRight={<Check className="ml-1" />}>
            Marquer comme terminée
          </Button>
        </Layout.Footer>
      </Layout>
    </>
  )
}

export default ActivityDetails
