/**!
 * AngularJS file upload directive and http post
 * @author  Danial  <danial.farid@gmail.com>
 */
var angularFileUpload=angular.module("angularFileUpload",[]);(function(){if(typeof jQuery==="undefined"){var t=document.createElement("script");t.setAttribute("src","//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js");document.getElementsByTagName("head")[0].appendChild(t)}if(typeof FormData==="undefined"){var t=document.createElement("script");var n=typeof FileAPI==="undefined"?FileAPI.scriptBase||"":"";var r=document.getElementsByTagName("script");for(var i=0;i<r.length;i++){var s=r[i].src.indexOf("angular-file-upload.js");if(s>-1){n=r[i].src.substring(0,s)}}t.setAttribute("src",n+"FileAPI.min.js");document.getElementsByTagName("head")[0].appendChild(t)}})();angularFileUpload.directive("ngFileSelect",["$parse","$http",function(e,t){if(t.uploadFile===undefined){t.uploadFile=function(e){if(typeof FormData==="undefined"){var n={url:e.url,complete:function(t,r){var i=/^\s*(\[|\{[^\{])/,s=/[\}\]]\s*$/,o=/^\)\]\}',?\n/;var u=r.responseText;if(typeof u=="string"){u=u.replace(o,"");if(i.test(u)&&s.test(u))u=typeof u=="string"?JSON.parse(u):u}if(n.promiseThen!=null)n.promiseThen(u,r.status,null,e);if(n.promiseError!=null)n.promiseError(u,r.status,null,e);if(n.promiseSuccess!=null)n.promiseSuccess(u,r.status,null,e)}};if(e.file!=null){n.files={file:e.file}}if(e.files!=null){n.files={files:e.files}}var r=FileAPI.upload(n);return{then:function(e){n.promiseThen=e},success:function(e){n.promiseSuccess=e},error:function(e){n.promiseError=e}}}else{return t({method:"POST",url:e.url,headers:{"Content-Type":false},transformRequest:function(t){var n=new FormData;if(e.files!=null){for(var r=0;r<e.files;r++){n.append("file"+r,e.files[r])}}else{n.append("file",e.file)}return n}})}}}return function(t,n,r){if(typeof FormData==="undefined"){n.wrap('<div class="js-fileapi-wrapper" style="position:relative; overflow:hidden">')}var i=e(r["ngFileSelect"]);n.bind("change",function(e){var n=[];if(typeof FormData!=="undefined"){n=e.target.files}else{n=FileAPI.getFiles(e)}t.$apply(function(){i(t,{$files:n,$event:e})})})}}])
