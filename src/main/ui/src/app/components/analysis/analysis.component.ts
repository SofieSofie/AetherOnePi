import { Component, OnInit } from '@angular/core';
import {Analysis, RateObject} from "../../domains/Analysis";
import {AetherOnePiService} from "../../services/aether-one-pi.service";
import {BroadcastRequest} from "../../domains/BroadcastRequest";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  analysis:Analysis = new Analysis()
  rates:string[] = []

  constructor(private aetherOnePiService:AetherOnePiService) { }

  ngOnInit(): void {
    this.aetherOnePiService.getAnalysis().subscribe( a => this.analysis = a)
    this.aetherOnePiService.getRates().subscribe( value => this.rates = value)
  }

  broadcast(r: RateObject) {
    let broadcastRequest = new BroadcastRequest();
    broadcastRequest.signature = r.nameOrRate;
    broadcastRequest.seconds = r.gv;
    this.aetherOnePiService.broadcast(broadcastRequest).subscribe(()=>{
      console.log("broadcasting")
    })
  }
}
