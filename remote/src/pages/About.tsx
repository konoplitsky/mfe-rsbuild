import useStore from '@happycode-core/counter-store';
import '../components/ProviderComponent.css';

const About = () => {
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

export default About;
