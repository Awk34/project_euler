webpackJsonp([1],{1287:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(103),r=n(2384),o=n(429),_=n(834),s=n(835),h=n(430),l=n(194),a=n(195),c=n(2377),u=n(297),p=n(2356),d=n(196);n.d(e,"DetailModuleNgFactory",function(){return f});var x=function(t){function e(e){t.call(this,e,[c.a],[])}return __extends(e,t),Object.defineProperty(e.prototype,"_NgLocalization_5",{get:function(){return null==this.__NgLocalization_5&&(this.__NgLocalization_5=new l.c(this.parent.get(u.a))),this.__NgLocalization_5},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RadioControlRegistry_6",{get:function(){return null==this.__RadioControlRegistry_6&&(this.__RadioControlRegistry_6=new a.a),this.__RadioControlRegistry_6},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ROUTES_7",{get:function(){return null==this.__ROUTES_7&&(this.__ROUTES_7=[[{path:"",children:[{path:"",component:p.a},{path:"child-detail",loadChildren:function(){return n.e(4).then(n.bind(null,2358)).then(function(t){return t.ChildDetailModuleNgFactory})}}]}]]),this.__ROUTES_7},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new o.a,this._InternalFormsSharedModule_1=new _.a,this._FormsModule_2=new s.a,this._RouterModule_3=new h.g(this.parent.get(h.h,null)),this._DetailModule_4=new r.a,this._DetailModule_4},e.prototype.getInternal=function(t,e){return t===o.a?this._CommonModule_0:t===_.a?this._InternalFormsSharedModule_1:t===s.a?this._FormsModule_2:t===h.g?this._RouterModule_3:t===r.a?this._DetailModule_4:t===l.b?this._NgLocalization_5:t===a.a?this._RadioControlRegistry_6:t===d.a?this._ROUTES_7:e},e.prototype.destroyInternal=function(){},e}(i.a),f=new i.b(x,r.a)},2356:function(t,e,n){"use strict";var i=n(1),r=n(1288),o=n.n(r);n.d(e,"a",function(){return s});var _=n(839).keys().map(function(t){return parseInt(t.replace("./",""))}).sort(function(t,e){return t-e});console.log("`Detail` component loaded asynchronously");var s=function(){function t(){this.availableProblems=_}return t.prototype.ngOnInit=function(){console.log("hello `Detail` component"),this.loadProblem(this.availableProblems[0])},t.prototype.loadProblem=function(t){var e=this,i="";n.e(0).then(function(r){i=n(2351)("./"+t),e.jsText=o.a.highlightAuto(i).value;var _=n(2352)("./"+t).default;e.problem=new _}.bind(null,n)).catch(n.oe)},t.prototype.run=function(){var t=this.problem.run(),e=t.duration,n=t.solution;this.duration=parseInt(e)+"ms",this.solution=n},t.prototype.onChange=function(t){this.loadProblem(t)},t=__decorate([n.i(i._4)({selector:"detail",template:'\n    <h1>Hello from Detail</h1>\n    <select name="problem" id="problem" (change)="onChange($event.target.value)">\n        <option value="{{problem}}" *ngFor="let problem of availableProblems">{{problem}}</option>\n    </select>\n    <pre class="hljs" style="margin: 0;"><code [innerHtml]="jsText"></code></pre>\n    <button (click)="run()">Run</button>\n    <div>\n        <span>Duration: {{duration}}</span>\n        <br>\n        <span>Solution: <code>{{solution}}</code></span>\n    </div>\n\n    <!--<span>-->\n      <!--<a [routerLink]=" [\'./child-detail\'] ">-->\n        <!--Child Detail-->\n      <!--</a>-->\n    <!--</span>-->\n    <!--<router-outlet></router-outlet>-->\n  '}),__metadata("design:paramtypes",[])],t)}()},2372:function(t,e,n){"use strict";var i=n(298),r=n(28),o=n(21);n.d(e,"a",function(){return _});var _=function(){function t(t,e,n){this._changed=!1,this.context=new i.b(t,e,n),this._expr_0=r.b,this._expr_1=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){this.context.ngOnDestroy()},t.prototype.check_ngValue=function(t,e,n){(n||o.checkBinding(e,this._expr_0,t))&&(this._changed=!0,this.context.ngValue=t,this._expr_0=t)},t.prototype.check_value=function(t,e,n){(n||o.checkBinding(e,this._expr_1,t))&&(this._changed=!0,this.context.value=t,this._expr_1=t)},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){var n=!0;return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}();(function(){function t(t,e){this._changed=!1,this.context=new i.a(t,e)}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){var n=!0;if("change"==t){var i=this.context.onChange(e.target.value)!==!1;n=i&&n}if("blur"==t){var r=this.context.onTouched()!==!1;n=r&&n}return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t})()},2373:function(t,e,n){"use strict";var i=n(299),r=n(28),o=n(21);n.d(e,"a",function(){return _});var _=function(){function t(t,e,n){this._changed=!1,this.context=new i.b(t,e,n),this._expr_0=r.b,this._expr_1=r.b}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){this.context.ngOnDestroy()},t.prototype.check_ngValue=function(t,e,n){(n||o.checkBinding(e,this._expr_0,t))&&(this._changed=!0,this.context.ngValue=t,this._expr_0=t)},t.prototype.check_value=function(t,e,n){(n||o.checkBinding(e,this._expr_1,t))&&(this._changed=!0,this.context.value=t,this._expr_1=t)},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){var n=!0;return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}();(function(){function t(t,e){this._changed=!1,this.context=new i.a(t,e)}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){var n=!0;if("change"==t){var i=this.context.onChange(e.target)!==!1;n=i&&n}if("blur"==t){var r=this.context.onTouched()!==!1;n=r&&n}return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t})()},2377:function(t,e,n){"use strict";var i=n(2356),r=n(52),o=n(21),_=n(46),s=n(36),h=n(35),l=n(40),a=n(2372),c=n(2373),u=n(105),p=n(28),d=n(67),x=n(298),f=n(299),g=n(1284),y=n(106),v=n(300),m=n(431),b=n(197);n.d(e,"a",function(){return I});var R=function(){function t(){this._changed=!1,this.context=new i.a}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){var n=!0;return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t}(),T=o.createRenderComponentType("",0,_.b.None,[],{}),E=function(t){function e(n,i,r,o){t.call(this,e,T,s.a.HOST,n,i,r,o,h.b.CheckAlways)}return __extends(e,t),e.prototype.createInternal=function(t){return this._el_0=o.selectOrCreateRenderHostElement(this.renderer,"detail",o.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new D(this.viewUtils,this,0,this._el_0),this._DetailComponent_0_3=new R,this.compView_0.create(this._DetailComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new l.a(0,this,this._el_0,this._DetailComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===i.a&&0===e?this._DetailComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._DetailComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_0.destroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(r.a),I=new l.b("detail",E,i.a),N=[],C=function(t){function e(n,i,r,o,_){t.call(this,e,w,s.a.EMBEDDED,n,i,r,o,h.b.CheckAlways,_),this._expr_4=p.b}return __extends(e,t),e.prototype.createInternal=function(t){return this._el_0=o.createRenderElement(this.renderer,null,"option",o.EMPTY_INLINE_ARRAY,null),this._NgSelectOption_0_3=new a.a(new d.a(this._el_0),this.renderer,null),this._NgSelectMultipleOption_0_4=new c.a(new d.a(this._el_0),this.renderer,null),this._text_1=this.renderer.createText(this._el_0,"",null),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0,this._text_1],null),null},e.prototype.injectorGetInternal=function(t,e,n){return t===x.b&&0<=e&&e<=1?this._NgSelectOption_0_3.context:t===f.b&&0<=e&&e<=1?this._NgSelectMultipleOption_0_4.context:n},e.prototype.detectChangesInternal=function(t){var e=o.inlineInterpolate(1,"",this.context.$implicit,"");this._NgSelectOption_0_3.check_value(e,t,!1),this._NgSelectOption_0_3.ngDoCheck(this,this._el_0,t);var n=o.inlineInterpolate(1,"",this.context.$implicit,"");this._NgSelectMultipleOption_0_4.check_value(n,t,!1),this._NgSelectMultipleOption_0_4.ngDoCheck(this,this._el_0,t);var i=o.inlineInterpolate(1,"",this.context.$implicit,"");o.checkBinding(t,this._expr_4,i)&&(this.renderer.setText(this._text_1,i),this._expr_4=i)},e.prototype.destroyInternal=function(){this._NgSelectOption_0_3.ngOnDestroy(),this._NgSelectMultipleOption_0_4.ngOnDestroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e}(r.a),w=o.createRenderComponentType("",0,_.b.None,N,{}),D=function(t){function e(n,i,r,o){t.call(this,e,w,s.a.COMPONENT,n,i,r,o,h.b.CheckAlways),this._expr_37=p.b,this._expr_38=p.b,this._expr_39=p.b}return __extends(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);this._text_0=this.renderer.createText(e,"\n    ",null),this._el_1=o.createRenderElement(this.renderer,e,"h1",o.EMPTY_INLINE_ARRAY,null),this._text_2=this.renderer.createText(this._el_1,"Hello from Detail",null),this._text_3=this.renderer.createText(e,"\n    ",null),this._el_4=o.createRenderElement(this.renderer,e,"select",new o.InlineArray4(4,"id","problem","name","problem"),null),this._text_5=this.renderer.createText(this._el_4,"\n        ",null),this._anchor_6=this.renderer.createTemplateAnchor(this._el_4,null),this._vc_6=new u.a(6,4,this,this._anchor_6),this._TemplateRef_6_5=new y.a(this,6,this._anchor_6),this._NgFor_6_6=new g.a(this._vc_6.vcRef,this._TemplateRef_6_5,this.parentView.injectorGet(v.a,this.parentIndex),this.ref),this._text_7=this.renderer.createText(this._el_4,"\n    ",null),this._text_8=this.renderer.createText(e,"\n    ",null),this._el_9=o.createRenderElement(this.renderer,e,"pre",new o.InlineArray4(4,"class","hljs","style","margin: 0;"),null),this._el_10=o.createRenderElement(this.renderer,this._el_9,"code",o.EMPTY_INLINE_ARRAY,null),this._text_11=this.renderer.createText(e,"\n    ",null),this._el_12=o.createRenderElement(this.renderer,e,"button",o.EMPTY_INLINE_ARRAY,null),this._text_13=this.renderer.createText(this._el_12,"Run",null),this._text_14=this.renderer.createText(e,"\n    ",null),this._el_15=o.createRenderElement(this.renderer,e,"div",o.EMPTY_INLINE_ARRAY,null),this._text_16=this.renderer.createText(this._el_15,"\n        ",null),this._el_17=o.createRenderElement(this.renderer,this._el_15,"span",o.EMPTY_INLINE_ARRAY,null),this._text_18=this.renderer.createText(this._el_17,"",null),this._text_19=this.renderer.createText(this._el_15,"\n        ",null),this._el_20=o.createRenderElement(this.renderer,this._el_15,"br",o.EMPTY_INLINE_ARRAY,null),this._text_21=this.renderer.createText(this._el_15,"\n        ",null),this._el_22=o.createRenderElement(this.renderer,this._el_15,"span",o.EMPTY_INLINE_ARRAY,null),this._text_23=this.renderer.createText(this._el_22,"Solution: ",null),this._el_24=o.createRenderElement(this.renderer,this._el_22,"code",o.EMPTY_INLINE_ARRAY,null),this._text_25=this.renderer.createText(this._el_24,"",null),this._text_26=this.renderer.createText(this._el_15,"\n    ",null),this._text_27=this.renderer.createText(e,"\n\n    ",null),this._text_28=this.renderer.createText(e,"\n      ",null),this._text_29=this.renderer.createText(e,"\n        ",null),this._text_30=this.renderer.createText(e,"\n      ",null),this._text_31=this.renderer.createText(e,"\n    ",null),this._text_32=this.renderer.createText(e,"\n    ",null),this._text_33=this.renderer.createText(e,"\n  ",null);var n=o.subscribeToRenderElement(this,this._el_4,new o.InlineArray2(2,"change",null),this.eventHandler(this.handleEvent_4)),i=o.subscribeToRenderElement(this,this._el_12,new o.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_12));return this.init(null,this.renderer.directRenderer?null:[this._text_0,this._el_1,this._text_2,this._text_3,this._el_4,this._text_5,this._anchor_6,this._text_7,this._text_8,this._el_9,this._el_10,this._text_11,this._el_12,this._text_13,this._text_14,this._el_15,this._text_16,this._el_17,this._text_18,this._text_19,this._el_20,this._text_21,this._el_22,this._text_23,this._el_24,this._text_25,this._text_26,this._text_27,this._text_28,this._text_29,this._text_30,this._text_31,this._text_32,this._text_33],[n,i]),null},e.prototype.injectorGetInternal=function(t,e,n){return t===y.b&&6===e?this._TemplateRef_6_5:t===m.a&&6===e?this._NgFor_6_6.context:n},e.prototype.detectChangesInternal=function(t){var e=this.context.availableProblems;this._NgFor_6_6.check_ngForOf(e,t,!1),this._NgFor_6_6.ngDoCheck(this,this._anchor_6,t),this._vc_6.detectChangesInNestedViews(t);var n=this.context.jsText;o.checkBinding(t,this._expr_37,n)&&(this.renderer.setElementProperty(this._el_10,"innerHTML",this.viewUtils.sanitizer.sanitize(b.b.HTML,n)),this._expr_37=n);var i=o.inlineInterpolate(1,"Duration: ",this.context.duration,"");o.checkBinding(t,this._expr_38,i)&&(this.renderer.setText(this._text_18,i),this._expr_38=i);var r=o.inlineInterpolate(1,"",this.context.solution,"");o.checkBinding(t,this._expr_39,r)&&(this.renderer.setText(this._text_25,r),this._expr_39=r)},e.prototype.destroyInternal=function(){this._vc_6.destroyNestedViews()},e.prototype.createEmbeddedViewInternal=function(t){return 6==t?new C(this.viewUtils,this,6,this._anchor_6,this._vc_6):null},e.prototype.handleEvent_4=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("change"==t){var i=this.context.onChange(e.target.value)!==!1;n=i&&n}return n},e.prototype.handleEvent_12=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;if("click"==t){var i=this.context.run()!==!1;n=i&&n}return n},e}(r.a)},2384:function(t,e,n){"use strict";var i=n(39),r=n(104),o=n(1),_=n(836),s=n(2385),h=n(2356);n.d(e,"a",function(){return l}),console.log("`Detail` bundle loaded asynchronously");var l=function(){function t(){}return t.routes=s.a,t=__decorate([n.i(o.i)({declarations:[h.a],imports:[i.b,r.a,_.a.forChild(s.a)]}),__metadata("design:paramtypes",[])],t)}()},2385:function(t,e,n){"use strict";var i=n(2356);n.d(e,"a",function(){return r});var r=[{path:"",children:[{path:"",component:i.a},{path:"child-detail",loadChildren:function(){return n.e(4).then(n.bind(null,2358)).then(function(t){return t.ChildDetailModuleNgFactory})}}]}]}});