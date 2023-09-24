import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CoctailsCategory } from '../../components/CoctailsCategory/CoctailsCategory';

import { getMainPageAllDrinks } from '../../redux/drinks/drinks-operations';

import { useAuth } from '../../redux/hooks/useAuth';  


export default function HomePage() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

 console.log(isLoggedIn)
  useEffect(() => {
     
   // if(isLoggedIn) dispatch(getMainPageAllDrinks());
   dispatch(getMainPageAllDrinks());
  
  }, [dispatch]);

  return ( 
    <>
      
      <div>FirstBlock</div>
      <CoctailsCategory/>
    </>
  )
}
