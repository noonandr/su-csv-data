<template>
  <div class="home">
    <UploadData/>
    <DataTable/>
    <BarChart/>
    <LineChart/>
  </div>
</template>

<script>
import UploadData from '@/components/UploadData.vue'
import DataTable from '@/components/DataTable.vue'
import BarChart from '@/components/BarChart.vue'
import LineChart from '@/components/LineChart.vue'

export default {
  name: 'home',
  components: {
    UploadData,
    DataTable,
    BarChart,
    LineChart
  }
}
</script>
