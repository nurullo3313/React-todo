import FilterBtn from "../FilterBtn/FilterBtn";
import Header from "../Header/Header";
import SearchPanel from "../SearchPanel/SearchPaner";
import { FaCoins , FaTrash ,FaStar  } from 'react-icons/fa'; 
import {  useState } from "react";
import AddSotrud from "../AddSotrud/AddSotrud";
import {v4 as uuid} from "uuid";
import './App.css'




const dataSotrud=[
   {name :"Носир" , zarplata : 3000, povisheniya : true, izbrani:false, id : 1},
   {name :"Азиз" , zarplata : 4000 , povisheniya : false, izbrani:false, id : 2},
   {name :"Қодир" , zarplata : 800 , povisheniya : false, izbrani:false, id : 3},

]
export default function App(){
   const [listSotrud , setListSotrd]=useState(dataSotrud)
   const [newSotrud , setNewSotrud] = useState("")
   const [zarplata , setZarplata]= useState("")
   const[updatezar , setUpdateZar]= useState("")
   const [searchSot , setSearchSot] = useState("");

   const [filter , setFilter] =useState("vse")



   function addSotrud(){
      if(newSotrud || zarplata){
        setListSotrd(vse=>{
         return[
            ...vse,
            {
               id : uuid(),
               name:newSotrud,
               zarplata : zarplata,
               povisheniya :false,
               izbrani :false
            }
         ]

      })
      setNewSotrud("");
      setZarplata("")
      
   }
   }



   
   
   function deleteSot(id){
      setListSotrd(elem=>{
         return elem.filter(item=>item.id !==id)
      })
   }
   
   
   function updateZarplat(e){
      e.preventDefault(false)
      setUpdateZar(e.target.value)
   }
   
   function searchSotrudnik(e){
      setSearchSot(e.target.value)
   }

   function filterData(item , filter){
      switch(filter){
         case 'povesheniya':
         return item.filter(item => item.povisheniya)

         case "zar_bol_1000": 
         return item.filter(item => item.zarplata > 1000) 
         default : 
            return item
      }
   }

   const filtredSot = filterData(listSotrud.filter(sot=>sot.name.toLowerCase().includes(searchSot.toLowerCase())),filter);




   function updarePov(id){
      setListSotrd(p=>{
         return p.map(item=>{
            if(item.id ===id){
               return{
                  ...item,
                  povisheniya : !item.povisheniya,
               }
            }
            return item
         })
      })
   }



   function updateIzb(id){
      setListSotrd(p=>{
         return p.map(item=>{
            if(item.id ===id){
               return{
                  ...item,
                  izbrani : !item.izbrani
               }
            }
            return item
         })
      })
   }

   function filterBtn(filter){
      setFilter(filter)
   }

 


   
 return(
    <>
    <Header filtredSot={filtredSot} />
    <div className="search-panel">
      <SearchPanel value={searchSot} onChange={searchSotrudnik}/>
      <FilterBtn  filterBtn={filterBtn}/>
    </div>
   

    <div className="sotrudniki">
     
        {filtredSot.map((e)=>{
         return(
            <>
            <div className="sotrudnik" key={e.id}>
            <h1 >{e.name}</h1>   
         <div className="inpusts">
         <input type="text" onChange={updateZarplat} defaultValue={"$"+ e.zarplata}/>
         <FaCoins className={ e.povisheniya===true ? "coin" : "aa"} onClick={()=>updarePov(e.id)}/>
         <FaTrash className="delete-btn" onClick={()=>deleteSot(e.id)}/>
         <FaStar className={e.izbrani === true ? "star" : "falseStar"} onClick={()=>updateIzb(e.id)}/>
         </div>
        
         </div>
         <hr />  
         
       
            </>
         )
        })}   
      
    </div>
    <AddSotrud newSotrud={newSotrud} zarplata={zarplata} addSotrud={addSotrud} setZarplata={setZarplata} setNewSotrud={setNewSotrud} />

   
    
    </>
 )
}








