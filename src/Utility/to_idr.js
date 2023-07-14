const rupiah = (rupiah) => {
return new Intl.NumberFormat(["ban", "id"]).format(rupiah)
    
}

export default rupiah