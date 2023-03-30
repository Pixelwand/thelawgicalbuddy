import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { googleAuth } from '../../appwrite';

export const Auth = () => {
    // const [email, setEmail] = useState()


return(
      <>
          <div>
              <button onClick={(e)=>googleAuth(e)}>Google Login</button>
          </div>
      </>
  )
}
