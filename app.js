import { WebUSB } from 'usb';

(async () => {
    const customWebUSB = new WebUSB({
        // This function can return a promise which allows a UI to be displayed if required
        devicesFound: devices => devices.find(device => device.productName === 'LUXAFOR FLAG')
    });

    // Returns device based on injected 'devicesFound' function
    const device = await customWebUSB.requestDevice({
        filters: [{}]
    })

    console.log(device); // WebUSB device
})();