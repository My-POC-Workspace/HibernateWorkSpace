// let div1 = document.getElementsByClassName('div1');
// let btn1 = document.getElementById('brn-1');
// function rotate(){
//     div1.classList.toggle('div2');
// }

var img1 = document.getElementById('gwagon');
    var imgarr1 = ['../Media/gwagon2.jpg','../Media/gwagon3.jpg','../Media/gwagon4.jpg','../Media/gwagon5.jpg'];
    var i = 0;
    function slide(){
        img1.setAttribute('src',imgarr1[i]);
        i++;
        if(i >= imgarr1.length){
            i = 0;
            }
        }
setInterval('slide()',2500);   

var img2 = document.getElementById('porshe');
    var imgarr2 = ['../Media/Porshe2.jpeg','../Media/Porshe3.jpeg','../Media/Porshe4.jpeg'];
    var j = 0;
    function slide1(){
        img2.setAttribute('src',imgarr2[j]);
        j++;
        if(j >= imgarr2.length){
            j = 0;
            }
        }
setInterval('slide1()',2500);   

var img3 = document.getElementById('mercedes');
    var imgarr3 = ['../Media/maybach2.jpg','../Media/maybach3.jpg','../Media/maybach4.jpg','../Media/maybach5.jpg'];
    var k = 0;
    function slide2(){
        img3.setAttribute('src',imgarr3[k]);
        k++;
        if(k >= imgarr3.length){
            k = 0;
            }
        }
setInterval('slide2()',2500);   

var img4 = document.getElementById('mclaren');
    var imgarr4 = ['../Media/mclaren1.jpg','../Media/mclaren3.jpg','../Media/mclaren4.jpg','../Media/mclaren5.jpg'];
    var l = 0;
    function slide3(){
        img4.setAttribute('src',imgarr4[l]);
        l++;
        if(l >= imgarr4.length){
            l = 0;
            }
        }
setInterval('slide3()',2500);   

var img5 = document.getElementById('RR');
    var imgarr5 = ['../Media/RR2.jpg','../Media/RR3.jpg','../Media/RR4.jpg','../Media/RR5.jpg'];
    var a = 0;
    function slide4(){
        img5.setAttribute('src',imgarr5[a]);
        a++;
        if(a >= imgarr5.length){
            a = 0;
            }
        }
setInterval('slide4()',2500);   

var img6 = document.getElementById('meserati');
    var imgarr6 = ['../Media/meserati2.jpg','../Media/mesarati3.jpg','../Media/mesarati4.jpg','../Media/mesarati5.jpg'];
    var b = 0;
    function slide5(){
        img6.setAttribute('src',imgarr6[b]);
        b++;
        if(b >= imgarr6.length){
            b = 0;
            }
        }
setInterval('slide5()',2500);   