!function(){input.onfocus=function(){browsers.style.display="block",input.style.borderRadius="5px 5px 0 0"};for(let o of browsers.options)o.onclick=function(){input.value=o.value,browsers.style.display="none",input.style.borderRadius="5px"};input.oninput=function(){o=-1;var e=input.value.toUpperCase();for(let o of browsers.options)o.value.toUpperCase().indexOf(e)>-1?o.style.display="block":o.style.display="none"};var o=-1;function e(e){if(!e)return!1;!function(o){for(var e=0;e<o.length;e++)o[e].classList.remove("active")}(e),o>=e.length&&(o=0),o<0&&(o=e.length-1),e[o].classList.add("active")}input.onkeydown=function(n){40==n.keyCode?(o++,e(browsers.options)):38==n.keyCode?(o--,e(browsers.options)):13==n.keyCode&&(n.preventDefault(),o>-1&&browsers.options&&browsers.options[o].click())}}();
//# sourceMappingURL=index.8781928b.js.map
