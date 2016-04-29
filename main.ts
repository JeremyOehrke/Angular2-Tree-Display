import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Pipe, PipeTransform} from 'angular2/core';

@Component({
	selector: 'ipTree',
	templateUrl: 'partials/hello.html'
})


class HelloWorldComponent{
   ipList: Object[] = [];
   ipMap: Object{} = {};
   
   constructor(){
      
   }
   
   fetchIpList(){
      this.ipList = ['1.1.1.1','1.1.1.2','2.1.1.1','3.1.1.1','4.1.1.1'];
      this._buildMap(this.ipList);
   }
   
   _buildMap(ipList: Object[]){
       for (var ip of ipList){
         var subnet = ip.substring(0,ip.lastIndexOf(".")).concat(".0");
         if (!this.ipMap[subnet]){
            this.ipMap[subnet] = [ip];
         } else {
            this.ipMap[subnet].push(ip);
         }
      } 
      console.log(JSON.stringify(this.ipMap));
   }
   
   _generateKeys(obj: any){
      return Object.keys(obj);
   }
   
   toggleHide(id: number){
      console.log("Toggling Hide ".concat(id));
   }
   
   
   
   
}
bootstrap(HelloWorldComponent);