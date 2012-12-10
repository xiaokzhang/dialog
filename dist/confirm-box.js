define("arale/dialog/0.9.2/confirm-box",["./anim-dialog","./base-dialog","$","arale/overlay/0.9.13/overlay","arale/position/1.0.0/position","arale/iframe-shim/1.0.0/iframe-shim","arale/widget/1.0.2/widget","arale/base/1.0.1/base","arale/class/1.0.0/class","arale/events/1.0.0/events","arale/easing/1.0.0/easing","arale/overlay/0.9.13/mask","arale/widget/1.0.2/templatable","gallery/handlebars/1.0.0/handlebars"],function(e,t,n){var r=e("$"),i=e("./anim-dialog"),s=e("arale/widget/1.0.2/templatable"),o=i.extend({Implements:s,attrs:{template:'<div class="ui-xbox"> <div class="ui-xbox-action"> {{#if hasCloseX}}<a href="javascript:;" class="ui-xbox-close" data-role="close" title="关闭">×</a>{{/if}} </div> <div class="ui-xbox-content"> <div class="ui-confirmXbox"> {{#if hasTitle}} <div class="ui-confirmXbox-title sl-linear-light" data-role="head"> <h2 data-role="title">{{title}}</h2> </div> {{/if}} <div class="ui-confirmXbox-container"> <div class="ui-confirmXbox-content" data-role="content">{{content}}</div> {{#if hasFoot}}        <div class="ui-confirmXbox-operation" data-role="foot"> {{#if hasOk}} <div class="ui-button ui-button-sorange ui-confirmXbox-confirm" data-role="confirm"> <a href="javascript:;" class="ui-button-text">确定</a> </div> {{/if}} {{#if hasCancel}} <div class="ui-button ui-button-swhite ui-confirmXbox-cancel" data-role="cancel"> <a href="javascript:;" class="ui-button-text">取消</a> </div> {{/if}} </div> {{/if}} </div> </div> </div> </div>',title:"默认标题",content:"默认内容",width:500,hasMask:!0,effect:null,align:{selfXY:["50%","50%"],baseXY:["50%","38%"]},hasTitle:!0,hasOk:!0,hasCancel:!0,hasCloseX:!0},parseElement:function(){this.model={title:this.get("title"),content:this.get("content"),hasTitle:this.get("hasTitle"),hasOk:this.get("hasOk"),hasCancel:this.get("hasCancel"),hasCloseX:this.get("hasCloseX"),hasFoot:this.get("hasOk")||this.get("hasCancel")},i.superclass.parseElement.call(this)}});o.alert=function(e,t,n){var i={content:e,hasTitle:!1,hasCancel:!1,hasCloseX:!1,onConfirm:function(){t&&t(),this.hide()}};(new o(r.extend(null,i,n))).show().after("confirm close",function(){this.destroy()})},o.confirm=function(e,t,n,i){var s={content:e,title:t||"确认框",hasCloseX:!1,onConfirm:function(){n&&n(),this.hide()}};(new o(r.extend(null,s,i))).show().after("confirm close",function(){this.destroy()})},o.show=function(e,t,n){var i={content:e,hasTitle:!1,hasOk:!1,hasCancel:!1,hasCloseX:!0,onConfirm:function(){t&&t(),this.hide()}};(new o(r.extend(null,i,n))).show().after("confirm close",function(){this.destroy()})},n.exports=o});