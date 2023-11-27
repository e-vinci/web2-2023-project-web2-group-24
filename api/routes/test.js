const express = require('express');
const Test = require('../models/test');

function showCategories(){
   return Test.list();
}
