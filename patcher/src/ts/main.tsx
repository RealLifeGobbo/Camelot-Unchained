/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import * as ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
const thunk = require('redux-thunk').default;

import reducer from './redux/modules/reducer';
import PatcherApp from './PatcherApp';

const store = createStore(reducer, applyMiddleware(thunk));
let root = document.getElementById('cse-patcher');

ReactDom.render(
  <Provider store={store}>
    <PatcherApp />
  </Provider>,
  root
);
