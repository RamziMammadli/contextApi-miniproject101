import React,{ useEffect, useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../context/Context'
import { useContext } from 'react'
import axios from 'axios'



const Main = () => {

    const {name, surname, setName, setNumber, setSurname, number, db, setDb} = useContext(MainContext)

    const navigate = useNavigate()

    const goAP = () => {
        navigate('/adminpanel')
    }

      const sendData = () => {
        axios.post('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users',{
            name,
            surname,
            number
        })
        .then(response => {
            console.log(response.data);
        })
      }


  return (
    <div style={{backgroundColor:'#0001', height:700, display:'flex', display:'flex', flexDirection:'column', alignItems:'center',gap:150}}>
        <div style={{backgroundColor:'orange', height:100, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%', paddingRight:25}}>
            <div></div>
            <div><h1>BANK ACCOUNT</h1></div>
            <div style={{display:'flex', justifyContent:'space-between', flexDirection:'row', gap:25}}>
                <p onClick={goAP}>Admin Panel</p>
            </div>
        </div>
        <div>
            <div style={{ display:'flex', flexDirection:'column',gap:50, width:300}}>
                <input placeholder='Ad' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                <input placeholder='Soyad' type='text' value={surname} onChange={(e) => setSurname(e.target.value)}/>
                <input placeholder='Nömrə'  value={number} onChange={(e) => setNumber(e.target.value)}/>
                <button type='submit' onClick={sendData}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Main