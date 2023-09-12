import { LightningElement } from 'lwc';
import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';

export default class BoatSearchForm extends LightningElement {
  selectedBoatTypeId = '';

  // Private
  error = undefined;

  searchOptions;

  // Wire a custom Apex Method
  boatTypes({ error, data }) {
    if (data) {
      this.searchOptions = data.map(type => {
        // TODO: complete the logic
      });
    } else if (error) {
      this.searchOptions = undefined;
      this.error = error;
    }
  }

  // Fires event that the search option has changed.
  // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
  handSearchOptionChange(event) {
    // Create the const searchEvent
    // searchEvent must be the new custom event search
    searchEvent;
    this.dispatchEvent(searchEvent);
  }
}
