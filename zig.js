AFRAME.registerComponent('rotation-box', {
    schema:{
       moveX:{type:"number",default:1},
       moveY:{type:"number",default:1},
       moveZ:{type:"number",default:1}
    },
    init:function(){
        console.log(this.data.message);
    },
    update:function(){

    },
    remove:function(){

    },
    tick:function(){
        // this.data.moveX=this.data.moveX-5
        // this.data.moveY=this.data.moveY+5
        this.data.moveZ=this.data.moveZ+0.5
        
        var rotate=this.el.getAttribute("rotation")
        console.log("what is rotate: ", rotate)
        // rotate.x=this.data.moveX
        // rotate.y=this.data.moveY
        rotate.z=this.data.moveZ
        this.el.setAttribute("rotation",{x:rotate.x,y:rotate.y,z:rotate.z})}
})