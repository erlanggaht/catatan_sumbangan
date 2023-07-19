import axios from 'axios'

async function registrasi_api (username,password,nama_lengkap,alamat,token_organisasi) {
    const response = await axios(import.meta.env.VITE_ENDPOINT+'signup',{
        method : "POST",
        data : {
            username,
            password,
            nama_lengkap,
            alamat,
            token : token_organisasi
        }
    })

    return await response.data

}


export default registrasi_api