import axios from "axios";

async function getData () {
    const response = await axios(import.meta.env.VITE_ENDPOINT+'getdata')

    return response.data
}


export default getData