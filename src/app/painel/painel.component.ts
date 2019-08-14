import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pedido} from '../shared/pedido'
import { OrdemPedidoService} from './ordemPedidoService'
import {AcompanhamentoComponent} from './acompanhamento/acompanhamento.component'
import { StopWatchComponent} from './acompanhamento/stopwatch.component';

@Component({
    selector:'painel',
    templateUrl: './painel.component.html',
    styleUrls:['./painel.component.css'],
    providers: [ OrdemPedidoService]

})

export class PainelComponent implements OnInit {
    public nome:string =''
    public end:string =''
    public contato:string=''
    public pedido:string=''
    public teste:Pedido;
    public myNumber : number = 5; 
    constructor(private ordemPedidoService: OrdemPedidoService) {}
    public criarPedido:boolean=false;

     public Pedido: Pedido = new Pedido('','','','')

    ngOnInit(){
        console.log(this.Pedido)
     
    }

    
    atualizaNome(nome: Event):void {
        this.nome=(<HTMLInputElement>nome.target).value
          console.log(this.nome)
       
    }

    atualizaEnd(end: Event):void {
        this.end=(<HTMLInputElement>end.target).value
       console.log(this.end)
       
    }

    atualizaContato(contato: Event):void {
        this.contato=(<HTMLInputElement>contato.target).value
       console.log(this.contato)
       
    }

    atualizaPedido(pedido: Event):void {
        this.pedido=(<HTMLInputElement>pedido.target).value
       console.log(this.pedido)
       
    }

    public gerarPedido():void{
         
        this.Pedido.end =this.end
        this.Pedido.nome= this.nome
        this.Pedido.contato= this.contato
        this.Pedido.pedido= this.pedido

       this.ordemPedidoService.efetivarPedido(this.Pedido)
   
      
    }

    gerarDiv():void{
        this.criarPedido=true;
      }
  
}
