$(document).ready(function(){

    $.ajax({

        url: "js/data.json",
        dataType: "json",
        success: function(data) {
               $(data).each(function(index,d){
                   var path = d.path;
                   var title= d.title;
                   var city = d.city;
                   var date =  d.taken;
                   var country = d.country;           //Adding p tag element to store other attributes which we require later            
                   item = "<li><img alt=\""+title+"\" src=\"images/square/"+path+"\"><p class=\"pimg\" ipath=\""+path+"\" icity=\""+city+"\" icountry=\""+country+"\" idate=\""+date+"\" ititle=\""+title+"\"></p></li>"
                   $(".gallery").append(item);
                   $(".pimg").hide();  
                   });
            },
            error: function() { alert("error loading file");  
       }
    });
      
    $(document).on("mouseenter","img",function(){
        //alert("ok");
        $(this).addClass("gray");
        var title = $(this).attr("alt")
       var city =  $(this).next().attr("icity");
       var date = $(this).next().attr("idate");
       var path = $(this).next().attr("ipath");
       var country = $(this).next().attr("icountry");
      var ditem = "<div class=\"mdimage\" id=\"preview\" title=\""+title+"\"><img src=\"images/medium/"+path+"\" alt=\""+title+"\"><p>"+title+"<br><i>"+city+", "+country+"</i> ["+date+"]</p></div>"
        $("body").append(ditem);  
      });

      $(document).on("mouseleave","img",function(){
        //alert("ok");
        $(this).removeClass("gray");
        var title = $(this).attr("alt");
        $("div").each(function(){
             var rm = $(this).attr("title");
             if(rm==title)
             {
                 $(this).remove();
             }
        })
      });

      $(document).on("mousemove",function(event)
      { 
        var x = 4 + event.pageX;
        var y = 4 + event.pageY;
        // $("#preview").css("left",x);
        // $("#preview").css("top",y);
        $("#preview").offset({top:y,left:x});
      });
    
});