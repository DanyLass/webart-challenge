<template>

  <div class="menu" id=menuBar>
    <label v-for="item in menu.itens" :key="item.key" data-target='dropdown' id="dropdownButton" class="dropdown">
      <img alt="" :src="item.icone">
      <div class="dropdown-trigger btn">
        {{ item.value }}
        <i class="arrow down" id="arrow"></i>
      </div>
      <input type="checkbox" class="dd-input" id="test">
      <ul class="dd-menu">
        <li>Test</li>
      </ul>
      <hr id="divider" />
    </label>
  </div>
</template>
     
<script>
import axios from 'axios';

export default {
  name: 'DropdownDesktop',
  data() {
    return {
      open: null,
      menu: {
        itens: [
          {
            key: 1, value: 'Item 1', icone: 'https://tools.wellcommerce.com.br/teste/menu/icone-menu-1.svg',
            sub: []
          },
          {
            key: 2, value: 'Item 2', icone: 'https://tools.wellcommerce.com.br/teste/menu/icone-menu-2.svg',
            sub: []
          },
          {
            key: 3, value: 'Item 3', icone: 'https://tools.wellcommerce.com.br/teste/menu/icone-menu-3.svg',
            sub: []
          },
          {
            key: 4, value: 'Item 4', icone: 'https://tools.wellcommerce.com.br/teste/menu/icone-menu-4.svg',
            sub: [
              {
                label: "Item 1",
                icone: "",
                sub: [
                  {
                    label: "Item 2",
                    icone: ""
                  },
                  {
                    label: "Item 3",
                    icone: ""
                  }
                ]
              },
              {
                label: "Item 2",
                icone: "",
                sub: [
                  {
                    label: "Item 3",
                    icone: ""
                  }
                ]
              },
              {
                label: "Item 3",
                icone: "",
                sub: [
                  {
                    label: "Item 4",
                    icone: ""
                  }
                ]
              },
              {
                label: "Origem",
                icone: "",
                sub: [
                  {
                    label: 'Inglaterra',
                    icone: "https://tools.wellcommerce.com.br/teste/menu/inglaterra.png"
                  },
                  {
                    label: 'Alemanha',
                    icone: "https://tools.wellcommerce.com.br/teste/menu/alemanha.png"
                  },
                  {
                    label: 'Estados Unidos',
                    icone: "https://tools.wellcommerce.com.br/teste/menu/estados-unidos.png"
                  },
                  {
                    label: 'Austrália',
                    icone: "https://tools.wellcommerce.com.br/teste/menu/australia.png"
                  },
                ]
              }
            ]
          },
          {
            key: 5, value: 'Item 5', icone: 'https://tools.wellcommerce.com.br/teste/menu/icone-menu-5.svg',
            sub: []
          },
          {
            key: 6, value: 'Item 6', icone: 'https://tools.wellcommerce.com.br/teste/menu/icone-menu-6.svg',
            sub: []
          },
          {
            key: 7, value: 'Item 7', icone: '',
            sub: []
          },
          {
            key: 8, value: 'Item 8', imaiconege: '',
            sub: []
          },
        ],
      }
    };
  },
  mounted() {
    this.getMenu();
  },
  methods: {

    async getMenu() {

      return await axios.get('http://tools.wellcommerce.com.br/teste/pitchbar.json',

        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          }
        }
      )
        .then(response => {
          response.json().data;
        });
    }
  },
  computed: {
    subs: function () {
      var arrayItems = [];
      this.menu.itens.map((item) => {
        if (item.sub.length > 0) {
          arrayItems.push(item.value);
        } else {
          var text = "Nao tem items";
          arrayItems.push(text);
        }
      });
      console.log("List", arrayItems);
      return arrayItems;
    },
  },
}
</script>
 
<style  scoped>
#menuBar {
  display: flex;
  background: #FDD835;
  justify-content: center;
}

.dropdown-trigger {
  font-weight: bold;
}

#dropdownButton {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
}


#icon {
  padding-right: 16px;
}

img {
  padding-left: 16px;
}

#divider {
  border-left: 1px solid gray;
  height: 30px;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

#arrow {
  margin: 6px 10px 6px 3px;
}

/* Dropdown */

.dropdown {
  display: inline-block;
  position: relative;
}

.dd-button {
  display: inline-block;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 10px 30px 10px 20px;
  background-color: #ffffff;
  cursor: pointer;
  white-space: nowrap;
}

.dd-button:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
}

.dd-button:hover {
  background-color: #eeeeee;
}


.dd-input {
  display: none;
}

.dd-menu {
  position: absolute;
  top: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin: 2px 0 0 0;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  list-style-type: none;
}

.dd-input+.dd-menu {
  display: none;
}

.dd-input:checked+.dd-menu {
  display: block;
}

.dd-menu li {
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
}

.dd-menu li:hover {
  background-color: #f6f6f6;
}

.dd-menu li a {
  display: block;
  margin: -10px -20px;
  padding: 10px 20px;
}

.dd-menu li.divider {
  padding: 0;
  border-bottom: 1px solid #cccccc;
}
</style>
 
 
