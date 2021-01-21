'use strict';

const Homey = require('homey');

class DSLightDimmerDriver extends Homey.Driver {
  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('DSLightDimmerDriver has been initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    return [
      {
        name: 'DS Light Dimmer',
        data: {
          id: 'ds_light_dimmer',
        },
        /*store: {
          uid: '',
        },*/
      },
    ];
  }

  onRepair( socket, device ) {
    // Argument socket is an EventEmitter, similar to Driver.onPair
    // Argument device is a Homey.Device that's being repaired

    socket.on('my_event', ( data, callback ) => {
      // Your code
      callback();
    });

    socket.on('disconnect', () => {
      // Cleanup
    })

  }


}

module.exports = DSLightDimmerDriver;