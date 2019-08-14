
import { Pedido} from '../shared/pedido'
import { Injectable } from '@angular/core';



export class OrdemPedidoService {
    Global:Pedido;

    public efetivarPedido(pedido: Pedido) :void {
       this.Global=pedido
       console.log(this.Global)

     
    }

    public getPe(){
        return this.Global
    }
}