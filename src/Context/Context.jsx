import {useState, createContext, useEffect} from "react";

export const FavoritesContext = createContext();

export default function ShoppingCartContextProvider(props) {
    // Create my global state to hold the fav products
    const [favorites, setFavorites] = useState([]);

    // useEffect(
    //     () => {
    //         console.log('context loaded')
    //         const storedFavorites = localStorage.getItem('favoritesList')
    //         //check if something was there and if so use that value
    //         if(storedFavorites){
    //             setFavorites(JSON.parse(storedFavorites))
    //         }
    //     }, [] //run one time when context loads
    // )
    //
    // useEffect(
    //     () => {
    //
    //         // save the new favorites when there are any changes
    //         localStorage.setItem('favoritesList', JSON.stringify(favorites))
    //     }, [favorites]
    // )

    // function to add character to favorites
    const addProduct = (prodToAdd) => {
        console.log('adding', prodToAdd)
        // add this product to array
        let newFavorites=[...favorites, prodToAdd];
        console.log(newFavorites);
        // store in state
        setFavorites(newFavorites);
    }

    const removeProduct = (productId) => {
        //remove this product from state
        let newFavorites = favorites.filter(item=>item.id !== productId)
        //store in state
        setFavorites(newFavorites)
    }

    return(
        <FavoritesContext.Provider value={{favorites, addProduct, removeProduct}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}