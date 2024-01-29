import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utils/constant'
import VedioCard from './VedioCard'
import { Link } from 'react-router-dom'
import { LIKED_YOUTUBE_VEDIOS_API } from "../utils/constant";
const Vediocontainer = () => {
  const [vedios, setvedios] = useState([])
  const [Liked,SetLiked]=useState([])
  const fetchData = async () => {
    const data = await fetch(YOUTUBE_API_KEY)
    const json = await data.json()
    setvedios(json.items)
  }



  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='flex flex-wrap justify-center'>
      {vedios[0] && <VedioCard info={vedios[0]} />}
      {vedios.map((vedio) => (
        <Link to={"/watch?v=" + vedio.id} key={vedio.id}>
          <VedioCard info={vedio} />
        </Link>
      ))}
    </div>
  )
}

export default Vediocontainer
