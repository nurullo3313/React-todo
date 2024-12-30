import "./addSotrud.css";

export default function AddSotrud({addSotrud, setZarplata ,setNewSotrud,zarplata , newSotrud  }){
    
    return(
       <div className="container">
        <h1>Добавьте нового сотрудника</h1>
        <div className="inputs">
            <input type="text" value={newSotrud}  onChange={(e)=>setNewSotrud(e.target.value)} placeholder="как его зовут?"/>
            <input type="text" value={zarplata} onChange={(e)=>setZarplata(e.target.value)} placeholder="З/П в $"/>
            <button onClick={addSotrud}>Добавть</button>
        </div>
       </div>
    )
}