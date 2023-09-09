/* eslint-disable no-undef */
'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { setOrientation } from '../store/themeSlice';
import { LayoutOrientation } from '../types';
import CustomButton from './Button';
import { useAppDispatch } from './Navigation';

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

const initAbsoluteOrientationSensor = (callback: Function) => {
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

const Sensors = () => {
  const dispatch = useAppDispatch();

  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });
  const [gyroAcceleration, setGyroAcceleration] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [lightLevel, setLightLevel] = useState(0);
  const [absoluteOrientation, setAbsoluteOrientation] = useState({
    x: 0,
    y: 0,
    z: 0,
    w: 0,
  });

  const [isActive, setIsActive] = useState(false);
  const [colorString, setColorString] = useState('bg-red-600/10');

  const accelerometer = initAccelerometer(setAcceleration);
  const gyroscope = initGyroscope(setGyroAcceleration);
  const lightSensor = initAmbientLightSensor(setLightLevel);
  const relativeOrientationSensor = initAbsoluteOrientationSensor(
    setAbsoluteOrientation
  );

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

    setAbsoluteOrientation({
      x: 0,
      y: 0,
      z: 0,
      w: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (absoluteOrientation.y > 0.5) {
      dispatch(setOrientation(LayoutOrientation.LEFT));
      setTimeout(() => {
        setIsActive(false);
      }, 500);
    } else if (absoluteOrientation.y < -0.5) {
      dispatch(setOrientation(LayoutOrientation.RIGHT));
      setTimeout(() => {
        setIsActive(false);
      }, 500);
    }
  }, [absoluteOrientation]);

  useMemo(() => {
    if (isActive) {
      setColorString('bg-green-600/10 ring-green-200/10 text-green-500');
      handleSensorActivate();
    } else {
      setColorString('bg-red-600/10 ring-red-200/10 text-red-500');
      handleSensorDeactivate();
    }
  }, [isActive]);

  return (
    <div>
      <h2
        className={`my-2 rounded-md p-2 text-xl ring-1 ring-inset ${colorString}`}
      >
        Sensor Readings
      </h2>
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
        <div className='flex w-full gap-2'>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gyroAcceleration.x.toPrecision(3)}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gyroAcceleration.y.toPrecision(3)}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gyroAcceleration.z.toPrecision(3)}
          </p>
        </div>
        <p className='mb-1 ml-1 text-lg'>Absolute Orientation</p>
        <div className='flex w-full gap-2'>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {absoluteOrientation.x.toPrecision(2)}
          </p>
          <p
            className={`w-full rounded-md p-2 ring-1 ring-inset ${colorString} font-bold`}
          >
            {absoluteOrientation.y.toPrecision(3)}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {absoluteOrientation.z.toPrecision(2)}
          </p>
        </div>
      </div>
      <div className='mt-4 flex gap-4'>
        <CustomButton onClick={() => setIsActive(true)}>Activate</CustomButton>
        <CustomButton onClick={() => setIsActive(false)}>
          Deactivate
        </CustomButton>
      </div>
    </div>
  );
};

export default Sensors;
