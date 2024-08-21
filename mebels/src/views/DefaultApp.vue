<template>
    <div>
        <right-block-vue 
        title="Категории">
        </right-block-vue>
        <div class="wrapper_categories">

            
            <div v-for="(item,i) in getCategories" :key="i">
                <router-link >
                    <home-card 
                    :name="item.category_name"
                    :image_url="item.image"
                
                    >
                    </home-card>
                </router-link>
            </div>
           </div>
    </div>
</template>

<script>
import MebelStore from '../store/store';
import RightBlockVue from '../components/blocks/RightBlock.vue';
import HomeCard from '../components/card/HomeCard.vue';

export default{
    components: {HomeCard, RightBlockVue},
    data(){
        return{
            store: MebelStore(),
            
        }
    },
    mounted(){
        this.setCategories()
    },
    computed:{
        getCategories(){
            // return this.categories_names.filter(el)
            return this.store.categories
        }
    },
    methods:{
        setCategories(){
            this.store.setCategories()
        }
    }
}
</script>

<style scoped>

.wrapper_categories{
    max-width: 1500px;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3px;
    align-items: center;
    margin: 0 auto;
    padding: 0rem 4rem;
    /* padding: 2rem 0 2rem 2rem; */
}
img{
    width: 100px;
}
</style>