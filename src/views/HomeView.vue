<template>
    <container id="container">
        <header id="header">
            <div>
                <img alt="logo" id="logoImage" src="../assets/logo.svg" />
            </div>
            <InputDesktop />
            <IconDesktop />
        </header>
        <content>
            <DropdownDesktop />
            <nav>
                <a href="/"><img alt="" id="banner"
                        src="https://tools.wellcommerce.com.br/teste/banner/banner-1.jpg"></a>
            </nav>
        </content>
        <PitchbarDesktop />
    </container>
</template>
  
<script>
import InputDesktop from "./../components/InputDesktop.vue";
import IconDesktop from "./../components/IconDesktop.vue";
import DropdownDesktop from "./../components/DropdownDesktop.vue";
import PitchbarDesktop from "@/components/PitchbarDesktop.vue";

export default {
    name: 'HometView',

    components: {
        InputDesktop,
        IconDesktop,
        DropdownDesktop,
        PitchbarDesktop,
    }
}
</script>
  
<style scoped>
#header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
}

#logoImage {
    display: flex;
    margin-right: 200px;
}

#banner {
    width: 100%;
    background-size: cover;
    justify-content: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>