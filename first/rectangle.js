$(
    function () {
        var $width=$("#width");
        var $height=$("#height");
        var $btnCal=$("#calculate");
        var $perimeter=$("#perimeter");
        var $area=$("#area");
        
        $btnCal.click(function () {
            var w=Number($width.val());
            var h=Number($height.val());
            console.log(w,h);
            if(w!=0 && h!=0){
            var p=2*(w+h);
            var a=w*h;
            }else{
                alert("输入长宽不能为空或0")
            }
            $perimeter.val(p);
            $area.val(a);
          });
      });