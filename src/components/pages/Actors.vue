<template>
<div class="galleryEditorials">
    <div class="column">
       <ul class="galery-horiz">
           <li v-for="foto in fotosLef"> 
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
      let randoM = {
            fotosRig: [
                        { pic: {
                            url: 'ALBERTORODRIGUEZ',
                            name: 'Alberto Rodriguez'
                        } },
                        { pic: {
                            url: 'ALEXGARCIA',
                            name: 'Alex García'
                        } },
                        { pic: {
                            url: 'ALEXGARCIA2',
                            name: 'Alex García'
                        } },
                        { pic: {
                            url: 'AMAIASALAMANCA',
                            name: 'Amaia Salamanca'
                        } },
                        { pic: {
                            url: 'ANTONIODELATORRE',
                            name: 'Antonio De La Torre'
                        } },
                        { pic: {
                            url: 'ANTONIODELATORRE2',
                            name: 'Antonio De La Torre'
                        } },
                        { pic: {
                            url: 'MARTINRIVAS5',
                            name: 'Martín Rivas'
                        } },
                        { pic: {
                            url: 'MEGANMONTANER',
                            name: 'Megan Montera'
                        } },
                        { pic: {
                            url: 'MEGANMONTANER2',
                            name: 'Megan Montera'
                        } },
                        { pic: {
                            url: 'PATRICIACONDE',
                            name: 'Patricia Conde'
                        } },
                        { pic: {
                            url: 'URSULACORBERO',
                            name: 'Ursula Corbero'
                        } }
                        
                ],

                fotosMidd: [
                        { pic: {
                            url: 'ANTONIORESINES',
                            name: 'Antonio Resines'
                        } },
                        { pic: {
                            url: 'ASTRIDBERGESFRISBEY2',
                            name: 'Àstrid Bergès-Frisbey'
                        } },
                        { pic: {
                            url: 'DANIELGUZMAN',
                            name: 'Daniel Guzman'
                        } },
                        { pic: {
                            url: 'JOSECORONADO',
                            name: 'José Cornado'
                        } },
                        { pic: {
                            url: 'JOSEMOTA',
                            name: 'José Mota'
                        } },
                        { pic: {
                            url: 'JOSEMOTA2',
                            name: 'José Mota'
                        } },
                        { pic: {
                            url: 'MIGUELANGELSILVESTRE',
                            name: 'Miguel Ángel Silvestre'
                        } },
                        { pic: {
                            url: 'MIGUELANGELSILVESTRE2',
                            name: 'Miguel Ángel Silvestre'
                        } },
                        { pic: {
                            url: 'MIGUELANGELSILVESTRE3',
                            name: 'Miguel Ángel Silvestre'
                        } },
                        { pic: {
                            url: 'PATRICIACONDE2',
                            name: 'Patricia Conde'
                        } },
                        { pic: {
                            url: 'YONGONZALEZ2',
                            name: 'Yon Gonzalez'
                        } }
                ],
                fotosLef: [
                    { pic: {
                        url: 'LETICIADOLERA',
                        name: 'Leticia Dolera'
                    } },
                    { pic: {
                        url: 'MANUELAVELLES',
                        name: 'Manuel Avelles'
                    } },             
                    { pic: {
                        url: 'MARIANALVAREZ',
                        name: 'Maria Nalvarez'
                    } },  
                    { pic: {
                        url: 'MARIOCASAS',
                        name: 'Mario Casas'
                    } },
                    { pic: {
                        url: 'MARIOCASAS2',
                        name: 'Mario Casas'
                    } },              
                    { pic: {
                        url: 'MARTINRIVAS2',
                        name: 'Martín Rivas'
                    } },
                    { pic: {
                        url: 'MIRIAMGIOVANELLI',
                        name: 'Miriam Giovanelli'
                    } },
                    { pic: {
                        url: 'OONACHAPLIN1',
                        name: 'Oona Chaplin'
                    } },
                    { pic: {
                        url: 'OONACHAPLIN3',
                        name: 'Oona Chaplin'
                    } },
                    { pic: {
                        url: 'SANTIMILLAN2',
                        name: 'Santi Millan'
                    } },
                    { pic: {
                        url: 'YONGONZALEZ3',
                        name: 'Yon Gonzalez'
                    } }
                ]
             }


    randoM.fotosRig = _.shuffle(randoM.fotosRig);
    randoM.fotosMidd = _.shuffle(randoM.fotosMidd);
    randoM.fotosLef = _.shuffle(randoM.fotosLef);
      
      return randoM;
  },

  /*

  created(){
      let actors = db.ref('/Actors').on('value', snapshot => this.cargarArray(snapshot.val()))
  },

  methods: {
      cargarArray(actors){
         console.log(actors)
      }
  }
 */
 
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