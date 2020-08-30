// example
import str from '../models/Search';

//importing named exports
//method 1
import { add, multiply, ID } from './views/SearchView';

// method 2
import { add as a, multiply as m, ID } from './views/SearchView';

// method 3
// 'import *' means import all
import * as SearchView from './views/SearchView';

//for method 1
console.log(`Using imported functios! ${add(ID, 2)} ${multiply(3, 5)}`);

//for method 2
console.log(`Using imported functios! ${a(ID, 2)} ${m(3, 5)}`);

//for method 3
console.log(
	`Using imported functios! ${SearchView.add(
		SearchView.ID,
		2
	)} ${SearchView.multiply(3, 5)}`
);
