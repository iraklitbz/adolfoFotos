<template>
    <div class="form-add-pic">
        <div class="card">
            <h2>Actors</h2>
            <form>
                <label>URL:</label>
                <input type="text" v-model="url" />

                <label>Nombre:</label>
                <input type="text" v-model="name" />

                <button @click="submitActor()">AÑADIR</button>
            </form>
        </div>

        <div class="card">

        <h2>Editorial</h2>

            <form>
                <label>URL:</label>
                <input type="text" v-model="url" />

                <label>Nombre:</label>
                <input type="text" v-model="name" />

                <button @click="submitEditorial()">AÑADIR</button>
            </form>

        </div>

        <div class="card">

        <h2>Music</h2>

            <form>
                <label>URL:</label>
                <input type="text" v-model="url" />

                <label>Nombre:</label>
                <input type="text" v-model="name" />

                <button @click="submitMusic()">AÑADIR</button>
            </form>

        </div>

        <div class="card">

        <h2>People</h2>

            <form>
                <label>URL:</label>
                <input type="text" v-model="url" />

                <label>Nombre:</label>
                <input type="text" v-model="name" />

                <button @click="submitPeople()">AÑADIR</button>
            </form>

        </div>

    </div>
</template>

<script>
import { actorsRef } from './../../firebase';
import { editorialRef } from './../../firebase';
import { peopleRef } from './../../firebase';
import { musicaRef } from './../../firebase';
export default {
  data(){
      return{
          url: 'IRAKLI',
          name: 'Irakli'
      }
  },

  methods: {
      submitActor(){
          actorsRef.push({
              url: this.url,
              name: this.name
          })
      },

      submitEditorial(){
          editorialRef.push({
              url: this.url,
              name: this.name
          })
      },

      submitMusic(){
          musicaRef.push({
              url: this.url,
              name: this.name
          })
      },

      submitPeople(){
          peopleRef.push({
              url: this.url,
              name: this.name
          })
      },

      


  }
}
</script>

<style lang="scss">

.form-add-pic {
    max-width: 800px;
    margin: 0 auto
}

.card {
    margin-top: 20px;
    h2 {
        margin-bottom: 10px;
    }

}

</style>
