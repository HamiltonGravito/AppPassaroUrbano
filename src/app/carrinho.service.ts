import { ItemCarrinho } from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model';

class CarrinhoService {
    //Coresponde à um array do modelo ItemCarrinho
    public itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens
    }

    public incluirItem(oferta: Oferta): void {
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )
        //Verificar se o item já não existe dentro do array de itens caso exista adiciona 1 ao item, caso não adiciona o item a página;
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
        if(itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1;
        } else {
            this.itens.push(itemCarrinho);
        }

    }

    public totalCarrinhoCompras(): number {
        let total: number = 0;
        this.itens.map((item: ItemCarrinho) => {
            total = total + (item.valor * item.quantidade);
        })

        return total;
    }
}

export { CarrinhoService }