<template>
<div class="galleryEditorials">
    <div class="column">
       <ul class="galery-horiz">
           <li v-for="foto in fotosL"> 
              <img v-getImage="{'name': foto.url}" src="" />   
               <h2>{{foto.name}}</h2>
           </li>
       </ul>
    </div>

    <div class="column">
       <ul class="galery-horiz">
                 <li v-for="foto in fotosM"> 
                    <img v-getImage="{'name': foto.url}" src="" />   
                     <h2>{{foto.name}}</h2>
                </li>
       </ul>
    </div>

    <div class="column">
       <ul class="galery-horiz">
            <li v-for="foto in fotosR"> 
              <img v-getImage="{'name': foto.url}" src="" />   
               <h2>{{foto.name}}</h2>
            </li>
       </ul>
    </div>
</div>

</template>

<script>
import { db } from './../../firebase';
import { imgPeople } from './../../firebase';
let peopleRef = db.ref('People');
export default {
 data(){
    return {
            fotosL: [],
            fotosM: [],
            fotosR: []
        }
  },

    directives: {
        getImage (el, bind) {
            imgPeople
                .child(bind.value.name + '.jpg')
                .getDownloadURL()
                .then(function(url) {
                    el.src = url;                
                }).catch(function(error) {
                    console.error(error);
                });
        }
    },

  mounted () {
        let __self = this;

        peopleRef.on('value', (snapshot) => {
            let __people = __self.$parent.$parent.sliceArray(snapshot.val(), 3);

            this.fotosL = __people[0];
            this.fotosM = __people[1];
            this.fotosR = __people[2];
        });
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
