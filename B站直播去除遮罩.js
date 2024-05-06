// ==UserScript==
// @name         B站直播去除遮罩
// @namespace    http://www.dazo66.com
// @version      2024-05-06
// @description  B站直播去除遮罩
// @author       dazo66
// @grant        GM_addStyle
// @match        *://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// ==/UserScript==

(function() {
 GM_addStyle('#web-player-module-area-mask-panel{height: 0px !important}')
 GM_addStyle('#web-player-module-area-mask-panel{width: 0px !important}')
})();
