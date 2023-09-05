/* eslint-disable no-undef */
'use client';

import { useMemo, useState } from 'react';

const Sensors = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [gyroAcceleration, setGyroAcceleration] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [lightLevel, setLightLevel] = useState(0);

  navigator.permissions.query({ name: 'accelerometer' }).then((result) => {
    if (result.state === 'denied') {
      console.log('Permission to use accelerometer sensor is denied.');
      return;
    } else if (result.state === 'prompt') {
      console.log('Permission to use accelerometer sensor is prompt.');
      return;
    }
    // Use the sensor.
  });

  const acl = new Accelerometer({ frequency: 60 });
  acl.addEventListener('reading', () => {
    setAcceleration({ x: acl.x ?? 0, y: acl.y ?? 0, z: acl.z ?? 0 });
  });

  let lightSensor: AmbientLightSensor | null = null;
  if ('AmbientLightSensor' in window) {
    lightSensor = new AmbientLightSensor();
    lightSensor.addEventListener('reading', () => {
      return setLightLevel(lightSensor?.illuminance ?? 0);
    });
    lightSensor.addEventListener('error', (event) => {
      console.log(event.error.name, event.error.message);
    });
  }

  let gyroscope = new Gyroscope({ frequency: 60 });
  gyroscope.addEventListener('reading', () => {
    setGyroAcceleration({
      x: gyroscope.x ?? 0,
      y: gyroscope.y ?? 0,
      z: gyroscope.z ?? 0,
    });
  });

  useMemo(() => {
    acl.start();
    if (lightSensor) lightSensor.start();
    gyroscope.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <h2 className='text-xl'>Errors</h2>
      </div>
      <h2 className='text-xl'>Sensor Readings</h2>
      <div className='mt-1 rounded-md p-2 ring-1 ring-cyan-200/20'>
        <p className='mb-1 ml-1 text-lg'>Accelerometer</p>
        <div className='grid w-full grid-cols-3 gap-2'>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {acceleration.x.toPrecision(4)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {acceleration.y.toPrecision(4)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {acceleration.z.toPrecision(4)}
          </p>
        </div>

        <p className='mb-1 ml-1 text-lg'>Ambient Light Sensor</p>
        <div className='grid w-full grid-cols-3 gap-2'>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {lightLevel.toPrecision(4)}
          </p>
        </div>
        <p className='mb-1 ml-1 text-lg'>Gyroscope</p>
        <div className='grid w-full grid-cols-3 gap-2'>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gyroAcceleration.x.toPrecision(4)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gyroAcceleration.y.toPrecision(4)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gyroAcceleration.z.toPrecision(4)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sensors;
