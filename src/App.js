import {React,useState} from 'react'
import { FaPersonDress } from "react-icons/fa6";
import { FaChildren } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import {AccChild} from "./component/accChild"
import {AccMen} from "./component/accMen"
import {AccWoman} from "./component/accWoman";
import {WatchWoman} from "./component/watchWoman";
import { BagWoman } from './component/bagWoman';
import {HairTie} from "./component/hairTie";
import {HairTieChild} from "./component/hairTieChild";
import {HatChild} from "./component/hatChild";
import {BagMen} from "./component/bagMen";
import {WatchMen} from "./component/watchMen";
import Bag from './component/bag';
import "./App.css"

const App = () => {
  const [done1,setDone1]=useState(false)
  const [done2,setDone2]=useState(true)
  const [done3,setDone3]=useState(false)
  const [done4,setDone4]=useState(true)
  const [done5,setDone5]=useState(false)
  const [done6,setDone6]=useState(false)
  const [done7,setDone7]=useState(false)
  const [done8,setDone8]=useState(true)
  const [done9,setDone9]=useState(false)
  const [done10,setDone10]=useState(false)
  const [show,SetShow]=useState([...WatchMen])
  const [buttons,setButtons]=useState("man")
  const [depart1,setDepart1]=useState(true)
  const [depart2,setDepart2]=useState(false)
  const [depart3,setDepart3]=useState(false)

  const [visible,setVisible]=useState(false)
  const [product,setProduct]=useState([])
  const [counter,setCounter]=useState(0)

  const Additem=(item)=>{
    setCounter(counter+1)
    const newItem = {
        ...item,
        count:1
    }
    setProduct([...product,newItem])
  }
  const onclose=()=>{
      setVisible(false)
  }
  const quatify=(id,count)=>{
      setProduct((ele)=>{
          const productIndex=ele.findIndex((item)=>{
              return item.id===id
          })
      if(productIndex !== -1){
          ele[productIndex].count=count
          setCounter(+(counter) + +(count) -1)
      }
      return [...ele]
      })
  }
  const remove=(pro,count)=>{
      setProduct((old)=>{
          const proindex=old.findIndex((item)=>
              item.id===pro.id
          )
          if(proindex !== -1){
              old.splice(proindex , 1)
              setCounter(+(counter) - count)
          }
          return [...old]
      })
  }
  const onRemoveAll=()=>{
      setProduct([])
      setCounter(0)
  }

  return (
    <div>
      <Bag key="bag" visibility={visible} products={product} onClose={onclose} onQuantityChange={quatify} onproductRemove={remove} onRemoveAll={onRemoveAll}  />
      <nav className="header">
        <button className={depart1? "depart2":"depart1"} onClick={()=>{
          setDepart1(true)
          setDepart2(false)
          setDepart3(false)
          setButtons("man")
          SetShow([...AccMen])
          }} ><FaPerson/></button>
          <button className={depart2? "depart2":"depart1"} onClick={()=>{
              setDepart1(false)
              setDepart2(true)
              setDepart3(false)
              setButtons("woman")
              SetShow([...AccWoman])
          }} ><FaPersonDress/></button>
          <button className={depart3? "depart2":"depart1"} onClick={()=>{
              setDepart1(false)
              setDepart2(false)
              setDepart3(true)
              setButtons("children")
              SetShow([...AccChild])
          }} ><FaChildren/></button>
          <button className="button" onClick={()=>{
              setVisible(true)
          }}>
              <FaBagShopping/>
              <div className="counter">{counter}</div>
                </button>
        </nav>
        <div className="box">
          {buttons==="man" && (
              <nav className="topnav">
              <button className={done1? "btndone":"btn"} onClick={()=>{
                  SetShow([...AccMen])
                  setDone1(true)
                  setDone2(false)
                  setDone3(false)
              }}>Accessory</button>
              <button className={done2? "btndone":"btn"} onClick={()=>{
                  SetShow([...WatchMen])
                  setDone1(false)
                  setDone2(true)
                  setDone3(false)
              }}>Watch</button>
              <button className={done3? "btndone":"btn"} onClick={()=>{
                  SetShow([...BagMen])
                  setDone1(false)
                  setDone2(false)
                  setDone3(true)
              }}>Bag</button>
          </nav>
          )}
          {buttons==="woman" && (
              <nav className="topnav">
              <button className={done4? "btndone":"btn"} onClick={()=>{
                  SetShow([...AccWoman])
                  setDone4(true)
                  setDone5(false)
                  setDone6(false)
                  setDone7(false)
              }}>Accessory</button>
              <button className={done5? "btndone":"btn"} onClick={()=>{
                  SetShow([...WatchWoman])
                  setDone4(false)
                  setDone5(true)
                  setDone6(false)
                  setDone7(false)
              }}>Watch</button>
              <button className={done6? "btndone":"btn"} onClick={()=>{
                  SetShow([...BagWoman])
                  setDone4(false)
                  setDone5(false)
                  setDone6(true)
                  setDone7(false)
              }}>Bag</button>
              <button className={done7? "btndone":"btn"} onClick={()=>{
                  SetShow([...HairTie])
                  setDone4(false)
                  setDone5(false)
                  setDone6(false)
                  setDone7(true)
              }}>Hair Tie</button>
          </nav>
          )}
          {buttons==="children" && (
              <nav className="topnav">
              <button className={done8? "btndone":"btn"} onClick={()=>{
                  SetShow([...AccChild])
                  setDone8(true)
                  setDone9(false)
                  setDone10(false)
              }}>Accessory</button>
              <button className={done9? "btndone":"btn"} onClick={()=>{
                  SetShow([...HairTieChild])
                  setDone8(false)
                  setDone9(true)
                  setDone10(false)
              }}>Hair Tie</button>
              <button className={done10? "btndone":"btn"} onClick={()=>{
                  SetShow([...HatChild])
                  setDone8(false)
                  setDone9(false)
                  setDone10(true)
              }}>Hat</button>
          </nav>
          )}
          {show.map((ele)=>{
            return(
                <div key={ele.id} className='item'>
                    <div className='parent'>
                        <div className='front'>
                            <img src={ele.src} alt='item' />
                            <p>{ele.name}</p>
                            <h4>{ele.price}LE</h4>
                        </div>
                        <div className='back'>
                            <button className="btn1" onClick={()=> Additem(ele)}>Add to your Bag</button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            )
            
        })}
      </div>
    </div>
  )
}

export default App
