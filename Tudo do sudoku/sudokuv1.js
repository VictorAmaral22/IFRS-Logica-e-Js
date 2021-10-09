//Sudoku

var fasesecreta = 0;
var mov;
var sair = "N"
alert("Aqui estão alguns comandos:\nPara se mover pelo menu > PARA CIMA - W\nPara se mover pelo menu > PARA BAIXO - S\nPara escolher alguma opção do menu > APERTE ENTER");
//O while que faz o jogo inteiro rodar
while( sair == "N" || sair == "n" ){
 
     //Menus
     var menujogar = "                   |SUDOKU|                      \n                    = 数独 =                        \n                                            \n                ---{ JOGAR }---                    \n                 Como  jogar                         \n                    Creditos                            \n                        Sair                                 \n                            \n  All rights reserved to fulaninho1234©";
     var menusair = "                   |SUDOKU|                       \n                    = 数独 =                        \n                                            \n                      Jogar                         \n                 Como  jogar                         \n                    Creditos                            \n                ---{ SAIR }---                            \n                            \n  All rights reserved to fulaninho1234©";
     var menucreditos = "                   |SUDOKU|                      \n                    = 数独 =                        \n                                            \n                      Jogar                        \n                 Como  jogar                         \n             ---{ CREDITOS }---                           \n                        Sair                                 \n                            \n  All rights reserved to fulaninho1234©";
     var menucomo ="                   |SUDOKU|                      \n                    = 数独 =                        \n                                            \n                      Jogar                        \n            ---{ COMO  JOGAR }---                        \n                    Creditos                                \n                        Sair                                 \n                            \n  All rights reserved to fulaninho1234©";

     var menu = menujogar;
     //Menu
     while( mov!= "" ){
          mov = prompt(menu);
          //Para cima
          if( mov == "w" || mov == "W" ){

            switch (menu) {

                  case menujogar:
                      menu = menusair;
                      break;

                  case menusair:
                      menu = menucreditos
                      break;

                  case menucreditos:
                      menu = menucomo;
                      break;

                  case  menucomo:
                      menu = menujogar;
                      break;

            }

          }

          //Para baixo
          if( mov == "s" || mov == "S" ){

            switch (menu) {

                  case menujogar:
                      menu = menucomo
                      break;

                  case menucomo:
                      menu = menucreditos
                      break;

                  case menucreditos:
                      menu =  menusair;
                      break;

                  case menusair:
                      menu = menujogar;
                      break;

            }
          }
     
          //O que o jogador não pode fazer
          if( mov != "w" && mov != "W" && mov != "s" && mov != "S" && mov!=(isNaN(mov)) ){
            var pergunta = prompt("Você está perdido?");
            if ( (pergunta == "s" || pergunta == "S" || pergunta == "SIM" || pergunta == "sim" || pergunta == "") && ( pergunta != "n" && pergunta != "N" && pergunta != "NÃO" && pergunta != "não" && pergunta != "NAO" && pergunta != "nao" ) ){
              alert("Aqui estão alguns comandos:\nPara se mover pelo menu > PARA CIMA - W\nPara se mover pelo menu > PARA BAIXO - S\nPara escolher alguma opção do menu > APERTE ENTER");
            }
            if( (pergunta == "n" || pergunta == "N" || pergunta == "NÃO" || pergunta == "não" || pergunta == "NAO" || pergunta == "nao") && (pergunta != "s" && pergunta != "S" && pergunta != "SIM" && pergunta != "sim") ){
            alert("Ok, só queria te ajudar...");
            }
          }
     }//While mov
     //Caso a pessoa queira aprender como se joga
     if( menu == menucomo ){
       var voltar = "N";
       while( voltar != "s" && voltar!= "S" ){
            alert("Bem vindo ao Sudoku the game!\nEste é um jogo com o objetivo de desenvolver o raciocínio lógico, ele funciona da seguinte maneira:\n \n-Temos uma  tabela com números ja dispostos nela.\n__| A | B | C | D |\n1-| 1 | 2 | 3 | 4 |\n2-| 2 |  | 4 | 1 |\n3-| 4 |   |   |   |\n4-|   |   |   |   |\n-O objetivo do jogo é preencher a tabela com números de 1 a 4, sem repeti-los na mesma linha.\n-Por exemplo:\n__| A | B | C | D |\n1-| 1 | 2 | 3 | 4 |\n2-| 2 | 3 | 4 | 1 |\n3-| 4 | 1 | 2 | 3 |\n4-| 3 | 4 | 1 | 2 |");
            voltar = prompt("Deseja voltar ao menu?\n(Responda s(Para sim) e N(Para não)");
       }
       mov = 1;
     }
     //Caso a pessoa deseja sair do jogo
     if( menu == menusair ){
       sair = prompt("Tem certeza que deseja sair?\n S( Para sim ) ou N(Para não)");
     }
     //Caso a pessoa deseja ver os créditos
     if( menu == menucreditos ){
       var voltar = "N";
       while( voltar != "s" && voltar!= "S" ){
            alert("Criador do jogo original por Howard Garns\nVersão brasileira por Victor A.\nPessoas que contribuiram para o desenvolvimento do jogo:\nAmbos os Brunos\nBernardo\nNicolas\nRaphael\nObrigado por jogar e tenha um bom dia!\n🙂");
            voltar = prompt("Deseja voltar ao menu?\n(Responda s(Para sim) e N(Para não)");
       }
       mov = 1;
     }
     //Caso a pessoa queira jogar
     if( menu == menujogar ){
       var voltar = "N";
       while( voltar != "s" && voltar!= "S" ){
       var f1 = "__| A | B | C | D |\n1-| 1 | 2 | 3 | 4 |\n2-| 2 |   | 4 | 1 |\n3-| 4 |   |   |   |\n4-|   |   |   |   |";
       var f2 = "__| A | B | C | D |\n1-|   | 2 | 4 |   |\n2-| 1 |   |   | 3 |\n3-| 4 |   |   | 2 |\n4-|   | 1 | 3 |   |";
       var f3 = "__| A | B | C | D |\n1-| 3 |   | 4 |   |\n2-|   | 1 |   | 3 |\n3-| 2 | 3 |   |   |\n4-| 1 |   |   | 2 |";
       var f4 = "__| A | B | C | D |\n1-| 3 | 4 | 1 |   |\n2-|   | 2 |   |   |\n3-|   |   | 2 |   |\n4-|   | 1 | 4 | 3 |";
       var f5 = "__| A | B | C | D |\n1-| 1 | 2 | 3 | 4 |\n2-| 3 |   | 1 | 2 |\n3-| 2 |   |   |   |\n4-|   | 1 |   | 3 |";
       var layf1 = "Escolha a fase que você deseja jogar:\n\n"+f1+"\n     --FASE 1--\n\n\nSe quiseres sair, digite: sair."
       var layf2 = "Escolha a fase que você deseja jogar:\n\n"+f2+"\n     --FASE 2--\n\n\nSe quiseres sair, digite: sair."
       var layf3 = "Escolha a fase que você deseja jogar:\n\n"+f3+"\n     --FASE 3--\n\n\nSe quiseres sair, digite: sair."
       var layf4 = "Escolha a fase que você deseja jogar:\n\n"+f4+"\n     --FASE 4--\n\n\nSe quiseres sair, digite: sair."
       var layf5 = "Escolha a fase que você deseja jogar:\n\n"+f5+"\n     --FASE 5--\n\n\nSe quiseres sair, digite: sair."
       var fases = layf1;
       var mov = prompt(fases);
       while( mov!== "" ){
            //Para cima
            if( mov == "w" || mov == "W" ){
              switch (fases) {
                    case layf1:
                        fases = layf5; 
                        break;
                    case layf5:
                        fases = layf4;
                        break;
                    case layf4:
                        fases = layf3;
                        break;
                    case layf3:
                        fases = layf2;
                        break;
                    case layf2:
                        fases = layf1;
                        break;
              }mov = prompt(fases);
            }
            //Para baixo
            if( mov == "s" || mov == "S" ){
              switch (fases) {
                    case layf1:
                        fases = layf2; 
                        break;
                    case layf2:
                        fases = layf3;
                        break;
                    case layf3:
                        fases = layf4;
                        break;
                    case layf4:
                        fases = layf5;
                        break;
                    case layf5:
                        fases = layf1;
                        break;
              }mov = prompt(fases);
            }
       }
       if( fases == "Escolha a fase que você deseja jogar:\n\n"+f1+"\n     --FASE 1--\n\n\nSe quiseres sair, digite: sair."){
           //Fase 1
           var sair = "n";
           while( sair != "s" ){
              //Números da tabela
              var a1=1
              var a2=2
              var a3=4
              var a4=" "
              //Posições na fileira B
              var b1=2
              var b2=" "
              var b3=" "
              var b4=" "
              //Posições na fileira C
              var c1=3
              var c2=4
              var c3=" "
              var c4=" "
              //Posições na fileira D 
              var d1=4
              var d2=1
              var d3=" "
              var d4=" "

              //Tabela
              var quadro="__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";

              //Condição para que o jogo não acabe até serem preenchidos todos os espaços
              while( a4 == " " || b2 == " " || b3 == " " || b4 == " " || c3 == " " || c4 == " " || d3 == " " || d4 == " " ){
                   var posicao = prompt( "ONDE DESEJAS COLOCAR UM NÚMERO?(RESPONDA EM COORDENADAS)\n"+quadro+"\nPara sair do jogo, basta digitar > sair, ao escolher uma posição. ");
                   if( posicao == "sair" || posicao == "Sair" || posicao == "SAIR" ){
                     alert("SAINDO...");
                     voltar = prompt("Deseja voltar ao menu?\n(Responda s(Para sim) e N(Para não)");
                     a4 = 3;
                     b2 = 3;
                     b3 = 1;
                     b4 = 4;
                     c3 = 2;
                     c4 = 1;
                     d3 = 3;
                     d4 = 2;
                   } 


                   //Casos em que o jogador não pode botar um número na posição desejada
                   if( posicao == "A1" || posicao == "a1" || posicao == "1A" || posicao == "1a" || posicao == "a2" || posicao == "A2" || posicao == "2a" || posicao == "2A" || posicao == "a3" || posicao == "A3" || posicao == "3a" || posicao == "3A" || posicao == "b1" || posicao == "B1" || posicao == "1b" || posicao == "1B" || posicao == "c1" || posicao == "C1" || posicao == "1c" || posicao == "1C" || posicao == "c2" || posicao == "C2" || posicao == "2c" || posicao == "2C" || posicao == "d1" || posicao == "D1" || posicao == "1d" || posicao == "1D" || posicao == "d2" || posicao == "D2" || posicao == "2d" || posicao == "2D" ){
                     alert("TU NÃO PODES BOTAR UM NÚMERO NESTA POSIÇÃO!");
                   } 


                   //A4
                   //Caso o jogador decida colocar um número na posição A4
                   if( posicao == "A4" || posicao == "a4" || posicao == "4A" || posicao == "4a" ){
                     a4 = prompt(" QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO A4? \n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( a4 != "cancelar" && a4 != "CANCELAR" && a4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( a4 == a1 || a4 == a2 || a4 == a3 || a4 == b4 || a4 == c4 || a4 == d4 || a4<1 || a4>4 || isNaN(a4) ){
                            a4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO A4:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( a4 == "cancelar" || a4 == "CANCELAR" || a4 == "Cancelar" ){ 
                              var canw = "s"
                              a4 = 3;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( a4 != a1 && a4 != a2 && a4 != a3 && a4 != b4 && a4 != c4 && a4 != d4 && 1<= a4 <=4 && a4!=(isNaN(a4)) && canw != "s"){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }            
                     }
                     if( a4 == "cancelar" || a4 == "CANCELAR" || a4 == "Cancelar" || canw == "s" ){ 
                       a4 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"

                   //B2
                   //Caso o jogador decida colocar um número na posição B2
                   if( posicao == "B2" || posicao == "b2" || posicao == "2B" || posicao == "2b" ){
                     b2 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO B2?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( b2 != "cancelar" && b2 != "CANCELAR" && b2 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( b2 == b1 || b2 == b3 || b2 == b4 || b2 == a2 || b2 == c2|| b2 == d2 || b2<1 || b2>4 || isNaN(b2)){
                            b2 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO B2:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( b2 == "cancelar" || b2 == "CANCELAR" || b2 == "Cancelar" ){ 
                              var canw = "s"
                              b2 = 3;  
                            }
                       }    
                       //Caso o jogador acerte o número
                       if( b2 != b1 && b2 != b3 && b2 != b4 && b2 != a2 && b2 != c2 && b2 != d2 && 1<= b2 <=4 && b2!=(isNaN(b2)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( b2 == "cancelar" || b2 == "CANCELAR" || b2 == "Cancelar" || canw == "s" ){ 
                       b2 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }            
                   }canw = "n"

                   //B3
                   //Caso o jogador decida colocar um número na posição B3
                   if( posicao == "B3" || posicao == "b3" || posicao == "3B" || posicao == "3b" ){
                     b3 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO B3?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( b3 != "cancelar" && b3 != "CANCELAR" && b3 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( b3 == b1 || b3 == b2 || b3 == b4 || b3 == a3 || b3 == c3|| b3 == d3 || b3<1 || b3>4 || isNaN(b3)){
                            b3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO B3:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( b3 == "cancelar" || b3 == "CANCELAR" || b3 == "Cancelar" ){ 
                              var canw = "s"
                              b3 = 1;  
                            }
                       }  
                       //Caso o jogador acerte o número
                       if( b3 != b1 && b3 != b2 && b3 != b4 && b3 != a3 && b3 != c3 && b3 != d3 && 1<= b3 <=4 && b3!=(isNaN(b3)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( b3 == "cancelar" || b3 == "CANCELAR" || b3 == "Cancelar" || canw == "s" ){ 
                       b3 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //B4
                   //Caso o jogador decida colocar um número na posição B4
                   if( posicao == "B4" || posicao == "b4" || posicao == "4B" || posicao == "4b" ){
                     b4 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO  B4?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( b4 != "cancelar" && b4 != "CANCELAR" && b4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( b4 == b1 || b4 == b2 || b4 == b3 || b4 == a4 || b4 == c4|| b4 == d4 || b4<1 || b4>4 || isNaN(b4)){
                            b4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO B4:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( b4 == "cancelar" || b4 == "CANCELAR" || b4 == "Cancelar" ){ 
                              var canw = "s"
                              b4 = 4;  
                            }
                       }  
                       //Caso o jogador acerte o número
                       if( b4 != b1 && b4 != b2 && b4 != b3 && b4 != a4 && b4 != c4 && b4 != d4 && 1<= b4 <=4 && b4!=(isNaN(b4)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( b4 == "cancelar" || b4 == "CANCELAR" || b4 == "Cancelar" || canw == "s" ){ 
                       b4 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"

                   //C3
                   //Caso o jogador decida colocar um número na posição C3
                   if( posicao == "C3" || posicao == "c3" || posicao == "3C" || posicao == "3c" ){
                      c3 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO C3?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                      if( c3 != "cancelar" && c3 != "CANCELAR" && c3 != "Cancelar" ){
                        //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                        while( c3 == c1 || c3 == c2 || c3 == c4 || c3 == a3 || c3 == b3|| c3 == d3 || c3<1 || c3>4 || isNaN(c3)){
                             c3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO C3:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                             if( c3 == "cancelar" || c3 == "CANCELAR" || c3 == "Cancelar" ){ 
                               var canw = "s"
                               c3 = 2;  
                             }
                        }  
                        //Caso o jogador acerte o número
                        if( c3 != c1 && c3 != c2 && c3 != c4 && c3 != a3 && c3 != b3 && c3 != d3 && 1<= c3 <=4 && c3!=(isNaN(c3)) && canw != "s" ){
                          quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                        }
                      }
                      if( c3 == "cancelar" || c3 == "CANCELAR" || c3 == "Cancelar" || canw == "s" ){ 
                        c3 = " ";  
                        quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                      }
                   }canw = "n"
     
                   //C4
                   //Caso o jogador decida colocar um número na posição C4
                   if( posicao == "C4" || posicao == "c4" || posicao == "4C" || posicao == "4c" ){
                     c4 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO  C4?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( c4 != "cancelar" && c4 != "CANCELAR" && c4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( c4 == c1 || c4 == c2 || c4 == c3 || c4 == a4 || c4 == b4|| c4 == d4 || c4<1 || c4>4 || isNaN(c4)){
                            c4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO C4:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( c4 == "cancelar" || c4 == "CANCELAR" || c4 == "Cancelar" ){ 
                              var canw = "s"
                              c4 = 1;  
                            }
                       }
                       //Caso o jogador acerte o número
                       if( c4 != c1 && c4 != c2 && c4 != c3 && c4 != a4 && c4 != b4 && c4 != d4 && 1<= c4 <=4 && c4!=(isNaN(c4)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( c4 == "cancelar" || c4 == "CANCELAR" || c4 == "Cancelar" || canw == "s" ){ 
                       c4 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"
     
                   //D3
                   //Caso o jogador decida colocar um número na posição D3
                   if( posicao ==  "D3" || posicao ==  "d3" || posicao == "3D" || posicao == "3d" ){
                     d3 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO d3?\n"+quadro);
                     if( d3 != "cancelar" && d3 != "CANCELAR" && d3 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( d3 == d1 || d3 == d2 || d3 == d4 || d3 == a3 || d3 == b3 || d3 == c3 || d3<1 || d3>4 || isNaN (d3)){
                            d3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO D3:\n"+quadro);
                            if( d3 == "cancelar" || d3 == "CANCELAR" || d3 == "Cancelar" ){ 
                              var canw = "s"
                              d3 = 3;  
                            }
                       }
                       //Caso o jogador acerte o número
                       if( d3 != d1 && d3 != d2 && d3 != d4 && d3 != a3 && d3 != b3 && d3 != c3 && 1<= d3 <=4 && d3!=(isNaN (d3)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( d3 == "cancelar" || d3 == "CANCELAR" || d3 == "Cancelar" || canw == "s" ){ 
                       d3 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"     

                   //D4
                   //Caso o jogador decida colocar um número na posição D4
                   if( posicao ==  "D4" || posicao ==  "d4" || posicao == "4D" || posicao == "4d" ){
                     d4 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO D4?\n"+quadro);
                     if( d4 != "cancelar" && d4 != "CANCELAR" && d4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( d4 == d1 || d4 == d2 || d4 == d3 || d4 == a4 || d4 == b4|| d4 == c4 || d4<1 || d4>4 || isNaN (d4)){
                            d4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO D4:\n"+quadro);
                            if( d4 == "cancelar" || d4 == "CANCELAR" || d4 == "Cancelar" ){ 
                              var canw = "s"
                              d4 = 2;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( d4 != d1 && d4 != d2 && d4 != d3 && d4 != a4 && d4 != b4 && d4 != c4 && 1<= d4 <=4 && d4!=(isNaN (d4)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( d3 == "cancelar" || d3 == "CANCELAR" || d3 == "Cancelar" ){ 
                       d3 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |"; 
                    }
                   }canw = "n"

        //    
              }
              if( sair != "s" ){
                fasesecreta+=1
                alert("            PARABÉNS!\n   Você completou a fase 1!");
                sair = "s";
              }
         }
       }sair="n" 
       //Fase 2
       if( fases == "Escolha a fase que você deseja jogar:\n\n"+f2+"\n     --FASE 2--\n\n\nSe quiseres sair, digite: sair."){
         //Fase 2
         var sair = "n";
         while( sair != "s" ){
              //Números da tabela
              var a1=" "
              var a2=1
              var a3=4
              var a4=" "
              //Posições na fileira B
              var b1=2
              var b2=" "
              var b3=" "
              var b4=1
              //Posições na fileira C
              var c1=4
              var c2=" "
              var c3=" "
              var c4=3
              //Posições na fileira D 
              var d1=" "
              var d2=3
              var d3=2
              var d4=" "

              //Tabela
              var quadro="__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";

              //Condição para que o jogo não acabe até serem preenchidos todos os espaços
              while( a1 == " " || a4 == " " || b2 == " " || b3 == " " || c2 == " " || c3 == " " || d1 == " " || d4 == " " ){
                   var posicao = prompt( "ONDE DESEJAS COLOCAR UM NÚMERO?(RESPONDA EM COORDENADAS)\n"+quadro+"\nPara sair do jogo, basta digitar > sair, ao escolher uma posição. ");
                   if( posicao == "sair" || posicao == "Sair" || posicao == "SAIR" ){
                     alert("SAINDO...");
                     sair = "s";
                     a1 = 3;
                     a4 = 2;
                     b2 = 4;
                     b3 = 3;
                     c2 = 2;
                     c3 = 1;
                     d1 = 1;
                     d4 = 4;
                   } 


                   //Casos em que o jogador não pode botar um número na posição desejada
                   if( posicao == "A2" || posicao == "a2" || posicao == "2A" || posicao == "2a" || posicao == "a3" || posicao == "A3" || posicao == "3a" || posicao == "3A" || posicao == "b1" || posicao == "B1" || posicao == "1b" || posicao == "1B" || posicao == "b4" || posicao == "B4" || posicao == "4b" || posicao == "4B" || posicao == "c1" || posicao == "C1" || posicao == "1c" || posicao == "1C" || posicao == "c4" || posicao == "C4" || posicao == "4c" || posicao == "4C" || posicao == "d2" || posicao == "D2" || posicao == "2d" || posicao == "2D" || posicao == "d3" || posicao == "D3" || posicao == "3d" || posicao == "3D" ){
                     alert("TU NÃO PODES BOTAR UM NÚMERO NESTA POSIÇÃO!");
                   } 


                   //A1
                   //Caso o jogador decida colocar um número na posição A1
                   if( posicao == "A1" || posicao == "a1" || posicao == "1A" || posicao == "1a" ){
                     a1 = prompt(" QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO A1? \n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( a1 != "cancelar" && a1 != "CANCELAR" && a1 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( a1 == a2 || a1 == a3 || a1 == a4 || a1 == b1 || a1 == c1 || a1 == d1 || a1<1 || a1>4 || isNaN(a1) ){
                            a1 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO A1:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( a1 == "cancelar" || a1 == "CANCELAR" || a1 == "Cancelar" ){ 
                              var canw = "s"
                              a1 = 3;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( a1 != a2 && a1 != a3 && a1 != a4 && a1 != b1 && a1 != c1 && a1 != d1 && 1<= a1 <=4 && a1!=(isNaN(a1)) && canw != "s"){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }            
                     }
                     if( a1 == "cancelar" || a1 == "CANCELAR" || a1 == "Cancelar" || canw == "s" ){ 
                       a1 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //A4
                   //Caso o jogador decida colocar um número na posição A4
                   if( posicao == "A4" || posicao == "a4" || posicao == "4A" || posicao == "4a" ){
                     a4 = prompt(" QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO A4? \n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( a4 != "cancelar" && a4 != "CANCELAR" && a4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( a4 == a1 || a4 == a2 || a4 == a3 || a4 == b4 || a4 == c4 || a4 == d4 || a4<1 || a4>4 || isNaN(a4) ){
                            a4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO A4:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( a4 == "cancelar" || a4 == "CANCELAR" || a4 == "Cancelar" ){ 
                              var canw = "s"
                              a4 = 2;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( a4 != a1 && a4 != a2 && a4 != a3 && a4 != b4 && a4 != c4 && a4 != d4 && 1<= a4 <=4 && a4 !=(isNaN(a4)) && canw != "s"){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }            
                     }
                     if( a4 == "cancelar" || a4 == "CANCELAR" || a4 == "Cancelar" || canw == "s" ){ 
                       a4 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //B2
                   //Caso o jogador decida colocar um número na posição B2
                   if( posicao == "B2" || posicao == "b2" || posicao == "2B" || posicao == "2b" ){
                     b2 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO B2?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( b2 != "cancelar" && b2 != "CANCELAR" && b2 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( b2 == b1 || b2 == b3 || b2 == b4 || b2 == a2 || b2 == c2|| b2 == d2 || b2<1 || b2>4 || isNaN(b2)){
                            b2 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO B2:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( b2 == "cancelar" || b2 == "CANCELAR" || b2 == "Cancelar" ){ 
                              var canw = "s"
                              b2 = 4;  
                            }
                       }    
                       //Caso o jogador acerte o número
                       if( b2 != b1 && b2 != b3 && b2 != b4 && b2 != a2 && b2 != c2 && b2 != d2 && 1<= b2 <=4 && b2!=(isNaN(b2)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( b2 == "cancelar" || b2 == "CANCELAR" || b2 == "Cancelar" || canw == "s" ){ 
                       b2 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }            
                   }canw = "n"


                   //B3
                   //Caso o jogador decida colocar um número na posição B3
                   if( posicao == "B3" || posicao == "b3" || posicao == "3B" || posicao == "3b" ){
                     b3 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO B3?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( b3 != "cancelar" && b3 != "CANCELAR" && b3 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( b3 == b1 || b3 == b2 || b3 == b4 || b3 == a3 || b3 == c3|| b3 == d3 || b3<1 || b3>4 || isNaN(b3)){
                            b3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO B3:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( b3 == "cancelar" || b3 == "CANCELAR" || b3 == "Cancelar" ){ 
                              var canw = "s"
                              b3 = 3;  
                            }
                       }  
                       //Caso o jogador acerte o número
                       if( b3 != b1 && b3 != b2 && b3 != b4 && b3 != a3 && b3 != c3 && b3 != d3 && 1<= b3 <=4 && b3!=(isNaN(b3)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( b3 == "cancelar" || b3 == "CANCELAR" || b3 == "Cancelar" || canw == "s" ){ 
                       b3 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //C2
                   //Caso o jogador decida colocar um número na posição C2
                   if( posicao == "C2" || posicao == "c2" || posicao == "2C" || posicao == "2c" ){
                      c2 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO C2?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                      if( c2 != "cancelar" && c2 != "CANCELAR" && c2 != "Cancelar" ){
                        //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                        while( c2 == c1 || c2 == c3 || c2 == c4 || c2 == a2 || c2 == b2|| c2 == d2 || c2<1 || c2>4 || isNaN(c2)){
                             c2 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO C2:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                             if( c2 == "cancelar" || c2 == "CANCELAR" || c2 == "Cancelar" ){ 
                               var canw = "s"
                               c2 = 2;  
                             }
                        }  
                        //Caso o jogador acerte o número
                        if( c2 != c1 && c2 != c3 && c2 != c4 && c2 != a2 && c2 != b2 && c2 != d2 && 1<= c2 <=4 && c2!=(isNaN(c2)) && canw != "s" ){
                          quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                        }
                      }
                      if( c2 == "cancelar" || c2 == "CANCELAR" || c2 == "Cancelar" || canw == "s" ){ 
                        c2 = " ";  
                        quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                      }
                   }canw = "n"


                   //C3
                   //Caso o jogador decida colocar um número na posição C3
                   if( posicao == "C3" || posicao == "c3" || posicao == "3C" || posicao == "3c" ){
                      c3 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO C3?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                      if( c3 != "cancelar" && c3 != "CANCELAR" && c3 != "Cancelar" ){
                        //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                        while( c3 == c1 || c3 == c2 || c3 == c4 || c3 == a3 || c3 == b3|| c3 == d3 || c3<1 || c3>4 || isNaN(c3)){
                             c3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO C3:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                             if( c3 == "cancelar" || c3 == "CANCELAR" || c3 == "Cancelar" ){ 
                               var canw = "s"
                               c3 = 1;  
                             }
                        }  
                        //Caso o jogador acerte o número
                        if( c3 != c1 && c3 != c2 && c3 != c4 && c3 != a3 && c3 != b3 && c3 != d3 && 1<= c3 <=4 && c3!=(isNaN(c3)) && canw != "s" ){
                          quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                        }
                      }
                      if( c3 == "cancelar" || c3 == "CANCELAR" || c3 == "Cancelar" || canw == "s" ){ 
                        c3 = " ";  
                        quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                      }
                   }canw = "n"
     
     
                   //D1
                   //Caso o jogador decida colocar um número na posição D1
                   if( posicao ==  "D1" || posicao ==  "d1" || posicao == "1D" || posicao == "1d" ){
                     d1 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO d1?\n"+quadro);
                     if( d1 != "cancelar" && d1 != "CANCELAR" && d1 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( d1 == d2 || d1 == d3 || d1 == d4 || d1 == a1 || d1 == b1 || d1 == c1 || d1<1 || d1>4 || isNaN (d1)){
                            d1 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO D1:\n"+quadro);
                            if( d1 == "cancelar" || d1 == "CANCELAR" || d1 == "Cancelar" ){ 
                              var canw = "s"
                              d1 = 1;  
                            }
                       }
                       //Caso o jogador acerte o número
                       if( d1 != d2 && d1 != d3 && d1 != d4 && d1 != a1 && d1 != b1 && d1 != c1 && 1<= d1 <=4 && d1!=(isNaN (d1)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( d1 == "cancelar" || d1 == "CANCELAR" || d1 == "Cancelar" || canw == "s" ){ 
                       d1 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"     

 
                   //D4
                   //Caso o jogador decida colocar um número na posição D4
                   if( posicao ==  "D4" || posicao ==  "d4" || posicao == "4D" || posicao == "4d" ){
                     d4 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO D4?\n"+quadro);
                     if( d4 != "cancelar" && d4 != "CANCELAR" && d4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( d4 == d1 || d4 == d2 || d4 == d3 || d4 == a4 || d4 == b4|| d4 == c4 || d4<1 || d4>4 || isNaN (d4)){
                            d4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO D4:\n"+quadro);
                            if( d4 == "cancelar" || d4 == "CANCELAR" || d4 == "Cancelar" ){ 
                              var canw = "s"
                              d4 = 4;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( d4 != d1 && d4 != d2 && d4 != d3 && d4 != a4 && d4 != b4 && d4 != c4 && 1<= d4 <=4 && d4!=(isNaN (d4)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( d4 == "cancelar" || d4 == "CANCELAR" || d4 == "Cancelar" ){ 
                       d4 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |"; 
                    }
                   }canw = "n"

        //    
              }
              if( sair != "s" ){
                 fasesecreta+=1
                alert("            PARABÉNS!\n   Você completou a fase 2!");
                sair = "s";
              }
         }
       }sair="n" 
       //Fase 3
       if( fases == "Escolha a fase que você deseja jogar:\n\n"+f3+"\n     --FASE 3--\n\n\nSe quiseres sair, digite: sair."){
         //Fase 3
         var sair = "n";
         while( sair != "s" ){
              //Números da tabela
              var a1=3
              var a2=" "
              var a3=2
              var a4=1
              //Posições na fileira B
              var b1=" "
              var b2=1
              var b3=3
              var b4=" "
              //Posições na fileira C
              var c1=4
              var c2=" "
              var c3=" "
              var c4=" "
              //Posições na fileira D 
              var d1=" "
              var d2=3
              var d3=" "
              var d4=2

              //Tabela
              var quadro="__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";

              //Condição para que o jogo não acabe até serem preenchidos todos os espaços
              while( a2 == " " || b1 == " " || b4 == " " || c2 == " " || c3 == " " || c4 == " " || d1 == " " || d3 == " " ){
                   var posicao = prompt( "ONDE DESEJAS COLOCAR UM NÚMERO?(RESPONDA EM COORDENADAS)\n"+quadro+"\nPara sair do jogo, basta digitar > sair, ao escolher uma posição. ");
                   if( posicao == "sair" || posicao == "Sair" || posicao == "SAIR" ){
                     alert("SAINDO...");
                     sair = "s";
                     a2 = 4;
                     b1 = 2;
                     b4 = 4;
                     c2 = 2;
                     c3 = 1;
                     c4 = 3;
                     d1 = 1;
                     d3 = 4;
                   } 


                   //Casos em que o jogador não pode botar um número na posição desejada
                   if( posicao == "A1" || posicao == "a1" || posicao == "1A" || posicao == "1a" || posicao == "A3" || posicao == "a3" || posicao == "3A" || posicao == "3a" || posicao == "A4" || posicao == "a4" || posicao == "4A" || posicao == "4a" ||posicao == "b2" || posicao == "B2" || posicao == "2b" || posicao == "2B" || posicao == "b3" || posicao == "B3" || posicao == "3b" || posicao == "3B" || posicao == "c1" || posicao == "C1" || posicao == "1c" || posicao == "1C" || posicao == "d2" || posicao == "D2" || posicao == "2d" || posicao == "2D" || posicao == "d4" || posicao == "D4" || posicao == "4d" || posicao == "4D" ){
                     alert("TU NÃO PODES BOTAR UM NÚMERO NESTA POSIÇÃO!");
                   } 


                   //A2
                   //Caso o jogador decida colocar um número na posição A2
                   if( posicao == "A2" || posicao == "a2" || posicao == "2A" || posicao == "2a" ){
                     a2 = prompt(" QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO A2? \n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( a2 != "cancelar" && a2 != "CANCELAR" && a2 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( a2 == a1 || a1 == a3 || a2 == a4 || a2 == b2 || a2 == c2 || a2 == d2 || a2<1 || a2>4 || isNaN(a2) ){
                            a2 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO A2:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( a2 == "cancelar" || a2 == "CANCELAR" || a2 == "Cancelar" ){ 
                              var canw = "s"
                              a2 = 4;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( a2 != a1 && a2 != a3 && a2 != a4 && a2 != b2 && a2 != c2 && a2 != d2 && 1<= a2 <=4 && a2!=(isNaN(a2)) && canw != "s"){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }            
                     }
                     if( a2 == "cancelar" || a2 == "CANCELAR" || a2 == "Cancelar" || canw == "s" ){ 
                       a2 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"



                   //B1
                   //Caso o jogador decida colocar um número na posição B1
                   if( posicao == "B1" || posicao == "b1" || posicao == "1B" || posicao == "1b" ){
                     b1 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO B1?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( b1 != "cancelar" && b1 != "CANCELAR" && b1 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( b1 == b2 || b1 == b3 || b1 == b4 || b1 == a1 || b1 == c1 || b1 == d1 || b1<1 || b1>4 || isNaN(b1)){
                            b1 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO B1:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( b1 == "cancelar" || b1 == "CANCELAR" || b1 == "Cancelar" ){ 
                              var canw = "s"
                              b1 = 2;  
                            }
                       }    
                       //Caso o jogador acerte o número
                       if( b1 != b2 && b1 != b3 && b1 != b4 && b1 != a1 && b1 != c1 && b1 != d1 && 1<= b1 <=4 && b1!=(isNaN(b1)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( b1 == "cancelar" || b1 == "CANCELAR" || b1 == "Cancelar" || canw == "s" ){ 
                       b1 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }            
                   }canw = "n"


                   //B4
                   //Caso o jogador decida colocar um número na posição B4
                   if( posicao == "B4" || posicao == "b4" || posicao == "4B" || posicao == "4b" ){
                     b4 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO B4?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( b4 != "cancelar" && b4 != "CANCELAR" && b4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( b4 == b1 || b4 == b2 || b4 == b3 || b4 == a4 || b4 == c4 || b4 == d4 || b4<1 || b4>4 || isNaN(b4)){
                            b4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO B4:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( b4 == "cancelar" || b4 == "CANCELAR" || b4 == "Cancelar" ){ 
                              var canw = "s"
                              b4 = 4;  
                            }
                       }  
                       //Caso o jogador acerte o número
                       if( b4 != b1 && b4 != b2 && b4 != b3 && b4 != a4 && b4 != c4 && b4 != d4 && 1<= b4 <=4 && b4!=(isNaN(b4)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( b4 == "cancelar" || b4 == "CANCELAR" || b4 == "Cancelar" || canw == "s" ){ 
                       b4 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //C2
                   //Caso o jogador decida colocar um número na posição C2
                   if( posicao == "C2" || posicao == "c2" || posicao == "2C" || posicao == "2c" ){
                      c2 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO C2?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                      if( c2 != "cancelar" && c2 != "CANCELAR" && c2 != "Cancelar" ){
                        //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                        while( c2 == c1 || c2 == c3 || c2 == c4 || c2 == a2 || c2 == b2|| c2 == d2 || c2<1 || c2>4 || isNaN(c2)){
                             c2 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO C2:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                             if( c2 == "cancelar" || c2 == "CANCELAR" || c2 == "Cancelar" ){ 
                               var canw = "s"
                               c2 = 2;  
                             }
                        }  
                        //Caso o jogador acerte o número
                        if( c2 != c1 && c2 != c3 && c2 != c4 && c2 != a2 && c2 != b2 && c2 != d2 && 1<= c2 <=4 && c2!=(isNaN(c2)) && canw != "s" ){
                          quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                        }
                      }
                      if( c2 == "cancelar" || c2 == "CANCELAR" || c2 == "Cancelar" || canw == "s" ){ 
                        c2 = " ";  
                        quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                      }
                   }canw = "n"


                   //C3
                   //Caso o jogador decida colocar um número na posição C3
                   if( posicao == "C3" || posicao == "c3" || posicao == "3C" || posicao == "3c" ){
                      c3 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO C3?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                      if( c3 != "cancelar" && c3 != "CANCELAR" && c3 != "Cancelar" ){
                        //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                        while( c3 == c1 || c3 == c2 || c3 == c4 || c3 == a3 || c3 == b3|| c3 == d3 || c3<1 || c3>4 || isNaN(c3)){
                             c3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO C3:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                             if( c3 == "cancelar" || c3 == "CANCELAR" || c3 == "Cancelar" ){ 
                               var canw = "s"
                               c3 = 1;  
                             }
                        }  
                        //Caso o jogador acerte o número
                        if( c3 != c1 && c3 != c2 && c3 != c4 && c3 != a3 && c3 != b3 && c3 != d3 && 1<= c3 <=4 && c3!=(isNaN(c3)) && canw != "s" ){
                          quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                        }
                      }
                      if( c3 == "cancelar" || c3 == "CANCELAR" || c3 == "Cancelar" || canw == "s" ){ 
                        c3 = " ";  
                        quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                      }
                   }canw = "n"
     
                   //C4
                   //Caso o jogador decida colocar um número na posição C4
                   if( posicao == "C4" || posicao == "c4" || posicao == "4C" || posicao == "4c" ){
                     c4 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO  C4?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( c4 != "cancelar" && c4 != "CANCELAR" && c4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( c4 == c1 || c4 == c2 || c4 == c3 || c4 == a4 || c4 == b4|| c4 == d4 || c4<1 || c4>4 || isNaN(c4)){
                            c4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO C4:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( c4 == "cancelar" || c4 == "CANCELAR" || c4 == "Cancelar" ){ 
                              var canw = "s"
                              c4 = 3;  
                            }
                       }
                       //Caso o jogador acerte o número
                       if( c4 != c1 && c4 != c2 && c4 != c3 && c4 != a4 && c4 != b4 && c4 != d4 && 1<= c4 <=4 && c4!=(isNaN(c4)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( c4 == "cancelar" || c4 == "CANCELAR" || c4 == "Cancelar" || canw == "s" ){ 
                       c4 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"
     
                   //D1
                   //Caso o jogador decida colocar um número na posição D1
                   if( posicao ==  "D1" || posicao ==  "d1" || posicao == "1D" || posicao == "1d" ){
                     d1 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO d1?\n"+quadro);
                     if( d1 != "cancelar" && d1 != "CANCELAR" && d1 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( d1 == d2 || d1 == d3 || d1 == d4 || d1 == a1 || d1 == b1 || d1 == c1 || d1<1 || d1>4 || isNaN (d1)){
                            d1 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO D1:\n"+quadro);
                            if( d1 == "cancelar" || d1 == "CANCELAR" || d1 == "Cancelar" ){ 
                              var canw = "s"
                              d1 = 1;  
                            }
                       }
                       //Caso o jogador acerte o número
                       if( d1 != d2 && d1 != d3 && d1 != d4 && d1 != a1 && d1 != b1 && d1 != c1 && 1<= d1 <=4 && d1!=(isNaN (d1)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( d1 == "cancelar" || d1 == "CANCELAR" || d1 == "Cancelar" || canw == "s" ){ 
                       d1 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"     

                   //D3
                   //Caso o jogador decida colocar um número na posição D3
                   if( posicao ==  "D3" || posicao ==  "d3" || posicao == "3D" || posicao == "3d" ){
                     d3 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO D3?\n"+quadro);
                     if( d3 != "cancelar" && d3 != "CANCELAR" && d3 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( d3 == d1 || d3 == d2 || d3 == d4 || d3 == a3 || d3 == b3 || d3 == c3 || d3<1 || d3>4 || isNaN (d3)){
                            d3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO D3:\n"+quadro);
                            if( d3 == "cancelar" || d3 == "CANCELAR" || d3 == "Cancelar" ){ 
                              var canw = "s"
                              d3 = 4;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( d3 != d1 && d3 != d2 && d3 != d4 && d3 != a3 && d3 != b3 && d3 != c3 && 1<= d3 <=4 && d3!=(isNaN (d3)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( d3 == "cancelar" || d3 == "CANCELAR" || d3 == "Cancelar" ){ 
                       d3 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |"; 
                    }
                   }canw = "n"

        //    
              }
              if( sair != "s" ){
                fasesecreta+=1
                alert("            PARABÉNS!\n   Você completou a fase 3!");
              }
         }
       }sair="n"
       //Fase 4
       if( fases == "Escolha a fase que você deseja jogar:\n\n"+f4+"\n     --FASE 4--\n\n\nSe quiseres sair, digite: sair."){
         //Fase 4
         var sair = "n";
         while( sair != "s" ){
              //Números da tabela
              var a1=3
              var a2=" "
              var a3=" "
              var a4=" "
              //Posições na fileira B
              var b1=4
              var b2=2
              var b3=" "
              var b4=1
              //Posições na fileira C
              var c1=1
              var c2=" "
              var c3=2
              var c4=4
              //Posições na fileira D 
              var d1=" "
              var d2=" "
              var d3=" "
              var d4=3

              //Tabela
              var quadro="__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";

              //Condição para que o jogo não acabe até serem preenchidos todos os espaços
              while( a2 == " " || a3 == " " || a4 == " " || b3 == " " || c2 == " " || d1 == " " || d2 == " " || d3 == " " ){
                   var posicao = prompt( "ONDE DESEJAS COLOCAR UM NÚMERO?(RESPONDA EM COORDENADAS)\n"+quadro+"\nPara sair do jogo, basta digitar > sair, ao escolher uma posição. ");
                   if( posicao == "sair" || posicao == "Sair" || posicao == "SAIR" ){
                     alert("SAINDO...");
                     sair = "s";
                     a2 = 1;
                     a3 = 4;
                     a4 = 2;
                     b3 = 3;
                     c2 = 3;
                     d1 = 2;
                     d2 = 4;
                     d3 = 1;
                   } 


                   //Casos em que o jogador não pode botar um número na posição desejada
                   if( posicao == "A1" || posicao == "a1" || posicao == "1A" || posicao == "1a" || posicao == "b1" || posicao == "B1" || posicao == "1b" || posicao == "1B" || posicao == "b2" || posicao == "B2" || posicao == "2b" || posicao == "2B" || posicao == "b4" || posicao == "B4" || posicao == "4B" || posicao == "4b" || posicao == "c1" || posicao == "C1" || posicao == "1c" || posicao == "1C" || posicao == "c3" || posicao == "C3" || posicao == "3c" || posicao == "3C" || posicao == "c4" || posicao == "C4" || posicao == "4c" || posicao == "4C" || posicao == "d4" || posicao == "D4" || posicao == "4d" || posicao == "4D" ){
                     alert("TU NÃO PODES BOTAR UM NÚMERO NESTA POSIÇÃO!");
                   } 


                   //A2
                   //Caso o jogador decida colocar um número na posição A2
                   if( posicao == "A2" || posicao == "a2" || posicao == "2A" || posicao == "2a" ){
                     a2 = prompt(" QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO A2? \n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( a2 != "cancelar" && a2 != "CANCELAR" && a2 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( a2 == a1 || a1 == a3 || a2 == a4 || a2 == b2 || a2 == c2 || a2 == d2 || a2<1 || a2>4 || isNaN(a2) ){
                            a2 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO A2:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( a2 == "cancelar" || a2 == "CANCELAR" || a2 == "Cancelar" ){ 
                              var canw = "s"
                              a2 = 1;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( a2 != a1 && a2 != a3 && a2 != a4 && a2 != b2 && a2 != c2 && a2 != d2 && 1<= a2 <=4 && a2!=(isNaN(a2)) && canw != "s"){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }            
                     }
                     if( a2 == "cancelar" || a2 == "CANCELAR" || a2 == "Cancelar" || canw == "s" ){ 
                       a2 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //A3
                   //Caso o jogador decida colocar um número na posição A3
                   if( posicao == "A3" || posicao == "a3" || posicao == "3A" || posicao == "3a" ){
                     a3 = prompt(" QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO A3? \n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( a3 != "cancelar" && a3 != "CANCELAR" && a3 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( a3 == a1 || a3 == a2 || a3 == a4 || a3 == b3 || a3 == c3 || a3 == d3 || a3<1 || a3>4 || isNaN(a3) ){
                            a3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO A3:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( a3 == "cancelar" || a3 == "CANCELAR" || a3 == "Cancelar" ){ 
                              var canw = "s"
                              a3 = 4;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( a3 != a1 && a3 != a2 && a3 != a4 && a3 != b3 && a3 != c3 && a3 != d3 && 1<= a3 <=4 && a3!=(isNaN(a3)) && canw != "s"){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }            
                     }
                     if( a3 == "cancelar" || a3 == "CANCELAR" || a3 == "Cancelar" || canw == "s" ){ 
                       a3 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //A4
                   //Caso o jogador decida colocar um número na posição A4
                   if( posicao == "A4" || posicao == "a4" || posicao == "4A" || posicao == "4a" ){
                     a4 = prompt(" QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO A4? \n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( a4 != "cancelar" && a4 != "CANCELAR" && a4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( a4 == a1 || a4 == a2 || a4 == a3 || a4 == b4 || a4 == c4 || a4 == d4 || a4<1 || a4>4 || isNaN(a4) ){
                            a4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO A4:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( a4 == "cancelar" || a4 == "CANCELAR" || a4 == "Cancelar" ){ 
                              var canw = "s"
                              a4 = 2;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( a4 != a1 && a4 != a2 && a4 != a3 && a4 != b4 && a4 != c4 && a4 != d4 && 1<= a4 <=4 && a4!=(isNaN(a4)) && canw != "s"){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }            
                     }
                     if( a4 == "cancelar" || a4 == "CANCELAR" || a4 == "Cancelar" || canw == "s" ){ 
                       a4 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //B3
                   //Caso o jogador decida colocar um número na posição B3
                   if( posicao == "B3" || posicao == "b3" || posicao == "3B" || posicao == "3b" ){
                     b3 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO B3?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( b3 != "cancelar" && b3 != "CANCELAR" && b3 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( b3 == b1 || b3 == b2 || b3 == b4 || b3 == a3 || b3 == c3 || b3 == d3 || b3<1 || b3>4 || isNaN(b3)){
                            b3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO B3:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( b3 == "cancelar" || b3 == "CANCELAR" || b3 == "Cancelar" ){ 
                              var canw = "s"
                              b3 = 3;  
                            }
                       }  
                       //Caso o jogador acerte o número
                       if( b3 != b1 && b3 != b2 && b3 != b4 && b3 != a3 && b3 != c3 && b3 != d3 && 1<= b3 <=4 && b3!=(isNaN(b3)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( b3 == "cancelar" || b3 == "CANCELAR" || b3 == "Cancelar" || canw == "s" ){ 
                       b3 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //C2
                   //Caso o jogador decida colocar um número na posição C2
                   if( posicao == "C2" || posicao == "c2" || posicao == "2C" || posicao == "2c" ){
                      c2 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO C2?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                      if( c2 != "cancelar" && c2 != "CANCELAR" && c2 != "Cancelar" ){
                        //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                        while( c2 == c1 || c2 == c3 || c2 == c4 || c2 == a2 || c2 == b2|| c2 == d2 || c2<1 || c2>4 || isNaN(c2)){
                             c2 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO C2:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                             if( c2 == "cancelar" || c2 == "CANCELAR" || c2 == "Cancelar" ){ 
                               var canw = "s"
                               c2 = 3;  
                             }
                        }  
                        //Caso o jogador acerte o número
                        if( c2 != c1 && c2 != c3 && c2 != c4 && c2 != a2 && c2 != b2 && c2 != d2 && 1<= c2 <=4 && c2!=(isNaN(c2)) && canw != "s" ){
                          quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                        }
                      }
                      if( c2 == "cancelar" || c2 == "CANCELAR" || c2 == "Cancelar" || canw == "s" ){ 
                        c2 = " ";  
                        quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                      }
                   }canw = "n"


                   //D1
                   //Caso o jogador decida colocar um número na posição D1
                   if( posicao ==  "D1" || posicao ==  "d1" || posicao == "1D" || posicao == "1d" ){
                     d1 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO d1?\n"+quadro);
                     if( d1 != "cancelar" && d1 != "CANCELAR" && d1 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( d1 == d2 || d1 == d3 || d1 == d4 || d1 == a1 || d1 == b1 || d1 == c1 || d1<1 || d1>4 || isNaN (d1)){
                            d1 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO D1:\n"+quadro);
                            if( d1 == "cancelar" || d1 == "CANCELAR" || d1 == "Cancelar" ){ 
                              var canw = "s"
                              d1 = 2;  
                            }
                       }
                       //Caso o jogador acerte o número
                       if( d1 != d2 && d1 != d3 && d1 != d4 && d1 != a1 && d1 != b1 && d1 != c1 && 1<= d1 <=4 && d1!=(isNaN (d1)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( d1 == "cancelar" || d1 == "CANCELAR" || d1 == "Cancelar" || canw == "s" ){ 
                       d1 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"     


                   //D2
                   //Caso o jogador decida colocar um número na posição D2
                   if( posicao ==  "D2" || posicao ==  "d2" || posicao == "2D" || posicao == "2d" ){
                     d2 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO d2?\n"+quadro);
                     if( d2 != "cancelar" && d2 != "CANCELAR" && d2 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( d2 == d1 || d2 == d3 || d2 == d4 || d2 == a2 || d2 == b2 || d2 == c2 || d2<1 || d2>4 || isNaN (d2)){
                            d2 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO D2:\n"+quadro);
                            if( d2 == "cancelar" || d2 == "CANCELAR" || d2 == "Cancelar" ){ 
                              var canw = "s"
                              d2 = 4;  
                            }
                       }
                       //Caso o jogador acerte o número
                       if( d2 != d1 && d2 != d3 && d2 != d4 && d2 != a2 && d2 != b2 && d2 != c2 && 1<= d2 <=4 && d2!=(isNaN (d2)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( d2 == "cancelar" || d2 == "CANCELAR" || d2 == "Cancelar" || canw == "s" ){ 
                       d2 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"

                   //D3
                   //Caso o jogador decida colocar um número na posição D3
                   if( posicao ==  "D3" || posicao ==  "d3" || posicao == "3D" || posicao == "3d" ){
                     d3 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO D3?\n"+quadro);
                     if( d3 != "cancelar" && d3 != "CANCELAR" && d3 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( d3 == d1 || d3 == d2 || d3 == d4 || d3 == a3 || d3 == b3 || d3 == c3 || d3<1 || d3>4 || isNaN (d3)){
                            d3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO D3:\n"+quadro);
                            if( d3 == "cancelar" || d3 == "CANCELAR" || d3 == "Cancelar" ){ 
                              var canw = "s"
                              d3 = 1;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( d3 != d1 && d3 != d2 && d3 != d4 && d3 != a3 && d3 != b3 && d3 != c3 && 1<= d3 <=4 && d3!=(isNaN (d3)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( d3 == "cancelar" || d3 == "CANCELAR" || d3 == "Cancelar" ){ 
                       d3 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |"; 
                    }
                   }canw = "n"

        //    
              }
              if( sair != "s" ){
                fasesecreta+=1
                alert("            PARABÉNS!\n   Você completou a fase 4!");
              }
         }
       }sair="n" 
       if(fasesecreta>=4){
       //Fase 5
       if( fases == "Escolha a fase que você deseja jogar:\n\n"+f5+"\n     --FASE 5--\n\n\nSe quiseres sair, digite: sair."){
         //Fase 4
         var sair = "n";
         while( sair != "s" ){
              //Números da tabela
              var a1=1
              var a2=3
              var a3=2
              var a4=" "
              //Posições na fileira B
              var b1=2
              var b2=" "
              var b3=" "
              var b4=1
              //Posições na fileira C
              var c1=3
              var c2=1
              var c3=" "
              var c4=" "
              //Posições na fileira D 
              var d1=4
              var d2=2
              var d3=" "
              var d4=3

              //Tabela
              var quadro="__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";

              //Condição para que o jogo não acabe até serem preenchidos todos os espaços
              while( a4 == " " || b2 == " " || b3 == " " || c3 == " " || c4 == " " || d3 == " " ){
                   var posicao = prompt( "ONDE DESEJAS COLOCAR UM NÚMERO?(RESPONDA EM COORDENADAS)\n"+quadro+"\nPara sair do jogo, basta digitar > sair, ao escolher uma posição. ");
                   if( posicao == "sair" || posicao == "Sair" || posicao == "SAIR" ){
                     alert("SAINDO...");
                     sair = "s";
                     a4 = 4;
                     b2 = 4;
                     b3 = 3;
                     c3 = 4;
                     c4 = 2;
                     d3 = 1;
                   } 


                   //Casos em que o jogador não pode botar um número na posição desejada
                   if( posicao == "A1" || posicao == "a1" || posicao == "1A" || posicao == "1a" || posicao == "A2" || posicao == "a2" || posicao == "2A" || posicao == "2a" || posicao == "A3" || posicao == "a3" || posicao == "3A" || posicao == "3a" || posicao == "b1" || posicao == "B1" || posicao == "1b" || posicao == "1B" || posicao == "b4" || posicao == "B4" || posicao == "4B" || posicao == "4b" || posicao == "c1" || posicao == "C1" || posicao == "1c" || posicao == "1C" || posicao == "c2" || posicao == "C2" || posicao == "2c" || posicao == "2C" || posicao == "d1" || posicao == "D1" || posicao == "1d" || posicao == "1D"|| posicao == "d2" || posicao == "D2" || posicao == "2d" || posicao == "2D"|| posicao == "d4" || posicao == "D4" || posicao == "4d" || posicao == "4D" ){
                     alert("TU NÃO PODES BOTAR UM NÚMERO NESTA POSIÇÃO!");
                   } 


                    //A4
                   //Caso o jogador decida colocar um número na posição A4
                   if( posicao == "A4" || posicao == "a4" || posicao == "4A" || posicao == "4a" ){
                     a4 = prompt(" QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO A4? \n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( a4 != "cancelar" && a4 != "CANCELAR" && a4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( a4 == a1 || a4 == a2 || a4 == a3 || a4 == b4 || a4 == c4 || a4 == d4 || a4<1 || a4>4 || isNaN(a4) ){
                            a4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO A4:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( a4 == "cancelar" || a4 == "CANCELAR" || a4 == "Cancelar" ){ 
                              var canw = "s"
                              a4 = 4;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( a4 != a1 && a4 != a2 && a4 != a3 && a4 != b4 && a4 != c4 && a4 != d4 && 1<= a4 <=4 && a4!=(isNaN(a4)) && canw != "s"){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }            
                     }
                     if( a4 == "cancelar" || a4 == "CANCELAR" || a4 == "Cancelar" || canw == "s" ){ 
                       a4 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //B2
                   //Caso o jogador decida colocar um número na posição B2
                   if( posicao == "B2" || posicao == "b2" || posicao == "2B" || posicao == "2b" ){
                     b2 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO B2?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( b2 != "cancelar" && b2 != "CANCELAR" && b2 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( b2 == b1 || b2 == b3 || b2 == b4 || b2 == a2 || b2 == c2|| b2 == d2 || b2<1 || b2>4 || isNaN(b2)){
                            b2 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO B2:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( b2 == "cancelar" || b2 == "CANCELAR" || b2 == "Cancelar" ){ 
                              var canw = "s"
                              b2 = 4;  
                            }
                       }    
                       //Caso o jogador acerte o número
                       if( b2 != b1 && b2 != b3 && b2 != b4 && b2 != a2 && b2 != c2 && b2 != d2 && 1<= b2 <=4 && b2!=(isNaN(b2)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( b2 == "cancelar" || b2 == "CANCELAR" || b2 == "Cancelar" || canw == "s" ){ 
                       b2 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }            
                   }canw = "n"


                   //B3
                   //Caso o jogador decida colocar um número na posição B3
                   if( posicao == "B3" || posicao == "b3" || posicao == "3B" || posicao == "3b" ){
                     b3 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO B3?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( b3 != "cancelar" && b3 != "CANCELAR" && b3 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( b3 == b1 || b3 == b2 || b3 == b4 || b3 == a3 || b3 == c3 || b3 == d3 || b3<1 || b3>4 || isNaN(b3)){
                            b3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO B3:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( b3 == "cancelar" || b3 == "CANCELAR" || b3 == "Cancelar" ){ 
                              var canw = "s"
                              b3 = 3;  
                            }
                       }  
                       //Caso o jogador acerte o número
                       if( b3 != b1 && b3 != b2 && b3 != b4 && b3 != a3 && b3 != c3 && b3 != d3 && 1<= b3 <=4 && b3!=(isNaN(b3)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( b3 == "cancelar" || b3 == "CANCELAR" || b3 == "Cancelar" || canw == "s" ){ 
                       b3 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"


                   //C3
                   //Caso o jogador decida colocar um número na posição C3
                   if( posicao == "C3" || posicao == "c3" || posicao == "3C" || posicao == "3c" ){
                      c3 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO C3?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                      if( c3 != "cancelar" && c3 != "CANCELAR" && c3 != "Cancelar" ){
                        //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                        while( c3 == c1 || c3 == c2 || c3 == c4 || c3 == a3 || c3 == b3|| c3 == d3 || c3<1 || c3>4 || isNaN(c3)){
                             c3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO C3:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                             if( c3 == "cancelar" || c3 == "CANCELAR" || c3 == "Cancelar" ){ 
                               var canw = "s"
                               c3 = 4;  
                             }
                        }  
                        //Caso o jogador acerte o número
                        if( c3 != c1 && c3 != c2 && c3 != c4 && c3 != a3 && c3 != b3 && c3 != d3 && 1<= c3 <=4 && c3!=(isNaN(c3)) && canw != "s" ){
                          quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                        }
                      }
                      if( c3 == "cancelar" || c3 == "CANCELAR" || c3 == "Cancelar" || canw == "s" ){ 
                        c3 = " ";  
                        quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                      }
                   }canw = "n"


                   //C4
                   //Caso o jogador decida colocar um número na posição C4
                   if( posicao == "C4" || posicao == "c4" || posicao == "4C" || posicao == "4c" ){
                     c4 = prompt( " QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO  C4?\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                     if( c4 != "cancelar" && c4 != "CANCELAR" && c4 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( c4 == c1 || c4 == c2 || c4 == c3 || c4 == a4 || c4 == b4|| c4 == d4 || c4<1 || c4>4 || isNaN(c4)){
                            c4 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO C4:\n"+quadro+"\n*Podes digitar a palavra > cancelar, para mudar a posição desejada.");
                            if( c4 == "cancelar" || c4 == "CANCELAR" || c4 == "Cancelar" ){ 
                              var canw = "s"
                              c4 = 2;  
                            }
                       }
                       //Caso o jogador acerte o número
                       if( c4 != c1 && c4 != c2 && c4 != c3 && c4 != a4 && c4 != b4 && c4 != d4 && 1<= c4 <=4 && c4!=(isNaN(c4)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( c4 == "cancelar" || c4 == "CANCELAR" || c4 == "Cancelar" || canw == "s" ){ 
                       c4 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                     }
                   }canw = "n"                   



                   //D3
                   //Caso o jogador decida colocar um número na posição D3
                   if( posicao ==  "D3" || posicao ==  "d3" || posicao == "3D" || posicao == "3d" ){
                     d3 = prompt( "QUAL É O NÚMERO QUE TU DESEJAS COLOCAR NA POSIÇÃO D3?\n"+quadro);
                     if( d3 != "cancelar" && d3 != "CANCELAR" && d3 != "Cancelar" ){
                       //Caso o jogador bote um número igual a outro da mesma linha ou que seja maior que 4 e menor que 1 e NaN             
                       while( d3 == d1 || d3 == d2 || d3 == d4 || d3 == a3 || d3 == b3 || d3 == c3 || d3<1 || d3>4 || isNaN (d3)){
                            d3 = prompt( "DIGITE NOVAMENTE UM NÚMERO PARA A POSIÇÃO D3:\n"+quadro);
                            if( d3 == "cancelar" || d3 == "CANCELAR" || d3 == "Cancelar" ){ 
                              var canw = "s"
                              d3 = 1;  
                            }
                       } 
                       //Caso o jogador acerte o número
                       if( d3 != d1 && d3 != d2 && d3 != d4 && d3 != a3 && d3 != b3 && d3 != c3 && 1<= d3 <=4 && d3!=(isNaN (d3)) && canw != "s" ){
                         quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |";
                       }
                     }
                     if( d3 == "cancelar" || d3 == "CANCELAR" || d3 == "Cancelar" ){ 
                       d3 = " ";  
                       quadro = "__| A | B | C | D |\n1-| "+a1+" | "+b1+" | "+c1+" | "+d1+" |\n2-| "+a2+" | "+b2+" | "+c2+" | "+d2+" |\n3-| "+a3+" | "+b3+" | "+c3+" | "+d3+" |\n4-| "+a4+" | "+b4+" | "+c4+" | "+d4+" |"; 
                    }
                   }canw = "n"

        //    
              }
              if( sair != "s" ){
                alert("            PARABÉNS!\n   Você completou a fase 5!");
              }
         }
       }sair="n" 
       }
        voltar = prompt("Deseja voltar ao menu?\n(Responda s(Para sim) e N(Para não)");
       }voltar = "n"
       mov = 1;
     }  
}//while que roda o jogo


