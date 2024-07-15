<template>
  <router-link :to="links[0]">
    <div>
        <div class="product-card">
            <div class="product-image">
                <img :src="image_url" alt="Product Image">
            </div>
            <div class="product-info">
                <div class="product-name">{{ name }}</div>
            </div>
            </div>
    </div>
    </router-link>
</template>

<script>

export default{
    props: ['name', 'image_url'],
    mounted(){
      this.linkTo(this.name)
    },
    data(){
      return{
        categories_names: [
          {name:'Шкафы', url:'/cabinets'},
          {name:'Тумбы', url:'/tumbs'},
          {name:'Стелажи', url:'/stellages'},
          {name:'Кухни', url:'/kitchens'},
          {name:'Комоды', url:'/dressers'},
          {name:'Столы', url:'/tables'},
          {name:'Шкафы-купе', url:'/wardrobes'},
        ],
        links: [],
      }
      
    },
    methods: {
        linkTo(name){
            return this.categories_names.forEach(item=>{
              if (item.name == name){
                this.links.push(item.url)
                return '/cabinets'
              }
            })
        }
    }
}
</script>

<style>
.product-card {
  width: 300px;
  height: 300px;
  text-align: center;
  /* border: 1px solid #000000; */
  box-shadow: 1px 2px 3px rgb(255, 255, 255);

}

.product-image {
  width: 100%;
 
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 250px;
  object-fit: contain;
}

.product-info {
  padding: 10px;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
}

.product-description {
  font-size: 14px;
  color: #666;
}

.product-price {
  font-size: 16px;
  color: #000;
}

.product-add-to-cart {
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.product-add-to-cart:hover {
  background-color: #333;
}
</style>