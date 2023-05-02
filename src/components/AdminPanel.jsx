import React, { useEffect } from 'react'
import { MainContext } from '../context/Context'
import { useContext } from 'react'
import axios from 'axios'

const AdminPanel = () => {

    const {db, setDb} = useContext(MainContext)

    useEffect(() => {
      axios.get('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users')
      .then(response => {
        setDb(response.data)
      })
    })
    

  return (
    <div>
        {db.map(item => (<div style={{borderWidth:1, borderColor:'black', padding:20, width:200,}}>
            <p>Ad: {item.name}</p>
            <p>Soyad: {item.surname}</p>
            <p>Əlaqə nömrəsi:{item.number}</p>
        </div>))}
    </div>
  )
}

export default AdminPanel