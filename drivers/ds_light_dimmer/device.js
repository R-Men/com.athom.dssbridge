'use strict';

const Homey = require('homey');

class DSLightDimmerDevice extends Homey.Device {
  /**
   * onInit is called when the device is initialized.
   */
  async onInit() {
    this.log('DSLightDimmerDevice has been initialized');
		this.log('Name:', this.getName());
    this.log('Class:', this.getClass());
    
  
		// register a capability listener
		this.registerCapabilityListener('onoff', this.onCapabilityOnoff.bind(this));
		this.registerCapabilityListener('dim', this.onCapabilityDim.bind(this));
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('DSLightDimmerDevice has been added');
  }

  // this method is called when the Device has requested a state change (turned on or off)
  async onCapabilityOnoff( value, opts ) {
    // await setMyDeviceState({ on: value });
    // throw new Error('Switching the device failed!');
  }
  
  // this method is called when the Device has requested a dimming change 
  async onCapabilityDim( value, opts ) {
    // await setMyDeviceState({ on: value });
    // throw new Error('Switching the device failed!');
  }
  
  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   *
  async onSettings({ oldSettings, newSettings, changedKeys }) {
    this.log('DSLightDimmerDevice settings where changed');
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   *
  async onRenamed(name) {
    this.log('DSLightDimmerDevice was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   *
  async onDeleted() {
    this.log('DSLightDimmerDevice has been deleted');
  }

  */
}

module.exports = DSLightDimmerDevice;
