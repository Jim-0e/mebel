<template>
    <div class="wrapper">
    <nav>
        <div class="head">
           
           <router-link :to="'/'" class="logo">
            <img width="100" src="/logo.png" alt="">
           </router-link>
            <router-link :to="'/'"><h1>Mebel-Rich</h1></router-link> 
            
            <div>
              <h2>Услуги</h2>
              <h2>Готовые решения</h2>
            </div>
           
            
            <!-- иконки -->
        <div class="icons_div">    
          <div>
              <img width="35" height="40" src="/icons/izb.png" alt="">
              <p>Избранное</p>
          </div>
          <div>
              <img width="40"  src="/icons/kor-nav.png" alt="">
            <p>Корзина</p>
            </div>
          </div>
        </div>

        
         

    </nav>

    <form action="">
              <input type="text" placeholder="поиск">
              <button>поиск</button>
    </form>
   

    <ul>
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


        </ul>
        
    <!--  -->
       
        <div class="slider">
    <div class="slider-container" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="slider-item" v-for="(slide, index) in 5" :key="index">
        <img src="/imgs/main-fone.jpg" :alt="slide.title" />
        <h2>Стильный дизайн</h2>
      </div>
    </div>

    <button class="prev" @click="prevSlide">‹</button>
    <button class="next" @click="nextSlide">›</button>

    <div class="indicators">
      <span v-for="(slide, index) in 5" :key="index" :class="{ active: index === currentSlide }" @click="goToSlide(index)"></span>
    </div>
  </div>


    </div>
</template>

<script>
export default{
    props: {
    slides: [{image: '/imgs/main-fone.jpg',title: 'Ghbdtn' }],
    interval: {
      type: Number,
      default: 5000, // Интервал автоматической прокрутки (5 секунд)
    },
  },
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    startAutoSlide() {
      this.slideInterval = setInterval(this.nextSlide, this.interval);
    },
    stopAutoSlide() {
      clearInterval(this.slideInterval);
    },
  },
}
</script>
<style lang="scss" scoped>
.icons_div{
  width: 180px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
}
.icons_div img{
  // width: 50px;
  // height: 40px;
}
form {
  width: 400px;
  width: max-content;
  margin: 0 auto;
  // display: flex;
  // justify-content: space-between;
}
form input {
  width: 400px;
  border: 1px solid black;
  padding:  10px;
  border-radius: 80px;
  margin-right: 1rem;
}
form button{
  color: white;
  padding: 5px  10px;
  border-radius: 20px;
  background-color: rgb(169, 85, 2);
}
.wrapper{
  max-width: 1500px;
  padding: 0 2rem;
  margin: 0 auto;
  position: relative;
}

  

ul li img{
  display: block;
}
li.active {
        background-color: rgb(130, 141, 159); /* Цвет фона для активного элемента */
        color: #000 !important; /* Цвет текста для активного элемента */
    }

ul li{
  background-color: rgb(0, 0, 0);padding: 10px 20px;
  border-radius: 30px;
    display: flex;
    color: white;
    gap: 5px;
    justify-content: space-between;
}
.main-fon{
  width: 100%;
  height: 50rem;
  background: url('/imgs/main-fone.jpg');
  background-size: cover;
}
h1{
    font-size: 3rem;
}
.logo img{
    border-radius: 50%;
}
a{
    text-decoration: none;
    color: black
}
.head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 4rem;
}
    ul{
        width: 100%;
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        padding: 0 4rem;
        // position: sticky;
        margin-bottom: 1rem;
    }
    nav{
      position: relative;
        width: 100%;
        // padding: 20px 5rem;
    }
    .slider {
  position: relative;
  overflow: hidden;
  width: 90%;
    height: 35rem; 
    margin: 0 auto;
}
@media (max-width: 1200px) {
      ul{
        // position: relative;
        display: none;
      }
  }
.slider-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-item {
  min-width: 100%;
  box-sizing: border-box;
  position: relative;
  text-align: center;
}

.slider-item img {
  width: 100%;
  height: auto;
}

.slider-item h2 {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 5px;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.indicators span {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.indicators span.active {
  background-color: white;
}
</style>