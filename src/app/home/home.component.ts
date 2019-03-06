import { Component, OnInit, Output } from '@angular/core';
import { PlaydetServicesService } from '../playdet-services.service';
import { EventEmitter } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private send:PlaydetServicesService) { }
  public loginEnable=(!this.send.loggedStatus);
  public logoutEnable=this.send.loggedStatus;

  ngOnInit() { }
  login(){
    this.send.loggedStatus=true;
    this.loginEnable=false;
    this.logoutEnable=true;
  }
  logout(){
    this.send.loggedStatus=false;
    this.loginEnable=true;
    this.logoutEnable=false;
  }
}
