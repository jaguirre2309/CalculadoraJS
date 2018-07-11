cant = '0';
var1 = 1;
punto = 0;
num = 0;
signo = 0;

pantalla = document.getElementById('display');
uno = document.getElementById('1');
dos = document.getElementById('2');
tres = document.getElementById('3');
cuatro = document.getElementById('4');
cinco = document.getElementById('5');
seis = document.getElementById('6');
siete = document.getElementById('7');
ocho = document.getElementById('8');
nueve = document.getElementById('9');
cero = document.getElementById('0');
suma = document.getElementById('mas');
resta = document.getElementById('menos');
multiplicar = document.getElementById('por');
dividir = document.getElementById('dividido');
punto = document.getElementById('punto');
reset = document.getElementById('on');
signo = document.getElementById('sign');
igual = document.getElementById('igual');




    function press1(){
      if (pantalla.textContent == '0') {
        pantalla.textContent = '1';
      }else if(num <= 7){
        pantalla.textContent = pantalla.textContent + '1';
      }
        num++;
    }
    function press2(){
      if (pantalla.textContent == '0') {
        pantalla.textContent = '2' ;
      }else if(num <= 7){
        pantalla.textContent = pantalla.textContent + '2';
      }
        num++;
    }
    function press3(){
      if (pantalla.textContent == '0') {
        pantalla.textContent = '3' ;
      }else if(num <= 7){
        pantalla.textContent = pantalla.textContent + '3';
      }
        num++;
    }
    function press4(){
      if (pantalla.textContent == '0') {
        pantalla.textContent = '4' ;
      }else if(num <= 7){
        pantalla.textContent = pantalla.textContent + '4';
      }
        num++;
    }
    function press5(){
      if (pantalla.textContent == '0') {
        pantalla.textContent = '5' ;
      }else if(num <= 7){
        pantalla.textContent = pantalla.textContent + '5';
      }
        num++;
    }
    function press6(){
      if (pantalla.textContent == '0') {
        pantalla.textContent = '6' ;
      }else if(num <= 7){
        pantalla.textContent = pantalla.textContent + '6';
      }
        num++;
    }
    function press7(){
      if (pantalla.textContent == '0') {
        pantalla.textContent = '7' ;
      }else if(num <= 7){
        pantalla.textContent = pantalla.textContent + '7';
      }
        num++;
    }
    function press8(){
      if (pantalla.textContent == '0') {
        pantalla.textContent = '8' ;
      }else if(num <= 7){
        pantalla.textContent = pantalla.textContent + '8';
      }
        num++;
    }
    function press9(){
      if (pantalla.textContent == '0') {
        pantalla.textContent = '9' ;
      }else if(num <= 7){
        pantalla.textContent = pantalla.textContent + '9';

      }
      num++;
    }
    function press0(){
      if (pantalla.textContent == '0') {
        pantalla.textContent = '0' ;
      }else if(num <= 7){
        pantalla.textContent = pantalla.textContent + '0';
        num++;
      }
    }
    function pressS(){
      if (pantalla.textContent != '0') {
        contar = pantalla.textContent.length;
        if (contar > 8) {
          pantalla.textContent.slice(0,8);
        }
        op1 = parseFloat(pantalla.textContent);
        pantalla.textContent = '';
        operacion = 1;
        num = 0;
        punto = 0;
        igual = 0;
        /*pantalla.textContent = '';
        oper = '+';
        */
      }

    }


    function pressR(){
      if (pantalla.textContent != '0') {
        op1 = parseFloat(pantalla.textContent);
        pantalla.textContent = '';
        operacion = 2;
        num = 0;
        punto = 0;
        igual = 0;
      }
    }

    function pressM(){
      if (pantalla.textContent != '0') {
        op1 = parseFloat(pantalla.textContent);
        pantalla.textContent = '';
        operacion = 3;
        num = 0;
        punto = 0;
        igual = 0;
      }else{
        op1 = parseFloat(pantalla.textContent);
        pantalla.textContent = '';
      }
    }
    function pressD(){
      if (pantalla.textContent != '0') {
        op1 = parseFloat(pantalla.textContent);
        pantalla.textContent = '';
        operacion = 4;
        num = 0;
        punto = 0;
        igual = 0;
      }else pantalla.textContent = 'DIV BY 0';
    }

    function pressIgual(){
      if (operacion == 1){
        if (igual == 1) {
          res = op2 + parseFloat(pantalla.textContent);
          pantalla.textContent = res;

        }else{
          op2 = parseFloat(pantalla.textContent);
          res = op1 + op2;
          pantalla.textContent = res;
          igual = 1;

        }

      }else if (operacion == 2){
        if (igual == 1) {
          res = parseFloat(pantalla.textContent) - op2;
          pantalla.textContent = res;
          punto = 0;
        }else{
          op2 = parseFloat(pantalla.textContent);
          res = op1 - op2;
          pantalla.textContent = res;
          igual = 1;
        }
      }else if (operacion == 3){
        if (igual == 1) {
          res = op2 * parseFloat(pantalla.textContent);
          pantalla.textContent = res;
        }else{
          op2 = parseFloat(pantalla.textContent);
          res = op1 * op2;
          if (res.length >= 8) {
            pantalla.textContent = 'MAS DE 8';
          }
          pantalla.textContent = res;
          igual = 1;
        }
      }else if (operacion == 4){
        if (igual == 1) {
          res = op2 / parseFloat(pantalla.textContent);
          pantalla.textContent = res;
        }else{
          op2 = parseFloat(pantalla.textContent);
          res = op1 / op2;
          if (res.length >= 8) {
            pantalla.textContent = 'MAS DE 8';
          }
          pantalla.textContent = res;
          igual = 1;

        }
      }
      //Cuenta caracteres en pantalla
        contar = pantalla.textContent.length;
        if (contar >= 8) {
          if (pantalla.textContent.slice(8,9) == '.') {
            pantalla.textContent = pantalla.textContent.slice(0,8);
          }else
            pantalla.textContent = pantalla.textContent.slice(0,9);

        }else{
          pantalla.textContent = pantalla.textContent.slice(0,9);
        }
        punto = 0;
        num = 0;
    }

    function pressP(){
      if ((pantalla.textContent == '0' || pantalla.textContent == '') && punto != 1) {
        pantalla.textContent = '0.' ;
        punto = 1;
      }else if (punto != 1 && num <= 6) {
        pantalla.textContent = pantalla.textContent + '.';
        punto = 1;
      }
    }
    //AGREGA MAS DE UN SIGNO
    function pressSigno(){
      signo=0;
      if (pantalla.textContent == '0') {
        pantalla.textContent = '0';
      }else if (pantalla.textContent <  0) {
        pantalla.textContent = pantalla.textContent * -1;
        //signo = 0;
      }else if (signo == 0 && num <= 6) {
        pantalla.textContent = '-' + pantalla.textContent;
        signo = 1;
      }
      //signo++;
    }

    function pressC(){
      pantalla.textContent = '0';
      punto = 0;
      num = 0;
      signo = 0;
      operacion = 0;
      op1 = 0;
      op2 = 0;
      res = 0;
    }
var Eventos = {
	init: function(){
      uno.onclick = this.ePress1;
      dos.onclick = this.ePress2;
      tres.onclick = this.ePress3;
      cuatro.onclick = this.ePress4;
      cinco.onclick = this.ePress5;
      seis.onclick = this.ePress6;
      siete.onclick = this.ePress7;
      ocho.onclick = this.ePress8;
      nueve.onclick = this.ePress9;
      cero.onclick = this.ePress0;
      suma.onclick = this.ePressS;
      resta.onclick = this.ePressR;
      multiplicar.onclick = this.ePressM;
      dividir.onclick = this.ePressD;
      punto.onclick = this.ePressP;
      reset.onclick = this.ePressC;
      signo.onclick = this.ePressSigno;
      igual.onclick = this.ePressIgual;
  },
  ePress1: function(event){
  	press1(event.target);
  },
  ePress2: function(event){
    press2(event.target);
  },
  ePress3: function(event){
    press3(event.target);
  },
  ePress4: function(event){
    press4(event.target);
  },
  ePress5: function(event){
    press5(event.target);
  },
  ePress6: function(event){
    press6(event.target);
  },
  ePress7: function(event){
    press7(event.target);
  },
  ePress8: function(event){
    press8(event.target);
  },
  ePress9: function(event){
    press9(event.target);
  },
  ePress0: function(event){
    press0(event.target);
  },
  ePressS: function(event){
    pressS(event.target);
  },
  ePressR: function(event){
    pressR(event.target);
  },
  ePressM: function(event){
    pressM(event.target);
  },
  ePressD: function(event){
    pressD(event.target);
  },
  ePressP: function(event){
    pressP(event.target);
  },
  ePressSigno: function(event){
    pressSigno(event.target);
  },
  ePressC: function(event){
    pressC(event.target);
  },
  ePressIgual: function(event){
    pressIgual(event.target);
  }
}

Eventos.init();



