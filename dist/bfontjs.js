!function(h,y){"object"==typeof exports&&"object"==typeof module?module.exports=y(require("canvas"),require("fs")):"function"==typeof define&&define.amd?define(["canvas","fs"],y):"object"==typeof exports?exports.bfontjs=y(require("canvas"),require("fs")):h.bfontjs=y(h.canvas,h.fs)}(self,((h,y)=>(()=>{"use strict";var x={517:y=>{y.exports=h},89:h=>{h.exports=y}},e={};function w(h){var y=e[h];if(void 0!==y)return y.exports;var t=e[h]={exports:{}};return x[h](t,t.exports,w),t.exports}w.d=(h,y)=>{for(var x in y)w.o(y,x)&&!w.o(h,x)&&Object.defineProperty(h,x,{enumerable:!0,get:y[x]})},w.o=(h,y)=>Object.prototype.hasOwnProperty.call(h,y),w.r=h=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})};var t={};return(()=>{w.r(t),w.d(t,{DrawText:()=>d,Fonts:()=>a,Generate437:()=>f,GenerateBlankCodepage:()=>c,LoadDefaultFonts:()=>r,LoadFromFile:()=>S,LoadFromJSON:()=>R});var h=w(517),y=w(89);const x=JSON.parse('{"cwidth":9,"cheight":16,"codepage":{"0":{"x":144,"y":16,"w":9,"h":16},"1":{"x":153,"y":16,"w":9,"h":16},"2":{"x":162,"y":16,"w":9,"h":16},"3":{"x":171,"y":16,"w":9,"h":16},"4":{"x":180,"y":16,"w":9,"h":16},"5":{"x":189,"y":16,"w":9,"h":16},"6":{"x":198,"y":16,"w":9,"h":16},"7":{"x":207,"y":16,"w":9,"h":16},"8":{"x":216,"y":16,"w":9,"h":16},"9":{"x":225,"y":16,"w":9,"h":16},"\\u0000":{"x":0,"y":0,"w":9,"h":16},"\\u0001":{"x":9,"y":0,"w":9,"h":16},"\\u0002":{"x":18,"y":0,"w":9,"h":16},"\\u0003":{"x":27,"y":0,"w":9,"h":16},"\\u0004":{"x":36,"y":0,"w":9,"h":16},"\\u0005":{"x":45,"y":0,"w":9,"h":16},"\\u0006":{"x":54,"y":0,"w":9,"h":16},"\\u0007":{"x":63,"y":0,"w":9,"h":16},"\\b":{"x":72,"y":0,"w":9,"h":16},"\\t":{"x":81,"y":0,"w":9,"h":16},"\\n":{"x":90,"y":0,"w":9,"h":16},"\\u000b":{"x":99,"y":0,"w":9,"h":16},"\\f":{"x":108,"y":0,"w":9,"h":16},"\\r":{"x":117,"y":0,"w":9,"h":16},"\\u000e":{"x":126,"y":0,"w":9,"h":16},"\\u000f":{"x":135,"y":0,"w":9,"h":16},"\\u0010":{"x":144,"y":0,"w":9,"h":16},"\\u0011":{"x":153,"y":0,"w":9,"h":16},"\\u0012":{"x":162,"y":0,"w":9,"h":16},"\\u0013":{"x":171,"y":0,"w":9,"h":16},"\\u0014":{"x":180,"y":0,"w":9,"h":16},"\\u0015":{"x":189,"y":0,"w":9,"h":16},"\\u0016":{"x":198,"y":0,"w":9,"h":16},"\\u0017":{"x":207,"y":0,"w":9,"h":16},"\\u0018":{"x":216,"y":0,"w":9,"h":16},"\\u0019":{"x":225,"y":0,"w":9,"h":16},"\\u001a":{"x":234,"y":0,"w":9,"h":16},"\\u001b":{"x":243,"y":0,"w":9,"h":16},"\\u001c":{"x":252,"y":0,"w":9,"h":16},"\\u001d":{"x":261,"y":0,"w":9,"h":16},"\\u001e":{"x":270,"y":0,"w":9,"h":16},"\\u001f":{"x":279,"y":0,"w":9,"h":16}," ":{"x":0,"y":16,"w":9,"h":16},"!":{"x":9,"y":16,"w":9,"h":16},"\\"":{"x":18,"y":16,"w":9,"h":16},"#":{"x":27,"y":16,"w":9,"h":16},"$":{"x":36,"y":16,"w":9,"h":16},"%":{"x":45,"y":16,"w":9,"h":16},"&":{"x":54,"y":16,"w":9,"h":16},"\'":{"x":63,"y":16,"w":9,"h":16},"(":{"x":72,"y":16,"w":9,"h":16},")":{"x":81,"y":16,"w":9,"h":16},"*":{"x":90,"y":16,"w":9,"h":16},"+":{"x":99,"y":16,"w":9,"h":16},",":{"x":108,"y":16,"w":9,"h":16},"-":{"x":117,"y":16,"w":9,"h":16},".":{"x":126,"y":16,"w":9,"h":16},"/":{"x":135,"y":16,"w":9,"h":16},":":{"x":234,"y":16,"w":9,"h":16},";":{"x":243,"y":16,"w":9,"h":16},"<":{"x":252,"y":16,"w":9,"h":16},"=":{"x":261,"y":16,"w":9,"h":16},">":{"x":270,"y":16,"w":9,"h":16},"?":{"x":279,"y":16,"w":9,"h":16},"@":{"x":0,"y":32,"w":9,"h":16},"A":{"x":9,"y":32,"w":9,"h":16},"B":{"x":18,"y":32,"w":9,"h":16},"C":{"x":27,"y":32,"w":9,"h":16},"D":{"x":36,"y":32,"w":9,"h":16},"E":{"x":45,"y":32,"w":9,"h":16},"F":{"x":54,"y":32,"w":9,"h":16},"G":{"x":63,"y":32,"w":9,"h":16},"H":{"x":72,"y":32,"w":9,"h":16},"I":{"x":81,"y":32,"w":9,"h":16},"J":{"x":90,"y":32,"w":9,"h":16},"K":{"x":99,"y":32,"w":9,"h":16},"L":{"x":108,"y":32,"w":9,"h":16},"M":{"x":117,"y":32,"w":9,"h":16},"N":{"x":126,"y":32,"w":9,"h":16},"O":{"x":135,"y":32,"w":9,"h":16},"P":{"x":144,"y":32,"w":9,"h":16},"Q":{"x":153,"y":32,"w":9,"h":16},"R":{"x":162,"y":32,"w":9,"h":16},"S":{"x":171,"y":32,"w":9,"h":16},"T":{"x":180,"y":32,"w":9,"h":16},"U":{"x":189,"y":32,"w":9,"h":16},"V":{"x":198,"y":32,"w":9,"h":16},"W":{"x":207,"y":32,"w":9,"h":16},"X":{"x":216,"y":32,"w":9,"h":16},"Y":{"x":225,"y":32,"w":9,"h":16},"Z":{"x":234,"y":32,"w":9,"h":16},"[":{"x":243,"y":32,"w":9,"h":16},"\\\\":{"x":252,"y":32,"w":9,"h":16},"]":{"x":261,"y":32,"w":9,"h":16},"^":{"x":270,"y":32,"w":9,"h":16},"_":{"x":279,"y":32,"w":9,"h":16},"`":{"x":0,"y":48,"w":9,"h":16},"a":{"x":9,"y":48,"w":9,"h":16},"b":{"x":18,"y":48,"w":9,"h":16},"c":{"x":27,"y":48,"w":9,"h":16},"d":{"x":36,"y":48,"w":9,"h":16},"e":{"x":45,"y":48,"w":9,"h":16},"f":{"x":54,"y":48,"w":9,"h":16},"g":{"x":63,"y":48,"w":9,"h":16},"h":{"x":72,"y":48,"w":9,"h":16},"i":{"x":81,"y":48,"w":9,"h":16},"j":{"x":90,"y":48,"w":9,"h":16},"k":{"x":99,"y":48,"w":9,"h":16},"l":{"x":108,"y":48,"w":9,"h":16},"m":{"x":117,"y":48,"w":9,"h":16},"n":{"x":126,"y":48,"w":9,"h":16},"o":{"x":135,"y":48,"w":9,"h":16},"p":{"x":144,"y":48,"w":9,"h":16},"q":{"x":153,"y":48,"w":9,"h":16},"r":{"x":162,"y":48,"w":9,"h":16},"s":{"x":171,"y":48,"w":9,"h":16},"t":{"x":180,"y":48,"w":9,"h":16},"u":{"x":189,"y":48,"w":9,"h":16},"v":{"x":198,"y":48,"w":9,"h":16},"w":{"x":207,"y":48,"w":9,"h":16},"x":{"x":216,"y":48,"w":9,"h":16},"y":{"x":225,"y":48,"w":9,"h":16},"z":{"x":234,"y":48,"w":9,"h":16},"{":{"x":243,"y":48,"w":9,"h":16},"|":{"x":252,"y":48,"w":9,"h":16},"}":{"x":261,"y":48,"w":9,"h":16},"~":{"x":270,"y":48,"w":9,"h":16},"":{"x":279,"y":48,"w":9,"h":16},"":{"x":0,"y":64,"w":9,"h":16},"":{"x":9,"y":64,"w":9,"h":16},"":{"x":18,"y":64,"w":9,"h":16},"":{"x":27,"y":64,"w":9,"h":16},"":{"x":36,"y":64,"w":9,"h":16},"":{"x":45,"y":64,"w":9,"h":16},"":{"x":54,"y":64,"w":9,"h":16},"":{"x":63,"y":64,"w":9,"h":16},"":{"x":72,"y":64,"w":9,"h":16},"":{"x":81,"y":64,"w":9,"h":16},"":{"x":90,"y":64,"w":9,"h":16},"":{"x":99,"y":64,"w":9,"h":16},"":{"x":108,"y":64,"w":9,"h":16},"":{"x":117,"y":64,"w":9,"h":16},"":{"x":126,"y":64,"w":9,"h":16},"":{"x":135,"y":64,"w":9,"h":16},"":{"x":144,"y":64,"w":9,"h":16},"":{"x":153,"y":64,"w":9,"h":16},"":{"x":162,"y":64,"w":9,"h":16},"":{"x":171,"y":64,"w":9,"h":16},"":{"x":180,"y":64,"w":9,"h":16},"":{"x":189,"y":64,"w":9,"h":16},"":{"x":198,"y":64,"w":9,"h":16},"":{"x":207,"y":64,"w":9,"h":16},"":{"x":216,"y":64,"w":9,"h":16},"":{"x":225,"y":64,"w":9,"h":16},"":{"x":234,"y":64,"w":9,"h":16},"":{"x":243,"y":64,"w":9,"h":16},"":{"x":252,"y":64,"w":9,"h":16},"":{"x":261,"y":64,"w":9,"h":16},"":{"x":270,"y":64,"w":9,"h":16},"":{"x":279,"y":64,"w":9,"h":16}," ":{"x":0,"y":80,"w":9,"h":16},"¡":{"x":9,"y":80,"w":9,"h":16},"¢":{"x":18,"y":80,"w":9,"h":16},"£":{"x":27,"y":80,"w":9,"h":16},"¤":{"x":36,"y":80,"w":9,"h":16},"¥":{"x":45,"y":80,"w":9,"h":16},"¦":{"x":54,"y":80,"w":9,"h":16},"§":{"x":63,"y":80,"w":9,"h":16},"¨":{"x":72,"y":80,"w":9,"h":16},"©":{"x":81,"y":80,"w":9,"h":16},"ª":{"x":90,"y":80,"w":9,"h":16},"«":{"x":99,"y":80,"w":9,"h":16},"¬":{"x":108,"y":80,"w":9,"h":16},"­":{"x":117,"y":80,"w":9,"h":16},"®":{"x":126,"y":80,"w":9,"h":16},"¯":{"x":135,"y":80,"w":9,"h":16},"°":{"x":144,"y":80,"w":9,"h":16},"±":{"x":153,"y":80,"w":9,"h":16},"²":{"x":162,"y":80,"w":9,"h":16},"³":{"x":171,"y":80,"w":9,"h":16},"´":{"x":180,"y":80,"w":9,"h":16},"µ":{"x":189,"y":80,"w":9,"h":16},"¶":{"x":198,"y":80,"w":9,"h":16},"·":{"x":207,"y":80,"w":9,"h":16},"¸":{"x":216,"y":80,"w":9,"h":16},"¹":{"x":225,"y":80,"w":9,"h":16},"º":{"x":234,"y":80,"w":9,"h":16},"»":{"x":243,"y":80,"w":9,"h":16},"¼":{"x":252,"y":80,"w":9,"h":16},"½":{"x":261,"y":80,"w":9,"h":16},"¾":{"x":270,"y":80,"w":9,"h":16},"¿":{"x":279,"y":80,"w":9,"h":16},"À":{"x":0,"y":96,"w":9,"h":16},"Á":{"x":9,"y":96,"w":9,"h":16},"Â":{"x":18,"y":96,"w":9,"h":16},"Ã":{"x":27,"y":96,"w":9,"h":16},"Ä":{"x":36,"y":96,"w":9,"h":16},"Å":{"x":45,"y":96,"w":9,"h":16},"Æ":{"x":54,"y":96,"w":9,"h":16},"Ç":{"x":63,"y":96,"w":9,"h":16},"È":{"x":72,"y":96,"w":9,"h":16},"É":{"x":81,"y":96,"w":9,"h":16},"Ê":{"x":90,"y":96,"w":9,"h":16},"Ë":{"x":99,"y":96,"w":9,"h":16},"Ì":{"x":108,"y":96,"w":9,"h":16},"Í":{"x":117,"y":96,"w":9,"h":16},"Î":{"x":126,"y":96,"w":9,"h":16},"Ï":{"x":135,"y":96,"w":9,"h":16},"Ð":{"x":144,"y":96,"w":9,"h":16},"Ñ":{"x":153,"y":96,"w":9,"h":16},"Ò":{"x":162,"y":96,"w":9,"h":16},"Ó":{"x":171,"y":96,"w":9,"h":16},"Ô":{"x":180,"y":96,"w":9,"h":16},"Õ":{"x":189,"y":96,"w":9,"h":16},"Ö":{"x":198,"y":96,"w":9,"h":16},"×":{"x":207,"y":96,"w":9,"h":16},"Ø":{"x":216,"y":96,"w":9,"h":16},"Ù":{"x":225,"y":96,"w":9,"h":16},"Ú":{"x":234,"y":96,"w":9,"h":16},"Û":{"x":243,"y":96,"w":9,"h":16},"Ü":{"x":252,"y":96,"w":9,"h":16},"Ý":{"x":261,"y":96,"w":9,"h":16},"Þ":{"x":270,"y":96,"w":9,"h":16},"ß":{"x":279,"y":96,"w":9,"h":16},"à":{"x":0,"y":112,"w":9,"h":16},"á":{"x":9,"y":112,"w":9,"h":16},"â":{"x":18,"y":112,"w":9,"h":16},"ã":{"x":27,"y":112,"w":9,"h":16},"ä":{"x":36,"y":112,"w":9,"h":16},"å":{"x":45,"y":112,"w":9,"h":16},"æ":{"x":54,"y":112,"w":9,"h":16},"ç":{"x":63,"y":112,"w":9,"h":16},"è":{"x":72,"y":112,"w":9,"h":16},"é":{"x":81,"y":112,"w":9,"h":16},"ê":{"x":90,"y":112,"w":9,"h":16},"ë":{"x":99,"y":112,"w":9,"h":16},"ì":{"x":108,"y":112,"w":9,"h":16},"í":{"x":117,"y":112,"w":9,"h":16},"î":{"x":126,"y":112,"w":9,"h":16},"ï":{"x":135,"y":112,"w":9,"h":16},"ð":{"x":144,"y":112,"w":9,"h":16},"ñ":{"x":153,"y":112,"w":9,"h":16},"ò":{"x":162,"y":112,"w":9,"h":16},"ó":{"x":171,"y":112,"w":9,"h":16},"ô":{"x":180,"y":112,"w":9,"h":16},"õ":{"x":189,"y":112,"w":9,"h":16},"ö":{"x":198,"y":112,"w":9,"h":16},"÷":{"x":207,"y":112,"w":9,"h":16},"ø":{"x":216,"y":112,"w":9,"h":16},"ù":{"x":225,"y":112,"w":9,"h":16},"ú":{"x":234,"y":112,"w":9,"h":16},"û":{"x":243,"y":112,"w":9,"h":16},"ü":{"x":252,"y":112,"w":9,"h":16},"ý":{"x":261,"y":112,"w":9,"h":16},"þ":{"x":270,"y":112,"w":9,"h":16},"ÿ":{"x":279,"y":112,"w":9,"h":16}},"imagedata":"iVBORw0KGgoAAAANSUhEUgAAASAAAACACAYAAACr6LTaAAAAAXNSR0IArs4c6QAAENVJREFUeJztndt24zoIhp2uvv8re1/scRelHH4kdLDNdzNJjABJCCHH6XyOwuQ8z9O6/vl8PjP1FMWT+F7tQHFvzvM8W5NnT9tepA2hNoH5wAlI28HppCEyBQYfSz6G3nVJhstaVVlkzloSiWX7umb1ifcBicNLTmvTm0w1n7NlnsQXInRNjMQ1YEhAjeAKnF6Z3UCDFE0mlj46n5bNrDlG9bTMmbSAeb+kMfP6j9i0fO7t11OBEtAFMojWxF/taNLqCeonT3zmToiMc0aSRtpH53vUnNEk1GMD8Xlmv1ZgrT2NSyZ0D8hLLtwZayL4a+2IIV1D0SZ+VHnL7Ul2vKMU/SzLT0+PdnzR/LD8s8bXW3TWsSobauNaFC32EJ+z++XpybRDfdfm27ruEaqAZuHtIDSL8mMIHRBUP2+rYZXpmj+8veS/5tuMhWjBj9mXT9HjGjK2WSBHUj6uSJudsPxFkhPST0t31E/r81AFlLXDR2zQz2dULpodXv1JfiIyli0ePNrOTHdtyXYWkn4reWq+zF7gd0soCMi6kDavi0h8WHo0e/waSvgIhmTYngBAFnePnhZdO4LMRYaN4/i7a1r2vGtIZcLfZ/ePJnBtHC0/LbmRPnt2smJC0tOql885bx9+DghxwFr4SHLxnLaqBkkO2bEzEisikxEkSNC3JH9Lr/aayiP98TYGb+dusWnZ6p0LxGeESCLzYp4mV9Qe1+f1C1kDCNMfRPSSC5ebVa30JNarvVcpXP3pTRReYkV0IjLW3KCyWvvWBJ21M3MdPbGWsalEEplnw7oenaeWdpIebXyhBOQFDCqDOGS141B7mj5EJosZSWyET71tWm2g8ZINTxZo1WDp0nRHyEhks8iKka07uQNepYBORJaeLO4S6KPwjiDFHOq3YC/l7Yvt7f3fhS2fAyqK4h1UAiqKopDgN2SLongWqRUQTxh3SSB38bMonkb4JvSMb0+krzZb7WV+pU31Ic+ovAn0GRZk/Cw90W+vJHveoxCavcjzVp693n7dBa9fXc88aINoPSRGP/OuW59F/PWer0D1I3JvTELIvNPPrWvWvEdjQ7OXNd9ZPmfGfAsZ6wu9zj9LPYJJjmQMoBSsUmZtOUZlJh96/clHOn7MPg75qVlJTuPzj14Z1B7a3rIX8ScTLf6jMpfccfQ/SR5te5H+HJAUiBdaQJ5n7lPRtA2diFEJEgWtFLxrK2kNtmiw9vRfqnyLv6DVI4XL0jUmXfPsdU1utC1vj5TqP442HHt4CZ4V1D2yvG+R8nU1XkkdmduW+eTXL1qPN5yoDOo3Es8t9nrIji90zvj1LZ+EliZHq5KQQPeqoBloAaYtGO16j62onl4/RtnhiUKKDWkcLxktjrxdvDcOLT1oQspgxFxalZDFlgkIBR3IHUpxLcFoAd8TJNlJIjLOM+xEfJiROFdvblGQZBGtyFrHYMjfA9KgneKv6cLrPebsilTtRHcMS98Idqp8iv9BxsqT8ZJQS8WNVq2U8Ldg9DgTRSs5o+WnVda2+IWgVTCIb1QH77cVILMWozZ2kcCSNpeMiojrzZjj0bHSy6xkjMa0BeqrNua3vAktZW0tKdH2GRNr6Zi9i2cudElPpDrjc4ZuKsgi0OZUs4X4hOhBbXnz0GJrVIxmyLe0u2WFu/tOtZIam+IJ3Pom9Ju51U5SFEVRFEVRFEVRFEUGPfci6z5CURTN8G+ao+2bvoa3vor8YwCQzfh6lMuiX+ui/nifeXoQOWkyuS3Ehuef9kiC9yiDZBOd99V6qCzS99YxHC1j9Usbg95HZjQ9SB88vi5FHMshLwg+/5BkqaPWwqOvrYGgeqIyiD8RJN8jcsjkReRpP7w5ta59CLwNMu8z9Wj6tD7ejQ8DkaWfRWIbXTf03+ja+UIn1duJEaQsiQwiYi+6eFv9uRvWhkJlZvkzA2kOV82rl0hbdPXqyZhvKTkhSZED/RQjK9tp9AYHMhGRydolCbUGWI+tndEqJ3QD2SEJWZuelaSykg9vv5pfCQjZLRG0gR4B4m9mn2ZNXMb4IQszc36y5t3SIy3mO+DNhZekKD1jTNvsMH6hH6Oii9A6ymWTVdGcDElHS4m5GsTnrD5ljRHi76z4QslIiMiGkb0xrR6/UALadRFmJKHR/YoG6OwFtuucWv3fLQlZSMerVh0Zc7VLElIT0MyAzBqAOwRihMgCu0vfe/yceexC7svwz/lrqV1r0rSST+uY7JCEfiWg0RWONakaaNZvGcA77aAWd/P/Lv5692X4a+ma1S5jHDKPfSv4/nx+/83ki6hjWlLheiR7WiZu3XEkGa0/3J/rvdVXDcum12+rL5aNFj9RkNhAxjmqp8cfxK+IHhoPoxcrMpaROUf91mL+LhtFUYSQFn/xTra68Vi8A6sKLJ6Dt8nU3BdFURRF8XLqXF4UxWzC/y1PURRFFmk/cBtxYzFDZ6+OaPvIGHLZiK26ketjPX7xBrwYsWIViS8u05I/xAcR0ca8bUu7kTqtBT7Lh1G23rywEN5+O4HGfkus0HbWM0LWA5cIr/lveXoeMIzaGSFbFDvBH+z05LVqFE5AyFOjXBZ9krPliU9UT8QOUkb2lq1R2ZadRdJt7ViWL944t+iRxjnbH8k/7TNExurvCJlI9b77Rnb5LiUh+Cb0h0CVarKSDC8LETmrQ5Ye7bWlB7Fr9T+7+mkta7kOaSxoP7wxtMa5RY/ULy0ZtPjD9a5coF4/WvRJ40Z1o/qRsaH+W2tew0ukcAI6CYg8kqguOToIkcmxfLImqZWZgZyRfEaMwQw0X5GEsyPSIo76LCVcSYeWmCWQ9cyTfsRn7qfkF3QE87LYKnYPvKIPbYH1LORReP5olV+2nbtRzwFtym7Jficiu3yPDa6/Z/FLelp1PCX5HMcGCaj1bDlKz05UEvoNn+PMo4YEenTykot0jIn6I9m/S8ybt0oiSn4aKeWkdy+mRabVFr+u7RoRPd4ZHLXJ5bV7G622aBvttWV/9JxaPmvtI7Yk2ZYY47LINWRMLTmtb1aiaek/2i9Lf5HM6B2F67/LDuYR7cdT+j2St4zR8iPYSt4yycW9sCqTp/H4DnpEj013szea1mMnKv8GIsfKoiiKIonKsoULekPyTUeHIodhgeIF43n2/akENNgz7+bP8jlDHzL+/Lr3WY+9bGbHT2QcM3xBvk3LmP9W371v7VCb0Neg6FeLmjziSIutiB+9gRLx2fItOnaeHs0nxBaKF6yZyQe5HzJ7LjRbiJ5o4sgC9alnvFrXKn0dVtTTcaTzo+z12Jntc7R9b2XSW01kgYzzrLnI3nRRPyheUrA+i+iS5h/pf0YcmhO9Q1DOAN3pngiSoJGKQyIyjpmb4N1oXdzomLWOrbcuvKTp9fE4jB+j9nQ04rSVLWfK0L7x5NvSr1YZLtdT2XkyvJrwdkJJRqpEpH5KlYvlu8asuchKAOhnI9Fi2SsypLlF9Ef6lfYgInX0gn5OnbWuz5bR2kT6lSVDfUD87JHhgeX5rMlodrltbZFyXVeS4z7wtrPm4mnQedHi4yRYn0ntNF3a+/Q/yepNIjLJM2VQdvRpN2jfpOD+fPw/i6slqmIe2gZstdEqK28+1QQULaUk5zUnrR1npgziI9KvbJmZZCZNZO75+93G44lEx9paT5oeurlE5vT7akgTzpN3aQ7tP/1spU8zkXa7FhkLGpiVeMYhxTK9FtFzvR49X19UOXU+w6B3ZtwF6Z6FBdKvLJk7gvZ9lj9vgscyf69VN6vmA/6+nlcIkhySeaN6Rssg/Y/2q0dGkhshY/XTOrdrMhLIXPD3kt5VczEiDjV7mfFDZREdGXqsmLE+Dxl9KshiLoos3rK+aD/NBBTJrEVRtPOW5HOhVbI/n811pyjeR1XYRVEURR4ngb5f7deb4ePP50f7V5tLa26R+c6QmRljiK0sfzJt9fjx60HES4lXInpyiB7UlteWdj7j26KV5fHocRvFef79b5ml99q/VI82t8Uz+UlAOyUfnhC4PG2H2rGyN5XhiyLSrx2Z4beVeK7rVhLiuqRENMr3Yi1fx7Fn8rGeK5B2xifvlki/VvbdmjMv+XwIlq7imXwfB747enKInogOJCFaMlIZz9tIO26L36PoTT4z/K4KqGjl+zjwrwn50ci6Lsmh1c31mWfvkveSkHYtIrPiCDaiorSuW/Nj6ZESj/Re+5fq4TZHJJ+ZCc1bE5n+IBvRDFsR/lRA16RLgWbtRloy8RKEZoO28/R4Pkk2LJlokumd+EvGStaW761J0UswfC60ebhbBeTN/2xbWZsaUhSMsNUzhmIFdBe84Jxd/VjXkeCI2BudfKjfXhKSEs+qCgiRnyETqTiykgSip8UfqU3r+HCfvnnw3S0ZjdghKb0LfYQ9bc54GzoufLGj1Q2SqHaqgKIVhycTSTJafzJsIUR8RvRkymg+PeL/hp+VHC5admZU73H8DiRuK3PD4ImD60OSj+XTlYys5PMhZPev2J/0P8la9KHtqjRJ8MSRkYT4a++a5vPqCqi4F198t7V2Hml3vNB2bSmIEVu7gParpQrj7SSd3B4fM7TcHlklVgVUtCI+B6QFqxfESJAjtjwZpE0mI3VbWMce+hmahEZRFVDRyiPuAT0RXm3uvAirAipaqXtAmxKpXFZVaNx+VUBFlKqAim6qAipaUZ/50BogMggz9Xgy0m7LZRGZqL930pMxhllk+byjPxlzaYHolarSDNsSVQEVRbGMSkBFUSyjElBRFMuoBFQUxTJe9TV8y801RF/vNzaRdsgNzF4sPaNuUI68UWz5rPmW5Y+kPzsO78yrElDWRHt6UDuz/JmtZ5beTPsz+j7rW7k7of75hiHGgJ1npi3p2RNtd7L8RfS09sHzZ6St3YjMhSXXEhuzmVHpZvhyIfmEtPtVAWWXnTN2nlG2uGyrn1nPc4way1ZbrWQ8TzSiwkSq2t5nxLIrIM2PO1E3oYuiWEYloKIollEJqCiKZVQCKopiGZWAiqJYRiWgoiiWUQmoKIqiKFZw/mO1H2/lVT/FKIpV0CQ366cY0lP00YcmtetZwIq9H9Chj8e/HXRiZ/5gccXimIXXtxm/z0IX/Ui7EX9m+gtVQNKvvs/z73/jS2Vouwg7JjL0F9ORYLfGcNSke8FmtaGs/KlGRBYd7+I3/HdwI8ds6hEsklx6ExltZw0oTxqSDDIhXrDzttaiGLFgepIPb0P9im4Ynk207ztUEii0Tz16ZoL4mrE5fXNFmWWXtrAsO1IAWoHs2bSQkgZirye5oFg6kL63Ju0oIxbTiApx1KJH184dks6FtHGP8v9LMkbfe86NwNtdtcQV9Ulq4wU8svP3QpMht6X1nV5DZCR7s/tk2dP8XVFFaLEVXTt3Y3RMHIdyBLMGMGN3R5hlJxNvQdH+aMGqBfVIesYXSSL0NbpIrUpiVlx4labUvyybLfp4NabJeX7PXG9N94BmBMEdd5MVRyCLmdVqJp7fvfGHjguimy/6GWPuJedRdkew5ZPQ2ZNIS8kWnXT3Xp0YpcqI+yRVVav9vtCOMxfR5DBjwWlHkRFHMG98UJm7IFZAK4890iT2TmxGX6zdDT1eZRHR65XivZUsegRDyerbDEYcwXqhc7raF4Rv7jASlDPLTAnJ51F+SL5Idj2ftP7wcZYCKNq/yLj0jmX0mGLp0OSkzajFDyob6fMuyQVl1lHsbuMylTvtAsUYKgb257G/BavsXBT7s+VN6KIo3kEloKIolvEfuihGCSM0nlIAAAAASUVORK5CYII="}');let e={};function r(){e.default=R(x)}function a(h){return 0===Object.keys(e).length&&r(),h?e[h]:e}let n=null;function o(h,y,x){return{r:parseInt(h.r+(y.r-h.r)*x),g:parseInt(h.g+(y.g-h.g)*x),b:parseInt(h.b+(y.b-h.b)*x),a:h.a}}function i(h){7===h.length?h+="ff":8===h.length&&(h+="0");var y=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);return y?{r:parseInt(y[1],16),g:parseInt(y[2],16),b:parseInt(y[3],16),a:parseInt(y[4],16)}:null}function l(h){let y=parseInt(h.r).toString(16),x=parseInt(h.g).toString(16),e=parseInt(h.b).toString(16),w=parseInt(h.a).toString(16);return y=1===y.length?"0"+y:y,x=1===x.length?"0"+x:x,e=1===e.length?"0"+e:e,w=1===w.length?"0"+w:w,`#${y}${x}${e}${w}`}function f(h){u("./fonts/Codepage-437.png").then((x=>{y.writeFileSync(h,JSON.stringify(x))}))}function c(h,x){u("./src/fonts/"+h,x).then((x=>{let e=h.split(".");y.writeFileSync(e[0]+".json",JSON.stringify(x))}))}function u(h,x){return x=x||0,new Promise(((e,w)=>{try{let w=0,r=0,a=9,n=16,o={},i=(t=h,Buffer.from(y.readFileSync(t)).toString("base64"));for(let h=0;h<256;h++)o[String.fromCharCode(h)]={x:w,y:r,w:a,h:n},w+=a,w>=288&&(w=0,x&&r+n<x&&(r+=n)),r>=128&&(r=0);e({cwidth:a,cheight:n,codepage:o,imagedata:i})}catch(h){w(h)}var t}))}function d(y,x,w,t,r,a,f){if(f=f||{},!a&&Object.keys(e).length>0)a=e.default;else if(!a)throw new Error("Font parameter empty and default fonts are not loaded.");if(r||(r="#ffffffff"),!(a&&a.codepage&&a.imagedata&&a.image&&a.cwidth&&a.cheight))throw new Error("Invalid font or font not loaded.");let c=a.cwidth*t.length,u=a.cheight;if(!n)try{n=document.createElement("canvas")}catch{n=(0,h.createCanvas)(c,u)}n.width=c,n.height=u;let d=n.getContext("2d");d.clearRect(0,0,c,u);let R=0;for(let h in t){var S=a.codepage[t[h]];if(console.log(t[h],S),!S)return void console.log("Error finding value in codepage for",t[h],`(${t[h].charCodeAt(0)})`);d.drawImage(a.image,S.x,S.y,S.w,S.h,R,0,S.w,S.h),R+=S.w}c=R;var I=d.getImageData(0,0,c,S.h),m=I.data;let v=i(r);for(let h=0;h<u;h++)for(let y=0;y<c;y++){let x=g(m,y,h,c);if(Object.keys(f).length>0){let e=!0;if(f.gradient&&x&&x.a>0){let x=f.gradient.horizontal?y/c:h/u;s(m,l(o(v,i(f.gradient.colour?f.gradient.colour:"#ffffffff"),x)),y,h,c),e=!1}f.background&&0===x.a&&s(m,f.background.colour,y,h,c),x&&x.a>0&&e&&s(m,r,y,h,c)}else x&&x.a>0&&s(m,r,y,h,c)}d.clearRect(0,0,c,u),d.putImageData(I,0,0),y.drawImage(n,0,0,c,S.h,x,w,c,u)}function s(h,y,x,e,w,t){y=i(y||"#00000000");let r=4*(x+w*e);return!(r<0||r>=h.length||(h[r]=y.r,h[r+1]=y.g,h[r+2]=y.b,h[r+3]=y.a,0))}function g(h,y,x,e,w){let t=4*(y+e*x);return!(t<0||t>=h.length)&&{r:h[t],g:h[t+1],b:h[t+2],a:h[t+3]}}function R(y){try{"string"==typeof y&&(y=JSON.parse(y));try{y.image=new h.Image}catch{y.image=new Image}return y.image.src="data:image/png;base64,"+y.imagedata,y}catch(h){throw new Error(h)}}function S(h){try{return R(y.readFileSync(h).toString())}catch(h){reject(h)}}})(),t})()));