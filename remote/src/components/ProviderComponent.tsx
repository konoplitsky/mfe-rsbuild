import React from 'react';
import './ProviderComponent.css';
import useStore from '@happycode-core/counter-store';

const Provider: React.FC = () => {
  const { count, increment } = useStore();

  return (
    <div className='mf-remote-card'>
      <h2 className='mf-remote-title'>REMOTE</h2>
      <div className='mf-remote-counter'>Счетчик: {count}</div>
      <button className='mf-remote-button' onClick={increment} type='button'>
        +
      </button>
    </div>
  );
};

export default Provider;
