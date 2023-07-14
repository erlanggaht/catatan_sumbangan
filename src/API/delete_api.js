import axios from "axios";

async function Delete_API (uid,kode,password)  {
    

   const response = await axios('http://localhost:4000/delete_data',{
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