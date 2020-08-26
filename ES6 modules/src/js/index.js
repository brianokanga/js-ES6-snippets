import str from '../models/Search';

//importing named exports
// import {add, multiply, ID} from './views/SearchView';
// import {add as a, multiply as m, ID} from './views/SearchView';
import * as SearchView from './views/SearchView';

console.log (`Using imported functios! ${add (ID, 2)} ${multiply (3, 5)}`);
console.log (`Using imported functios! ${a (ID, 2)} ${m (3, 5)}`);
console.log (
  `Using imported functios! ${SearchView.add (SearchView.ID, 2)} ${SearchView.multiply (3, 5)}`
);
