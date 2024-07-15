<template>
    <nav>
        <div class="head">
           <router-link :to="'/'"><h1>Mebel-Rich</h1></router-link> 
        <form action="">
                <input type="text" placeholder="поиск">
                <butto  type="submit">Найти</butto>
        </form>
        </div>
        
        <ul>
            <li>Шкафы</li>
            <li>Кухни</li>
            <li>Стелажи</li>
            <li>Столы</li>
            <li>Комоды</li>
            <li>Шкафы-купе</li>
            <li>Тумбы</li>
            <li>Кухни</li>

            

        </ul>
        <hr>
        <button @click="getCab">Найти</button>
        <ul>
            <li  v-for="i in cabintes" :key="i">
            {{ i.name }}
            {{ i.image }}
        <img :src="i.image" alt="картинка">
        </li>
            
        </ul>

    </nav>
</template>

<script>
export default{
    data(){
        return{
            cabintes: []
        }
    },
    methods:{
        // getCab(){
        //     fetch('http://127.0.0.1:8000/api/cabinets/',{
        //         method: "GET",
        //         headers: {"Content-Type": "application/json"},

        //     })
        //     .then(response => response.json())
        //     .then(data =>{
        //         console.log(data)
        //         this.cabintes = data
        //     })
        // }
    }
}
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
    color: black
}
.head{
    display: flex;
    justify-content: space-around;
    padding-bottom: 4rem;
}
    ul{
        width: 100%;
        display: flex;
        list-style-type: none;
        justify-content: space-between;
    }
    nav{
     
        width: 100%;
        padding: 20px 5rem;
    }
</style>