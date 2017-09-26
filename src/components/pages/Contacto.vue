<template>
     <div class="contacto">
         <p><i class="fa fa-envelope-o"></i><a class="activ" href="mailto:info@adolfocallejo.com"> info@adolfocallejo.com </a></p>
         <ul class="contact-me">
            <li class="tel"><i class="fa fa-whatsapp"></i>658 595 141</li>
            <li class="insta"><i class="fa fa-instagram"></i> <a href="https://www.instagram.com/adolfo_callejo/">adolfo_callejo</a></li>
         </ul>
    </div>
</template>

<script>
export default {
 data(){
     return {
         
     }
 }
}
</script>

<style lang="scss">
.contacto {
  max-width: 400px;
  margin: 20px auto;
   i {
            margin-right: 10px;
             color: #333;
             font-size: 24px;
        }
   p {
       text-align: center;
           font-weight: 300;
       a {
            font-family: 'Lato', sans-serif;
            padding: 10px 0px;
            font-size: 24px;
            color: #D32C2E;
            text-decoration: none;
        }
   }

    h2 {
        font-family: 'Lato', sans-serif!important;
        margin-bottom: 20px;
        font-size: 26px;
        text-align: center;
        color: #5b5b5b
    }
}

    .contact-me {
        text-align: center;
        margin-top: 15px;
        li {
            font-family: 'Lato', sans-serif;
        padding: 10px 0px;
                  font-weight: 300;
        font-size: 24px;
         color: #333;
         display: inline-block;
         &:first-child{
             margin-right: 20px;
         }
  
        i {
            margin-right: 10px;
             color: #333
        }
        a {
            text-decoration: none;
             color: #333;
            transition: color 0.2s linear;
            &:hover {
                color: #D32C2E
            }
        }
        .activ {
             color: #D32C2E
        }
        }
    }


     @media screen and (max-width: 990px)  {
         .contacto {
            text-align: center;
         }
        .contact-me {
            li {
            padding: 10px 0px;
            font-size: 20px;
            }
        }
            .contact-me {
                text-align: center;
                margin-top: 15px;
                li {
                display:block;

        }
     }
     }

</style>