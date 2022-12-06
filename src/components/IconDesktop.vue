<template>
  <div id=buttonIcons>
    <div id=locationIcon>
      <Button class="waves-effect waves-light btn " id=location>
        <i class="material-icons" id="locationIcon">location_on</i>
        <h6 id="buttonTitle">2 Lojas Físicas</h6>
      </button>
    </div>
    <div>
      <Button class="waves-effect waves-light btn" id=buttonStar>
        <i class="material-icons" id=starIcon>star_border</i>
        <h6 id="buttonTitle">Listas de Desejos</h6>
      </Button>

    </div>
    <div>
      <Button class="waves-effect waves-light btn " id=person>
        <i class="material-icons" id=personIcon>person_outline</i>
        <h6 id="buttonTitle">Entrar</h6>
      </Button>

    </div>
    <div>
      <Button class="waves-effect waves-light btn " id=cart>
        <i class="material-icons" id=cartIcon>shopping_cart</i></Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderButton',
}
</script>
  
<style scoped>
#buttonIcons {
  display: flex;
  align-items: center;
}

#location {
  padding-left: 40px;
}

#locationIcon {
  color: orange;
  font-size: 30px;
}

#buttonStar {
  padding-left: 40px;
}

#starIcon {
  color: orange;
  font-size: 30px;
}

#person {
  padding-left: 40px;
}

#personIcon {
  color: orange;
  font-size: 30px;
}

#cart {
  margin-right: 30px;
  padding-left: 40px;
}

#cartIcon {
  color: orange;
  font-size: 50px;
}

#buttonTitle {
  color: gray;
  font-weight: bold;
}
</style>
  