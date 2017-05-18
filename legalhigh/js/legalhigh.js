(function($){
    $(document).ready( function(){
        var x=10;
        var y=20;
        $("a.bigger").hover(function(e){
                this.myTitle=this.title;
                this.title="";
                var imgtitle=this.myTitle?"<br/>"+this.myTitle:"";
                var tooltip="<div id='tooltip'><img src='"+this.href+"' alt='预览图'/>"+imgtitle+"</div>";
                $("body").append(tooltip);
                $("#tooltip").css({
                    "top":(e.pageY+y)+"px",
                    "left":(e.pageX+x)+"px"
                }).show("fast");
            },function(){
                this.title=this.myTitle;
                $("#tooltip").remove();
            });

        $(".sheet tr:not(.topsheet):odd").css("background","lightgray");//表单每隔一行变为灰色
        $('[name="demo-checkbox1"]').click(function(){//对复选计数，不能同时选择三个
            var length=$('[type="checkbox"]:checked').length;
            if(length>2){
                alert("不能同时选择三个!");
                return false;
            }
        });
        var mail_default_value=$("#mail").val();
        $('textarea,[name="mail"]').each(function(){
            var default_value=$(this).val();
            $('textarea,[name="mail"]').focus(function(){//提示输入框
            var $email=$(this).val();
            if($email==default_value) {
                $(this).val("");
            }
        });});
        $('[name="mail"]').blur(function(){//检查邮箱格式是否正确
            $(this).parent().parent().parent().find(".mailmsg").remove();
            var $mail=$(this).val();
            if($mail=="" || ( $mail!="" && !/.+@.+\.[a-zA-z]{2,4}$/.test(this.value) )){
                $(this).parent().parent().after('<td class="mailmsg"></td><td class="mailmsg formtips onerror"><span>请输入正确的邮箱！</span></td>>');
            }
            else {
                $(this).parent().append('<span class="mailmsg formtips correct">●</span>');
            }
        });
        $('[name="pass"]').blur(function(){//检查密码是否超过6位
            $(this).parent().parent().parent().find(".passmsg").remove();
            var $password=$(this).val();
            if($password.length>=6){
                $(this).parent().append('<span class="passmsg formtips correct">●</span>')
            }
            else{
                $(this).parent().parent().after('<td class="passmsg"></td><td class="passmsg formtips onerror"><span>密码长度需大于6位！</span></td>>');
            }
        });
        $('#pass').blur(function(){//检查两次输入是否一致
            $(this).parent().parent().parent().find(".checkmsg").remove();
            var $checkout=$(this).val();
            var $password=$('[name="pass"]').val();
            if(($checkout=="" || $password=="" ) || $checkout!=$password){
                $(this).parent().parent().after('<td class="checkmsg"></td><td class="checkmsg formtips onerror"><span>两次密码请输入一致！</span></td>>');
            }
            else {
                $(this).parent().append('<span class="checkmsg formtips correct">●</span>');
            }
        });

        var $readbox=$("#readcheck");//检查有没有勾选已阅读
        $readbox.click(function(){
            if($readbox.attr("checked")==null){
                var $submit = $('input[type="button"]');
                $submit.css("background", "#2f2f2f");
                $submit.removeAttr("disabled");
                $readbox.attr("checked","checked");
            }
            else {
                var $submit=$('input[type="button"]');
                $submit.css("background","gray");
                $submit.attr("disabled","disabled");
                $readbox.removeAttr("checked");
            }
        });
        $("#submit").click(function(event){//提交检查
            $("tbody").find(".mailmsg").remove();//邮箱检查
            var mail=$("#mail").val();
            if(mail=="" || mail==mail_default_value || ( mail!="" && !/.+@.+\.[a-zA-z]{2,4}$/.test(mail) )){
                $("#mail").parent().parent().after('<td class="mailmsg"></td><td class="mailmsg formtips onerror"><span>请输入正确的邮箱！</span></td>>');
                event.preventDefault();
                return;
                }
            else {
                $("#mail").parent().append('<span class="mailmsg formtips correct">●</span>');
            }
            $("tbody").find(".passmsg").remove();//密码检查
            var $password=$('[name="pass"]').val();
            if($password.length>=6){
                $('[name="pass"]').parent().append('<span class="passmsg formtips correct">●</span>')
            }
            else{
                $('[name="pass"]').parent().parent().after('<td class="passmsg"></td><td class="passmsg formtips onerror"><span>密码长度需大于6位！</span></td>>');
                event.preventDefault();
                return;
            }
            $("tbody").find(".checkmsg").remove();//检查密码是否输入一致
            var $checkout= $('#pass').val();
            var $password=$('[name="pass"]').val();
            if(($checkout=="" || $password=="" ) || $checkout!=$password){
                $('#pass').parent().parent().after('<td class="checkmsg"></td><td class="checkmsg formtips onerror"><span>两次密码请输入一致！</span></td>>');
                event.preventDefault();
                return;
            }
            else {
                $('#pass').parent().append('<span class="checkmsg formtips correct">●</span>');
            }
            alert("提交成功！");
        });
        $(".aside_btn").hover(function(){$(this).css("background-color","#2f2f2f");},function(){  $(this).css("background-color","gray");});//悬停变黑
        $(".aside").hide();var signin=false;//点击出现表单
        $(".aside_btn").click(function(){
            if(signin==false) {
                $(".aside").slideDown();
                signin = true;
                $(this).css("background-color","#2f2f2f");
            }
            else {
                $(".aside").slideUp();
                signin = false;
                 $(this).css("background-color","gray");
            }
        });
        $(window).scroll(function(){ //向下滚过后悬停
           var h_val= $(window).scrollTop();
            if(h_val>135){
                $(".aside_btn").addClass("fixer");
                $(".aside").addClass("fixer");
            }
            else{
                $(".aside_btn").removeClass("fixer");
                $(".aside").removeClass("fixer");
            }
        });
        $(":input").focus(function() {//点选框效果
            $(this).addClass("focus");
        }).blur(function(){
           $(this).removeClass("focus");
        });
        var $discribe=$("textarea");//文本域滚动条效果
        $(".up").click(function(){
           if(!$discribe.is(":animated")){
               $discribe.animated({scrollTop:"-=50"},400);
           }
        });
        $(".down").click(function(){
            if(!$discribe.is(":animated")){
                $discribe.animated({scrollTop:"+=50"},400);
            }
        });
    });
})(jQuery);
