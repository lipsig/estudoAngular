import { Component } from '@angular/core';
import { OrdemPedidoService} from './painel/ordemPedidoService';
import { Pedido } from './shared/pedido';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ OrdemPedidoService]
})
export class AppComponent {
constructor(private servicoPedido: OrdemPedidoService){

}
  title = 'app2';
  criarPedido:boolean=false;


alertarBotao(){
  alert(this.servicoPedido.getPe())
}

}
