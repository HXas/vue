<template>
    <div>
        <h1>page</h1>
        <button @click="goback">返回上一页</button>
    </div>
</template>
<script>
export default {
    created(){
        // console.log(this.$router.redirect)
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
button{
    width: 80%;
    height: 100px;
    background-color: red;
    margin: 40px auto;
}
</style>