import axios from 'axios'

async function login_api (username,password) {
    const response = await axios(import.meta.env.VITE_ENDPOINT+'login',{
        method : "POST",
        data : {
            username,
            password
        }
    })

    return await response.data

}


export default login_api