<template>
<div class="galleryEditorials">
    <div class="column">
       <ul class="galery-horiz">
           <li v-for="foto in fotosLef" :key="foto.id"> 
               <img :src="'/src/images/editorial/' + foto.pic.url + '.jpg'" > 
               <h2>{{foto.pic.name}}</h2>
           </li>
       </ul>
    </div>

    <div class="column">
       <ul class="galery-horiz">
                 <li v-for="foto in fotosMidd"> 
                     <img :src="'/src/images/editorial/' + foto.pic.url + '.jpg'" > 
                     <h2>{{foto.pic.name}}</h2>
                </li>
       </ul>
    </div>

    <div class="column">
       <ul class="galery-horiz">
            <li v-for="foto in fotosRig"> 
               <img :src="'/src/images/editorial/' + foto.pic.url + '.jpg'" > 
               <h2>{{foto.pic.name}}</h2>
            </li>
       </ul>
    </div>
</div>

</template>

<script>
import _ from 'lodash';
export default {
  data(){
     let randoM = {
          fotosRig: [
                { pic: {
                    url: 'ALEXGARCIA2',
                    name: 'Alex Garicia'
                } },
                { pic: {
                    url: 'AMAIASALAMANCA2',
                    name: 'Amaia Salamanca'
                } },
                { pic: {
                    url: 'ANTONIOCARMONA',
                    name: 'Antonio Carmona'
                } },
                { pic: {
                    url: 'ANTONIOSANJUAN',
                    name: 'Antonio San Juan'
                } },
                { pic: {
                    url: 'BEBE2',
                    name: 'Bebe'
                } },
                { pic: {
                    url: 'COTI2',
                    name: 'Coti'
                } },
                { pic: {
                    url: 'DANIELDUBOY2',
                    name: 'Daniel Duboy'
                } },
                { pic: {
                    url: 'DUDDIWALLACE',
                    name: 'Duddi Wallace'
                } },
                { pic: {
                    url: 'FANGORIA',
                    name: 'Fangoria'
                } },
                { pic: {
                    url: 'JUANDIEGOBOTTO',
                    name: 'Juan Diego Botto'
                } },
                { pic: {
                    url: 'MANOLOGARCIA',
                    name: 'Manolo García'
                } },
                { pic: {
                    url: 'MARTINRIVAS',
                    name: 'Martin Rivas'
                } },
                { pic: {
                    url: 'MCLAN',
                    name: 'McLan'
                } },
                { pic: {
                    url: 'NACHOVEGAS2',
                    name: 'Nacho Vegas'
                } },
                { pic: {
                    url: 'PHOENIX',
                    name: 'Phonix'
                } },
                { pic: {
                    url: 'SRCHINARRO2',
                    name: 'Sr Chinarro'
                } },
                { pic: {
                    url: 'swanfyahbwoy2',
                    name: 'Swan Fyahbwoy'
                } },
                { pic: {
                    url:  'XCESE',
                    name:  'Xcese'
                } },
                
          ],

          fotosMidd: [
                { pic: {
                    url: 'ALEXGARCIA',
                    name: 'Alex García'
                } },
                { pic: {
                    url: 'AMAIASALAMANCA',
                    name: 'Amaia Salamanca'
                } },
                { pic: {
                    url: 'ANTONIOCARMOA3',
                    name: 'Antonio Carmoa'
                } },
                { pic: {
                    url: 'ANTONIODELATORRE',
                    name: 'Antonio De La Torre'
                } },
                { pic: {
                    url: 'AURYN',
                    name: 'Auryn'
                } },
                { pic: {
                    url: 'CLARALAGO',
                    name: 'Clara Lago'
                } },
                { pic: {
                    url: 'DANIELDUBOY',
                    name: 'Daniel Duboy'
                } },
                { pic: {
                    url: 'DANIELDUBOY5',
                    name: 'Daniel Duboy'
                } },
                { pic: {
                    url: 'EDURNE2',
                    name: 'Edurne'
                } },
                { pic: {
                    url: 'FERNANDOGUALLAR2',
                    name: 'Fernando Guallar'
                } },
                { pic: {
                    url: 'LEIVALOQUILLOARIEL2',
                    name: 'Leiva, Loquillo, Ariel'
                } },
                { pic: {
                    url: 'MANUELAVELLES',
                    name: 'Manuela Velles'
                } },
                { pic: {
                    url: 'MARTINRIVAS4',
                    name: 'Martin Rivas'
                } },
                { pic: {
                    url: 'MIGUELANGELMUNOZ',
                    name: 'Miguel Ángel Muñoz'
                } },
                { pic: {
                    url: 'OONACHAPLIN2',
                    name: 'Oona Chaplin'
                } },
                { pic: {
                    url: 'SERIALKILLERS',
                    name: 'Serial Killers'
                } },
                { pic: {
                    url: 'YONGONZALEZ',
                    name: 'Yon Gonzalez'
                } },
          ],
          fotosLef: [
              { pic: {
                  url: 'ALEXDELAIGLESIA',
                  name: 'Alex de la Iglesia'
              } },
              { pic: {
                  url: 'ALEXGARCIA3',
                  name: 'Alex Garicía'
              } },             
              { pic: {
                  url: 'ANDRESCALAMARO',
                  name: 'Andres Calamaro'
              } },  
              { pic: {
                  url: 'ANTONIOCARMONA2',
                  name: 'Antonio Carmona'
              } },
              { pic: {
                  url: 'ASTRIDBERGESFRISBEY',
                  name: 'Àstrid Bergès-Frisbey'
              } },              
              { pic: {
                  url: 'BEBE3',
                  name: 'Bebe'
              } },
              { pic: {
                  url: 'COTI3',
                  name: 'Coti'
              } },
              { pic: {
                  url: 'DANIELDUBOY4',
                  name: 'Daniel Duboy'
              } },
              { pic: {
                  url: 'EDURNE',
                  name: 'Edurne'
              } },
              { pic: {
                  url: 'FERNANDOGUALLAR',
                  name: 'Fernando Guallar'
              } },
              { pic: {
                  url: 'LEIVALOQUILLOARIEL',
                  name: 'Leiva, Loquillo, Ariel'
              } },
              { pic: {
                  url: 'MARTINRIVAS3',
                  name: 'Martín Rivas'
              } },
              { pic: {
                  url: 'MEGANMONTANER',
                  name: 'Megan Montaner'
              } },
              { pic: {
                  url: 'NACHOVEGAS3',
                  name:'Nacho Vegas'
              } },
              { pic: {
                  url: 'PHOENIX2',
                  name: 'Phoenix'
              } },
              { pic: {
                  url: 'swanfyahbwoy',
                  name: 'Swan Fyahbwoy'
              } },
              { pic: {
                  url: 'XCESE2',
                  name: 'Xcese'
              } },
              { pic: {
                  url: 'YONGONZALEZ4',
                  name: 'Yon Gonzalez'
              } }
          ]
      };


    randoM.fotosRig = _.shuffle(randoM.fotosRig);
    randoM.fotosMidd = _.shuffle(randoM.fotosMidd);
    randoM.fotosLef = _.shuffle(randoM.fotosLef);
      
      return randoM;
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