<script setup>
import { onMounted, ref } from 'vue';
import rupiah from '@/Utility/to_idr.js'
import getData from '@/API/get_data.js'
import Delete_API from '@/API/delete_api.js'
import RefreshIcon from '@/assets/icon/RefreshIcon.vue'
import EditIcon from '@/assets/icon/EditIcon.vue'
import DeleteIcon from '@/assets/icon/DeleteIcon.vue'
import ButtonReload from '@/components/atoms/button_reload.vue'

import Alert_warning from '@/components/atoms/alert_warning.vue';
import Alert_success from '@/components/atoms/alert_success.vue';
import audio_success from '@/assets/success.mp3'
import audio_error from '@/assets/error.mp3'

// Alert
const alert = ref(false)
const condition_alert = ref({
  text_alert: '',
  condition: false //jika error false jika success true
})

let data = ref([])
let total_saldo = ref([])
const saldo_current = ref()
const button_reload = ref(false)


async function reload() {
  button_reload.value = true

  const response_data = await getData()
  setTimeout(() => {
    data.value = response_data
    saldo_current.value = response_data[response_data.length - 1].saldo
    button_reload.value = false
  }, 1000)
}


async function submit_delete(uid, kode) {
  const password_admin_uid = prompt('masukan password penulis ?')

  if (password_admin_uid) {
    const delete_response = Delete_API(uid, kode, password_admin_uid).then(async (res) => {
      var audio = new Audio();
      // no event listener needed here
      audio.src = audio_success;
      audio.play();

      condition_alert.value = { text_alert: res.msg, condition: true }

      alert.value = true
      setTimeout(() => {
        alert.value = false
      }, 3400)

      // Update getAdmin
      const response_data = await getData()
      data.value = response_data
      saldo_current.value = response_data[response_data.length - 1].saldo
      let saldo = []
  data.value.forEach(element => {
    saldo.push(element.saldo)
  });
  if (saldo.length === 1) total_saldo.value = rupiah(saldo[0])
  else saldo.reduce((m, i) => total_saldo.value = rupiah(m + i))
    }).catch((err) => {
      var audio = new Audio();
      // no event listener needed here
      audio.src = audio_error;
      audio.play();

      condition_alert.value = { text_alert: err.response.data.msg, condition: false }

      alert.value = true
      setTimeout(() => {
        alert.value = false
      }, 3400)

    })


  } else {
    return false
  }

}


onMounted(async () => {
  // get data
  const response_data = await getData()
  data.value = response_data
  saldo_current.value = response_data[response_data.length - 1].saldo

  let saldo = []
  data.value.forEach(element => {
    saldo.push(element.saldo)
  });
  if (saldo.length === 1) total_saldo.value = rupiah(saldo[0])
  else saldo.reduce((m, i) => total_saldo.value = rupiah(m + i))
})


</script>


<template>
  <section class="px-3">
  <div class="my-8 px-9  text-right flex sm:justify-between sm:items-center justify-center items-center">
    <p class="p-3 text-left">Saldo Saat ini : Rp.{{ total_saldo || '0' }}</p>

    <ButtonReload v-if="button_reload" text="REFRESH" />
    <button @click='reload' class="btn btn-ghost p-2" v-if="!button_reload">
      <RefreshIcon :class="'w-[24px] h-[24px]'" /> Refresh
    </button>
  </div>
</section>

  <div class="overflow-x-auto sm:p-12">

    <table class="table table-sm  " v-if="data.length > 0">
        <thead>
        <tr class="border-[#f2f2f2]">
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
        <tr v-for="(m, i) in data" :key="i">

          <td>{{ i + 1 }}</td>
          <td>{{ m.login_uid }}</td>
          <td>{{ m.kode }}</td>
          <td>{{ m.keterangan || "-" }}</td>
          <td>{{ m.tanggal }}</td>
          <td>{{ m.penerimaan === 0 ? '-' : rupiah(m.penerimaan) }}</td>
          <td>{{ m.pengeluaran === 0 ? '-' : rupiah(m.pengeluaran) }}</td>
          <td>{{ m.saldo == 0 ? '-' : rupiah(m.saldo) }}</td>
          <td>
            <button class="btn btn-ghost">
              <EditIcon :class="'w-[24px] h-[24px]'" />
            </button>
            <button class="btn btn-ghost" @click="submit_delete(m.login_uid, m.kode)">
              <DeleteIcon :class="'w-[24px] h-[24px]'" />
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
    <div v-else class="text-center  py-12"> Tidak ada catatan sumbangan </div>
  </div>

  <!-- Alert -->
  <div
    :class="`${alert ? 'fixed top-0 sm:top-3 right-0 sm:right-4 transition-all w-full sm:w-1/3 z-50' : 'fixed -bottom-32 w-full sm:w-1/4 right-3 ease-in-out transition-all delay-700'}`">
    <Alert_success :text_alert="condition_alert.text_alert" v-if="condition_alert.condition" />
  <Alert_warning :text_alert="condition_alert.text_alert" v-if="!condition_alert.condition" />
</div></template>


<style scoped>

tr {
  border-color:#f2f2f2;
}

</style>