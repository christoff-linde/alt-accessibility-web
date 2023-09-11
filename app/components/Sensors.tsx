/* eslint-disable no-undef */
'use client';

import { useEffect, useMemo, useState } from 'react';
import { Shake } from '../lib/shake';
import {
  setFontSize,
  setLayoutSwitchActive,
  setOrientation,
  setSubTitleFontSize,
  setTitleFontSize,
} from '../store/themeSlice';
import {
  FontSize,
  LayoutOrientation,
  SubTitleFontSize,
  TitleFontSize,
} from '../types';
import {
  initAbsoluteOrientationSensor,
  initAccelerometer,
  initAmbientLightSensor,
  initGravitySensor,
  initGyroscope,
} from '../util/sensors';
import { useAppDispatch, useAppSelector } from './Navigation';
import SubHeading from './SubHeading';

const initShakeSensor = (callback: Function, dataEvent: Function) => {
  const shake = new Shake({ threshold: 25, timeout: 1000 });
  shake.addEventListener('shake', (event) => {
    callback(true);
    dataEvent(event.detail);
    console.log('Shake!', event.detail.timeStamp, event.detail.acceleration);
  });
  return shake;
};

// provide a optional prop to show debug info, and default to false
const Sensors = ({ showDebug = false }) => {
  const dispatch = useAppDispatch();
  const { fontSize, subTitleFontSize, layoutSwitchActive } = useAppSelector(
    (state) => state.theme
  );

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
    if (layoutSwitchActive && gravity.x > 5) {
      dispatch(setOrientation(LayoutOrientation.RIGHT));
      dispatch(setLayoutSwitchActive(false));
    } else if (layoutSwitchActive && gravity.x < -5) {
      dispatch(setOrientation(LayoutOrientation.LEFT));
      dispatch(setLayoutSwitchActive(false));
    }
  }, [absoluteOrientation]);

  useEffect(() => {
    if (hasShaken) {
      dispatch(setLayoutSwitchActive(false));
      setHasShaken(false);
      let targetFontSize = FontSize.SMALL;
      let targetSubtitleFontSize = SubTitleFontSize.SMALL;
      let targetTitleFontSize = TitleFontSize.SMALL;
      switch (fontSize) {
        case FontSize.SMALL:
          targetFontSize = FontSize.NORMAL;
          targetSubtitleFontSize = SubTitleFontSize.NORMAL;
          targetTitleFontSize = TitleFontSize.NORMAL;
          break;
        case FontSize.NORMAL:
          targetFontSize = FontSize.MEDIUM;
          targetSubtitleFontSize = SubTitleFontSize.MEDIUM;
          targetTitleFontSize = TitleFontSize.MEDIUM;
          break;
        case FontSize.MEDIUM:
          targetFontSize = FontSize.LARGE;
          targetSubtitleFontSize = SubTitleFontSize.LARGE;
          targetTitleFontSize = TitleFontSize.LARGE;
          break;
        case FontSize.LARGE:
          targetFontSize = FontSize.SMALL;
          targetSubtitleFontSize = SubTitleFontSize.SMALL;
          targetTitleFontSize = TitleFontSize.SMALL;
          break;
        default:
          break;
      }
      dispatch(setFontSize(targetFontSize));
      dispatch(setTitleFontSize(targetTitleFontSize));
      dispatch(setSubTitleFontSize(targetSubtitleFontSize));
    }
  }, [shakeData]);

  return (
    <div>
      {showDebug && (
        <>
          <SubHeading>Device Sensors</SubHeading>
          <p className='w-full rounded-md bg-cyan-600/10 p-2 ring-1 ring-inset ring-cyan-200/10'>
            {subTitleFontSize}
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
                act: {layoutSwitchActive.toString()}
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

          <button
            type='button'
            className='w-full items-center justify-center rounded-lg bg-blue-600 p-2.5'
            onClick={() => dispatch(setLayoutSwitchActive(true))}
          >
            Activate
          </button>
        </>
      )}
    </div>
  );
};

export default Sensors;
