import ReactDOM from 'react-dom';
import { Overlay } from './styles';

export default function Loader() {
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
      Hello world
    </Overlay>,
    document.getElementById('loader-root'),
  );
}
