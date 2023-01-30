import { db } from "../firebase"
import { collection, query, getDocs } from "firebase/firestore";
import { useState, useEffect} from "react";


const Members = () => {
const [memberList, setMemberList] = useState([])

useEffect(() => {
  const getMembers = async () => {
    const q = query(collection(db, "성도")); //, where("capital", "==", true));
    const result = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
    setMemberList(result);
  };
  getMembers();
  }, []);



  return(
  <div className='max-w-[600px] mx-auto my-16 p-4'>
    <div> 
    {memberList.map((mem) => {
      return (
      <div>
        {mem.이름}
        {mem.지역}
        {mem.직분}
      </div>
      ) 
    })}
    </div>
  </div>
  );
}

export default Members;