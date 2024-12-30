import './searchpanel.css'
export default function SearchPanel({...props}){
   
    return(
        <div>
            <input className='search' {...props}  placeholder="Найти сотрудника" />
        </div>
    )
}