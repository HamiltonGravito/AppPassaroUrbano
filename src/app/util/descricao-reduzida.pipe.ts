//Essa classe cria um PIPE que limita uma string a 15 caracteres e concatena com '...' caso essa string for maior que 15 caracters
import { Pipe, PipeTransform } from '@angular/core'

//Decora a classe como um PIPE para que o angular entenda e trabalhe de forma diferente com esta classe 
@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

    transform(texto: string, iniciarEm: number, truncarEm: number): string {
        if(texto.length > truncarEm) {
            return texto.substr(iniciarEm, truncarEm) + "...";
        }

        return texto;
    }
}