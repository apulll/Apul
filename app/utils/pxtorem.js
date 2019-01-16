'use strict';
/** @type {number} */
var MP_CUR_TIME = +new Date;
!function(window) {
  var doc = window.document;
  var docEl = doc.documentElement;
  /** @type {number} */
  var dpr = window.devicePixelRatio || 1;
  /** @type {string} */
  var resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
  /**
   * @return {undefined}
   */
  var d = function() {
    var w_px = docEl.getBoundingClientRect().width || 375;
    if (1 == dpr || 750 < w_px) {
      /** @type {number} */
      w_px = 750;
    }
    /** @type {string} */
    docEl.style.fontSize = w_px / 7.5 + "px";
  };
  docEl.setAttribute("data-dpr", dpr);
  if (doc.addEventListener) {
    window.addEventListener(resizeEvt, d, false);
    if (!("complete" === doc.readyState)) {
      doc.addEventListener("DOMContentLoaded", function() {
        setTimeout(d);
      }, false);
    }
  }
}(window);
