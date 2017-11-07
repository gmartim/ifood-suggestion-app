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
  templateUrl: './lat-lon.component.html'
})
export class LatLonComponent implements OnInit {
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
      latitude: ['-22.73', [Validators.required]],
      longitude: ['-47.65', [Validators.required]]
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
      .playlistWeatherLatAndLon$(
        formGroup1Value.latitude as number,
        formGroup1Value.longitude as number
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

  get inputLatitude() {
    return this.formGroup1.get('latitude');
  }
  get inputLongitude() {
    return this.formGroup1.get('longitude');
  }
}
