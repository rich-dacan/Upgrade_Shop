import React from 'react';

import { FiltersSection }          from './styles';
import { FiMonitor, FiHeadphones } from 'react-icons/fi';
import { MdVideoSettings }         from 'react-icons/md';
import { GiProcessor }             from 'react-icons/gi';
import { FaMemory }                from 'react-icons/fa';

export default function Filters() {

  return (

    <FiltersSection>
      <ul>
        <li> 
          <span>
            <button> Processor </button>
            <GiProcessor/>
          </span>
        </li>
        <li> 
          <span>
            <button> Ram </button>
            <FaMemory/>
          </span>
        </li>
        <li>  
          <span>
            <button> GPU </button>
            <MdVideoSettings/>
          </span>
        </li>
        <li>  
          <span>
            <button> Monitors </button>
            <FiMonitor/>
          </span>
        </li>
        <li>  
          <span>
            <button> Accessories </button>
            <FiHeadphones/>
          </span>
        </li>
      </ul>
    </FiltersSection>
  );
};
