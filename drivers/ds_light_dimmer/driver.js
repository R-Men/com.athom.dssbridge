'use strict';

const Homey = require('homey');

class DSLightDimmerDriver extends Homey.Driver {
  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('DSLightDimmerDriver has been initialized');
  }

  onPairListDevices() {
    
  }
  


}

module.exports = DSLightDimmerDriver;