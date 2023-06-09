import {Routes, Route} from 'react-router-dom';
import {Home, Pnf} from '../pages';
import { CartItems } from '../components';
 

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='cart' element={<CartItems />}></Route>
          <Route path='*' element={<Pnf  />}></Route>
      </Routes>
    </main>
    )
}
