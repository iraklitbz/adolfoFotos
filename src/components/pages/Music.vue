<template>
<div class="galleryEditorials">
    <div class="column">
       <ul class="galery-horiz">
           <li v-for="foto in fotosLef" :key="foto.id"> 
               <img :src="'/src/images/musica/' + foto.pic.url + '.jpg'" > 
               <h2>{{foto.pic.name}}</h2>
           </li>
       </ul>
    </div>

    <div class="column">
       <ul class="galery-horiz">
                 <li v-for="foto in fotosMidd"> 
                     <img :src="'/src/images/musica/' + foto.pic.url + '.jpg'" > 
                     <h2>{{foto.pic.name}}</h2>
                </li>
       </ul>
    </div>

    <div class="column">
       <ul class="galery-horiz">
            <li v-for="foto in fotosRig"> 
               <img :src="'/src/images/musica/' + foto.pic.url + '.jpg'" > 
               <h2>{{foto.pic.name}}</h2>
            </li>
       </ul>
    </div>
</div>

</template>

<script>
import _ from 'lodash';
import { actorsRef } from './../../firebase';
export default {
   data(){
     let randoM = {
          fotosRig: [
                { pic: {
                    url: 'ANDRESCALAMARO',
                    name: 'Andres Calmaro'
                } },
                { pic: {
                    url: 'BEBE',
                    name: 'Bebe'
                } },
                { pic: {
                    url: 'BEBE4',
                    name: 'Bebe'
                } },
                { pic: {
                    url: 'BLASCANTO',
                    name: 'Blas Canto'
                } },
                { pic: {
                    url: 'BLASCANTO2',
                    name: 'Blas Canto'
                } },
                { pic: {
                    url: 'BREALCYPRESSHILL',
                    name: 'B Real Cypress Hill'
                } },
                { pic: {
                    url: 'MELENDI',
                    name: 'Melendi'
                } },
                { pic: {
                    url: 'MELENDI2',
                    name: 'Melendi'
                } },
                { pic: {
                    url: 'MIKELERENTXUN',
                    name: 'Mike Erentxun'
                } },
                { pic: {
                    url: 'RUBENPOZO3',
                    name: 'Ruben Pozo'
                } },
                { pic: {
                    url: 'SORAYAARNELAS',
                    name: 'Soraya Arnelas'
                } }
                
          ],

          fotosMidd: [
                { pic: {
                    url: 'DAVIDCARREIRA',
                    name: 'David Carreira'
                } },
                { pic: {
                    url: 'DIEGOELCIGALA',
                    name: 'Diego El Cigala'
                } },
                { pic: {
                    url: 'ESTRELLAMORENTE',
                    name: 'Estrella Morente'
                } },
                { pic: {
                    url: 'GEMELIERS',
                    name: 'Gemelirs'
                } },
                { pic: {
                    url: 'GEMELIERS3',
                    name: 'Gemelirs'
                } },
                { pic: {
                    url: 'GRAIGDAVID',
                    name: 'Graig David'
                } },
                { pic: {
                    url: 'PABLOLOPEZ',
                    name: 'Pablo López'
                } },
                { pic: {
                    url: 'PAULWELLER',
                    name: 'Paul Weller'
                } },
                { pic: {
                    url: 'PAULWELLER2',
                    name: 'Paul Weller'
                } },
                { pic: {
                    url: 'SORAYAARNELAS2',
                    name: 'Soraya Arnelas'
                } },
                { pic: {
                    url: 'XZIBIT',
                    name: 'Xzibit'
                } }
          ],
          fotosLef: [
              { pic: {
                  url: 'JAMIECULLUM',
                  name: 'Jaime Cullum'
              } },
              { pic: {
                  url: 'JAVIERAMENA',
                  name: 'javier Amena'
              } },             
              { pic: {
                  url: 'LOQUILLOLEIVAROT',
                  name: 'Loquillo, Leiva, Rot'
              } },  
              { pic: {
                  url: 'MANUELCARRASCO2',
                  name: 'Manuel Carrasco'
              } },
              { pic: {
                  url: 'MANUELCARRASCO3',
                  name: 'Manuel Carrasco'
              } },              
              { pic: {
                  url: 'MANUELCARRASCO4',
                  name: 'Manuel Carrasco'
              } },
              { pic: {
                  url: 'ROSENDO',
                  name: 'Rosendo'
              } },
              { pic: {
                  url: 'RUBENPOZO',
                  name: 'Ruben Pozo'
              } },
              { pic: {
                  url: 'RUBENPOZO2',
                  name: 'Ruben Pozo'
              } },
              { pic: {
                  url: 'XZIBIT2',
                  name: 'Xzibit'
              } },
              { pic: {
                  url: 'ZOMBIEKIDS',
                  name: 'Zombie Kids'
              } }
          ]
      };

    randoM.fotosRig = _.shuffle(randoM.fotosRig);
    randoM.fotosMidd = _.shuffle(randoM.fotosMidd);
    randoM.fotosLef = _.shuffle(randoM.fotosLef);
      
      return randoM;
  },



  created(){
       console.log(actorsRef)
  },

   
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