<template>
    <button style="background:red">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name:"sButton",
    create(){
        console.log("123123")
    }
}
</script>

<style>
    
</style>