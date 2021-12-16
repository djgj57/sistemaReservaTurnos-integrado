import HeadingProduct from "../../components/Product/Heading/HeadingProduct";
import { useEffect , useState} from "react";
import EmojiSad from "../../images/EmojiSad";
import Button from "../../components/shared/Button/Button";
import { MyFavoritesContainer } from "./MyFavoritesStyled";
import MyFavoritesList from "../../components/MyFavoritesList/MyfavoritesList";


export default function MyFavorites(){
const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function fetchData() {
          let response = await fetch(`http://18.232.222.109:8080/api/user`, {
            method: "GET",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          });
          if (response.status === 200) {
                let data =  await response.json();
                if(data.favorites.length < 1){
                }else{
                  setFavorites(data.favorites);              
                }     
          }
        }
        fetchData();
    }, []);

    return(
        <MyFavoritesContainer>
        <HeadingProduct  category={{title:"Mis favoritos"}} />
        {favorites.length < 1 ?(<div className="noFavorites">
          <EmojiSad/>
          <p>Aun no tienes ningun favorito</p>
          <Button to="/" text="Volver"></Button>
        </div>):(
        <MyFavoritesList favorites={favorites}/>)}
        </MyFavoritesContainer>
    )
}