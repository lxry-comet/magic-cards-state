import styled from '@emotion/styled'

export const ShopList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	gap: 30px;
	padding: 20px;
	list-style: none;
	margin: 0 auto;
`

export const ShopItem = styled.li`
	display: flex;
	width: 450px;
	perspective: 1000px;
`

export const ShopItemText = styled.p`
	color: #fff;
	text-align: center;
`

export const ShopItemContainer = styled.div`
	background: linear-gradient(145deg, #1a1a1d, #2a2a2e);
	border-radius: 20px;
	border: 1px solid
		${({ borderColor }) => {
			if (borderColor === 'second') return '#ba37d4'
			if (borderColor === 'third') return '#d437af'
			return '#d4af37'
		}};
	box-shadow:
		0 10px 30px rgba(0, 0, 0, 0.5),
		inset 0 0 20px rgba(212, 175, 55, 0.1);
	padding: 25px;
	width: 100%;
	transition: transform 0.3s ease;
	color: #f0f0f0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const AddToCartButton = styled.button`
	margin-top: 20px;
	padding: 12px 24px;
	background-color: transparent;
	color: #d4af37;
	border: 1px solid #d4af37;
	border-radius: 4px;
	cursor: pointer;
	font-family: 'Georgia, serif';
	font-size: 14px;
	letter-spacing: 2px;
	text-transform: uppercase;
	transition: all 0.3s ease;
	box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
	width: 100%;

	&:hover {
		background-color: rgba(212, 175, 55, 0.1);
		box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
	}

	&:active {
		transform: scale(0.98);
	}
`
