import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading,setLoading]= useState(true)
    
     const url = "http://localhost:5000/menu";
  useEffect(() => {
    axios.get(url)
    .then(res=>setMenu(res.data))
  }, []);
      
  if(loading)
    {
      <p>Loading-------------</p>
    }

   return [menu]
};

export default useMenu;