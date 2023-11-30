import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function PeriodDropDown({handlePeriodChange}) {
  const [timePeriod, setTimePeriod] = useState("Time Period");

  function updatePeriod (e){
    handlePeriodChange(e)
    setTimePeriod(e)
  }

  return (
    <Menu as="div" className="fixed flex flex-col my-[1rem] text-xl w-[14rem] ">
      <Menu.Button className="flex flex-row px-[1rem] justify-between py-[0.5rem] text-xl border-black border rounded-lg hover:bg-gray">
        {timePeriod}
        <ChevronDownIcon className="w-[1rem] h-[1rem] mx-[1rem]" aria-hidden="true" />
      </Menu.Button>

        
        <Menu.Items className="flex flex-col my-[0.5rem] w-[14rem] rounded-xl text-xl border-gray">
        <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? ' text-black hover:bg-gray p-[1rem] py-[0.5rem] rounded-lg '  : ' p-[1rem] py-[0.5rem] rounded-lg '
                  } block`}
                  onClick={() => updatePeriod("3 months")}
                >
                  3 months
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? ' text-black hover:bg-gray p-[1rem] py-[0.5rem] rounded-lg ' : ' p-[1rem] py-[0.5rem] rounded-lg '
                  } block`}
                  onClick={() => updatePeriod("6 months")}
                >
                  6 months
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? 'text-black hover:bg-gray p-[1rem] py-[0.5rem] rounded-lg ' : ' p-[1rem] py-[0.5rem] rounded-lg '
                  } block`}
                  onClick={() => updatePeriod("9 months")}
                >
                  9 months
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? ' text-black hover:bg-gray p-[1rem] py-[0.5rem] rounded-lg ' : ' p-[1rem] py-[0.5rem] rounded-lg '
                  } block`}
                  onClick={() => updatePeriod("12 months")}
                >
                  12 months
                </a>
              )}
            </Menu.Item>
            </div>
        </Menu.Items>
    </Menu>
  );
}
