
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger = function({dispatch, getState}){
  return function (next) {
    return function (action){
      //console.log("ACTION TYPE", action.type);
      next(action);
    }
  }
}

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   if( typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }


const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log("before store",store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{name: "Superman"}]
// })

// export const StoreContext = createContext();

// class Provider extends React.Component{
//   render(){
//     const { store } = this.props;
//     return <StoreContext.Provider value={ store }>
//       {this.props.children}
//     </StoreContext.Provider>
//   }
// }

// export function connect (callBack){
//   return function (Component){
//     class ConnectedComponent extends React.Component{
//       constructor (props){
//         super (props);
//         this.unsubscribe=this.props.store.subscribe(() =>{
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount(){
//         this.unsubscribe();
//       }
      
//       render(){
//         const {store} = this.props;
//         const state = store.getState();
//         const dataTobePassedAsProps = callBack(state);
//         return <Component {...dataTobePassedAsProps} dispatch = {store.dispatch} />
        
//       }
//     };
//     class ConnectedComponentWrapper extends React.Component {
//       render(){
//         return <StoreContext.Consumer>
//           {(store) => {
//             return <ConnectedComponent store={store} />
//           }}
//         </StoreContext.Consumer>
//       }
//     }

//     return ConnectedComponentWrapper;
//   };

// }


console.log("after store",store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

