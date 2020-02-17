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
                   item = "<li><img src=\"images/square/"+path+"\" alt=\""+title+"\" ipath=\""+path+"\" icity=\""+city+"\" idate=\""+date+"\" ititle=\""+title+"\"></li>"
                   $(".gallery").append(item);
                   });
            },
            error: function() { alert("error loading file");  
       }

       
    });
      
    $(document).on("mouseenter","img",function(){
        //alert("ok");
        $(this).addClass("gray");
        var title = $(this).attr("ititle")
       var city =  $(this).attr("icity");
       var date = $(this).attr("idate");
       var path = $(this).attr("ipath");
        var ditem = "<div id=\"preview\" title=\""+title+"\"><img src=\"images/medium/"+path+"\" alt=\""+title+"\"><p>"+title+","+city+","+date+"</p></div>"
        $(".container").append(ditem);  
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

    

    
});