import axios from 'axios'

async function getAdmin (username,token) {
       const response = await axios(import.meta.env.VITE_ENDPOINT+'get_admin',{
              method : "POST",
              data : {
                     username : username,
              },
              headers : {
                     Authorization : `Bearer ${token}`
              }
       })

       return response.data
}


export default getAdmin