import PropTypes from 'prop-types'
import { getBorderColor } from '../../utils/getBorderColor'
import {
	AddToCartButton,
	ShopItem,
	ShopItemContainer,
	ShopItemText,
	ShopList
} from './Shop.styled.jsx'

export default function Shop({ items = [], selectedItems = [], onToggleCart }) {
	const isSelected = itemId =>
		selectedItems.some(selectedItem => selectedItem.id === itemId)

	if (!items || items.length === 0) {
		return <ShopItemText>No items in shop</ShopItemText>
	}

	return (
		<ShopList>
			{items.map((item, index) => (
				<ShopItem key={item.id || index}>
					<ShopItemContainer borderColor={getBorderColor(index)}>
						<div>
							<h3>{item.name}</h3>
							<p style={{ color: '#d4af37', marginTop: '10px' }}>
								Author: {item.author}
							</p>
							<p style={{ marginTop: '15px', fontSize: '14px' }}>
								{item.description}
							</p>
							<div style={{ marginTop: '15px' }}>
								<p style={{ color: '#d4af37', fontWeight: 'bold' }}>
									Price: {item.price} PLN
								</p>
								<p style={{ fontSize: '12px', marginTop: '5px' }}>
									Number of cards: {item.specification?.cards_count}
								</p>
								<p style={{ fontSize: '12px' }}>
									Stock:{' '}
									<span
										style={{
											color: item.stock > 0 ? '#00d084' : '#ff4444'
										}}
									>
										{item.stock > 0 ? 'Available' : 'Unavailable'}
									</span>
								</p>
							</div>
							<AddToCartButton onClick={() => onToggleCart?.(item)}>
								{isSelected(item.id) ? 'Delete from Cart' : 'Add to Cart'}
							</AddToCartButton>
						</div>
					</ShopItemContainer>
				</ShopItem>
			))}
		</ShopList>
	)
}

Shop.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	selectedItems: PropTypes.arrayOf(PropTypes.object),
	onToggleCart: PropTypes.func
}
