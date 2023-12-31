import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {
   const [id,setId] = useState('');

   const handleChange = (event) => {
      let {value} = event.target;
      setId(value);
   }

   return (
      <div className={style.div}>
         <input className={style.input} type='search' onChange={handleChange} value={id} />
         <button className={style.button} onClick={() => props.onSearch(id)}>
            Agregar
            </button>
         <button className={style.button} onClick={props.random}>
            Random Character
         </button>
      </div>
   );
}
