
import axios from "axios";


async function fetchData(){
     const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    
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
  