//Snana mods on template via js/jq

var mom = "https://gomensnana.github.io/MothersDay/";
var hots2 = "https://hots2.herokuapp.com";
var ttproj = "https://ttproj.herokuapp.com";




$("img").click(function(){
    var $this = $(this);


    if($this.hasClass("larger")){
        if($this.attr("id") === "mom"){
            window.open(mom);
        } else if($this.attr("id") === "hots2"){
            window.open(hots2);
        } else if($this.attr("id") === "ttproj"){
            window.open(ttproj);
        }
    }
// This changes which image is the focal (larger) image on the page based on what is clicked
    if($this.hasClass("smaller")){
        var larger = $("div.col-md-8 img.larger");
        larger.css("display","none"); //allows for a fadeIn affect
        $this.css("display","none");
        
        larger.appendTo($this.parent());
        larger.removeClass("larger").addClass("smaller");

        // This checks which picture is becoming the focus (large) and then displaying the appropriate description.
        if($this.attr("id") === "mom"){
            $("div.col-md-4").css("display","none");
            $("div.col-md-4#mom").fadeIn(1000);
        } else if($this.attr("id") === "hots2"){
            $("div.col-md-4").css("display","none");
            $("div.col-md-4#hots2").fadeIn(1000);
        } else if($this.attr("id") === "resume"){
            $("div.col-md-4").css("display","none");
            $("div.col-md-4#resume").fadeIn(1000);
        } else if($this.attr("id") === "ttproj"){
            $("div.col-md-4").css("display","none");
            $("div.col-md-4#ttproj").fadeIn(1000);
        } 

        larger.fadeIn(1000);

        $this.prependTo("div.col-md-8");
        $this.removeClass("smaller").addClass("larger");

        $this.fadeIn(1000);
        // attempted to change ratios to proportionally shrink images as needed, but the template causes some resistance that
        // seems not worth messing around with since it does automatically change scaling at the least. 
    }
    
});