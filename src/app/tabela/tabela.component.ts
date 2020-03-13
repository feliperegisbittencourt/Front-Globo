import { EntradaDadosService, User } from './../entrada-dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  index: number;
  qtdCadast: any[] = [];
  par$: boolean = true;
  impar$: boolean = false;
  hov$: boolean[] = [false, false, false, false, false, false];
  colorActive$: string[] = ["green", "green", "green", "green", "green", "green"];

  constructor(private entradaService: EntradaDadosService) { 
    this.index = 0;
    entradaService.listUser().subscribe(
      (dados: User[]) => {

        let DataSet = { data:[{user: "", email: "", inclusion_date: "", change_date: "", rules: "", status: ""}]};

        Array.from(dados).forEach(x => {
          if(this.index != 0){
            DataSet.data.push({user: "", email: "", inclusion_date: "", change_date: "", rules: "", status: ""});
          }
          DataSet.data[this.index].user = x.user;
          DataSet.data[this.index].email = x.email;
          DataSet.data[this.index].inclusion_date = x.inclusion_date;
          DataSet.data[this.index].change_date = x.change_date;
          DataSet.data[this.index].rules = x.rules;
          DataSet.data[this.index].status = x.status;

          if(this.index %2 ==0){
            this.par$ = true;
            this.impar$ = false;
            console.log(this.index,  ">>>" , this.par$);
          }else{
            this.par$ = false;
            this.impar$ = true;
            console.log(this.index, ">>>", this.par$);
          }
          

          this.qtdCadast[this.index] = DataSet.data[this.index];
          console.log(this.qtdCadast[this.index].user);
          this.index ++;
        });
      }
    )
  }

  over(index){
    this.colorActive$[index] = "#d3d3d3";
    this.hov$[index] = true;
  }

  leave(index){
    this.colorActive$[index] = "green";
    this.hov$[index] = false;
  }

  ngOnInit() {
  }

}
