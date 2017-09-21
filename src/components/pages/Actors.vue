<template>
<div class="galleryEditorials">
    <div class="column">
       <ul class="galery-horiz">
           <li v-for="foto in fotosLef" :key="foto.id"> 
               <img :src="'/src/images/actores/' + foto.pic.url + '.jpg'" > 
               <h2>{{foto.pic.name}}</h2>
           </li>
       </ul>
    </div>

    <div class="column">
       <ul class="galery-horiz">
                 <li v-for="foto in fotosMidd"> 
                     <img :src="'/src/images/actores/' + foto.pic.url + '.jpg'" > 
                     <h2>{{foto.pic.name}}</h2>
                </li>
       </ul>
    </div>

    <div class="column">
       <ul class="galery-horiz">
            <li v-for="foto in fotosRig"> 
               <img :src="'/src/images/actores/' + foto.pic.url + '.jpg'" > 
               <h2>{{foto.pic.name}}</h2>
            </li>
       </ul>
    </div>
</div>

</template>

<script>
import _ from 'lodash';
import { db } from './../../firebase';
export default {
  data(){
     


    randoM.fotosRig = _.shuffle(randoM.fotosRig);
    randoM.fotosMidd = _.shuffle(randoM.fotosMidd);
    randoM.fotosLef = _.shuffle(randoM.fotosLef);
      
      return randoM;
  },

  created(){
      let actors = db.ref('/Actors').on('value', snapshot => this.cargarArray(snapshot.val()))
  },

  methods: {
      cargarArray(actors){
         console.log(actors)
      }
  }
 
 
}
</script>

<style lang="scss">
.galleryEditorials {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    .column {
        width: 32.8%
    }
}
  .galery-horiz {
        li {
            img {
                width: 100%;
            }
         
        }
        h2 {
            padding: 5px 0px 25px 0px;
            text-align: center;
            font-size: 13px;
            color: #333;
        }
  }

  @media screen and (max-width: 990px)  {
      .galleryEditorials {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        flex-wrap: wrap;
        .column {
            width: 49.5%
        }
        .column:nth-child(3) {
             width: 100%;
            ul {
                 display: flex;
                justify-content: space-between;
                padding: 0px;
                flex-wrap: wrap;
                li {
                     width: 49.5%
                }
            }
        }
    }
  }

   @media screen and (max-width: 770px)  {
      .galleryEditorials {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        flex-wrap: wrap;
        .column {
            width: 100%
        }
        .column:nth-child(3) {
             width: 100%;
            ul {
                 display: flex;
                justify-content: space-between;
                padding: 0px;
                flex-wrap: wrap;
                li {
                     width: 100%
                }
            }
        }
    }
  }
  
</style>