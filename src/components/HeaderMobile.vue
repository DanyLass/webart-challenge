<template>
    <container>
        <header id="headerMobile">
            <div id="logoMenu">
                <div>
                    <img v-on:click="openMenu" alt="menuImage" id="menu" src="../assets/menu.svg" />
                </div>
                <div>
                    <img alt="logo" id="logoImage" src="../assets/logo.svg" />
                </div>
            </div>
            <div id="iconButton">
                <InputMobile id="inputMobile" />
                <Button class="waves-effect waves-light btn" id="cartButton">
                    <i class="material-icons" id="cartIcon">shopping_cart</i></Button>
            </div>
        </header>
        <content>
            <nav>
                <img alt="Abrir menu" id="banner"
                    src="https://tools.wellcommerce.com.br/teste/banner/banner-mobile.jpg">
            </nav>
        </content>
        <footer>
            <hr id="divider" />
            <div id="pitchbar">
                <i class="material-icons" id="chevron-left">chevron_left</i>
                <button class="btn-flat" id="footerButton">
                    <img alt="" id="pitchbarImg"
                        src="https://tools.wellcommerce.com.br/teste/pitchbar/icone-pitchbar-2.svg">
                    <p id="title">
                        <span id="subtitle">RECEITAS E EQUIPAMENTOS</span> em Kits especiais para você!
                    </p>
                </button>
                <i class="material-icons" id="chevron-right">chevron_right</i>
            </div>
            <hr id="divider" />
        </footer>
    </container>

    <container>
        <div id="menu-overlay" v-if="menuActive"></div>
        <div id="menu-items" :class="{ active: menuActive }">
            <header>
                <div id="closeIcon" v-if="menuActive">
                    <img v-on:click="closeMenu" alt="closeImage" id="closeIcon" src="../assets/close.svg" />
                </div>
                <div>
                    <img class="justify-center" alt="logo" id="menu-logo" src="../assets/logo.svg" />
                </div>

                <div id="items">
                    <Button class="btn" id="loginButton">
                        <i class="material-icons" id=personIcon>person_outline</i>
                        <p id="buttonTitle">Olá, Entre ou cadastre-se</p>
                    </Button>

                    <Button class="btn" id="wishlistButton">
                        <i class="material-icons" id="starIcon">star_border</i>
                        <p id="buttonTitle">Listas de Desejos</p>

                    </Button>
                </div>
            </header>
            <content id="list">
                <ul>
                    <li><a href="/">Item 1</a></li>
                    <li><a href="/">Item 2</a> <img v-on:click="closeMenu" alt="chevron" id="chevron"
                            src="../assets/arrow.svg" /></li>
                    <li><a href="/">Item 3</a> <img v-on:click="closeMenu" alt="chevron" id="chevron"
                            src="../assets/arrow.svg" /></li>
                    <li><a href="/">Item 4</a> <img v-on:click="closeMenu" alt="chevron" id="chevron"
                            src="../assets/arrow.svg" /></li>
                    <li><a href="/">Item 5</a> <img v-on:click="closeMenu" alt="chevron" id="chevron"
                            src="../assets/arrow.svg" /></li>
                    <li><a href="/">Item 6</a> <img v-on:click="closeMenu" alt="chevron" id="chevron"
                            src="../assets/arrow.svg" /></li>
                    <li><a href="/">Item 7</a></li>
                </ul>
            </content>
        </div>
    </container>
</template>

<script>
import InputMobile from '../components/InputMobile.vue';


export default {
    data() {
        return {
            menuActive: false,
        }
    },
    methods: {
        openMenu: function () {
            this.menuActive = true;
        },
        closeMenu: function () {
            this.menuActive = false;
        }
    },

    name: "HeaderMobile",
    components: {
        InputMobile,
    }

}
</script>

<style scoped>
#container {
    background-color: #f2eded;
    width: 100%;
}

#headerMobile {
    margin-left: 10px;
}

#img {
    margin-left: 10px;

}

#logoMenu {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#menuImage {
    height: 40px;
    padding-left: 20px;
}

#logoImage {
    margin-left: 30px;
    width: 220px;
}


#iconButton {
    display: flex;
    align-items: center;
    justify-content: center;
}

#cartButton {
    margin-left: 30px;
}

#cartIcon {
    color: orange;
    font-size: 40px;
}

#banner {
    width: 100%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

#pitchbar {
    width: 100%;
    display: flex;
}

#footerButton {
    color: #656262;
    width: 100%;
    background-color: #fff;
    border: none;
    cursor: pointer;
    display: flex;
    text-align: justify;
}

#chevron-right {
    color: #656262;
    font-size: 50px;
}

#chevron-left {
    color: #656262;
    font-size: 50px;
}

#title {
    margin-left: 6px;
}

#subtitle {
    font-weight: bold;
}

#divider {
    border-bottom: 1px solid gray;
}

#menu-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 20%;
    height: 100vh;
    background-color: #000;
    opacity: 0.6;
}

#menu-logo {
    width: 230px;
    margin-bottom: 15px;
    margin-left: 30px;
}

#menu-items {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;
    width: 80%;
    height: 100vh;
    display: none;
    flex-direction: column;
}

#closeIcon {
    display: flex;
    color: #3b3838;
    justify-content: flex-end;
    margin: 8px;
}

#menu-items.active {
    display: flex;
}

#chevron {
    width: 15px;
    height: 15px;
}


#items {
    display: flex;
    background-color: #FDD835;
    width: 100%;
    height: 70px;
}

#loginButton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#personIcon {
    color: #3e3a3a;
    font-size: 40px;
}

#starIcon {
    color: #3e3a3a;
    font-size: 40px;
}

#wishlistButton {
    width: 100%;
    display: flex;
    align-items: center;
}


#buttonTitle {
    font-size: 13px;
    text-align: justify;
    font-weight: bold;
}

#list {
    padding: 10px;
}

ul {
    list-style: none;
}

ul li {
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
}

ul li a {
    color: #3b3838;
    text-decoration: none;
    font-weight: bold;
}


@media (min-width:1096px) {

    #closeIcon,
    #iconButton,
    #divider,
    #banner,
    #menu-logo,
    #list,
    #items,
    #menu,
    #pitchbar,
    #inputMobile,
    #logoMenu,
    #menu-items,



    #menu-overlay {
        display: none
    }


}
</style>