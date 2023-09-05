'use client';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

const layoutOptions = [
  { title: 'Left-Handed', icon: CheckIcon },
  { title: 'Right-Handed', icon: CheckIcon },
];

const fontSizeOptions = [
  { title: 'XS', icon: CheckIcon },
  { title: 'BASE', icon: CheckIcon },
  { title: 'XL', icon: CheckIcon },
  { title: '2XL', icon: CheckIcon },
];

const SettingsForm = () => {
  const [selectedLayoutOption, setSelectedLayoutOption] = useState(
    layoutOptions[0]
  );
  const [selectedFontSizeOption, setSelectedFontSizeOption] = useState(
    fontSizeOptions[1]
  );

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <Listbox value={selectedLayoutOption} onChange={setSelectedLayoutOption}>
        <div className='relative z-10 mt-1'>
          <Listbox.Label className='mb-1'>Interface Layout</Listbox.Label>
          <Listbox.Button className='relative mt-1 w-full cursor-pointer rounded-lg bg-gray-900 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm'>
            <span className='block truncate'>{selectedLayoutOption.title}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {layoutOptions.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none rounded-md py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-500 text-gray-100' : 'text-gray-100'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.title}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-white'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <Listbox
        value={selectedFontSizeOption}
        onChange={setSelectedFontSizeOption}
      >
        <div className='relative mt-1'>
          <Listbox.Label className='mb-1'>Font Size</Listbox.Label>
          <Listbox.Button className='relative mt-1 w-full cursor-pointer rounded-lg bg-gray-900 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>
              {selectedFontSizeOption.title}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {fontSizeOptions.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none rounded-md py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-500 text-gray-100' : 'text-gray-100'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.title}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-white'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <button
        type='button'
        className='mt-4 items-center justify-center rounded-lg bg-blue-600 p-2.5'
        onClick={() => console.log('clicked')}
      >
        <span className='text-white'>Confirm</span>
      </button>
    </div>
  );
};

export default SettingsForm;