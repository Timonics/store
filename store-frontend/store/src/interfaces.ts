export interface Category {
  _id: string;
  name: string;
  color: string;
  icon: string;
  image: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  richDescription: string;
  image: string;
  images: [string];
  brand: string;
  price: number;
  category: Category;
  countInStock: number;
  rating: number;
  isFeatured: boolean;
  dateCreated: string;
}

export interface ContextType {
  categories: Category[];
  products: Product[];
  isLoading: boolean;
  profile: GoogleProfileData;
  isAuthenticated: boolean;
  googleSignIn: () => void;
  googleSignOut: () => void;
}

export interface MyComponentProps {
  children: React.ReactNode;
}

export default interface UserRegisterData {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  street: string,
  apartment: string,
  city: string,
  zip: string,
  country: string,
  phone: number
}

export interface UserData {
  email: string;
  password: string;
}

export interface GoogleUserData {
  access_token: string;
}

export interface GoogleProfileData {
  name: string;
  email: string;
  picture: string;
}

export interface CategoryProps {
  _id: string,
  name: string;
  image: string;
  isAvailable: boolean;
}
