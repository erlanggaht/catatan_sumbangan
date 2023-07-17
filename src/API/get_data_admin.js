import axios from 'axios'

async function getAdmin (username,token) {
       const response = await axios('https://catatan-sumbangan-awkr.vercel.app/get_admin',{
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