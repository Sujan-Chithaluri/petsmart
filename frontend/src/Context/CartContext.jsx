import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { saveCart, getCart } from "../api/ApiService";
import all_products from "../Components/Assets/all_products";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isLoggedIn, userDetails } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const addItem = useCallback((item) => {
    setCartItems((prevItems) => [...prevItems, { id: item, count: 1 }]);
  }, []);

  const incrementAddedItem = useCallback((itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  }, []);

  const decrementAddedItem = useCallback((itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId
            ? { ...item, count: Math.max(item.count - 1, 0) }
            : item
        )
        .filter((item) => item.count > 0)
    );
  }, []);

  const removeItem = useCallback((itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }, []);

  const cartWithDetails = cartItems
    .map((item) => {
      const product = all_products.find((prod) => prod.id === item.id);
      if (product) {
        return {
          id: product.id,
          name: product.name,
          desc: product.desc,
          price: product.price,
          count: item.count,
          rating: product.rating,
          image: product.image,
          total: product.price * item.count,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  const cartTotalValue = cartWithDetails.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const getItemCount = useCallback(
    (itemId) => {
      const foundItem = cartItems.find((item) => item.id === itemId);
      return foundItem ? foundItem.count : 0;
    },
    [cartItems]
  );

  const emptyTheCart = useCallback(() => {
    setCartItems([]);
  }, []);

  useEffect(() => {
    const fetchCartFromDB = async () => {
      try {
        const response = await getCart(userDetails.id);
        const responseItems = response.data.cartItems;
        const cartItemsObj = responseItems.map((item) => ({
          id: item.productId,
          count: item.count,
        }));
        setCartItems(cartItemsObj);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (isLoggedIn && isFirstRender) {
      fetchCartFromDB();
      setIsFirstRender(false);
    }
  }, [isLoggedIn, userDetails?.id, isFirstRender]);

  useEffect(() => {
    const saveCartToDB = async () => {
      const cartItemsObj = {
        cartItems: cartItems.map((item) => ({
          productId: item.id,
          count: item.count,
        })),
        userId: userDetails.id,
      };

      try {
        await saveCart(cartItemsObj);
      } catch (error) {}
    };

    if (isLoggedIn && !isFirstRender) {
      saveCartToDB();
    }
  }, [isLoggedIn, cartItems, userDetails?.id, isFirstRender]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        incrementAddedItem,
        decrementAddedItem,
        removeItem,
        cartTotalValue,
        getItemCount,
        cartWithDetails,
        emptyTheCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
