import { Skeleton } from '@chakra-ui/react'

import React from 'react'

import Statistic from '@/components/Statistic/Statistic'

export default function StatisticSkeleton(props: { numberOfSkeletons: number }) {
  return (
    <>
      {(() => {
        const arr = []
        for (let i = 0; i < props.numberOfSkeletons; i++) {
          arr.push(
            <Skeleton width={'100%'} maxW="300px" key={i}>
              <Statistic name={'Skeleton'} value={0} />
            </Skeleton>
          )
        }
        return arr
      })()}
    </>
  )
}
