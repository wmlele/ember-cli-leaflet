'use strict';

/* jshint esnext: true */
/* global L */
import L from 'L';


export default {
  name: 'leaflet-shim',
  initialize: function () {
    L.Icon.Default.imagePath = 'assets/images';
  }
};
