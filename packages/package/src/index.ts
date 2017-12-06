import * as debug from 'debug';
debug('ts-express:server');

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/interval';
let s = 0;
Observable.interval(1000).subscribe(() => {
    console.log(`Been Running for ${s} seconds`);
    s++;
});
