<template>
    <div>
        <h1>Шкафы</h1>
   
        <div class="wrapper">
            <main-card v-for="(card, i) in getCabinets" :key="i"
                :name="card.name"
                :price="card.price"
                :image_url="card.image"
                :description="card.description"
                :images="card.images_name"
                :id="card.id"
            >
            </main-card>
      </div>
    </div>
</template>

<script>
import MebelStore from '../../store/store'
import MainCard from '../card/MainCard.vue'


export default{
    components: {MainCard},
    data(){
        return{
            store: MebelStore(),
            
        }
    },
    mounted(){
        this.setCabinets()
    },
    computed: {
        getCabinets(){
            return this.store.cabinets
        }
    },
    methods:{
        setCabinets(){
            this.store.setCabinets(1)
        } 

    }
}
</script>

<style lang="scss" scoped>

.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
//   background-color: aqua;
}
</style>