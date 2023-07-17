import axios from "axios";

async function AddData_api (username,keterangan,jenis,tanggal,penerimaan,pengeluaran)  {
    
   const response = await axios('https://catatan-sumbangan-awkr.vercel.app/add_data',{
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