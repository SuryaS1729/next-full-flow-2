
import axios from "axios";


async function fetchData(){
     const response = await axios.get("http://localhost:3000/api/user")
    
     await new Promise(r=> setTimeout(r, 5000))
     return response.data
}
export default async function User() {

    const data = await fetchData()


    return (
      <div>
        {data.email}
        {data.name}
      </div>
    );
  }
  