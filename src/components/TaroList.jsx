import PropTypes from 'prop-types'
import taro from '../json/taro.json'
import Taro from './Taro'
import clsx from 'clsx';
import { getBorderColor } from '../utils/getBorderColor';

function TaroList({ items }) {
  
  const cards = Array.isArray(items)
    ? items
    : (items && (items.cards || (items.tarot_deck && items.tarot_deck.cards))) ||
      (taro && (taro.cards || (taro.tarot_deck && items.tarot_deck.cards))) ||
      []

  if (!cards.length) return <p className="itemText">No cards to display</p>

  return (
    <>
      <ul className="list"
      >
        {cards.map(card => (
          <li className="item"
            key={card.id} 
          >
            <div className={clsx('itemContainer', getBorderColor(cards.indexOf(card)))}>
              <Taro
                id={card.id}
                name={typeof card.name === 'object' ? card.name.name : card.name}
                suite={card.suite}
                description={card.description}
                interpretation={card.interpretation}
                imageUrl={card.imageUrl}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

TaroList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
export default TaroList