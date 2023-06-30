import style from './Card.module.css'
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

const styleSpecie = {
   display: "inline-block",
   fontSize: '16px',
   color: 'white',
   marginRight: '15px',
   marginTop: '-10px',
}

const styleGender = {
   display: "inline-block",
   fontSize: '16px',
   color: 'red',
   marginRight: '15px',
   marginTop: '-10px',
}

const styleGenders = {
  display: "inline-block",
  fontSize: '16px',
  color: 'white',
  marginRight: '15px',
  marginTop: '-10px',
}

export function Card(props) {
   const [isFav, setIsFav] = useState(props.fav);

   useEffect(() => {
      props.favorites &&
        props.favorites.forEach((fav) => {
          if (fav.id === props.id) {
            setIsFav(true);
          }
        });
    }, [props.favorites]);


   function handleFavorite() {
      if (isFav) {
        setIsFav(false);
        props.removeFav(props.id);
      } else {
        setIsFav(true);
        props.addFav({
          name: props.name,
          species: props.species,
          gender: props.gender,
          image: props.image,
          status: props.status,
          origin: props.origin,
          id: props.id,
        });
      }
    }

   return (
 
 <div className={style.DivCard}>

<table>
  <tr>
    <td>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>💟</button>
      )}
    </td>
    <td>
      <button className={style.Button} onClick={props.onClose}>X</button>
    </td>
  </tr>
</table>
         <Link to={`/detail/${props.id}`} style={{ textDecoration: "none", color: "white" }}><h2>{props.name}</h2></Link>
         {/*<h4>{props.status}</h4>*/}
<table>
  <tr>
    <td>
      <h4 style={{...styleSpecie }}>{props.species}</h4>
      <h4 style={{...styleGender }}>{props.gender}</h4>
      <h4 style={{ ...styleGenders}}>{props.id}</h4>
    </td>
  </tr>
</table>
         {/*<h4>{props.origin.name}</h4>*/}
         <img style={{display: "block"}} src={props.image} alt='' />
      </div>
   );
}

export function mapStateToProps(state) {
   return {
     favorites: state.favorites,
   };
 }
 
 export function mapDispatchToProps(dispatch) {
   return {
     addFav: function (personaje) {
       dispatch(addFav(personaje));
     },
     removeFav: function (id) {
       dispatch(removeFav(id));
     },
   };
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);