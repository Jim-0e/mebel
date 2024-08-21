<template>
    <div class="wrapper">


        <div class="product-card">
            <div class="product-image" >
              <router-link :to="{name: 'detail',
                  params: {pk: id}
               }">
                    <img  :src="image_url" alt="Product Image">
              </router-link>
            </div>
            <div class="product-info">
                <p class="product-name">{{ name }}</p>
                <!-- <div class="product-description">{{ description.slice(0,40) }}...</div> -->
                <p>{{ description.slice(0, 20) }}...</p>
                <div class="product-bui">
                  <div class="product-price">{{ price }} Руб.</div>
                  <button class="product-add-to-cart">
                    <img width="50" src="/icons/korzina.png" alt="">
                  </button>            
                </div>
                
            </div>
            </div>
     
    </div>
</template>

<script>
export default{
    props: ['name', 'price', 'image_url','description', 'images', 'id']
}
</script>

<style scoped>

.product-card {
  width: 300px;
  height: 400px;
  padding: 20px;
  background-color: #332941;
  color: white;
  border-radius: 1px;
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.product-bui{
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-info {
  padding-top: 10px;
  text-align: left;
}

.product-name {
  font-size: 17px;
  font-weight: none !important;
  color:rgb(255, 255, 255);
}

.product-description {
  font-size: 14px;
  color: #666;
}

.product-price {
  color: white
}

.product-add-to-cart {
  width: max-content;
}

.product-add-to-cart:hover {
  background-color: #a7a7a7;
}
</style>