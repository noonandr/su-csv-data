<template>
  <div>
    <h1>Upload data</h1>
    <form enctype="multipart/form-data">
      <input type="file" @change="onFileChange">
    </form>
    <div>
      {{ results }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'upload-data',
  data () {
    return {
      results: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onFileChange: function (event) {
      if (window.FileReader) {
        this.getData(event)
      } else {
        alert('FileReader is not supported in the browser you are using.')
      }
    },
    getData: function (event) {
      let file = event.target.files[0]
      let reader = new FileReader()
      reader.readAsText(file)

      reader.onload = this.loadHandler
    },
    loadHandler: function (event) {
      let results
      this.results = event.target.result
      console.log('RESULTS: ', results)
    }
  }
}

</script>

<style scoped lang="scss">

.upload-data {

}

</style>
