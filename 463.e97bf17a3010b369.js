"use strict";(self.webpackChunkdev_playground=self.webpackChunkdev_playground||[]).push([[463],{7463:(D,c,t)=>{t.r(c),t.d(c,{FileUploadWithTableTestModule:()=>d});var g=t(6895),m=t(9299),s=t(9646),v=t(4986),C=t(7272),h=t(5698),y=t(4482),F=t(5403),A=t(5032),Z=t(9718),W=t(5577);function f(n,l){return l?e=>(0,C.z)(l.pipe((0,h.q)(1),function U(){return(0,y.e)((n,l)=>{n.subscribe((0,F.x)(l,A.Z))})}()),e.pipe(f(n))):(0,W.z)((e,u)=>n(e,u).pipe((0,h.q)(1),(0,Z.h)(e)))}var O=t(5963);function p(n,l=v.z){const e=(0,O.H)(n,l);return f(()=>e)}var a=t(4650),T=t(7009),b=t(6497),r=t(3546);class i{constructor(l){this.snackbar=l}delete(l){return this.snackbar.open(`Datei '${l.name}' gel\xf6scht`,"OK",{duration:2e3}),(0,s.of)(!0).pipe(p(this.randomDelay))}upload(l){return this.snackbar.open(`Datei '${l.name}' hochgeladen`,"OK",{duration:2e3}),(0,s.of)(l).pipe(p(this.randomDelay))}uploadAll(l){const e=l.map(u=>u.name).join(", ");return this.snackbar.open(`Dateien '${e}' hochgeladen`,"OK",{duration:2e3}),(0,s.of)(l).pipe(p(this.randomDelay))}get randomDelay(){return 5e3*Math.random()+1e3}}i.\u0275fac=function(l){return new(l||i)(a.Y36(T.ux))},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-file-upload-with-table"]],decls:12,vars:9,consts:[[3,"allowOnlyFolders","deleteCallback","multiple","uploadCallback"],[3,"allowOnlyFolders","deleteCallback","multiple","uploadAllCallback","uploadCallback"]],template:function(l,e){1&l&&(a.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),a._uU(3,"Alle Dateien \xfcber einzelne Schnittstelle"),a.qZA()(),a.TgZ(4,"mat-card-content"),a._UZ(5,"gpx-file-upload-with-table",0),a.qZA()(),a.TgZ(6,"mat-card")(7,"mat-card-header")(8,"mat-card-title"),a._uU(9,"Alle Dateien \xfcber Bulk-Schnittstelle"),a.qZA()(),a.TgZ(10,"mat-card-content"),a._UZ(11,"gpx-file-upload-with-table",1),a.qZA()()),2&l&&(a.xp6(5),a.Q6J("allowOnlyFolders",!0)("deleteCallback",e.delete.bind(e))("multiple",!0)("uploadCallback",e.upload.bind(e)),a.xp6(6),a.Q6J("allowOnlyFolders",!0)("deleteCallback",e.delete.bind(e))("multiple",!0)("uploadAllCallback",e.uploadAll.bind(e))("uploadCallback",e.upload.bind(e)))},dependencies:[b.mH,r.a8,r.dn,r.dk,r.n5]});const z=[{path:"",component:i}];class o{}o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[m.Bz.forChild(z),m.Bz]});class d{}d.\u0275fac=function(l){return new(l||d)},d.\u0275mod=a.oAB({type:d}),d.\u0275inj=a.cJS({imports:[g.ez,o,b.hW,T.ZX,r.QW]})}}]);