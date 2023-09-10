/* eslint-disable no-undef */
'use client';

import { useEffect, useMemo, useState } from 'react';
import { Shake } from '../lib/shake';
import { setOrientation } from '../store/themeSlice';
import { LayoutOrientation } from '../types';
import {
  initAbsoluteOrientationSensor,
  initAccelerometer,
  initAmbientLightSensor,
  initGravitySensor,
  initGyroscope,
} from '../util/sensors';
import { useAppDispatch } from './Navigation';

const initShakeSensor = (callback: Function, dataEvent: Function) => {
  const shake = new Shake({ threshold: 25, timeout: 1000 });
  shake.addEventListener('shake', (event) => {
    callback(true);
    dataEvent(event.detail);
    console.log('Shake!', event.detail.timeStamp, event.detail.acceleration);
  });
  return shake;
};

const Sensors = () => {
  const dispatch = useAppDispatch();

  const [yeet, setYeet] = useState(false);
  const [gravity, setGravity] = useState({ x: 0, y: 0, z: 0 });
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
  const [shakeData, setShakeData] = useState<any>();
  const [hasShaken, setHasShaken] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [colorString, setColorString] = useState('bg-red-600/10');

  const accelerometer = initAccelerometer(setAcceleration);
  const gyroscope = initGyroscope(setGyroAcceleration);
  const lightSensor = initAmbientLightSensor(setLightLevel);
  const orientationSensor = initAbsoluteOrientationSensor(
    setAbsoluteOrientation
  );
  const gravitySensor = initGravitySensor(setGravity);
  const shakeSensor = initShakeSensor(setHasShaken, setShakeData);

  useMemo(() => {
    accelerometer.start();
    gyroscope.start();
    lightSensor.start();
    orientationSensor.start();
    gravitySensor.start();
    shakeSensor.start();
  }, []);

  useEffect(() => {
    // if (isActive && hasShaken) {
    //   setIsActive(false);
    //   setHasShaken(false);
    // }
    if (isActive && gravity.x > 5) {
      dispatch(setOrientation(LayoutOrientation.RIGHT));
      setIsActive(false);
    } else if (isActive && gravity.x < -5) {
      dispatch(setOrientation(LayoutOrientation.LEFT));
      setIsActive(false);
    }
    if (isActive && hasShaken) {
      setIsActive(false);
      setHasShaken(false);
      setYeet(!yeet);
    }
  }, [absoluteOrientation, shakeData]);

  useMemo(() => {
    if (isActive) {
      setColorString('bg-green-600/10 ring-green-200/10 text-green-500');
    } else {
      setColorString('bg-red-600/10 ring-red-200/10 text-red-500');
    }
  }, [absoluteOrientation]);

  return (
    <div>
      <h2
        className={`my-2 rounded-md p-2 text-xl ring-1 ring-inset ${colorString}`}
      >
        Sensor Readings
      </h2>
      <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
        {yeet.toString()}
      </p>
      <div className='mt-1 rounded-md p-2 ring-1 ring-cyan-200/20'>
        <p className='mb-1 ml-1 text-lg'>Accelerometer</p>
        <div className='grid w-full grid-cols-3 gap-2'>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {acceleration.x.toPrecision(3)}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {acceleration.y.toPrecision(3)}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {acceleration.z.toPrecision(3)}
          </p>
        </div>
        <p className='mb-1 ml-1 text-lg'>Accelerometer</p>
        <div className='grid w-full grid-cols-2 gap-2'>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {shakeData?.timeStamp ?? 0}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {shakeData?.acceleration.x.toPrecision(3) ?? 0}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {shakeData?.acceleration.y.toPrecision(3) ?? 0}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {shakeData?.acceleration.z.toPrecision(3) ?? 0}
          </p>
        </div>
        <p className='mb-1 ml-1 text-lg'>Gravity Sensor</p>
        <div className='grid w-full grid-cols-3 gap-2'>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gravity.x.toPrecision(3)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gravity.y.toPrecision(3)}
          </p>
          <p className='rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {gravity.z.toPrecision(3)}
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
        <div className='grid w-full grid-cols-2 gap-2'>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            act: {isActive.toString()}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            shk: {hasShaken.toString()}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {absoluteOrientation.x.toPrecision(2)}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {absoluteOrientation.y.toPrecision(3)}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {absoluteOrientation.z.toPrecision(2)}
          </p>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {absoluteOrientation.w.toPrecision(2)}
          </p>
        </div>
      </div>
      <div className='mt-4 flex gap-4'>
        {/* <button
          type='button'
          className='w-full items-center justify-center rounded-lg bg-blue-600 p-2.5'
          onClick={() => shake.start()}
        >
          Shake Start
        </button> */}
        <button
          type='button'
          className='w-full items-center justify-center rounded-lg bg-blue-600 p-2.5'
          onClick={() => setIsActive(true)}
        >
          Activate
        </button>
      </div>
    </div>
  );
};

export default Sensors;
