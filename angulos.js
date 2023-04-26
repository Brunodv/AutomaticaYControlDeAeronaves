
      $(document).ready(function () {
     
       var slider1 = document.getElementById("myRange1");
       var output1 = document.getElementById("value1");
       var A22=document.getElementById("a22");
       var A23=document.getElementById("a23");
       var A32=document.getElementById("a32");
       var A33=document.getElementById("a33");
       var slider2 = document.getElementById("myRange2");
       var output2 = document.getElementById("value2");
       var B11=document.getElementById("b11");
       var B13=document.getElementById("b13");
       var B31=document.getElementById("b31");
       var B33=document.getElementById("b33");
       var slider3 = document.getElementById("myRange3");
       var output3 = document.getElementById("value3");
       var C11=document.getElementById("c11");
       var C12=document.getElementById("c12");
       var C21=document.getElementById("c21");
       var C22=document.getElementById("c22");
        


        var r11=document.getElementById("d11");
        var r12=document.getElementById("d12");
        var r13=document.getElementById("d13");
        var r21=document.getElementById("d21");
        var r22=document.getElementById("d22");
        var r23=document.getElementById("d23");
        var r31=document.getElementById("d31");
        var r32=document.getElementById("d32");
        var r33=document.getElementById("d33");


       var avion=document.getElementById("avion");
       gsap.to(avion,{
        rotationX:-45,  
        rotationY:25,
        rotationZ:-45,
        
    });

       a11.innerHTML=1;  a12.innerHTML=0; a13.innerHTML=0; 
       a21.innerHTML=0; 
       a31.innerHTML=0;
       b12.innerHTML=0;
       b21.innerHTML=0;  b22.innerHTML=1; b23.innerHTML=0;
       b32.innerHTML=0;
       c13.innerHTML=0;
       c23.innerHTML=0;
       c31.innerHTML=0; c32.innerHTML=0; c33.innerHTML=1;
      
       
       
    
       slider1.oninput=function() {
            var fi= output1.innerHTML=(slider1.value) ;
            A22.innerHTML=Math.cos(fi*3.1416/180).toFixed(2);
            A23.innerHTML=Math.sin(fi*3.1416/180).toFixed(2);
            A32.innerHTML=Math.sin(-fi*3.1416/180).toFixed(2);
            A33.innerHTML=Math.cos(fi*3.1416/180).toFixed(2);
            console.log(A22);
       gsap.to(avion,{
        rotationX:fi, 
        
    });

    
       }
               
       slider2.oninput=function () {
           var theta=output2.innerHTML=this.value;
            B11.innerHTML=Math.cos(theta*3.1416/180).toFixed(2);
            B13.innerHTML=Math.sin(-theta*3.1416/180).toFixed(2);
            B31.innerHTML=Math.sin(theta*3.1416/180).toFixed(2);
            B33.innerHTML=Math.cos(theta*3.1416/180).toFixed(2);
          gsap.to(avion,{
              rotationZ:theta,
            
          });
       }
   
       slider3.oninput=function () {

            var psi=output3.innerHTML=slider3.value;
            C11.innerHTML=Math.cos(psi*3.1416/180).toFixed(2);
            C12.innerHTML=Math.sin(psi*3.1416/180).toFixed(2);
            C21.innerHTML=Math.sin(-psi*3.1416/180).toFixed(2);
            C22.innerHTML=Math.cos(psi*3.1416/180).toFixed(2);
          gsap.to(avion,{
              rotationY:psi,
              
          });
       }

   /*     avion.style.webkitTransform='rotateX('+fi+'deg)';*/
       $('#calcular').click(function () {
        var fi2=($('#fii').val())*3.1416/180;
        var theta2=($('#thetaa').val())*3.1416/180;
        var psi2=($('#psii').val())*3.1416/180;
        
        var d11 = Math.cos(theta2).toFixed(2);var d12=0;var d13= Math.sin(-theta2).toFixed(2);
        
        
        var d21=(Math.sin(fi2).toFixed(2))*(Math.sin(theta2).toFixed(2));var d22=(Math.cos(theta2).toFixed(2));var d23=(Math.sin(fi2).toFixed(2))*(Math.cos(theta2).toFixed(2));
        
        
        var d31=(Math.cos(fi2).toFixed(2))*(Math.sin(theta2).toFixed(2));var d32= Math.sin(-fi2).toFixed(2);var d33=(Math.cos(fi2).toFixed(2))*(Math.cos(theta2).toFixed(2));
        
        

        var f11=d11*Math.cos(psi2).toFixed(2); var f12=d11*Math.sin(psi2).toFixed(2); var f13=d13*1;
        var f21=d21*Math.cos(psi2).toFixed(2)+d22*Math.sin(-psi2).toFixed(2);var f22=d21*Math.sin(psi2).toFixed(2)+d22*Math.cos(psi2).toFixed(2); var f23=d23*1;
        var f31=d31*Math.cos(psi2).toFixed(2)+d32*Math.sin(-psi2).toFixed(2); var f32=d31*Math.sin(psi2).toFixed(2)+d32*Math.cos(psi2).toFixed(2); var f33=d33*1;
        
        var F11=f11.toFixed(2); var F12=f12.toFixed(2); var F13=f13.toFixed(2);
        var F21=f21.toFixed(2); var F22=f22.toFixed(2); var F23=f23.toFixed(2);
        var F31=f31.toFixed(2); var F32=f32.toFixed(2); var F33=f33.toFixed(2);

        console.log([F11,F12,F13],[F21,F22,F23],[F31,F32,F33])
        r11.innerHTML=F11;r12.innerHTML=F12;r13.innerHTML=F13;
        r21.innerHTML=F21;r22.innerHTML=F22;r23.innerHTML=F23;
        r31.innerHTML=F31;r32.innerHTML=F32;r33.innerHTML=F33;

       });
 
   
       var cambiarAvion=$('#cambioAvion');
       var a = $('#A1');
       var b=$('#A2');
       var c=$('#A3');
       a.click(function () {
         cambiarAvion.attr("href","css/avion1.css");
       });
       
       b.click(function () {
         cambiarAvion.attr("href","css/avion4.css");
   
       });
       c.click(function () {
        cambiarAvion.attr("href","css/avion5.css");
      }); 
       
  
  
  });