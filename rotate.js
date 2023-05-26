AFRAME.registerComponent('move-box', {
    schema:{
       moveX:{type:"number",default:1},
       moveY:{type:"number",default:1}
    },
    init:function(){
        console.log(this.data.message);
    },
    update:function(){

    },
    remove:function(){

    },
    tick:function(){
        this.data.moveX=this.data.moveX-0.02
        this.data.moveY=this.data.moveY+0.02
        var pos=this.el.getAttribute("position")
        console.log("what is pos: ", pos)
        pos.x=this.data.moveX
        pos.y=this.data.moveY
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})}
})