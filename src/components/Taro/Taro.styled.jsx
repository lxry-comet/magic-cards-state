import styled from '@emotion/styled';

export const CardContainer = styled.div`
	    display: flex; 
      flex-direction: column; 
      align-items: center; 
      background-color: #1a1a1d; 
      padding: 20px; 
      height: 100%;
      border-radius: 8px;
`;

export const ItemTitle = styled.h2`
	margin-bottom: 10px;
`;

export const ItemImage = styled.img`
	text-align: center; 
	width: 200px;
	`;
export const ItemInter = styled.p`
	margin-top: 15px;
	color: #d4af37;
`;
export const ItemButton = styled.button`
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
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
  width: '100%'
`;