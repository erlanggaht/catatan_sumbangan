import axios from "axios";

async function AddData_api (username,keterangan,jenis,tanggal,penerimaan,pengeluaran)  {
    
   const response = await axios('http://localhost:4000/add_data',{
        method : 'POST',
        data : {
            username,
            keterangan,
            tanggal,
            penerimaan,
            jenis,
            pengeluaran,
        }
    })

    return response


}


export default AddData_api