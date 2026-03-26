const PI = Math.PI;
const E = Math.E;
const isArray =(a)=>{return Array.isArray(a)};
const isObject =(a)=>{
	return typeof a === 'object' 
	&& !isArray(a)
	&& !isNumber(a)
	&& !isNull(a)
	&& !isElmt(a)
	&& !(a == 'undefined')
	};
const isObjectEmpty =(a)=>{return Object.keys(a).length==0};
const isNumber =(a)=>{return !isNaN(parseFloat(a))};
const isNull =(a)=>{return typeof a === null};
const isArrNumb =(a)=>{
	if(!isArray(a)){return false};a.map(c=>{if(!isNumber(c)) return false})};
const isElmt	=(a)=>{return (typeof a==="object"&&a!==null&&a.nodeType ===1&&typeof a.nodeName === "string"&&a !== "undefined")}
const isString	=(a)=>{return typeof a=='string'}
const isFunction=(a)=>{
 return a && {}.toString.call(a) === '[object Function]';
}
const isBoolean=(a,val)=>{
	return a === true || a === false && a === val
	}
const isMobile 	= /Android|Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent);
const isTablet = isMobile ? /Tablet|iPad|Nexus 7|Nexus 10|KFAPWI/i.test(navigator.userAgent)
: /Nexus 7|Nexus 10|KFAPWI/i.test(navigator.userAgent)
const to		= function(a,b){
	if(!a||!b)return;
		 if(isString(a)	&& isString(b)){b+a}
	else if(isString(a)	&& isElmt(b)	){b.innerHTML+=a}
	else if(isString(a)	&& isArray(b)	){b.push(a)}
	else if(isNumber(a)	&& isElmt(b)	){b.innerHTML+=''+a}
	else if(isBoolean(a)	&& isElmt(b)	){b.innerHTML+=a.toString()}
	else if(isElmt(a)		&& isString(b)){_elms(b).map(c=>{to(a,c)})}
	else if(isElmt(a)		&& isElmt(b)	){b.appendChild(a);return a}
	else if(isElmt(a)		&& isArray(b)	){b.push(a)}
	else if(isArray(a)	&& isString(b)){b+a.toString()}
	else if(isArray(a)	&& isElmt(b)	){a.map(c=>to(c,b))}
	else if(isArray(a)	&& isArray(b)	){b.push(a);return a}
}
const toNumbers = function(...arg){
	var a = JSON.stringify(arg);
	var nArr = []
	var arr = a
		.replaceAll(/[,\[\]\(\)\s+"]/g, ' ')
		.split(' ')
		.map((c,i)=>{if(!isNaN(parseFloat(c)))nArr.push(parseFloat(c))})
	console.log(a)
    //.trim()
		// arr
		return nArr
 }
class Sesuatu{constructor(type='sesuatu',name=''
,id=new Date().getTime()){
		this.name 	= name?name:'unName';
		this.type 	= type
		this.id 	= id
		Array.from(document.querySelectorAll('[id]')).map(c=>{
			var idNe = c.id.match(/\d/g)
			if(idNe){
				var idNumb = parseFloat(idNe.join(''))
				while(this.id == idNumb){this.id = new Date().getTime()}
			}
		})
		this.diedit	= this.id
		this.data={}
	}
	set(a,b){
		this[a] = b
		return this
	}
};
const PointEvent 	= function(i = 0,e=event){
	;
	var getT = ()=>{
		if(e.type === 'touchend'){
		return e.changedTouches
		}
		else{ return e.touches}
	}
	var x,y
    const isT = event.type.indexOf('touch') >= 0 ;
	return [
		Math.floor(isT ? getT(e)[i].clientX: e.pageX)
		,Math.floor(isT ? getT(e)[i].clientY: e.pageY)
		]
	}
const BoxPoints		= function(p1=[-1,-1],p2=[0,0],nam){
	  if(isElmt(p1)){
		  //var bb = p1.getBoundingClientRect()
		  var bb = p2||p2=='screen'?p1.getBoundingClientRect():p1.getBBox()
			p1 = [bb.x,bb.y]
			p2 = [bb.x+bb.width,bb.y+bb.height]
	  }
	  else if(isArray(p1)&&isElmt(p1[0])){
		  var sc = p2||p2=='screen'?'screen':''
		  return this.fromElms(p1,'screen')
	  }
	  else{
		 if(!p1){p1=[-1,-1]}
		if(!p2){p2=[1,1]}
		  
	  }
	 if(nam){this.name = nam}
	this.p1			= this.pStart	= this.xy1 = p1
	this.p2			= this.pEnd		= this.xy2 = p2
    this.x1 		= this.x 		= p1[0];
    this.y1			= this.y		= p1[1];
    this.x2 		= p2[0]
    this.y2 		= p2[1]
	
	this.a			= 
	this.angle		= this.p1.angleTo(this.p2)
	
	this.xTrans		= p2[0]-p1[0]
    this.yTrans		= p2[1]-p1[1]
    this.xyTrans	= [this.xTrans,this.yTrans]
	
    this.xMin 		= Math.min(p1[0], p2[0]);
    this.xMax 		= Math.max(p1[0], p2[0]);
    this.xDist		= this.w 	= Math.abs(this.xTrans)
    this.xMid 		= this.xMin + this.xDist / 2;

    this.yMin 		= Math.min(p1[1], p2[1]);
    this.yMax 		= Math.max(p1[1], p2[1]);
	this.yDist		= this.h = Math.abs(this.yTrans)
    this.yMid 		= this.yMin + this.yDist / 2;
	
	this.maxDist	= Math.max(this.xDist,this.yDist);
	this.minDist	= Math.min(this.xDist,this.yDist);
    this.xyDist		= [this.xDist,this.yDist];
	
    this.d			= Math.sqrt(this.xDist**2+this.yDist**2)
	
	
    this.pMin 	= [ this.xMin , this.yMin]
    this.pMid 	= [ this.xMid , this.yMid]
	this.pMax	= [ this.xMax , this.yMax];
	this.pTL	= [ this.xMin , this.yMin]
	this.pTM	= [ this.xMid , this.yMin]
	this.pTR	= [ this.xMax , this.yMin]
	this.pML	= [ this.xMin , this.yMid]
	this.pM		= [ this.xMid , this.yMid]
	this.pMR	= [ this.xMax , this.yMid]
	this.pBL	= [ this.xMin , this.yMax]
	this.pBM	= [ this.xMid , this.yMax]
	this.pBR	= [ this.xMax , this.yMax]
	
	this.pRect =  this.pMin.pRect(this.pMax)
	}
{var bP= BoxPoints.prototype;
	bP.isInBox=function(o){
	return (
		   this.xMin	>	o.xMin
		&& this.yMin	>	o.yMin
		&& this.xMax	<	o.xMax
		&& this.yMax	<	o.yMax
		)
	}
	bP.distToBox=function(o){
	return (
		   this.xMin	>	o.xMin
		&& this.yMin	>	o.yMin
		&& this.xMax	<	o.xMax
		&& this.yMax	<	o.yMax
		)
	}
	
	bP.fromElms=function(arrElms,sc){
		var i=0,pMin,pMax;
		if(arrElms.length>0){
			
		  var bb = sc=='screen'?arrElms[0].getBoundingClientRect():arrElms[0].getBBox()
			pMin = [bb.x,bb.y]
			pMax =[bb.x+bb.width,bb.y+bb.height]
		}
		for(i=0;i<arrElms.length;i++){		
		 var bb = sc=='screen'?arrElms[i].getBoundingClientRect():arrElms[i].getBBox()
		pMin = pMin.pMin([bb.x,bb.y])
		pMax = pMax.pMax([bb.x+bb.width,bb.y+bb.height])
	}
		return new BoxPoints(pMin,pMax)
	}
	bP.points_pojok=()=>{return [this.pMin,this.pMax]}
	bP.outerSectBoxr=n=>{return new Box_fromTwoPoint(
		this.pMin.transXY([-n,-n]),this.pMax.transXY([n,n]))
		}
	isBigestFromr=n=>{
	  return (o.xMin>this.xMin&&this.xMax>o.xMax&&o.yMin>this.yMin&&this.yMax>o.yMax)
	}
	bP.translate =function(t){
		var pMin  = this.pMin.translate(t)
			,pMax = this.pMax.translate(t)
		return new BoxPoints(pMin,pMax)
	}
	bP.boxOfset =function(d){
		var pMin  = this.pMin.translate([-d,-d])
			,pMax = this.pMax.translate([d,d])
		return new BoxPoints(pMin,pMax)
	}
}
var A = Array.prototype;{
A.getArrIf = function(p,v){
		var  nArr = []
		if(v){this.map((c,i)=>{if(c[p]==v)nArr.push(c)})		
		}
		else if(p){
			this.map(c=>{if(c[p]&&nArr.indexOf(c[p])<0)nArr.push(c[p])
			})
		}
		return nArr
}
A.getById = function(v){
		var  nArr = []
		if(v){this.map((c,i)=>{if(c['id']==v)nArr.push(c)})		
		}
		return nArr[0]
}
A.getBy = function(p,v,f){
	if(f)return f(this.getBy(p,v))
	return this.getArrIf(p,v)[0]
}
A.toListView = function(){
	
}
A.transX	= function(d=0){
	if(d==[0,0])return this;
	var arrP = this.toSingleArr(),l=arrP.length,i
	,nArr=[];
	for(i=0;i<l;i++){if(i%2==0)nArr.push(arrP[i]+d,arrP[i+1])}
	return nArr
}

A.limitX	= function(a,b){
	arr = this.toSingleArr()
	var i,l=arr.length,nArr=[];for(i=0;i<l;i++){
		if(i%2==0&&arr[i]>=a&&arr[i]<=b)nArr.push(arr[i],arr[i+1])}
	return nArr
}
A.limY	= function(a=0,b=window.innerWidth){
	arr = this.toSingleArr()
	var i,l=arr.length,nArr=[];for(i=0;i<l;i++){
		if(i%2==0&&arr[i+1]>a&&arr[i+1]<b)nArr.push(arr[i],arr[i+1])}
	return nArr
}
A.limitY	= function(d=0){
	if(d==[0,0])return this;var i,l=this.length,nArr=[];for(i=0;i<l;i++){
		if(i%2==0&&this[i+1]<d)nArr.push(this[i],this[i+1])}
	return nArr
}
A.transY	= function(d=0){
	if(d==[0,0])return this;
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0)nArr.push(this[i],this[i+1]+d)}
	return nArr
}
A.addTo		= function(arr){
	arr.push(this)
	return arr[arr.indexOf(this)]
	}
A.transRot	= function(a=0, d=0){
	if(d==0)return this; var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0){
			p = [
				this[i]+d*Math.cos(a/180*Math.PI)
				,this[i+1]+d*Math.sin(a/180*Math.PI)
				]
			nArr.push(p[0],p[1])
		}
	}
	return nArr;
	}
A.round		= function(){
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0)nArr.push(Math.round(this[i]),Math.round(this[i+1]))
			};return nArr;
	}
A.toFixed	= function(d=0){
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0)nArr.push(this[i].toFixed(d),this[i+1].toFixed(d))
			};return nArr;
	}
A.rotate = function(a=0, or = this.pCenter()){
	if(a==0)return this
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0){
			var  p	= [this[i],this[i+1]]
				 tr = p.pTrans(or)
			var pA = p.angleTo(or)
			var pDist = p.distFrom(or)
			var nP	= or.transRot(180+(a+pA),pDist)
			nArr.push(nP[0],nP[1]);
		}
	};
	return nArr;
}
A.skew 		= function(a=0, or = this.pCenter()){
	if(a==0)return this
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0){
			var  p		= [this[i],this[i+1]]
			var pA 		= p.angleTo(origin)
			var pDist 	= p.distTo(origin)
			var nP		= origin.transRot(180+(a+pA),pDist)
			nArr.push(p[0].fixed(3),nP[1].fixed(3));
		}
	};
	return nArr;
}
A.scale		= function(sC=[1,1], or = this.pCenter()){
		
	var i,l=this.length,nArr=[];
	for(i=0;i<l;i++){
		if(i%2==0)nArr.push(
		or[0]+(sC[0]*(this[i]-or[0])).fixed(3),
		or[1]+(sC[1]*(this[i+1]-or[1])).fixed(3)
		)
			}
	return nArr
}
A.translate	= function(d=[0,0]){var i,l=this.length,nArr=[];
	if(d==[0,0]||l==1)return this;
	for(i=0;i<l;i++){if(i%2==0)nArr.push(
		this[i]+d[0],
		this[i+1]+d[1]
		)}
	return nArr
}
A.angleTo	= function(p,p2){   
    var x = this[0], y = this[1],sudut,sudut1,sudut2;
	sudut = (Math.atan2(p[1] - y, p[0] - x))*180/Math.PI
	if(p2){
		var sudut2 = (Math.atan2(p2[1] - y, p2[0] -x))*180/Math.PI
			 sudut =sudut2-sudut
	}
	if(-180<sudut && sudut<0)sudut +=360
	return sudut>360?sudut%360:sudut
	}
A.angleQd	= function(p,p2){
	a = this.angleTo(p,p2)
	if(0<a&&a<91)return 1
	else if(90<a&&a<181)return 2
	else if(180<a&&a<271)return 3
	else if(271<a&&a<360)return 4
	}
A.angleMirror = function(aM){
	
	var a = p1.distTo(this)
	,b = p2.distTo(this)
	,c = p1.distTo(p2)
	,sudut =Math.acos((b*b+a*a-c*c)/(2*b*a))*180/Math.PI
	if(-180<sudut && sudut<0)sudut +=360
	return sudut>360?sudut%360:sudut
	
	return this.angleTo(p1)+this.angleTo(p2)

}
A.angleFromTo = function(p1,p2){
	
	var a = p1.distTo(this)
	,b = p2.distTo(this)
	,c = p1.distTo(p2)
	,sudut =Math.acos((b*b+a*a-c*c)/(2*b*a))*180/Math.PI
	if(-180<sudut && sudut<0)sudut +=360
	return sudut>360?sudut%360:sudut
	
	return this.angleTo(p1)+this.angleTo(p2)

}

A.pMin	= function(...arg){
	var arr = this.toNumbers()
	var i,l=arr.length,xMin = arr[0],yMin = arr[1]
		for(i=0;i<l;i++){
		if(i%2==0){
			xMin = arr[i]<xMin?arr[i]:xMin
			yMin = arr[i+1]<yMin?arr[i+1]:yMin
		}
		}
		arr = arg.toNumbers()
		l=arr.length
		for(i=0;i<l;i++){
		if(i%2==0){
			xMin = arr[i]<xMin?arr[i]:xMin
		}
		else{
			yMin = arr[i]<yMin?arr[i]:yMin
		}
		}
		return [xMin,yMin]
	
}
A.pMax	= function(...arg){
	var arr = this.toNumbers()
	var i,l=arr.length,xMin = arr[0],yMin = arr[1]
		for(i=0;i<l;i++){
		if(i%2==0){
			xMin = arr[i]>xMin?arr[i]:xMin
			yMin = arr[i+1]>yMin?arr[i+1]:yMin
		}
		}
		arr = arg.toNumbers()
		l=arr.length
		for(i=0;i<l;i++){
		if(i%2==0){
			xMin = arr[i]>xMin?arr[i]:xMin
		}
		else{
			yMin = arr[i]>yMin?arr[i]:yMin
		}
		}
		return [xMin,yMin]
	
}
A.pMid	= function(...arg){
	var pMin = this.pMin(arg)
	var pMax = this.pMax(arg)
	var xDist = pMax[0]-pMin[0]
	var yDist = pMax[1]-pMin[1]
	return [pMin[0]+xDist*.5,pMin[1]+yDist*.5]
}
A.pMidRight	= function(p=this){
	return this.pMid(p).transX(this.xDist(p)/2)
}
A.pTopRight	= function(p=this){
	return this.pMin(p).transX(this.xDist(p))
}
A.pCross = function(p){
    return [p[0] + this.pTrans(p)[0],p[1] + this.pTrans(p)[1]]
	}
A.transTo = function(p){
		if(!d)return this; var i,l=this.length,nArr=[];
		var pTrans = [this.xAll.sort()[0],this.yAll.sort()[1]].pTrans(p)
	for(i=0;i<l;i++){
		if(i%2==0){
			let p = [this[i],this[i+1]].translate(pTrans)
			nArr.push(p[0],p[1])
		}
	}
	return nArr;
	
	}
A.pMirror = function(origin = [0,0]){
    return [
	this.xMirror(origin)[0],this.yMirror(origin)[1]]
	}
A.yMirror = function(p){
    return [this[0]+this.xTrans(p)*2,this[1]]
	}
A.xMirror = function(p){
    return [this[0],this[1]+this.yTrans(p)*2]
	}

A.pCenter = function(){
let xMin = this.xAll.sort()[0]
	,xMax = this.xAll.sort().reverse()[0]
	,yMin = this.yAll.sort()[0]
	,yMax = this.yAll.sort().reverse()[0]
	return [xMin,yMin].pMid([xMax,yMax])
}
A.reverseEach = function(n){
	 arr = this.toSingleArr().reverse()
	 var nArr =[],i,l=arr.length
	for(i=0;i<l;i++){
		if(i%n==0){
			nArr.push(arr.slice(i,i+n).reverse())
			}
		}
	return nArr.toSingleArr()
 }
A.pRight = function(){
	let xMin = this.xAll.sort()[0]
	,xMax = this.xAll.sort().reverse()[0]
	,yMin = this.yAll.sort()[1]
	,yMax = this.yAll.sort().reverse()[0]
	return [xMax,yMin].pMid([xMax,yMax])
}
A.pLeft = function(){
	let xMin = this.xAll.sort()[0]
	,xMax = this.xAll.sort().reverse()[0]
	,yMin = this.yAll.sort()[1]
	,yMax = this.yAll.sort().reverse()[0]
	return [xMin,yMin].pMin([xMin,yMin])
}
A.pTop = function(){
	let xMin = this.xAll.sort()[0]
	,xMax = this.xAll.sort().reverse()[0]
	,yMin = this.yAll.sort()[1]
	,yMax = this.yAll.sort().reverse()[0]
	return [xMin,yMin].pMid([xMax,yMin])
}
A.pDist		= function(p){
    return [Math.abs(p[0] - this[0]),Math.abs(p[1] - this[1])]
	}
A.distTo 	= function(p){return Math.sqrt((p[0]-this[0])**2+(p[1]-this[1])**2)}
A.distToLine = function(...arg){
		arg = arg.toNumbers()
		,x1 = arg[0]
		,y1 = arg[1]
		,x2 = arg[2]
		,y2 = arg[3]
	if(arg.length==4){
    const A = y2 - y1;
    const B = x1 - x2;
    const C = x2 * y1 - x1 * y2;
	return Math.abs(A * this[0] + B * this[1] + C) / Math.sqrt(A * A + B * B);	
	}
}
A.distToPoligon = function(...arg){
		arg = arg.toLine()
		var jarak = this.toLine(arg[0])
		arg.map((c,i)=>{
			jarak = this.distToLine(arg[i])<jarak? this.distToLine(arg[i]):jarak
			})
		return jarak
}

A.distFrom 	= function(p){return Math.sqrt((p[0]-this[0])**2+(p[1]-this[1])**2)}
A.xTrans 	= function(p){return p[0]-this[0]}
A.yTrans 	= function(p){return p[1]-this[1]}
A.pTrans	= function(p){return [this.xTrans(p),this.yTrans(p)]}
A.balikArah =  function(){
	let i = 0,l = this.toSingleArr().length,nArr = []
	for(i=0;i<l;i++){
		if(i%2==0){nArr.push(this[l-i-2],this[l-i-1])}
	}
	return nArr
}
A.xDist	= function(...arg){
	return this.pMax(arg)[0]-this.pMin(arg)[0]
}
A.yDist	= function(...arg){
	return this.pMax(arg)[1]-this.pMin(arg)[1]
}

A.xMid		= function(p){return this.pMid(p)[0]}
A.yMid		= function(p){return this.pMid(p)[1]}

A.maxDist 	= function(p){return Math.max(this.xDist(p),this.yDist(p))}
A.minDist 	= function(p){return Math.min(this.xDist(p),this.yDist(p))}
A.snapX	= function(tol,...xArr){let i,l = xArr.length,nP = this
	for(let i=0; i<l; i++){
		 xC = 	this[0]>=xArr[i]-tol
			&&	this[0]<=xArr[i]+tol
		 if(xC)nP=[xArr[i],nP[1]]
	 }
	 return nP
	}
A.isInRadius= function(r,p){return this.distFrom(p)<=r }
A.to 		= function(b){
	if(dataType.isArray(b)){b.push(this);return this}
}
A.pRect = function(p){
	return [
	this.pMin(p)
	,[this.pMax(p)[0],this.pMin(p)[1]]
	,[this.pMax(p)[0],this.pMax(p)[1]]
	,[this.pMin(p)[0],this.pMax(p)[1]]
	,this.pMin(p)
	]
}
A.fixed = function(n=2){
	var i,l=this.length;
	for(i=0;i<l;i++){
		this[i]=this[i].fixed(n)
	}
	return this
}
A.getInArr	= function(key,val){var hasil = []
	this.map(c=>{if(c[key]==val)hasil = c})
	return hasil
	}
A.toNumbers =  function(){
	var a = JSON.stringify(this);

	var nArr = []
	var arr = a
    .replaceAll(/[,\[\]\'\"\(\)]/g, ' ')
    .replaceAll(/\s+/g, ' ')
    .trim()
    .split(' ')
	.map((c,i)=>{nArr[i]=Number(c)})
	return nArr
	}
A.toPoints = function(){
	var nArr = []
	a = this.toNumbers();
	a.map((c,i)=>{
		if(i%2==0)nArr.push([a[i],a[i+1]])
			})
	return nArr
}
A.toLine = function(){
	var nArr = []
	a = this.toPoints();
	a.map((c,i)=>{nArr.push([a[i],a[i+1]])})
	return nArr
}
A.toSingleArr =  function(){
	var nArr = []
	let apply=(a)=>{
		if(Array.isArray(a))a.map(c=>apply(c))
		else nArr.push(a)
	}
	this.map(c=>apply(c))
	return nArr
}
Object.defineProperty(A, 'fMin',{
 get: function(){
	 var min = this[0]
	 this.forEach(c=>{
		 if(c<min)min=c
	 })
		 return min
 }
 })
Object.defineProperty(A, 'fMax',{
 get: function(){
	 var max = this[0]
	 this.forEach(c=>{
		 if(c>max)max=c
	 })
	 
		 return max
 }
 })
Object.defineProperty(A, 'xAll',{
 get: function(){
	 arr = this.toNumbers()
	 var nArr =[],i,l=arr.length
	for(i=0;i<l;i++){if(i%2==0)nArr.push(this[i])}
	return nArr
 }
 })
Object.defineProperty(A, 'yAll',{
 get: function(){
	 arr = this.toSingleArr()
	 var nArr =[],i,l=arr.length
	for(i=0;i<l;i++){if(i%2==0)nArr.push(this[i+1])}
	return nArr
 }
 })
}
var N = Number.prototype;{
N.snapTo = function(tol=10){var arg = arguments,l = arg.length
	if(l==1){return this-this%tol}
	for(let i=1;i<l;i++){
		if(this>arg[i]-tol && this <=arg[i]+tol)return arg[i]
	}
	return this
}
N.floor = function(){return Math.floor(this)}
N.fixed = function(n=2){return Number(this.toFixed(n))}
}
const _ 	= function(...arg){
	var splitText = arg[0].replace(/\t+\n+/g,'')
		.split(/(?=[#.\s/[])/g)
	var tagName	= splitText[0][0]=='#'?'div':splitText[0];
	var isSVG =["svg",'defs',"g","clipPath","rect", "path", "line","circle", "ellipse", "polygon", "polyline", "svg", "rect", "image", "use", "foreignObject", "text","tspan","animateTransform",
	'linearGradient','stop']
			.includes(tagName)
			;
	var nElm = isSVG? document.createElementNS("http://www.w3.org/2000/svg"
	,tagName)
			: document.createElement(tagName.toLowerCase());
	var clasStr=' ',idStr='',attrs={};
	for(let i=1;i<splitText.length;i++){
		var isId = splitText[i][0] == '#'
		var isClass = splitText[i][0] == '.'
		var isAttr  = splitText[i][0] == '['
		if(isId)idStr= splitText[i].slice(1)
		if(isClass)clasStr+=' '+splitText[i].slice(1)
		if(isAttr){
			var attrStr = splitText[i].slice(1,-1)
			var attr = attrStr.split('=')
			nElm.setAttribute(attr[0],attr[1])
		}
	};
	if(idStr!=='')nElm.id = idStr
	if(clasStr!==' ')nElm.setAttribute('class',clasStr.trim())
	for(let i=1;i<arg.length;i++){to(arg[i],nElm)};
	return nElm
}
const _elms 	= function(query){
	var hasil=[]
	if(Array.isArray(query)){return query}
	else if(typeof query == 'string'){
	   return Array.from(document.querySelectorAll(query))
	   }
	else if(typeof query == 'object'){
	   if(query.constructor.name
		&&
		query.constructor.name =='HTMLCollection' 
		|| query.constructor.name =='NodeList' 
		){return Array.from(query)}
		else{return [query]}
	}
}
const _id = (id)=>{return document.getElementById(id)}

///////////////////////////////////////////////////////
//HTML MANIPULATION
const upDateAppdata = function() {
    if (window.AppInventor) {
        Ai2.storeDB(appData.systemName, appData)
    } else if (localStorage) {
        localStorage.setItem(appData.systemName, JSON.stringify(appData))
    }
}
const HTMLremove 	= function(a,dur) {
 if(!dur)_elms(a).map(c=>c.remove())
 else{setTimeout(()=>{_elms(a).map(c=>c.remove())},dur*1000)}
}
const HTMLedit 	= function(a) {
  var nArr = _elms(a)
  nArr.map((c,i)=>{
	 c.innerHTML = '';
  if(arguments.length>1){
		var j;for (j=1;j<arguments.length;j++){
		 if(c.tagName=='INPUT'){ 
			 if(c.attr('type')=='number'||c.attr('type')=='range'){
				  c.value = parseFloat(arguments[j])
			 }
			 else c.value = arguments[j]
			 }
		 else {HTMLadd(nArr[i],arguments[j])}
			}}
	});
  if (nArr.length == 1) return nArr[0]
	
}
const HTMLadd 	= function(a,b) {
	var nArr = _elms(a)
	nArr.map(c=>to(b,c))
 if(nArr.length==1)return nArr[0]
}
const HTMLaddClass  = function(a,cName,cnameRemov) {
	var nArr =  _elms(a)
		,arrName = cName.split(' ')
		if(cnameRemov)HTMLremoveClass(a,cnameRemov)
	nArr.map(c=>{
		arrName.map(d=>{
		c.classList.add(d)
			})
		})
 if(nArr.length==1)return nArr[0]
}
const HTMLremoveClass  = function(a,cName='',cnameRemov) {
	var nArr =  _elms(a)
		nClass = cName.replace(/[\.]+/g, ' ').trim().split(' ')
		
		
nArr.map(c=>{
	nClass.map(d=>{if(d!==''||d!==' ')c.classList.remove(d.trim())})
}
	)
 if(cnameRemov)HTMLaddClass(a,cnameRemov)
 if(nArr.length==1)return nArr[0]
}
const HTMLtoggleClass  = function(a,cName,cuName) {
	nArr = _elms(a)
	nArr .map(c=>{
		if(c.classList.contains(cName))c.classList.remove(cName)
		else c.classList.add(cName)
	})
	if(nArr.length==1)return nArr[0]
}
const HTMLattr = function(a, b, c) {
  var arr = _elms(a),arrGet =[];i = 0,
  numb=x=>{
    if(d.isNumber(x)){return parseFloat(o)}
    else{return x}
	};
for (i = 0; i < arr.length; i++){
  if(c == ''||c == ' '||c){
   if (isArray(b)){
	   b.map((p,j)=>{
		   if (c == '' || c == ' '){arr[i].removeAttribute(b[j])}
		   else if(isArray(c)){arr[i].setAttribute(b[j],c[j])}
		   else {arr[i].setAttribute(b[j],c)}
		  })
   }
   else if(b.constructor.name == 'Object'){
	   
	for(an in b){
		arr[i].setAttribute(an,b[an])}
	 }
   else{
		if(c == '' || c == ' '){arr[i].removeAttribute(b)}
		else if(isArray(c)){
			arr[i].setAttribute(b,c[i])
		}
		else{
		if(b=='d'){
			if(Array.isArray(c))c= c.join(' ')
			//c = 'M'+c
			c = c.replace("MM",'M')
			.replace("M M",'M')
			.replaceAll(" Z0",'Z')
			.replace("Z 0",'Z')
			arr[i].setAttribute(b, c)
			}
		else arr[i].setAttribute(b, c)
			}
		}
   if(arr.length == 1){return arr[0]}
   
  }
   else{
	if(b.constructor.name == 'Object'){
	for(an in b){arr[i].setAttribute(an,b[an])}
	 if(arr.length == 1){return arr[0]}	  
	 }
    else if (isArray(b)){
		b.map(
       (p,j)=>{
          arrGet.push(numb(arr[i].getAttribute(b[j])))
       })
   }
    else{ 
	  if(arr.length > 1 ){arrGet.push(arr[i].getAttribute(b))}
	  if(arr.length == 1 ){arrGet = arr[i].getAttribute(b)}
	   }
	return arrGet
  }
  if(arr.length==1)return arr[0]
}
}
const HTMLshowHide = function(a,b) {
	var nArr =  _elms(a)
nArr.map(c=>{
	if(c.style.display=='none'||c.matches('.hide'))HTMLshow(c)
	else HTMLhide(c)
	})

 if(nArr.length==1)return nArr[0]
 }
const HTMLshow = function(a,b) {
		var nArr =  _elms(a)
		if(b)HTMLhide(b)
nArr.map(c=>{
	c._style('display',c.is('.flexGrow,.flexRow,.flexCol')?'flex':'block')
	if(c.is('.hide'))c.removeClass('hide')
})

 if(nArr.length==1)return nArr[0]
}
const HTMLhide = function(a,b) {
	var nArr= _elms(a)
nArr.map(c=>{
	c._style('display','none')
	if(c.matches('.hide'))HTMLremoveClass(c,'hide')
})
 if(b)HTMLshow(b)
 if(nArr.length==1)return nArr[0]
 }
const HTMLclose = function(a,b) {
	var nArr= _elms(a);
nArr.map(c=>{
	if(c.is('.overlay')){
		let xNya =	c.is('.topRight')?'right':
					c.is('.topLeft')?'left':
					c.is('.top')?'top':
					c.is('.bottom')?'bottom':
					c.is('.left')?'left':
					''
		let d = c.firstChild._style('opacity',1)
			c._style('transition','0.4s')
			c._style('opacity','0')
			c._style(xNya,'-100%')
			setTimeout(()=>{
				c.hide().attr('style',' ')
				d._style('opacity',1)
			},400)
	}
	else c._style('display','none')
	if(c.matches('.hide'))HTMLremoveClass(c,'hide')
})
 if(b)HTMLshow(b)
 if(nArr.length==1)return nArr[0]
 }
const HTMLchange = function(a,b){
	var nArr = _elms(a)
	nArr.map(
	c=>{
		c.parentElement.insertBefore(b.cloneNode(true),c)
		c.remove()
	})
 if(nArr.length==1)return nArr[0]
}
const HTML_style = function(a, b, c) {
	var nArr = _elms(a)
	,styleGawan
	  ,apStyl =(elm,p,v)=>{
		  if(v == '')return elm.style[p]=null
		  return elm.style.setProperty(p, v)
		  }
	 
	if(isString(b)&&!c){
		nArr.map((d,e)=>{
			styleGawan = d.attr('style')?d.attr('style'):'';
			if(styleGawan.slice(-1)!=';')styleGawan+=';'
			if(d.attr('style'))d.attr('style',styleGawan+b)
			else d.attr('style',b)
			})
		return 
	}
	else if(isString(b)){
		if(isString(c)){nArr.map((d,e)=>{apStyl(d,b,c)})}
		else if(typeof c == 'undefined'){
			var objBar = b.replace(/[\t]+/g, '').replace(/[\t]+/g, '').match(/[^;]+/g)
				objBar.map(el=>{
					var propVal = el.match(/[^:]+/g)
					nArr.map((d,e)=>{apStyl(d,propVal[0],propVal[1])})
					})
			}
	}
	else if(typeof b == 'object'){
		if(isArray(b)){
		b.map((f,g)=>{nArr.map(d=>{apStyl(d,b[g],c[g])})})
		}
		else{var c = Object.values(b),b = Object.keys(b)
		 nArr.map((d,e)=>{b.map((f,g)=>{apStyl(d,b[g],c[g])})})
		}
	 }
}
var El = Element.prototype;{
El.is = function(a){return this.matches(a)}
El.attr = function(a,b){return HTMLattr(this,a,b)}
El.boxPoints = function(){return new BoxPoints(this)}
El.to = function(a,i){
	if(isNumber(i)&&i<a.childNodes.length){
		if(i==0)a.insertBefore(this,a.firstChild)
		else a.insertBefore(this,a.childNodes[i])
	}
	else if(isElmt(i)){a.insertBefore(this,i)}
	else a.appendChild(this)
	return this
}

El.setLaserStyle =  function(speed=1000,power=10){
	this.attr('laser-power',power)
		.attr('laser-speed',speed)
		return this
	}
El.addClass =  function(a,b){HTMLaddClass(this,a,b);return this}
El.removeClass =  function(a,b){HTMLremoveClass(this,a,b);return this}
El.toggleClass =  function(a,b){HTMLtoggleClass(this,a,b);return this}
El.hide =  function(a){HTMLhide(this,a);return this}
El.edit =  function(...a){HTMLedit(this,a);return this}
El.show =  function(a){HTMLshow(this,a);return this}
El.showHide =  function(a){HTMLshowHide(this,a);return this}
El.closeElm =  function(){
	let sC = 1
	let nutup = ()=>{
		if(sC<=0.4)return this.remove()
		sC-=0.02
		this._style('transform','scale('+sC+')')
		this._style('opacity',sC)
		
		setTimeout(nutup,1)
		}
	nutup()
	}
El.add =  function(...a){HTMLadd(this,a);return this}
El._ =  function(a){_(a).to(this);return this}
El._style = function(a,b){HTML_style(this,a,b);return this}
El._elms =  function(a){return  Array.from(this.querySelectorAll(a))}
El.arrPath = function(){
	let arrComd=[], arrVal=[], arrPath=[],d=''
		let sP=null
		let cP=null
		d = this.attr('d')? this.attr('d'):''
		arrPath=d.replace(/\s+/g,' ').trim()
			.replace(/\,+/g,' ')
			.split(/(?=[HVMLSTQCAZmlhvcsqtaz])/g)
		d=''
		arrPath.forEach((c,i)=>{
				arrComd.push(c[0])
				arrVal[i]=[]
				arrVal[i] = c.slice(1)
					.replaceAll(' -',' -')
					.replaceAll('-',' -')
					.split(' ')
					.toNumbers()
				cP = arrVal[i].slice(-2)
				if('M'==c[0])sP=arrVal[i].slice(0,2)
				if('Z'==c[0]){
					arrComd[i]='L';arrVal[i]=sP
					arrPath[i]='L'+sP.join(' ')
					
					}
		d+= arrPath[i]
			})
	return {arrPath,arrComd,arrVal,d}
}
El.on = function(a, fn) {
var b = a.toLowerCase()
b = b == 'mousedown' 	&& isMobile		? 'touchstart'
  : b == 'mousemove' 	&& isMobile 	? 'touchmove'
  : b == 'mouseup' 		&& isMobile 	? 'touchend'
  : b == 'touchstart' 	&& !isMobile 	? 'mousedown'
  : b == 'touchmove' 	&& !isMobile 	? 'mousemove'
  : b == 'touchend' 	&& !isMobile 	? 'mouseup'   
  :	b;
  if(typeof fn== 'string'){this.attr('on'+b,fn)}
  else if(isFunction(fn)){this.addEventListener(b,fn)}
  return this
}
El.removeOn = function(a, fn) {
var b = a.toLowerCase()
b = b == 'mousedown' 	&& isMobile		? 'touchstart'
  : b == 'mousemove' 	&& isMobile 	? 'touchmove'
  : b == 'mouseup' 		&& isMobile 	? 'touchend'
  : b == 'touchstart' 	&& !isMobile 	? 'mousedown'
  : b == 'touchmove' 	&& !isMobile 	? 'mousemove'
  : b == 'touchend' 	&& !isMobile 	? 'mouseup'   
  :	b;
  if(typeof fn== 'string'){
	  this.removeAttribute('on'+b)}
  else if(isFunction(fn)){this.removeEventListener(b,fn)}
  return this
}
El.transSet =function(t= [1,1,0,0,0,0,0],o){
	var tO = [1,1,0,0,0,0,0]
		let dt = this.attr('data-transform')?toNumbers(this.attr('data-transform'))	: [1,1,0,0,0,0,0]	;
		if(t[0]==Infinity)t[0]=1
		
	var a = ''
		a +='scale('		+ t[0] +' ' + t[1] +') '
		  + 'translate('	+ t[2] +' ' + t[3] +') '
		  + 'rotate('		+ Math.floor(t[4]) +') '
		  +	'skewX('		+ t[5] +') '
		  + 'skewY('		+ t[6] +') '
		 if(this.nodeType==3){return}//textNode noElment
		 else if(this.is('g')){
			 this._elms('*').forEach(c=>{c.transSet(t,o)})
		 }
		 else{
			 this.attr("transform",a)
			 this.attr("vector-effect","non-scaling-stroke")
			 this.attr("transform-origin",o?o.join(' '):"center")
		 }
	return this

}
El.clearTransForm = function(){
		if(this.attr('data-transform')){
			dt = this.attr('data-transform').split(' ')
			for(let i=0; i<dt.length; i++){
				dt[i] = Number(dt[i])
			}
			// dt[4]	*=-1
		this.transSet(dt,this.boxPoints().pMid).transApply()
		}
		this.attr('data-transform',[1,1,0,0,0,0,0].join(' 	'))
}
El.transApply =function(or){
		let t =  this.attr('transform')?this.attr('transform')
				.replace(/\(/g,'').replace(/\) /g,'').replace(/\)/g,'')
			.replace(/scale|translate|rotate|skewX|skewY/g,' ')
			.replace(/\s\s/g,' ').trim()
			.split(' ').toNumbers()
			:[1,1,0,0,0,0,0]
		if(!this.attr("transform-origin"))this.attr("transform-origin",'center')
			if(this.attr("transform-origin") =='center'){
				or = this.boxPoints().c}
			else{
				or = []
				this.attr("transform-origin").split(" ").map(c=>or.push(Number(c)))
			}
		
		let dt = [1,1,0,0,0,0,0]
		if(this.attr('data-transform')){
			dt = this.attr('data-transform').split(' ')
			for(let i=0; i<dt.length; i++){
				dt[i] = Number(dt[i])
			}
			
		}
			
		dt[0]/=t[0]
		dt[1]/=t[1]
		dt[2]-=t[2]
		dt[3]-=t[3]
		dt[4]-=t[4]
		dt[5]+=t[5]
		dt[6]+=t[6]
		
		dt[4] = dt[4]%360
		
		this.attr('data-transform',dt.join(' '))
		
	if(this.tagName=='path'){
			path = new dPath(this).scale(t[0],t[1],or).rotate(t[4],or).translate(t[2],t[3])
		this.attr('d',path.d)
			this.attr('transform','scale(1 1) translate(0 0) rotate(0) skewX(0) skewY(0)')
		}
	else if(this.is('circle')||this.is('ellipse')){
			this.attr('transform','scale(1 1) translate(0 0) rotate(0) skewX(0) skewY(0)')
			var c = [Number(this.attr('cx')),Number(this.attr('cy'))].scale([t[0],t[1]],or).rotate(t[4],or).translate([t[2],t[3]])
			this.attr('cx',c[0])
			this.attr('cy',c[1])
			if(this.is('circle')){
				this.attr('r',Number(this.attr('r'))*t[0])
			}
			else if(this.is('ellipse')){
				this.attr('rx',Number(this.attr('rx'))*t[0])
				this.attr('ry',Number(this.attr('ry'))*t[1])
			}
		}
	else if(this.tagName=='g'){
		 nArr = Array.from(this.children)
			if(nArr.length>0)nArr.forEach(c=>c.transApply())
		}
	else if(this.tagName == 'text'){
		if(this.attr('text-anchor')){}
		
		p = [parseFloat(this.attr('x'))
			,parseFloat(this.attr('y'))
			]
			.scale([t[0],t[1]],or)
			.translate([t[2],t[3]])
		h = parseFloat(this.attr('font-size'))*t[1]
		this.attr('x',p[0])
		this.attr('y',p[1])
		this.attr('font-size',h)
	}
	else if(this.tagName == 'rect'){
			nP = [this.attr('x'),this.attr('y')]
			.translate([-or[0],-or[1]])
			.translate([t[2],t[3]])
				  this.attr(['x','y'],nP)
			nP =[this.attr('width'),this.attr('height')]
				  .scale([t[0],t[1]],[0,0])
				 this.attr(['width','height'],nP)
			
			
			//.scale([t[0],t[1]],or)
			//.translate([t[2],t[3]])
			//.rotate(t[4],or)
			
		}
	else if(this.is('line')){
			var arrV = [this.attr('x1')
			,this.attr('y1')
			,this.attr('x2')
			,this.attr('y2')
			].toSingleArr()
			.scale([t[0],t[1]],or)
			.translate([t[2],t[3]])
			.rotate(t[4],or)
			//.skew(t[4],or)
			
			this.attr('x1',arrV[0])
			.attr('y1',arrV[1])
			.attr('x2',arrV[2])
			.attr('y2',arrV[3])						
		}
	else if(this.is('polyline')||this.is('polygon')){
			or = or?or
			   : this.attr("transform-origin") =='center'
			   ? this.boxPoints.c
			   : this.boxPoints.c
			   
			if(this.attr('points')){
				var pts = this.attr('points').replace(/\s+/g, ' ')
						.replace(/[\,\n\t\[\]\(\)\"\\]/g, ' ')
						.trim()
						.split(' ')
					pts.forEach((c,i)=>pts[i] = Number(c))
					pts = pts.scale([t[0],t[1]],or)
						.translate([t[2],t[3]])
						.rotate(t[4],or)
						.skew(t[4],or)
				this.attr('points',pts.join(' '))
			}
			
			this.attr('transform','scale(1 1) translate(0 0) rotate(0) skewX(0) skewY(0)')
		}
	else return this
	}
El.translate =function(x=0,y=0){
	this.transSet([1,1,x,y,0,0,0]);this.transApply()
	}
	
El.scale =function(sX,sY,or){this.transSet([sX,sY,0,0,0,0,0],or);this.transApply()}
El.rotate =function(a,or){this.transSet([1,1,0,0,a,0,0],or);this.transApply()}
El.skew =function(dx,dy,or){this.transSet([1,1,0,0,0,x,y],or);this.transApply()}
El.toRelative = function(){
	this.attr('d',new dPath(this).toRelative().d)
	return this
}
El.toSimple= function(){
	this.attr('d',new dPath(this).toSimple().d)
	return this
}
El.toGcode =function(pLaser,kLaser){
		pLaser *= 10
	  var gCode = ''
	  var LG = 0,x,y;
	  var p1 = []
	  var pF = []
	  var pL = []
	  var arrC = []
	 if(this.is('path')){
		let path = new dPath(this).CV()
		ac = path.arrCom
		av = path.arrVal
				
		for(let i=0;i<ac.length;i++){
			if(['M','L','S','Q','T'].includes(ac[i]))
			if('M'==ac[i]){
				if(i!==0){
					gCode+='M5 S0'
				}
				gCode+= 'G0 X' + av[i][0] + ' Y'+ av[i][1] +'\n'
				gCode+= 'M3 S'+pLaser+'\n'
				gCode+= 'G1 F'+kLaser+'\n'
				}
				for(let j=0;j<av[i].length; j++){
					if(ac[i] != 'Z'){
					if(j%2==0){
						gCode	+= 'G1 X'+av[i][j]
								+  ' Y'+av[i][j+1] +'\n'
					}
					}
				}
		}
		gCode+='M5 S0'
		return gCode
}
	 if(this.is('g')){
		 this._elms('path').forEach(c=>{
			 gCode += c.toGcode()
		 })
		return gCode
	 }
	 }
El.zoomAbleSVG =function(smooth=100){
	const svgImage = this
	const svgContainer = svgImage.parentElement

var viewBox = {x:0,y:0,w:svgImage.clientWidth,h:svgImage.clientHeight};
svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
const svgSize = {w:svgImage.clientWidth,h:svgImage.clientHeight};
var isPanning = false;
var startPoint = {x:0,y:0};
var endPoint = {x:0,y:0};;
var scale = 1;
	svgImage.bottomControl = _("div").to(svgContainer)
	._style(`
    position: Absolute;
    bottom: 0;
    left: 0;
    border: 2px solid grey;
    padding: 4px 8px;
    border-radius: 4px;
    overflow: hidden;
    background: rgb(0, 0, 0, 70%);
    display: flex;
    color: rgb(41 245 7);
    width: 100%;
	`)
const indikAtor = _('div#indikatorZoom',"zoom:"+Math.round(scale*100)+' %')._style("float","right").to(		svgImage.bottomControl,2).on("click",(e)=>{svgImage.zoom(100)})._style(`
    position: Absolute;
    bottom: 0;
    right: 0;
	`)

//const inputRangeZoom = _( "input#inputRangeZoom[type=range][min=0.1]").to(svgContainer)
svgImage.zoom =(perCent=1 ,x=0,y=0,VB = viewBox,sc = scale)=>{
	if (perCent == 100){
		svgSize.w = svgImage.clientWidth
		svgSize.h = svgImage.clientHeight
	}
   viewBox.w = svgSize.w*100/perCent
   viewBox.h = svgSize.h*100/perCent
   viewBox.x -= x
   viewBox.y -= y
   scale = svgSize.w/viewBox.w;
   svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
 
   indikAtor.edit("zoom:"+  Math.round(scale*100)+' %')
  }
svgImage.zoomOut=(step=1)=>{
	if( viewBox.w - viewBox.x < 2) return alert("maksimal")
   viewBox.w -=step*2
   viewBox.h -=step*2
   viewBox.x +=step/2
   viewBox.y +=step
   scale = svgSize.w/viewBox.w;
   svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
 
   indikAtor.edit("zoom:"+  Math.round(scale*100)+' %')
}
svgContainer.onmousewheel = function(e) {
   e.preventDefault();
   var dw = viewBox.w * Math.sign(e.deltaY)*-0.1;
   var dh = viewBox.h * Math.sign(e.deltaY)*-0.1;
   
   
   viewBox.x += event.x * dw/svgSize.w;
   viewBox.y += event.y * dw/svgSize.h;
   
   viewBox.w -= dw
   viewBox.h -= dh
   scale = svgSize.w/viewBox.w;
   
   svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
   indikAtor.edit("zoom:"+Math.round(scale*100)+' %')

}
svgContainer.onmousedown = function(e){
   isPanning = true;
   startPoint = {x:e.x,y:e.y};   
}
svgContainer.onmousemove = function(e){
   if (isPanning){
  endPoint = {x:e.x,y:e.y};
  var dx = (startPoint.x - endPoint.x)/scale;
  var dy = (startPoint.y - endPoint.y)/scale;
  var movedViewBox = {x:viewBox.x+dx,y:viewBox.y+dy,w:viewBox.w,h:viewBox.h};
  svgImage.setAttribute('viewBox', `${movedViewBox.x} ${movedViewBox.y} ${movedViewBox.w} ${movedViewBox.h}`);
   }
}
svgContainer.onmouseup = function(e){

   if (isPanning){ 
  endPoint = {x:e.x,y:e.y};
  var dx = (startPoint.x - endPoint.x)/scale;
  var dy = (startPoint.y - endPoint.y)/scale;
  viewBox = {x:viewBox.x+dx,y:viewBox.y+dy,w:viewBox.w,h:viewBox.h};
  svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
  isPanning = false;
   }
}
svgContainer.onmouseleave = function(e){
 isPanning = false;
}

svgImage.pan =(x=5,y=5)=>{
  VB =viewBox
  var dx = x/scale;
  var dy = y/scale;
  viewBox.x -= dx
  viewBox.y -= dy
  svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);
  }

svgImage.zoomTo =(elm)=>{
   var bb = elm.getBBox(),perCent = Math.min(svgSize.w *100/bb.width,svgSize.h *100/bb.height)
	svgImage.zoom(perCent,viewBox.x-bb.x,viewBox.y-bb.y)
	}
}
}
const simpanFile = function(fileName='', fileType='.txt', content) {
	let toBlob	= JSON.stringify(content)
	if(fileType.slice(-4) =='JSON'||fileType.slice(-4)=='json'){
		let ikiArray=(a)=>{
			for(let i=0;i<a.length;i++){
				a[i] = isObject(a[i])?obSort(a[i]):a[i]
			}
			return a
		}
		,obSort=(jsContent)=>{
			let nO= {};
			Object.keys(jsContent).sort().forEach(
			function(key){
				if(!isElmt(jsContent[key])){
				nO[key] = isObject(jsContent[key]) 
						? obSort(jsContent[key]) 
						: isArray(jsContent[key]) 
						? ikiArray(jsContent[key])
						: jsContent[key]
				}
			}
				)
			if(isObjectEmpty(nO))return
			return nO
		}
	toBlob	= JSON.stringify(obSort(content), undefined, 2)
	}
	else{
	toBlob = content
		
	}
  var blob = new Blob([toBlob], {type: fileType});
if(fileType[0]!=='.')fileType = '.'+fileType
  var a = _('a');
  a.download = fileName+fileType;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.click();
  a.remove()
  setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
  
  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

}
