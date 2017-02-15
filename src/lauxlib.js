/*jshint esversion: 6 */
"use strict";

const assert = require('assert');

const lstate = require('./lstate.js');
const lapi   = require('./lapi.js');

const panic = function(L) {
    console.log(`PANIC: unprotected error in call to Lua API (...)`);
    return 0;
}

const luaL_newstate = function() {
    let L = lstate.lua_newstate();
    if (L) lapi.lua_atpanic(L, panic);
    return L;
};


module.exports.luaL_newstate = luaL_newstate;