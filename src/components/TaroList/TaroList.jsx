import PropTypes from 'prop-types'
import taro from '../../json/taro.json'
import { getBorderColor } from '../../utils/getBorderColor'
import { Item, ItemContainer, ItemText, List } from './TaroList.styled.jsx'

import Taro from '../Taro/Taro'

function TaroList({ items }) {
	const cards = Array.isArray(items)
		? items
		: (items &&
				(items.cards || (items.tarot_deck && items.tarot_deck.cards))) ||
			(taro && (taro.cards || (taro.tarot_deck && items.tarot_deck.cards))) ||
			[]

	if (!cards.length)
		return <ItemText>No cards to display</ItemText>

	return (
		<>
			<List>
				{cards.map((card, index) => (
					<Item key={card.id}>
						<ItemContainer
							borderColor={getBorderColor(index)}
						>
							<Taro
								id={card.id}
								name={
									typeof card.name === 'object' ? card.name.name : card.name
								}
								suite={card.suite}
								description={card.description}
								interpretation={card.interpretation}
								imageUrl={card.imageUrl}
							/>
						</ItemContainer>
					</Item>
				))}
			</List>
		</>
	)
}

TaroList.propTypes = {
	items: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
export default TaroList
