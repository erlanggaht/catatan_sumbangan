import axios from "axios";

async function getData_current () {
    const response = await axios(import.meta.env.VITE_ENDPOINT+'getdata_last')

    return response.data 
}


export default getData_current