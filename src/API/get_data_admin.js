import axios from 'axios'

async function getAdmin () {
       const response = await axios('http://localhost:4000/get_admin')

       return response.data
}


export default getAdmin