<template>
    <div>
        <h1 class="title">Категории</h1>

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
import MebelStore from '../../store/store';
import HomeCard from '../card/HomeCard.vue';


export default{
    components: {HomeCard},
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
.title{
    color: rgb(255, 255, 255);
    text-align: center;
    background-color: rgb(11, 11, 11);
}
.wrapper_categories{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
    gap: 30px;
    align-items: center;
    padding: 2rem 0 2rem 2rem;
}
img{
    width: 100px;
}
</style>