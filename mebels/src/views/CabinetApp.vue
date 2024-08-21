<template>
    <div>
        <!-- <h1>Шкафы</h1> -->
        <right-block-vue
         title="Шкафы"
         >
        </right-block-vue>
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
import MebelStore from '../store/store'
import RightBlockVue from '../components/blocks/RightBlock.vue'
import MainCard from '../components/card/MainCard.vue'

export default{
    components: {MainCard,RightBlockVue},
    provide: ['cabinets'],
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
  margin: 1rem;
//   background-color: aqua;
}
</style>