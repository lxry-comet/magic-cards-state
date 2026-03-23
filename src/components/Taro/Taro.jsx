import {CardContainer,
ItemTitle,
ItemImage,
ItemInter,
ItemButton} from './Taro.styled.jsx';


export default function Taro({
  name,
  id,
  suite,
  description,
  interpretation,
  imageUrl 
}) {
  return (
    <CardContainer>
      <ItemTitle>{name} (№{id})</ItemTitle>
      {imageUrl && <ItemImage
       src={imageUrl} alt={name} />} 
      <>
        <ItemInter><strong>Інтерпретація:</strong> {interpretation}</ItemInter>
      </>
    
      <br />
      <ItemButton
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#d4af37';
    e.target.style.color = '#000';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#d4af37';
  }}
>
  Обрати карту
</ItemButton>
    </CardContainer> 
  );
}