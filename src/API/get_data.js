import axios from "axios";

async function getData () {
    const response = await axios('http://localhost:4000/getdata')

    return response.data
}


export default getData