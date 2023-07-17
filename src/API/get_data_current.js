import axios from "axios";

async function getData_current () {
    const response = await axios('https://catatan-sumbangan-awkr.vercel.app/getdata_last')

    return response.data 
}


export default getData_current