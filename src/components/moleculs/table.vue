<script setup>

</script>


<template >

    <div class="overflow-x-auto sm:p-12">
        <table class="table table-sm ">
          <thead>
            <tr>
            <th>No. </th>
              <th>Penulis</th> 
              <th>Kode Kas</th> 
              <th>Keterangan</th> 
              <th>Tanggal</th> 
              <th>Pemasukan</th> 
              <th>Pengeluaran</th> 
              <th>Saldo</th>
              <th>Aksi</th>
            </tr>
          </thead> 
          <tbody>
            <tr>
              <td>1</td>
              <td>erlanggaht</td> 
              <td>100</td> 
              <td>Uang Saku Anak + Bahan Pangan</td> 
              <td>Thu Jul 13 2023 05:22:59</td> 
              <td>Rp. -</td> 
              <td>Rp. -</td> 
              <td>Rp. 500.000</td>
              <td><button class="btn btn-ghost">Edit</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>erlanggaht</td> 
                <td>101</td> 
                <td>Uang Saku Anak + Bahan Pangan</td> 
                <td>Thu Jul 13 2023 05:22:59</td> 
                <td>Rp. 50.000</td> 
                <td>Rp. -</td> 
                <td>Rp. 550.000</td>
                <td><button class="btn btn-ghost">Edit</button></td>

            </tr>
            <tr>
                <td>3</td>
                <td>susilo</td> 
                <td>102</td> 
                <td>Uang Saku Anak + Bahan Pangan</td> 
                <td>Thu Jul 13 2023 05:22:59</td> 
                <td>Rp. -</td> 
                <td>Rp. 20.000</td> 
                <td>Rp. 530.000</td>
                <td><button class="btn btn-ghost">Edit</button></td>

            </tr>
            
          </tbody> 
          <!-- <tfoot>
            <tr>
              <th></th> 
              <th>Name</th> 
              <th>Job</th> 
              <th>company</th> 
              <th>location</th> 
              <th>Last Login</th> 
              <th>Favorite Color</th>
            </tr>
          </tfoot> -->
        </table>
      </div>

</template>