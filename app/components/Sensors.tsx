/* eslint-disable no-undef */
'use client';

import { useCallback, useState } from 'react';
import CustomButton from './Button';

const initAccelerometer = (callback: Function) => {
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

const initGyroscope = (callback: Function) => {
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

const initAmbientLightSensor = (callback: Function) => {
  const lightSensor = new AmbientLightSensor();
  lightSensor.addEventListener('reading', () => {
    callback(lightSensor?.illuminance ?? 0);
  });
  lightSensor.addEventListener('error', (event) => {
    console.warn(event.error.name, event.error.message);
  });
  return lightSensor;
};

const initRelativeOrientationSensor = (callback: Function) => {
  const relativeOrientationSensor = new RelativeOrientationSensor({
    frequency: 60,
  });
  relativeOrientationSensor.addEventListener('reading', () => {
    if (relativeOrientationSensor.quaternion) {
      callback({
        x: relativeOrientationSensor.quaternion[0] ?? 0,
        y: relativeOrientationSensor.quaternion[1] ?? 0,
        z: relativeOrientationSensor.quaternion[2] ?? 0,
        w: relativeOrientationSensor.quaternion[3] ?? 0,
      });
    }
  });
  relativeOrientationSensor.addEventListener('error', (event) => {
    console.warn(event.error.name, event.error.message);
  });
  return relativeOrientationSensor;
};

const Sensors = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [gyroAcceleration, setGyroAcceleration] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [lightLevel, setLightLevel] = useState(0);
  const [orientation, setOrientation] = useState({ x: 0, y: 0, z: 0, w: 0 });

  const accelerometer = initAccelerometer(setAcceleration);
  const gyroscope = initGyroscope(setGyroAcceleration);
  const lightSensor = initAmbientLightSensor(setLightLevel);
  const relativeOrientationSensor =
    initRelativeOrientationSensor(setOrientation);

  const handleSensorActivate = useCallback(() => {
    accelerometer.start();
    lightSensor.start();
    gyroscope.start();
    relativeOrientationSensor.start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSensorDeactivate = useCallback(() => {
    accelerometer.stop();
    lightSensor.stop();
    gyroscope.stop();
    relativeOrientationSensor.stop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2 className='my-2 text-xl'>Sensor Readings</h2>
      <div className='mt-1 rounded-md p-2 ring-1 ring-cyan-200/20'>
        <p className='mb-1 ml-1 text-lg'>Accelerometer</p>
        <div className='grid w-full grid-cols-3 gap-2'>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {acceleration.x.toPrecision(3)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {acceleration.y.toPrecision(3)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {acceleration.z.toPrecision(3)}
          </p>
        </div>
        <p className='mb-1 ml-1 text-lg'>Ambient Light Sensor</p>
        <div className='grid w-full grid-cols-3 gap-2'>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {lightLevel.toPrecision(3)}
          </p>
        </div>
        <p className='mb-1 ml-1 text-lg'>Gyroscope</p>
        <div className='grid w-full grid-cols-3 gap-2'>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gyroAcceleration.x.toPrecision(3)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gyroAcceleration.y.toPrecision(3)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gyroAcceleration.z.toPrecision(3)}
          </p>
        </div>
        <p className='mb-1 ml-1 text-lg'>Relative Orientation</p>
        <div className='grid w-full grid-cols-3 gap-2'>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {orientation.x.toPrecision(3)}
          </p>
          <p className='rounded-md bg-red-600/10 p-2 ring-1 ring-inset ring-red-200/10'>
            {orientation.y.toPrecision(3)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {orientation.z.toPrecision(3)}
          </p>
        </div>
      </div>
      <div className='mt-4 flex gap-4'>
        <CustomButton onClick={handleSensorActivate}>Activate</CustomButton>
        <CustomButton onClick={handleSensorDeactivate}>Deactivate</CustomButton>
      </div>
    </div>
  );
};

export default Sensors;
