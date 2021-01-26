import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'wakala-sorting-form',
  templateUrl: './sorting-form.component.html',
  styleUrls: ['./sorting-form.component.css']
})
export class SortingFormComponent implements OnInit {
  @Input() FormTemplate: any;
  searchFormGroup: FormGroup;
  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    const group = {};
    this.FormTemplate.forEach((item: any) => {
      if (item.control === 'rangePicker') {
        group[item.name] = new FormGroup({
          start: new FormControl({ value: item.startDate, disabled: item.disabled }),
          end: new FormControl({ value: item.endDate, disabled: item.disabled })
        });
      }
      else { group[item.name] = new FormControl({ value: item.defaultValue, disabled: item.disabled }); }
    });
    this.searchFormGroup = new FormGroup(group);
    const selectArray = this.FormTemplate.filter((item: any) => item.control === 'select');
    selectArray.forEach((item: any) => {
      const defaultValue = item.options.find((option: any) => option.default);
      if (defaultValue) { this.searchFormGroup.get(item.name).setValue(defaultValue); }
    });
  }
  get isMobile() {
    return this.breakpointObserver.isMatched('(max-width: 767px)');
  }
  onSubmit() {
    console.log(this.searchFormGroup.getRawValue());
  }



  test() {
    console.log(this.searchFormGroup.controls);
  }
  test2(asd) {
    console.log(asd);
  }
}
