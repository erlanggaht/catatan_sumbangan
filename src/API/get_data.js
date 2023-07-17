import axios from "axios";

async function getData () {
    const response = await axios('https://catatan-sumbangan-awkr.vercel.app/getdata')

    return response.data
}


export default getData