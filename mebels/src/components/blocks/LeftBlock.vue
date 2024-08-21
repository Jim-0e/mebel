<template>
    <div class="menu">
        <!-- <h2 class="catalog_title">Каталог</h2> -->
      <!-- <ul>
            <router-link to="/cabinets" v-slot="{ isActive, isExactActive }">
                <li
                :class="[isActive && 'active',  isExactActive && 'exact-active']" 
                    >
                    <img width="20" src="/icons/menu/shaf.png" alt="">
                    <p>Шкафы</p>
                </li>
            </router-link>
            <router-link to="/" v-slot="{ isActive, isExactActive }">
                <li :class="[isActive && 'active',  isExactActive && 'exact-active']">
                    <img width="20" src="/icons/menu/kuxn.png" alt="">
                    <p>Кухни</p>
                 </li>
            </router-link>
            <router-link to="/stelashe">
                <li :class="[isActive && 'active',  isExactActive && 'exact-active']">
                    <img width="20" src="/icons/menu/stellage.png" alt="">
                   <p>Стелажи</p> 
                </li>
            </router-link>
            <router-link to="/" v-slot="{ isActive, isExactActive }">
                <li :class="[isActive && 'active',  isExactActive && 'exact-active']">
                    <img width="20" src="/icons/menu/table.png" alt="">
                    <p>Столы</p>
                </li>
            </router-link>
            <router-link router-link to="/" v-slot="{ isActive, isExactActive }">
                <li :class="[isActive && 'active',  isExactActive && 'exact-active']">
                    <img width="20" src="/icons/menu/comod.png" alt="">
                    <p>Комоды</p>
                </li>
            </router-link>
            <router-link router-link to="/" v-slot="{ isActive, isExactActive }">
                <li :class="[isActive && 'active',  isExactActive && 'exact-active']">
                    <img width="20" src="/icons/menu/kupe.png" alt="">
                    <p>Шкафы-купе</p>
                </li>
            </router-link>
            <router-link to="/" v-slot="{ isActive, isExactActive }">
                <li :class="[isActive && 'active',  isExactActive && 'exact-active']">
                    <img width="20" src="/icons/menu/tumba.png" alt="">
                    <p>Тумбы</p>
                </li>
            </router-link>


        </ul>  -->
    </div>
    
</template>

<script>

export default{

}
</script>

<style  lang="scss" scoped>

.catalog_title{
    background-color: rgb(0, 0, 0);
    color: white;
    padding-bottom: 11px;
    text-align: center;
}
.menu{
    min-width: 200px;
    // border: 1px solid rgb(0, 0, 0);
}


 div{
    width: 100%;
 }
 ul{
    width: 100%;
    list-style-type: none;
    // display: flex;
    li{
        display: flex;
        gap: 20px;
        padding: 10px;
        background-color: #0a0a0a;
        color: rgb(255, 255, 255);
        // border-bottom: 1px solid rgb(224, 224, 224);
        // background-color: rgb(255, 255, 255);
    }
    li.active {
        background-color: rgb(130, 141, 159); /* Цвет фона для активного элемента */
        color: #000 !important; /* Цвет текста для активного элемента */
    }
    li:hover{
        background-color: rgb(73, 80, 107);
    }
 }
</style>