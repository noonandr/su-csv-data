<template>
  <div class="home">
    <UploadData/>
    <DataTable/>
  </div>
</template>

<script>
import UploadData from '@/components/UploadData.vue'
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'home',
  components: {
    UploadData,
    DataTable
  }
}
</script>
