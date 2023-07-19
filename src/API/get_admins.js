import axios from "axios";

async function get_admins(token) {
    const response = await axios(import.meta.env.VITE_ENDPOINT+'get_admins',{
        methods: "POST",
        headers : {
            Authorization : `Bearer ${token}`
     }

    })

    return await response.data
}

export default get_admins