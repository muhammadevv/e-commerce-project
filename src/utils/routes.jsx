import { CartPage, CategoriesPage, Checkout, HomePage, NotFoundPage, OrdersPage, ProductPage } from "../pages";
import ProfilePage from "../pages/profile";

export const routes = [
  {
    id: 1,
    component: <HomePage />,
    path: '/'
  },
  {
    id: 2,
    component: <CategoriesPage />,
    path: '/category/:id'
  },
  {
    id: 3,
    component: <NotFoundPage />,
    path: '*'
  },
  {
    id: 4,
    component: <ProductPage />,
    path: '/product/:slug'
  },
  {
    id: 5,
    component: <CartPage />,
    path: '/cart'
  },
  {
    id: 6,
    component: <OrdersPage />,
    path: '/orders'
  },
  {
    id: 7,
    component: <Checkout />,
    path: '/checkout'
  },
  {
    id: 8,
    component: <ProfilePage />,
    path: '/profile'
  },
]