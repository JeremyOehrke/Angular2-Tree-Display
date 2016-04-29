import {Component, EventEmitter, OnInit, OnChanges, Output} from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, Validators } from 'angular2/common';

@Component({
	selector: 'ipsearch',
	templateUrl: 'components/ipsearch.component.html',

	directives: [FORM_DIRECTIVES]
})
export class IpSearchComponent{
	@Output() searchChange: EventEmitter = new EventEmitter();
	searchForm: any;
	errorMessage: string;
   
	constructor(private _formBuilder: FormBuilder) {
		this.searchForm = this._formBuilder.group({
			'search': ['', Validators.compose([searchValidatorService.ipValidator])]
		});
	}

	onSubmit(value: string){
		if(this.searchForm.status == "INVALID" ){
			this.errorMessage = "Invalid IP Address.";
		}
		else {
			this.errorMessage = "";
			this.searchChange.emit(this.searchForm.controls.search.value);
		}
	}
	
}

class searchValidatorService{

	static ipValidator(control){
		if (control.value == "") { return null;}
		if (control.value.match(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){0,3}$/)) {
            return null;
        } else {
            return {'invalidIp':true};
        }
	}
}