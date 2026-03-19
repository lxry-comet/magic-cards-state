import styled from '@emotion/styled';

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	gap: 30px;
	padding: 20px;
	list-style: none;
	margin: 0 auto;
`;
export const Item = styled.li`
	display: flex;
	width: 450px;
	perspective: 1000px;
`;

export const ItemText = styled.p`
	color: #fff;
	text-align: center;
`;
export const ItemContainer = styled.div`
		background: linear-gradient(145deg, #1a1a1d, #2a2a2e);
	border-radius: 20px;
	border: 1px solid ${({ borderColor }) => {
		if (borderColor === 'second') return '#ba37d4';
		if (borderColor === 'third') return '#d437af';
		return '#d4af37';
	}};
	box-shadow:
		0 10px 30px rgba(0, 0, 0, 0.5),
		inset 0 0 20px rgba(212, 175, 55, 0.1);
	padding: 25px;
	width: 100%;
	transition: transform 0.3s ease;
	color: #f0f0f0;
`;

// *.second {
// 	*border: 1px solid #ba37d4;
// *}
// *.third {
// 	*border: 1px solid #d437af;
// *}