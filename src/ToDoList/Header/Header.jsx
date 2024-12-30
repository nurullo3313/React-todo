import './header.css'

export default function Header({filtredSot}){

  const povisheniya = filtredSot.filter(item=>item.povisheniya).length;
  
    return(
  <header>
    <h1>Учет сотрудников в компании</h1>
    <h2>Общее число сотрудников:{filtredSot.length} </h2>
    <h2>Премию получат: {povisheniya}</h2>
  </header>
)
}