AFRAME.registerComponent('student', {
    schema:{
        message:{type:"string",default:"hello student"}
    },
    init:function(){
        console.log(this.data.message);
    },
    update:function(){

    },
    remove:function(){

    },
    tick:function(){

    },
})