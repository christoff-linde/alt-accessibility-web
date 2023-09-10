/* eslint-disable no-undef */
'use client';
export const initAccelerometer = (callback: Function) => {
  const accelerometer = new Accelerometer({ frequency: 60 });
  accelerometer.addEventListener('reading', () => {
    callback({
      x: accelerometer.x ?? 0,
      y: accelerometer.y ?? 0,
      z: accelerometer.z ?? 0,
    });
  });
  accelerometer.addEventListener('error', (event) => {
    console.warn(event.error.name, event.error.message);
  });
  return accelerometer;
};
export const initGyroscope = (callback: Function) => {
  const gyroscope = new Gyroscope({ frequency: 60 });
  gyroscope.addEventListener('reading', () => {
    callback({
      x: gyroscope.x ?? 0,
      y: gyroscope.y ?? 0,
      z: gyroscope.z ?? 0,
    });
  });
  gyroscope.addEventListener('error', (event) => {
    console.warn(event.error.name, event.error.message);
  });
  return gyroscope;
};
export const initAmbientLightSensor = (callback: Function) => {
  const lightSensor = new AmbientLightSensor();
  lightSensor.addEventListener('reading', () => {
    callback(lightSensor?.illuminance ?? 0);
  });
  lightSensor.addEventListener('error', (event) => {
    console.warn(event.error.name, event.error.message);
  });
  return lightSensor;
};
export const initGravitySensor = (callback: Function) => {
  const gravitySensor = new GravitySensor({ frequency: 60 });
  gravitySensor.addEventListener('reading', () => {
    callback({
      x: gravitySensor.x ?? 0,
      y: gravitySensor.y ?? 0,
      z: gravitySensor.z ?? 0,
    });
  });
  gravitySensor.addEventListener('error', (event) => {
    console.warn(event.error.name, event.error.message);
  });
  return gravitySensor;
};
export const initAbsoluteOrientationSensor = (callback: Function) => {
  const absoluteOrientationSensor = new AbsoluteOrientationSensor({
    frequency: 60,
  });
  absoluteOrientationSensor.addEventListener('reading', () => {
    if (absoluteOrientationSensor.quaternion) {
      callback({
        x: absoluteOrientationSensor.quaternion[0] ?? 0,
        y: absoluteOrientationSensor.quaternion[1] ?? 0,
        z: absoluteOrientationSensor.quaternion[2] ?? 0,
        w: absoluteOrientationSensor.quaternion[3] ?? 0,
      });
    }
  });
  absoluteOrientationSensor.addEventListener('error', (event) => {
    console.warn(event.error.name, event.error.message);
  });
  return absoluteOrientationSensor;
};
