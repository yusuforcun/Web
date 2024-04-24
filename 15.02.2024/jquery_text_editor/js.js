$('button').click(function(){
    /*Buton Class değerinin ilk iki karakterini çıkartalım */
    var secim=this.className.substr(2)
    /*secim değerini - işaretine göre bölelim.*/
    var secim=secim.split("-")
    if(secim[0]=="Msj"){Msj(secim[1]);return false;}
    /*Tüm işi yapan execCommanda tanımı yazalım.*/
    document.execCommand(secim[0],false,secim[1]); 
    $('.Editor').focus();
    });
    
    //Mesaj Kutusu Js
    function Msj(sec){
    if(sec=="foreColor"){B="Yazı Rengi";D="Blue"}
    if(sec=="createLink"){B="Link Elke";D="https://google.com"}
    if(sec=="fontName"){B="Yazı Tipi";D="arial"}
    $('.Msj h').text(B)
    $('.Msj input').val(D)
    $('.Msj input').attr('class',sec)
    $('.Msj').fadeIn('Slow')    
    }
    
    $('.Msj button').click(function(){
      document.execCommand($('.Msj input').attr('class'),false,$('.Msj input').val());   
    $('.Msj').fadeOut('Slow') 
    })
    //HTML Kodu Göster
    $('.html').click(function(){
    $("textarea").val($('.Editor').html())
    $("textarea").css("display","inline");
    })