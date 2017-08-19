/**
 * Created by Administrator on 2017/5/7 0007.
 */
$(function(){
    $(".span1a").click(function(){
        $(".nian").show()
    })
    $(".span1a").blur(function(){
        $(".nian").hide()
    })


    var index1=$(".nian ul li a").val(this)
    console.log(index1)
    $(".nian ul li a").click(function(){



    })










    $(".span1b").click(function(){
        $(".yue").show()
    })
    $(".span1b").blur(function(){
        $(".yue").hide()
    })

    $(".span1c").click(function(){
        $(".ri").show()
    })
    $(".span1c").blur(function(){
        $(".ri").hide()
    })

    $("#bei").click(function(){
        $(".bgu1a").show()
    })
    $("#bei").blur(function(){
        $(".bgu1a").hide()
    })

    $("#gao").click(function(){
        $(".bgu2a").show()
    })
    $("#gao").blur(function(){
        $(".bgu2a").hide()
    })

    $("#ben").click(function(){
        $(".bgu3a").show()
    })
    $("#ben").blur(function(){
        $(".bgu3a").hide()
    })

    $("#yuan").click(function(){
        $(".bgu4a").show()
    })
    $("#yuan").blur(function(){
        $(".bgu4a").hide()
    })




    $(".inp2a").blur(function(){
        var inp2aval=$(".inp2a").val()
        var reg=/^\d{11}$/;
        var in1=reg.test(inp2aval)
       if(in1==true){
           $(".btn1").show()
           $(".imga1").show()
       }else if(inp2aval==""){
           $(".imgb2").show()
           $(this).css("border-color","red")
           $(".pa").show()
           $(".tian").hide()
       }
    })
    $(".inp2a").click(function(){
        $(".imgb2").hide()
        $(this).css("border-color","#7b7b7b")
        $(".pa").hide()
        $(".tian").show()
    })


    $(".inp2b").blur(function(){
        var inp2ava2=$(".inp2b").val()
        var reg=/^\d{6}$/;
        var in2=reg.test(inp2ava2)
        if(in2==true){
            $(".imga3").show()
        }else if(inp2ava2==""){
            $(".imgb4").show()
            $(this).css("border-color","red")
            $(".pb").show()
            $(".tian1").hide()
        }
    })
    $(".inp2b").click(function(){
        $(".imgb4").hide()
        $(this).css("border-color","#7b7b7b")
        $(".pb").hide()
        $(".tian1").show()
    })



    $(".inp2c").blur(function(){
        var inp2ava3=$(".inp2c").val()
        var reg=/^\w{6,11}$/;
        var in3=reg.test(inp2ava3)
        if(in3==true){
            $(".imga5").show()
        }else if(inp2ava3==""){
            $(".imgb6").show()
            $(this).css("border-color","red")
            $(".pc").show()
        }
    })
    $(".inp2c").click(function(){
        $(".imgb6").hide()
        $(this).css("border-color","#7b7b7b")
        $(".pc").hide()
    })


    $(".inp2d").blur(function(){
        var inp2ava4=$(".inp2d").val()
        var reg=/^\w{6,12}$/;
        var in4=reg.test(inp2ava4)
        if(in4==true){
            $(".imga7").show()
        }else if(inp2ava4==""){
            $(".imgb8").show()
            $(this).css("border-color","red")
            $(".pd").show()
        }
    })
    $(".inp2d").click(function(){
        $(".imgb8").hide()
        $(this).css("border-color","#7b7b7b")
        $(".pd").hide()
    })






    $(".b1a").click(function(){
        $(".jie1").show().siblings().hide()
    })
    $(".b2a").click(function(){
        $(".jie2").show().siblings().hide()
        $(".jie2a").show().siblings().hide()
    })
    $(".jie2a").click(function(){
       $(this).hide()
        $(".jie2b").show()
    })
    $(".b3a").click(function(){
        $(".jie3").show().siblings().hide()
    })
    $(".b4a").click(function(){
        $(".jie4").show().siblings().hide()
    })




    $(".shang").click(function(){
        $(".right3").css("height","78px")
    })
    $(".shang").mousedown(function(){
        $(".right3").css("height","30px")
    })


    $("#jian").click(function(){
        $("body").css("font-family","PMingLiU")
})
















})