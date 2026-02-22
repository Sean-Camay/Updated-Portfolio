import { RandomMagicCard } from '../../types/magicCard'

export const CardList = ({
  resource,
}: {
  resource: { read: () => RandomMagicCard[] }
}) => {
  const cards = resource.read()
  return (
    <div>
      {cards.map((card) => (
        <div key={card.name}>
          <h2>Name: {card.name}</h2>
          <p>Type: {card.type_line}</p>
          <p>Mana Cost: {card.mana_cost}</p>
          <img src={card.image_uris?.png} alt={card.name} />
          <p>Artist: {card.artist}</p>
        </div>
      ))}
    </div>
  )
}
