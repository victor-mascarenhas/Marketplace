import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const Toastr = () => (
    <ReduxToastr 
    timeOut={4000}
    newestOnTop={false}
    preventDuplicates
    position="top-right"
    getState={(state) => state.toastr}
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar
    closeOnToastrClick
    />
);

export default Toastr