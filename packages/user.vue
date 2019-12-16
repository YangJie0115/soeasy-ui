<template>
    <div>
        <div  class="markdown-body">
            <doc></doc>
        </div>

    </div>
</template>

<script >
import doc from '../docs/user.md'
export default {
    components:{
        doc
    },
    data(){
        return {
            num:""
        }
    },
    methods:{
    }
}
</script>
<style scoped>

</style>