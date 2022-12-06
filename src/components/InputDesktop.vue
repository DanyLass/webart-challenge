<template>

  <div id=inputDesktop>
    <div class="input-field col s12">
      <select class="" id="select">
        <option value="default">Todas</option>
        <option value="">Todas 1</option>
        <option value="">Todas 2</option>
      </select>
      <input type="search" v-model="input_name" placeholder="Digite aqui o que procura" id="input" />
      <Button class="waves-effect waves-light btn " id=button><i class="material-icons left"
          id="icon">search</i></Button>
    </div>
  </div>
</template>
    
<script>

export default {
  name: "InputDesktop"
}

</script>

<style scoped>
#inputDesktop {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  text-align: center;

}

#input {

  Width: 250px;
  height: 35px;
  border-color: #EEEEEE;
  box-shadow: 0 0 0 0;
  outline: 0;
  border-color: #e5dfdf
}

#button {
  Width: 48px;
  height: 35px;
  background-color: #FDD835;
  border-radius: 0px 5px 5px 0px;
  border-color: #FDD835;

}

#icon {
  color: #ffff
}

#select {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  Width: 100px;
  height: 35px;
  border-radius: 5px 0px 0px 5px;
  background-color: #dad8d3;
  border-color: #aba4a4;
  text-align: center;
  border: none;
  outline: none;
}
</style>


