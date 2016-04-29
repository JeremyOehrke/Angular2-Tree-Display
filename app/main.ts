import {bootstrap} from 'angular2/platform/browser';
import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'iplist',
    templateUrl: 'partials/iplist.html'
})
class IpListComponent{
    isHidden: boolean = false;
    @Input() subnetList: Object[];

    constructor(){}

    toggleHidden(){
        this.isHidden = !this.isHidden
    }
}

@Component({
	selector: 'ipTree',
	templateUrl: 'partials/iptree.html',
    directives: [IpListComponent, FORM_DIRECTIVES]
})
class IpTreeComponent{
   ipList: Object[] = [];
    searchedList: Object[] = [];
   ipMap: Object{} = {};
   searchString: string;
   
   constructor(){}
   
   fetchIpList(){
      this.ipList = ['1.1.1.1','1.1.1.2','2.1.1.1','3.1.1.1','4.1.1.1'];
      this._buildMap(this.ipList);
   }
   
   _buildMap(ipList: Object[]){
        this.ipMap = {};
       for (var ip of ipList){
         var subnet = ip.substring(0,ip.lastIndexOf(".")).concat(".0");
         if (!this.ipMap[subnet]){
            this.ipMap[subnet] = [ip];
         } else {
            this.ipMap[subnet].push(ip);
         }
      } 
      //console.log(JSON.stringify(this.ipMap));
   }
   
   _generateKeys(obj: any){
      return Object.keys(obj);
   }

   _filterList(search: string){
        this.searchedList = [];
        this.searchedList = this.ipList.filter(function(item, index, array){
            return !item.search(search);
        });
        this._buildMap(this.searchedList);
    }
}



bootstrap(IpTreeComponent);

