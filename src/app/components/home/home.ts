import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  nomeProduto: string = "Curso de angular";

    anuncio: string = `O ${this.nomeProduto} está em promoção`;
    idProduto: number = 123;
    precoProduto: number = 2.59;
    promocao: boolean = true;







  testeVariaveis(): void {


    //variáveis de string com concatenção
    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção';
    console.log('nome do Produto: ', this.nomeProduto);

    console.log('anuncio: ', this.anuncio);

    console.log('idProduto: ', this.idProduto);

     console.log('precoProduto: ', this.precoProduto);

     console.log('promocao: ', this.promocao);

    //escopo de variáveis dentro do código

    var variavel;
    let variavel2;
    const variavel3 = 2;

    var idade = 10;

    function imprimeIdade() { 
      var idade = 50;
      console.log('Minha idade é:', idade);
      
    }
    imprimeIdade();

    function imprimeIdade2(){

      for (let idade = 30; idade <= 40; idade++){
          console.log('Idade dentro do for: ', idade);


      }

        console.log('Idade fora do for: ', idade);

    }
    imprimeIdade2();

  /*
  var variavel4 = 0;
  var variavel5 = 10;
  console.log('variável',variavel);
  function funcao() {
    var outra_variavel = 20;
    var outra_variavel = 30;
    console.log('outra variável:', outra_variavel);
    
    }
  
  funcao();
*/

/*
let variavel4= 0;
  let variavel5 = 10;
  console.log('variável',variavel);
  function funcao() {
    let outra_variavel = 20;
    let outra_variavel1 = 30;
    console.log('outra variável:', outra_variavel);
    
    }
  
  funcao();

*/

/*

    var a = 10;
    let b = 20;
    function bar() {
      var a = 30;
      let b = 40;
      if(true) {
        var a = 50;
        let b = 60;
        console.log('Variável a dentro do if', a);
        console.log('Variável b dentro do if', b);

      }
        console.log('Variável a dentro do if', a);
        console.log('Variável b dentro do if', a);
    }
  bar();
  console.log('Variável a dentro do if', a);
  console.log('Variável b dentro do if', a);

  }
 

*/
/*
let a = 1;
    function bar() {
      console.log ('variável a:', a);
      let b = 2;
      if(true) {
        let c = 3;
        let a = 4;
        console.log('variável a dentro do if: ', a)
        console.log('variável b dentro do if: ', b)
        console.log('variável c dentro do if: ', c)
      }
      console.log('variável a fora do if: ', a);
      console.log('variável a fora do if: ', b);
      //console.log(c);
    }
    bar();
*/
 var a = 5;
 var b = 10;
 if(a = 5) {
  let a = 4;
  var b = 1;
  console.log('Variável a dentro do if: ', a);
  console.log('Variável b dentro do if: ', b);
 }
   console.log('Variável a fora do if: ', a);
  console.log('Variável b fora do if: ', b);




  }
}
