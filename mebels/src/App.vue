<template>
  <div>
    <header-comp></header-comp>

    <div class="container">
      <div class="container__left">
          <left-block>
            
          </left-block>
      </div>
      <div class="container__rigth">
          <router-view>
          </router-view>
        
      </div>
    </div>
 
      
  </div>
</template>

<script>
import HeaderComp from './components/header/HeaderComp.vue';
import LeftBlock from './components/blocks/LeftBlock.vue';
import MebelStore from './store/store.js'
import RightBlockVue from './components/blocks/RightBlock.vue';


export default{
  components: {HeaderComp,LeftBlock,RightBlockVue},
  data(){
    return{
        store: MebelStore()
      }
  },
  computed:{
      counts(){
        return this.store.count
      }
  }
}
</script>

<style lang="scss">
  .container{
    // width: 100%;
    margin: 0 5rem;

    display: flex;
  
    &__left{
      width: 20%;
      height: max-content;
      background-color: rgb(175, 175, 175);
    }
    &__rigth{
      width: 100%;
      background-color: rgb(255, 255, 255);
      height: 70vh;
      
    }
  
  }
 </style>