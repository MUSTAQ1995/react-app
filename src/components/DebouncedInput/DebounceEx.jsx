import React, { useEffect, useState } from 'react'
import { useDebounce } from '../customHooks/useDebounce'

const DebounceEx = () => {
    
    const [searchText, setSearchText] = useState("");
    const debouncedText = useDebounce(searchText, 500)
    useEffect(()=>{
      
      console.log(debouncedText, "debouncedText")
    }, [debouncedText])
  return (
    <div>
      <label>Check The Debouncing</label><br/>
      <input 
        type='text'
        value={searchText}
        onChange={e=>setSearchText(e.target.value)}
        placeholder='Enter fast and check'
      />
    </div>
  )
}

export default DebounceEx
