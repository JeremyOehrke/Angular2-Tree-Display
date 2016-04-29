import {Component, Input} from 'angular2/core';

@Component({
    selector: 'iplist',
    templateUrl: 'components/iplist.component.html'
})
export class IpListComponent{
    isHidden: boolean = false;
    @Input() subnetList: Object[];

    constructor(){}

    toggleHidden(){
        this.isHidden = !this.isHidden
    }
	
	getHidden(){
		return this.isHidden;
	}
}