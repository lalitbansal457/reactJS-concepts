import ReactDom from 'react-dom';

const Outsider = () => ReactDom.createPortal(<div>I am outside</div>, document.body);


export default Outsider;

