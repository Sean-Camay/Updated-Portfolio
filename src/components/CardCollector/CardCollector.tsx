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

export const CardCollector = () => {
  const [randomCards, setRandomCards] = useState<RandomMagicCard[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [nameInput, setNameInput] = useState<string>('')

  useEffect(() => {
    const getRandomCards = async (count = 10) => {
      try {
        setLoading(true)
        // const response = await axios.get(
        //   'https://api.scryfall.com/cards/random'
        // )
        // console.log('response', response.data)
        // setRandomCards([response.data])

        const requests = Array.from({ length: count - 1 }, () =>
          axios.get('https://api.scryfall.com/cards/random')
        )

        const cards = await Promise.all(requests)
        setRandomCards((prevCards) => [
          ...prevCards,
          ...cards.map((card) => card.data),
        ])
      } catch (error) {
        console.error('Error fetching random card:', error)
      } finally {
        setLoading(false)
      }
    }

    getRandomCards()
  }, [])

  const getMoreCards = async () => {
    try {
      const response = await axios.get('https://api.scryfall.com/cards/random')
      console.log('response', response.data)
      setRandomCards((prevCards) => [...prevCards, response.data])
      console.log('randomCards', randomCards)
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
        {loading ? (
          <p>Loading...</p>
        ) : (
          randomCards.map((card) => (
            <div key={card.name}>
              <h2>Name: {card.name}</h2>
              <p>Type: {card.type_line}</p>
              <p>Mana Cost: {card.mana_cost}</p>
              <img src={card.image_uris?.png} alt={card.name} />
              <p>Artist: {card.artist}</p>
            </div>
          ))
        )}
      </div>
    </>
  )
}
