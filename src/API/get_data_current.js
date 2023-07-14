import axios from "axios";

async function getData_current () {
    const response = await axios('http://localhost:4000/getdata_last')

    return response.data 
}


export default getData_current