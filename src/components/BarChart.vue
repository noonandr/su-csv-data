<template>
  <div>
    <h1>Bar Chart</h1>
    <div class="bar-chart">
      <canvas ref="chart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'bar-chart',
  mounted () {
    let chart = this.$refs.chart
    let ctx = chart.getContext('2d')

    // eslint-disable-next-line
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Barclays', 'HSBC', 'Lloyds', 'City Bank', 'J P Morgan'],
        datasets: [{
          label: '# of trades',
          data: [1231, 78, 123222, 8923, 789],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
}
</script>

<style>

</style>
