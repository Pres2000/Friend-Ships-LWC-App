import { LightningElement, wire } from 'lwc';

const SUCCESS_TITLE   = 'Success';
const MESSAGE_SHIP_IT = 'Ship it!';
const SUCCESS_VARIANT = 'success';
const ERROR_TITLE     = 'Error';
const ERROR_VARIANT   = 'error';
export default class BoatSearchResults extends LightningElement {

  selectedBoatId;
  columns = [];
  boatTypeId = '';
  boats;
  isLoading = false;

  // wired message context;
  messageContext;

  //wired getBoats method
  wiredBoats(results) { }

  // this public function must refresh the boats asynchronously
  // uses notifyLoading
  refresh() { }

  // this function must update selectedBoatId and call sendMessageService
  updateSelectedTile() { }

  // publishes the selected boat Id on the BoatMC
  sendMessageService(boatId) {
    // explicitly pass boatId to the parameter recordId
  }

  // the handleSave method must save the changes in the Boat Editor
  // passing the updated fields from draftValues to the
  // Apex method updateBoatList(Object data).
  // Show a toast message with the title
  // clear lightning-datatable draft values
  handleSave(event) {
    // notify loading
    const updatedFields = event.detail.draftValues;
    // Update the records via Apex
    updateBoatList({ data: updatedFields })
      .then(() => { })
      .catch(error => { })
      .finally(() => { });
  }

  // Check the current value of isLoading before dispatching the doneLoading or loading custom event
  notifyLoading(isLoading) { }
}