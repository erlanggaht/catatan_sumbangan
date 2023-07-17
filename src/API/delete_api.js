import axios from "axios";

async function Delete_API (uid,kode,password)  {
    

   const response = await axios('https://catatan-sumbangan-awkr.vercel.app/delete_data',{
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