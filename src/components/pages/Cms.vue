<template>
    <div class="form-add-pic">
        <form>
            <label>URL:</label>
            <input type="text" v-model="url" />

            <label>Nombre:</label>
            <input type="text" v-model="name" />

            <button @click="submitName()">AÑADIR</button>
        </form>

    </div>
</template>

<script>
import { actorsRef } from './../../firebase';
export default {
  data(){
      return{
          url: 'IRAKLI',
          name: 'Irakli'
      }
  },

  methods: {
      submitName(){
          actorsRef.push({
              url: this.url,
              name: this.name
          })
      }
  }
}
</script>

<style>

</style>
