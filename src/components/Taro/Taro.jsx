import {CardContainer,
ItemTitle,
ItemImage,
ItemInter,
ItemButton} from './Taro.styled.jsx';


import css from "./Taro.module.css"; 


export default function Taro({
  name,
  id,
  suite,
  description,
  interpretation,
  imageUrl 
}) {
  return (
    <CardContainer className={css.cardContainer}>
      <ItemTitle className={css.itemTitle}>{name} (№{id})</ItemTitle>
      
      {/* Якщо у тебе будуть зображення карт */}
      {imageUrl && <img className={css.itemImage}
       src={imageUrl} alt={name} />}
      
      {/* <p><strong>Символіка:</strong> {suite}</p> */}
      
      {/* <div style={{ color: "#ffffff" }}>
        <p><strong>Опис:</strong> {description}</p>
      </div> */}
      
      <>
        <ItemInter className={css.itemInter}><strong>Інтерпретація:</strong> {interpretation}</ItemInter>
      </>
    
      <br />
      <ItemButton className={css.itemButton}
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