import Notfound from '../assets/noutfound.svg';
import { useTitle } from '../hook/useTitle';
import {useNavigate} from 'react-router-dom';

export const Pnf = () => {
  const navigate = useNavigate();
  useTitle("404 woof");
  
  const handleCLick = () => {
    navigate('/')
    return null;
  }
  return (
    <div className='pnf'>
        <p>Woof, Page Not Found!</p>
        <img src={Notfound} alt="page-not-found-woof" />
        <button onClick={handleCLick}>Back To Home</button>
    </div>
  )
}
