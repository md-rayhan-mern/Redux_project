import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { fetchAllUser } from "../../../../Features/user/userSlice.js";
const Home = () => {
 const dispatch = useDispatch();
 const {data, isLoading, error} = useSelector((state) => state.user)
  
 useEffect(()=> {
  dispatch(fetchAllUser());
 }, [dispatch]);

 console.log(data.data);
 

  return (
    <section>
      <button className="bg-purple-500 rounded-md border-2 p-1 mx-5">
        Login
      </button>
      <button className="bg-red-400 rounded-md border-2 p-1 mb-3">
        Logout
      </button>
    </section>
  );
};

export default Home;
