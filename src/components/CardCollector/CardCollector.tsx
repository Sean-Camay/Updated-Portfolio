import { Suspense } from 'react'
import { Button } from '@mui/material'
import { useRandomCards } from '../../hooks/useRandomCard'
import { CardList } from './CardList'

export const CardCollector = () => {
  const { resource, getMoreCards } = useRandomCards(10)

  return (
    <>
      <Button onClick={getMoreCards}>Get More Cards</Button>
      <Suspense fallback={<p>Loading...</p>}>
        <CardList resource={resource} />
      </Suspense>
    </>
  )
}
