function Validasi_Register (...inp) {

    let trues = []
    for(let i = 0; i < inp.length;i++) {
        
        if(inp[i].value === '') {
            if(inp[0]) {
                inp[4].value = 'input tidak boleh ada yg kosong!'  
                return false 
            }
        } 
    }
    if(inp[0].value === '' || inp[0].value.length <= 3) {
        inp[4].value = 'username minimal 3 huruf tanpa spasi!'
        return false 
        
    } 
    if(inp[1].value === '' || inp[1].value.length <= 5) { 
        inp[4].value =  'password minimal 6 huruf!'
        return false  
    }

    return true
}

export default Validasi_Register