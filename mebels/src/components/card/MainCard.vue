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
                <div class="product-price">{{ price }} Руб.</div>
                <button class="product-add-to-cart">В корзину</button>
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
  border: 1px solid rgb(234, 234, 234);

}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
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
  color:rgb(100, 100, 100);
}

.product-description {
  font-size: 14px;
  color: #666;
}

.product-price {
  font-size: 19px;
  color: #343434;
  font-weight: bolder;
  margin-top: 2rem;
  font-weight: 200;
  letter-spacing: 0px;
}

.product-add-to-cart {
  width: 130px;
  height: 40px;
  padding: 4px 7px;
  background-color: #e6e6e6;
  color: #000000;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.product-add-to-cart:hover {
  background-color: #a7a7a7;
}
</style>