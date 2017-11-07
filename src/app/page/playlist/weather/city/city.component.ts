import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

import { Suggestion } from '../../../../entity/suggestion';
import { SuggestionService } from '../../../../service/suggestion.service';

@Component({
  templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {
  formGroup1: FormGroup;

  loading: boolean;

  suggestion: Suggestion;

  constructor(
    private formBuilder: FormBuilder,
    private suggestionService: SuggestionService
  ) {
    this.loading = false;
  }

  ngOnInit() {
    this.formGroup1 = this.formBuilder.group({
      cityName: ['Piracicaba', [Validators.required, Validators.maxLength(50)]],
      countryCode: ['br', [Validators.minLength(2), Validators.maxLength(2)]]
    });
  }

  isFieldValueValid1(field: string) {
    return (
      !this.formGroup1.get(field).valid &&
      (this.formGroup1.get(field).touched || this.formGroup1.get(field).dirty)
    );
  }

  search() {
    console.log('search started');
    this.loading = true;
    const formGroup1Value = this.formGroup1.value;
    this.suggestionService
      .playlistWeatherCity$(
        formGroup1Value.cityName as string,
        formGroup1Value.countryCode as string
      )
      .subscribe((suggestion: Suggestion) => {
        this.suggestion = suggestion;
        this.loading = false;
      });
    console.log('search finished');
  }

  reset() {
    console.log('reset started');
    console.log('reset finished');
  }

  get inputCityName() {
    return this.formGroup1.get('cityName');
  }
  get inputCountryCode() {
    return this.formGroup1.get('countryCode');
  }
}
