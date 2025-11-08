import { useState,useEffect } from "react";
import { StoreContext } from "./StoreContext";
import axios from "axios";
import { APIUrl } from "../../../admin/src/utils";
// import { food_list } from "../assets/assets";


const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("")
  const [food_list,setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(APIUrl+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(APIUrl+"/api/cart/remove",{itemId},{headers:{token}});
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () =>{
    const response = await axios.get(APIUrl+"/api/food/list");
    setFoodList(response.data.data)
  }

  const loadCartData = async (token) =>{
    const response = await axios.post(APIUrl+"/api/cart/get",{},{headers:{token}});
    setCartItems(response.data.cartData)
  }

  useEffect(() => {
   
    async function loadData() {
      await fetchFoodList()
       if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
      await loadCartData(localStorage.getItem('token'));
    }
    }
    loadData();
  }, [])
  

  const contextValue = {
    food_list,
    cartItems,
    token,
    setToken,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
