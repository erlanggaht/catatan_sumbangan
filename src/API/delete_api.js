import axios from "axios";

async function Delete_API (uid,kode,password)  {
    

   const response = await axios(import.meta.env.VITE_ENDPOINT+'delete_data',{
        method : 'DELETE',
        data : {
          uid,
          kode,
          password
        }
    })
    return response.data


}


export default Delete_API