import client from "@/db"

async function fetchData(){
  const user = await client.user.findFirst();

  return {
      email:user?.email,
      name: "whatever the fuck your name is"
  }
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
  