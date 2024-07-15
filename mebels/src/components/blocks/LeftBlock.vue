<template>
    <div class="menu">
        <h2 class="catalog_title">Каталог</h2>
        <ul>
            <router-link to="/cabinets"  active-class="active"><li>Шкафы</li></router-link>
            <a href="#"><li>Кухни </li></a>
            <router-link to="/stelashe" active-class="active"><li>Стелажи</li></router-link>
            <a href="#"><li>Столы</li></a>
            <a href="#"><li>Комоды</li></a>
            <a href="#"><li>Шкафы-купе</li></a>
            <a href="#"><li>Тумбы</li></a>
            
        </ul>
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
    border: 1px solid rgb(0, 0, 0);
}
.active{
  color: red;
}

 div{
    width: 100%;
 }
 ul{
    list-style-type: none;
    li{
        padding: 1rem;
        color: rgb(57, 57, 57);
        // border-bottom: 1px solid rgb(224, 224, 224);
        background-color: rgb(255, 255, 255);
    }
    li:hover{
        background-color: rgb(255, 255, 255);
    }
 }
</style>