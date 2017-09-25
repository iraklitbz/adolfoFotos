<template>
     <div class="contacto">
         <h2>Contacto</h2>
         <ul class="contact-me">
            <li><i class="fa fa-envelope-o"></i><a class="activ" href="mailto:info@adolfocallejo.com"> info@adolfocallejo.com </a></li>
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

    h2 {
        font-family: 'Lato', sans-serif!important;
        margin-bottom: 20px;
        font-size: 26px;
        text-align: center;
        font-weight: 100!important;
        color: #5b5b5b
    }
}

    .contact-me {
        li {
            font-family: 'Lato', sans-serif;
        padding: 10px 0px;
        font-size: 24px;
         color: #5b5b5b;
        i {
            margin-right: 10px;
             color: #5b5b5b
        }
        a {
            font-family: 'Lato', sans-serif;
            text-decoration: none;
             color: #5b5b5b;
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
     }

</style>