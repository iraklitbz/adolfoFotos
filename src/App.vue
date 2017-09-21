<template>
    <div class="general">
        <header name="top" id="Header">
            <router-link class="main-logo" to="/" tag="h1"><a><img src="./images/logo.jpg"></a></router-link> 
            <nav id="Navbar" class="navbar">
      
                <ul>
                    <router-link active-class="activo" to="/" tag="li" exact><a>Editorial</a></router-link>
                    <router-link active-class="activo" to="/actors" tag="li"><a>Actors</a></router-link>
                    <router-link active-class="activo" to="/music" tag="li"><a>Music</a></router-link>
                    <router-link active-class="activo" to="/people" tag="li"><a>People</a></router-link>
                    <router-link active-class="activo" to="/contacto" tag="li"><a>Contact</a></router-link>
                </ul>
               
            </nav>
        </header>
        <router-view></router-view>
        <footer>
            <a class="fa fa-instagram" href="https://www.instagram.com/adolfo_callejo/" target="_blank"></a>
        </footer>
        <a id="backTop" href="#" class="goTop fa fa-arrow-circle-up" aria-hidden="true"></a>
    </div>
</template>

<script>

export default {

    mounted: function(){
     $(window).scroll(function(e){
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent*100);

        if(scrollPercentRounded > 3) {
            $('#Navbar').addClass('fixed');
        } else {
            $('#Navbar').removeClass('fixed');
        }

        $('#backTop').on('click', function(e){
            e.preventDefault();
            $(window).scrollTop(0);
        })
     })
    }
 
}
</script>

<style lang="scss">
@import 'node_modules/reset-css/_reset';
body {
    font-family: 'Lato', sans-serif;
}
header {
    padding: 25px 0px;
}
.main-logo {
    display: flex;
    justify-content: center;
    a {
        display: block;
        max-width: 500px;
        
        img {
            width: 100%
        }
    }
}
.navbar {
    display: flex;
    justify-content: center;
    background-color: transparent;
    align-items: center;
    margin-top: 25px;
    transition: all 0.2 linear;
    position: relative;
    top:0px;
    ul {
        li {
            display: inline-block;
            padding: 5px 7px;
            a {
                text-decoration: none;
                text-transform: uppercase;
                font-size: 14px;
                color: #505050;
                transition: color 0.2s linear;
                &:hover {
                    color: #D32C2E
                }
            }
        }
            .activo a {
            color: #D32C2E
            }
    }
}

footer {
    position: fixed;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    bottom: 0px;
    left: 0px;
    background-color: rgba(255,255,255, 0.92);
    a {
         color: #505050;
         transition: color 0.2s linear;
         text-decoration: none;
         font-size: 27px!important;
        &:hover {
                color: #D32C2E
        }
    }

}

.goTop {
    position: fixed;
    right: 35px;
    bottom: 60px;
    color: rgba(255,255,255, 0.72);
    font-size: 60px!important;
    transition: color 0.2s linear;
    text-decoration: none;
     &:hover {
                color: #fff
        }
}

.fixed {
    position: fixed;
    width: 100%;
    top:0px;
     background-color: rgba(255,255,255, 0.32);
    transition: all 0.2 linear;
    margin-top: 0px;
    height: 40px;
    overflow: hidden;
    &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 70px;
        left: 0px;
        background-color: rgba(255,255,255, 0.72);
        -webkit-filter: blur(20px);
        -moz-filter: blur(15px);
        -o-filter: blur(15px);
        -ms-filter: blur(15px);
        filter: blur(15px);
        opacity: 0.95;
        z-index: 9;
    }
    &:before {
         content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 40px;
        left: -10px;
        top:-15px;
        background-color: rgba(255,255,255, 0.72);
        -webkit-filter: blur(20px);
        -moz-filter: blur(15px);
        -o-filter: blur(15px);
        -ms-filter: blur(15px);
        filter: blur(15px);
        opacity: 0.95;
        z-index: 9;
    }
    ul {
        position: relative;
        z-index: 100
    }
}

</style>
