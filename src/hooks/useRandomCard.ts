import { useState } from 'react'
import axios from 'axios'
import { wrapPromise } from '../utils/wrapPromise'

const fetchRandomCards = (count = 10) => {
  const requests = Array.from({ length: count }, () =>
    axios.get('https://api.scryfall.com/cards/random'),
  )
  return wrapPromise(
    Promise.all(requests).then((responses) =>
      responses.map((response) => response.data),
    ),
  )
}

export const useRandomCards = (initialCount = 10) => {
  const [resource, setResource] = useState(() => fetchRandomCards(initialCount))

  // useEffect(() => {
  //   const abortController = new AbortController()
  //   let isMounted = true

  //   const getRandomCards = async () => {
  //     try {
  //       setLoading(true)

  //       const requests = Array.from({ length: initialCount }, () =>
  //         axios.get('https://api.scryfall.com/cards/random', {
  //           signal: abortController.signal,
  //         }),
  //       )

  //       const responses = await Promise.all(requests)

  //       if (isMounted) {
  //         setRandomCards((prevCards) => [
  //           ...prevCards,
  //           ...responses.map((card) => card.data),
  //         ])
  //       }
  //     } catch (error) {
  //       if (axios.isCancel(error)) {
  //         console.log('Request canceled', error.message)
  //       } else {
  //         console.error('Error fetching random cards:', error)
  //       }
  //     } finally {
  //       if (isMounted) {
  //         setLoading(false)
  //       }
  //     }
  //   }
  //   getRandomCards()

  //   return () => {
  //     isMounted = false
  //     abortController.abort()
  //   }
  // }, [initialCount])

  const getMoreCards = async () => {
    setResource(fetchRandomCards())
  }

  return { resource, getMoreCards }
}
