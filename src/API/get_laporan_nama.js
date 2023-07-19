import axios from 'axios'
async function getLaporan_Nama (login_uid) {

    const response = await axios(import.meta.env.VITE_ENDPOINT+'getlaporan_uid/'+`${login_uid}`)
    

    return response.data

}


export default getLaporan_Nama

