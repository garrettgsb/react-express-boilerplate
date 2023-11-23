import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useNewProject } from '../hooks/NewProjectContext';

export default function ProjectTypeBox(props) {

  const { selectedType, handleSelect, filteredType, query, setQuery } = props;

  // const {
  //   query,
  //   setQuery,
  // } = useNewProject();

  // const handleSelect = (value) => {
  //   setSelected(value);
  //   onChange(value.name); 
  //   //handleProjectTypeForm(value.name);
  // };

  return (
    <div className=" top-16 w-80">
      <Combobox value={selectedType} onChange={handleSelect}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg  text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0"
              displayValue={(type) => type.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredType.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredType.map((type) => (
                  <Combobox.Option
                    key={type.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-button text-white' : 'text-gray-900'
                      }`
                    }
                    value={type}
                  >
                    {({ selectedType, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selectedType ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {type.name}
                        </span>
                        {selectedType ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
