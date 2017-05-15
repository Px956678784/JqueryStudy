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
        $('textarea,[name="mail"]').focus(function(){//提示输入框
            $(this).val("");
        });
        $('textarea,[name="mail"]').blur(function(){
            var $content=$(this).val();
            if($content==""){
                $(this).val(this.defaultValue);
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
        $("#submit").click(function(event){
           var mail=$("#mail");
            if(mail.val()=="" || mail.val()=="格式:WeiXin@qq.com"){
                mail.val("邮箱不能为空!");
                event.preventDefault();
            }
        });
    });
})(jQuery);
