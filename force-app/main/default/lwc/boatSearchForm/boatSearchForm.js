import { LightningElement, wire } from 'lwc';
import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';

export default class BoatSearchForm extends LightningElement {
  selectedBoatTypeId = '';

  // Private
  error = undefined;

  searchOptions;

  // Wire a custom Apex Method
  @wire(getBoatTypes)
  wiredBoatTypes({ error, data }) {
    if (data) {
      this.searchOptions = data.map(type => ({
        label: type.Name,
        value: type.Id
      }));
      console.log('search options ::: ' + this.searchOptions);
      this.error = undefined;
    } else if (error) {
      this.searchOptions = undefined;
      this.error = error;
      console.log('error ::: ' + this.error);
    }
  }

  // Fires event that the search option has changed.
  // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
  handSearchOptionChange(event) {
    // Create the const searchEvent
    // searchEvent must be the new custom event search
    console.log(JSON.stringify(event));
    searchEvent;
    this.dispatchEvent(searchEvent);
  }
}
