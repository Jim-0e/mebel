<template>
    <div>
        <h1 class="title">{{title}}</h1>
    </div>
</template>

<script>
    export default{
        props: ['title']
    }
</script>
<style  scoped>
.title{
    color: rgb(0, 0, 0);
    text-align: center;
    text-transform: uppercase;
    /* background-color: rgb(11, 11, 11); */
}
</style>
