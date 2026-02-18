// import { Suspense, use, useEffect, useState, ChangeEvent } from 'react'
import { useEffect, useState, ChangeEvent } from 'react'
import axios from 'axios'
import { Button, TextField } from '@mui/material'

interface RandomMagicCard {
  name?: string
  type_line?: string
  artist?: string
  gameChanger?: boolean
  mana_cost?: string
  image_uris?: {
    png?: string
  }
}

// const fetchRandomCards = (count = 10) => {
//   const requests = Array.from({ length: count }, () =>
//     axios.get('https://api.scryfall.com/cards/random'),
//   )
//   return Promise.all(requests).then((responses) =>
//     responses.map((response) => response.data),
//   )
// }

// const CardList = ({
//   cardsPromise,
// }: {
//   cardsPromise: Promise<RandomMagicCard[]>
// }) => {
//   const cards = use(cardsPromise)
//   return (
//     <div>
//       {cards.map((card) => (
//         <div key={card.name}>
//           <h2>Name: {card.name}</h2>
//           <p>Type: {card.type_line}</p>
//           <p>Mana Cost: {card.mana_cost}</p>
//           <img src={card.image_uris?.png} alt={card.name} />
//           <p>Artist: {card.artist}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// example using Suspense
// export const CardCollector = () => {
//   const [cardsPromise] = useState(() => fetchRandomCards(10))

//   return (
//     <Suspense fallback={<p>Loading...</p>}>
//       <CardList cardsPromise={cardsPromise} />
//     </Suspense>
//   )
// }

export const CardCollector = () => {
  const [randomCards, setRandomCards] = useState<RandomMagicCard[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [nameInput, setNameInput] = useState<string>('')

  useEffect(() => {
    const abortController = new AbortController()
    let isMounted = true

    const getRandomCards = async (count = 10) => {
      try {
        setLoading(true)

        const requests = Array.from({ length: count - 1 }, () =>
          axios.get('https://api.scryfall.com/cards/random'),
        )

        const cards = await Promise.all(requests)

        if (isMounted) {
          setRandomCards((prevCards) => [
            ...prevCards,
            ...cards.map((card) => card.data),
          ])
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          console.error('Error fetching random card:', error)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    getRandomCards()

    // cleanup function
    return () => {
      isMounted = false
      abortController.abort()
    }
  }, [])

  const getMoreCards = async () => {
    try {
      const response = await axios.get('https://api.scryfall.com/cards/random')
      setRandomCards((prevCards) => [...prevCards, response.data])
    } catch (error) {
      console.error('Error fetching random card:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <TextField
        value={nameInput}
        id='standard-basic'
        label={`${nameInput} Standard`}
        variant='standard'
        type='text'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNameInput(e.target.value)
        }
      />
      <Button onClick={getMoreCards}>Get More Cards</Button>
      <div>
        {loading ?
          <p>Loading...</p>
        : randomCards.map((card) => (
            <div key={card.name}>
              <h2>Name: {card.name}</h2>
              <p>Type: {card.type_line}</p>
              <p>Mana Cost: {card.mana_cost}</p>
              <img src={card.image_uris?.png} alt={card.name} />
              <p>Artist: {card.artist}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
