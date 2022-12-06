<template>
    <hr id="separator" />
    <div id=footerBar>
        <Button class="btn-flat" id=footerButton>
            <img alt="" id="pitchbarImg" src="https://tools.wellcommerce.com.br/teste/pitchbar/icone-pitchbar.svg">
            <span id="title"> Faça parte do <h5 id="subtitle">NOSSO TIME</h5></span>
        </Button>
        <hr id="divider" />
        <Button class="btn-flat disabled" id=footerButton>
            <img alt="" id="pitchbarImg" src="https://tools.wellcommerce.com.br/teste/pitchbar/icone-pitchbar-2.svg">
            <span id="title">
                <h5 id="subtitle">RECEITAS E EQUIPAMENTOS</h5> em Kits especiais para você!
            </span>

        </Button>
        <hr id="divider" />
        <Button class="btn-flat disabled" id="footerButton">
            <img alt="" id="pitchbarImg" src="https://tools.wellcommerce.com.br/teste/pitchbar/icone-pitchbar-3.svg">
            <span id="title">Parcele em até<h5 id="subtitle">12X NO CARTÃO</h5></span>
        </Button>
        <hr id="divider" />
        <Button class="btn-flat disabled" id="footerButton">
            <img alt="" id="pitchbarImg" src="https://tools.wellcommerce.com.br/teste/pitchbar/icone-pitchbar-4.svg">
            <span id="title">Conheça nossos <h5 id="subtitle">CURSOS</h5></span>
        </Button>
    </div>
    <hr id="separator" />
</template>


<script>

export default {
    name: 'PitchbarComponent',
}
</script>

<style scoped>
#footerBar {
    justify-content: center;
    display: flex;

}

#separator {
    border-top: 1px solid gray;
}

#divider {
    border-right: 1px solid gray;
}

#footerButton {
    color: #656262;
    height: 80px;
    width: 400px;
    background-color: #fff;
    border-color: #dad8d3;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
}

#pitchbarImg {
    padding: 0 12px;
}

#title {
    text-align: justify;
    font-size: 18px;
}

#subtitle {
    font-weight: bold;
    font-size: 18px;
}
</style> -->