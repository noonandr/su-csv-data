<template>
  <div>
    <h1>Data Table</h1>
    <div>
      <table align="center">
        <thead>
          <tr>
            <th v-for="column in columns" :key="column.key">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in data" :key="row.company">
            <td>
              {{ row.company }}
            </td>
            <td>
              {{ row.trades }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'data-table',
  data () {
    return {
      data: [
        {company: 'barclays', trades: 1231},
        {company: 'hsbc', trades: 78},
        {company: 'lloyds', trades: 123222},
        {company: 'city bank', trades: 8923},
        {company: 'j p morgan', trades: 789}
      ],
      columns: [
        {
          key: 'company',
          label: 'Company'
        }, {
          key: 'trades',
          label: 'Trades'
        }
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}

</script>

<style scoped lang="scss">

.upload-data {

}

</style>
