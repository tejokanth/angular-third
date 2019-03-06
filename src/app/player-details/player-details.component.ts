import { Component, OnInit, Input } from '@angular/core';
import { PlaydetServicesService } from '../playdet-services.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  public enableLoad;
  public enableDet;
  public errEnable;
  public player=[];
  constructor(public playerServ:PlaydetServicesService) { }

  ngOnInit() { }
  getData(){
    this.enableLoad=true;
    this.playerServ.getPlayers()
        .subscribe(data=>this.player=data,()=>this.errEnable=true,()=>this.enableLoad=false);    
    this.enableDet=true;
  }
}
