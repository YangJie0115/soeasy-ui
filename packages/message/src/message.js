import Vue from 'vue';
import main from './message.vue';

let Constructor=Vue.extend(main);
let newMessage;

const Message=function(val){
    let obj={show:false};
    // 给新建组件传data  
    if(typeof val === 'string'){
         obj.message=val;  
         obj.duration=3000; 
    }else{
        obj=Object.assign(obj,val);
        if(!obj.duration){
            obj.duration=3000;
        }
    }
    newMessage = new Constructor({
        data:obj
    });
    // 挂载
    let vm = newMessage.$mount()
    let el = vm.$el
    document.body.appendChild(el) // 把生成的提示的dom插入body中
    vm.show = true
    // 定时关闭
    setTimeout(()=>{
        vm.show=false;
        document.body.removeChild(el) //从body中移除dom
        newMessage.$destroy()
        vm = null // 设置为null，好让js垃圾回收算法回收，释放内存
    },obj.duration)
}

export default Message