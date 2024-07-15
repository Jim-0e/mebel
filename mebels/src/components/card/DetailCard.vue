<template>
    <div>
        <h1>карточка</h1>

        <v-carousel
                height="400"
                show-arrows="true"
                cycle
                hide-delimiter-background
            >
                <v-carousel-item
                v-for="(slide, i) in getTovarId.images_name"
                :key="i"
                >
                <v-sheet
                
                    height="100%"
                >
                    <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                       
                        <img width="300" :src="slide.image" alt=""> 
                    </div>
                    </div>
                </v-sheet>
                </v-carousel-item>
                
            </v-carousel>
        <h2>{{ getTovarId.name}}</h2>
       <p>{{ getTovarId.description }}</p>
       <h3> Цена: {{ getTovarId.price }} руб.</h3>
    </div>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'


import MebelStore from '../../store/store';

export default{

    data(){
        return{
            store: MebelStore(),
        }
    },
    mounted(){
        const id = this.$route.params.pk
        this.setTovarId(id)
    },
    computed:{
        getTovarId(){
            return this.store.tovar
        }
    },
    methods:{
        setTovarId(id){
            this.store.setTovarId('cabinets', id)
        }
    }
}
</script>

<style scoped>
button{
    
    width: 30px;
    position: absolute;
    z-index: 2222;
    height: 30px;
    background: red !important;
}
</style>