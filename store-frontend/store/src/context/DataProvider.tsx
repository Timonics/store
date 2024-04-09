import axios from 'axios' // Importing the axios library for making HTTP requests
import React, { useState, useEffect, createContext, useContext } from 'react' // Importing necessary React hooks and components

// Defining the interfaces for Category, Product, ContextType, MyComponentProps, GoogleUserData, and GoogleProfileData
import { Category, Product, ContextType, MyComponentProps, GoogleUserData, GoogleProfileData } from '../interfaces'

// Importing the useGoogleLogin hook and googleLogout function from @react-oauth/google
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

// Creating a context for sharing state and functions across components
export const MyContext = createContext<ContextType | null>(null)

// DataProvider component that fetches data from an API and provides it to child components using the context API
const DataProvider: React.FC<MyComponentProps> = ({ children }) => {
  const navigate = useNavigate()
  // Initializing state variables
  const [categories, setCategories] = useState<Category[]>([]) // Array of categories
  const [products, setProducts] = useState<Product[]>([]) // Array of products
  const [isLoading, setIsLoading] = useState(true) // Loading state
  const [isAuthenticated, setIsAuthenticated] = useState(false) // Authentication state
  const [user, setUser] = useState<GoogleUserData>() // Google user data
  const [profile, setProfile] = useState<GoogleProfileData>() // Google profile data

  // Google sign-in function using the useGoogleLogin hook
  const googleSignIn = useGoogleLogin({
    onSuccess: (response) => {
      setUser(response)
      setIsAuthenticated(true)
      navigate("/home")
    },
    onError: (error) => console.log(error)
  })

  // Function to fetch user data from Google after successful sign-in
  const userLogin = async () => {
    try {
      if (user) {
        const loginDataResponse = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json"
          }
        })
        setProfile(loginDataResponse.data)
        console.log(profile);
      }
    } catch (err) {
      console.log("Error", err);
    }
  }

  // Fetching user data on initial render and after user sign-in
  useEffect(() => {
    userLogin()
  }, [user])

  // Google sign-out function
  const googleSignOut = () => {
    googleLogout()
    setIsAuthenticated(false)
  }

  // Function to fetch categories and products from the API
  const fetchedData = async () => {
    try {
      const categoryResponse = await axios.get("http://localhost:3500/api/v1/category")
      const categoriesData = categoryResponse.data
      setCategories(categoriesData)

      const productResponse = await axios.get("http://localhost:3500/api/v1/products")
      const productsData = productResponse.data
      setProducts(productsData)
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false)
    }
  }

  // Fetching categories and products on initial render
  useEffect(() => {
    fetchedData()
  }, [])

  // Context value containing state and functions to be shared across components
  const contextValue: ContextType = {
    categories,
    products,
    isLoading,
    profile,
    isAuthenticated,
    googleSignIn,
    googleSignOut
  }

  // Providing the context value to child components
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
}

// Custom hook to access the context value
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default DataProvider