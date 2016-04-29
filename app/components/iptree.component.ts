import {Component, Input, CORE_DIRECTIVES} from 'angular2/core';
import {IpListComponent} from './iplist.component.ts';
import {IpSearchComponent} from './ipsearch.component.ts';
import {NgClass} from 'angular2/common';

@Component({
	selector: 'ipTree',
	templateUrl: 'components/iptree.component.html',
    directives: [IpListComponent, IpSearchComponent, NgClass]
})
export class IpTreeComponent{
	ipList: Object[] = [];
	ipMap: Object{} = {};
	search: string = "";
   
	constructor(){}

	fetchIpList(){
		this.ipList = ['192.168.1.1','192.168.1.2','192.168.1.3','192.168.1.4','192.168.1.5','192.168.1.6','192.168.1.7','192.168.1.8','192.168.1.9','192.168.1.10','192.168.1.11','192.168.1.12','192.168.1.13','54.23.12.2','54.23.12.3','54.23.12.4','54.23.12.5','54.23.12.6','54.23.12.7','54.23.12.8','54.23.12.9','54.23.12.10','54.23.12.11','54.23.12.12','54.23.12.13','54.23.12.14','54.23.12.15','54.23.12.16','54.23.12.17','54.23.12.18','54.23.12.19','54.23.12.20','54.24.15.3','54.24.15.4','54.24.15.5','54.24.15.6','54.24.15.7','54.24.15.8','54.24.15.9','54.24.15.10','54.24.15.11','54.24.15.12','54.24.15.13','54.24.15.14','54.24.15.15','54.24.15.16','54.24.15.17','54.24.15.18','54.24.15.19','54.24.15.20','54.24.15.21','10.10.10.1','10.10.10.2','10.10.10.3','10.10.10.4','10.10.10.5','10.10.10.6','10.10.10.7','10.10.10.8','10.10.10.9','10.10.10.10','10.10.10.11','10.10.10.12','10.10.10.13','10.10.10.14','10.10.10.15','10.10.10.16','10.10.10.17','10.10.10.18','10.10.10.19','10.10.10.20','10.10.10.21','10.10.10.22','10.10.10.23','10.10.10.24','10.10.10.25','10.10.10.26','10.10.10.27','10.10.10.28','10.10.10.29','10.10.10.30','85.63.24.1','85.63.24.2','85.63.24.3','85.63.24.4','85.63.24.5','85.63.24.6','85.63.24.7','85.63.24.8','85.63.25.9','85.63.25.10','85.63.25.11','85.63.25.12','85.63.25.13','85.63.25.14','85.63.25.15','85.63.25.16','85.63.25.17','85.63.25.18','85.63.25.19'];
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
	}

	generateKeys(map: any){
	  return Object.keys(map);
	}

	filterList(search: string){
		var searchedList = [];
		searchedList = this.ipList.filter(function(item, index, array){
			return !item.search(search);
		});
		this._buildMap(searchedList);
	}
}