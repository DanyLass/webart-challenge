<template>

    <div id="inputMobile">
        <div class="inputFild ">
            <select Class="" id="select">
                <option value="default">Todas</option>
            </select>
            <input type="texto" v-model="input_name" placeholder="Buscar" id="input" />
            <Button class="waves-effect waves-light btn " id=button><i class="material-icons left"
                    id="icon">search</i></Button>
        </div>
    </div>
</template>
      
<script>
export default {
    name: "InputMobile"
}
</script>
  
  
<style scoped>
#inputMobile {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    text-align: center;
}

#input {
    Width: 130px;
    height: 31px;
    border-color: #EEEEEE;
    box-shadow: 0 0 0 0;
    outline: 0;
    border-bottom-color: #dad8d3;
    font-size: 12px;
}

#button {
    Width: 40px;
    height: 32px;
    background-color: #FDD835;
    border-radius: 0px 5px 5px 0px;
    border-color: #FDD835;
}

#icon {
    color: #ffff;
    font-size: 25px;
}

#select {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    Width: 70px;
    height: 32px;
    border-radius: 5px 0px 0px 5px;
    background-color: #dad8d3;
    border-color: #aba4a4;
    text-align: center;
    border: none;
    outline: none;
    font-size: 12px;
    margin-left: 9px;
}
</style>
  
  
  