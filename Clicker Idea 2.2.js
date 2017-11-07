(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.finger = function() {
	this.initialize(img.finger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.upgradeNoticeText_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag6A+IAAgWIAKABQAEABACgCIAEgEQABgEAAgHIAAhAIgNACIAAgWQAegFAcAAQAWAAALAGIAJAGQAEAEACAGIACALIABAMIAABSIgeAAIAAhSQAAgWgZAAIgKABIAABBQAAAXgMAKQgEADgHACQgGACgIAAQgIAAgHgDg");
	this.shape.setTransform(163.8,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5A/IgLh9IAdAAIAFA+IACAAQAJAAADgDQAEgEAAgJIAFguIAbAAIgEAtQgDAmgkAAIgGAAIACATIAfAAQARAAAIgMQAJgNACgVIAFg4IAcAAIgFA3QgBAQgDAMQgOAqguAAg");
	this.shape_1.setTransform(149.5,46.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAEA/IAAhOQAAgFABgEIADgHQAFgFADgCIACgBIAAAAIhDAAIAAgXIBkAAIAAAWIgJAEQgFAEgCAFQgCAFAAAIIAABNg");
	this.shape_2.setTransform(136.1,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AANBAIAAhSQAAgWgXAAQgNAAgTACIAAgXQASgCAOAAQANAAAJABQAIACAFADIAKAGQADAEACAGQACAEABAHIAAAMIAABSg");
	this.shape_3.setTransform(124.8,46.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBAIABgcIADABIAFAAIAGAAQAEAAAFgCQAIgDADgGQAFgHgBgJIAAgiQABgMgGgDQgCgCgDABQgJAAgGABIgCABIAAgXQAJgDAKAAQAKAAAHACQAHACAEADQAEADACAGQADAGABAEIABAOIAABXIgXAAIgEgTIgCAAIgFAHIgGAHIgJAFQgGACgFAAIgKgBg");
	this.shape_4.setTransform(115.1,46.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYBAIgKgCIgDgBIAAgOQANAEAPAAQAGAAAEgCQAFgBADgEIAGgFIADgIIACgIQACgGAAgGIAAgTQAAgMgDgJIgEgIIgFgGQgDgDgGgCQgEgBgHAAIgOAAIgKADIgDABIAAgOIADgBIAKgDQAHgBAIAAQAIAAAGACQAHACAFADQAFADADAFQAEAFADAEIADAKQADAKAAAKIAAAVIgBAMIgDAMIgFALQgEAFgFAFQgFAEgIACQgHADgJAAIgPgBg");
	this.shape_5.setTransform(100.9,46.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAKA/IAAhVIABgLIAEgIQAEgFADgCIABgBIAAAAIhEAAIAAgNIBbAAIAAALQgUAGAAAXIAABVg");
	this.shape_6.setTransform(91.4,46.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAqIAAhTIAPAAIAABCIgMARg");
	this.shape_7.setTransform(84.3,44.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBBMIAJgxIARg/IhBAAIAAgnIAQAAIAAAaIBBAAIAAANIgRA/IgKAxg");
	this.shape_8.setTransform(72.1,45.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAeBAIAAhXQAAgagiAAIgiABIgHAAIAAgOIAqgBQASAAAMAGQAMAGAFAMQACAIAAAIIAABXgAgtBAIAAhPIARAAIAABPg");
	this.shape_9.setTransform(61.2,46.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgzA/IAAgNIAHABQAOAAAAgRIAAhSIgNABIAAgOQAbgDATAAQASAAAMAGQAMAGAFANQACAHAAAIIAABXIgQAAIAAhXQAAgagjAAIgOABIAABRQAAAPgHAJQgHAJgPAAIgJgCg");
	this.shape_10.setTransform(48.3,46.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAeBAIAAhXQAAgagiAAIgZABIAABwIgQAAIAAh+IArgBQARAAAMAGQAMAFAFANQACAIAAAIIAABXg");
	this.shape_11.setTransform(36.2,46.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIA/IAAhKQABgGACgHQABgHACgEQAEgJAEgEIACgBIAAAAIgdAAIAAgNIArAAIAAANIgBAAIgEAEIgEAHIgEALQgCAIAAAIIAABKg");
	this.shape_12.setTransform(27.4,46.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AguBXIAAh7IARAAIAAB7gAABAnIAAgEQAAgGADgNIAFgQIAHgaIAOgvIhMAAIAAgNIBdAAIAAANIgPAxIgFAPIgDALIgCALIgCAJQgDAJAAAEIAAAEg");
	this.shape_13.setTransform(18.8,48.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIBFQgDgCAAgIQAAgNALABQAFAAAEADQADADAAAGQAAAHgDADQgEAEgFAAQgFAAgDgEgAgEAeIgFhmIATAAIgFBmg");
	this.shape_14.setTransform(4.7,45.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAqIAAhTIAPAAIAABCIgMARg");
	this.shape_15.setTransform(146.2,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgzA/IgLh9IARAAIAFBFIAOgEQAPgDACgXIAEgnIAPAAIgDAhIgCAMIgEALQgBAGgEADQgDAFgGADQgFAEgIABIgMAEIACAeIAdAAQAUAAANgOQAMgPAEgcIAEg3IARAAIgFA3QgBALgDAKIgHARQgDAFgFAHQgGAGgGAEQgHAFgJACQgKADgKAAg");
	this.shape_16.setTransform(136.8,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBBMIAJgxIARg/IhBAAIAAgnIAQAAIAAAaIBBAAIAAANIgRA/IgKAxg");
	this.shape_17.setTransform(119.6,15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAWBYIAAh3QAAgMgDgJIgDgIIgGgGQgDgDgGgCQgDgBgIAAIgOAAIgKADIgDABIAAgOIADgBIAJgDQAIgBAIAAQAIAAAGACQAHACAFADIAIAIIAHAKIADAJQADAKAAAKIAAB5g");
	this.shape_18.setTransform(109.5,19.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAFBAIAAgNIAaAAIAAhIQAAgcgaAAQgFAAgDABIgIAEQgGAFgDAEIgBACIgJBhIgRAAIAKhgIAAgCIgBgJIgEgMIgDgGIARAAQACAEACAJIABAAQAFgFAHgEIAKgFQAFgBAGAAQATAAAJALQAKAMAAATIAABVg");
	this.shape_19.setTransform(93.9,17);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgPA+QgHgBgGgGQgGgFgFgIQgEgHgDgLQgCgKAAgOIAAg+IARAAIAAA+QAAAVAGAOQAEAIAGAEQAHAFAIgBQAHAAAGgCQAGgDADgFQAEgFACgHQAEgMAAgRIgBgOQAAgIgCgGQgCgHgEgFQgDgFgFgDQgGgCgIAAIgMABIAAgOQAFgBAIAAQAIAAAHADQAHACAGAFQAGAFAEAIQAJAPAAAaQAAAOgDAKQgCALgEAHQgFAIgGAFQgGAGgIABQgHADgIAAQgHAAgIgDg");
	this.shape_20.setTransform(82.3,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgtBAIAAgNIA9AAIAAhKQAAgPgIgGQgGgFgNAAIgdABIgFAAIAAgOQAQgBAUAAQAVAAAKAJQAJAKABAVIAABKIAOAAIAAANg");
	this.shape_21.setTransform(70.8,17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag0A1IAmgGIgdhvIAQAAIAQA4IALAzQAcgKAEgrIAFg2IAQAAIgFA2QgBAMgCAJIgGAOIgIAMQgFAGgGAFQgHAEgJADQgIAEgMABIgkAGg");
	this.shape_22.setTransform(58.9,17.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHA/IAAh9IAPAAIAAB9g");
	this.shape_23.setTransform(50.6,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgzA/IAAgNIAHABQAOAAAAgRIAAhSIgNABIAAgOQAbgDATAAQASAAAMAGQAMAGAFANQACAHAAAIIAABXIgQAAIAAhXQAAgagjAAIgOABIAABRQAAAPgHAJQgHAJgPAAIgJgCg");
	this.shape_24.setTransform(41.5,17.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIBFQgDgCAAgIQAAgNALABQAFAAAEADQADADAAAGQAAAHgDADQgEAEgFAAQgFAAgDgEgAgEAeIgFhmIATAAIgFBmg");
	this.shape_25.setTransform(27.7,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.upgradeNoticeText_mc, new cjs.Rectangle(0,0,173.3,60.5), null);


(lib.showMaxLevel_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSA+QAJgNAFgQQAEgQAAgRQAAgQgEgQQgFgQgJgNIARAAQAJAMAGAQQAFAQAAASQAAASgFAQQgGAQgJALg");
	this.shape.setTransform(124.4,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAyQgEgEAAgFQAAgGADgDQAEgDAGAAQAEAAAEADQADADAAAGQAAAFgDADQgEAEgEAAQgGAAgDgDgAgMARIAAgFQAAgHACgFQADgEAHgFQAHgGADgDQACgDAAgFQAAgEgDgCQgEgDgFAAQgKAAgOAHIgHgPQAPgJARAAQAOAAAJAHQAIAHAAALQAAAIgDAGQgEAFgKAHIgIAHQgCACAAAFIAAAEg");
	this.shape_1.setTransform(118.5,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AACA+QgJgMgGgPQgFgQAAgTQAAgRAFgQQAGgQAJgMIARAAQgJANgFAQQgFAQAAAQQAAASAFAQQAFAQAJAMg");
	this.shape_2.setTransform(112.8,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVBmIAAiDQAAgkgmAAQgUAAgfAEIAAglQAdgDAXAAQAVAAANACQAOACAJAEQAIAFAGAGQAGAGADAIQADAJABAJIABAWIAACCg");
	this.shape_3.setTransform(102.5,26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAEBmIAAgkIAmAAIAAhHQAAgcgFgMIgGgJQgIgKgPAAQgHAAgGAEQgHADgEAFQgKAKgDAHIgCAEIgMCFIguAAIALh/IABgOQAAgcgLgfIAtAAIAFAOIAEAQIADAAIACgDIAGgIQAFgGAHgFQAGgEAKgEQALgDANAAQAOAAALAFQALAFAHAIQAGAJAFAMQAHAVAAAeIAABxg");
	this.shape_4.setTransform(83.4,26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAhBmIAAiDQAAgkgnAAIggACIgeADIgMABIAAgkQAMgCAXgCQAYgCATAAQASAAAOACQANACAJAEQAJAFAGAGQAFAGAEAIQACAJABAJIABAWIAACCgAhQBmIAAh/IAxAAIAAB/g");
	this.shape_5.setTransform(62.4,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTBUQgHgGAAgOQAAgNAHgGQAHgHAMAAQANAAAHAHQAHAHAAAMQAAANgHAHQgHAHgNAAQgMAAgHgHgAgTgsQgHgGAAgNQAAgbAaAAQANAAAHAHQAHAHAAANQAAANgHAGQgHAHgNAAQgMAAgHgHg");
	this.shape_6.setTransform(47.2,27.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkAlIAbgEIgVhOIAMAAIAKAoIAIAjQATgHADgdIAEgnIALAAIgDAnQgBAHgCAHIgEAKIgGAIQgDAEgFADIgLAGQgFACgIABIgZAEg");
	this.shape_7.setTransform(116.1,-28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_8.setTransform(108.6,-29.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAuIgIALg");
	this.shape_9.setTransform(103.7,-30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAuIgIALg");
	this.shape_10.setTransform(100.6,-30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPA9IAAhSQAAgJgCgGIgCgFIgFgFQgCgCgDgBQgCgBgFAAIgLABIgGABIgDABIAAgKIADgBIAGgBIALgBQAGAAAEABQAEABAEACIAFAGQAEADABADIACAHQACAHAAAIIAABTg");
	this.shape_11.setTransform(95.3,-27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_12.setTransform(85.4,-29.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgYABIgEAAIAAgKIAdgBQAMAAAJAEQAIAEADAJQACAFAAAGIAAA9gAgfAtIAAg4IALAAIAAA4g");
	this.shape_13.setTransform(77.8,-28.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAtIABgLIAKABQAEAAAFgEQAGgFACgIQACgFAAgFIAAgcQAAgIgDgEQgEgDgFAAIgJABIAAgJQAGgBAFAAQAVAAAAAXIAABBIgJAAIgBgPIgBAAIgBADIgDAEIgDADIgDADIgFADIgGABIgJgBg");
	this.shape_14.setTransform(70.3,-28.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAuIgIALg");
	this.shape_15.setTransform(66.1,-30.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkAlIAagEIgUhOIALAAIALAoIAIAjQAUgHACgdIADgnIAMAAIgDAnQgBAHgCAHIgEAKIgFAIQgEAEgEADIgLAGQgGACgIABIgZAEg");
	this.shape_16.setTransform(60.1,-28.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_17.setTransform(49,-29.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgYABIgEAAIAAgKIAdgBQAMAAAJAEQAIAEADAJQACAFAAAGIAAA9gAgfAtIAAg4IALAAIAAA4g");
	this.shape_18.setTransform(41.3,-28.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAtIABgLIAKABQAEAAAFgEQAGgFACgIQACgFAAgFIAAgcQAAgIgDgEQgEgDgFAAIgJABIAAgJQAGgBAFAAQAVAAAAAXIAABBIgJAAIgBgPIgBAAIgBADIgDAEIgDADIgDADIgFADIgGABIgJgBg");
	this.shape_19.setTransform(33.8,-28.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAuIgIALg");
	this.shape_20.setTransform(29.6,-30.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkAlIAagEIgUhOIALAAIALAoIAIAjQAUgHACgdIADgnIAMAAIgDAnQgBAHgCAHIgEAKIgFAIQgEAEgEADIgLAGQgGACgIABIgZAEg");
	this.shape_21.setTransform(23.7,-28.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_22.setTransform(12.5,-29.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgjAsIgIhXIAMAAIAEAwIAJgDQAKgDACgPIADgbIAKAAIgCAXIgBAIIgDAIIgDAGQgCADgEACQgEADgGACIgJACIACAVIAVAAQANAAAJgKQAJgKACgUIAEgmIALAAIgEAmQAAAIgCAHIgFALIgGAJQgDAEgFADQgFADgGACQgHACgHAAg");
	this.shape_23.setTransform(4.2,-28.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_24.setTransform(-4.2,-29.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfAtIAAgJIAqAAIAAg0QAAgKgFgEQgFgEgJAAIgUABIgDAAIAAgKIAZgBQAOAAAHAHQAHAGAAAPIAAA0IAKAAIAAAJg");
	this.shape_25.setTransform(-11.1,-28.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAHAyIAAhGIABgRIgEACIgPAPIgGgIIAagVIAJAAIAABjg");
	this.shape_26.setTransform(-23.5,-29.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AggAzIAAgKIAagaIAPgRIAGgKQACgFAAgGQAAgIgFgEQgFgFgHAAQgHAAgFACQgGACgHAGIgGgIQAOgMAQAAQAOAAAIAIQAHAHAAAMQAAAJgFAKQgFAIgPAOIgVAWIAAAAIAzAAIAAALg");
	this.shape_27.setTransform(-30.7,-29.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRAtIgGgCIgDAAIAAgLQAJADALABIAGgCIAGgDIAEgEIADgGIACgFIAAgJIAAgMQAAgJgCgGIgCgFIgEgFIgGgDQgCgBgGAAIgKABIgGABIgDABIAAgKIADgBIAGgBIALgBQAFAAAFABQAFABADACIAGAGIAEAGIACAHQACAHAAAIIAAANIgBAJIgBAIIgEAIQgCAEgEADQgDACgGACQgFADgGAAIgLgBg");
	this.shape_28.setTransform(-41.6,-28.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAHAsIAAg7IABgIIACgGIAFgEIABgBIAAAAIgvAAIAAgJIA/AAIAAAIQgOAEAAAQIAAA7g");
	this.shape_29.setTransform(-48.2,-28.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAuIgIALg");
	this.shape_30.setTransform(-53.3,-30.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_31.setTransform(-61.8,-29.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKArQgFgBgEgDQgFgEgDgFQgDgFgCgIQgBgIAAgJQAAgMACgJQADgIAFgFIgJABIAAgKIAggBQAQAAAJALQAJALAAAWQAAAJgBAIQgCAIgDAFQgDAFgFAEQgEADgFABQgFADgGAAQgFAAgFgDgAgLgiQgFAFgDAKQgDAKAAAIIABAOQABAHADAEQACAGAFADQAEADAGAAQAGAAAFgDQAFgDACgGQAFgJAAgPQAAgTgHgJQgCgDgFgCQgEgCgFAAg");
	this.shape_32.setTransform(-69.2,-28.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAuIgIALg");
	this.shape_33.setTransform(-74.8,-30.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAuIgIALg");
	this.shape_34.setTransform(-77.9,-30.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgfAtIAAhXQAMgCASAAQAhAAAAAYIAABBgAgRgiIgDABIAABFIApAAIAAg2QAAgEgCgDIgDgFIgGgDIgGgBIgGAAIgPAAg");
	this.shape_35.setTransform(-83.8,-28.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAUAsIgUglIgLgOIgEACQgGAFAAAMIAAAgIgLAAIAAgdQAAgOAEgHIAFgGIAIgDIgRgcIAMAAIAUAiIALAQIAFgEIADgFIABgJIAAggIAMAAIAAAdIgBAJIgCAIQgDAJgKAEIARAcg");
	this.shape_36.setTransform(-95.7,-28.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgkAsIAAgJIAGABQAKAAAAgMIAAg5IgKABIAAgKQATgCANAAQAMAAAJAEQAJAEADAJQACAFgBAGIAAA8IgLAAIAAg8QAAgTgZAAIgJABIAAA4QAAALgFAGQgFAGgKAAIgHgBg");
	this.shape_37.setTransform(-104.3,-28.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgYABIgEAAIAAgKIAdgBQAMAAAJAEQAIAEADAJQACAFAAAGIAAA9gAgfAtIAAg4IALAAIAAA4g");
	this.shape_38.setTransform(-116.4,-28.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AADAtIAAgJIATAAIAAgyQAAgUgTAAIgFABIgFADIgHAGIAAABIgHBEIgLAAIAGhDIAAgCIgBgGIgCgIIgCgEIALAAQACADACAGIAAAAQAEgEAFgDIAGgDIAIgBQANAAAHAIQAGAIAAANIAAA8g");
	this.shape_39.setTransform(-125.1,-28.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgjAsIgIhXIAMAAIAEAwIAJgDQAKgDACgPIADgbIAKAAIgCAXIgBAIIgDAIIgDAGQgCADgEACQgEADgGACIgJACIACAVIAVAAQANAAAJgKQAJgKACgUIAEgmIALAAIgEAmQAAAIgCAHIgFALIgGAJQgDAEgFADQgFADgGACQgHACgHAAg");
	this.shape_40.setTransform(-134.1,-28.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgRAAIAABPIgLAAIAAhYIAegBQALAAAIAEQAJAEADAJQACAFAAAGIAAA9g");
	this.shape_41.setTransform(-143.5,-28.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AggA9IAAhVIAMAAIAABVgAABAbIAAgCQgBgFADgJIADgLIAFgSIAKghIg1AAIAAgJIBAAAIAAAJIgKAjIgDAKIgCAHIgCAIIgCAGIgBAKIAAACg");
	this.shape_42.setTransform(-151.4,-27);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgFAHQgCgCAAgFQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAEgCADQgCACgEAAQgDAAgCgCg");
	this.shape_43.setTransform(-157.7,-25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgRAtIgGgBIgCgBIAAgLQAJAEAKAAIAHgBIAFgEIAEgEIADgGIABgFIABgJIAAgNQAAgIgCgGIgCgFIgEgFIgGgDQgDgCgEABIgKABIgHABIgCABIAAgKIACgBIAGgBIALgBQAGAAADABQAFABAEACIAGAGIAEAHIACAGQACAHABAIIAAAOIgCAIIgBAIIgEAIQgDAEgDACQgEADgFADQgFACgGAAIgLgBg");
	this.shape_44.setTransform(225.6,-49.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_45.setTransform(219.2,-50.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAPAtIAAg9QAAgSgXAAIgRAAIAAgJIARgBIALABIAJADQAFACADADQAHAHAAAMIAAA9g");
	this.shape_46.setTransform(208.5,-49.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AADAtIAAgJIATAAIAAgyQAAgUgTAAIgFABIgFADIgHAGIAAABIgHBEIgLAAIAGhDIAAgCIgBgGIgCgIIgCgEIALAAQACADACAGIAAAAQAEgEAFgDIAGgDIAIgBQANAAAHAIQAGAIAAANIAAA8g");
	this.shape_47.setTransform(201.1,-49.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgYABIgEAAIAAgKIAdgBQAMAAAJAEQAIAEADAJQACAFAAAGIAAA9gAgfAtIAAg4IALAAIAAA4g");
	this.shape_48.setTransform(192.8,-49.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkAsIAAgJIAGABQAKAAAAgMIAAg5IgKABIAAgKQATgCANAAQANAAAIAEQAIAEAEAJQACAFgBAGIAAA8IgLAAIAAg8QAAgTgZAAIgJABIAAA4QAAALgFAGQgFAGgKAAIgHgBg");
	this.shape_49.setTransform(180.2,-49.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgkAlIAbgEIgVhOIALAAIALAoIAIAjQAUgHACgdIADgnIAMAAIgDAnQgBAHgCAHIgEAKIgFAIQgEAEgEADIgMAGQgFACgIABIgZAEg");
	this.shape_50.setTransform(171.6,-49.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_51.setTransform(164.1,-50.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgYABIgEAAIAAgKIAdgBQAMAAAJAEQAIAEADAJQACAFAAAGIAAA9gAgfAtIAAg4IALAAIAAA4g");
	this.shape_52.setTransform(156.5,-49.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAUAsIgUglIgLgOIgEABQgGAGAAALIAAAhIgLAAIAAgdQAAgPAEgGIAFgGIAIgDIgRgcIAMAAIAUAiIALARIAFgFIADgFIABgJIAAggIAMAAIAAAcIgBAKIgCAHQgDAKgKAEIARAcg");
	this.shape_53.setTransform(144.6,-49.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkAsIAAgJIAGABQAJAAAAgMIAAg5IgJABIAAgKQATgCAOAAQAMAAAIAEQAIAEAEAJQACAFAAAGIAAA8IgMAAIAAg8QAAgTgYAAIgKABIAAA4QAAALgFAGQgFAGgKAAIgHgBg");
	this.shape_54.setTransform(135.9,-49.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgRAtIgHgBIgCgBIAAgLQAKAEAKAAIAGgBIAHgEIADgEIADgGIACgFIAAgJIAAgNQAAgIgCgGIgCgFIgEgFIgGgDQgCgCgGABIgKABIgHABIgCABIAAgKIACgBIAHgBIALgBQAFAAAFABQAFABADACIAGAGIAEAHIADAGQABAHAAAIIAAAOIgBAIIgBAIIgEAIQgDAEgDACQgDADgGADQgFACgGAAIgLgBg");
	this.shape_55.setTransform(124.8,-49.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AADAtIAAgJIATAAIAAgyQAAgUgTAAIgFABIgFADIgHAGIAAABIgHBEIgLAAIAGhDIAAgCIgBgGIgCgIIgCgEIALAAQACADACAGIAAAAQAEgEAFgDIAGgDIAIgBQANAAAHAIQAGAIAAANIAAA8g");
	this.shape_56.setTransform(117.3,-49.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgFAsIAAhXIALAAIAABXg");
	this.shape_57.setTransform(111.7,-49.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgkAsIAAgJIAGABQAJAAAAgMIAAg5IgJABIAAgKQATgCAOAAQAMAAAIAEQAIAEAEAJQACAFAAAGIAAA8IgMAAIAAg8QAAgTgYAAIgKABIAAA4QAAALgFAGQgFAGgKAAIgHgBg");
	this.shape_58.setTransform(105.3,-49.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgYABIgEAAIAAgKIAdgBQAMAAAJAEQAIAEADAJQACAFAAAGIAAA9gAgfAtIAAg4IALAAIAAA4g");
	this.shape_59.setTransform(93.2,-49.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgRAtIgGgBIgCgBIAAgLQAJAEAKAAIAHgBIAFgEIAEgEIADgGIABgFIABgJIAAgNQAAgIgCgGIgCgFIgEgFIgGgDQgDgCgEABIgKABIgHABIgCABIAAgKIACgBIAGgBIALgBQAGAAADABQAFABAEACIAGAGIAEAHIACAGQACAHABAIIAAAOIgCAIIgBAIIgEAIQgDAEgDACQgEADgFADQgFACgGAAIgLgBg");
	this.shape_60.setTransform(85.6,-49.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgKAsQgFgCgEgEQgFgDgDgGQgDgEgCgIQgBgIAAgJQAAgMACgJQADgIAFgFIgJABIAAgKIAggBQAQAAAJALQAJALAAAWQAAAJgBAIQgCAIgDAEQgDAGgFADQgEAEgFACQgFACgGAAQgFAAgFgCgAgLgiQgFAFgDAKQgDAKAAAJIABANQABAHADAEQACAGAFADQAEADAGAAQAGAAAFgDQAFgDACgGQAFgJAAgPQAAgTgHgIQgCgEgFgCQgEgCgFAAg");
	this.shape_61.setTransform(78.4,-49.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAWA9IAAhMQAAgPgEgKQgDgFgEgDQgFgDgFAAQgGAAgDACIgHADIgEAGQgDAEgBAHQABAJAEAFQAEAFAJABIADAAIgCAJIgCAAQgNgCgGgHQgIgIAAgMQABgIACgFQADgHAFgDQAFgFAFgBQAHgCAFAAQAHAAAGACQAGADAEAGQAFAFADAIQACAJAAAMIAABMg");
	this.shape_62.setTransform(70,-48.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgjAsIgIhXIAMAAIAEAwIAJgDQAKgDACgPIADgbIAKAAIgCAXIgBAIIgDAIIgDAGQgCADgEADQgEACgGABIgJADIACAVIAVAAQANAAAJgKQAJgKACgUIAEgmIALAAIgEAmQAAAIgCAHIgFALIgGAJQgDAEgFADQgFADgGACQgHACgHAAg");
	this.shape_63.setTransform(57.5,-49.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AADAtIAAgJIATAAIAAgyQAAgUgTAAIgFABIgFADIgHAGIAAABIgHBEIgLAAIAGhDIAAgCIgBgGIgCgIIgCgEIALAAQACADACAGIAAAAQAEgEAFgDIAGgDIAIgBQANAAAHAIQAGAIAAANIAAA8g");
	this.shape_64.setTransform(48,-49.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AggA9IAAhVIAMAAIAABVgAABAbIAAgCQgBgFADgJIADgLIAFgSIAKghIg1AAIAAgJIBAAAIAAAJIgKAjIgDAKIgCAHIgCAIIgCAGIgBAKIAAACg");
	this.shape_65.setTransform(40.4,-48.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgfAtIAAgJIAqAAIAAg0QAAgKgFgEQgFgEgJAAIgUABIgDAAIAAgKIAZgBQAOAAAHAHQAHAGAAAPIAAA0IAKAAIAAAJg");
	this.shape_66.setTransform(32.5,-49.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_67.setTransform(25.3,-50.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAtIgIAMg");
	this.shape_68.setTransform(20.4,-51.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgfAtIAAhXQAMgCASAAQAhAAAAAYIAABBgAgRgiIgDABIAABFIApAAIAAg2QAAgEgCgDIgDgFIgGgDIgGgBIgGAAIgPAAg");
	this.shape_69.setTransform(14.5,-49.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAUAsIgUglIgLgOIgEABQgGAGAAALIAAAhIgLAAIAAgdQAAgPAEgGIAFgGIAIgDIgRgcIAMAAIAUAiIALARIAFgFIADgFIABgJIAAggIAMAAIAAAcIgBAKIgCAHQgDAKgKAEIARAcg");
	this.shape_70.setTransform(2.6,-49.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAPA9IAAhTQAAgIgCgGIgCgFIgFgFQgCgCgDgBQgCgCgFABIgLABIgGABIgDABIAAgKIADgBIAGgBIALgBQAGAAAEABQAEABAEACIAFAGQAEADABAEIACAGQACAHAAAIIAABTg");
	this.shape_71.setTransform(-5,-48.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgRAtIgGgBIgDgBIAAgLQAJAEALAAIAGgBIAGgEIAEgEIADgGIABgFIABgJIAAgNQAAgIgCgGIgCgFIgEgFIgGgDQgCgCgFABIgLABIgGABIgDABIAAgKIADgBIAGgBIALgBQAGAAAEABQAEABAEACIAGAGIAEAHIACAGQACAHAAAIIAAAOIgBAIIgBAIIgEAIQgCAEgEACQgDADgGADQgFACgGAAIgLgBg");
	this.shape_72.setTransform(-14.9,-49.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgjAsIAAgJIAFABQAJAAAAgMIAAg5IgJABIAAgKQATgCANAAQAMAAAJAEQAIAEAEAJQABAFABAGIAAA8IgMAAIAAg8QAAgTgYAAIgKABIAAA4QAAALgFAGQgFAGgKAAIgGgBg");
	this.shape_73.setTransform(-22.7,-49.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgUAtIABgLIAKABQAEAAAFgEQAGgFACgIQACgEAAgGIAAgcQAAgJgDgDQgEgEgFABIgJABIAAgJQAGgBAFAAQAVAAAAAXIAABBIgJAAIgBgPIgBAAIgBADIgDAEIgDADIgDADIgFADIgGABIgJgBg");
	this.shape_74.setTransform(-30.1,-49.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgFAsIAAhXIALAAIAABXg");
	this.shape_75.setTransform(-34.4,-49.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgfAtIAAgJIAqAAIAAg0QAAgKgFgEQgFgEgJAAIgUABIgDAAIAAgKIAZgBQAOAAAHAHQAHAGAAAPIAAA0IAKAAIAAAJg");
	this.shape_76.setTransform(-39.6,-49.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgYABIgEAAIAAgKIAdgBQAMAAAJAEQAIAEADAJQACAFAAAGIAAA9gAgfAtIAAg4IALAAIAAA4g");
	this.shape_77.setTransform(-47.8,-49.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgjAsIAAgJIAFABQAKAAgBgMIAAg5IgJABIAAgKQATgCANAAQAMAAAJAEQAJAEADAJQABAFABAGIAAA8IgMAAIAAg8QAAgTgYAAIgKABIAAA4QAAALgFAGQgFAGgKAAIgGgBg");
	this.shape_78.setTransform(-60.4,-49.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgUAtIABgLIAJABQAFAAAFgEQAGgFACgIQACgEAAgGIAAgcQAAgJgDgDQgEgEgFABIgJABIAAgJQAGgBAFAAQAVAAABAXIAABBIgKAAIgBgPIgBAAIgBADIgDAEIgDADIgDADIgFADIgGABIgJgBg");
	this.shape_79.setTransform(-67.8,-49.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAHAsIAAg7IABgIIACgGIAFgEIABgBIAAAAIgvAAIAAgJIA/AAIAAAIQgOAEAAAQIAAA7g");
	this.shape_80.setTransform(-74,-49.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAtIgIAMg");
	this.shape_81.setTransform(-79,-51.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_82.setTransform(-83.9,-50.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgUAtIABgLIAKABQAEAAAFgEQAGgFADgIQABgEAAgGIAAgcQAAgJgDgDQgEgEgFABIgJABIAAgJQAGgBAFAAQAVAAAAAXIAABBIgJAAIgBgPIgBAAIgBADIgDAEIgDADIgDADIgFADIgGABIgJgBg");
	this.shape_83.setTransform(-94.1,-49.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgfAtIAAhXQAMgCASAAQAhAAAAAYIAABBgAgRgiIgDABIAABFIApAAIAAg2QAAgEgCgDIgDgFIgGgDIgGgBIgGAAIgPAAg");
	this.shape_84.setTransform(-101,-49.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAUAsIgUglIgLgOIgEABQgGAGAAALIAAAhIgLAAIAAgdQAAgPAEgGIAFgGIAIgDIgRgcIAMAAIAUAiIALARIAFgFIADgFIABgJIAAggIAMAAIAAAcIgBAKIgCAHQgDAKgKAEIARAcg");
	this.shape_85.setTransform(-112.9,-49.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgkAsIAAgJIAGABQAJAAAAgMIAAg5IgJABIAAgKQATgCAOAAQAMAAAIAEQAJAEADAJQABAFAAAGIAAA8IgLAAIAAg8QAAgTgZAAIgJABIAAA4QAAALgFAGQgFAGgKAAIgHgBg");
	this.shape_86.setTransform(-121.6,-49.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgRAtIgHgBIgCgBIAAgLQAKAEAKAAIAGgBIAHgEIADgEIADgGIACgFIAAgJIAAgNQAAgIgCgGIgCgFIgEgFIgGgDQgDgCgFABIgKABIgHABIgCABIAAgKIACgBIAHgBIALgBQAFAAAEABQAGABADACIAGAGIAEAHIADAGQABAHAAAIIAAAOIAAAIIgCAIIgEAIQgDAEgDACQgDADgGADQgFACgGAAIgLgBg");
	this.shape_87.setTransform(-132.7,-49.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AADAtIAAgJIATAAIAAgyQAAgUgTAAIgFABIgFADIgHAGIAAABIgHBEIgLAAIAGhDIAAgCIgBgGIgCgIIgCgEIALAAQACADACAGIAAAAQAEgEAFgDIAGgDIAIgBQANAAAHAIQAGAIAAANIAAA8g");
	this.shape_88.setTransform(-140.2,-49.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgFAsIAAhXIALAAIAABXg");
	this.shape_89.setTransform(-145.8,-49.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgkAsIAAgJIAGABQAJAAAAgMIAAg5IgJABIAAgKQATgCAOAAQAMAAAIAEQAJAEADAJQABAFAAAGIAAA8IgLAAIAAg8QAAgTgZAAIgJABIAAA4QAAALgFAGQgFAGgKAAIgHgBg");
	this.shape_90.setTransform(-152.2,-49.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgYABIgEAAIAAgKIAdgBQAMAAAJAEQAIAEADAJQACAFAAAGIAAA9gAgfAtIAAg4IALAAIAAA4g");
	this.shape_91.setTransform(-164.3,-49.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgRAAIAABPIgLAAIAAhYIAegBQALAAAIAEQAJAEADAJQACAFAAAGIAAA9g");
	this.shape_92.setTransform(-172.9,-49.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAtIgIAMg");
	this.shape_93.setTransform(-178.7,-51.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgFAdIAAg5IALAAIAAAtIgIAMg");
	this.shape_94.setTransform(-181.8,-51.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgfAtIAAhXQAMgCASAAQAhAAAAAYIAABBgAgRgiIgDABIAABFIApAAIAAg2QAAgEgCgDIgDgFIgGgDIgGgBIgGAAIgPAAg");
	this.shape_95.setTransform(-187.7,-49.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgjAsIgIhXIAMAAIAEAwIAJgDQAKgDACgPIADgbIAKAAIgCAXIgBAIIgDAIIgDAGQgCADgEADIgKADIgJADIACAVIAVAAQANAAAJgKQAJgKACgUIAEgmIALAAIgEAmQAAAIgCAHIgFALIgGAJQgDAEgFADQgFADgGACQgHACgHAAg");
	this.shape_96.setTransform(-200.6,-49.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_97.setTransform(-209,-50.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAVAtIAAg9QAAgSgYAAIgYABIgEAAIAAgKIAdgBQAMAAAJAEQAIAEADAJQACAFAAAGIAAA9gAgfAtIAAg4IALAAIAAA4g");
	this.shape_98.setTransform(-220.3,-49.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AADAtIAAgJIATAAIAAgyQAAgUgTAAIgFABIgFADIgHAGIAAABIgHBEIgLAAIAGhDIAAgCIgBgGIgCgIIgCgEIALAAQACADACAGIAAAAQAEgEAFgDIAGgDIAIgBQANAAAHAIQAGAIAAANIAAA8g");
	this.shape_99.setTransform(-229,-49.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgWAsIgDAAIAAgLIADACQALABALAAQAEAAAEgCQAEgCADgDIAEgJQADgIAAgMQAAgOgFgKQgCgFgFgDQgEgDgGAAQgFAAgEACIgGADIgEAFQgEAGAAAGQAAAJAFAEQAEAFAJABIADAAIgCAJIgDAAQgMgCgHgHQgHgHAAgMQAAgIADgFQADgHAFgDQAEgFAGgBQAGgCAGAAQAFAAAFABQAFABAEAEQAFAEADAFQADAFACAIQACAIAAAIQAAAJgCAIQgCAIgDAEQgDAGgFADQgIAIgLAAQgLgBgLgBg");
	this.shape_100.setTransform(-237,-49.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgBA1IAGgiIAMgsIgtAAIAAgbIALAAIAAASIAuAAIAAAJIgMAsIgHAig");
	this.shape_101.setTransform(-244.3,-50.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AggAsIAAgJIAlAAIAQABIAAAAIgWgfIgfgwIANAAIAaArIACACQAFgDADgHQACgHABgMIACgQIALAAIgCAOIAAADIAAAFIgBAEIgBAFIgBAFIgCAFIgEAEQgDAEgFADIATAaIAAAJg");
	this.shape_102.setTransform(-251.6,-49.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgkAsIAAgJIAGABQAKAAAAgMIAAg5IgKABIAAgKQATgCANAAQAMAAAJAEQAJAEADAJQACAFgBAGIAAA8IgLAAIAAg8QAAgTgZAAIgJABIAAA4QAAALgFAGQgFAGgKAAIgHgBg");
	this.shape_103.setTransform(-260,-49.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgFAHQgCgCAAgFQAAgEACgCQACgCADAAQAEAAACACQACACAAAEQAAAEgCADQgCACgEAAQgDAAgCgCg");
	this.shape_104.setTransform(-266.1,-46.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(2,1,1).p("EAoPgDKIAAETQAACWiWAAIwnAAIAQB7IhDgrIh7hQMg4cAAAQiWAAAAiWIAAkTQABgFAAgFQAJiFCMAAMBLxAAAQCNAAAICFQAAAFABAFgEAoPgDUIAAAKEgoOgDKIAAgK");
	this.shape_105.setTransform(-19.8,-34.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#FFEAAE","#FFE699","#FFEBB1"],[0,0.471,1],0.4,-20.1,154.7,-20.1).s().p("AAAgEIAAAAIAAAJg");
	this.shape_106.setTransform(-277.3,-55);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#FFEAAE","#FFE699","#FFEBB1"],[0,0.471,1],-158.6,-20,-4.3,-20).s().p("AAAgEIAAAAIAAAJIAAgJg");
	this.shape_107.setTransform(237.6,-55);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("ASkD1Mg4bAAAQiXgBABiWIAAkSIAAgLQAIiECOAAMBLvAAAQCOAAAICEIAAAKIAAETQAACWiWABIwmAAIgzBPg");
	this.shape_108.setTransform(-19.8,-36.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AmnDGIAAkpIJ5AAIAAhiIDWAAIAADEIiEAAIAADHg");
	this.shape_109.setTransform(85.4,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_109}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.6,154.5,49.2);


(lib.questionExplainOpen_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgPIADgZIAJAAIgCAWIgBAIIgCAGIgDAGIgGAGIgIADIgJACIACAUIATAAQAMAAAIgKQAJgJACgSIADgkIALAAIgEAkQAAAHgCAHIgEAKIgGAIQgDAEgFADQgEACgGACQgGACgHAAg");
	this.shape.setTransform(286.2,130.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATApIgTgiIgKgNIgDABQgGAFAAAKIAAAfIgLAAIAAgbQAAgOAEgFIAFgFIAHgEIgQgaIAMAAIASAgIAKAPQAEgCABgCIADgEIABgIIAAgfIAKAAIAAAaIAAAJIgCAHQgDAJgJAEIAQAag");
	this.shape_1.setTransform(277.8,130.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_2.setTransform(271.1,130);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAqIAAg5QAAgQgVAAIgXAAIgEAAIAAgIIAbgBQAMgBAHAEQAJAEACAIQACAFAAAGIAAA4gAgdAqIAAg0IAKAAIAAA0g");
	this.shape_3.setTransform(264,130.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATApIgTgiIgKgNIgDABQgGAFAAAKIAAAfIgLAAIAAgbQAAgOAEgFIAFgFIAHgEIgQgaIAMAAIASAgIAKAPQAEgCABgCIADgEIABgIIAAgfIAKAAIAAAaIAAAJIgCAHQgDAJgJAEIAQAag");
	this.shape_4.setTransform(252.9,130.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAqIAAg5QABgQgWAAIgQAAIAABJIgLAAIAAhRIAcgBQAKgBAJAEQAHAEADAIQACAFAAAGIAAA4g");
	this.shape_5.setTransform(245.2,130.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghApIAAgJIAFABQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHAEQAJAEACAIQACAEAAAGIAAA4IgLAAIAAg5QAAgQgWAAIgJAAIAAA0QAAAKgFAHQgFAFgIAAIgHgBg");
	this.shape_6.setTransform(236.8,130.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAqIAAgJIAbAAQABgEABgHIAAgoQgBgHgDgEQgDgDgGAAIgHABIAAgIIAKgBQAUAAAAAVIAAApIAAAKIgCAHIAAADg");
	this.shape_7.setTransform(226.6,130.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPApIgHgBIgCAAIAAgKQAJADAKAAIAGgBIAFgDIAEgEIACgFIABgFIABgJIAAgLQAAgIgCgFIgCgFIgEgFQgCgCgDgBQgCgBgFAAIgJABIgHABIgCABIAAgJIACgBIAHgCIAJAAIAJABIAIADIAGAFIAEAGIACAHQACAGAAAHIAAANIgBAIIgCAHIgDAHIgGAHIgIAEQgFACgFAAIgKgBg");
	this.shape_8.setTransform(220.9,130.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_9.setTransform(216.4,130.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgCA4IAAhWQAAgNgFgMIAKAAIABADIADAJIABANIAABWg");
	this.shape_10.setTransform(213.2,132.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_11.setTransform(210.2,134.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdApIAAgIIAnAAIAAgwQAAgKgFgDQgEgEgIABIgTAAIgDAAIAAgIIAYgBQAMAAAHAFQAGAGABAPIAAAvIAJAAIAAAIg");
	this.shape_12.setTransform(287.6,111.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPApIgHgBIgCAAIAAgKQAJADAKAAIAGgBIAFgDIAEgEIACgFIABgFIABgJIAAgLQAAgIgCgFIgCgFIgEgFQgCgCgDgBQgCgBgFAAIgJABIgHABIgCABIAAgJIACgBIAHgCIAJAAIAJABIAIADIAGAFIAEAGIACAHQACAGAAAHIAAANIgBAIIgCAHIgDAHIgGAHIgIAEQgFACgFAAIgKgBg");
	this.shape_13.setTransform(280.8,111.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAHApIAAg4IAAgGQABgDABgCQADgEACgBIABgBIgsAAIAAgIIA7AAIAAAHQgNAEAAAOIAAA4g");
	this.shape_14.setTransform(274.7,111.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_15.setTransform(270,109.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_16.setTransform(262,110.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiAiIAZgEIgThIIALAAIAJAlIAIAhQASgHACgbIAEgkIAKAAIgDAkIgCANIgEAKIgFAHIgHAHQgFADgGACQgEACgIABIgYAEg");
	this.shape_17.setTransform(254.9,111.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdApIAAgIIAnAAIAAgwQAAgKgEgDQgFgEgIABIgTAAIgDAAIAAgIIAYgBQANAAAGAFQAHAGgBAPIAAAvIAKAAIAAAIg");
	this.shape_18.setTransform(247.7,111.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_19.setTransform(242.4,111.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAOApIAAg4QAAgQgWAAIgQAAIAAgJIAQAAIALAAIAJADIAHAFQAGAHAAALIAAA3g");
	this.shape_20.setTransform(237.5,111.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_21.setTransform(228.3,110.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgPIADgZIAJAAIgCAWIgBAIIgCAGIgDAGIgGAGIgIADIgJACIACAUIATAAQAMAAAIgJQAJgKACgSIADgkIALAAIgEAkQAAAHgCAGIgEALIgGAIQgDAEgFADQgEACgGACQgGACgHAAg");
	this.shape_22.setTransform(220.5,111.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_23.setTransform(212.7,110.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdApIAAgIIAnAAIAAgwQAAgKgFgDQgEgEgIABIgTAAIgDAAIAAgIIAYgBQAMAAAHAFQAGAGAAAPIAAAvIAKAAIAAAIg");
	this.shape_24.setTransform(206.3,111.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATApIAAg4QABgQgWAAIgXAAIgEAAIAAgIIAcgBQALgBAIAEQAHAEADAJQACADAAAHIAAA3gAgdApIAAgzIALAAIAAAzg");
	this.shape_25.setTransform(195.3,111.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdApIAAgIIAnAAIAAgwQAAgKgFgDQgEgEgIABIgTAAIgDAAIAAgIIAYgBQAMAAAHAFQAGAGAAAPIAAAvIAKAAIAAAIg");
	this.shape_26.setTransform(188,111.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AATApIgTgiIgKgOIgDACQgGAFAAAKIAAAfIgLAAIAAgaQAAgPAEgFIAFgFIAHgEIgQgaIAMAAIASAgIAKAPQAEgCABgCIADgEIABgIIAAgfIAKAAIAAAaIAAAJIgCAHQgDAJgJAEIAQAag");
	this.shape_27.setTransform(180.6,111.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAUApIAAg4QgBgQgVAAIgWAAIgFAAIAAgIIAbgBQAMgBAHAEQAIAEAEAJQABADAAAHIAAA3gAgdApIAAgzIAKAAIAAAzg");
	this.shape_28.setTransform(169.6,111.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_29.setTransform(164.1,109.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTApIAAgIIAbAAQABgFAAgGIAAgoQAAgIgDgDQgDgDgFAAIgIABIAAgIIAKgBQAUgBAAAWIAAApIAAAKIgCAHIgBACg");
	this.shape_30.setTransform(159.7,111.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAOA5IAAhNQAAgIgCgFIgCgFIgEgEQgCgCgDgCQgCgBgFAAIgJABIgHACIgCABIAAgKIADgBIAGgCIAKAAIAIABIAIAEIAGAEIAEAGIACAIQACAFAAAHIAABOg");
	this.shape_31.setTransform(153.6,112.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AANApIAAg0QAAgPgPAAIgKAAIAABDIgUAAIAAhPIAPgCIARAAIAMAAQAGABADACIAGAEIAEAGIABAHIABAJIAAA0g");
	this.shape_32.setTransform(143.2,111.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgIAbIAAg1IASAAIAAAlIgMAQg");
	this.shape_33.setTransform(137.1,109.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgJAbIAAg1IASAAIAAAlIgLAQg");
	this.shape_34.setTransform(133.4,109.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AggApIAAgPIAkAAIAAglQAAgPgPAAIgSACIgDAAIAAgPIAXgBQAUgBAHAJQADADABAGIABAMIAAAlIAKAAIAAAPg");
	this.shape_35.setTransform(127.9,111.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgZAuIAhhbIASAAIgiBbg");
	this.shape_36.setTransform(121.3,110.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AglAoIAAgOIAGABIAEgBIACgDIABgGIAAgqIgJABIAAgPQAUgCASAAQAOAAAIADIAGAEQACADABADIACAIIAAAIIAAA1IgTAAIAAg1QAAgOgQAAIgHAAIAAArQAAAOgHAGIgHAEQgFABgFAAQgFAAgEgCg");
	this.shape_37.setTransform(113.8,111.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_38.setTransform(103,110.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AghAiIAYgEIgThIIALAAIAKAlIAHAhQASgHADgbIACgkIALAAIgDAkIgCANIgEAKIgFAHIgHAHQgEADgGACQgGACgHABIgXAEg");
	this.shape_39.setTransform(95.9,111.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgTApIAAgIIAbAAQABgFABgGIAAgoQgBgIgDgDQgDgDgGAAIgHABIAAgIIAKgBQAUgBAAAWIAAApIAAAKIgCAHIAAACg");
	this.shape_40.setTransform(89,111.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_41.setTransform(84.8,111.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AghApIAAgIIAFAAQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHAEQAJADACAJQACAEAAAGIAAA4IgLAAIAAg5QAAgQgWAAIgJAAIAAA0QAAALgFAGQgFAFgIAAIgHgBg");
	this.shape_42.setTransform(78.9,111.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgiAiIAZgEIgThIIALAAIAJAlIAIAhQASgHACgbIAEgkIALAAIgEAkIgCANIgEAKIgFAHIgIAHQgDADgHACQgEACgIABIgYAEg");
	this.shape_43.setTransform(67.6,111.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_44.setTransform(60.6,110.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghApIAAgIIAFAAQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHAEQAJADADAJQABAEAAAGIAAA4IgKAAIAAg5QAAgQgYAAIgJAAIAAA0QABALgFAFQgEAGgKAAIgGgBg");
	this.shape_45.setTransform(286.5,71.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgPIADgZIAJAAIgCAWIgBAIIgCAHIgDAFIgGAFIgIAEIgJACIACAUIATAAQAMAAAIgJQAJgKACgSIADgkIALAAIgEAkQAAAHgCAGIgEALIgGAIQgDAEgFADQgEACgGADQgGABgHAAg");
	this.shape_46.setTransform(278,71.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_47.setTransform(271.7,71.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgFgEQgEgDgIAAIgTAAIgDAAIAAgJIAYgBQAMAAAHAHQAGAFABAPIAAAvIAJAAIAAAIg");
	this.shape_48.setTransform(266.9,71.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAUApIAAg4QgBgRgVABIgWAAIgFAAIAAgJIAbgBQAMABAHADQAIAEAEAJQABADAAAHIAAA3gAgdApIAAgzIAKAAIAAAzg");
	this.shape_49.setTransform(259.2,71.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_50.setTransform(248.7,70.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AATApIgTgiIgKgOIgDACQgGAFAAAKIAAAfIgLAAIAAgaQAAgPAEgFIAFgFIAHgEIgQgaIAMAAIASAgIAKAPQAEgCABgBIADgFIABgIIAAgfIAKAAIAAAbIAAAJIgCAGQgDAJgJAEIAQAag");
	this.shape_51.setTransform(241.9,71.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTApIAAgIIAbAAQACgEAAgIIAAgnQAAgIgEgDQgDgDgGAAIgHABIAAgJIAKgBQAUAAAAAWIAAAoIAAAKIgCAIIAAACg");
	this.shape_52.setTransform(231.9,71.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgPApIgHgBIgCAAIAAgKQAJADAKAAIAGgBIAFgDIAEgEIACgFIABgFIABgJIAAgLQAAgIgCgFIgCgFIgEgFQgCgCgDgBQgCgBgFAAIgJABIgHABIgCABIAAgJIACgBIAHgCIAJAAIAJABIAIADIAGAFIAEAGIACAHQACAGAAAHIAAANIgBAIIgCAHIgDAHIgGAHIgIAEQgFACgFAAIgKgBg");
	this.shape_53.setTransform(226.2,71.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_54.setTransform(221.7,71.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgTApIAAgIIAbAAQABgEABgIIAAgnQgBgIgDgDQgDgDgGAAIgHABIAAgJIAKgBQAUAAAAAWIAAAoIgBAKIgBAIIAAACg");
	this.shape_55.setTransform(217.2,71.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAUApIAAg4QgBgRgVABIgWAAIgFAAIAAgJIAbgBQAMABAHADQAIAEAEAJQABADAAAHIAAA3gAgdApIAAgzIAKAAIAAAzg");
	this.shape_56.setTransform(210.6,71.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AghApIAAgIIAFAAQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHAEQAJADADAJQABAEAAAGIAAA4IgLAAIAAg5QAAgQgXAAIgJAAIAAA0QABALgFAFQgEAGgKAAIgGgBg");
	this.shape_57.setTransform(198.8,71.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTApIABgJIAJAAQAFAAAEgDQAFgFADgHQABgFAAgFIAAgaQABgHgEgEQgDgDgFAAIgIABIAAgIIAKgBQAUAAAAAVIAAA9IgIAAIgCgOIgBAAIgBADIgCADIgDADIgDADIgEACIgGABIgJgBg");
	this.shape_58.setTransform(192,71.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAOApIAAg4QAAgRgWABIgQAAIAAgJIAQgBIALABIAJADIAHAFQAGAHAAALIAAA3g");
	this.shape_59.setTransform(186.1,71.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_60.setTransform(181.8,71.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgdApIAAhQQAMgBAQgBQAfABAAAVIAAA8gAgSAhIAlAAIAAgyQAAgEgBgCQgBgDgCgCIgFgDIgHAAIgFAAIgOAAIgCAAg");
	this.shape_61.setTransform(176.3,71.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_62.setTransform(165.8,70.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AATApIAAg4QAAgRgVABIgXAAIgEAAIAAgJIAbgBQAMABAHADQAJAEACAJQACADAAAHIAAA3gAgdApIAAgzIAKAAIAAAzg");
	this.shape_63.setTransform(158.7,71.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_64.setTransform(153.1,71.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgUApIgDgBIAAgJIADABQAKABAKAAQAEAAAEgCQAEgCACgDIAEgHQACgIAAgLQAAgNgEgJQgCgFgEgDQgFgDgFAAQgEAAgEACIgGADIgEAFQgDAFAAAGQAAAIAEAEQAEAEAIACIADAAIgCAIIgCAAQgLgCgHgHQgGgFAAgMQAAgHACgGQADgGAEgDQAFgEAFgBQAGgCAFAAQAFAAAEABQAFACAEADQAEADADAFQADAFACAHQABAHAAAIQAAAIgBAIQgCAHgDAEQgDAFgEAEQgIAGgKAAQgKAAgKgBg");
	this.shape_65.setTransform(147.8,71.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghAiIAZgEIgUhIIALAAIAKAlIAHAhQASgHADgbIACgkIALAAIgDAkIgCANIgEAKIgFAHIgHAHQgFADgFACQgGACgHABIgXAEg");
	this.shape_66.setTransform(140.1,71.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AghApIAAgIIAFAAQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHAEQAJADADAJQABAEAAAGIAAA4IgLAAIAAg5QAAgQgXAAIgJAAIAAA0QABALgFAFQgEAGgKAAIgGgBg");
	this.shape_67.setTransform(131.8,71.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgPIADgZIAJAAIgCAWIgBAIIgCAHIgDAFIgGAFIgIAEIgJACIACAUIATAAQAMAAAIgJQAJgKACgSIADgkIALAAIgEAkQAAAHgCAGIgEALIgGAIQgDAEgFADQgEACgGADQgGABgHAAg");
	this.shape_68.setTransform(119.9,71.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AATApIgTgiIgKgOIgDACQgGAFAAAKIAAAfIgLAAIAAgaQAAgPAEgFIAFgFIAHgEIgQgaIAMAAIASAgIAKAPQAEgCABgBIADgFIABgIIAAgfIAKAAIAAAbIAAAJIgCAGQgDAJgJAEIAQAag");
	this.shape_69.setTransform(111.5,71.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_70.setTransform(104.7,70.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AATApIAAg4QABgRgWABIgXAAIgEAAIAAgJIAcgBQAKABAJADQAHAEADAJQACADAAAHIAAA3gAgdApIAAgzIALAAIAAAzg");
	this.shape_71.setTransform(97.6,71.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AATApIgTgiIgKgOIgDACQgGAFAAAKIAAAfIgLAAIAAgaQAAgPAEgFIAFgFIAHgEIgQgaIAMAAIASAgIAKAPQAEgCABgBIADgFIABgIIAAgfIAKAAIAAAbIAAAJIgCAGQgDAJgJAEIAQAag");
	this.shape_72.setTransform(86.5,71.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAUApIAAg4QgBgRgVABIgRAAIAABIIgKAAIAAhRIAcgBQALABAIADQAIAEADAJQABADAAAHIAAA3g");
	this.shape_73.setTransform(78.9,71.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAOApIAAg4QAAgRgWABIgQAAIAAgJIAQgBIALABIAJADIAHAFQAGAHAAALIAAA3g");
	this.shape_74.setTransform(71.4,71.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghApIAAgIIAFAAQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHAEQAIADAEAJQABAEAAAGIAAA4IgKAAIAAg5QAAgQgYAAIgIAAIAAA0QgBALgEAFQgEAGgJAAIgHgBg");
	this.shape_75.setTransform(64.3,71.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_76.setTransform(58.7,75.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AghApIAAgIIAFAAQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHADQAJAEADAJQABAEAAAGIAAA4IgKAAIAAg5QAAgQgYAAIgJAAIAAA1QABAJgFAGQgEAGgKAAIgGgBg");
	this.shape_77.setTransform(286.5,52);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgOIADgaIAJAAIgCAVIgBAIIgCAIIgDAFIgGAFIgIAEIgJACIACAUIATAAQAMAAAIgJQAJgKACgSIADgkIALAAIgEAkQAAAHgCAGIgEALIgGAIQgDAEgFACQgEAEgGACQgGABgHAAg");
	this.shape_78.setTransform(278,52);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_79.setTransform(271.7,52);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgFgEQgEgDgIgBIgTABIgDAAIAAgJIAYgBQAMAAAHAHQAGAFABAOIAAAwIAJAAIAAAIg");
	this.shape_80.setTransform(266.9,52);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAUApIAAg4QgBgRgVAAIgWABIgFAAIAAgJIAbgBQAMABAHADQAIAEAEAJQABAEAAAFIAAA4gAgdApIAAgyIAKAAIAAAyg");
	this.shape_81.setTransform(259.2,52);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgTApIAAgIIAbAAQABgEAAgIIAAgnQAAgHgDgEQgDgDgFAAIgIABIAAgJIAKgBQAUAAAAAWIAAAoIgBAKIgBAIIAAACg");
	this.shape_82.setTransform(248.8,52);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgPApIgHgBIgCAAIAAgKQAJADAKAAIAGgBIAFgDIAEgEIACgFIABgFIABgJIAAgLQAAgIgCgFIgCgFIgEgFQgCgCgDgBQgCgBgFAAIgJABIgHABIgCABIAAgJIACgBIAHgCIAJAAIAJABIAIADIAGAFIAEAGIACAHQACAGAAAHIAAANIgBAIIgCAHIgDAHIgGAHIgIAEQgFACgFAAIgKgBg");
	this.shape_83.setTransform(243.1,52);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_84.setTransform(238.7,52);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgTApIAAgIIAbAAQACgEgBgIIAAgnQABgHgEgEQgDgDgFAAIgIABIAAgJIAKgBQAUAAAAAWIAAAoIgBAKIgBAIIgBACg");
	this.shape_85.setTransform(234.2,52);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AATApIAAg4QABgRgWAAIgXABIgEAAIAAgJIAcgBQAKABAJADQAHAEADAJQACAEAAAFIAAA4gAgdApIAAgyIALAAIAAAyg");
	this.shape_86.setTransform(227.6,52);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AghApIAAgIIAFAAQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQALAAAIADQAIAEADAJQACAEAAAGIAAA4IgLAAIAAg5QAAgQgWAAIgJAAIAAA1QAAAJgFAGQgFAGgIAAIgHgBg");
	this.shape_87.setTransform(215.8,52);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgEApIAAgwIAAgIIADgHIAFgIIABgBIgSAAIAAgJIAbAAIAAAJIAAAAIgDACIgDAEIgCAIIgBAKIAAAwg");
	this.shape_88.setTransform(210.2,52);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgPApIgHgBIgCAAIAAgKQAJADAKAAIAGgBIAFgDIAEgEIACgFIABgFIABgJIAAgLQAAgIgCgFIgCgFIgEgFQgCgCgDgBQgCgBgFAAIgJABIgHABIgCABIAAgJIACgBIAHgCIAJAAIAJABIAIADIAGAFIAEAGIACAHQACAGAAAHIAAANIgBAIIgCAHIgDAHIgGAHIgIAEQgFACgFAAIgKgBg");
	this.shape_89.setTransform(204.9,52);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AATApIAAg4QABgRgWAAIgXABIgEAAIAAgJIAcgBQAKABAJADQAIAEACAJQACAEAAAFIAAA4gAgdApIAAgyIALAAIAAAyg");
	this.shape_90.setTransform(198.1,52);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AATApIgTgiIgKgOIgDACQgGAFAAAKIAAAfIgLAAIAAgaQAAgOAEgGIAFgGIAHgDIgQgaIAMAAIASAgIAKAPQAEgCABgBIADgFIABgJIAAgeIAKAAIAAAbIAAAJIgCAHQgDAIgJAEIAQAag");
	this.shape_91.setTransform(187,52);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_92.setTransform(181.7,52);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AghApIAAgIIAFAAQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQALAAAIADQAIAEADAJQACAEAAAGIAAA4IgLAAIAAg5QABgQgXAAIgJAAIAAA1QgBAJgEAGQgFAGgIAAIgHgBg");
	this.shape_93.setTransform(175.8,52);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAOA5IAAhMQAAgJgCgFIgCgFIgEgFQgCgBgDgBQgCgCgFAAIgJABIgHACIgCAAIAAgJIADgBIAGgBIAKgBIAIABIAIADIAGAGIAEAFIACAHQACAHAAAGIAABOg");
	this.shape_94.setTransform(168.5,53.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgdApIAAgIIAnAAIAAgwQAAgJgEgEQgFgDgIgBIgTABIgDAAIAAgJIAYgBQANAAAGAHQAHAFAAAOIAAAwIAJAAIAAAIg");
	this.shape_95.setTransform(159.1,52);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AADApIAAgIIARAAIAAguQAAgTgRAAIgFABIgEADQgFADgBACIgBABIgGA/IgLAAIAGg+IAAgBIgBgFIgCgIIgCgFIALAAIADAJIAAAAIAIgGIAHgDIAHgBQAMAAAGAIQAGAHAAAMIAAA3g");
	this.shape_96.setTransform(151.4,52);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgJAoQgFgBgEgDQgEgEgDgFQgDgEgBgHQgCgIAAgIQAAgLADgIQACgJAEgEIgIABIAAgJIAegBQAPAAAIAKQAJALAAAUQAAAIgCAIQgBAHgDAEQgDAFgEAEQgEADgFABQgFACgFAAQgEAAgFgCgAgSgSQgCAKAAAIIABAMQABAGACAFQADAFAEACQAEADAFAAQAGAAAEgDQAEgCADgFQAEgJAAgOQAAgRgGgJQgCgDgEgBQgEgCgFAAIgKAAQgFAFgDAJg");
	this.shape_97.setTransform(143.9,52);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgUApIgDgBIAAgJIADABQAKABAKAAQAEAAAEgCQAEgCACgDIAEgHQACgIAAgLQAAgNgEgJQgCgFgEgDQgFgDgFAAQgEAAgEACIgGADIgEAFQgDAFAAAGQAAAIAEAEQAEAEAIACIADAAIgCAIIgCAAQgLgCgHgHQgGgFAAgMQAAgHACgGQADgGAEgDQAFgEAFgBQAGgCAFAAQAFAAAEABQAFACAEADQAEADADAFQADAFACAHQABAHAAAIQAAAIgBAIQgCAHgDAEQgDAFgEAEQgIAGgKAAQgKAAgKgBg");
	this.shape_98.setTransform(136.4,52);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAOApIAAg4QAAgRgWAAIgQAAIAAgIIAQgBIALABIAJADIAHAFQAGAGAAALIAAA4g");
	this.shape_99.setTransform(129.2,52);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgbAoIAAgPIAVABQAJAAAEgIQACgEAAgIIAAgMQAAgPgIgEQgDgBgEAAIgVABIAAgPIAXgBQAHAAAGACQAGACADADIAHAJQADAJAAAMIAAAJIAAALIgDAKQgCAFgEADQgEAEgGACQgFACgIAAQgOAAgJgCg");
	this.shape_100.setTransform(119.7,52);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgJApIAAhRIATAAIAABRg");
	this.shape_101.setTransform(114.4,52);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AANApIAAg0QAAgOgPAAIgKAAIAABCIgUAAIAAhPIAPgCIARgBIAMABQAGABADACIAGAEIAEAGIABAHIABAJIAAA0g");
	this.shape_102.setTransform(108.2,52);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgJApIAAhRIATAAIAABRg");
	this.shape_103.setTransform(101.9,52);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgmAoIAAgOIAHABIAEgBIADgDIAAgGIAAgqIgJABIAAgPQAUgCASAAQAOAAAIADIAFAEQADADABADIACAIIAAAIIAAA1IgTAAIAAg1QAAgOgQAAIgHAAIAAArQAAAOgIAGIgGAEQgFABgFAAQgFAAgFgCg");
	this.shape_104.setTransform(95.2,52);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgFAxIAGgeIALgjIgqAAIAAghIATAAIAAARIAqAAIAAANIgLAmIgHAeg");
	this.shape_105.setTransform(83.9,51.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AANApIAAg0QAAgOgPAAIgKAAIAABCIgUAAIAAhPIAPgCIARgBIAMABQAGABADACIAGAEIAEAGIABAHIABAJIAAA0g");
	this.shape_106.setTransform(76.1,52);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgIAbIAAg1IASAAIAAAlIgMAQg");
	this.shape_107.setTransform(70,50.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AghApIAAgPIAfAAIAOABIgRgWIgdgtIAVAAIAWAlQAFgGABgNIABgSIATAAIgBAPQgBALgCAFIgCAHQgEAFgGAGIAQAVIAAALg");
	this.shape_108.setTransform(63.9,52);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AANApIAAg0QAAgOgPAAIgNAAIgMABIgFAAIAAgOIAPgCIARgBIAMABQAGABADACIAGAEIAEAGIABAHIABAJIAAA0gAggApIAAgyIAUAAIAAAyg");
	this.shape_109.setTransform(55.7,52);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgTApIAAgIIAbAAQACgEAAgIIAAgnQAAgHgEgEQgDgDgGAAIgHABIAAgJIAKgBQAUAAAAAWIAAAoIAAAKIgCAIIgBACg");
	this.shape_110.setTransform(45,52);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_111.setTransform(40.8,52);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgJAoQgFgBgEgDQgEgEgDgFQgDgEgBgHQgCgIAAgIQAAgLADgIQACgJAEgEIgIABIAAgJIAegBQAPAAAIAKQAJALAAAUQAAAIgCAIQgBAHgDAEQgDAFgEAEQgEADgFABQgFACgFAAQgEAAgFgCgAgSgSQgCAKAAAIIABAMQABAGACAFQADAFAEACQAEADAFAAQAGAAAEgDQAEgCADgFQAEgJAAgOQAAgRgGgJQgCgDgEgBQgEgCgFAAIgKAAQgFAFgDAJg");
	this.shape_112.setTransform(35.5,52);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgUApIgDgBIAAgJIADABQAKABAKAAQAEAAAEgCQAEgCACgDIAEgHQACgIAAgLQAAgNgEgJQgCgFgEgDQgFgDgFAAQgEAAgEACIgGADIgEAFQgDAFAAAGQAAAIAEAEQAEAEAIACIADAAIgCAIIgCAAQgLgCgHgHQgGgFAAgMQAAgHACgGQADgGAEgDQAFgEAFgBQAGgCAFAAQAFAAAEABQAFACAEADQAEADADAFQADAFACAHQABAHAAAIQAAAIgBAIQgCAHgDAEQgDAFgEAEQgIAGgKAAQgKAAgKgBg");
	this.shape_113.setTransform(28,52);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_114.setTransform(22.9,50.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgdApIAAhQQAMgBAQgBQAfAAAAAXIAAA7gAgSAhIAmAAIAAgyQgBgEgBgDQgBgCgCgCIgFgDIgHgBIgFAAIgOABIgCAAg");
	this.shape_115.setTransform(17.4,52);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_116.setTransform(11.7,55.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgdApIAAgHIAnAAIAAgxQAAgKgFgDQgEgDgIgBIgTABIgDAAIAAgJIAYgBQAMAAAHAHQAGAFABAOIAAAxIAJAAIAAAHg");
	this.shape_117.setTransform(287.6,32.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgPApIgHgBIgCAAIAAgKQAJADAKAAIAGgBIAFgDIAEgEIACgFIABgFIABgJIAAgLQAAgIgCgFIgCgFIgEgFQgCgCgDgBQgCgBgFAAIgJABIgHABIgCABIAAgJIACgBIAHgCIAJAAIAJABIAIADIAGAFIAEAGIACAHQACAGAAAHIAAANIgBAIIgCAHIgDAHIgGAHIgIAEQgFACgFAAIgKgBg");
	this.shape_118.setTransform(280.8,32.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_119.setTransform(274.9,31.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgOIADgaIAJAAIgCAVIgBAIIgCAIIgDAFIgGAFIgIAEIgJACIACAUIATAAQAMAAAIgKQAJgJACgSIADgkIALAAIgEAkQAAAHgCAGIgEALIgGAIQgDAEgFACQgEADgGADQgGABgHAAg");
	this.shape_120.setTransform(263.7,32.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_121.setTransform(255.9,31.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgdApIAAgHIAnAAIAAgxQAAgKgFgDQgEgDgIgBIgTABIgDAAIAAgJIAYgBQAMAAAHAHQAGAFABAOIAAAxIAJAAIAAAHg");
	this.shape_122.setTransform(249.5,32.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgFApIAAgvIABgJIADgHIAFgIIABgBIgTAAIAAgJIAdAAIAAAJIgCAAIgCACIgCAFIgDAHIgBALIAAAvg");
	this.shape_123.setTransform(240.7,32.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_124.setTransform(237,32.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgTApIABgJIAJAAQAFAAAEgDQAFgFADgHQABgFAAgFIAAgaQABgHgEgEQgDgDgFAAIgIABIAAgIIAKgBQAUAAAAAVIAAA9IgIAAIgCgOIgBAAIgBADIgCADIgDADIgDADIgEACIgGABIgJgBg");
	this.shape_125.setTransform(232.5,32.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_126.setTransform(228.6,30.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgOA5QAJgMAFgPQADgOAAgQQAAgOgDgPQgFgOgJgNIAKAAQAJAMAFAOQAFAPAAAQQAAAQgFAPQgFAOgJALg");
	this.shape_127.setTransform(221.7,32.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_128.setTransform(218.1,35.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_129.setTransform(214.7,35.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgWApQgHgGAAgMQAAgQATgIQgIgFgFgGQgDgFAAgIQAAgKAHgGQAIgGALAAQANAAAHAGQAHAGAAAKQABAHgEAGQgFAGgJAEQALAFAFAFQAFAGgBAIQAAAMgIAHQgHAHgPAAQgOAAgIgHgAgPALQgEAFAAAHQAAAHAFAFQAGAEAIAAQAKAAAFgEQAFgFAAgIQAAgGgFgFQgEgEgMgFQgJAEgFAFgAgLgjQgFAEAAAGQAAAGADAFQAFAEAJAEQAJgEADgEQAEgFAAgGQAAgGgFgEQgEgDgIAAQgHAAgEADg");
	this.shape_130.setTransform(209.2,31.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgJAQIAEgQIADgPIAKAAIABABIgEAOIgGAQg");
	this.shape_131.setTransform(203.7,36.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgVAlQgIgLAAgTQAAg2ApAAIALABIAAAJQgFgBgGAAQgOAAgIAJQgIAKgBATIABAAQAHgLAOAAQANAAAHAIQAHAGAAANQAAAPgIAIQgIAJgNAAQgNAAgJgLgAgMACQgHAFAAAHQAAAHADAFQADAGAEADQAFAEAEAAIABAAQAJAAAFgGQAFgGAAgKQAAgKgFgFQgFgEgJAAIAAAAQgHAAgGAEg");
	this.shape_132.setTransform(198.6,31.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgIAQIADgQIADgPIALAAIAAABIgEAOIgFAQg");
	this.shape_133.setTransform(193,36.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AALAvIAAgWIgtAAIAAgJIAsg+IALAAIAAA+IANAAIAAAJIgNAAIAAAWgAAGgYIgcAoIAhAAIAAgeIABgVIgBAAIgFALg");
	this.shape_134.setTransform(187.9,31.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgIAQIADgQIADgPIALAAIABABIgFAOIgGAQg");
	this.shape_135.setTransform(182.4,36.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgdAvIAAgJIAYgZIAOgPIAFgJQACgEAAgGQAAgHgFgFQgFgEgGAAQgGAAgFACQgGABgGAFIgFgGQANgLAPAAQAMAAAHAGQAHAHABALQAAAKgGAIQgEAHgOAOIgUAUIAAAAIAvAAIAAAKg");
	this.shape_136.setTransform(177.3,31.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAFA5QgJgLgFgOQgFgPAAgQQAAgQAFgPQAFgPAJgLIAKAAQgJANgFAOQgDAPAAAOQAAAQADAOQAFAPAJAMg");
	this.shape_137.setTransform(171.7,32.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AghApIAAgJIAFABQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHADQAJAEACAJQACAEAAAGIAAA4IgLAAIAAg4QAAgRgXAAIgJAAIAAA1QABAJgFAGQgEAGgKAAIgGgBg");
	this.shape_138.setTransform(161.9,32.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgOIADgaIAJAAIgCAVIgBAIIgCAIIgDAFIgGAFIgIAEIgJACIACAUIATAAQAMAAAIgKQAJgJACgSIADgkIALAAIgEAkQAAAHgCAGIgEALIgGAIQgDAEgFACQgEADgGADQgGABgHAAg");
	this.shape_139.setTransform(153.4,32.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AATApIgTgiIgKgNIgDABQgGAFAAALIAAAeIgLAAIAAgaQAAgOAEgGIAFgGIAHgDIgQgaIAMAAIASAgIAKAPQAEgBABgCIADgFIABgJIAAgeIAKAAIAAAbIAAAJIgCAHQgDAIgJAEIAQAag");
	this.shape_140.setTransform(145,32.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_141.setTransform(138.3,31.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgOIADgaIAJAAIgCAVIgBAIIgCAIIgDAFIgGAFIgIAEIgJACIACAUIATAAQAMAAAIgKQAJgJACgSIADgkIALAAIgEAkQAAAHgCAGIgEALIgGAIQgDAEgFACQgEADgGADQgGABgHAAg");
	this.shape_142.setTransform(127.1,32.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AATApIgTgiIgKgNIgDABQgGAFAAALIAAAeIgLAAIAAgaQAAgOAEgGIAFgGIAHgDIgQgaIAMAAIASAgIAKAPQAEgBABgCIADgFIABgJIAAgeIAKAAIAAAbIAAAJIgCAHQgDAIgJAEIAQAag");
	this.shape_143.setTransform(118.7,32.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_144.setTransform(112,31.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAUApIAAg4QgBgRgVAAIgWABIgFAAIAAgJIAbgBQAMABAHADQAIAEAEAIQABAFAAAFIAAA4gAgdApIAAgyIAKAAIAAAyg");
	this.shape_145.setTransform(104.9,32.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AATApIgTgiIgKgNIgDABQgGAFAAALIAAAeIgLAAIAAgaQAAgOAEgGIAFgGIAHgDIgQgaIAMAAIASAgIAKAPQAEgBABgCIADgFIABgJIAAgeIAKAAIAAAbIAAAJIgCAHQgDAIgJAEIAQAag");
	this.shape_146.setTransform(93.8,32.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AADApIAAgHIARAAIAAgvQAAgTgRAAIgFABIgEADQgFADgBACIgBABIgGA/IgLAAIAGg+IAAgBIgBgFIgCgIIgCgFIALAAIADAJIAAAAIAIgGIAHgDIAHgBQAMAAAGAHQAGAIAAAMIAAA3g");
	this.shape_147.setTransform(86,32.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAOApIAAg4QAAgRgWAAIgQAAIAAgIIAQgBIALABIAJADIAHAFQAGAGAAALIAAA4g");
	this.shape_148.setTransform(78.9,32.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_149.setTransform(74.7,30.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgdA5IAAhQIAKAAIAABQgAABAZIAAgCQAAgFACgHIADgLIAFgQIAJggIgxAAIAAgIIA7AAIAAAIIgJAhIgDAKIgCAGIgCAHIgBAGIgCAJIAAACg");
	this.shape_150.setTransform(69.8,33.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AATApIgTgiIgKgNIgDABQgGAFAAALIAAAeIgLAAIAAgaQAAgOAEgGIAFgGIAHgDIgQgaIAMAAIASAgIAKAPQAEgBABgCIADgFIABgJIAAgeIAKAAIAAAbIAAAJIgCAHQgDAIgJAEIAQAag");
	this.shape_151.setTransform(62.1,32.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_152.setTransform(57,30.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AghApIAAgJIAFABQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQALAAAIADQAIAEADAJQACAEAAAGIAAA4IgLAAIAAg4QABgRgXAAIgJAAIAAA1QgBAJgEAGQgFAGgIAAIgHgBg");
	this.shape_153.setTransform(51.2,32.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgDACgCQACgDADAAQAEAAACADQACACAAADQAAAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_154.setTransform(45.6,35.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAUAqIAAg5QAAgRgWAAIgWABIgFAAIAAgJIAbgBQALAAAJAEQAHAEAEAIQABAEAAAGIAAA5gAgdAqIAAgzIALAAIAAAzg");
	this.shape_155.setTransform(286.9,12.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgJAoQgFgBgEgDQgEgEgDgFQgDgEgBgHQgCgIAAgIQAAgLADgIQACgJAEgEIgIABIAAgJIAegBQAPAAAIAKQAJALAAAUQAAAIgCAIQgBAHgDAEQgDAFgEAEQgEADgFABQgFACgFAAQgEAAgFgCgAgSgSQgCAKAAAIIABAMQABAGACAFQADAFAEACQAEADAFAAQAGAAAEgDQAEgCADgFQAEgJAAgOQAAgRgGgJQgCgDgEgBQgEgCgFAAIgKAAQgFAFgDAJg");
	this.shape_156.setTransform(279.1,12.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgdAqIAAgIIAnAAIAAgxQAAgKgFgDQgEgEgIAAIgTABIgDAAIAAgJIAYgBQAMABAHAFQAGAGAAAOIAAAxIAKAAIAAAIg");
	this.shape_157.setTransform(272,12.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAOAqIAAg5QAAgRgWAAIgQAAIAAgIIAQgBIALABIAJADIAHAFQAGAGAAALIAAA5g");
	this.shape_158.setTransform(264.9,12.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgiAiIAagEIgUhIIALAAIAJAlIAIAhQASgHACgbIAEgkIALAAIgEAkIgCANIgEAKIgFAHIgIAHQgDADgHACQgEACgIABIgYAEg");
	this.shape_159.setTransform(254.8,12.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_160.setTransform(247.8,11.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAUAqIAAg5QgBgRgVAAIgWABIgFAAIAAgJIAbgBQALAAAJAEQAIAEADAIQABAEAAAGIAAA5gAgdAqIAAgzIAKAAIAAAzg");
	this.shape_161.setTransform(237.3,12.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgOIADgaIAJAAIgCAVIgBAIIgCAHIgDAGIgGAFIgIAEIgJACIACAUIATAAQAMAAAIgKQAJgJACgSIADgkIALAAIgEAkQAAAHgCAHIgEAKIgGAIQgDAEgFACQgEAEgGACQgGABgHAAg");
	this.shape_162.setTransform(228.6,12.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AATApIgTgiIgKgNIgDABQgGAFAAALIAAAeIgLAAIAAgbQAAgNAEgGIAFgGIAHgDIgQgaIAMAAIASAgIAKAPQAEgBABgCIADgFIABgJIAAgeIAKAAIAAAbIAAAJIgCAHQgDAIgJAEIAQAag");
	this.shape_163.setTransform(220.2,12.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_164.setTransform(213.5,11.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_165.setTransform(208.8,12.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AghApIAAgJIAFABQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHADQAJAFACAIQACAEAAAGIAAA4IgLAAIAAg4QAAgRgXAAIgJAAIAAA1QABAKgFAGQgEAFgKAAIgGgBg");
	this.shape_166.setTransform(202.9,12.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgFAiQgCgCAAgEQAAgEACgCQACgDADAAQAEAAACADQACACAAAEQAAAEgCACQgCADgEAAQgDAAgCgDgAgFgVQgCgCAAgEQAAgJAHAAQAIAAAAAJQAAAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_167.setTransform(197.3,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer 2
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(2,1,1).p("AAAAAIguguAAvAvIgvgvIAvguAguAvIAugv");
	this.shape_168.setTransform(4.7,5.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(2,1,1).p("AYYMJMgugAAAQiPgDAAiTIAA17");
	this.shape_169.setTransform(148.9,70.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(2,1,1).p("AYYMOMgugAAAQiPgDAAiTIAA2FMAwvAAAg");
	this.shape_170.setTransform(148.9,70.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("A2IMOQiQgDAAiTIAA2FMAwxAAAIAAYbg");
	this.shape_171.setTransform(148.9,70.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168}]}).to({state:[{t:this.shape_171},{t:this.shape_170}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-7.8,314.1,157.4);


(lib.questionExplainClose_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA5QAJgMAFgPQADgOAAgQQAAgOgDgPQgFgOgJgNIAKAAQAJAMAFAOQAFAPAAAQQAAAQgFAPQgFAOgJALg");
	this.shape.setTransform(103.5,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AADAqIAAgIIARAAIAAgvQAAgTgRAAIgFACIgEACQgFADgBACIgBACIgGA/IgLAAIAGg+IAAgCIgBgFIgCgJIgCgDIALAAIADAIIAAAAIAIgGIAHgCIAHgCQAMABAGAGQAGAIAAAMIAAA4g");
	this.shape_1.setTransform(97.6,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAbIAAg1IAJAAIAAAqIgHALg");
	this.shape_2.setTransform(92.4,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGApIAAg3IABgHQABgEABgBQADgEACgBIABAAIgsAAIAAgJIA7AAIAAAIQgNADAAAPIAAA3g");
	this.shape_3.setTransform(87.7,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiAiIAZgEIgThIIALAAIAJAlIAIAhQASgHADgbIADgkIAKAAIgDAkIgCANIgEAKIgFAHIgHAHQgFADgFACQgGACgHABIgYAEg");
	this.shape_4.setTransform(80.4,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiAiIAZgEIgThIIALAAIAJAlIAIAhQASgHACgbIAEgkIAKAAIgDAkIgCANIgEAKIgFAHIgHAHQgFADgGACQgEACgIABIgYAEg");
	this.shape_5.setTransform(69,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_6.setTransform(62,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAqIAAg5QAAgQgWgBIgWABIgFAAIAAgIIAbgCQALAAAJAEQAHAEAEAIQABAFAAAFIAAA5gAgdAqIAAgzIALAAIAAAzg");
	this.shape_7.setTransform(51.5,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghApIgHhRIALAAIAEAtIAIgDQAKgCABgOIADgaIAJAAIgCAVIgBAIIgCAHIgDAGIgGAFIgIAEIgJACIACAUIATAAQAMAAAIgKQAJgJACgSIADgkIALAAIgEAkQAAAHgCAHIgEAKIgGAIQgDAEgFACQgEAEgGABQgGACgHAAg");
	this.shape_8.setTransform(42.9,11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATApIgTgiIgKgNIgDABQgGAFAAALIAAAeIgLAAIAAgbQAAgNAEgGIAFgGIAHgDIgQgaIAMAAIASAgIAKAPQAEgBABgDIADgEIABgJIAAgeIAKAAIAAAaIAAAJIgCAIQgDAIgJAEIAQAag");
	this.shape_9.setTransform(34.5,11.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAxIAFggIALgoIgqAAIAAgZIALAAIAAAQIAqAAIAAAJIgLAoIgHAgg");
	this.shape_10.setTransform(27.7,11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEApIAAhRIAJAAIAABRg");
	this.shape_11.setTransform(23,11.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghApIAAgJIAFABQAJAAAAgLIAAg1IgJABIAAgJQASgCAMAAQAMAAAHADQAJAFACAIQACAEAAAGIAAA4IgLAAIAAg4QAAgRgWAAIgKAAIAAA1QABAKgFAGQgEAFgKAAIgGgBg");
	this.shape_12.setTransform(17.1,11.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAFA5QgJgLgFgOQgFgPAAgQQAAgQAFgPQAFgPAJgLIAKAAQgJANgFAOQgDAPAAAOQAAAQADAOQAFAPAJAMg");
	this.shape_13.setTransform(11.4,12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AoYBtIAAjYIQxAAIAADYg");
	this.shape_14.setTransform(55.4,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,109.1,22.5);


(lib.monster1_click_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AbRAAQAALTn/H/Qn/H/rTAAQrSAAn/n/Qn/n/AArTQAArSH/n/QH/n/LSAAQLTAAH/H/QH/H/AALSg");
	this.shape.setTransform(174.5,174.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3AAF2A").s().p("AzRTSQn/n/AArTQAArSH/n/QH/n/LSAAQLTAAH/H/QH/H/AALSQAALTn/H/Qn/H/rTAAQrSAAn/n/g");
	this.shape_1.setTransform(174.5,174.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.monsteEye_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27));

	// eye1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AkYBhQAfB1BSgHQBRgGB0gfQB0ggBUglQBTgmgfh0Qgfh0hhgcQhggdhsA6QhtA5hNAuQhMAvAgBzg");
	this.shape.setTransform(236.9,91.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkYBhQgghzBMgvQBNguBtg5QBsg6BgAdQBhAcAfB0QAfB0hTAmQhUAlh0AgQh0AfhRAGIgJABQhLAAgdhvg");
	this.shape_1.setTransform(236.9,91.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AkYBfQggh0BJg3QBIg3BxgxQBwgyBgAdQBhAdAfB1QAfBzhRAtQhRAsh0AhQhzAhhUgCQhVgCgfh0g");
	this.shape_2.setTransform(236.9,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AikDVQhVgCgfh0Qggh0BJg3QBIg3BxgxQBwgyBgAdQBhAdAfB1QAfBzhRAtQhRAsh0AhQhsAfhRAAIgKAAg");
	this.shape_3.setTransform(236.9,92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AkYBaQgghzBFhAQBFhAB0gpQBzgqBhAeQBhAeAfB0QAfB0hOAzQhPAzhzAjQhzAihXgKQhYgKgfh1g");
	this.shape_4.setTransform(236.9,92.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AihDZQhYgKgfh1QgghzBFhAQBFhAB0gpQBzgqBhAeQBhAeAfB0QAfB0hOAzQhPAzhzAjQhYAahJAAQgVAAgUgCg");
	this.shape_5.setTransform(236.9,92.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AkYBWQggh0BBhIQBBhJB4ghQB2giBhAfQBiAeAfB1QAfBzhMA6QhMA6hzAkQhyAkhagTQhbgSgfh0g");
	this.shape_6.setTransform(236.9,92.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AieDcQhbgSgfh0Qggh0BBhIQBBhJB4ghQB2giBhAfQBiAeAfB1QAfBzhMA6QhMA6hzAkQhKAYhBAAQgiAAgfgHg");
	this.shape_7.setTransform(236.9,92.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("AkYBRQgfhzA9hRQA9hRB7gaQB6gaBiAgQBhAfAgB0QAfB0hKBBQhKBAhyAlQhxAlhegaQhegagfh1g");
	this.shape_8.setTransform(236.8,93.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AibDgQhegagfh1QgfhzA9hRQA9hRB7gaQB6gaBiAgQBhAfAgB0QAfB0hKBBQhKBAhyAlQhCAWg8AAQgqAAgngLg");
	this.shape_9.setTransform(236.8,93.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("AkYBNQgfh0A5hZQA6haB+gSQB+gSBhAgQBiAgAgB1QAfBzhIBIQhHBHhyAnQhwAmhhgiQhhgjgfh0g");
	this.shape_10.setTransform(236.8,93.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiYDkQhhgjgfh0Qgfh0A5hZQA6haB+gSQB+gSBhAgQBiAgAgB1QAfBzhIBIQhHBHhyAnQg7AUg3AAQgxAAgugQg");
	this.shape_11.setTransform(236.8,93.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("AkYBIQgfhzA1hjQA2hiCCgKQCBgKBiAhQBiAhAgB0QAfB0hFBOQhFBOhxAoQhwAohkgqQhkgrgfh1g");
	this.shape_12.setTransform(236.8,94.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiVDoQhkgrgfh1QgfhzA1hjQA2hiCCgKQCBgKBiAhQBiAhAgB0QAfB0hFBOQhFBOhxAoQg3AUgzAAQg2AAg0gWg");
	this.shape_13.setTransform(236.8,94.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("AkYBFQAfB0BnAzQBnAzBvgpQBxgqBChVQBDhVgfhzQggh1highQhjgiiEACQiFACgyBrQgyBrAfB0g");
	this.shape_14.setTransform(236.8,94.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiSDsQhngzgfh0Qgfh0AyhrQAyhrCFgCQCEgCBjAiQBiAhAgB1QAfBzhDBVQhCBVhxAqQgyASgwAAQg7AAg5gcg");
	this.shape_15.setTransform(236.8,94.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},12).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(206.4,69.5,61.1,44.6);


(lib.letsClick_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.finger();
	this.instance.parent = this;
	this.instance.setTransform(165,18,0.305,0.305);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAfBGIgRgcQgMgSgVgbQgDAFgCAHIgBANQABAQACALQADAMADAJIgqAAIgEgRIAAgRQAAgRAFgRQAGgPAPgMIgSgVIgTgSIAAgCIAugDIASAUIAbAlQADgDACgFQACgEAAgHQgBgIgDgJQgCgKgEgIIAqgDIAEANIAAAPQAAAIgCAJQgDAJgGAJQgGAHgLAHIAQAVIAPAWIAKATg");
	this.shape.setTransform(166.9,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpBHIAGgnIAOgBIATAAIALAAIAAggIgBgNQgBgFgEgCQgEgDgIgCIgPgDIgLgDIAGgmIAJACIARADQAQADALAFQAKAGAEALQAEALAAAUIAAApIgGAmIgpAAIgNAAIgOABIgJAAg");
	this.shape_1.setTransform(153.5,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAmQAIgLAEgJQAEgJAAgHQAAgEgDgCQgEgCgHgCIgIgBIgIgDIAHgmIAGACIAKACQAOACAJAFQAJAEAEAJQAEAHAAALQgBANgGAPQgGAQgLAPg");
	this.shape_2.setTransform(144.4,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUBGIAAhJQABgOgEgGQgEgFgMAAIgaAAIgRgBIgKgBIAGgnIAOABIAbABIAMAAQAVgBAKAFQAKAFADALQADALgBAUIAABWg");
	this.shape_3.setTransform(128.9,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAEBGIAAhIQAAgIgCgFQgBgFgDgDQgFgCgIgCIgNgDIgIgCIAHglIAIABIAQADQAPADAKAFQAJAGAEAMQAEAMgBAUIAABNg");
	this.shape_4.setTransform(118.1,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgtAfIALAAIANgBIAMAAIAZAAIgIgIIgLgOIgUgXIgOgQIgOgTIgOgQIAygDIAPAXIASAaQAFgCACgFQACgFgBgGIgBgJIgCgKIgEgJIAqgDIACAJIABAKQAAALgDAJQgCAJgHAIQgHAIgNAFIAUAYQAIAKAGADIgJAgIhFAAIgQAAIgOAAIgMABg");
	this.shape_5.setTransform(106.6,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAdBGIAAhFQAAgLgCgHQgBgGgEgDQgEgCgIAAIgpAAIgSgBIgMgBIAGgnIAPABIAbABIAdAAQAUgBAKAGQAKAGADAMQADANAAAUIAABRgAg3BGIAAhCIAhAAIAABCg");
	this.shape_6.setTransform(92.5,18.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgcA2QAOgDAMgHQAKgGAHgJQAHgJAAgLQAAgIgEgCQgEgCgIAAIg5AAIAAguIAAgQIgBgQQgBgHgCgDIAigFIABAIIACAPIAAASIAAANIAmAAQALgBAIADQAIADAEAIQAFAIAAAQQAAAVgIASQgIASgOAOQgNANgPAIQgRAIgRACg");
	this.shape_7.setTransform(73.5,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAdBGIAAhFQAAgLgCgHQgBgGgEgDQgEgCgIAAIgpAAIgSgBIgMgBIAGgnIAPABIAbABIAdAAQAUgBAKAGQAKAGADAMQADANAAAUIAABRgAg3BGIAAhCIAhAAIAABCg");
	this.shape_8.setTransform(60.1,18.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag5BeIAAh0IAhAAIAAB0gAgGAAQARgCAJgKQAKgKAAgQQAAgJgEgCQgFgDgKgBIgpAAIgTAAQgJAAgEgCIAGgmIAKABIAOAAIANAAIAkAAQARAAAKAFQALAEAEAJQAEAKAAAQQAAAcgLAUQgKATgRAMQgSAMgTAFg");
	this.shape_9.setTransform(45.5,21.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcA2QAOgDAMgHQAKgGAHgJQAHgJAAgLQAAgIgEgCQgEgCgIAAIg5AAIAAguIAAgQIgBgQQgBgHgCgDIAigFIABAIIACAPIAAASIAAANIAmAAQALgBAIADQAIADAEAIQAFAIAAAQQAAAVgIASQgIASgOAOQgNANgPAIQgRAIgRACg");
	this.shape_10.setTransform(31.4,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRAmQAIgLAEgJQAEgJAAgHQAAgEgDgCQgEgCgHgCIgIgBIgIgDIAHgmIAGACIAKACQAOACAJAFQAJAEAEAJQAEAHAAALQgBANgGAPQgGAQgLAPg");
	this.shape_11.setTransform(21.4,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag5BeIAAh0IAhAAIAAB0gAgGAAQARgCAJgKQAKgKAAgQQAAgJgEgCQgFgDgKgBIgpAAIgTAAQgJAAgEgCIAGgmIAKABIAOAAIANAAIAkAAQARAAAKAFQALAEAEAJQAEAKAAAQQAAAcgLAUQgKATgRAMQgSAMgTAFg");
	this.shape_12.setTransform(10.5,21.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("As5jDIZzAAQA+AAAsAsQAsAsAAA+IAABbQAAA+gsAsQgsAsg+AAI5zAAQg+AAgsgsQgsgsAAg+IAAhbQAAg+AsgsQAsgsA+AAg");
	this.shape_13.setTransform(89.7,18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("As5DEQg+AAgsgsQgsgsAAg+IAAhbQAAg+AsgsQAsgsA+AAIZzAAQA+AAAsAsQAsAsAAA+IAABbQAAA+gsAsQgsAsg+AAg");
	this.shape_14.setTransform(89.7,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-2.2,213,59.3);


(lib.hpBar_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF5B5B").s().p("A4eDkQhTABg6g7Qg7g7AAhTIAAg3QAAhTA7g7QA6g7BTABMAw9AAAQBTgBA6A7QA7A7AABTIAAA3QAABTg7A7Qg6A7hTgBg");
	this.shape.setTransform(176,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hpBar_mc, new cjs.Rectangle(-0.7,-0.8,353.3,45.7), null);


(lib.explainCoinDrop_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAqQgCgCAAgFQAAgEACgCQADgEADAAQAFAAACAEQADACAAAEQAAAFgDACQgCADgFAAQgDAAgDgDgAgFAPIgDgFIAAgFQAAgEADgDIAGgHIAIgFQADgDAAgEQAAgFgEgDQgDgCgGAAQgHAAgEABIgJAFIgEgNIAGgCIAIgCQAFgCAGAAQAMAAAHAGQAHAFAAALQAAAGgEAEIgHAIIgHAGQgEACAAADIABAEIACAEg");
	this.shape.setTransform(9.1,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAfIAHgBIAMAAIARAAIAAgLIAAgJQAAgKgCgJQgBgIgFgGQgEgGgJAAQgHAAgDADQgGADgCAEQgEAEgBAFIgCAJIgDANIgEAQIgCAQIgNAAIAEgSIACgRIADgNQACgMgFgFQgEgGgHgCIACgPQAKACAGAGQAFAGACAJQABgFAEgFQAEgGAGgDQAFgEAJAAQANABAGAGQAIAIACALQADAMAAAPIAAAVIgBADIgBAHIgBAEIgfAAIgHAAIgGAAIgEAAg");
	this.shape_1.setTransform(-46.1,-27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAdIAIAAIANAAIAeAAIABgJIACgKIAAgKQAAgLgCgFQgCgHgFgCQgFgDgIAAIgOAAIgMAAIgGgBIADgOIAHAAIANAAIAMAAQANAAAHAEQAHAFACAJQADAJgBAPQAAAMgBAMIgEAVIgrAAIgIAAIgHAAIgGAAg");
	this.shape_2.setTransform(-55.4,-27.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgIAGQgJAFgKACg");
	this.shape_3.setTransform(-63.3,-29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAfIAHgBIAMAAIARAAIAAgLIAAgJQAAgKgCgJQgBgIgFgGQgEgGgJAAQgHAAgDADQgGADgCAEQgEAEgBAFIgCAJIgDANIgEAQIgCAQIgNAAIAEgSIACgRIADgNQACgMgFgFQgEgGgHgCIACgPQAKACAGAGQAFAGACAJQABgFAEgFQAEgGAGgDQAFgEAJAAQANABAGAGQAIAIACALQADAMAAAPIAAAVIgBADIgBAHIgBAEIgfAAIgHAAIgGAAIgEAAg");
	this.shape_4.setTransform(-75.4,-27.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAfIAFgBIAJAAIAKAAIAiAAIAAgdQgBgIgCgFQgCgGgFgDQgGgDgJgCIgKgBIgIgBIgDAHIgBAGQgBAEAEADQAEADAIABIgDANQgNgCgFgGQgGgEAAgJQAAgFADgGIADgLIAFgKIAIACIAPACQAMACAJAEQAIADAEAIQAEAIAAAOIAAAgIgBADIgBAGIgBAEIgwAAIgIAAIgIAAIgGABg");
	this.shape_5.setTransform(-84.9,-27.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIgmAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAEADACAFQACAFAAAHQAAANgFALQgFALgHAJQgJAIgHAGQgKAFgKACg");
	this.shape_6.setTransform(-93.3,-29.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_7.setTransform(-101,-27.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnAeIADgBIAEAAIAHAAIACAAIAAgOIgBgQIgBgQIgBgLIAAAAIgEAAIgFAAIgEgBIAEgOIAKAAIAOAAIAaAAQAMABAFACQAGADADAGQACAIAAAOIAAA1IgNAAIAAgxIAAgNQgBgFgFgCQgDgDgIAAIgbAAIABAJIABAMIAAAOIABANIAAAJIgDAPIgMAAIgJAAIgHAAg");
	this.shape_8.setTransform(-110.1,-27.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAdIAIAAIANAAIAeAAIABgJIACgLIAAgJQAAgKgCgHQgCgGgFgDQgFgCgIAAIgOAAIgMAAIgGgBIADgOIAHAAIANAAIAMAAQANAAAHAFQAHAEACAJQADAJgBAPQAAAMgBAMIgEAUIgrAAIgIAAIgHAAIgGABg");
	this.shape_9.setTransform(-3.8,-48.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFAeIAHAAIAMAAIARAAIAAgKIAAgKQAAgKgCgIQgBgJgEgGQgFgFgKgBQgGAAgDADQgFADgEAEQgCAFgCAEIgDAJIgCANIgDAQIgEAQIgMAAIADgRIAEgSIACgNQABgMgDgGQgFgFgIgCIAEgOQAJABAFAGQAGAFABAKQACgFAEgFQAEgGAHgDQAFgEAIABQANAAAHAGQAGAIADAMQACALABAQIAAAUIgBADIgBAGIgBAFIggAAIgGAAIgFAAIgGABg");
	this.shape_10.setTransform(-13,-48.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAGAsIAAgxIAAgLQgBgEgDgDQgDgCgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_11.setTransform(-20.7,-49);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgmAeIACgBIAEAAIAGAAIADAAIAAgOIgBgQIgBgQIgBgLIgBAAIgDAAIgFAAIgDgBIACgOIALAAIAOAAIAaAAQALAAAHADQAFACADAIQACAHAAANIAAA1IgMAAIAAgwIgBgNQgCgFgEgDQgDgCgHAAIgbAAIAAAJIABAMIABAOIAAANIAAAJIgCAOIgNAAIgJAAIgHABg");
	this.shape_12.setTransform(-28.1,-48.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_13.setTransform(-40.9,-48.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAeIAGAAIAMAAIARAAIAAgKIAAgKQAAgKgBgIQgCgJgFgGQgEgFgKgBQgGAAgEADQgEADgEAEQgDAFgBAEIgCAJIgEANIgCAQIgDAQIgNAAIAEgRIADgSIACgNQABgMgDgGQgFgFgHgCIADgOQAJABAGAGQAFAFABAKQACgFAEgFQAEgGAGgDQAGgEAJABQAMAAAHAGQAGAIADAMQADALgBAQIAAAUIAAADIgBAGIgBAFIggAAIgGAAIgGAAIgFABg");
	this.shape_14.setTransform(-50.9,-48.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbAPIgGgdIgHgcIAPgBIAHAhIAFAnIAGAAIAHgBQANgDAIgJQAHgIAAgNQAAgMgGgGQgEgGgKAAIgIABIgGACIADgPIAGgCIAIgBQAKAAAHAFQAGAFADAIQADAIAAAKQABAMgEAJQgEAJgGAGQgGAGgHADQgHADgGACIgNACIgLABIgEgeg");
	this.shape_15.setTransform(-60.4,-48.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgJIgCgOQgBgGgEgCQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMAAAFAEQAGADABAIQACAHAAALIAAAaIAAAEIAAAFIgBAEIAMAAIgDAOIgzAAIgIAAIgHAAIgGABg");
	this.shape_16.setTransform(-69.1,-48.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgjAgIALgCIALgCIAKgCIgFgQIgJgTIgKgUIgJgQIARgBIAHAOIAIASIAGASIAGASQAIgEAFgIQAFgIAAgOIgBgKIgCgMIgEgLIAQgCIADANIABASQAAAMgCAJQgDAKgHAIQgHAIgNAFQgGADgHACIgQAEIgQADg");
	this.shape_17.setTransform(-78,-48.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAGAsIAAgxIAAgLQgBgEgDgDQgDgCgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_18.setTransform(-85.2,-49);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgnAeIADgBIAEAAIAHAAIACAAIAAgOIgBgQIgBgQIgBgLIAAAAIgEAAIgFAAIgEgBIAEgOIAKAAIAOAAIAaAAQAMAAAFADQAGACADAIQACAHAAANIAAA1IgNAAIAAgwIAAgNQgBgFgFgDQgDgCgIAAIgbAAIABAJIABAMIAAAOIABANIAAAJIgDAOIgMAAIgJAAIgHABg");
	this.shape_19.setTransform(-92.6,-48.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgeAcIgDgUIgEgTIgEgTIgDgMIAPgCIABAHIADAPIAEAXQAIgBAEgCQAEgDABgFQACgEAAgFIgCgLIgDgMIAOgCIADAKIABANQAAAHgCAHQgDAGgGAFQgGAFgOACIABAFIABAHIABAHIAHgBIAKgCQAKgCAHgEQAHgEAEgJQAEgHAAgNIgCgQIgEgOIAPgBIADAMIABAQQAAAOgEAKQgEAKgGAGQgHAHgJADQgIAEgJACIgOACIgLABIgDgQg");
	this.shape_20.setTransform(-106,-48.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgTAeIAHAAIAMAAIALAAIAAgjIgBgLQgBgEgEgCIgJgEIgIgCIgGgCIADgOIAFACIAIACQAIABAGAEQAGADACAGQADAHAAALIAAAmIgDAOIgVAAIgIAAIgIAAIgFABg");
	this.shape_21.setTransform(-114.5,-49);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAGAsIAAgxIAAgLQgBgEgDgDQgDgCgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_22.setTransform(-120.2,-49);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghAfIAGgBIAJAAIAJAAIAiAAIAAgdQAAgIgDgFQgCgGgFgDQgGgDgJgCIgKgBIgHgBIgEAHIgBAGQAAAEADADQADADAJABIgDANQgNgCgFgGQgGgEAAgJQAAgFACgGIAFgLIAEgKIAIACIAPACQAMACAJAEQAIADAEAIQAEAIAAAOIAAAgIgBADIAAAGIgBAEIgxAAIgJAAIgIAAIgFABg");
	this.shape_23.setTransform(-126.9,-49);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRAuQALgDAIgHQAIgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIglAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAEADACAFQACAFAAAHQAAANgFALQgEALgJAJQgHAIgJAGQgJAFgKACg");
	this.shape_24.setTransform(-135.3,-50.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAXIAGgNQADgHAAgDQAAgFgDgBIgGgDIgGgCIgFgCIAEgOIADACIAGABQAKACAFAFQAEAEAAAJQAAAGgDAJQgEAIgFAJg");
	this.shape_25.setTransform(-141,-50.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgfAsIAAg5IAAgJIABgGIgHAAIgFgBIADgOIAJABIANAAIAgAAQALAAAGACQAGADADAIQACAHAAAOIAAAmIgBADIgBAGIgBAFgAgTAeIAxAAIAAgiIgBgNQgBgGgDgCQgEgDgHAAIghAAg");
	this.shape_26.setTransform(-148.2,-48.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AggAUIAGAAIAIgBIAJAAIAYAAIABgJIAAgKQAAgHgCgEQgBgEgEgBQgEgCgGAAIgNAAIgMAAIgHgBIAEgZIAIABIANAAIALAAQAOAAAHAEQAIAEADAJQACAJAAAQIgBAWIgEAXIgtAAIgJAAIgIAAIgGABg");
	this.shape_27.setTransform(-1,-70.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAAVIAGgBIAJAAIAIAAIAAgMQABgIgBgFQgBgGgEgEQgCgEgIAAQgGABgDADQgDAEgCAFIgEAJIgCALIgDAQIgDAPIgVAAIACgOIACgNIADgNIABgHQAAgIgDgEQgDgDgHgBIAEgaQALABAHAFQAGAGACAJIAFgJQAEgFAFgEQAGgDAIAAQAMAAAHAHQAGAHADAMQADAMAAANIAAANIgBAEIgBAIIgBAIIgBAFIgfAAIgJAAIgFAAg");
	this.shape_28.setTransform(-10.4,-70.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AACAtIAAgtIgBgJQgBgDgBgCQgDgCgFgBIgIgBIgFgCIAEgYIAFABIAKACQAKABAGAEQAGAEACAHQACAIAAANIAAAxg");
	this.shape_29.setTransform(-18.6,-70.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmAUIADgBIAHAAIABAAIAAgJIAAgKIgBgKIgBgIIgEgBIgDAAIgDgBIAEgYIAHAAIAKABIAMgBIAVAAQANAAAGAEQAGADACAHQACAHAAANIAAA2IgVAAIAAguQAAgJgDgEQgCgDgIAAIgSAAIAAAIIABAKIAAAKIAAAJIgCAZIgSAAIgGAAIgGAAIgEABg");
	this.shape_30.setTransform(-26.5,-70.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAAAVIAGgBIAJAAIAJAAIAAgMQAAgIgBgFQgBgGgEgEQgCgEgIAAQgGABgDADQgEAEgCAFIgDAJIgCALIgEAQIgCAPIgVAAIACgOIACgNIACgNIACgHQABgIgEgEQgDgDgHgBIAEgaQALABAHAFQAGAGACAJIAFgJQAEgFAFgEQAGgDAIAAQAMAAAHAHQAHAHADAMQACAMAAANIAAANIgBAEIgBAIIgBAIIAAAFIggAAIgJAAIgFAAg");
	this.shape_31.setTransform(-39.9,-70.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAPIgGgeIgHgcIAZgBIAGAeIAEAhIAFAAIAFgBQAJgCAFgGQAFgFAAgIQAAgIgEgEQgEgEgHAAIgGAAIgDABIADgZIAGgBIAGgBQAJABAGADQAGADADAFQAEAGABAGIABANQAAALgDAJQgEAJgGAGQgGAFgHAEQgGADgHACIgQADIgMABIgFgeg");
	this.shape_32.setTransform(-49.7,-70.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgjAUIAIAAIAJgBIAIAAIAUAAIAAgIIAAgIIAAgHIgCgIQgBgDgDgCIgHgBIgPAAIgLAAIgHgBIAEgZIAIABIAPAAIANAAQALAAAGADQAFADACAIQACAHAAANIAAAKIAAAEIAAAFIAAAGIgBADIALAAIgEAZIg0AAIgIAAIgJAAIgGABg");
	this.shape_33.setTransform(-58.6,-70.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AglAVIAOAAIAOgCIgFgNIgIgRIgKgTQgFgKgFgGIAegBIAIARIAHAVIAHAXQAFgCACgGQADgGAAgJQAAgGgCgJQgBgKgFgMIAbgBIADAMIABARIgBAPQgBAGgDAHQgDAIgGAHQgGAGgKAFQgGAEgIACIgTAEIgVACg");
	this.shape_34.setTransform(-68,-70.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AACAtIAAgtIgBgJQgBgDgBgCQgDgCgFgBIgIgBIgFgCIAEgYIAFABIAKACQAKABAGAEQAGAEACAHQACAIAAANIAAAxg");
	this.shape_35.setTransform(-75.8,-70.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgmAUIADgBIAHAAIABAAIAAgJIAAgKIgBgKIgBgIIgEgBIgDAAIgDgBIAEgYIAHAAIAKABIAMgBIAVAAQANAAAGAEQAGADACAHQACAHAAANIAAA2IgVAAIAAguQAAgJgDgEQgCgDgIAAIgSAAIAAAIIABAKIAAAKIAAAJIgCAZIgSAAIgGAAIgGAAIgEABg");
	this.shape_36.setTransform(-83.6,-70.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAjQAJgCAIgFQAGgEAEgFQAFgHAAgHQAAgFgCAAQgDgCgFABIgkAAIAAgeIAAgKIgBgKIgCgHIAWgDIABAGIAAAJIABALIAAAIIAYAAQAGAAAGACQAFACADAFQACAFAAAKQAAANgEAMQgGALgIAJQgJAJgJAEQgKAFgLACg");
	this.shape_37.setTransform(-95.9,-72.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAAAVIAGgBIAJAAIAIAAIAAgMQABgIgBgFQgBgGgEgEQgCgEgIAAQgGABgDADQgDAEgCAFIgEAJIgCALIgDAQIgDAPIgVAAIACgOIACgNIADgNIABgHQAAgIgDgEQgDgDgHgBIAEgaQALABAHAFQAGAGACAJIAFgJQAEgFAFgEQAGgDAIAAQAMAAAHAHQAGAHADAMQADAMAAANIAAANIgBAEIgBAIIgBAIIgBAFIgfAAIgJAAIgFAAg");
	this.shape_38.setTransform(-104.9,-70.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgjAVIAGgBIAJAAIAIAAIAfAAIAAgSQAAgGgCgDQgBgEgEgCQgEgCgIgBIgIgCIgHgBIgBACIgBACIABADIAEACIAIACIgEAVQgPgBgGgGQgHgGAAgJIACgMIAFgLIAFgMIAKABIAPACQAKABAHADQAIACAEAEQAFAEADAHQACAHAAAMIAAAWIgBAFIgBAHIgBAHIAAAFIg0AAIgJAAIgJAAIgGAAg");
	this.shape_39.setTransform(-114.8,-70.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgSAjQAJgCAIgFQAHgEADgFQAFgHAAgHQAAgFgDAAQgCgCgFABIglAAIAAgeIAAgKIAAgKIgCgHIAWgDIABAGIABAJIAAALIAAAIIAYAAQAGAAAGACQAFACADAFQADAFgBAKQAAANgEAMQgGALgIAJQgJAJgJAEQgLAFgKACg");
	this.shape_40.setTransform(-123.6,-72.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcAUIAHAAIAIgBIAIAAIAQAAIgFgFIgIgJIgMgOIgJgLIgJgMIgJgKIAggCIAJAPIAMARQADgCABgDIABgHIAAgGIgCgGIgDgGIAbgCIACAGIAAAHQAAAGgBAGQgCAGgFAFQgEAFgIADIAMAPIAJAJIgFAUIgsAAIgKAAIgKAAIgHABg");
	this.shape_41.setTransform(-132.1,-70.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgnAUIAFgBIAGAAIABAAIAAgJIAAgKIgBgKIgBgIIgEgBIgDAAIgDgBIAEgYIAHAAIAKABIAMgBIAUAAQAOAAAGAEQAGADACAHQACAHAAANIAAA2IgWAAIAAguQABgJgDgEQgCgDgIAAIgSAAIABAIIAAAKIAAAKIAAAJIgCAZIgSAAIgGAAIgGAAIgEABg");
	this.shape_42.setTransform(-141.4,-70.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoAVIAAgKIBRAAIAAAKgAgogKIAAgKIBRAAIAAAKg");
	this.shape_43.setTransform(-154.2,-70.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#D5D555").ss(2,1,1).p("Ar6nJIX1AAQCWAAAACWIAAG1QAACWiWAAIhOAAIBeCyIkMiyIz5AAQiWAAAAiWIAAm1QAAiWCWAAg");
	this.shape_44.setTransform(-76.5,-40.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FFFF98","#FFFF66","#FFFF98"],[0,0.471,1],-91.2,0,91.3,0).s().p("AH/EYIz5AAQiVAAAAiWIAAm1QAAiWCVAAIX1AAQCVAAAACWIAAG1QAACWiVAAIhOAAIBeCxg");
	this.shape_45.setTransform(-76.5,-40.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AheBiIAAjDIC8AAIAADDg");
	this.shape_46.setTransform(9.5,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_46}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,21.6);


(lib.explainClickPower_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAqQgCgCAAgFQAAgEACgCQADgEADAAQAFAAACAEQADACAAAEQAAAFgDACQgCADgFAAQgDAAgDgDgAgFAPIgDgFIAAgFQAAgEADgDIAGgHIAIgFQADgDAAgEQAAgFgEgDQgDgCgGAAQgHAAgEABIgJAFIgEgNIAGgCIAIgCQAFgCAGAAQAMAAAHAGQAHAFAAALQAAAGgEAEIgHAIIgHAGQgEACAAADIABAEIACAEg");
	this.shape.setTransform(9.1,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAgIAMgCIALgCIAKgCIgGgQIgIgTIgKgUIgJgQIARgBIAHAOIAIASIAHASIAFASQAJgEAEgIQAFgIAAgOIgBgKIgCgMIgEgLIAQgCIADANIABASQAAAMgCAJQgDAKgHAIQgHAIgNAFQgGADgHACIgQAEIgQADg");
	this.shape_1.setTransform(-15.7,-27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIgmAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAEADACAFQACAFAAAHQAAANgFALQgFALgHAJQgJAIgHAGQgKAFgKACg");
	this.shape_2.setTransform(-24,-30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_3.setTransform(-35.6,-28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAeIAHgBIAMAAIARAAIAAgKIAAgJQAAgKgCgJQgBgJgFgFQgEgGgJAAQgHAAgDADQgGADgCAFQgDAEgCAFIgDAJIgCALIgEARIgDAQIgMAAIADgSIADgRIADgNQACgMgFgFQgEgGgIgBIADgQQAKACAFAGQAGAFACAKQABgFAEgFQAEgFAHgEQAFgDAIgBQANAAAGAIQAIAGACAMQADANAAAOIAAAVIgBAEIgBAFIgBAFIgfAAIgHAAIgGAAIgEAAg");
	this.shape_4.setTransform(-45.6,-28.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAfIAFgBIAJAAIAKAAIAhAAIAAgdQAAgIgCgFQgCgGgFgDQgGgDgJgCIgKgBIgIgBIgDAHIgBAGQgBAEAEADQAEADAIABIgDANQgNgCgGgGQgFgEAAgJQABgFACgGIADgLIAFgKIAIACIAPACQAMACAJAEQAIADAEAIQAEAIAAAOIAAAgIgBADIgBAGIgBAEIgwAAIgIAAIgIAAIgGABg");
	this.shape_5.setTransform(-55.1,-28.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgCgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgHAGQgKAFgKACg");
	this.shape_6.setTransform(-63.5,-30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_7.setTransform(-71.2,-28.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnAeIADAAIADgBIAIAAIACAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFgBIgEAAIAEgOIAKABIAOAAIAaAAQAMgBAFADQAHADACAGQACAIAAANIAAA1IgNAAIAAgwIgBgNQAAgFgFgCQgDgDgIAAIgbAAIABAJIABANIAAANIABANIAAAJIgDAOIgMAAIgJAAIgHABg");
	this.shape_8.setTransform(-80.3,-28.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnAeIADAAIADgBIAIAAIACAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFgBIgEAAIAEgOIAKABIAPAAIAZAAQAMgBAFADQAHADACAGQACAIAAANIAAA1IgNAAIAAgwIgBgNQgBgFgDgCQgEgDgIAAIgbAAIABAJIABANIAAANIABANIAAAJIgDAOIgMAAIgJAAIgHABg");
	this.shape_9.setTransform(-93.7,-28.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgNIAEABIAHABQAIACAFADQAGAEACAHQACAGAAAMIAAAzg");
	this.shape_10.setTransform(-101.4,-28.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgEgDgHAAIgPAAIgLAAIgHgBIAEgOIAIABIANAAIAJAAQAMAAAGACQAGADACAHQACAHAAAOIAAA1g");
	this.shape_11.setTransform(-107.6,-28.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAXIAHgOQADgGAAgEQAAgEgCgCIgIgDIgFgBIgEgCIACgOIAFABIAFACQAKACAFAEQAFAFAAAJQgBAHgDAHQgEAJgGAJg");
	this.shape_12.setTransform(-113.2,-30);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKAsIgBgLIAAgOIAAgQIAAgNIAAgJIABgFIABgEIgcAAIgMAAIgGgBIADgOIAIABIAOAAIAuAAIgDAOIgGAAQgDAAgCADQgBAEgBAIIABATIAAAUIABASg");
	this.shape_13.setTransform(-119,-28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_14.setTransform(-17.1,-49.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAcAsIAAgvIgBgPQgBgFgDgCQgEgCgIgBIgcAAIAABIIgMAAIAAgxIAAgPIABgIIgEAAIgFAAIgDgBIADgOIAIABIAOAAIAcAAQAMAAAFADQAHADACAHQACAHAAANIAAA1g");
	this.shape_15.setTransform(-26.9,-49.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGAXIAHgNQADgGAAgFQAAgDgDgCIgHgEIgFgBIgFgCIADgOIAFACIAFABQAKACAFAEQAEAFABAJQgBAGgDAJQgDAIgHAJg");
	this.shape_16.setTransform(-33.8,-51.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFAXIAGgNQADgGAAgFQAAgDgCgCIgHgEIgGgBIgEgCIADgOIADACIAGABQAKACAFAEQAFAFgBAJQAAAGgDAJQgEAIgFAJg");
	this.shape_17.setTransform(-37.9,-51.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfAsIAAg4IAAgJIABgHIgHAAIgFgBIADgOIAJABIANAAIAgAAQALAAAGADQAGACADAIQACAHAAAOIAAAmIgBADIgBAGIgBAFgAgTAeIAxAAIAAgiIgBgOQgBgFgDgCQgEgCgHgBIghAAg");
	this.shape_18.setTransform(-45,-49.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAcIgDgTIgEgUIgEgTIgDgMIAPgCIABAIIADAOIAEAXQAIgBAEgCQAEgEABgDQACgFAAgFIgCgMIgDgLIAOgCIADAKIABAMQAAAIgCAHQgDAGgGAEQgGAGgOACIABAFIABAHIABAHIAHgBIAKgCQAKgCAHgEQAHgFAEgHQAEgJAAgMIgCgQIgEgOIAPgBIADALIABARQAAAPgEAJQgEAKgGAHQgHAGgJAEQgIADgJACIgOADIgLABIgDgRg");
	this.shape_19.setTransform(-58.5,-49.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfAdIAIAAIANAAIAeAAIABgJIACgLIAAgJQAAgLgCgGQgCgGgFgDQgFgCgIAAIgOAAIgMAAIgGgBIADgOIAHAAIANAAIAMAAQANAAAHAFQAHAEACAJQADAJgBAPQAAAMgBAMIgEAVIgrAAIgIAAIgHAAIgGAAg");
	this.shape_20.setTransform(-68.1,-49.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgIAIgIAGQgKAFgKACg");
	this.shape_21.setTransform(-76,-51.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgIAIgIAGQgKAFgKACg");
	this.shape_22.setTransform(-86.8,-51.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAcAsIAAgvIgBgPQgBgFgDgCQgEgCgIgBIgcAAIAABIIgMAAIAAgxIAAgPIABgIIgEAAIgFAAIgDgBIADgOIAIABIAOAAIAcAAQAMAAAFADQAHADACAHQACAHAAANIAAA1g");
	this.shape_23.setTransform(-95.3,-49.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGAXIAHgNQADgGAAgFQAAgDgDgCIgHgEIgFgBIgFgCIADgOIAFACIAFABQAKACAFAEQAEAFABAJQgBAGgDAJQgDAIgHAJg");
	this.shape_24.setTransform(-102.2,-51.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_25.setTransform(-108.3,-49.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_26.setTransform(-116.9,-49.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AggAUIAGAAIAIgBIAJAAIAYAAIABgJIAAgKQAAgHgCgEQgBgEgEgBQgEgCgGAAIgNAAIgMAAIgHgBIAEgZIAIABIANAAIALAAQAOAAAHAEQAIAEADAJQACAJAAAQIgBAWIgEAXIgtAAIgJAAIgIAAIgGABg");
	this.shape_27.setTransform(-12.2,-71.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AACAtIAAgtIgBgJQgBgEgBgBQgDgCgFgBIgIgBIgFgCIAEgYIAFABIAKACQAKACAGADQAGAEACAHQACAIAAANIAAAxg");
	this.shape_28.setTransform(-19.6,-71.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVAsIAAgtQAAgGgBgEQgBgEgDgBQgCgCgGAAIgTAAIAAA+IgVAAIAAgpIAAgNIACgIIgEgBIgEAAIgDAAIAEgZIAJABIASAAIAXAAQANAAAGAEQAGAEACAHQACAJAAAMIAAAzg");
	this.shape_29.setTransform(-27.3,-71.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAiQAJgCAIgDQAHgFADgFQAFgHAAgHQAAgEgDgBQgCgCgFAAIglAAIAAgdIAAgKIAAgKIgCgHIAWgDIABAFIABAKIAAALIAAAIIAYAAQAGAAAGACQAFACADAFQADAFgBAKQAAAOgEALQgGALgIAJQgJAIgJAGQgLAEgKACg");
	this.shape_30.setTransform(-39.4,-72.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAVAsIAAgtQAAgGgBgEQgBgEgDgBQgCgCgGAAIgTAAIAAA+IgVAAIAAgpIAAgNIACgIIgEgBIgEAAIgDAAIAEgZIAJABIASAAIAXAAQANAAAGAEQAGAEACAHQACAJAAAMIAAAzg");
	this.shape_31.setTransform(-48.3,-71.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgKAZIAHgOQADgGAAgEQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgHgDIgFgBIgFgCIAEgYIAEABIAGACQAJABAGADQAGAEACAEQACAFAAAHQAAAIgEAKQgEAKgHAKg");
	this.shape_32.setTransform(-55.7,-72.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcAUIAHAAIAIgBIAIAAIAQAAIgFgFIgIgJIgMgOIgJgLIgJgMIgJgKIAggCIAJAPIAMARQADgCABgDIABgHIAAgGIgCgGIgDgGIAbgCIACAGIAAAHQAAAGgBAGQgCAGgFAFQgEAFgIADIAMAPIAJAJIgFAUIgsAAIgKAAIgKAAIgHABg");
	this.shape_33.setTransform(-62.7,-71.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AASAsIAAgrIAAgMQgBgDgDgCQgCgCgGAAIgZAAIgMAAIgHgBIADgZIAKABIARAAIASAAQANAAAGAEQAHAEACAHQACAJgBAMIAAAzgAgjAsIAAgqIAVAAIAAAqg");
	this.shape_34.setTransform(-71.7,-71.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgoAUIAAgJIBRAAIAAAJgAgogKIAAgJIBRAAIAAAJg");
	this.shape_35.setTransform(-84.4,-71);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgfAeIAIgBIANAAIAeAAIABgJIACgKIAAgKQAAgKgCgGQgCgHgFgCQgFgDgIAAIgOAAIgMAAIgGgBIADgOIAHABIANAAIAMAAQANAAAHADQAHAFACAJQADAJgBAPQAAAMgBAMIgEAUIgrAAIgIAAIgHAAIgGABg");
	this.shape_36.setTransform(-97.2,-71.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEAeIAGgBIAMAAIARAAIAAgKIAAgJQAAgKgBgIQgCgKgEgFQgFgGgKAAQgGAAgEADQgFADgDAFQgDADgBAGIgDAJIgDALIgCARIgEAQIgMAAIADgRIAEgSIACgNQACgMgEgGQgFgFgIgBIAEgQQAJACAFAGQAGAGABAJQACgFAEgFQAEgGAGgDQAFgDAKgBQAMAAAHAIQAGAGADANQADAMgBAOIAAAVIAAAEIgBAFIgBAFIggAAIgGAAIgFAAIgGABg");
	this.shape_37.setTransform(-106.4,-71.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgOIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_38.setTransform(-114.1,-71.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgnAeIADAAIAEgBIAHAAIACAAIAAgOIgBgQIgBgQIgBgLIgBAAIgDAAIgFgBIgEAAIADgOIALABIAOAAIAaAAQAMAAAFACQAGADADAGQACAIAAANIAAA1IgMAAIAAgwIgBgNQgBgFgFgCQgDgDgIAAIgaAAIAAAJIABANIAAANIABANIAAAJIgCAOIgNAAIgJAAIgHABg");
	this.shape_39.setTransform(-121.5,-71.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#D9C482").ss(2,1,1).p("AqFnJIULAAQCWAAAACWIAAG1QAACWiWAAIhOAAIBeCyIkMiyIwPAAQiWAAAAiWIAAm1QAAiWCWAAg");
	this.shape_40.setTransform(-64.8,-40.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#FFEAAE","#FFE699","#FFEBB1"],[0,0.471,1],-79.1,-35.2,75.2,-35.2).s().p("AGKEYIwPAAQiVAAAAiWIAAm1QAAiWCVAAIULAAQCVAAAACWIAAG1QAACWiVAAIhOAAIBeCxg");
	this.shape_41.setTransform(-64.8,-40.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AheBeIAAi8IC8AAIAAC8g");
	this.shape_42.setTransform(9.5,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_42},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,21.6);


(lib.explainAutoClick_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAqQgCgCAAgFQAAgEACgCQADgEADAAQAFAAACAEQADACAAAEQAAAFgDACQgCADgFAAQgDAAgDgDgAgFAPIgDgFIAAgFQAAgEADgDIAGgHIAIgFQADgDAAgEQAAgFgEgDQgDgCgGAAQgHAAgEABIgJAFIgEgNIAGgCIAIgCQAFgCAGAAQAMAAAHAGQAHAFAAALQAAAGgEAEIgHAIIgHAGQgEACAAADIABAEIACAEg");
	this.shape.setTransform(9.1,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAcIgDgUIgEgTIgEgTIgDgMIAPgCIABAHIADAPIAEAXQAIgBAEgCQAEgEABgEQACgEAAgGIgCgKIgDgMIAOgCIADAKIABANQAAAHgCAHQgDAGgGAFQgGAFgOADIABAEIABAHIABAHIAHgBIAKgCQAKgCAHgEQAHgEAEgJQAEgHAAgNIgCgQIgEgOIAPgBIADAMIABAQQAAAOgEAKQgEAKgGAGQgHAHgJADQgIAFgJABIgOACIgLABIgDgQg");
	this.shape_1.setTransform(-24.7,-28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghA7IAAhOIANAAIAABOgAgKAMQAKgCAHgGQAIgEAFgIQAEgJAAgMQABgHgEgEQgDgDgJAAIgVAAIgLAAIgIgBIgFAAIADgOIAJAAIAOAAIAWAAQAKAAAFADQAGACACAGQACAGAAAIQAAARgHAOQgHAMgLAIQgLAJgNADg");
	this.shape_2.setTransform(-34.2,-26.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_3.setTransform(-41.9,-28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgEgDgHAAIgOAAIgMAAIgGgBIADgOIAIABIANAAIAJAAQAMAAAGACQAGADACAHQACAHABAOIAAA1g");
	this.shape_4.setTransform(-48.1,-28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_5.setTransform(-54.4,-28.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnAeIADAAIAEgBIAGAAIADAAIAAgOIgBgQIgBgQIgBgLIgBAAIgDAAIgFgBIgEAAIADgOIALAAIAOAAIAaAAQALAAAGADQAGACADAIQACAHAAANIAAA1IgMAAIAAgwIgBgNQgCgFgEgDQgDgCgHAAIgbAAIAAAJIABAMIAAAOIABANIAAAJIgCAOIgNAAIgJAAIgHABg");
	this.shape_6.setTransform(-61.7,-28.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfAeIAIgBIANAAIAeAAIABgJIACgLIAAgJQAAgLgCgGQgCgGgFgDQgFgCgIAAIgOAAIgMAAIgGgBIADgOIAHAAIANAAIAMAAQANABAHAEQAHAEACAJQADAJgBAPQAAAMgBAMIgEAUIgrAAIgIAAIgHAAIgGABg");
	this.shape_7.setTransform(-74.3,-28.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgIAGQgJAFgKACg");
	this.shape_8.setTransform(-82.2,-29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AggAvIAAgIIALgIIASgOQAHgIAFgIQAGgHAAgIQgBgJgEgFQgFgGgIAAQgIAAgGACQgFADgFAEIgFgLQAFgEAIgDQAIgDAJAAQAKgBAIAFQAGAFADAGQAEAHgBAIQAAAJgDAHQgEAGgGAHIgNANIgMAKIAKAAIANAAIAUAAIAAALg");
	this.shape_9.setTransform(-93,-28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAcIgDgUIgEgTIgEgTIgDgMIAPgCIABAHIADAPIAEAXQAIgBAEgCQAEgEABgEQACgEAAgGIgCgKIgDgMIAOgCIADAKIABANQAAAHgCAHQgDAGgGAFQgGAFgOADIABAEIABAHIABAHIAHgBIAKgCQAKgCAHgEQAHgEAEgJQAEgHAAgNIgCgQIgEgOIAPgBIADAMIABAQQAAAOgEAKQgEAKgGAGQgHAHgJADQgIAFgJABIgOACIgLABIgDgQg");
	this.shape_10.setTransform(-105.9,-28.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAeIAHAAIAMAAIALAAIAAgjIgBgLQgBgEgEgCIgJgEIgIgCIgGgCIADgOIAFACIAIACQAIABAGAEQAGADACAGQADAHAAALIAAAmIgDAOIgVAAIgIAAIgIAAIgFABg");
	this.shape_11.setTransform(-114.4,-28.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGAXIAHgNQADgHAAgDQAAgFgDgCIgHgCIgFgCIgFgCIADgOIAFACIAFABQAKACAFAFQAFAEAAAJQgBAGgDAIQgDAJgHAJg");
	this.shape_12.setTransform(-119.4,-29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_13.setTransform(-124.2,-28.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgnAeIADAAIADgBIAIAAIACAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFgBIgEAAIAEgOIAKAAIAPAAIAZAAQAMAAAFADQAHACACAIQACAHAAANIAAA1IgNAAIAAgwIgBgNQgBgFgDgDQgEgCgIAAIgbAAIABAJIABAMIAAAOIABANIAAAJIgDAOIgMAAIgJAAIgHABg");
	this.shape_14.setTransform(-131.5,-28.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfAeIAIgBIANAAIAeAAIABgJIACgKIAAgKQAAgLgCgFQgCgHgFgCQgFgDgIAAIgOAAIgMAAIgGgBIADgOIAHABIANAAIAMAAQANAAAHADQAHAFACAJQADAJgBAPQAAAMgBAMIgEAUIgrAAIgIAAIgHAAIgGABg");
	this.shape_15.setTransform(-4.8,-49.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAeIAHgBIAMAAIARAAIAAgKIAAgJQAAgKgCgJQgBgJgEgFQgFgGgKAAQgGAAgDADQgGADgCAFQgDAEgCAFIgDAJIgCALIgEARIgDAQIgMAAIADgSIADgRIADgNQACgMgFgFQgEgGgIgBIADgQQAKACAFAGQAGAFACAKQABgFAEgFQAEgFAHgEQAFgDAIgBQANAAAGAIQAIAGACAMQACANABAOIAAAVIgBAEIgBAFIgBAFIggAAIgGAAIgFAAIgGAAg");
	this.shape_16.setTransform(-14,-49.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgNIAEABIAHABQAIACAFADQAGAEACAHQACAGAAAMIAAAzg");
	this.shape_17.setTransform(-21.7,-49.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmAeIACAAIADgBIAHAAIADAAIgBgOIAAgQIgBgQIgBgLIgBAAIgDAAIgFgBIgDAAIACgOIALABIAPAAIAZAAQALgBAHADQAFADADAGQACAIAAANIAAA1IgMAAIAAgwIgCgNQgBgFgDgCQgEgDgHAAIgbAAIAAAJIABANIABANIAAANIAAAJIgCAOIgNAAIgJAAIgHABg");
	this.shape_18.setTransform(-29.1,-49.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAEADACAFQACAFAAAHQgBANgEALQgEALgJAJQgIAIgIAGQgJAFgKACg");
	this.shape_19.setTransform(-41.1,-51.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAcAsIAAgvIgBgPQAAgFgEgCQgEgDgHABIgdAAIAABHIgMAAIAAgyIAAgNIABgIIgEgBIgFAAIgDAAIADgPIAIABIAOAAIAcAAQALAAAHADQAGADACAHQACAIAAAMIAAA1g");
	this.shape_20.setTransform(-49.7,-49.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGAXIAHgOQADgGAAgEQAAgEgDgCIgHgDIgFgBIgFgCIAEgOIADABIAGACQAKACAFAEQAEAFAAAJQAAAHgDAHQgDAJgGAJg");
	this.shape_21.setTransform(-56.5,-51.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_22.setTransform(-62.6,-49.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgNIAEABIAHABQAIACAFADQAGAEACAHQACAGAAAMIAAAzg");
	this.shape_23.setTransform(-69.4,-49.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgmAeIACAAIADgBIAHAAIADAAIgBgOIAAgQIgBgQIgBgLIgBAAIgDAAIgFgBIgDAAIACgOIALABIAPAAIAZAAQALgBAHADQAFADADAGQACAIAAANIAAA1IgMAAIAAgwIgCgNQgBgFgDgCQgEgDgHAAIgbAAIAAAJIABANIABANIAAANIAAAJIgCAOIgNAAIgJAAIgHABg");
	this.shape_24.setTransform(-76.8,-49.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAbAsIgPgVIgaghQgFAHgCAGQgCAIABAIQAAAHABAHIADALIgPAAIgCgKIgBgLQAAgMADgLQAEgJAIgJIgLgMIgLgLIABgBIARgBIAPARIAVAaQAFgEACgFQADgEAAgIIgBgKIgEgLIAQgBIACAJIABAKQAAAKgFAIQgFAHgIAGIAKAMIAKAOIAHALg");
	this.shape_25.setTransform(-89.2,-49.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgNIAEABIAHABQAIACAFADQAGAEACAHQACAGAAAMIAAAzg");
	this.shape_26.setTransform(-97,-49.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbAPIgGgdIgHgcIAQgBIAGAhIAFAnIAGAAIAHgBQANgDAIgJQAHgIAAgNQAAgMgGgGQgEgGgKAAIgIABIgGACIADgPIAGgCIAIgBQAKAAAHAFQAGAFAEAIQACAIAAAKQABAMgEAJQgEAJgGAGQgGAGgHADQgHADgGACIgNACIgLABIgEgeg");
	this.shape_27.setTransform(-103.7,-49.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgNIAEABIAHABQAIACAFADQAGAEACAHQACAGAAAMIAAAzg");
	this.shape_28.setTransform(-111.4,-49.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFAeIAHgBIAMAAIARAAIAAgKIAAgJQAAgKgBgJQgCgJgFgFQgEgGgJAAQgHAAgEADQgEADgDAFQgEAEgBAFIgCAJIgEALIgDARIgCAQIgNAAIAEgSIACgRIADgNQABgMgEgFQgEgGgHgBIACgQQAKACAGAGQAFAFACAKQABgFAEgFQAEgFAGgEQAFgDAJgBQANAAAGAIQAHAGADAMQACANAAAOIAAAVIAAAEIgBAFIgBAFIgfAAIgHAAIgGAAIgEAAg");
	this.shape_29.setTransform(-118.7,-49.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgbAPIgGgdIgGgcIAOgBIAHAhIAGAnIAFAAIAHgBQANgDAIgJQAHgIAAgNQAAgMgFgGQgGgGgJAAIgIABIgGACIAEgPIAFgCIAIgBQAKAAAGAFQAIAFACAIQADAIABAKQAAAMgEAJQgEAJgGAGQgGAGgHADQgHADgHACIgMACIgLABIgEgeg");
	this.shape_30.setTransform(-128.2,-49.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAXIAHgOQADgGAAgEQAAgEgDgCIgHgDIgFgBIgFgCIADgOIAFABIAFACQAKACAFAEQAFAFAAAJQgBAHgDAHQgDAJgHAJg");
	this.shape_31.setTransform(-135.1,-51.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgNIAEABIAHABQAIACAFADQAGAEACAHQACAGAAAMIAAAzg");
	this.shape_32.setTransform(-139.9,-49.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgnAeIADAAIADgBIAIAAIACAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFgBIgEAAIAEgOIAKABIAPAAIAZAAQAMgBAFADQAHADACAGQACAIAAANIAAA1IgNAAIAAgwIgBgNQgBgFgDgCQgEgDgIAAIgbAAIABAJIABANIAAANIABANIAAAJIgDAOIgMAAIgJAAIgHABg");
	this.shape_33.setTransform(-147.3,-49.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgCgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgHAGQgKAFgKACg");
	this.shape_34.setTransform(-16.2,-72.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAcAsIAAgvIgBgPQgBgFgDgCQgEgCgIgBIgcAAIAABIIgMAAIAAgxIAAgPIABgIIgEAAIgFAAIgDgBIADgOIAIABIAOAAIAcAAQAMAAAFADQAHADACAHQACAHAAANIAAA1g");
	this.shape_35.setTransform(-24.8,-70.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAXIAHgNQADgGAAgFQAAgDgDgCIgHgEIgFgBIgFgCIADgOIAFACIAFABQAKACAFAEQAFAFAAAJQgBAGgDAJQgDAIgHAJg");
	this.shape_36.setTransform(-31.6,-72.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_37.setTransform(-37.7,-70.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_38.setTransform(-44.5,-70.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgnAeIADgBIADAAIAIAAIACAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFAAIgEgBIAEgOIAKAAIAPAAIAZAAQAMABAFACQAHADACAGQACAIAAAOIAAA1IgNAAIAAgxIgBgNQgBgFgDgDQgEgCgIAAIgbAAIABAJIABAMIAAAOIABANIAAAJIgDAPIgMAAIgJAAIgHAAg");
	this.shape_39.setTransform(-51.9,-70.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAbAsIgPgVIgaghQgFAGgCAIQgCAHABAIQAAAHABAGIADAMIgPAAIgCgLIgBgKQAAgMADgLQAEgJAIgKIgLgLIgLgKIABgBIARgCIAPARIAVAaQAFgDACgGQADgEAAgIIgBgKIgEgKIAQgCIACAKIABAJQAAAKgFAIQgFAIgIAEIAKANIAKAOIAHALg");
	this.shape_40.setTransform(-64.3,-70.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_41.setTransform(-72.1,-70.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgcAPIgFgdIgGgcIAPgBIAFAhIAHAnIAFAAIAHgBQAOgDAHgJQAHgIAAgNQAAgMgFgGQgGgGgJAAIgIABIgFACIACgPIAHgCIAHgBQAKAAAGAFQAHAFAEAIQADAIAAAKQgBAMgDAJQgEAJgGAGQgGAGgHADQgHADgHACIgMACIgKABIgGgeg");
	this.shape_42.setTransform(-78.8,-70.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_43.setTransform(-86.5,-70.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgEAfIAGgBIAMAAIARAAIAAgKIAAgKQAAgKgBgJQgCgIgEgGQgFgFgKgBQgGAAgEADQgFADgDAEQgDAFgBAEIgDAJIgDANIgCAQIgEAQIgMAAIADgSIAEgRIACgNQACgMgEgFQgFgGgIgCIAEgPQAJACAFAGQAGAGABAJQACgFAEgFQAEgFAGgEQAFgEAKAAQAMABAHAGQAGAHADAMQADAMgBAPIAAAVIAAADIgBAHIgBAEIggAAIgGAAIgFAAIgGAAg");
	this.shape_44.setTransform(-93.8,-70.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgbAPIgGgdIgHgcIAQgBIAGAhIAFAnIAGAAIAHgBQANgDAIgJQAHgIAAgNQAAgMgGgGQgEgGgKAAIgIABIgGACIADgPIAGgCIAIgBQAKAAAHAFQAGAFAEAIQACAIAAAKQABAMgEAJQgEAJgGAGQgGAGgHADQgHADgGACIgNACIgLABIgEgeg");
	this.shape_45.setTransform(-103.3,-70.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAXIAGgNQADgGAAgFQAAgDgCgCIgHgEIgGgBIgEgCIACgOIAEACIAGABQAKACAFAEQAFAFgBAJQAAAGgDAJQgEAIgFAJg");
	this.shape_46.setTransform(-110.2,-72.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_47.setTransform(-115,-70.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgnAeIADgBIAEAAIAHAAIACAAIAAgOIgBgQIgBgQIgBgLIgBAAIgDAAIgFAAIgEgBIADgOIALAAIAOAAIAaAAQAMABAFACQAGADADAGQACAIAAAOIAAA1IgMAAIAAgxIgBgNQgBgFgFgDQgDgCgIAAIgaAAIAAAJIABAMIAAAOIABANIAAAJIgCAPIgNAAIgJAAIgHAAg");
	this.shape_48.setTransform(-122.4,-70.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgoAVIAAgKIBRAAIAAAKgAgogKIAAgKIBRAAIAAAKg");
	this.shape_49.setTransform(-135.1,-70.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#69AD76").ss(2,1,1).p("Ar6nJIX1AAQCWAAAACWIAAG1QAACWiWAAIhOAAIBeCyIkMiyIz5AAQiWAAAAiWIAAm1QAAiWCWAAg");
	this.shape_50.setTransform(-76.5,-40.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#A6E0B0","#A2E0AE","#A6E0B0"],[0,0.471,1],-91.2,0,91.3,0).s().p("AH/EYIz5AAQiVAAAAiWIAAm1QAAiWCVAAIX1AAQCVAAAACWIAAG1QAACWiVAAIhOAAIBeCxg");
	this.shape_51.setTransform(-76.5,-40.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AheBdIAAi5IC8AAIAAC5g");
	this.shape_52.setTransform(9.5,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_52}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,21.6);


(lib.dmgFlowAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.dmgFlowText1 = new cjs.Text("", "bold 40px 'Chaparral Pro'", "#00CCFF");
	this.dmgFlowText1.name = "dmgFlowText1";
	this.dmgFlowText1.textAlign = "center";
	this.dmgFlowText1.lineHeight = 51;
	this.dmgFlowText1.lineWidth = 225;
	this.dmgFlowText1.parent = this;
	this.dmgFlowText1.setTransform(0.6,-23.2);

	this.timeline.addTween(cjs.Tween.get(this.dmgFlowText1).wait(1));

	// Layer 2
	this.dmgFlowText2 = new cjs.Text("", "bold 42px 'Chaparral Pro'");
	this.dmgFlowText2.name = "dmgFlowText2";
	this.dmgFlowText2.textAlign = "center";
	this.dmgFlowText2.lineHeight = 54;
	this.dmgFlowText2.lineWidth = 241;
	this.dmgFlowText2.parent = this;
	this.dmgFlowText2.setTransform(0.1,-25.9);

	this.timeline.addTween(cjs.Tween.get(this.dmgFlowText2).wait(1));

}).prototype = getMCSymbolPrototype(lib.dmgFlowAnim, new cjs.Rectangle(-122.6,-27.9,245.4,55.9), null);


(lib.cursorTutorialInside_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AG1gGItpmnIDlNRIDAjwIDID6ICKhyIjGjog");
	this.shape.setTransform(43.7,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#CCCCCC"],[0.263,1],-3.8,14.6,29.6,-11.7).s().p("AgPC0IjADwIjltRINoGnIk3BaIDGDoIiKByg");
	this.shape_1.setTransform(43.7,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cursorTutorialInside_mc, new cjs.Rectangle(-1,-1,89.3,88.1), null);


(lib.coinText2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.coins = new cjs.Text("0", "40px 'Myriad Hebrew'");
	this.coins.name = "coins";
	this.coins.textAlign = "right";
	this.coins.lineHeight = 50;
	this.coins.lineWidth = 235;
	this.coins.parent = this;
	this.coins.setTransform(237.4,2);

	this.timeline.addTween(cjs.Tween.get(this.coins).wait(1));

}).prototype = getMCSymbolPrototype(lib.coinText2_mc, new cjs.Rectangle(0,0,239.4,52.3), null);


(lib.coin_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABDAAQAAAcgUATQgTAUgcAAQgaAAgUgUQgTgTAAgcQAAgKAEgLQAEgOALgLQAUgTAaAAQAcAAATATQAIAJAFAJQAHANAAAPgABQhPQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhg");
	this.shape.setTransform(11.6,10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDE5B").s().p("AguAvQgTgTAAgcQAAgKAEgLQAEgOALgLQAUgTAaAAQAbAAATATQAJAJAFAJQAHANgBAPQABAcgVATQgTATgbABQgagBgUgTg");
	this.shape_1.setTransform(11.7,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AAABxQguAAghghQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQggAhgvAAIgBAAgAguguQgLALgEAOQgEALAAAKQAAAcATATQAUAUAaAAQAcAAATgUQAUgTAAgcQAAgPgHgNQgFgJgIgJQgTgTgcAAQgaAAgUATg");
	this.shape_2.setTransform(11.6,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin_mc, new cjs.Rectangle(-0.6,-1.3,24.5,24.6), null);


(lib.clickTutorial_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBeIAAi8IArAAIAAC8g");
	this.shape.setTransform(320.5,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMByIAPhGIAYhUIhiAAIAAhJIAtAAIAAAnIBiAAIAAAdIgaBZIgQBGg");
	this.shape_1.setTransform(307.9,65.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhPCCIAAi3IAqAAIAAC3gAgLA6IAAgEQAAgNAEgUQAEgVAEgPIAehRIhuAAIAAgiICfAAIAAAbIggBXQgPAoAAAeIAAAEg");
	this.shape_2.setTransform(290.7,71.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhKBgIAAgiIBTAAIAAhZQABghglgBQgTAAgVADIgHABIAAgjQAVgDAgAAQAvAAAPATQAIAJACAMQADAMAAAQIAABZIAWAAIAAAig");
	this.shape_3.setTransform(272.2,67.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMByIAPhGIAYhUIhiAAIAAhJIAtAAIAAAnIBiAAIAAAdIgaBZIgQBGg");
	this.shape_4.setTransform(255,65.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAEBgIAAgiIAjAAIAAhDQAAgagFgKIgFgJQgHgJgPAAQgHAAgFADQgGADgFAFQgIAIgEAIIgBADIgLB9IgsAAIALh3IABgOQAAgZgLgeIArAAIAEANIAEAQIADAAIACgDIAGgIQAEgFAGgFQAGgEAJgEQALgDAMAAQANAAAKAFQALAFAGAIQAGAHAEAMQAIATAAAdIAABqg");
	this.shape_5.setTransform(228.2,67.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfBbQgOgHgLgMQgKgMgHgSQgFgTgBgXIAAhdIAtAAIAABdQAAAfAJAPQAIAPARABQARAAAJgPQAJgOgBghQABgegGgOQgDgNgMgDIgOgBIgIABIAAghQAKgDAMgBQAXAAAOAJQAcASAABGQAAAvgUAZQgWAagmAAQgQgBgOgGg");
	this.shape_6.setTransform(209,67.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhKBgIAAgiIBTAAIAAhZQAAghgkgBQgTAAgVADIgHABIAAgjQAVgDAgAAQAvAAAPATQAIAJADAMQACAMAAAQIAABZIAWAAIAAAig");
	this.shape_7.setTransform(190.5,67.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhRBAIAwgHIgqibIAtAAIAXBVIALA7QAMgIAGgNQAGgOACgUIAIhZIAsAAIgHBSQgCAagHARQgVA0hDALIg7AJg");
	this.shape_8.setTransform(171.7,67.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVBeIAAi8IArAAIAAC8g");
	this.shape_9.setTransform(157.9,67.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhXBdIAAghQAJACAFAAQAGAAAEgCQADgCACgDQADgHAAgKIAAhhIgVADIAAgiQAtgGAsgBQAgAAAQAJQAJAEAGAGQAFAFADAJQACAHABAJIABAUIAAB6IgtAAIAAh6QAAgiglAAIgRABIAABjQAAAjgQAOQgHAEgJADQgLAEgMAAQgMAAgJgFg");
	this.shape_10.setTransform(142.2,67.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMByIAPhGIAYhUIhiAAIAAhJIAsAAIAAAnIBjAAIAAAdIgZBZIgQBGg");
	this.shape_11.setTransform(459.4,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAeBgIAAh7QABghglgBIgYABIAACcIgtAAIAAi5QALgCAWgCQAWgCATAAQARAAAMACQAMACAIAEQAJAFAGAGQAEAEAEAJQADAIAAAJIABATIAAB7g");
	this.shape_12.setTransform(441.3,24.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgjCCIAAibIgqhpIAxAAIAfBdIABACIAIABQALgBAFgGQAFgGAAgOIAAhFIAtAAIAABEQAAAfgSAPQgFAFgLAEQgKADgNAAIgNgBIAACHg");
	this.shape_13.setTransform(422.1,28.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhRBAIAwgHIgqibIAtAAIAXBVIALA7QAMgHAGgOQAGgOACgUIAIhZIAsAAIgHBSQgCAagHARQgVAzhDAMIg7AJg");
	this.shape_14.setTransform(396.7,25.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMByIAPhGIAYhUIhiAAIAAhJIAtAAIAAAnIBiAAIAAAdIgaBZIgQBGg");
	this.shape_15.setTransform(379.3,22.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAeBgIAAh7QABghglgBIgeACIgcADIgLABIAAgiQALgCAWgCQAWgCASAAQASAAAMACQAMACAIAEQAJAFAGAGQAEAEAEAJQADAIAAAJIABATIAAB7gAhLBgIAAh4IAtAAIAAB4g");
	this.shape_16.setTransform(353.5,24.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAEBgIAAgiIAjAAIAAhDQAAgagFgLIgFgJQgHgIgPgBQgHAAgFAEQgGADgFAFQgIAIgEAIIgBADIgLB9IgsAAIALh3IABgOQAAgZgLgeIArAAIAEANIAEAQIADAAIACgDIAGgIQAEgFAGgFQAGgEAJgDQALgEAMAAQANAAAKAFQALAFAGAHQAGAIAEAMQAIAUAAAcIAABqg");
	this.shape_17.setTransform(332.8,24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgjBhIgZgDIgHgBIAAggQAhACAiAAQANAAAIgHQAGgGAEgNQACgJAAgKIABgSIgBgMIAAgMIgCgLIgEgKQgDgGgDgCQgIgIgNAAQgIAAgHADQgHACgDAEQgDAEgCAFQgDAGAAAGQAAAIADAFQADAGAEADQAIAGAGACIAGABIgIAgIgHgBQgVgCgKgGQgdgNAAgoQAAgPAEgMQAFgLAIgIQAIgHALgFQASgIAYgBQAMABALACQAJACALAGQALAHAIAKQAHALAGARQAEATAAATQABAUgDAOQgCAOgEAKQgEAKgGAIQgFAHgHAEQgHAGgIACQgOAFgUABIgjgBg");
	this.shape_18.setTransform(313.6,24.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMByIAPhGIAYhUIhiAAIAAhJIAsAAIAAAnIBjAAIAAAdIgaBZIgQBGg");
	this.shape_19.setTransform(296.2,22.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhPBeIAAghIBJAAIAgACIAAgBIgog0IhDhoIAyAAIA0BWQALgPACgdIAEgqIAsAAIgDAjQgCAZgFAMIgGAPQgHAOgPANIAlAwIAAAag");
	this.shape_20.setTransform(278.4,24.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhXBdIAAgiQAJADAGAAQAFAAAEgCQADgCACgDQADgHAAgKIAAhhIgVACIAAghQAtgGArgBQAhABARAIQAIAEAFAGQAGAFACAJQADAHACAJIABAUIAAB6IgtAAIAAh6QgBgigkAAIgRABIAABjQgBAjgQANQgGAGgKACQgLAEgMAAQgMAAgJgFg");
	this.shape_21.setTransform(258.2,24.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhBBdIAAgjQAYAEAaAAQAXAAAIgTQAFgLAAgQIAAgfQAAgigTgKQgHgDgKAAQgTAAgfADIAAgiQAagDAdgBQARAAANAGQAOAEAIAJQAIAIAGALQAKAVAAAcIAAAVQAAAOgCAMQgCALgFALQgFAMgIAJQgIAHgOAFQgOAFgSABQghAAgWgFg");
	this.shape_22.setTransform(232.5,24.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFBeIAAh1QAAgIACgGQADgHADgEQAGgIAFgCIADgBIAAgBIhmAAIAAgiICXAAIAAAhQgHADgHAEQgHAFgDAHQgCAIAAAMIAAB0g");
	this.shape_23.setTransform(216.8,24.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVA+IAAh8IArAAIAABXIgcAlg");
	this.shape_24.setTransform(204.3,21.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMByIAPhGIAYhUIhiAAIAAhJIAsAAIAAAnIBjAAIAAAdIgZBZIgQBGg");
	this.shape_25.setTransform(184.1,22.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAeBgIAAh7QAAghgkgBIgeACIgcADIgKABIAAgiQAKgCAWgCQAWgCATAAQARAAAMACQAMACAIAEQAJAFAGAGQAFAEADAJQACAIABAJIABATIAAB7gAhKBgIAAh4IAtAAIAAB4g");
	this.shape_26.setTransform(166,24.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgVBeIAAi8IArAAIAAC8g");
	this.shape_27.setTransform(151.5,24.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAUBgIAAh7QAAghgkgBQgTAAgdAEIAAgjQAbgDAWAAQAUAAAMACQAMACAJAEQAIAFAGAGQAFAEADAJQADAIABAJIABATIAAB7g");
	this.shape_28.setTransform(138.3,24.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgVA+IAAh8IArAAIAABXIgcAlg");
	this.shape_29.setTransform(126.9,21.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAFBeIAAh1QAAgIACgGQADgHADgEQAGgIAFgCIADgBIAAgBIhmAAIAAgiICXAAIAAAhQgHADgHAEQgHAFgDAHQgCAIAAAMIAAB0g");
	this.shape_30.setTransform(114.3,24.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMByIAPhGIAYhUIhiAAIAAhJIAtAAIAAAnIBiAAIAAAdIgZBZIgRBGg");
	this.shape_31.setTransform(90.2,22.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAfBgIAAh7QAAghglgBIgeACIgcADIgKABIAAgiQAKgCAWgCQAWgCATAAQAQAAANACQAMACAJAEQAIAFAFAGQAFAEADAJQADAIABAJIACATIAAB7gAhKBgIAAh4IAtAAIAAB4g");
	this.shape_32.setTransform(72.2,24.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAfBgIAAh7QAAghgkgBIgZABIAACcIgtAAIAAi5QALgCAXgCQAVgCASAAQASAAAMACQAMACAIAEQAJAFAGAGQAEAEADAJQAEAIABAJIABATIAAB7g");
	this.shape_33.setTransform(44.7,24.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVA+IAAh8IArAAIAABXIgcAlg");
	this.shape_34.setTransform(30.5,21.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgVA+IAAh8IArAAIAABXIgcAlg");
	this.shape_35.setTransform(21.8,21.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhLBgIAAi5QALgCAXgCQAVgCAUAAQAoAAASANQARAOABAdIAACHgAgeg8IAAB6IA9AAIAAhlQAAgNgLgFQgJgEgQAAIgZABg");
	this.shape_36.setTransform(7.7,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(247));

	// Layer 2
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("EgjHgHFMBGPAAAQCdAAAACoIAAI7QAACoidAAMhGPAAAQidAAAAioIAAo7QAAioCdAAg");
	this.shape_37.setTransform(232.1,43.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_38.setTransform(232.1,43.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(2,1,1).p("EglkgEdQAAioCdAAMBGPAAAQCdAAAACoIAAI7QAACoidAAMhGPAAAQidAAAAiog");
	this.shape_39.setTransform(232.1,43.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEFFFE").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_40.setTransform(232.1,43.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FEFFFD").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_41.setTransform(232.1,43.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDFFFC").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_42.setTransform(232.1,43.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FCFFFB").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_43.setTransform(232.1,43.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FCFFFA").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_44.setTransform(232.1,43.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FBFFFA").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_45.setTransform(232.1,43.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FBFFF9").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_46.setTransform(232.1,43.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FBFFF8").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_47.setTransform(232.1,43.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FAFFF8").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_48.setTransform(232.1,43.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAFFF7").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_49.setTransform(232.1,43.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F9FFF7").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_50.setTransform(232.1,43.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F9FFF6").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_51.setTransform(232.1,43.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F9FFF5").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_52.setTransform(232.1,43.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F8FFF5").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_53.setTransform(232.1,43.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F8FFF4").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_54.setTransform(232.1,43.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F7FFF4").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_55.setTransform(232.1,43.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F7FFF3").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_56.setTransform(232.1,43.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F7FFF2").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_57.setTransform(232.1,43.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F6FFF2").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_58.setTransform(232.1,43.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F6FFF1").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_59.setTransform(232.1,43.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F5FFF1").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_60.setTransform(232.1,43.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F5FFF0").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_61.setTransform(232.1,43.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F5FFEF").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_62.setTransform(232.1,43.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F4FFEF").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_63.setTransform(232.1,43.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F4FFEE").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_64.setTransform(232.1,43.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3FFEE").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_65.setTransform(232.1,43.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F3FFED").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_66.setTransform(232.1,43.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F3FFEC").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_67.setTransform(232.1,43.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F2FFEC").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_68.setTransform(232.1,43.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F2FFEB").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_69.setTransform(232.1,43.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F1FFEA").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_70.setTransform(232.1,43.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F0FFE9").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_71.setTransform(232.1,43.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F0FFE8").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_72.setTransform(232.1,43.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EFFFE7").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_73.setTransform(232.1,43.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EEFFE6").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_74.setTransform(232.1,43.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EEFFE5").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_75.setTransform(232.1,43.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDFFE4").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_76.setTransform(232.1,43.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#ECFFE3").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_77.setTransform(232.1,43.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#ECFFE2").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_78.setTransform(232.1,43.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EBFFE1").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_79.setTransform(232.1,43.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EAFFE0").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_80.setTransform(232.1,43.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EAFFDF").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_81.setTransform(232.1,43.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E9FFDF").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_82.setTransform(232.1,43.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E9FFDE").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_83.setTransform(232.1,43.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E9FFDD").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_84.setTransform(232.1,43.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E8FFDD").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_85.setTransform(232.1,43.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E8FFDC").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_86.setTransform(232.1,43.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E7FFDC").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_87.setTransform(232.1,43.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E7FFDB").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_88.setTransform(232.1,43.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E7FFDA").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_89.setTransform(232.1,43.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E6FFDA").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_90.setTransform(232.1,43.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E6FFD9").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_91.setTransform(232.1,43.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E5FFD9").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_92.setTransform(232.1,43.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E5FFD8").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_93.setTransform(232.1,43.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E5FFD7").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_94.setTransform(232.1,43.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E4FFD7").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_95.setTransform(232.1,43.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E4FFD6").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_96.setTransform(232.1,43.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E3FFD6").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_97.setTransform(232.1,43.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E3FFD5").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_98.setTransform(232.1,43.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E3FFD4").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_99.setTransform(232.1,43.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E2FFD4").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_100.setTransform(232.1,43.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E2FFD3").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_101.setTransform(232.1,43.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E1FFD3").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_102.setTransform(232.1,43.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E1FFD2").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_103.setTransform(232.1,43.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E1FFD1").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_104.setTransform(232.1,43.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E0FFD1").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_105.setTransform(232.1,43.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E0FFD0").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_106.setTransform(232.1,43.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#DFFFCF").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_107.setTransform(232.1,43.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#DEFFCE").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_108.setTransform(232.1,43.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DEFFCD").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_109.setTransform(232.1,43.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DDFFCC").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_110.setTransform(232.1,43.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DFFFCE").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_111.setTransform(232.1,43.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DFFFD0").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_112.setTransform(232.1,43.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EBFFE0").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_113.setTransform(232.1,43.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EBFFE2").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_114.setTransform(232.1,43.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EDFFE3").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_115.setTransform(232.1,43.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EFFFE8").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_116.setTransform(232.1,43.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F1FFE9").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_117.setTransform(232.1,43.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F1FFEB").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_118.setTransform(232.1,43.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FDFFFB").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_119.setTransform(232.1,43.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FDFFFD").s().p("EgjHAHGQidAAAAioIAAo7QAAioCdgBMBGPAAAQCdABAACoIAAI7QAACoidAAg");
	this.shape_120.setTransform(232.1,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_38},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_39}]},1).to({state:[{t:this.shape_43},{t:this.shape_39}]},1).to({state:[{t:this.shape_43},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_39}]},1).to({state:[{t:this.shape_45},{t:this.shape_39}]},1).to({state:[{t:this.shape_46},{t:this.shape_39}]},1).to({state:[{t:this.shape_46},{t:this.shape_39}]},1).to({state:[{t:this.shape_47},{t:this.shape_39}]},1).to({state:[{t:this.shape_48},{t:this.shape_39}]},1).to({state:[{t:this.shape_49},{t:this.shape_39}]},1).to({state:[{t:this.shape_49},{t:this.shape_39}]},1).to({state:[{t:this.shape_50},{t:this.shape_39}]},1).to({state:[{t:this.shape_51},{t:this.shape_39}]},1).to({state:[{t:this.shape_51},{t:this.shape_39}]},1).to({state:[{t:this.shape_52},{t:this.shape_39}]},1).to({state:[{t:this.shape_53},{t:this.shape_39}]},1).to({state:[{t:this.shape_54},{t:this.shape_39}]},1).to({state:[{t:this.shape_54},{t:this.shape_39}]},1).to({state:[{t:this.shape_55},{t:this.shape_39}]},1).to({state:[{t:this.shape_56},{t:this.shape_39}]},1).to({state:[{t:this.shape_56},{t:this.shape_39}]},1).to({state:[{t:this.shape_57},{t:this.shape_39}]},1).to({state:[{t:this.shape_58},{t:this.shape_39}]},1).to({state:[{t:this.shape_58},{t:this.shape_39}]},1).to({state:[{t:this.shape_59},{t:this.shape_39}]},1).to({state:[{t:this.shape_60},{t:this.shape_39}]},1).to({state:[{t:this.shape_61},{t:this.shape_39}]},1).to({state:[{t:this.shape_61},{t:this.shape_39}]},1).to({state:[{t:this.shape_62},{t:this.shape_39}]},1).to({state:[{t:this.shape_63},{t:this.shape_39}]},1).to({state:[{t:this.shape_63},{t:this.shape_39}]},1).to({state:[{t:this.shape_64},{t:this.shape_39}]},1).to({state:[{t:this.shape_65},{t:this.shape_39}]},1).to({state:[{t:this.shape_66},{t:this.shape_39}]},1).to({state:[{t:this.shape_66},{t:this.shape_39}]},1).to({state:[{t:this.shape_67},{t:this.shape_39}]},1).to({state:[{t:this.shape_68},{t:this.shape_39}]},1).to({state:[{t:this.shape_68},{t:this.shape_39}]},1).to({state:[{t:this.shape_69},{t:this.shape_39}]},1).to({state:[{t:this.shape_69},{t:this.shape_39}]},1).to({state:[{t:this.shape_70},{t:this.shape_39}]},1).to({state:[{t:this.shape_70},{t:this.shape_39}]},1).to({state:[{t:this.shape_70},{t:this.shape_39}]},1).to({state:[{t:this.shape_71},{t:this.shape_39}]},1).to({state:[{t:this.shape_71},{t:this.shape_39}]},1).to({state:[{t:this.shape_72},{t:this.shape_39}]},1).to({state:[{t:this.shape_72},{t:this.shape_39}]},1).to({state:[{t:this.shape_73},{t:this.shape_39}]},1).to({state:[{t:this.shape_73},{t:this.shape_39}]},1).to({state:[{t:this.shape_73},{t:this.shape_39}]},1).to({state:[{t:this.shape_74},{t:this.shape_39}]},1).to({state:[{t:this.shape_74},{t:this.shape_39}]},1).to({state:[{t:this.shape_75},{t:this.shape_39}]},1).to({state:[{t:this.shape_75},{t:this.shape_39}]},1).to({state:[{t:this.shape_76},{t:this.shape_39}]},1).to({state:[{t:this.shape_76},{t:this.shape_39}]},1).to({state:[{t:this.shape_76},{t:this.shape_39}]},1).to({state:[{t:this.shape_77},{t:this.shape_39}]},1).to({state:[{t:this.shape_77},{t:this.shape_39}]},1).to({state:[{t:this.shape_78},{t:this.shape_39}]},1).to({state:[{t:this.shape_78},{t:this.shape_39}]},1).to({state:[{t:this.shape_79},{t:this.shape_39}]},1).to({state:[{t:this.shape_79},{t:this.shape_39}]},1).to({state:[{t:this.shape_79},{t:this.shape_39}]},1).to({state:[{t:this.shape_80},{t:this.shape_39}]},1).to({state:[{t:this.shape_80},{t:this.shape_39}]},1).to({state:[{t:this.shape_81},{t:this.shape_39}]},1).to({state:[{t:this.shape_81},{t:this.shape_39}]},1).to({state:[{t:this.shape_82},{t:this.shape_39}]},1).to({state:[{t:this.shape_83},{t:this.shape_39}]},1).to({state:[{t:this.shape_83},{t:this.shape_39}]},1).to({state:[{t:this.shape_84},{t:this.shape_39}]},1).to({state:[{t:this.shape_85},{t:this.shape_39}]},1).to({state:[{t:this.shape_86},{t:this.shape_39}]},1).to({state:[{t:this.shape_86},{t:this.shape_39}]},1).to({state:[{t:this.shape_87},{t:this.shape_39}]},1).to({state:[{t:this.shape_88},{t:this.shape_39}]},1).to({state:[{t:this.shape_88},{t:this.shape_39}]},1).to({state:[{t:this.shape_89},{t:this.shape_39}]},1).to({state:[{t:this.shape_90},{t:this.shape_39}]},1).to({state:[{t:this.shape_91},{t:this.shape_39}]},1).to({state:[{t:this.shape_91},{t:this.shape_39}]},1).to({state:[{t:this.shape_92},{t:this.shape_39}]},1).to({state:[{t:this.shape_93},{t:this.shape_39}]},1).to({state:[{t:this.shape_93},{t:this.shape_39}]},1).to({state:[{t:this.shape_94},{t:this.shape_39}]},1).to({state:[{t:this.shape_95},{t:this.shape_39}]},1).to({state:[{t:this.shape_95},{t:this.shape_39}]},1).to({state:[{t:this.shape_96},{t:this.shape_39}]},1).to({state:[{t:this.shape_97},{t:this.shape_39}]},1).to({state:[{t:this.shape_98},{t:this.shape_39}]},1).to({state:[{t:this.shape_98},{t:this.shape_39}]},1).to({state:[{t:this.shape_99},{t:this.shape_39}]},1).to({state:[{t:this.shape_100},{t:this.shape_39}]},1).to({state:[{t:this.shape_100},{t:this.shape_39}]},1).to({state:[{t:this.shape_101},{t:this.shape_39}]},1).to({state:[{t:this.shape_102},{t:this.shape_39}]},1).to({state:[{t:this.shape_103},{t:this.shape_39}]},1).to({state:[{t:this.shape_103},{t:this.shape_39}]},1).to({state:[{t:this.shape_104},{t:this.shape_39}]},1).to({state:[{t:this.shape_105},{t:this.shape_39}]},1).to({state:[{t:this.shape_105},{t:this.shape_39}]},1).to({state:[{t:this.shape_106},{t:this.shape_39}]},1).to({state:[{t:this.shape_106},{t:this.shape_39}]},1).to({state:[{t:this.shape_107},{t:this.shape_39}]},1).to({state:[{t:this.shape_107},{t:this.shape_39}]},1).to({state:[{t:this.shape_107},{t:this.shape_39}]},1).to({state:[{t:this.shape_108},{t:this.shape_39}]},1).to({state:[{t:this.shape_108},{t:this.shape_39}]},1).to({state:[{t:this.shape_109},{t:this.shape_39}]},1).to({state:[{t:this.shape_109},{t:this.shape_39}]},1).to({state:[{t:this.shape_110},{t:this.shape_39}]},1).to({state:[{t:this.shape_110},{t:this.shape_37}]},1).to({state:[{t:this.shape_110},{t:this.shape_39}]},1).to({state:[{t:this.shape_109},{t:this.shape_39}]},1).to({state:[{t:this.shape_109},{t:this.shape_39}]},1).to({state:[{t:this.shape_108},{t:this.shape_39}]},1).to({state:[{t:this.shape_108},{t:this.shape_39}]},1).to({state:[{t:this.shape_111},{t:this.shape_39}]},1).to({state:[{t:this.shape_107},{t:this.shape_39}]},1).to({state:[{t:this.shape_107},{t:this.shape_39}]},1).to({state:[{t:this.shape_112},{t:this.shape_39}]},1).to({state:[{t:this.shape_106},{t:this.shape_39}]},1).to({state:[{t:this.shape_106},{t:this.shape_39}]},1).to({state:[{t:this.shape_105},{t:this.shape_39}]},1).to({state:[{t:this.shape_104},{t:this.shape_39}]},1).to({state:[{t:this.shape_103},{t:this.shape_39}]},1).to({state:[{t:this.shape_103},{t:this.shape_39}]},1).to({state:[{t:this.shape_102},{t:this.shape_39}]},1).to({state:[{t:this.shape_101},{t:this.shape_39}]},1).to({state:[{t:this.shape_101},{t:this.shape_39}]},1).to({state:[{t:this.shape_100},{t:this.shape_39}]},1).to({state:[{t:this.shape_100},{t:this.shape_39}]},1).to({state:[{t:this.shape_98},{t:this.shape_39}]},1).to({state:[{t:this.shape_98},{t:this.shape_39}]},1).to({state:[{t:this.shape_98},{t:this.shape_39}]},1).to({state:[{t:this.shape_96},{t:this.shape_39}]},1).to({state:[{t:this.shape_96},{t:this.shape_39}]},1).to({state:[{t:this.shape_95},{t:this.shape_39}]},1).to({state:[{t:this.shape_95},{t:this.shape_39}]},1).to({state:[{t:this.shape_94},{t:this.shape_39}]},1).to({state:[{t:this.shape_93},{t:this.shape_39}]},1).to({state:[{t:this.shape_93},{t:this.shape_39}]},1).to({state:[{t:this.shape_92},{t:this.shape_39}]},1).to({state:[{t:this.shape_91},{t:this.shape_39}]},1).to({state:[{t:this.shape_91},{t:this.shape_39}]},1).to({state:[{t:this.shape_90},{t:this.shape_39}]},1).to({state:[{t:this.shape_89},{t:this.shape_39}]},1).to({state:[{t:this.shape_88},{t:this.shape_39}]},1).to({state:[{t:this.shape_88},{t:this.shape_39}]},1).to({state:[{t:this.shape_87},{t:this.shape_39}]},1).to({state:[{t:this.shape_86},{t:this.shape_39}]},1).to({state:[{t:this.shape_86},{t:this.shape_39}]},1).to({state:[{t:this.shape_85},{t:this.shape_39}]},1).to({state:[{t:this.shape_85},{t:this.shape_39}]},1).to({state:[{t:this.shape_83},{t:this.shape_39}]},1).to({state:[{t:this.shape_83},{t:this.shape_39}]},1).to({state:[{t:this.shape_83},{t:this.shape_39}]},1).to({state:[{t:this.shape_81},{t:this.shape_39}]},1).to({state:[{t:this.shape_81},{t:this.shape_39}]},1).to({state:[{t:this.shape_80},{t:this.shape_39}]},1).to({state:[{t:this.shape_80},{t:this.shape_39}]},1).to({state:[{t:this.shape_113},{t:this.shape_39}]},1).to({state:[{t:this.shape_79},{t:this.shape_39}]},1).to({state:[{t:this.shape_79},{t:this.shape_39}]},1).to({state:[{t:this.shape_114},{t:this.shape_39}]},1).to({state:[{t:this.shape_78},{t:this.shape_39}]},1).to({state:[{t:this.shape_78},{t:this.shape_39}]},1).to({state:[{t:this.shape_77},{t:this.shape_39}]},1).to({state:[{t:this.shape_115},{t:this.shape_39}]},1).to({state:[{t:this.shape_76},{t:this.shape_39}]},1).to({state:[{t:this.shape_76},{t:this.shape_39}]},1).to({state:[{t:this.shape_76},{t:this.shape_39}]},1).to({state:[{t:this.shape_75},{t:this.shape_39}]},1).to({state:[{t:this.shape_75},{t:this.shape_39}]},1).to({state:[{t:this.shape_74},{t:this.shape_39}]},1).to({state:[{t:this.shape_74},{t:this.shape_39}]},1).to({state:[{t:this.shape_73},{t:this.shape_39}]},1).to({state:[{t:this.shape_73},{t:this.shape_39}]},1).to({state:[{t:this.shape_73},{t:this.shape_39}]},1).to({state:[{t:this.shape_116},{t:this.shape_39}]},1).to({state:[{t:this.shape_72},{t:this.shape_39}]},1).to({state:[{t:this.shape_71},{t:this.shape_39}]},1).to({state:[{t:this.shape_71},{t:this.shape_39}]},1).to({state:[{t:this.shape_117},{t:this.shape_39}]},1).to({state:[{t:this.shape_70},{t:this.shape_39}]},1).to({state:[{t:this.shape_70},{t:this.shape_39}]},1).to({state:[{t:this.shape_118},{t:this.shape_39}]},1).to({state:[{t:this.shape_69},{t:this.shape_39}]},1).to({state:[{t:this.shape_69},{t:this.shape_39}]},1).to({state:[{t:this.shape_68},{t:this.shape_39}]},1).to({state:[{t:this.shape_68},{t:this.shape_39}]},1).to({state:[{t:this.shape_66},{t:this.shape_39}]},1).to({state:[{t:this.shape_66},{t:this.shape_39}]},1).to({state:[{t:this.shape_66},{t:this.shape_39}]},1).to({state:[{t:this.shape_64},{t:this.shape_39}]},1).to({state:[{t:this.shape_64},{t:this.shape_39}]},1).to({state:[{t:this.shape_63},{t:this.shape_39}]},1).to({state:[{t:this.shape_63},{t:this.shape_39}]},1).to({state:[{t:this.shape_62},{t:this.shape_39}]},1).to({state:[{t:this.shape_61},{t:this.shape_39}]},1).to({state:[{t:this.shape_61},{t:this.shape_39}]},1).to({state:[{t:this.shape_60},{t:this.shape_39}]},1).to({state:[{t:this.shape_59},{t:this.shape_39}]},1).to({state:[{t:this.shape_58},{t:this.shape_39}]},1).to({state:[{t:this.shape_58},{t:this.shape_39}]},1).to({state:[{t:this.shape_57},{t:this.shape_39}]},1).to({state:[{t:this.shape_56},{t:this.shape_39}]},1).to({state:[{t:this.shape_56},{t:this.shape_39}]},1).to({state:[{t:this.shape_55},{t:this.shape_39}]},1).to({state:[{t:this.shape_54},{t:this.shape_39}]},1).to({state:[{t:this.shape_54},{t:this.shape_39}]},1).to({state:[{t:this.shape_53},{t:this.shape_39}]},1).to({state:[{t:this.shape_53},{t:this.shape_39}]},1).to({state:[{t:this.shape_51},{t:this.shape_39}]},1).to({state:[{t:this.shape_51},{t:this.shape_39}]},1).to({state:[{t:this.shape_51},{t:this.shape_39}]},1).to({state:[{t:this.shape_49},{t:this.shape_39}]},1).to({state:[{t:this.shape_49},{t:this.shape_39}]},1).to({state:[{t:this.shape_48},{t:this.shape_39}]},1).to({state:[{t:this.shape_48},{t:this.shape_39}]},1).to({state:[{t:this.shape_47},{t:this.shape_39}]},1).to({state:[{t:this.shape_46},{t:this.shape_39}]},1).to({state:[{t:this.shape_46},{t:this.shape_39}]},1).to({state:[{t:this.shape_45},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_39}]},1).to({state:[{t:this.shape_43},{t:this.shape_39}]},1).to({state:[{t:this.shape_43},{t:this.shape_39}]},1).to({state:[{t:this.shape_119},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_39}]},1).to({state:[{t:this.shape_120},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_41},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_38},{t:this.shape_39}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-2.8,485.7,92.9);


(lib.answerBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AysCRIAAkhMAlZAAAIAAEhg");
	this.shape.setTransform(119.7,14.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.upgradeNotice_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.upgradeNoticeText_mc();
	this.instance.parent = this;
	this.instance.setTransform(45.1,-41.8,1,1,0,0,0,86.7,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({regY:30.2,scaleX:1.14,scaleY:1.14,y:-41.9},50).to({regY:30.3,scaleX:1,scaleY:1,y:-41.8},50).wait(51));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhqgyIBBAAIAAifIBTAAIAACfIBBAAIhrEEg");
	this.shape.setTransform(10.7,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({y:20.8},0).wait(1).to({y:20.7},0).wait(1).to({y:20.6},0).wait(1).to({y:20.5},0).wait(1).to({y:20.3},0).wait(1).to({y:20.2},0).wait(1).to({y:20.1},0).wait(1).to({y:19.9},0).wait(1).to({y:19.8},0).wait(1).to({y:19.7},0).wait(1).to({y:19.5},0).wait(1).to({y:19.4},0).wait(1).to({y:19.3},0).wait(1).to({y:19.2},0).wait(1).to({y:19},0).wait(1).to({y:18.9},0).wait(1).to({y:18.8},0).wait(1).to({y:18.6},0).wait(1).to({y:18.5},0).wait(1).to({y:18.4},0).wait(1).to({y:18.2},0).wait(1).to({y:18.1},0).wait(1).to({y:18},0).wait(1).to({y:17.8},0).wait(1).to({y:17.7},0).wait(1).to({y:17.6},0).wait(1).to({y:17.5},0).wait(1).to({y:17.3},0).wait(1).to({y:17.2},0).wait(1).to({y:17.1},0).wait(1).to({y:16.9},0).wait(1).to({y:16.8},0).wait(1).to({y:16.7},0).wait(1).to({y:16.5},0).wait(1).to({y:16.4},0).wait(1).to({y:16.3},0).wait(1).to({y:16.2},0).wait(1).to({y:16},0).wait(1).to({y:15.9},0).wait(1).to({y:15.8},0).wait(1).to({y:15.6},0).wait(1).to({y:15.5},0).wait(1).to({y:15.4},0).wait(1).to({y:15.2},0).wait(1).to({y:15.1},0).wait(1).to({y:15},0).wait(1).to({y:14.8},0).wait(1).to({y:14.7},0).wait(1).to({y:14.6},0).wait(1).to({y:14.5},0).wait(1).to({y:14.3},0).wait(1).to({y:14.2},0).wait(1).to({y:14.1},0).wait(1).to({y:13.9},0).wait(1).to({y:13.8},0).wait(1).to({y:13.7},0).wait(1).to({y:13.5},0).wait(1).to({y:13.4},0).wait(1).to({y:13.3},0).wait(1).to({y:13.2},0).wait(1).to({y:13},0).wait(1).to({y:12.9},0).wait(1).to({y:12.8},0).wait(1).to({y:12.6},0).wait(1).to({y:12.5},0).wait(1).to({y:12.4},0).wait(1).to({y:12.2},0).wait(1).to({y:12.1},0).wait(1).to({y:12},0).wait(1).to({y:11.9},0).wait(1).to({y:11.7},0).wait(1).to({y:11.6},0).wait(1).to({y:11.5},0).wait(1).to({y:11.3},0).wait(1).to({y:11.2},0).wait(1).to({y:11.1},0).wait(1).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.6},0).wait(1).to({y:9.5},0).wait(1).to({y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({y:9.6},0).wait(1).to({y:9.7},0).wait(1).to({y:9.8},0).wait(1).to({y:10},0).wait(1).to({y:10.1},0).wait(1).to({y:10.2},0).wait(1).to({y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({y:10.7},0).wait(1).to({y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({y:11.3},0).wait(1).to({y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({y:11.7},0).wait(1).to({y:11.8},0).wait(1).to({y:11.9},0).wait(1).to({y:12},0).wait(1).to({y:12.2},0).wait(1).to({y:12.3},0).wait(1).to({y:12.4},0).wait(1).to({y:12.5},0).wait(1).to({y:12.6},0).wait(1).to({y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({y:13},0).wait(1).to({y:13.1},0).wait(1).to({y:13.2},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({y:13.6},0).wait(1).to({y:13.7},0).wait(1).to({y:13.8},0).wait(1).to({y:13.9},0).wait(1).to({y:14},0).wait(1).to({y:14.1},0).wait(1).to({y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({y:14.5},0).wait(1).to({y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.8},0).wait(1).to({y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({y:15.2},0).wait(1).to({y:15.3},0).wait(1).to({y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({y:15.6},0).wait(1).to({y:15.8},0).wait(1).to({y:15.9},0).wait(1).to({y:16},0).wait(1).to({y:16.1},0).wait(1).to({y:16.2},0).wait(1).to({y:16.3},0).wait(1).to({y:16.5},0).wait(1).to({y:16.6},0).wait(1).to({y:16.7},0).wait(1).to({y:16.8},0).wait(1).to({y:16.9},0).wait(1).to({y:17},0).wait(1).to({y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({y:17.4},0).wait(1).to({y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({y:17.8},0).wait(1).to({y:18},0).wait(1).to({y:18.1},0).wait(1).to({y:18.2},0).wait(1).to({y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({y:18.5},0).wait(1).to({y:18.7},0).wait(1).to({y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({y:19},0).wait(1).to({y:19.1},0).wait(1).to({y:19.2},0).wait(1).to({y:19.4},0).wait(1).to({y:19.5},0).wait(1).to({y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({y:19.8},0).wait(1).to({y:19.9},0).wait(1).to({y:20},0).wait(1).to({y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({y:20.4},0).wait(1).to({y:20.5},0).wait(1).to({y:20.6},0).wait(1).to({y:20.7},0).wait(1).to({y:20.9},0).wait(1).to({y:21},0).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhqgyIBBAAIAAifIBTAAIAACfIBBAAIhrEEg");
	this.shape_1.setTransform(43.7,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({y:9.5},0).wait(1).to({y:9.6},0).wait(1).to({y:9.8},0).wait(1).to({y:9.9},0).wait(1).to({y:10},0).wait(1).to({y:10.2},0).wait(1).to({y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({y:10.7},0).wait(1).to({y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({y:11.3},0).wait(1).to({y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({y:11.7},0).wait(1).to({y:11.9},0).wait(1).to({y:12},0).wait(1).to({y:12.1},0).wait(1).to({y:12.2},0).wait(1).to({y:12.4},0).wait(1).to({y:12.5},0).wait(1).to({y:12.6},0).wait(1).to({y:12.8},0).wait(1).to({y:12.9},0).wait(1).to({y:13},0).wait(1).to({y:13.2},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({y:13.5},0).wait(1).to({y:13.7},0).wait(1).to({y:13.8},0).wait(1).to({y:13.9},0).wait(1).to({y:14.1},0).wait(1).to({y:14.2},0).wait(1).to({y:14.3},0).wait(1).to({y:14.5},0).wait(1).to({y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.8},0).wait(1).to({y:15},0).wait(1).to({y:15.1},0).wait(1).to({y:15.2},0).wait(1).to({y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({y:15.6},0).wait(1).to({y:15.8},0).wait(1).to({y:15.9},0).wait(1).to({y:16},0).wait(1).to({y:16.2},0).wait(1).to({y:16.3},0).wait(1).to({y:16.4},0).wait(1).to({y:16.5},0).wait(1).to({y:16.7},0).wait(1).to({y:16.8},0).wait(1).to({y:16.9},0).wait(1).to({y:17.1},0).wait(1).to({y:17.2},0).wait(1).to({y:17.3},0).wait(1).to({y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({y:17.8},0).wait(1).to({y:18},0).wait(1).to({y:18.1},0).wait(1).to({y:18.2},0).wait(1).to({y:18.4},0).wait(1).to({y:18.5},0).wait(1).to({y:18.6},0).wait(1).to({y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({y:19},0).wait(1).to({y:19.2},0).wait(1).to({y:19.3},0).wait(1).to({y:19.4},0).wait(1).to({y:19.5},0).wait(1).to({y:19.7},0).wait(1).to({y:19.8},0).wait(1).to({y:19.9},0).wait(1).to({y:20.1},0).wait(1).to({y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({y:20.5},0).wait(1).to({y:20.6},0).wait(1).to({y:20.7},0).wait(1).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({y:20.9},0).wait(1).to({y:20.7},0).wait(1).to({y:20.6},0).wait(1).to({y:20.5},0).wait(1).to({y:20.4},0).wait(1).to({y:20.3},0).wait(1).to({y:20.2},0).wait(1).to({y:20},0).wait(1).to({y:19.9},0).wait(1).to({y:19.8},0).wait(1).to({y:19.7},0).wait(1).to({y:19.6},0).wait(1).to({y:19.5},0).wait(1).to({y:19.4},0).wait(1).to({y:19.2},0).wait(1).to({y:19.1},0).wait(1).to({y:19},0).wait(1).to({y:18.9},0).wait(1).to({y:18.8},0).wait(1).to({y:18.7},0).wait(1).to({y:18.5},0).wait(1).to({y:18.4},0).wait(1).to({y:18.3},0).wait(1).to({y:18.2},0).wait(1).to({y:18.1},0).wait(1).to({y:18},0).wait(1).to({y:17.8},0).wait(1).to({y:17.7},0).wait(1).to({y:17.6},0).wait(1).to({y:17.5},0).wait(1).to({y:17.4},0).wait(1).to({y:17.3},0).wait(1).to({y:17.1},0).wait(1).to({y:17},0).wait(1).to({y:16.9},0).wait(1).to({y:16.8},0).wait(1).to({y:16.7},0).wait(1).to({y:16.6},0).wait(1).to({y:16.5},0).wait(1).to({y:16.3},0).wait(1).to({y:16.2},0).wait(1).to({y:16.1},0).wait(1).to({y:16},0).wait(1).to({y:15.9},0).wait(1).to({y:15.8},0).wait(1).to({y:15.6},0).wait(1).to({y:15.5},0).wait(1).to({y:15.4},0).wait(1).to({y:15.3},0).wait(1).to({y:15.2},0).wait(1).to({y:15.1},0).wait(1).to({y:14.9},0).wait(1).to({y:14.8},0).wait(1).to({y:14.7},0).wait(1).to({y:14.6},0).wait(1).to({y:14.5},0).wait(1).to({y:14.4},0).wait(1).to({y:14.2},0).wait(1).to({y:14.1},0).wait(1).to({y:14},0).wait(1).to({y:13.9},0).wait(1).to({y:13.8},0).wait(1).to({y:13.7},0).wait(1).to({y:13.6},0).wait(1).to({y:13.4},0).wait(1).to({y:13.3},0).wait(1).to({y:13.2},0).wait(1).to({y:13.1},0).wait(1).to({y:13},0).wait(1).to({y:12.9},0).wait(1).to({y:12.7},0).wait(1).to({y:12.6},0).wait(1).to({y:12.5},0).wait(1).to({y:12.4},0).wait(1).to({y:12.3},0).wait(1).to({y:12.2},0).wait(1).to({y:12},0).wait(1).to({y:11.9},0).wait(1).to({y:11.8},0).wait(1).to({y:11.7},0).wait(1).to({y:11.6},0).wait(1).to({y:11.5},0).wait(1).to({y:11.3},0).wait(1).to({y:11.2},0).wait(1).to({y:11.1},0).wait(1).to({y:11},0).wait(1).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10.1},0).wait(1).to({y:10},0).wait(1).to({y:9.8},0).wait(1).to({y:9.7},0).wait(1).to({y:9.6},0).wait(1).to({y:9.5},0).wait(1).to({y:9.4},0).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhqgyIBBAAIAAifIBTAAIAACfIBBAAIhrEEg");
	this.shape_2.setTransform(76.6,21);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({y:20.8},0).wait(1).to({y:20.7},0).wait(1).to({y:20.6},0).wait(1).to({y:20.5},0).wait(1).to({y:20.3},0).wait(1).to({y:20.2},0).wait(1).to({y:20.1},0).wait(1).to({y:19.9},0).wait(1).to({y:19.8},0).wait(1).to({y:19.7},0).wait(1).to({y:19.5},0).wait(1).to({y:19.4},0).wait(1).to({y:19.3},0).wait(1).to({y:19.2},0).wait(1).to({y:19},0).wait(1).to({y:18.9},0).wait(1).to({y:18.8},0).wait(1).to({y:18.6},0).wait(1).to({y:18.5},0).wait(1).to({y:18.4},0).wait(1).to({y:18.2},0).wait(1).to({y:18.1},0).wait(1).to({y:18},0).wait(1).to({y:17.8},0).wait(1).to({y:17.7},0).wait(1).to({y:17.6},0).wait(1).to({y:17.5},0).wait(1).to({y:17.3},0).wait(1).to({y:17.2},0).wait(1).to({y:17.1},0).wait(1).to({y:16.9},0).wait(1).to({y:16.8},0).wait(1).to({y:16.7},0).wait(1).to({y:16.5},0).wait(1).to({y:16.4},0).wait(1).to({y:16.3},0).wait(1).to({y:16.2},0).wait(1).to({y:16},0).wait(1).to({y:15.9},0).wait(1).to({y:15.8},0).wait(1).to({y:15.6},0).wait(1).to({y:15.5},0).wait(1).to({y:15.4},0).wait(1).to({y:15.2},0).wait(1).to({y:15.1},0).wait(1).to({y:15},0).wait(1).to({y:14.8},0).wait(1).to({y:14.7},0).wait(1).to({y:14.6},0).wait(1).to({y:14.5},0).wait(1).to({y:14.3},0).wait(1).to({y:14.2},0).wait(1).to({y:14.1},0).wait(1).to({y:13.9},0).wait(1).to({y:13.8},0).wait(1).to({y:13.7},0).wait(1).to({y:13.5},0).wait(1).to({y:13.4},0).wait(1).to({y:13.3},0).wait(1).to({y:13.2},0).wait(1).to({y:13},0).wait(1).to({y:12.9},0).wait(1).to({y:12.8},0).wait(1).to({y:12.6},0).wait(1).to({y:12.5},0).wait(1).to({y:12.4},0).wait(1).to({y:12.2},0).wait(1).to({y:12.1},0).wait(1).to({y:12},0).wait(1).to({y:11.9},0).wait(1).to({y:11.7},0).wait(1).to({y:11.6},0).wait(1).to({y:11.5},0).wait(1).to({y:11.3},0).wait(1).to({y:11.2},0).wait(1).to({y:11.1},0).wait(1).to({y:10.9},0).wait(1).to({y:10.8},0).wait(1).to({y:10.7},0).wait(1).to({y:10.5},0).wait(1).to({y:10.4},0).wait(1).to({y:10.3},0).wait(1).to({y:10.2},0).wait(1).to({y:10},0).wait(1).to({y:9.9},0).wait(1).to({y:9.8},0).wait(1).to({y:9.6},0).wait(1).to({y:9.5},0).wait(1).to({y:9.4},0).wait(1).to({y:9.5},0).wait(1).to({y:9.6},0).wait(1).to({y:9.7},0).wait(1).to({y:9.8},0).wait(1).to({y:10},0).wait(1).to({y:10.1},0).wait(1).to({y:10.2},0).wait(1).to({y:10.3},0).wait(1).to({y:10.4},0).wait(1).to({y:10.5},0).wait(1).to({y:10.7},0).wait(1).to({y:10.8},0).wait(1).to({y:10.9},0).wait(1).to({y:11},0).wait(1).to({y:11.1},0).wait(1).to({y:11.2},0).wait(1).to({y:11.3},0).wait(1).to({y:11.5},0).wait(1).to({y:11.6},0).wait(1).to({y:11.7},0).wait(1).to({y:11.8},0).wait(1).to({y:11.9},0).wait(1).to({y:12},0).wait(1).to({y:12.2},0).wait(1).to({y:12.3},0).wait(1).to({y:12.4},0).wait(1).to({y:12.5},0).wait(1).to({y:12.6},0).wait(1).to({y:12.7},0).wait(1).to({y:12.9},0).wait(1).to({y:13},0).wait(1).to({y:13.1},0).wait(1).to({y:13.2},0).wait(1).to({y:13.3},0).wait(1).to({y:13.4},0).wait(1).to({y:13.6},0).wait(1).to({y:13.7},0).wait(1).to({y:13.8},0).wait(1).to({y:13.9},0).wait(1).to({y:14},0).wait(1).to({y:14.1},0).wait(1).to({y:14.2},0).wait(1).to({y:14.4},0).wait(1).to({y:14.5},0).wait(1).to({y:14.6},0).wait(1).to({y:14.7},0).wait(1).to({y:14.8},0).wait(1).to({y:14.9},0).wait(1).to({y:15.1},0).wait(1).to({y:15.2},0).wait(1).to({y:15.3},0).wait(1).to({y:15.4},0).wait(1).to({y:15.5},0).wait(1).to({y:15.6},0).wait(1).to({y:15.8},0).wait(1).to({y:15.9},0).wait(1).to({y:16},0).wait(1).to({y:16.1},0).wait(1).to({y:16.2},0).wait(1).to({y:16.3},0).wait(1).to({y:16.5},0).wait(1).to({y:16.6},0).wait(1).to({y:16.7},0).wait(1).to({y:16.8},0).wait(1).to({y:16.9},0).wait(1).to({y:17},0).wait(1).to({y:17.1},0).wait(1).to({y:17.3},0).wait(1).to({y:17.4},0).wait(1).to({y:17.5},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({y:17.8},0).wait(1).to({y:18},0).wait(1).to({y:18.1},0).wait(1).to({y:18.2},0).wait(1).to({y:18.3},0).wait(1).to({y:18.4},0).wait(1).to({y:18.5},0).wait(1).to({y:18.7},0).wait(1).to({y:18.8},0).wait(1).to({y:18.9},0).wait(1).to({y:19},0).wait(1).to({y:19.1},0).wait(1).to({y:19.2},0).wait(1).to({y:19.4},0).wait(1).to({y:19.5},0).wait(1).to({y:19.6},0).wait(1).to({y:19.7},0).wait(1).to({y:19.8},0).wait(1).to({y:19.9},0).wait(1).to({y:20},0).wait(1).to({y:20.2},0).wait(1).to({y:20.3},0).wait(1).to({y:20.4},0).wait(1).to({y:20.5},0).wait(1).to({y:20.6},0).wait(1).to({y:20.7},0).wait(1).to({y:20.9},0).wait(1).to({y:21},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-72.1,173.3,114.1);


(lib.upgrade2_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAsIgPgVIgaghQgFAHgCAGQgCAJABAHQAAAHABAHIADALIgPAAIgCgKIgBgLQAAgMADgLQAEgKAIgIIgLgNIgLgKIABgBIARgBIAPARIAVAaQAFgEACgEQADgFAAgIIgBgKIgEgLIAQgBIACAJIABAKQAAAKgFAIQgFAHgIAGIAKAMIAKAOIAHALg");
	this.shape.setTransform(7,-41.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASA7IAAhcIAAgHIgCgCIgEgBIgEAAIgIAAIgIAAIgEAAIgLAAIgHgBIADgOIAIABIAOAAIAaAAIAGABQACABABADIABAKIAABlg");
	this.shape_1.setTransform(-1.9,-39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAXIAHgOQADgFAAgEQAAgEgDgDIgHgCIgFgCIgFgCIADgOIAFABIAFACQAKACAFAEQAEAFABAJQgBAHgDAHQgDAJgHAJg");
	this.shape_2.setTransform(-10.8,-43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjAgIALgCIALgCIAKgCIgFgQIgJgTIgKgUIgJgQIARgBIAHAOIAIASIAGASIAGASQAIgEAFgIQAFgIAAgOIgBgKIgCgMIgEgLIAQgCIADANIABASQAAAMgCAJQgDAKgHAIQgHAIgNAFQgGADgHACIgQAEIgQADg");
	this.shape_3.setTransform(-17.3,-41.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgIAIgIAGQgKAFgKACg");
	this.shape_4.setTransform(-25.6,-43.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_5.setTransform(-33.8,-41.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASAsIAAgrIAAgMQgBgDgDgCQgCgCgGAAIgZAAIgMAAIgHgBIADgZIAKABIARAAIASAAQANAAAGAEQAHAEACAHQACAJgBAMIAAAzgAgjAsIAAgqIAVAAIAAAqg");
	this.shape_6.setTransform(-46.8,-41.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AANAsIAAguQAAgJgCgDQgDgEgHAAIgRAAIgLAAIgGgBIADgZIAKABIARAAIAHAAQANAAAHADQAGADACAHQACAIAAAMIAAA2g");
	this.shape_7.setTransform(-55.8,-41.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjAUIAIAAIAJgBIAIAAIAUAAIAAgIIAAgIIAAgHIgCgIQgBgDgDgCIgHgBIgPAAIgLAAIgHgBIAEgZIAIABIAPAAIANAAQALAAAGADQAFADACAIQACAHAAANIAAAKIAAAEIAAAFIAAAGIgBADIALAAIgEAZIg0AAIgIAAIgJAAIgGABg");
	this.shape_8.setTransform(-63.7,-41.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAsIAAgrIAAgMQgBgDgDgCQgCgCgGAAIgZAAIgMAAIgHgBIADgZIAKABIARAAIASAAQANAAAGAEQAHAEACAHQACAJgBAMIAAAzgAgjAsIAAgqIAVAAIAAAqg");
	this.shape_9.setTransform(-73,-41.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFAXIAGgOQADgFAAgEQAAgEgCgDIgHgCIgGgCIgEgCIADgOIADABIAGACQAKACAFAEQAFAFgBAJQAAAHgDAHQgEAJgFAJg");
	this.shape_10.setTransform(-83.3,-43.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgOIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_11.setTransform(-88.1,-41.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnAeIADAAIAEgBIAGAAIADAAIAAgOIgBgQIgBgQIgBgLIgBAAIgDAAIgFgBIgEAAIADgOIALABIAOAAIAaAAQALAAAGACQAGADADAGQACAIAAANIAAA1IgMAAIAAgwIgBgNQgCgFgEgCQgDgDgHAAIgbAAIAAAJIABANIAAANIABANIAAAJIgCAOIgNAAIgJAAIgHABg");
	this.shape_12.setTransform(-95.5,-41.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgEgDgHAAIgOAAIgMAAIgGgBIADgOIAIABIANAAIAJAAQAMAAAGACQAGADACAHQACAHABAOIAAA1g");
	this.shape_13.setTransform(-104.3,-41.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgJIgCgOQgBgGgEgCQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMAAAFAEQAGAEABAHQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAOIgzAAIgIAAIgHAAIgGABg");
	this.shape_14.setTransform(99.1,-63.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfAeIAIgBIANAAIAeAAIABgJIACgLIAAgJQAAgLgCgGQgCgGgFgDQgFgCgIAAIgOAAIgMAAIgGgBIADgOIAHAAIANAAIAMAAQANABAHAEQAHAEACAJQADAJgBAPQAAAMgBAMIgEAUIgrAAIgIAAIgHAAIgGABg");
	this.shape_15.setTransform(90.5,-63.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAuQALgDAIgHQAIgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIgmAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQAAANgFALQgEALgJAJQgIAIgHAGQgKAFgKACg");
	this.shape_16.setTransform(82.6,-64.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeAcIgDgUIgEgTIgEgTIgDgMIAPgCIABAHIADAPIAEAXQAIgBAEgCQAEgEABgEQACgEAAgGIgCgKIgDgMIAOgCIADAKIABANQAAAHgCAHQgDAGgGAFQgGAFgOADIABAEIABAHIABAHIAHgBIAKgCQAKgCAHgEQAHgEAEgJQAEgHAAgNIgCgQIgEgOIAPgBIADAMIABAQQAAAOgEAKQgEAKgGAGQgHAHgJADQgIAFgJABIgOACIgLABIgDgQg");
	this.shape_17.setTransform(70.4,-63.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAJAsIAAgLIAAgOIgBgQIAAgNIAAgJIACgFIABgEIgcAAIgLAAIgHgBIADgOIAIABIAOAAIAuAAIgCAOIgHAAQgEAAgBADQgCAEAAAIIABATIAAAUIABASg");
	this.shape_18.setTransform(61.3,-63.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgEgDgHAAIgPAAIgLAAIgHgBIAEgOIAHABIAOAAIAJAAQAMAAAGACQAGADADAHQABAHAAAOIAAA1g");
	this.shape_19.setTransform(53.3,-63.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_20.setTransform(47,-63.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_21.setTransform(41.8,-63.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggAUIAGAAIAIgBIAJAAIAYAAIABgJIAAgKQAAgHgCgEQgBgEgEgBQgEgCgGAAIgNAAIgMAAIgHgBIAEgZIAIABIANAAIALAAQAOAAAHAEQAIAEADAJQACAJAAAQIgBAWIgEAXIgtAAIgJAAIgIAAIgGABg");
	this.shape_22.setTransform(31.1,-63.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAUIAGAAIAJgBIAIAAIAAgLQABgIgBgEQgBgHgDgEQgEgEgGAAQgHAAgDAEQgEADgBAGIgEAIIgDANIgCAOIgDAPIgVAAIACgNIADgOIACgLIAAgIQABgHgDgEQgDgEgHgBIAEgaQALABAHAGQAGAFACAIIAFgJQADgEAGgDQAFgEAJAAQAMAAAHAHQAGAIADALQADAMAAANIAAANIAAAFIgCAIIgBAHIgBAEIgfAAIgJAAIgFABg");
	this.shape_23.setTransform(21.7,-63.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AACAtIAAguIgBgJQgBgCgBgCQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKACAGADQAGAEACAIQACAHAAANIAAAxg");
	this.shape_24.setTransform(13.5,-63.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgmAUIADAAIAHgBIABAAIAAgIIgBgLIAAgKIgBgIIgDAAIgEgBIgDgBIAEgYIAHABIAKAAIAMAAIAVAAQAMAAAHACQAGADACAIQACAHAAAMIAAA3IgVAAIAAguQAAgJgCgEQgDgEgIABIgSAAIAAAIIABAKIAAALIAAAIIgDAZIgSAAIgFAAIgGABIgEAAg");
	this.shape_25.setTransform(5.7,-63.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AASAsIAAgrIAAgLQgBgEgDgCQgCgBgGgBIgZAAIgMAAIgHgBIADgZIAKABIARAAIASAAQANAAAGAEQAHADACAIQACAJgBAMIAAAzgAgjAsIAAgqIAVAAIAAAqg");
	this.shape_26.setTransform(-7.3,-63.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSAiQAKgCAHgDQAGgFAFgGQAEgFAAgIQAAgEgCgBQgDgCgFAAIgkAAIAAgdIAAgKIgBgKIgBgHIAVgDIABAFIAAAKIABALIAAAIIAYAAQAGAAAGACQAFABADAGQACAFAAAKQAAAOgEALQgFALgJAJQgJAIgJAGQgKAFgLABg");
	this.shape_27.setTransform(-16.2,-64.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAVAsIAAgtQAAgGgBgEQgBgDgDgCQgCgBgGgBIgTAAIAAA+IgVAAIAAgqIAAgMIACgIIgEgBIgEAAIgDAAIAEgZIAJABIASAAIAXAAQANAAAGAEQAGADACAIQACAJAAAMIAAAzg");
	this.shape_28.setTransform(-25,-63.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgKAYIAHgNQADgGAAgDQAAgBAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIgHgDIgFgBIgFgBIAEgZIAEABIAGACQAJACAGADQAGACACAGQACAEAAAHQAAAIgEAKQgEAKgHAJg");
	this.shape_29.setTransform(-32.4,-64.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgcAUIAHAAIAIgBIAIAAIAQAAIgFgFIgIgJIgMgOIgJgLIgJgMIgJgKIAggCIAJAPIAMARQADgCABgDIABgHIAAgGIgCgGIgDgGIAbgCIACAGIAAAHQAAAGgBAGQgCAGgFAFQgEAFgIADIAMAPIAJAJIgFAUIgsAAIgKAAIgKAAIgHABg");
	this.shape_30.setTransform(-39.5,-63.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AACAtIAAguIgBgJQgBgCgBgCQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKACAGADQAGAEACAIQACAHAAANIAAAxg");
	this.shape_31.setTransform(-46.8,-63.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgnAUIAFAAIAFgBIACAAIAAgIIAAgLIgBgKIgBgIIgEAAIgDgBIgDgBIAEgYIAGABIALAAIAMAAIAUAAQAOAAAGACQAGADACAIQACAHAAAMIAAA3IgWAAIAAguQABgJgDgEQgCgEgHABIgTAAIABAIIAAAKIABALIAAAIIgDAZIgSAAIgGAAIgGABIgEAAg");
	this.shape_32.setTransform(-54.7,-63.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AASAsIAAgrIAAgLQgBgEgDgCQgCgBgGgBIgZAAIgMAAIgHgBIADgZIAKABIARAAIASAAQANAAAGAEQAHADACAIQACAJgBAMIAAAzgAgjAsIAAgqIAVAAIAAAqg");
	this.shape_33.setTransform(-67.7,-63.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAUAsIgLgRQgIgMgNgQIgDAHIgBAIQAAAKACAIIAFAMIgbAAIgDgKIgBgLQAAgLAEgLQADgJAKgIIgLgNIgMgMIAAgBIAegCIAKANIARAYIADgFIACgHQgBgFgCgGIgEgMIAcgCIABAIIABAKIgCALQgBAGgEAGQgEAEgHAEIAKANIAJAPIAHALg");
	this.shape_34.setTransform(-77.1,-63.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AACAtIAAguIgBgJQgBgCgBgCQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKACAGADQAGAEACAIQACAHAAANIAAAxg");
	this.shape_35.setTransform(-85.3,-63.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgdAOIgGgdIgHgbIAZgCIAGAeIAEAiIAFgBIAFgBQAJgCAFgFQAFgGAAgJQAAgHgEgEQgEgFgHAAIgGABIgDABIADgZIAGgBIAGAAQAJgBAGAEQAGADADAFQAEAFABAHIABANQAAALgDAJQgEAJgGAGQgGAGgHADQgGADgHACIgQADIgMACIgFggg");
	this.shape_36.setTransform(-92.8,-63.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AACAtIAAguIgBgJQgBgCgBgCQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKACAGADQAGAEACAIQACAHAAANIAAAxg");
	this.shape_37.setTransform(-100.8,-63.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAAAUIAGAAIAJgBIAJAAIAAgLQAAgIgBgEQgBgHgEgEQgCgEgIAAQgGAAgDAEQgDADgDAGIgDAIIgCANIgEAOIgCAPIgVAAIACgNIACgOIADgLIABgIQAAgHgDgEQgDgEgHgBIAEgaQALABAHAGQAGAFACAIIAFgJQAEgEAFgDQAGgEAIAAQAMAAAHAHQAHAIACALQADAMAAANIAAANIgBAFIgBAIIgBAHIAAAEIggAAIgJAAIgFABg");
	this.shape_38.setTransform(-108.6,-63.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAOIgGgdIgHgbIAZgCIAGAeIAEAiIAFgBIAFgBQAJgCAFgFQAFgGAAgJQAAgHgEgEQgEgFgHAAIgGABIgDABIADgZIAGgBIAGAAQAJgBAGAEQAGADADAFQAEAFABAHIABANQAAALgDAJQgEAJgGAGQgGAGgHADQgGADgHACIgQADIgMACIgFggg");
	this.shape_39.setTransform(-118.5,-63.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgKAYIAHgNQADgGAAgDQAAgBAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgHgDIgFgBIgFgBIAEgZIAEABIAGACQAJACAGADQAGACACAGQACAEAAAHQAAAIgEAKQgEAKgHAJg");
	this.shape_40.setTransform(-125.9,-64.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AACAtIAAguIgBgJQgBgCgBgCQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKACAGADQAGAEACAIQACAHAAANIAAAxg");
	this.shape_41.setTransform(-131.4,-63.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgnAUIAFAAIAFgBIACAAIAAgIIAAgLIgBgKIgBgIIgEAAIgDgBIgDgBIAEgYIAGABIALAAIAMAAIAUAAQAOAAAGACQAGADACAIQACAHAAAMIAAA3IgWAAIAAguQABgJgDgEQgCgEgHABIgTAAIABAIIAAAKIABALIAAAIIgDAZIgSAAIgGAAIgGABIgEAAg");
	this.shape_42.setTransform(-139.3,-63.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgFAXIAGgNQADgHAAgDQAAgFgCgCIgHgCIgGgCIgEgCIACgOIAEACIAGABQAKACAFAFQAFAEgBAJQAAAGgDAIQgEAJgFAJg");
	this.shape_43.setTransform(-149.8,-64.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_44.setTransform(-154.8,-63.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAKAsIgBgLIAAgOIAAgQIAAgNIAAgJIABgFIABgEIgcAAIgLAAIgHgBIADgOIAIABIAOAAIAuAAIgCAOIgHAAQgDAAgCADQgBAEgBAIIABATIAAAUIABASg");
	this.shape_45.setTransform(-161.7,-63.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRAuQALgDAIgHQAIgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIgmAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAEADACAFQACAFAAAHQAAANgFALQgEALgJAJQgIAIgHAGQgKAFgKACg");
	this.shape_46.setTransform(-169.4,-64.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgJIgCgOQgBgGgEgCQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMAAAFAEQAGAEABAHQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAOIgzAAIgIAAIgHAAIgGABg");
	this.shape_47.setTransform(-180.3,-63.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgaAvIAAgLIAWAAIAAhDIgGACIgGADIgHACIgBgLIAIgDIAJgEIAHgEIAIAAIAABSIAUAAIAAALg");
	this.shape_48.setTransform(-191.8,-63.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#69AD76").ss(2,1,1).p("A40jzQABgdAHgXQAGgWAMgRQAlg0BXAAMAs9AAAQBXAAAlA0QAMARAGAWQADAMACBVQABAnABA2IABCkQAACWiWAAIrRAAIBeCyIkNiyI+9AAQiWAAAAiWIAAkuIAAg0IAAgn");
	this.shape_49.setTransform(-47.7,-44.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#A6E0B0","#A2E0AE","#A6E0B0"],[0,0.471,1],-159.5,32.8,160.7,32.8).s().p("AIfDRI+8AAQiWAAgBiWIAAkuQACgdAGgXQAGgWAMgRQAlg0BYAAMAs7AAAQBYAAAlA0QAMARAGAWQADAMACBVIACBcIABClQgBCWiWAAIrRAAIBfCyg");
	this.shape_50.setTransform(-47.7,-44.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#FFEAAE","#FFE699","#FFEBB1"],[0,0.471,1],-158.8,4.5,158.9,4.5).s().p("AYyACQgChUgDgMIAIAAIgBC9IgChdgA40heIAIAAQgGAXgCAdg");
	this.shape_51.setTransform(-47.7,-64.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#FFEAAE","#FFE699","#FFEBB1"],[0,0.471,1],-158.8,47.2,158.9,47.2).s().p("AYtAUQgGgWgMgRIAaAAIAAAngA40AUIAAgnIAaAAQgMARgGAWg");
	this.shape_52.setTransform(-47.7,-75.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.cost2 = new cjs.Text("6", "20px 'Myriad Hebrew'");
	this.cost2.name = "cost2";
	this.cost2.textAlign = "right";
	this.cost2.lineHeight = 26;
	this.cost2.lineWidth = 59;
	this.cost2.parent = this;
	this.cost2.setTransform(61.1,29.4);

	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(80.6,38.7,1,1,0,0,0,11.3,11.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AghAaIgEgUIgEgTIgEgRIgDgNIAZgBIABAHIACAOIACAQQAHgBACgDQACgEAAgFIgBgKIgDgNIAXgBIACAJIABAMQAAAIgDAHQgDAHgHADQgGAEgMACIAAAEIABAFIABAEIAKgCIAIgCQAIgBAFgEQAFgEACgHQADgEAAgKIgBgOIgEgQIAYgBIACAKIABAPQAAARgFAKQgEALgIAHQgHAHgJADQgIAEgIACIgLABIgLABIgIABIgDgTg");
	this.shape_53.setTransform(71.2,12);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AACAtIgBgPIAAgQIgBgNIABgMQABgEACgCIgXAAIgKgBIgHgBIAEgYIAJAAIASAAIAqAAIgEAaIgDAAQgFAAgCACQgCADABAGIAAAaIABAZg");
	this.shape_54.setTransform(61.8,11.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AANAtIAAgvQAAgIgDgFQgCgDgHABIgRAAIgKgBIgHgBIAEgYIAJAAIASAAIAGAAQAOAAAGADQAGADADAHQABAIAAAMIAAA3g");
	this.shape_55.setTransform(53.5,11.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AACAtIAAguIgBgIQgBgDgBgCQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKABAGAEQAGAEACAHQACAIAAANIAAAxg");
	this.shape_56.setTransform(46.5,11.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgYASQAJAAAHgCQAGgDACgFQADgEAAgFIAAgDQAAgGgCgDQgCgCgHgCIgJgCIgGgCIAFgYIAHACIAJABQAKADAGADQAGAEACAIQACAHABANIABARIABASIABANIgUAAIgCgFIgBgIIAAgIQgEALgHAGQgIAFgNABg");
	this.shape_57.setTransform(40.6,11.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgJAkQgEgEAAgGQAAgHAEgEQAEgEAFAAQAHAAADAEQAEAEAAAHQAAAGgEAEQgDAEgHAAQgFAAgEgEgAgJgOQgEgEAAgHQAAgGAEgEQAEgEAFAAQAHAAADAEQAEAEAAAGQAAAHgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_58.setTransform(34.7,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance},{t:this.cost2}]}).wait(4));

	// Layer 2
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(2,1,1).p("AnYk/IOxAAQBkAAAABkIAAG3QAABkhkAAIuxAAQhkAAAAhkIAAm3QAAhkBkAAg");
	this.shape_59.setTransform(54.6,30.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#8BE2FF","#00A3D9"],[0,1],25.4,8.1,0,25.4,8.1,63.2).s().p("AnYE/QhkABAAhlIAAm1QAAhlBkAAIOxAAQBkAAAABlIAAG1QAABlhkgBg");
	this.shape_60.setTransform(54.6,30.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#8BE2FF","#00A1D7"],[0.306,1],25.4,8.1,0,25.4,8.1,63.2).s().p("AnYE/QhkABAAhlIAAm1QAAhlBkAAIOxAAQBkAAAABlIAAG1QAABlhkgBg");
	this.shape_61.setTransform(54.6,30.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#8BE2FF","#009FD4"],[0.012,0.545],25.4,8.1,0,25.4,8.1,63.2).s().p("AnYE/QhkABAAhlIAAm1QAAhlBkAAIOxAAQBkAAAABlIAAG1QAABlhkgBg");
	this.shape_62.setTransform(54.6,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59}]}).to({state:[{t:this.shape_61},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_59}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-2.4,116.7,65.9);


(lib.upgrade1_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgJIgCgOQgBgFgEgDQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIABIANAAIALAAQAMAAAFADQAGAEABAHQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAOIgzAAIgIAAIgHAAIgGABg");
	this.shape.setTransform(89.5,-40.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAXIAGgOQADgFAAgEQAAgFgDgCIgGgCIgGgCIgFgCIAEgOIADABIAGACQAKACAFAFQAEAEAAAJQAAAHgDAHQgEAJgFAJg");
	this.shape_1.setTransform(83.1,-41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAGA8IAAhQIAAgLQgBgFgDgCQgDgCgGgBIgGgCIgFgCIADgOIAEABIAIACQAIACAFAEQAFADACAGQACAHAAAMIAABSg");
	this.shape_2.setTransform(78.3,-38.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgDgDgIAAIgOAAIgMAAIgGgBIACgOIAIABIAPAAIAJAAQALAAAGACQAGADADAHQACAHAAAOIAAA1g");
	this.shape_3.setTransform(68.7,-40.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAeIAHgBIAMAAIARAAIAAgKIAAgJQAAgKgCgIQgBgKgFgFQgEgGgJAAQgHAAgDADQgGADgCAFQgEADgBAGIgCAJIgDALIgEARIgCAQIgNAAIAEgRIACgSIADgNQACgMgFgGQgEgFgHgBIACgPQAKABAGAGQAFAGACAJQABgFAEgFQAEgGAGgDQAFgDAJAAQANgBAGAIQAIAGACANQADAMAAAPIAAAUIgBAEIgBAFIgBAFIgfAAIgHAAIgGAAIgEABg");
	this.shape_4.setTransform(60.1,-40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGADACAHQACAHAAAMIAAAzg");
	this.shape_5.setTransform(52.3,-40.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmAeIACAAIADgBIAHAAIADAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFgBIgDAAIADgOIAKABIAPAAIAZAAQALAAAHACQAGADACAHQACAHAAANIAAA1IgNAAIAAgwIgBgNQgBgFgDgDQgEgCgIAAIgbAAIABAJIABANIABANIAAANIAAAJIgDAOIgMAAIgJAAIgHABg");
	this.shape_6.setTransform(45,-40.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_7.setTransform(32.1,-40.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAeIAHgBIAMAAIARAAIAAgKIAAgJQAAgKgCgIQgBgKgEgFQgFgGgKAAQgGAAgDADQgFADgEAFQgCADgCAGIgDAJIgCALIgDARIgEAQIgMAAIADgRIAEgSIACgNQABgMgDgGQgFgFgIgBIAEgPQAJABAFAGQAGAGABAJQACgFAEgFQAEgGAHgDQAFgDAIAAQANgBAHAIQAGAGADANQACAMABAPIAAAUIgBAEIgBAFIgBAFIggAAIgGAAIgFAAIgGABg");
	this.shape_8.setTransform(22.1,-40.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAfIAFgBIAJAAIAKAAIAhAAIAAgdQABgIgDgFQgCgGgGgDQgFgDgJgCIgKgBIgIgBIgDAHIgBAGQAAAEADADQADADAKABIgEANQgNgCgGgGQgFgEABgJQAAgFACgGIADgLIAFgKIAIACIAQACQALACAJAEQAIADAEAIQAEAIAAAOIAAAgIAAADIgCAGIgBAEIgwAAIgIAAIgJAAIgFABg");
	this.shape_9.setTransform(12.6,-40.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgIAGQgJAFgKACg");
	this.shape_10.setTransform(4.2,-41.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_11.setTransform(-3.5,-40.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGADACAHQACAHAAAMIAAAzg");
	this.shape_12.setTransform(-10.3,-40.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnAeIADAAIAEgBIAGAAIADAAIAAgOIgBgQIgBgQIgBgLIgBAAIgDAAIgFgBIgEAAIADgOIALABIAOAAIAaAAQALAAAGACQAGADADAHQACAHAAANIAAA1IgMAAIAAgwIgBgNQgCgFgEgDQgDgCgHAAIgbAAIAAAJIABANIAAANIABANIAAAJIgCAOIgNAAIgJAAIgHABg");
	this.shape_13.setTransform(-17.6,-40.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGAjQgDgCAAgFQAAgEADgDQADgCADgBQAEABADACQADACAAAFQAAAFgDACQgDADgEAAQgEAAgCgDgAgGgUQgDgDAAgEQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_14.setTransform(-27.9,-39.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAqQgHgGgFgLQgEgLAAgOQAAgOAFgLQAEgKAIgGQAIgGAJAAQAKAAAGAEQAHAEAEAHQAEAGACAJQACAIAAAJQAAANgEALQgEALgHAHQgIAGgMAAQgKAAgIgGgAgPgaQgGAJAAARQAAAKADAIQACAJAFAFQAFAEAHAAQAHAAAEgFQAFgEACgJQACgIAAgKQAAgRgFgJQgGgJgKAAQgJAAgGAJg");
	this.shape_15.setTransform(-34.3,-40.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggAvIAAgIIAKgIIATgOQAHgIAGgIQAEgHAAgIQABgJgFgFQgEgGgKAAQgHAAgFACQgGADgFAEIgFgLQAGgFAHgDQAIgCAJAAQAKgBAIAFQAGAFADAGQADAIAAAHQAAAJgDAHQgEAGgGAHIgNANIgLAKIAJAAIANAAIAUAAIAAALg");
	this.shape_16.setTransform(-42.4,-40.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_17.setTransform(-49.1,-40.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRArQgIgGgEgJQgEgKAAgMQAAgNAEgKQAFgKAHgHQAHgGAJgEQAJgDAKAAIAEAAIAEAAIgBANIgEgBIgDAAQgRAAgIAJQgLAJgCAPQAFgGAGgDQAHgDAGAAQALAAAGAEQAGAEAEAGQADAHAAAJQAAAIgEAHQgDAIgIAEQgHAFgLAAQgKAAgIgFgAgLAAQgGAEgDAFQAAAHADAHQACAGAFADQAFAEAHAAQAIAAAGgFQAFgGAAgJQAAgFgCgEQgCgFgFgCQgEgCgGAAQgHAAgGACg");
	this.shape_18.setTransform(-55.7,-40.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbAvIAAgLIAXAAIAAhDIgGACIgGADIgGACIgCgLIAJgDIAIgEIAGgEIAJAAIAABSIAUAAIAAALg");
	this.shape_19.setTransform(-63.9,-40.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfAeIAIgBIANAAIAeAAIABgJIACgLIAAgJQAAgKgCgHQgCgGgFgDQgFgCgIAAIgOAAIgMAAIgGgBIADgOIAHABIANAAIAMAAQANAAAHADQAHAFACAJQADAJgBAPQAAAMgBAMIgEAUIgrAAIgIAAIgHAAIgGABg");
	this.shape_20.setTransform(-75.9,-40.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgEAeIAGgBIAMAAIARAAIAAgKIAAgJQAAgKgBgIQgCgKgFgFQgEgGgKAAQgGAAgEADQgEADgEAFQgDADgBAGIgCAJIgEALIgCARIgDAQIgNAAIAEgRIADgSIACgNQABgMgDgGQgFgFgHgBIADgPQAJABAGAGQAFAGABAJQACgFAEgFQAEgGAGgDQAGgDAJAAQAMgBAHAIQAGAGADANQADAMgBAPIAAAUIAAAEIgBAFIgBAFIggAAIgGAAIgGAAIgFABg");
	this.shape_21.setTransform(-85.1,-40.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGADACAHQACAHAAAMIAAAzg");
	this.shape_22.setTransform(-92.9,-40.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgnAeIADAAIAEgBIAHAAIACAAIAAgOIgBgQIgBgQIgBgLIAAAAIgEAAIgFgBIgEAAIAEgOIAKABIAOAAIAaAAQAMAAAFACQAGADADAHQACAHAAANIAAA1IgNAAIAAgwIAAgNQgBgFgFgDQgDgCgIAAIgbAAIABAJIABANIAAANIABANIAAAJIgDAOIgMAAIgJAAIgHABg");
	this.shape_23.setTransform(-100.2,-40.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_24.setTransform(-113.1,-40.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAeIAHgBIAMAAIARAAIAAgKIAAgJQAAgKgCgIQgBgKgFgFQgEgGgJAAQgHAAgDADQgGADgCAFQgEADgBAGIgCAJIgDALIgEARIgCAQIgNAAIAEgRIACgSIADgNQACgMgFgGQgEgFgHgBIACgPQAKABAGAGQAFAGACAJQABgFAEgFQAEgGAGgDQAFgDAJAAQANgBAGAIQAIAGACANQADAMAAAPIAAAUIgBAEIgBAFIgBAFIgfAAIgHAAIgGAAIgEABg");
	this.shape_25.setTransform(-123.1,-40.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAPIgFgdIgGgcIAOgBIAGAhIAHAnIAFAAIAHgBQANgDAIgJQAHgIAAgNQAAgMgFgGQgGgGgJAAIgIABIgGACIAEgPIAGgCIAHgBQAKAAAGAFQAIAFACAIQAEAIAAAKQAAAMgEAJQgEAJgGAGQgGAGgHADQgHADgHACIgMACIgKABIgGgeg");
	this.shape_26.setTransform(-132.6,-40.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgJIgCgOQgBgFgEgDQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIABIANAAIALAAQAMAAAFADQAGAEABAHQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAOIgzAAIgIAAIgHAAIgGABg");
	this.shape_27.setTransform(-141.3,-40.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkAgIAMgCIAMgCIAJgCIgGgQIgIgTIgKgUIgJgQIARgBIAHAOIAIASIAGASIAGASQAIgEAFgIQAFgIAAgOIgBgKIgCgMIgEgLIAQgCIADANIABASQAAAMgDAJQgCAKgHAIQgHAIgNAFQgGADgHACIgQAEIgQADg");
	this.shape_28.setTransform(-150.1,-39.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGADACAHQACAHAAAMIAAAzg");
	this.shape_29.setTransform(-157.4,-40.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmAeIACAAIADgBIAHAAIADAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFgBIgDAAIADgOIAKABIAPAAIAZAAQALAAAHACQAGADACAHQACAHAAANIAAA1IgNAAIAAgwIgBgNQgBgFgDgDQgEgCgIAAIgbAAIABAJIABANIABANIAAANIAAAJIgDAOIgMAAIgJAAIgHABg");
	this.shape_30.setTransform(-164.7,-40.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAXIAHgOQADgFAAgEQAAgFgDgCIgHgCIgFgCIgFgCIADgOIAFABIAFACQAKACAFAFQAEAEABAJQgBAHgDAHQgDAJgHAJg");
	this.shape_31.setTransform(-175.1,-41.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_32.setTransform(-180.1,-40.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAJAsIAAgLIAAgOIgBgQIAAgNIAAgJIACgFIACgEIgdAAIgMAAIgGgBIADgOIAIABIAOAAIAuAAIgDAOIgGAAQgDAAgCADQgBAEAAAIIAAATIABAUIAAASg");
	this.shape_33.setTransform(-186.9,-40.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgIAGQgJAFgKACg");
	this.shape_34.setTransform(-194.7,-41.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgJIgCgOQgBgFgEgDQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIABIANAAIALAAQAMAAAFADQAGAEABAHQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAOIgzAAIgIAAIgHAAIgGABg");
	this.shape_35.setTransform(-205.5,-40.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAqQgHgGgFgLQgEgLAAgOQAAgOAFgLQAEgKAIgGQAIgGAJAAQAKAAAGAEQAHAEAEAHQAEAGACAJQACAIAAAJQAAANgEALQgEALgHAHQgIAGgMAAQgKAAgIgGgAgPgaQgGAJAAARQAAAKADAIQACAJAFAFQAFAEAHAAQAHAAAEgFQAFgEACgJQACgIAAgKQAAgRgFgJQgGgJgKAAQgJAAgGAJg");
	this.shape_36.setTransform(-213.7,-40.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTAtQgHgCgGgEIAFgMQAGAEAGACQAGADAJAAQAGAAAFgCQAFgDACgDQACgEgBgDQABgHgGgFQgFgFgMAAIgLAAIAAgLIAKAAQALAAAEgEQAGgEgBgGQAAgDgBgEQgDgDgDgCQgEgCgGAAQgHAAgHACQgFACgFADIgEgLQAFgDAHgDQAHgCAKAAQAKAAAGADQAHADADAGQADAFAAAHQAAAGgCAEQgCAEgEADIgIAEIAAAAQAFABAEACQAFADADAFQADAEAAAIQAAAIgEAGQgFAGgHAEQgHADgKAAQgMAAgHgDg");
	this.shape_37.setTransform(-221.9,-40.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgFgEgCQgDgDgHAAIgOAAIgLAAIgHgBIADgOIAIABIANAAIALAAQAMAAAFADQAGADABAIQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAPIgzAAIgIAAIgHAAIgGAAg");
	this.shape_38.setTransform(85.5,-61.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFAXIAGgOQADgGAAgEQAAgDgDgDIgGgDIgGgBIgFgCIAEgOIADABIAGACQAKACAFAEQAEAFAAAJQAAAHgDAHQgEAJgFAJg");
	this.shape_39.setTransform(79,-63.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAGA8IAAhQIAAgLQgBgFgDgBQgDgDgGgCIgGgBIgFgCIADgOIAEABIAIADQAIABAFADQAFADACAHQACAGAAAMIAABTg");
	this.shape_40.setTransform(74.2,-60);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgDgDgIAAIgOAAIgMAAIgGgBIACgOIAIABIAPAAIAJAAQALAAAGACQAGADADAHQACAHAAAOIAAA1g");
	this.shape_41.setTransform(64.6,-61.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFAfIAHgCIAMAAIARAAIAAgKIAAgJQAAgKgBgJQgCgJgFgFQgEgFgJgBQgHAAgDADQgGADgCAEQgEAFgBAEIgCAJIgDAMIgEARIgCAQIgNAAIAEgSIACgRIADgNQACgMgFgFQgEgGgHgBIACgQQAKACAGAGQAFAGACAJQABgFAEgFQAEgGAGgDQAFgDAJgBQANAAAGAHQAIAIACALQADANAAAOIAAAVIgBAEIgBAGIgBAEIgfAAIgHAAIgGAAIgEAAg");
	this.shape_42.setTransform(56,-61.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAGAtIAAgyIAAgKQgBgFgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_43.setTransform(48.3,-61.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgmAeIACgBIADAAIAHAAIADAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFgBIgDAAIADgOIAKABIAPAAIAZAAQALgBAHADQAGADACAGQACAIAAAOIAAA1IgNAAIAAgxIgBgNQgBgFgDgCQgEgDgIAAIgbAAIABAJIABANIABANIAAANIAAAJIgDAPIgMAAIgJAAIgHAAg");
	this.shape_44.setTransform(40.9,-61.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_45.setTransform(28.1,-61.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAfIAHgCIAMAAIARAAIAAgKIAAgJQAAgKgCgJQgBgJgEgFQgFgFgKgBQgGAAgDADQgFADgDAEQgDAFgCAEIgDAJIgCAMIgDARIgEAQIgMAAIADgSIAEgRIACgNQABgMgDgFQgFgGgIgBIAEgQQAJACAFAGQAGAGABAJQACgFAEgFQAEgGAHgDQAFgDAIgBQANAAAHAHQAGAIADALQACANABAOIAAAVIgBAEIgBAGIgBAEIggAAIgGAAIgFAAIgGAAg");
	this.shape_46.setTransform(18.1,-61.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AghAfIAFgBIAJAAIAKAAIAhAAIAAgdQABgIgDgFQgCgGgGgDQgFgDgJgCIgKgBIgIgBIgDAHIgBAGQAAAEADADQADADAKABIgEANQgNgCgGgGQgFgEABgJQAAgFACgGIADgLIAFgKIAIACIAQACQALACAJAEQAIADAEAIQAEAIAAAOIAAAgIAAADIgCAGIgBAEIgwAAIgIAAIgIAAIgGABg");
	this.shape_47.setTransform(8.6,-61.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgIAGQgJAFgKACg");
	this.shape_48.setTransform(0.2,-63.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_49.setTransform(-7.5,-61.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAGAtIAAgyIAAgKQgBgFgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_50.setTransform(-14.3,-61.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgnAeIADgBIAEAAIAGAAIADAAIAAgOIgBgQIgBgQIgBgLIgBAAIgDAAIgFgBIgEAAIADgOIALABIAOAAIAaAAQALgBAGADQAGADADAGQACAIAAAOIAAA1IgMAAIAAgxIgBgNQgCgFgEgCQgDgDgHAAIgbAAIAAAJIABANIAAANIABANIAAAJIgCAPIgNAAIgJAAIgHAAg");
	this.shape_51.setTransform(-21.7,-61.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgGAjQgDgDAAgDQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAADgDADQgDADgEAAQgEAAgCgDgAgGgUQgDgDAAgEQAAgEADgDQADgDADAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgCgDg");
	this.shape_52.setTransform(-31.9,-60.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgTAtQgHgDgGgEIAEgMQAGAEAHADQAGACAIAAQAHAAAGgCQAEgEACgDQACgFAAgEQAAgFgDgDQgBgFgHgEQgGgBgJAAIgMABIgIAAIAAgDIAHgrIAwAAIgBAMIgmAAIgDAWIAEgBIAHAAQALAAAJAEQAIAFAEAFQADAGAAAJQAAAJgEAHQgEAHgJAFQgIADgKAAQgKABgHgDg");
	this.shape_53.setTransform(-38.3,-61.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgaAvIAAgLIAWAAIAAhDIgGACIgGADIgHACIgBgLIAIgDIAJgEIAHgEIAIAAIAABSIAUAAIAAALg");
	this.shape_54.setTransform(-46.5,-61.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_55.setTransform(-53.1,-61.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgSAqQgHgGgFgLQgEgLAAgOQAAgOAFgLQAEgKAIgGQAIgGAJAAQAKAAAGAEQAHAEAEAHQAEAGACAJQACAIAAAJQAAANgEALQgEALgHAHQgIAGgMAAQgKAAgIgGgAgPgaQgGAJAAARQAAAKADAIQACAJAFAFQAFAEAHAAQAHAAAEgFQAFgEACgJQACgIAAgKQAAgRgFgJQgGgJgKAAQgJAAgGAJg");
	this.shape_56.setTransform(-59.8,-61.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgbAvIAAgLIAXAAIAAhDIgGACIgGADIgGACIgCgLIAJgDIAIgEIAGgEIAJAAIAABSIAUAAIAAALg");
	this.shape_57.setTransform(-67.9,-61.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgfAdIAIAAIANAAIAeAAIABgJIACgKIAAgKQAAgLgCgFQgCgHgFgCQgFgDgIAAIgOAAIgMAAIgGgBIADgOIAHABIANAAIAMAAQANAAAHADQAHAFACAJQADAJgBAPQAAAMgBAMIgEAVIgrAAIgIAAIgHAAIgGAAg");
	this.shape_58.setTransform(-80,-61.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgEAfIAGgCIAMAAIARAAIAAgKIAAgJQAAgKgBgJQgCgJgFgFQgEgFgKgBQgGAAgEADQgEADgEAEQgDAFgBAEIgCAJIgEAMIgCARIgDAQIgNAAIAEgSIADgRIACgNQABgMgDgFQgFgGgHgBIADgQQAJACAGAGQAFAGABAJQACgFAEgFQAEgGAGgDQAGgDAJgBQAMAAAHAHQAGAIADALQADANgBAOIAAAVIAAAEIgBAGIgBAEIggAAIgGAAIgGAAIgFAAg");
	this.shape_59.setTransform(-89.2,-61.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAGAtIAAgyIAAgKQgBgFgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_60.setTransform(-96.9,-61.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgnAeIADgBIAEAAIAHAAIACAAIAAgOIgBgQIgBgQIgBgLIAAAAIgEAAIgFgBIgEAAIAEgOIAKABIAOAAIAaAAQAMgBAFADQAGADADAGQACAIAAAOIAAA1IgNAAIAAgxIAAgNQgBgFgFgCQgDgDgIAAIgbAAIABAJIABANIAAANIABANIAAAJIgDAPIgMAAIgJAAIgHAAg");
	this.shape_61.setTransform(-104.3,-61.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_62.setTransform(-117.1,-61.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgFAfIAHgCIAMAAIARAAIAAgKIAAgJQAAgKgCgJQgBgJgFgFQgEgFgJgBQgHAAgDADQgGADgCAEQgEAFgBAEIgCAJIgDAMIgEARIgCAQIgNAAIAEgSIACgRIADgNQACgMgFgFQgEgGgHgBIACgQQAKACAGAGQAFAGACAJQABgFAEgFQAEgGAGgDQAFgDAJgBQANAAAGAHQAIAIACALQADANAAAOIAAAVIgBAEIgBAGIgBAEIgfAAIgHAAIgGAAIgEAAg");
	this.shape_63.setTransform(-127.1,-61.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgcAPIgFgdIgGgcIAOgBIAGAhIAHAnIAFAAIAHgBQANgDAIgJQAHgIAAgNQAAgMgFgGQgGgGgJAAIgIABIgGACIAEgPIAGgCIAHgBQAKAAAGAFQAIAFACAIQAEAIAAAKQAAAMgEAJQgEAJgGAGQgGAGgHADQgHADgHACIgMACIgKABIgGgeg");
	this.shape_64.setTransform(-136.6,-61.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgFgEgCQgDgDgHAAIgOAAIgLAAIgHgBIADgOIAIABIANAAIALAAQAMAAAFADQAGADABAIQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAPIgzAAIgIAAIgHAAIgGAAg");
	this.shape_65.setTransform(-145.3,-61.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgkAgIAMgCIAMgCIAJgCIgGgQIgIgTIgKgUIgJgQIARgBIAHAOIAIASIAGASIAGASQAIgEAFgIQAFgIAAgOIgBgKIgCgMIgEgLIAQgCIADANIABASQAAAMgDAJQgCAKgHAIQgHAIgNAFQgGADgHACIgQAEIgQADg");
	this.shape_66.setTransform(-154.2,-61.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAGAtIAAgyIAAgKQgBgFgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_67.setTransform(-161.4,-61.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgmAeIACgBIADAAIAHAAIADAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFgBIgDAAIADgOIAKABIAPAAIAZAAQALgBAHADQAGADACAGQACAIAAAOIAAA1IgNAAIAAgxIgBgNQgBgFgDgCQgEgDgIAAIgbAAIABAJIABANIABANIAAANIAAAJIgDAPIgMAAIgJAAIgHAAg");
	this.shape_68.setTransform(-168.8,-61.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGAXIAHgOQADgGAAgEQAAgDgDgDIgHgDIgFgBIgFgCIADgOIAFABIAFACQAKACAFAEQAEAFABAJQgBAHgDAHQgDAJgHAJg");
	this.shape_69.setTransform(-179.1,-63.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_70.setTransform(-184.1,-61.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAJAsIAAgLIAAgOIgBgQIAAgNIAAgJIACgFIACgEIgdAAIgMAAIgGgBIADgOIAIABIAOAAIAuAAIgDAOIgGAAQgDAAgCADQgBAEAAAIIAAATIABAUIAAASg");
	this.shape_71.setTransform(-191,-61.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgIAGQgJAFgKACg");
	this.shape_72.setTransform(-198.7,-63.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgFgEgCQgDgDgHAAIgOAAIgLAAIgHgBIADgOIAIABIANAAIALAAQAMAAAFADQAGADABAIQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAPIgzAAIgIAAIgHAAIgGAAg");
	this.shape_73.setTransform(-209.6,-61.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTAtQgIgDgFgEIAEgMQAGAEAGADQAIACAHAAQAIAAAEgCQAFgEACgDQACgFAAgEQAAgFgDgDQgBgFgHgEQgFgBgLAAIgLABIgIAAIAAgDIAHgrIAwAAIgBAMIgmAAIgEAWIAFgBIAHAAQALAAAJAEQAIAFADAFQAEAGAAAJQAAAJgEAHQgFAHgHAFQgJADgKAAQgJABgIgDg");
	this.shape_74.setTransform(-217.7,-61.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgGgEgCQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMABAFADQAGADABAIQACAHAAALIAAAaIAAAEIAAAFIgBAEIAMAAIgDAPIgzAAIgIAAIgHAAIgGAAg");
	this.shape_75.setTransform(77.3,-82.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgGAXIAHgNQADgHAAgEQAAgEgCgBIgIgEIgFgBIgEgCIACgOIAFACIAFABQAKACAFAFQAFAEAAAJQgBAGgDAJQgEAIgGAJg");
	this.shape_76.setTransform(70.9,-84.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAGA8IAAhQIAAgLQgBgEgDgCQgDgDgGgCIgGgCIgFgBIADgOIAEACIAIACQAIABAFADQAFAEACAGQACAGAAANIAABSg");
	this.shape_77.setTransform(66.1,-81.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgEgDgHAAIgPAAIgLAAIgHgBIAEgOIAHABIAOAAIAJAAQAMAAAGACQAGADACAHQACAHAAAOIAAA1g");
	this.shape_78.setTransform(56.5,-82.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEAfIAGgBIAMAAIARAAIAAgKIAAgKQAAgKgCgJQgBgIgEgGQgFgFgKgBQgGAAgDADQgFADgEAEQgDAFgBAEIgDAJIgDANIgCAQIgEAQIgMAAIADgSIAEgRIACgNQACgMgEgGQgFgFgIgCIAEgOQAJABAFAGQAGAFABAKQACgFAEgFQAEgFAHgEQAEgDAKAAQAMAAAHAGQAGAIADALQACAMABAQIAAAUIgBADIgBAHIgBAEIggAAIgGAAIgFAAIgGAAg");
	this.shape_79.setTransform(47.9,-82.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgBIADgPIAEACIAHABQAIACAFAEQAGACACAHQACAHAAAMIAAA0g");
	this.shape_80.setTransform(40.1,-82.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgnAeIADgBIAEAAIAGAAIADAAIAAgOIgBgQIgBgQIgBgLIgBAAIgDAAIgFAAIgEgBIADgOIALAAIAOAAIAaAAQALABAHACQAFACADAIQACAHAAAOIAAA1IgMAAIAAgxIgBgNQgCgFgEgDQgDgCgHAAIgbAAIAAAJIABAMIAAAOIABANIAAAJIgCAPIgNAAIgJAAIgHAAg");
	this.shape_81.setTransform(32.8,-82.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_82.setTransform(19.9,-82.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEAfIAGgBIAMAAIARAAIAAgKIAAgKQAAgKgBgJQgCgIgFgGQgEgFgJgBQgHAAgEADQgEADgEAEQgCAFgCAEIgCAJIgEANIgCAQIgDAQIgNAAIAEgSIACgRIADgNQABgMgEgGQgEgFgHgCIACgOQAKABAGAGQAFAFABAKQACgFAEgFQAEgFAGgEQAGgDAJAAQAMAAAHAGQAGAIADALQACAMAAAQIAAAUIAAADIgBAHIgBAEIgfAAIgHAAIgGAAIgEAAg");
	this.shape_83.setTransform(9.9,-82.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AghAfIAGgBIAJAAIAJAAIAiAAIAAgdQAAgIgDgFQgCgGgFgDQgGgDgJgCIgKgBIgHgBIgEAHIgBAGQAAAEADADQADADAJABIgDANQgNgCgFgGQgGgEAAgJQAAgFACgGIAFgLIAEgKIAIACIAPACQAMACAJAEQAIADAEAIQAEAIAAAOIAAAgIgBADIAAAGIgBAEIgxAAIgJAAIgIAAIgFABg");
	this.shape_84.setTransform(0.4,-82.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgRAuQALgDAIgHQAIgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIglAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAEADACAFQACAFAAAHQAAANgFALQgEALgJAJQgHAIgJAGQgJAFgKACg");
	this.shape_85.setTransform(-8,-84.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_86.setTransform(-15.7,-82.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgBIADgPIAEACIAHABQAIACAFAEQAGACACAHQACAHAAAMIAAA0g");
	this.shape_87.setTransform(-22.5,-82.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgnAeIADgBIADAAIAIAAIACAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFAAIgEgBIAEgOIAKAAIAPAAIAZAAQAMABAFACQAHACACAIQACAHAAAOIAAA1IgNAAIAAgxIgBgNQgBgFgDgDQgEgCgIAAIgbAAIABAJIABAMIAAAOIABANIAAAJIgDAPIgMAAIgJAAIgHAAg");
	this.shape_88.setTransform(-29.8,-82.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgGAkQgDgDABgFQgBgEADgDQADgDADAAQAFAAACADQACADAAAEQAAAFgCADQgCACgFAAQgDAAgDgCgAgGgUQgDgDABgEQgBgEADgDQADgDADAAQAFAAACADQACADAAAEQAAAEgCADQgCACgFABQgDgBgDgCg");
	this.shape_89.setTransform(-40.1,-82);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgUAwIgEAAIAAgMIADAAIADAAQAMAAAHgEQAJgFAEgHQAFgHACgJQgEAFgHADQgGADgGAAQgKAAgHgEQgHgEgDgHQgEgGAAgJQAAgJAEgHQAEgHAIgFQAHgEAKAAQALAAAHAFQAIAFAEAKQAEAKAAANQAAAMgEAKQgFAKgHAHQgHAHgJADQgIADgLAAIgDAAgAgLghQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAEACAHAAQAHAAAFgDQAFgCAEgFQAAgIgDgGQgCgGgFgEQgFgEgGAAQgHAAgEACg");
	this.shape_90.setTransform(-46.5,-83.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_91.setTransform(-53.1,-82.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgbAvIAAgLIAXAAIAAhDIgGACIgHADIgGACIgBgLIAIgDIAJgEIAHgEIAIAAIAABSIATAAIAAALg");
	this.shape_92.setTransform(-59.8,-83.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgfAdIAIAAIANAAIAeAAIABgJIACgLIAAgJQAAgKgCgHQgCgGgFgDQgFgCgIAAIgOAAIgMAAIgGgBIADgOIAHAAIANAAIAMAAQANAAAHAFQAHAEACAJQADAJgBAPQAAAMgBAMIgEAVIgrAAIgIAAIgHAAIgGAAg");
	this.shape_93.setTransform(-71.8,-82.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgFAfIAHgBIAMAAIARAAIAAgKIAAgKQAAgKgCgJQgBgIgEgGQgFgFgKgBQgGAAgDADQgGADgCAEQgDAFgCAEIgDAJIgCANIgEAQIgDAQIgMAAIADgSIADgRIADgNQACgMgFgGQgEgFgIgCIADgOQAKABAFAGQAGAFACAKQABgFAEgFQAEgFAHgEQAFgDAIAAQANAAAGAGQAIAIACALQACAMABAQIAAAUIgBADIgBAHIgBAEIggAAIgGAAIgFAAIgGAAg");
	this.shape_94.setTransform(-81,-82.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgBIADgPIAEACIAHABQAIACAFAEQAGACACAHQACAHAAAMIAAA0g");
	this.shape_95.setTransform(-88.8,-82.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgmAeIACgBIADAAIAHAAIADAAIgBgOIAAgQIgBgQIgBgLIgBAAIgDAAIgFAAIgDgBIACgOIALAAIAPAAIAZAAQALABAHACQAFACADAIQACAHAAAOIAAA1IgMAAIAAgxIgCgNQgBgFgDgDQgEgCgHAAIgbAAIAAAJIABAMIABAOIAAANIAAAJIgCAPIgNAAIgJAAIgHAAg");
	this.shape_96.setTransform(-96.1,-82.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_97.setTransform(-109,-82.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEAfIAGgBIAMAAIARAAIAAgKIAAgKQAAgKgBgJQgCgIgEgGQgFgFgKgBQgGAAgEADQgFADgDAEQgDAFgBAEIgDAJIgDANIgCAQIgEAQIgMAAIADgSIAEgRIACgNQACgMgEgGQgFgFgIgCIAEgOQAJABAFAGQAGAFABAKQACgFAEgFQAEgFAGgEQAFgDAKAAQAMAAAHAGQAGAIADALQADAMgBAQIAAAUIAAADIgBAHIgBAEIggAAIgGAAIgFAAIgGAAg");
	this.shape_98.setTransform(-119,-82.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgbAPIgGgdIgHgcIAQgBIAGAhIAFAnIAGAAIAHgBQANgDAIgJQAHgIAAgNQAAgMgGgGQgEgGgKAAIgIABIgGACIADgPIAGgCIAIgBQAKAAAHAFQAGAFAEAIQACAIAAAKQABAMgEAJQgEAJgGAGQgGAGgHADQgHADgGACIgNACIgLABIgEgeg");
	this.shape_99.setTransform(-128.5,-82.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgGgEgCQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMABAFADQAGADABAIQACAHAAALIAAAaIAAAEIAAAFIgBAEIAMAAIgDAPIgzAAIgIAAIgHAAIgGAAg");
	this.shape_100.setTransform(-137.2,-82.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgjAgIALgCIALgCIAKgCIgFgQIgJgTIgKgUIgJgQIARgBIAHAOIAIASIAGASIAGASQAIgEAFgIQAFgIAAgOIgBgKIgCgMIgEgLIAQgCIADANIABASQAAAMgCAJQgDAKgHAIQgHAIgNAFQgGADgHACIgQAEIgQADg");
	this.shape_101.setTransform(-146,-82.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgBIADgPIAEACIAHABQAIACAFAEQAGACACAHQACAHAAAMIAAA0g");
	this.shape_102.setTransform(-153.3,-82.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgnAeIADgBIAEAAIAHAAIACAAIAAgOIgBgQIgBgQIgBgLIgBAAIgDAAIgFAAIgEgBIADgOIALAAIAOAAIAaAAQAMABAFACQAGACADAIQACAHAAAOIAAA1IgMAAIAAgxIgBgNQgBgFgFgDQgDgCgIAAIgaAAIAAAJIABAMIAAAOIABANIAAAJIgCAPIgNAAIgJAAIgHAAg");
	this.shape_103.setTransform(-160.6,-82.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgFAXIAGgNQADgHAAgEQAAgEgCgBIgHgEIgGgBIgEgCIACgOIAEACIAGABQAKACAFAFQAFAEgBAJQAAAGgDAJQgEAIgFAJg");
	this.shape_104.setTransform(-171,-84.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_105.setTransform(-176,-82.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAKAsIgBgLIAAgOIAAgQIAAgNIAAgJIABgFIABgEIgcAAIgLAAIgHgBIADgOIAIABIAOAAIAuAAIgCAOIgHAAQgDAAgCADQgBAEgBAIIABATIAAAUIABASg");
	this.shape_106.setTransform(-182.8,-82.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgRAuQALgDAIgHQAIgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIgmAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAEADACAFQACAFAAAHQAAANgFALQgEALgJAJQgIAIgHAGQgKAFgKACg");
	this.shape_107.setTransform(-190.6,-84.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgGgEgCQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMABAFADQAGADABAIQACAHAAALIAAAaIAAAEIAAAFIgBAEIAMAAIgDAPIgzAAIgIAAIgHAAIgGAAg");
	this.shape_108.setTransform(-201.4,-82.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgaAvIAAgLIAWAAIAAhDIgGACIgGADIgHACIgBgLIAJgDIAIgEIAGgEIAJAAIAABSIAUAAIAAALg");
	this.shape_109.setTransform(-209.6,-83.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgFgEgDQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMABAFADQAGAEABAHQACAHAAALIAAAaIAAAEIAAAFIgBAEIAMAAIgDAPIgzAAIgIAAIgHAAIgGAAg");
	this.shape_110.setTransform(99.3,-125.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgfAdIAIAAIANAAIAeAAIABgJIACgLIAAgJQAAgLgCgGQgCgGgFgDQgFgCgIAAIgOAAIgMAAIgGgBIADgOIAHAAIANAAIAMAAQANAAAHAFQAHAEACAJQADAJgBAPQAAAMgBAMIgEAVIgrAAIgIAAIgHAAIgGAAg");
	this.shape_111.setTransform(90.6,-125.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgRAuQALgDAIgHQAIgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAEADACAFQACAFAAAHQAAANgFALQgEALgJAJQgHAIgJAGQgJAFgKACg");
	this.shape_112.setTransform(82.7,-127.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgeAcIgDgTIgEgUIgEgTIgDgMIAPgCIABAIIADAOIAEAXQAIgBAEgCQAEgEABgDQACgFAAgFIgCgMIgDgLIAOgCIADAKIABAMQAAAIgCAHQgDAGgGAEQgGAGgOACIABAFIABAHIABAHIAHgBIAKgCQAKgCAHgEQAHgFAEgHQAEgJAAgMIgCgQIgEgOIAPgBIADALIABARQAAAPgEAJQgEAKgGAHQgHAGgJAEQgIADgJACIgOADIgLABIgDgRg");
	this.shape_113.setTransform(70.6,-125.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAKAsIgBgLIAAgOIAAgQIAAgNIAAgJIABgFIABgEIgcAAIgMAAIgGgBIADgOIAIABIAOAAIAuAAIgDAOIgGAAQgDAAgCADQgBAEAAAIIAAATIAAAUIABASg");
	this.shape_114.setTransform(61.4,-125.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgDgDgIAAIgOAAIgMAAIgGgBIACgOIAIABIAPAAIAJAAQALAAAGACQAGADADAHQACAHAAAOIAAA1g");
	this.shape_115.setTransform(53.5,-125.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_116.setTransform(47.2,-125.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_117.setTransform(42,-125.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AggAUIAGAAIAIgBIAJAAIAYAAIABgJIAAgKQAAgHgCgEQgBgEgEgBQgEgCgGAAIgNAAIgMAAIgHgBIAEgZIAIABIANAAIALAAQAOAAAHAEQAIAEADAJQACAJAAAQQAAALgBALIgEAXIgtAAIgJAAIgIAAIgGABg");
	this.shape_118.setTransform(31.3,-125.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAAAUIAGAAIAJgBIAJAAIAAgLQAAgHgBgGQgBgGgEgEQgCgEgIAAQgGAAgDAEQgDADgDAGIgDAIIgCAMIgEAPIgCAQIgVAAIACgOIACgNIADgNIABgHQAAgHgDgFQgDgDgHgBIAEgaQALABAHAGQAGAFACAIIAFgJQAEgEAFgEQAGgDAIAAQAMAAAHAHQAHAIADALQACAMAAANIAAANIgBAFIgBAHIgBAIIAAAFIggAAIgJAAIgFAAg");
	this.shape_119.setTransform(21.9,-125.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AACAtIAAguIgBgJQgBgDgBgBQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKABAGAEQAGAEACAHQACAIAAANIAAAxg");
	this.shape_120.setTransform(13.7,-125.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgmAUIADAAIAHgBIABAAIAAgIIAAgLIgBgKIgBgIIgEgBIgDAAIgDgBIAEgYIAHAAIAKABIAMgBIAVAAQANABAGADQAGADACAHQACAHAAAMIAAA3IgWAAIAAguQABgJgDgEQgCgDgIAAIgSAAIAAAIIABAKIAAALIAAAIIgCAZIgSAAIgGAAIgGAAIgEABg");
	this.shape_121.setTransform(5.8,-125.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AASAtIAAgsIAAgLQgBgEgDgCQgCgCgGABIgZAAIgMgBIgHgBIADgYIAKAAIARAAIASAAQANAAAGAEQAHADACAJQACAIgBAMIAAA0gAgjAtIAAgrIAVAAIAAArg");
	this.shape_122.setTransform(-7.2,-125.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAAAUIAGAAIAJgBIAJAAIAAgLQAAgHgBgGQgBgGgEgEQgDgEgGAAQgHAAgCAEQgFADgCAGIgCAIIgEAMIgDAPIgCAQIgVAAIADgOIABgNIACgNIABgHQABgHgDgFQgDgDgHgBIAEgaQAMABAFAGQAHAFACAIIAFgJQAEgEAFgEQAFgDAJAAQAMAAAHAHQAGAIAEALQACAMAAANIAAANIAAAFIgCAHIgBAIIAAAFIggAAIgJAAIgFAAg");
	this.shape_123.setTransform(-17.1,-125.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgdAOIgGgcIgHgcIAZgCIAGAeIAEAiIAFgBIAFgBQAJgCAFgFQAFgGAAgIQAAgIgEgEQgEgEgHgBIgGABIgDABIADgZIAGgBIAGgBQAJAAAGAEQAGADADAGQAEAFABAGIABANQAAAMgDAIQgEAJgGAGQgGAFgHAEQgGADgHACIgQADIgMABIgFgfg");
	this.shape_124.setTransform(-27,-125.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgjAUIAIAAIAJgBIAIAAIAUAAIAAgIIAAgIIAAgHIgCgIQgBgDgDgCIgHgBIgPAAIgLAAIgHgBIAEgZIAIABIAPAAIANAAQALAAAGADQAFADACAIQACAHAAANIAAAKIAAAEIAAAFIAAAGIgBADIALAAIgEAZIg0AAIgIAAIgJAAIgGABg");
	this.shape_125.setTransform(-35.9,-125.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AglAWIAOgBIAOgCIgFgNIgIgRIgKgTQgFgJgFgHIAegBIAIARIAHAVIAHAXQAFgCACgGQADgGAAgJQAAgFgCgKQgBgKgFgMIAbgBIADAMIABAQIgBAQQgBAGgDAHQgDAIgGAGQgGAHgKAFQgGADgIADIgTAEIgVADg");
	this.shape_126.setTransform(-45.2,-125.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AACAtIAAguIgBgJQgBgDgBgBQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKABAGAEQAGAEACAHQACAIAAANIAAAxg");
	this.shape_127.setTransform(-53,-125.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgnAUIAFAAIAGgBIABAAIAAgIIAAgLIgBgKIgBgIIgEgBIgDAAIgDgBIAEgYIAHAAIAKABIAMgBIAUAAQAOABAGADQAGADACAHQACAHAAAMIAAA3IgWAAIAAguQABgJgDgEQgCgDgIAAIgSAAIABAIIAAAKIAAALIAAAIIgCAZIgSAAIgGAAIgGAAIgEABg");
	this.shape_128.setTransform(-60.9,-125.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgSAjQAKgCAHgFQAGgEAFgGQAEgFAAgHQAAgFgCgBQgDgCgFABIgkAAIAAgeIAAgKIgBgKIgBgHIAVgDIABAGIAAAJIABALIAAAIIAYAAQAGAAAGACQAFACADAFQACAFAAAKQAAANgEAMQgFAMgJAIQgJAJgJAEQgKAGgLABg");
	this.shape_129.setTransform(-73.3,-127.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAAAUIAGAAIAJgBIAIAAIAAgLQABgHgBgGQgBgGgDgEQgEgEgHAAQgGAAgDAEQgDADgCAGIgEAIIgDAMIgCAPIgDAQIgVAAIACgOIADgNIACgNIABgHQAAgHgDgFQgDgDgHgBIAEgaQALABAHAGQAGAFACAIIAFgJQADgEAGgEQAGgDAIAAQAMAAAHAHQAGAIADALQADAMAAANIAAANIgBAFIgBAHIgBAIIgBAFIgfAAIgJAAIgFAAg");
	this.shape_130.setTransform(-82.3,-125.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgjAVIAGgBIAJAAIAIAAIAfAAIAAgSQAAgGgCgDQgBgEgEgCQgEgCgIgBIgIgCIgHgBIgBACIgBACIABADIAEACIAIACIgEAVQgPgBgGgGQgHgGAAgJIACgMIAFgLIAFgMIAKABIAPACQAKABAHADQAIACAEAEQAFAEADAHQACAHAAAMIAAAWIgBAFIgBAHIgBAHIAAAFIg0AAIgJAAIgJAAIgGAAg");
	this.shape_131.setTransform(-92.2,-125.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgSAjQAJgCAIgFQAGgEAEgGQAFgFAAgHQAAgFgCgBQgDgCgFABIgkAAIAAgeIAAgKIgBgKIgCgHIAWgDIABAGIABAJIAAALIAAAIIAYAAQAGAAAGACQAFACADAFQADAFgBAKQAAANgEAMQgGAMgIAIQgJAJgJAEQgLAGgKABg");
	this.shape_132.setTransform(-101,-127.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgcAUIAHAAIAIgBIAIAAIAQAAIgFgFIgIgJIgMgOIgJgLIgJgMIgJgKIAggCIAJAPIAMARQADgCABgDIABgHIAAgGIgCgGIgDgGIAbgCIACAGIAAAHQAAAGgBAGQgCAGgFAFQgEAFgIADIAMAPIAJAJIgFAUIgsAAIgKAAIgKAAIgHABg");
	this.shape_133.setTransform(-109.5,-125.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgmAUIADAAIAHgBIABAAIAAgIIAAgLIgBgKIgBgIIgEgBIgDAAIgDgBIAEgYIAHAAIAKABIAMgBIAVAAQANABAGADQAGADACAHQACAHAAAMIAAA3IgWAAIAAguQABgJgDgEQgCgDgIAAIgSAAIAAAIIABAKIAAALIAAAIIgCAZIgSAAIgGAAIgGAAIgEABg");
	this.shape_134.setTransform(-118.8,-125.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgGAXIAHgNQADgGAAgFQAAgDgCgCIgIgEIgFgBIgEgCIACgOIAFACIAFABQAKACAFAEQAFAFAAAJQgBAGgDAJQgEAIgGAJg");
	this.shape_135.setTransform(-129.4,-127.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_136.setTransform(-134.4,-125.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAJAsIAAgLIAAgOIgBgQIAAgNIAAgJIACgFIABgEIgcAAIgLAAIgHgBIADgOIAIABIAOAAIAuAAIgCAOIgHAAQgEAAgBADQgCAEAAAIIABATIAAAUIABASg");
	this.shape_137.setTransform(-141.2,-125.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgCgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgHAGQgKAFgKACg");
	this.shape_138.setTransform(-149,-127.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAbAsIgPgVIgaghQgFAGgCAIQgCAHABAIQAAAHABAGIADAMIgPAAIgCgLIgBgKQAAgMADgLQAEgJAIgKIgLgLIgLgKIABgBIARgCIAPARIAVAaQAFgDACgGQADgEAAgIIgBgKIgEgKIAQgCIACAKIABAJQAAAKgFAIQgFAIgIAEIAKANIAKAOIAHALg");
	this.shape_139.setTransform(-160.2,-125.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AASA7IAAhcIAAgHIgCgCIgEgBIgEAAIgIAAIgIAAIgEAAIgLAAIgHgBIADgOIAIABIAOAAIAaAAIAGABQACABABADIABAKIAABlg");
	this.shape_140.setTransform(-169.1,-124.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgGAXIAHgNQADgGAAgFQAAgDgDgCIgHgEIgFgBIgFgCIAEgOIADACIAGABQAKACAFAEQAEAFAAAJQAAAGgDAJQgDAIgGAJg");
	this.shape_141.setTransform(-178,-127.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgjAgIALgCIALgCIAKgCIgFgQIgJgTIgKgUIgJgQIARgBIAHAOIAIASIAGASIAGASQAIgEAFgIQAFgIAAgOIgBgKIgCgMIgEgLIAQgCIADANIABASQAAAMgDAJQgCAKgHAIQgHAIgNAFQgGADgHACIgQAEIgQADg");
	this.shape_142.setTransform(-184.5,-125.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAEADACAFQACAFAAAHQgBANgEALQgEALgJAJQgIAIgIAGQgJAFgKACg");
	this.shape_143.setTransform(-192.8,-127.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_144.setTransform(-201,-125.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgFAXIAGgNQADgGAAgFQAAgDgCgCIgHgEIgGgBIgEgCIACgOIAFACIAFABQAKACAFAEQAFAFgBAJQAAAGgDAJQgEAIgGAJg");
	this.shape_145.setTransform(-211.4,-127.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_146.setTransform(-216.2,-125.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgnAeIADgBIAEAAIAHAAIACAAIAAgOIgBgQIgBgQIgBgLIAAAAIgEAAIgFAAIgEgBIAEgOIAKAAIAOAAIAaAAQAMABAFACQAGADADAGQACAIAAAOIAAA1IgNAAIAAgxIAAgNQgBgFgFgDQgDgCgIAAIgbAAIABAJIABAMIAAAOIABANIAAAJIgDAPIgMAAIgJAAIgHAAg");
	this.shape_147.setTransform(-223.5,-125.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgDgDgIAAIgOAAIgMAAIgGgBIACgOIAIABIAPAAIAJAAQALAAAGACQAGADADAHQACAHAAAOIAAA1g");
	this.shape_148.setTransform(-232.4,-125.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#D5D555").ss(2,1,1).p("A5iqmMAzFAAAQCWAAAACWIAANvQAACWiWAAIrUAAIBeCyIkNiyMglCAAAQiWAAAAiWIAAtvQAAiWCWAAg");
	this.shape_149.setTransform(-67,-73.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#FFFF79","#FFFF67","#FFFF79"],[0,0.471,1],-178.4,0,178.5,0).s().p("ALgH1MglCAAAQiWAAAAiWIAAtuQAAiWCWgBMAzFAAAQCWABAACWIAANuQAACWiWAAIrUAAIBeCyg");
	this.shape_150.setTransform(-67,-73.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.cost1 = new cjs.Text("6", "20px 'Myriad Hebrew'");
	this.cost1.name = "cost1";
	this.cost1.textAlign = "right";
	this.cost1.lineHeight = 26;
	this.cost1.lineWidth = 59;
	this.cost1.parent = this;
	this.cost1.setTransform(61.1,29.4);

	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(80.6,38.7,1,1,0,0,0,11.3,11.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AghAaIgEgUIgEgTIgEgRIgDgNIAZgBIABAHIACAOIACAQQAHgBACgDQACgEAAgFIgBgKIgDgNIAXgBIACAJIABAMQAAAIgDAHQgDAHgHADQgGAEgMACIAAAEIABAFIABAEIAKgCIAIgCQAIgBAFgEQAFgEACgHQADgEAAgKIgBgOIgEgQIAYgBIACAKIABAPQAAARgFAKQgEALgIAHQgHAHgJADQgIAEgIACIgLABIgLABIgIABIgDgTg");
	this.shape_151.setTransform(71.2,12);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AACAtIgBgPIAAgQIgBgNIABgMQABgEACgCIgXAAIgKgBIgHgBIAEgYIAJAAIASAAIAqAAIgEAaIgDAAQgFAAgCACQgCADABAGIAAAaIABAZg");
	this.shape_152.setTransform(61.8,11.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AANAtIAAgvQAAgIgDgFQgCgDgHABIgRAAIgKgBIgHgBIAEgYIAJAAIASAAIAGAAQAOAAAGADQAGADADAHQABAIAAAMIAAA3g");
	this.shape_153.setTransform(53.5,11.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AACAtIAAguIgBgIQgBgDgBgCQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKABAGAEQAGAEACAHQACAIAAANIAAAxg");
	this.shape_154.setTransform(46.5,11.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgYASQAJAAAHgCQAGgDACgFQADgEAAgFIAAgDQAAgGgCgDQgCgCgHgCIgJgCIgGgCIAFgYIAHACIAJABQAKADAGADQAGAEACAIQACAHABANIABARIABASIABANIgUAAIgCgFIgBgIIAAgIQgEALgHAGQgIAFgNABg");
	this.shape_155.setTransform(40.6,11.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgJAkQgEgEAAgGQAAgHAEgEQAEgEAFAAQAHAAADAEQAEAEAAAHQAAAGgEAEQgDAEgHAAQgFAAgEgEgAgJgOQgEgEAAgHQAAgGAEgEQAEgEAFAAQAHAAADAEQAEAEAAAGQAAAHgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_156.setTransform(34.7,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.instance},{t:this.cost1}]}).wait(4));

	// Layer 2
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(2,1,1).p("AnYk/IOxAAQBkAAAABkIAAG3QAABkhkAAIuxAAQhkAAAAhkIAAm3QAAhkBkAAg");
	this.shape_157.setTransform(54.6,30.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.rf(["#8BE2FF","#00A3D9"],[0,1],25.4,8.1,0,25.4,8.1,63.2).s().p("AnYE/QhkABAAhlIAAm1QAAhlBkAAIOxAAQBkAAAABlIAAG1QAABlhkgBg");
	this.shape_158.setTransform(54.6,30.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.rf(["#8BE2FF","#00A1D7"],[0.306,1],25.4,8.1,0,25.4,8.1,63.2).s().p("AnYE/QhkABAAhlIAAm1QAAhlBkAAIOxAAQBkAAAABlIAAG1QAABlhkgBg");
	this.shape_159.setTransform(54.6,30.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.rf(["#8BE2FF","#009FD4"],[0.012,0.545],25.4,8.1,0,25.4,8.1,63.2).s().p("AnYE/QhkABAAhlIAAm1QAAhlBkAAIOxAAQBkAAAABlIAAG1QAABlhkgBg");
	this.shape_160.setTransform(54.6,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157}]}).to({state:[{t:this.shape_159},{t:this.shape_157}]},1).to({state:[{t:this.shape_160},{t:this.shape_157}]},1).to({state:[{t:this.shape_160},{t:this.shape_157}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-2.4,116.7,65.9);


(lib.upgrade0_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgJIgCgOQgBgGgEgCQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMAAAFAEQAGAEABAHQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAOIgzAAIgIAAIgHAAIgGABg");
	this.shape.setTransform(96.1,-39.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAXIAHgNQADgHAAgDQAAgFgDgCIgHgCIgFgCIgFgCIAEgOIAEACIAFABQAKACAFAFQAEAEABAJQgBAGgDAIQgDAJgHAJg");
	this.shape_1.setTransform(89.6,-41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAGA8IAAhQIAAgLQgBgFgDgCQgDgCgGgBIgGgDIgFgBIADgOIAEACIAIABQAIACAFAEQAFADACAGQACAHAAAMIAABSg");
	this.shape_2.setTransform(84.8,-37.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgEgDgHAAIgOAAIgMAAIgGgBIADgOIAIABIANAAIAJAAQAMAAAGACQAGADACAHQACAHABAOIAAA1g");
	this.shape_3.setTransform(75.2,-39.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAeIAGgBIAMAAIARAAIAAgJIAAgKQAAgKgBgIQgCgKgFgFQgEgGgJAAQgHAAgEADQgEADgEAFQgCADgCAGIgCAJIgEALIgDARIgCAQIgNAAIAEgRIADgSIACgNQABgMgDgGQgFgFgHgCIACgOQAKABAGAGQAFAGABAJQACgFAEgFQAEgGAGgDQAGgEAJABQAMgBAHAIQAGAGADANQACAMAAAPIAAAUIAAADIgBAGIgBAFIgfAAIgHAAIgGAAIgEABg");
	this.shape_4.setTransform(66.6,-39.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_5.setTransform(58.9,-39.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnAeIADAAIADgBIAIAAIACAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFgBIgEAAIAEgOIAKAAIAOAAIAaAAQAMAAAFADQAHACACAIQACAHAAANIAAA1IgNAAIAAgwIAAgNQgBgFgFgDQgDgCgIAAIgbAAIABAJIABAMIAAAOIABANIAAAJIgDAOIgMAAIgJAAIgHABg");
	this.shape_6.setTransform(51.5,-39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_7.setTransform(38.7,-39.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAeIAHgBIAMAAIARAAIAAgJIAAgKQAAgKgCgIQgBgKgFgFQgEgGgJAAQgHAAgDADQgGADgCAFQgDADgCAGIgCAJIgDALIgEARIgCAQIgNAAIADgRIADgSIADgNQACgMgFgGQgEgFgIgCIADgOQAKABAGAGQAFAGACAJQABgFAEgFQAEgGAHgDQAFgEAIABQANgBAGAIQAIAGACANQADAMAAAPIAAAUIgBADIgBAGIgBAFIgfAAIgHAAIgGAAIgEABg");
	this.shape_8.setTransform(28.7,-39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghAfIAFgBIAJAAIAKAAIAiAAIAAgdQgBgIgCgFQgCgGgFgDQgGgDgJgCIgKgBIgIgBIgDAHIgBAGQgBAEAEADQAEADAIABIgDANQgNgCgGgGQgFgEAAgJQABgFACgGIADgLIAFgKIAIACIAPACQAMACAJAEQAIADAEAIQAEAIAAAOIAAAgIgBADIgBAGIgBAEIgwAAIgIAAIgIAAIgGABg");
	this.shape_9.setTransform(19.2,-39.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgCgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgHAGQgKAFgKACg");
	this.shape_10.setTransform(10.8,-41.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_11.setTransform(3.1,-39.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_12.setTransform(-3.7,-39.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgmAeIACAAIADgBIAHAAIADAAIgBgOIAAgQIgBgQIgBgLIgBAAIgDAAIgFgBIgDAAIACgOIALAAIAPAAIAZAAQALAAAHADQAFACADAIQACAHAAANIAAA1IgMAAIAAgwIgCgNQgBgFgDgDQgEgCgHAAIgbAAIAAAJIABAMIABAOIAAANIAAAJIgCAOIgNAAIgJAAIgHABg");
	this.shape_13.setTransform(-11.1,-39.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGAjQgCgCgBgFQABgEACgDQADgCADgBQAEABADACQACADAAAEQAAAFgCACQgDADgEAAQgEAAgCgDgAgGgUQgCgDgBgEQABgFACgDQADgCADAAQAEAAADACQACADAAAFQAAAEgCADQgDACgEABQgEgBgCgCg");
	this.shape_14.setTransform(-21.3,-38.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAqQgHgGgFgLQgEgLAAgOQAAgOAFgLQAEgKAIgGQAIgGAJAAQAKAAAGAEQAHAEAEAHQAEAGACAJQACAIAAAJQAAANgEALQgEALgHAHQgIAGgMAAQgKAAgIgGgAgPgaQgGAJAAARQAAAKADAIQACAJAFAFQAFAEAHAAQAHAAAEgFQAFgEACgJQACgIAAgKQAAgRgFgJQgGgJgKAAQgJAAgGAJg");
	this.shape_15.setTransform(-27.7,-39.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggAvIAAgIIAKgIIATgOQAHgIAGgIQAEgHAAgIQABgJgFgFQgEgGgKAAQgHAAgFACQgHADgEAEIgFgLQAFgEAIgDQAHgDAKAAQALgBAGAFQAHAFADAGQADAHAAAIQAAAJgEAHQgDAGgGAHIgMANIgNAKIAKAAIANAAIAUAAIAAALg");
	this.shape_16.setTransform(-35.9,-39.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_17.setTransform(-42.5,-39.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRArQgIgGgEgJQgEgKAAgMQAAgNAEgKQAEgKAIgHQAHgGAJgEQAJgDAKAAIAFAAIADAAIgBANIgDgBIgFAAQgQAAgJAJQgJAJgDAPQAEgGAHgDQAHgDAHAAQAKAAAGAEQAHAEADAGQADAHAAAJQAAAIgDAHQgFAIgHAEQgHAFgLAAQgLAAgHgFgAgLAAQgGAEgDAFQAAAHADAHQADAGAEADQAGAEAGAAQAIAAAGgFQAFgGABgJQgBgFgCgEQgCgFgEgCQgFgCgGAAQgHAAgGACg");
	this.shape_18.setTransform(-49.1,-39.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbAvIAAgLIAXAAIAAhDIgGACIgHADIgFACIgCgLIAIgDIAJgEIAGgEIAJAAIAABSIATAAIAAALg");
	this.shape_19.setTransform(-57.3,-39.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfAeIAIgBIANAAIAeAAIABgJIACgLIAAgJQAAgLgCgGQgCgGgFgDQgFgCgIAAIgOAAIgMAAIgGgBIADgOIAHAAIANAAIAMAAQANABAHAEQAHAEACAJQADAJgBAPQAAAMgBAMIgEAUIgrAAIgIAAIgHAAIgGABg");
	this.shape_20.setTransform(-69.4,-39.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAGAsIAAgwIAAgMQgBgEgDgCQgDgDgGgCIgGgBIgFgBIADgPIAEACIAHABQAIACAFADQAGAEACAGQACAHAAAMIAAAzg");
	this.shape_21.setTransform(-76.3,-39.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAcAsIAAgwIgBgNQAAgGgEgCQgEgCgHAAIgdAAIAABHIgMAAIAAgyIAAgOIABgHIgEgBIgFAAIgDgBIADgOIAIABIAOAAIAcAAQALAAAHADQAGADACAHQACAHAAAOIAAA0g");
	this.shape_22.setTransform(-83.4,-39.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_23.setTransform(-96.2,-39.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgCgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgHAGQgKAFgKACg");
	this.shape_24.setTransform(-104.9,-41.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAcAsIAAgwIgBgNQgBgGgDgCQgEgCgIAAIgcAAIAABHIgMAAIAAgyIAAgOIABgHIgEgBIgFAAIgDgBIADgOIAIABIAOAAIAcAAQAMAAAFADQAHADACAHQACAHAAAOIAAA0g");
	this.shape_25.setTransform(-113.4,-39.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGAXIAHgNQADgHAAgDQAAgFgDgCIgHgCIgFgCIgFgCIADgOIAFACIAFABQAKACAFAFQAFAEAAAJQgBAGgDAIQgDAJgHAJg");
	this.shape_26.setTransform(-120.3,-41.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_27.setTransform(-126.4,-39.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_28.setTransform(-135,-39.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGAXIAHgNQADgHAAgDQAAgFgDgCIgHgCIgFgCIgFgCIADgOIAFACIAFABQAKACAFAFQAEAEABAJQgBAGgDAIQgDAJgHAJg");
	this.shape_29.setTransform(-145.4,-41.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_30.setTransform(-150.4,-39.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAJAsIAAgLIAAgOIgBgQIAAgNIAAgJIACgFIACgEIgdAAIgMAAIgGgBIADgOIAIABIAOAAIAuAAIgDAOIgGAAQgDAAgCADQgBAEAAAIIAAATIABAUIAAASg");
	this.shape_31.setTransform(-157.2,-39.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgIAGQgJAFgKACg");
	this.shape_32.setTransform(-165,-41.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgJIgCgOQgBgGgEgCQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMAAAFAEQAGAEABAHQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAOIgzAAIgIAAIgHAAIgGABg");
	this.shape_33.setTransform(-175.8,-39.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAqQgHgGgFgLQgEgLAAgOQAAgOAFgLQAEgKAIgGQAIgGAJAAQAKAAAGAEQAHAEAEAHQAEAGACAJQACAIAAAJQAAANgEALQgEALgHAHQgIAGgMAAQgKAAgIgGgAgPgaQgGAJAAARQAAAKADAIQACAJAFAFQAFAEAHAAQAHAAAEgFQAFgEACgJQACgIAAgKQAAgRgFgJQgGgJgKAAQgJAAgGAJg");
	this.shape_34.setTransform(-184,-39.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTAtQgHgCgGgEIAFgMQAGAEAGACQAGADAJAAQAGAAAFgCQAFgDACgDQACgEgBgDQABgHgGgFQgFgFgMAAIgLAAIAAgLIAKAAQALAAAEgEQAGgEgBgGQAAgDgBgEQgDgDgDgCQgEgCgGAAQgHAAgHACQgFACgFADIgEgLQAFgDAHgDQAHgCAKAAQAKAAAGADQAHADADAGQADAFAAAHQAAAGgCAEQgCAEgEADIgIAEIAAAAQAFABAEACQAFADADAFQADAEAAAIQAAAIgEAGQgFAGgHAEQgHADgKAAQgMAAgHgDg");
	this.shape_35.setTransform(-192.2,-39.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgFgEgCQgDgDgHAAIgOAAIgLAAIgHgBIADgOIAIABIANAAIALAAQAMgBAFAEQAGADABAIQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAOIgzAAIgIAAIgHAAIgGABg");
	this.shape_36.setTransform(92,-60.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGAXIAHgOQADgGAAgEQAAgEgDgCIgHgDIgFgBIgFgCIAEgOIADABIAGACQAKACAFAEQAEAFABAJQgBAHgDAHQgDAJgHAJg");
	this.shape_37.setTransform(85.6,-62.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAGA8IAAhQIAAgLQgBgEgDgDQgDgCgGgCIgGgBIgFgCIADgOIAEABIAIACQAIACAFADQAFADACAHQACAGAAAMIAABTg");
	this.shape_38.setTransform(80.8,-59.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgEgDgHAAIgOAAIgMAAIgGgBIADgOIAIABIANAAIAJAAQAMAAAGACQAGADACAHQACAHABAOIAAA1g");
	this.shape_39.setTransform(71.2,-60.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAeIAGgBIAMAAIARAAIAAgKIAAgJQAAgKgBgJQgCgJgFgFQgEgGgJAAQgHAAgEADQgEADgEAFQgCAEgCAFIgCAJIgEALIgDARIgCAQIgNAAIAEgSIACgRIADgNQABgMgEgFQgEgGgHgBIACgQQAKACAGAGQAFAFABAKQACgFAEgFQAEgFAGgEQAGgDAJgBQAMAAAGAIQAHAGADAMQACANAAAOIAAAVIAAAEIgBAFIgBAFIgfAAIgHAAIgGAAIgEAAg");
	this.shape_40.setTransform(62.6,-60.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgNIAEABIAHABQAIACAFADQAGAEACAHQACAGAAAMIAAAzg");
	this.shape_41.setTransform(54.8,-60.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgnAeIADAAIADgBIAIAAIACAAIgBgOIAAgQIgBgQIgBgLIAAAAIgEAAIgFgBIgEAAIAEgOIAKABIAOAAIAaAAQAMgBAFADQAHADACAGQACAIAAANIAAA1IgNAAIAAgwIgBgNQAAgFgFgCQgDgDgIAAIgbAAIABAJIABANIAAANIABANIAAAJIgDAOIgMAAIgJAAIgHABg");
	this.shape_42.setTransform(47.5,-60.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_43.setTransform(34.6,-60.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFAeIAHgBIAMAAIARAAIAAgKIAAgJQAAgKgCgJQgBgJgFgFQgEgGgJAAQgHAAgDADQgGADgCAFQgDAEgCAFIgDAJIgCALIgEARIgDAQIgMAAIADgSIADgRIADgNQACgMgFgFQgEgGgIgBIADgQQAKACAFAGQAGAFACAKQABgFAEgFQAEgFAHgEQAFgDAIgBQANAAAGAIQAIAGACAMQADANAAAOIAAAVIgBAEIgBAFIgBAFIgfAAIgHAAIgGAAIgEAAg");
	this.shape_44.setTransform(24.6,-60.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghAfIAFgBIAJAAIAKAAIAhAAIAAgdQAAgIgCgFQgCgGgFgDQgGgDgJgCIgKgBIgIgBIgDAHIgBAGQgBAEAEADQAEADAIABIgDANQgNgCgGgGQgFgEAAgJQABgFACgGIADgLIAFgKIAIACIAPACQAMACAJAEQAIADAEAIQAEAIAAAOIAAAgIgBADIgBAGIgBAEIgwAAIgIAAIgIAAIgGABg");
	this.shape_45.setTransform(15.1,-60.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgCgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgHAGQgKAFgKACg");
	this.shape_46.setTransform(6.7,-62.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_47.setTransform(-1,-60.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgNIAEABIAHABQAIACAFADQAGAEACAHQACAGAAAMIAAAzg");
	this.shape_48.setTransform(-7.8,-60.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgmAeIACAAIADgBIAHAAIADAAIgBgOIAAgQIgBgQIgBgLIgBAAIgDAAIgFgBIgDAAIACgOIALABIAPAAIAZAAQALgBAHADQAFADADAGQACAIAAANIAAA1IgMAAIAAgwIgCgNQgBgFgDgCQgEgDgHAAIgbAAIAAAJIABANIABANIAAANIAAAJIgCAOIgNAAIgJAAIgHABg");
	this.shape_49.setTransform(-15.1,-60.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgGAjQgCgDgBgDQABgFACgDQADgCADgBQAEABADACQACACAAAGQAAADgCADQgDADgEAAQgEAAgCgDgAgGgUQgCgDgBgEQABgFACgDQADgCADAAQAEAAADACQACADAAAFQAAAEgCADQgDADgEAAQgEAAgCgDg");
	this.shape_50.setTransform(-25.4,-59.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgTAtQgIgDgFgEIAEgMQAGAEAGACQAIADAHAAQAIAAAEgDQAFgDACgDQACgFAAgEQAAgEgDgEQgBgGgHgCQgFgCgLAAIgLABIgIAAIAAgDIAHgrIAwAAIgBAMIgmAAIgDAWIAEgBIAHAAQALAAAJAEQAIAFADAFQAEAHAAAIQAAAJgEAHQgEAHgJAFQgIADgKAAQgJABgIgDg");
	this.shape_51.setTransform(-31.8,-60.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgaAvIAAgLIAWAAIAAhDIgGACIgGADIgHACIgBgLIAJgDIAIgEIAGgEIAJAAIAABSIAUAAIAAALg");
	this.shape_52.setTransform(-39.9,-61);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_53.setTransform(-46.6,-60.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgSAqQgHgGgFgLQgEgLAAgOQAAgOAFgLQAEgKAIgGQAIgGAJAAQAKAAAGAEQAHAEAEAHQAEAGACAJQACAIAAAJQAAANgEALQgEALgHAHQgIAGgMAAQgKAAgIgGgAgPgaQgGAJAAARQAAAKADAIQACAJAFAFQAFAEAHAAQAHAAAEgFQAFgEACgJQACgIAAgKQAAgRgFgJQgGgJgKAAQgJAAgGAJg");
	this.shape_54.setTransform(-53.2,-61);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgbAvIAAgLIAXAAIAAhDIgGACIgHADIgFACIgCgLIAIgDIAJgEIAGgEIAJAAIAABSIATAAIAAALg");
	this.shape_55.setTransform(-61.4,-61);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfAeIAIgBIANAAIAeAAIABgJIACgKIAAgKQAAgLgCgFQgCgHgFgCQgFgDgIAAIgOAAIgMAAIgGgBIADgOIAHABIANAAIAMAAQANAAAHADQAHAFACAJQADAJgBAPQAAAMgBAMIgEAUIgrAAIgIAAIgHAAIgGABg");
	this.shape_56.setTransform(-73.4,-60.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAGAsIAAgwIAAgLQgBgFgDgCQgDgDgGgCIgGgBIgFgCIADgNIAEABIAHABQAIACAFADQAGAEACAHQACAGAAAMIAAAzg");
	this.shape_57.setTransform(-80.3,-60.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAcAsIAAgvIgBgPQAAgFgEgCQgEgDgHABIgdAAIAABHIgMAAIAAgyIAAgNIABgIIgEgBIgFAAIgDAAIADgPIAIABIAOAAIAcAAQALAAAHADQAGADACAHQACAIAAAMIAAA1g");
	this.shape_58.setTransform(-87.5,-60.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_59.setTransform(-100.2,-60.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgCgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgHAGQgKAFgKACg");
	this.shape_60.setTransform(-108.9,-62.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAcAsIAAgvIgBgPQgBgFgDgCQgEgDgIABIgcAAIAABHIgMAAIAAgyIAAgNIABgIIgEgBIgFAAIgDAAIADgPIAIABIAOAAIAcAAQAMAAAFADQAHADACAHQACAIAAAMIAAA1g");
	this.shape_61.setTransform(-117.5,-60.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgGAXIAHgOQADgGAAgEQAAgEgDgCIgHgDIgFgBIgFgCIADgOIAFABIAFACQAKACAFAEQAFAFAAAJQgBAHgDAHQgDAJgHAJg");
	this.shape_62.setTransform(-124.3,-62.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_63.setTransform(-130.4,-60.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_64.setTransform(-139,-60.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgGAXIAHgOQADgGAAgEQAAgEgDgCIgHgDIgFgBIgFgCIADgOIAFABIAFACQAKACAFAEQAEAFABAJQgBAHgDAHQgDAJgHAJg");
	this.shape_65.setTransform(-149.4,-62.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_66.setTransform(-154.4,-60.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAJAsIAAgLIAAgOIgBgQIAAgNIAAgJIACgFIACgEIgdAAIgMAAIgGgBIADgOIAIABIAOAAIAuAAIgDAOIgGAAQgDAAgCADQgBAEAAAIIAAATIABAUIAAASg");
	this.shape_67.setTransform(-161.3,-60.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIgkAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgJAIgIAGQgJAFgKACg");
	this.shape_68.setTransform(-169,-62.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgFgEgCQgDgDgHAAIgOAAIgLAAIgHgBIADgOIAIABIANAAIALAAQAMgBAFAEQAGADABAIQACAHAAALIAAAZIAAAFIAAAFIgBAEIAMAAIgDAOIgzAAIgIAAIgHAAIgGABg");
	this.shape_69.setTransform(-179.9,-60.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgTAtQgIgDgFgEIAEgMQAGAEAGACQAIADAHAAQAIAAAEgDQAFgDACgDQACgFAAgEQAAgEgDgEQgBgGgHgCQgFgCgLAAIgLABIgIAAIAAgDIAHgrIAwAAIgBAMIgmAAIgEAWIAFgBIAHAAQALAAAJAEQAIAFADAFQAEAHAAAIQAAAJgEAHQgFAHgHAFQgJADgKAAQgJABgIgDg");
	this.shape_70.setTransform(-188,-60.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgFgEgDQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMABAFADQAGAEABAHQACAHAAALIAAAaIAAAEIAAAFIgBAEIAMAAIgDAPIgzAAIgIAAIgHAAIgGAAg");
	this.shape_71.setTransform(83.9,-81.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFAXIAGgNQADgGAAgFQAAgDgCgCIgHgEIgGgBIgEgCIACgOIAEACIAGABQAKACAFAEQAFAFgBAJQAAAGgDAJQgEAIgFAJg");
	this.shape_72.setTransform(77.4,-83.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAGA8IAAhQIAAgLQgBgEgDgCQgDgDgGgCIgGgCIgFgBIADgOIAEACIAIACQAIABAFADQAFAEACAGQACAHAAALIAABTg");
	this.shape_73.setTransform(72.6,-80.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgDgDgIAAIgPAAIgLAAIgHgBIADgOIAIABIAPAAIAJAAQALAAAGACQAGADADAHQABAHABAOIAAA1g");
	this.shape_74.setTransform(63,-82);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgFAfIAHgBIAMAAIARAAIAAgKIAAgKQAAgKgCgJQgBgIgEgGQgFgFgKgBQgGAAgDADQgGADgCAEQgDAFgCAEIgDAJIgCANIgEAQIgDAQIgMAAIADgSIADgRIADgNQACgMgFgFQgEgGgIgCIADgPQAKACAFAGQAGAGACAJQABgFAEgFQAEgFAHgEQAFgEAIAAQANABAGAGQAIAHACAMQACAMABAPIAAAVIgBADIgBAHIgBAEIggAAIgGAAIgFAAIgGAAg");
	this.shape_75.setTransform(54.4,-82);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_76.setTransform(46.7,-82);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgmAeIACgBIADAAIAHAAIADAAIgBgOIAAgQIgBgQIgBgLIgBAAIgDAAIgFAAIgDgBIACgOIALAAIAPAAIAZAAQALABAHACQAFADADAGQACAIAAAOIAAA1IgMAAIAAgxIgCgNQgBgFgDgDQgEgCgHAAIgbAAIAAAJIABAMIABAOIAAANIAAAJIgCAPIgNAAIgJAAIgHAAg");
	this.shape_77.setTransform(39.3,-81.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_78.setTransform(26.5,-82);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEAfIAGgBIAMAAIARAAIAAgKIAAgKQAAgKgBgJQgCgIgEgGQgFgFgKgBQgGAAgEADQgFADgDAEQgDAFgBAEIgDAJIgDANIgCAQIgEAQIgMAAIADgSIAEgRIACgNQACgMgEgFQgFgGgIgCIAEgPQAJACAFAGQAGAGABAJQACgFAEgFQAEgFAGgEQAFgEAKAAQAMABAHAGQAGAHADAMQADAMgBAPIAAAVIAAADIgBAHIgBAEIggAAIgGAAIgFAAIgGAAg");
	this.shape_79.setTransform(16.5,-82);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AghAfIAGgBIAJAAIAJAAIAhAAIAAgdQAAgIgCgFQgCgGgGgDQgFgDgJgCIgKgBIgHgBIgEAHIgBAGQAAAEADADQADADAKABIgEANQgNgCgGgGQgFgEABgJQAAgFABgGIAFgLIAEgKIAIACIAQACQAMACAIAEQAIADAEAIQAEAIAAAOIAAAgIAAADIgBAGIgBAEIgxAAIgJAAIgIAAIgFABg");
	this.shape_80.setTransform(7,-82);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgRAuQALgDAIgHQAIgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIglAAIAAgXIAAgKIAAgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAEADACAFQACAFAAAHQgBANgEALQgEALgJAJQgHAIgJAGQgJAFgKACg");
	this.shape_81.setTransform(-1.4,-83.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_82.setTransform(-9.1,-82);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_83.setTransform(-15.9,-82);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgnAeIADgBIAEAAIAHAAIACAAIAAgOIgBgQIgBgQIgBgLIAAAAIgEAAIgFAAIgEgBIAEgOIAKAAIAOAAIAaAAQAMABAFACQAGADADAGQACAIAAAOIAAA1IgNAAIAAgxIAAgNQgBgFgFgDQgDgCgIAAIgbAAIABAJIABAMIAAAOIABANIAAAJIgDAPIgMAAIgJAAIgHAAg");
	this.shape_84.setTransform(-23.3,-81.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGAkQgCgEAAgDQAAgFACgDQADgDADAAQAFAAACADQACADABAFQgBADgCAEQgCACgFAAQgDAAgDgCgAgGgUQgCgDAAgEQAAgEACgDQADgDADAAQAFAAACADQACADABAEQgBAEgCADQgCACgFABQgDgBgDgCg");
	this.shape_85.setTransform(-33.5,-81.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgUAwIgEAAIAAgMIADAAIADAAQAMAAAHgEQAJgFAEgHQAFgHACgJQgEAFgHADQgGADgGAAQgKAAgHgEQgHgEgDgHQgEgGAAgJQAAgJAEgHQAEgHAIgFQAHgEAKAAQALAAAHAFQAIAFAEAKQAEAKAAANQAAAMgEAKQgFAKgHAHQgHAHgJADQgIADgLAAIgDAAgAgLghQgEADgDAEQgCAFAAAFQAAAGACAEQADAFAEACQAEACAHAAQAHAAAFgDQAFgCAEgFQAAgIgDgGQgCgGgFgEQgFgEgGAAQgHAAgEACg");
	this.shape_86.setTransform(-40,-82.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_87.setTransform(-46.6,-82);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgaAvIAAgLIAWAAIAAhDIgGACIgGADIgHACIgBgLIAIgDIAJgEIAHgEIAIAAIAABSIAUAAIAAALg");
	this.shape_88.setTransform(-53.2,-82.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgfAdIAIAAIANAAIAeAAIABgJIACgLIAAgJQAAgLgCgGQgCgGgFgDQgFgCgIAAIgOAAIgMAAIgGgBIADgOIAHAAIANAAIAMAAQANAAAHAFQAHAEACAJQADAJgBAPQAAAMgBAMIgEAVIgrAAIgIAAIgHAAIgGAAg");
	this.shape_89.setTransform(-65.3,-81.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAGAtIAAgyIAAgLQgBgEgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_90.setTransform(-72.2,-82);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAcAsIAAgvIAAgPQgCgFgDgCQgEgCgIgBIgcAAIAABIIgNAAIAAgxIABgPIABgIIgEAAIgFAAIgDgBIADgOIAIABIAOAAIAcAAQAMAAAFADQAHADACAHQACAHAAANIAAA1g");
	this.shape_91.setTransform(-79.3,-82);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_92.setTransform(-92.1,-82);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgRAuQALgDAIgHQAIgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgHAAIglAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIAAAJIABALIAAAMIAeAAQAHAAAFACQAEADACAFQACAFAAAHQgBANgEALQgEALgJAJQgHAIgJAGQgJAFgKACg");
	this.shape_93.setTransform(-100.8,-83.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAdAsIAAgvIgBgPQgCgFgDgCQgEgCgHgBIgdAAIAABIIgNAAIAAgxIABgPIABgIIgEAAIgFAAIgDgBIADgOIAIABIAOAAIAcAAQALAAAHADQAGADACAHQACAHAAANIAAA1g");
	this.shape_94.setTransform(-109.3,-82);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgFAXIAGgNQADgGAAgFQAAgDgCgCIgHgEIgGgBIgEgCIADgOIADACIAGABQAKACAFAEQAFAFgBAJQAAAGgDAJQgEAIgFAJg");
	this.shape_95.setTransform(-116.2,-83.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgbAeIAIgBIAOAAIAXAAIgLgNIgTgaIgNgRIgMgPIASgBIAIALIAKAOIAIANQAGgDADgDQADgDABgEIABgIIgBgIIgDgIIAQgBIACAGIAAAIQAAALgFAIQgFAIgMAEIAQAVQAGAHADACIgDAMIgqAAIgPAAIgJAAg");
	this.shape_96.setTransform(-122.3,-82);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_97.setTransform(-130.9,-82);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgFAXIAGgNQADgGAAgFQAAgDgCgCIgHgEIgGgBIgEgCIACgOIAEACIAGABQAKACAFAEQAFAFgBAJQAAAGgDAJQgEAIgFAJg");
	this.shape_98.setTransform(-141.3,-83.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_99.setTransform(-146.3,-82);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAKAsIgBgLIAAgOIAAgQIAAgNIAAgJIABgFIABgEIgcAAIgLAAIgHgBIADgOIAIABIAOAAIAuAAIgCAOIgHAAQgDAAgCADQgBAEgBAIIABATIAAAUIABASg");
	this.shape_100.setTransform(-153.1,-82);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgRAuQALgDAIgHQAIgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIgmAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAEADACAFQACAFAAAHQAAANgFALQgEALgJAJQgIAIgHAGQgKAFgKACg");
	this.shape_101.setTransform(-160.9,-83.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgFgEgDQgDgCgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMABAFADQAGAEABAHQACAHAAALIAAAaIAAAEIAAAFIgBAEIAMAAIgDAPIgzAAIgIAAIgHAAIgGAAg");
	this.shape_102.setTransform(-171.7,-81.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgaAvIAAgLIAWAAIAAhDIgGACIgGADIgHACIgBgLIAJgDIAIgEIAGgEIAJAAIAABSIAUAAIAAALg");
	this.shape_103.setTransform(-179.9,-82.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgiAeIAHgBIAJAAIAJAAIAYAAIAAgMIAAgMIAAgKIgCgNQgBgFgEgCQgDgDgHAAIgOAAIgLAAIgHgBIADgOIAIAAIANAAIALAAQAMABAFADQAGAEABAHQACAHAAALIAAAaIAAAEIAAAFIgBAEIAMAAIgDAPIgzAAIgIAAIgHAAIgGAAg");
	this.shape_104.setTransform(76.7,-124.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgfAdIAIAAIANAAIAeAAIABgJIACgKIAAgKQAAgLgCgFQgCgHgFgCQgFgDgIAAIgOAAIgMAAIgGgBIADgOIAHAAIANAAIAMAAQANAAAHAEQAHAFACAJQADAJgBAPQAAAMgBAMIgEAVIgrAAIgIAAIgHAAIgGAAg");
	this.shape_105.setTransform(68.1,-124.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIgmAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAEADACAFQACAFAAAHQAAANgFALQgFALgHAJQgJAIgHAGQgKAFgKACg");
	this.shape_106.setTransform(60.2,-126.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgeAcIgDgTIgEgVIgEgSIgDgMIAPgBIABAHIADAOIAEAXQAIgBAEgDQAEgDABgDQACgFAAgFIgCgMIgDgLIAOgBIADAJIABAMQAAAIgCAHQgDAHgGADQgGAGgOACIABAFIABAHIABAHIAHgBIAKgCQAKgCAHgEQAHgFAEgHQAEgJAAgMIgCgQIgEgOIAPgBIADALIABARQAAAPgEAJQgEAKgGAHQgHAGgJAEQgIAEgJABIgOADIgLABIgDgRg");
	this.shape_107.setTransform(48,-124.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAJAsIAAgLIAAgOIgBgQIAAgNIAAgJIACgFIABgEIgcAAIgLAAIgHgBIADgOIAIABIAOAAIAuAAIgCAOIgHAAQgEAAgBADQgCAEAAAIIABATIABAUIAAASg");
	this.shape_108.setTransform(38.9,-124.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgDgDgIAAIgPAAIgLAAIgHgBIAEgOIAIABIANAAIAJAAQAMAAAGACQAGADACAHQACAHAAAOIAAA1g");
	this.shape_109.setTransform(30.9,-124.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAGAtIAAgyIAAgKQgBgFgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_110.setTransform(24.6,-124.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_111.setTransform(19.4,-124.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AggAUIAGAAIAIgBIAJAAIAYAAIABgJIAAgKQAAgHgCgEQgBgEgEgBQgEgCgGAAIgNAAIgMAAIgHgBIAEgZIAIABIANAAIALAAQAOAAAHAEQAIAEADAJQACAJAAAQIgBAWIgEAXIgtAAIgJAAIgIAAIgGABg");
	this.shape_112.setTransform(8.7,-124.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AACAtIAAguIgBgJQgBgCgBgCQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKABAGAEQAGAEACAHQACAIAAANIAAAxg");
	this.shape_113.setTransform(1.3,-124.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAVAtIAAgtQAAgHgBgEQgBgEgDgBQgCgBgGAAIgTAAIAAA+IgVAAIAAgrIAAgMIACgIIgEAAIgEAAIgDgBIAEgYIAJAAIASAAIAXAAQANAAAGAEQAGADACAJQACAHAAANIAAA0g");
	this.shape_114.setTransform(-6.4,-124.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AASAtIAAgsIAAgMQgBgEgDgBQgCgBgGAAIgZAAIgMgBIgHgBIADgYIAKAAIARAAIASAAQANAAAGAEQAHADACAJQACAHgBANIAAA0gAgjAtIAAgrIAVAAIAAArg");
	this.shape_115.setTransform(-19.2,-124.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgSAjQAKgDAHgEQAHgEAEgGQADgFABgHQAAgGgDAAQgCgCgFABIglAAIAAgeIAAgKIAAgKIgBgHIAVgDIABAGIAAAJIABALIAAAIIAXAAQAIAAAFACQAFACADAFQACAFABAKQAAANgGAMQgEALgJAJQgJAJgJAEQgLAFgLACg");
	this.shape_116.setTransform(-28,-126.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAVAtIAAgtQAAgHgBgEQgBgEgDgBQgCgBgGAAIgTAAIAAA+IgVAAIAAgrIAAgMIACgIIgEAAIgEAAIgDgBIAEgYIAJAAIASAAIAXAAQANAAAGAEQAGADACAJQACAHAAANIAAA0g");
	this.shape_117.setTransform(-36.9,-124.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgKAYIAHgNQADgFAAgFQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgHgCIgFgCIgFgCIAEgXIAEABIAGABQAJACAGACQAGAEACAEQACAFAAAHQAAAIgEAKQgEAKgHAKg");
	this.shape_118.setTransform(-44.3,-126.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgcAUIAHAAIAIgBIAIAAIAQAAIgFgFIgIgJIgMgOIgJgLIgJgMIgJgKIAggCIAJAPIAMARQADgCABgDIABgHIAAgGIgCgGIgDgGIAbgCIACAGIAAAHQAAAGgBAGQgCAGgFAFQgEAFgIADIAMAPIAJAJIgFAUIgsAAIgKAAIgKAAIgHABg");
	this.shape_119.setTransform(-51.3,-124.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AASAtIAAgsIAAgMQgBgEgDgBQgCgBgGAAIgZAAIgMgBIgHgBIADgYIAKAAIARAAIASAAQANAAAGAEQAHADACAJQACAHgBANIAAA0gAgjAtIAAgrIAVAAIAAArg");
	this.shape_120.setTransform(-60.3,-124.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgFAXIAGgOQADgFAAgFQAAgDgCgCIgHgEIgGgBIgEgCIACgOIAEABIAGACQAKACAFAEQAFAFgBAJQAAAHgDAIQgEAIgFAJg");
	this.shape_121.setTransform(-70.6,-126.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgUAdQAGAAAHgDQAHgEAEgGQAEgHAAgJIAAgHIgBgKQgBgEgDgCQgDgCgGgCIgEgBIgFgBIgEgBIADgOIAFABIAIACQAJACAGAEQAFAEACAHQACAGAAAKIABAXIABAQIABANIgMAAIgBgGIgBgIIgBgKQgDAMgIAGQgJAHgMAAg");
	this.shape_122.setTransform(-75.6,-124.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAKAsIgBgLIAAgOIAAgQIAAgNIAAgJIABgFIABgEIgcAAIgLAAIgHgBIADgOIAIABIAOAAIAuAAIgCAOIgHAAQgDAAgCADQgBAEgBAIIABATIAAAUIABASg");
	this.shape_123.setTransform(-82.5,-124.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgRAuQALgDAIgHQAIgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIgmAAIAAgXIAAgKIgBgJIgBgGIANgCIABAEIABAJIAAALIAAAMIAdAAQAJAAAEACQAEADACAFQACAFAAAHQAAANgFALQgEALgJAJQgIAIgHAGQgKAFgKACg");
	this.shape_124.setTransform(-90.2,-126.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAbAsIgPgVIgaghQgFAGgCAIQgCAHABAIQAAAHABAHIADALIgPAAIgCgLIgBgKQAAgMADgLQAEgJAIgKIgLgLIgLgKIABgBIARgCIAPARIAVAaQAFgEACgFQADgEAAgIIgBgKIgEgKIAQgCIACAJIABAKQAAAKgFAIQgFAIgIAEIAKANIAKAOIAHALg");
	this.shape_125.setTransform(-101.4,-124.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AASA7IAAhcIAAgHIgCgCIgEgBIgEAAIgIAAIgIAAIgEAAIgLAAIgHgBIADgOIAIABIAOAAIAaAAIAGABQACABABADIABAKIAABlg");
	this.shape_126.setTransform(-110.4,-123.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgGAXIAHgOQADgFAAgFQAAgDgDgCIgHgEIgFgBIgFgCIADgOIAFABIAFACQAKACAFAEQAEAFABAJQgBAHgDAIQgDAIgHAJg");
	this.shape_127.setTransform(-119.3,-126.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgjAgIALgCIALgCIAKgCIgFgQIgJgTIgKgUIgJgQIARgBIAHAOIAIASIAGASIAGASQAIgEAFgIQAFgIAAgOIgBgKIgCgMIgEgLIAQgCIADANIABASQAAAMgCAJQgDAKgHAIQgHAIgNAFQgGADgHACIgQAEIgQADg");
	this.shape_128.setTransform(-125.8,-124.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgRAuQALgDAHgHQAJgGAFgJQAFgJAAgMQAAgGgDgDQgDgCgGAAIglAAIAAgXIAAgKIgBgJIgCgGIANgCIABAEIAAAJIABALIAAAMIAdAAQAJAAAEACQAFADABAFQACAFAAAHQgBANgEALQgFALgHAJQgIAIgIAGQgKAFgKACg");
	this.shape_129.setTransform(-134,-126.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAZAsIAAgvIgBgOQgBgGgEgCQgDgDgIAAIgaAAIgMAAIgGgBIACgOIAIABIAOAAIAVAAQALAAAHACQAGADACAHQACAHAAANIAAA2gAghAsIAAgtIAMAAIAAAtg");
	this.shape_130.setTransform(-142.2,-124.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgFAXIAGgOQADgFAAgFQAAgDgCgCIgHgEIgGgBIgEgCIADgOIADABIAGACQAKACAFAEQAFAFgBAJQAAAHgDAIQgEAIgFAJg");
	this.shape_131.setTransform(-152.6,-126.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAGAtIAAgyIAAgKQgBgFgDgDQgDgCgGgBIgGgCIgFgCIADgNIAEABIAHABQAIACAFAEQAGACACAIQACAGAAAMIAAA0g");
	this.shape_132.setTransform(-157.4,-124.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgnAeIADgBIAEAAIAGAAIADAAIAAgOIgBgQIgBgQIgBgLIgBAAIgDAAIgFAAIgEgBIADgOIALAAIAOAAIAaAAQALABAGACQAGADADAGQACAIAAAOIAAA1IgMAAIAAgxIgBgNQgCgFgEgCQgDgDgHAAIgbAAIAAAJIABAMIAAAOIABANIAAAJIgCAPIgNAAIgJAAIgHAAg");
	this.shape_133.setTransform(-164.8,-124.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AATAsIAAgxIgBgNQgBgFgEgCQgEgDgHAAIgOAAIgMAAIgGgBIADgOIAIABIANAAIAJAAQAMAAAGACQAGADACAHQACAHABAOIAAA1g");
	this.shape_134.setTransform(-173.6,-124.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#D9C482").ss(2,1,1).p("A2eqmMAs9AAAQCWAAAACWIAANvQAACWiWAAIrRAAIBeCyIkNiyI+9AAQiWAAAAiWIAAtvQAAiWCWAAg");
	this.shape_135.setTransform(-47.7,-73.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#FFEAAE","#FFE699","#FFEBB1"],[0,0.471,1],-158.8,0,158.9,0).s().p("AIfH1I+8AAQiWAAgBiWIAAtuQABiWCWgBMAs7AAAQCWABABCWIAANuQgBCWiWAAIrRAAIBfCyg");
	this.shape_136.setTransform(-47.7,-73.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},2).wait(1));

	// Layer 1
	this.cost0 = new cjs.Text("6", "20px 'Myriad Hebrew'");
	this.cost0.name = "cost0";
	this.cost0.textAlign = "right";
	this.cost0.lineHeight = 26;
	this.cost0.lineWidth = 59;
	this.cost0.parent = this;
	this.cost0.setTransform(61.1,29.4);

	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(80.6,38.7,1,1,0,0,0,11.3,11.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AghAaIgEgUIgEgTIgEgRIgDgNIAZgBIABAHIACAOIACAQQAHgBACgDQACgEAAgFIgBgKIgDgNIAXgBIACAJIABAMQAAAIgDAHQgDAHgHADQgGAEgMACIAAAEIABAFIABAEIAKgCIAIgCQAIgBAFgEQAFgEACgHQADgEAAgKIgBgOIgEgQIAYgBIACAKIABAPQAAARgFAKQgEALgIAHQgHAHgJADQgIAEgIACIgLABIgLABIgIABIgDgTg");
	this.shape_137.setTransform(71.2,12);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AACAtIgBgPIAAgQIgBgNIABgMQABgEACgCIgXAAIgKgBIgHgBIAEgYIAJAAIASAAIAqAAIgEAaIgDAAQgFAAgCACQgCADABAGIAAAaIABAZg");
	this.shape_138.setTransform(61.8,11.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AANAtIAAgvQAAgIgDgFQgCgDgHABIgRAAIgKgBIgHgBIAEgYIAJAAIASAAIAGAAQAOAAAGADQAGADADAHQABAIAAAMIAAA3g");
	this.shape_139.setTransform(53.5,11.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AACAtIAAguIgBgIQgBgDgBgCQgDgCgFgBIgIgCIgFgBIAEgYIAFABIAKACQAKABAGAEQAGAEACAHQACAIAAANIAAAxg");
	this.shape_140.setTransform(46.5,11.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgYASQAJAAAHgCQAGgDACgFQADgEAAgFIAAgDQAAgGgCgDQgCgCgHgCIgJgCIgGgCIAFgYIAHACIAJABQAKADAGADQAGAEACAIQACAHABANIABARIABASIABANIgUAAIgCgFIgBgIIAAgIQgEALgHAGQgIAFgNABg");
	this.shape_141.setTransform(40.6,11.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgJAkQgEgEAAgGQAAgHAEgEQAEgEAFAAQAHAAADAEQAEAEAAAHQAAAGgEAEQgDAEgHAAQgFAAgEgEgAgJgOQgEgEAAgHQAAgGAEgEQAEgEAFAAQAHAAADAEQAEAEAAAGQAAAHgEAEQgDAEgHAAQgFAAgEgEg");
	this.shape_142.setTransform(34.7,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.instance},{t:this.cost0}]}).wait(4));

	// Layer 2
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(2,1,1).p("AnYk/IOxAAQBkAAAABkIAAG3QAABkhkAAIuxAAQhkAAAAhkIAAm3QAAhkBkAAg");
	this.shape_143.setTransform(54.6,30.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.rf(["#8BE2FF","#00A3D9"],[0,1],25.4,8.1,0,25.4,8.1,63.2).s().p("AnYE/QhkABAAhlIAAm1QAAhlBkAAIOxAAQBkAAAABlIAAG1QAABlhkgBg");
	this.shape_144.setTransform(54.6,30.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.rf(["#8BE2FF","#00A1D7"],[0.306,1],25.4,8.1,0,25.4,8.1,63.2).s().p("AnYE/QhkABAAhlIAAm1QAAhlBkAAIOxAAQBkAAAABlIAAG1QAABlhkgBg");
	this.shape_145.setTransform(54.6,30.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.rf(["#8BE2FF","#009FD4"],[0.012,0.545],25.4,8.1,0,25.4,8.1,63.2).s().p("AnYE/QhkABAAhlIAAm1QAAhlBkAAIOxAAQBkAAAABlIAAG1QAABlhkgBg");
	this.shape_146.setTransform(54.6,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_144},{t:this.shape_143}]}).to({state:[{t:this.shape_145},{t:this.shape_143}]},1).to({state:[{t:this.shape_146},{t:this.shape_143}]},1).to({state:[{t:this.shape_146},{t:this.shape_143}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-2.4,116.7,65.9);


(lib.tutorialUpgrade_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("6", "20px 'Myriad Hebrew'");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 59;
	this.text.parent = this;
	this.text.setTransform(63.8,30.8);

	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(83.3,40.1,1,1,0,0,0,11.3,11.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmgmBINGAAQA5ACAWAjQAQAYAAAnIAAI7QAAAngQAYQgWAjg5ACItGAAQhkAAAAhkIAAo7QAAhkBkAAg");
	this.shape.setTransform(51.7,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#8BE2FF","#00A3D9"],[0,1],31,14.7,0,31,14.7,63.2).s().p("AmgGCQhkAAAAhkIAAo7QAAhkBkAAINGAAQA5ACAXAjQAPAYAAAnIAAI7QAAAngPAYQgXAjg5ACg");
	this.shape_1.setTransform(51.7,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialUpgrade_mc, new cjs.Rectangle(-1,-14.2,105.4,79.2), null);


(lib.monster1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27).call(this.frame_27).wait(49));

	// eye2
	this.monsterEye2_mc = new lib.monsteEye_mc();
	this.monsterEye2_mc.parent = this;
	this.monsterEye2_mc.setTransform(237.9,101,1,1,0,0,0,236.8,94.6);

	this.timeline.addTween(cjs.Tween.get(this.monsterEye2_mc).to({x:221.7,y:114.3},7).to({x:257.8,y:101},7).to({x:235.9},7).to({x:237.9},6).wait(7).to({x:221.7,y:114.3},7).to({x:257.8,y:101},7).to({x:235.9},7).to({x:188.9,y:155.9},6).to({_off:true},1).wait(14));

	// eye1
	this.monsterEye1_mc = new lib.monsteEye_mc();
	this.monsterEye1_mc.parent = this;
	this.monsterEye1_mc.setTransform(109.6,101,1,1,0,0,180,236.8,94.6);

	this.timeline.addTween(cjs.Tween.get(this.monsterEye1_mc).to({x:122},7).to({x:96.3,y:111.5},7).to({x:116.3},7).to({x:109.6,y:101},6).wait(7).to({x:122},7).to({x:96.3,y:111.5},7).to({x:116.3},7).to({x:165.8,y:155.9},6).to({_off:true},1).wait(14));

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("ArrCdQKhmbM2CB");
	this.shape.setTransform(179.7,286.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("Ap0B6QIlmOLECsAp0CRQI1BCK0kl");
	this.shape_1.setTransform(180.2,288.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AobBsQHJmGJuDNAobB/QHjBaJUkU");
	this.shape_2.setTransform(180.5,289.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AnCBdQFsl+IZDuAnCBsQGRBzH0kD");
	this.shape_3.setTransform(180.9,289.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AlpBNQEQl1HDEPAlpBZQE/CMGUjz");
	this.shape_4.setTransform(181.2,290.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("AkQA9QCzlsFuEvAkQBFQDtClE0jk");
	this.shape_5.setTransform(181.6,291.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("AjTAyQCKleEdE6AjTA1QCWCzERjW");
	this.shape_6.setTransform(179.6,291);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3,1,1).p("AiWAjQBhlPDMFHQiTDTiajLg");
	this.shape_7.setTransform(177.6,290.9);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3,1,1).p("ACAAAQAAA1glAmQgmAmg1AAQg0AAgmgmQglgmAAg1QAAg0AlgmQAmglA0AAQA1AAAmAlQAlAmAAA0g");
	this.shape_8.setTransform(177,291.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3,1,1).p("AmHBSQEvl4HgEDAmHBeQFaCIG1j8");
	this.shape_9.setTransform(181.1,290.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3,1,1).p("An9BlQGqmDJRDYAn9B3QHIBqIzkW");
	this.shape_10.setTransform(180.6,289.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("Ap0B5QIlmPLECsAp0CPQI1BNK0kv");
	this.shape_11.setTransform(180.2,288.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("Ap0CRQI1BCK0klAp0B6QIlmOLECs");
	this.shape_12.setTransform(180.2,288.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3,1,1).p("AobB/QHjBaJUkUAobBsQHJmGJuDN");
	this.shape_13.setTransform(180.5,289.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3,1,1).p("AnCBsQGRBzH0kDAnCBdQFsl+IZDu");
	this.shape_14.setTransform(180.9,289.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3,1,1).p("AlpBZQE/CMGUjzAlpBNQEQl1HDEP");
	this.shape_15.setTransform(181.2,290.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3,1,1).p("AkQBFQDtClE0jkAkQA9QCzlsFuEv");
	this.shape_16.setTransform(181.6,291.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3,1,1).p("AjTA1QCWCzERjWAjTAyQCKleEdE6");
	this.shape_17.setTransform(179.6,291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},13).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},13).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(7).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).wait(1).to({y:284.4},0).wait(1).to({y:277.8},0).wait(1).to({y:271.3},0).wait(1).to({y:264.8},0).wait(1).to({y:258.2},0).wait(1).to({y:251.7},0).to({_off:true},1).wait(14));

	// face
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3,1,1).p("AbRAAQAALTn/H/Qn/H/rTAAQrSAAn/n/Qn/n/AArTQAArSH/n/QH/n/LSAAQLTAAH/H/QH/H/AALSg");
	this.shape_18.setTransform(174.5,174.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#775399").s().p("AzRTSQn/n/AArTQAArSH/n/QH/n/LSAAQLTAAH/H/QH/H/AALSQAALTn/H/Qn/H/rTAAQrSAAn/n/g");
	this.shape_19.setTransform(174.5,174.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3,1,1).p("AsH4DQFfjBGogCQARgBAQABQGcAFFOC9QDrB/C6DRQA4A/AvBCQFUHAgCKCQgCKWlvHJQglAxgqAuQiRCqiwBsQg4Ahg5AdQk+CgmAAGQgeAAgeAAQmNgFlFiPQgYgKgXgMQjyh2i3jcQgSgVgRgWQmQnZgIqzQgFqsF9nHQAggpAkgoQC7jRDqiCg");
	this.shape_20.setTransform(173.9,174);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#765199").s().p("AgDbHQmNgFlFiPQgYgKgXgMQjyh3i3jbIgjgqQmQnagIqzQgFqsF9nHQAggpAkgnQC7jSDqiCQFfjBGogCIAhAAQGcAFFOC9QDrCAC6DQQA4A/AvBCQFUHAgCKCQgCKXlvHHQglAygqAvQiRCpiwBsQg4Ahg5AdQk+CfmAAHIgeAAIgeAAg");
	this.shape_21.setTransform(173.9,174);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3,1,1).p("AsC3oQFdjQGlgFQARAAAQABQGfADFGDNQDkCDCkDSQAxBAApBDQEeGpgFKKQgEKbk4GuQggAygkAvQiBCyioBnQg1Ahg4AcQk5Cel+AAQgeAAgdAAQmNgKk9iFQgYgKgWgKQjuhxicjlQgPgVgPgWQlOnEgLq5QgJqxFGmoQAcgpAfgoQCojSDeiIg");
	this.shape_22.setTransform(173.2,173.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#754F99").s().p("AgHa9QmNgJk9iGIgugUQjuhxicjlIgegrQlOnEgLq5QgJqxFGmoQAcgpAfgnQCojTDeiIQFdjQGlgFIAhABQGfADFGDNQDkCECkDSQAxA/ApBDQEeGqgFKJQgEKbk4GuQggAygkAvQiBCyioBnQg1Ahg4AcQk5Cdl+ACIg7gBg");
	this.shape_23.setTransform(173.2,173.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3,1,1).p("Ar93OQFcjeGigHQAQAAARAAQGgACE/DdQDdCHCPDTQAqBBAhBEQDoGSgGKSQgHKfkAGUQgbAzgfAvQhxC6igBjQgzAgg2AcQk0Ccl7gFQgeAAgcgBQmNgOk2h7QgYgJgWgLQjphsiBjtQgNgWgLgXQkMmugPq9QgOq4EQmIQAYgpAbgoQCTjUDTiOg");
	this.shape_24.setTransform(172.6,172.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#744D99").s().p("AAwa0Ig6gBQmNgOk2h7QgYgJgWgLQjphsiBjtIgYgtQkMmugPq9QgOq4EQmIQAYgpAbgoQCTjUDTiOQFcjeGigHIAhAAQGgACE/DdQDdCHCPDTQAqBBAhBEQDoGSgGKSQgHKfkAGUQgbAzgfAvQhxC6igBjQgzAgg2AcQkrCXlvAAIgVAAg");
	this.shape_25.setTransform(172.6,172.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3,1,1).p("Ar320QFajtGfgJQAQAAAQAAQGkABE2DsQDXCLB4DVQAlBBAZBGQCyF7gJKZQgIKkjJF6QgWA0gaAvQhgDBiYBgQgyAgg0AaQkuCbl5gLQgeAAgcgCQmNgSkthxQgYgIgXgLQjkhnhmj2QgJgWgJgXQjKmYgTrCQgRq/DYloQAUgqAYgoQB9jUDJiVg");
	this.shape_26.setTransform(171.9,172.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#724A99").s().p("AAsaqIg6gCQmNgSkthxQgYgIgXgLQjkhnhmj2IgSgtQjKmYgTrCQgRq/DYloQAUgqAYgoQB9jUDJiVQFajtGfgJIAgAAQGkABE2DsQDXCLB4DVQAlBBAZBGQCyF7gJKZQgIKkjJF6QgWA0gaAvQhgDBiYBgQgyAgg0AaQkbCRldAAIgvgBg");
	this.shape_27.setTransform(171.9,172.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(3,1,1).p("Ary2bQFYj7GcgLQARAAAQAAQGlgBEvD8QDQCPBjDWQAeBCASBHQB8FkgLKhQgLKoiSFgQgRA1gUAwQhQDIiPBcQgxAfgyAaQkoCZl4gQQgdgBgbgCQmNgXklhmQgZgIgXgKQjghihKj/QgHgWgFgYQiImDgXrGQgWrFChlJQARgqAUgoQBojWC+ibg");
	this.shape_28.setTransform(171.2,171.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#714899").s().p("AAnagIg4gDQmNgXklhmQgZgIgXgKQjghihKj/QgHgWgFgYQiImDgXrGQgWrFChlJQARgqAUgoQBojWC+ibQFYj7GcgLIAhAAQGlgBEvD8QDQCPBjDWQAeBCASBHQB8FkgLKhQgLKoiSFgQgRA1gUAwQhQDIiPBcQgxAfgyAaQkMCLlNAAIhHgCg");
	this.shape_29.setTransform(171.2,171.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3,1,1).p("Ars2BQFWkKGZgNQAQAAARAAQGngCEnELQDJCUBNDXQAYBCALBJQBGFNgOKoQgNKthaFGQgMA2gPAwQg/DQiIBYQguAfgxAZQkjCXl1gWQgdgBgbgCQmMgckehbQgYgIgXgKQjbhdgvkHQgEgXgDgZQhGltgbrLQgarLBrkpQAMgqAQgpQBUjWCziig");
	this.shape_30.setTransform(170.5,171.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#704699").s().p("AAjaWIg4gDQmMgckehbQgYgIgXgKQjbhdgvkHIgHgwQhGltgbrLQgarLBrkpQAMgqAQgpQBUjWCziiQFWkKGZgNIAhAAQGngCEnELQDJCUBNDXQAYBCALBJQBGFNgOKoQgNKthaFGQgMA2gPAwQg/DQiIBYQguAfgxAZQj+CEk+AAQgtAAgvgDg");
	this.shape_31.setTransform(170.5,171.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3,1,1).p("AP8BrQgPKygjEsQgjEsicBnQk8DQmwggQmwgfkphWQkZhSgClYQgDlXgfrRQgfrPA0kLQA0kLDIjHQFikkGpgEQGpgEEgEbQD+DHAQE2QAQE2gQKwg");
	this.shape_32.setTransform(169.8,171);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6F4499").s().p("AAfaMQmwgfkphWQkZhSgClYQgDlXgfrRQgfrPA0kLQA0kLDIjHQFikkGpgEQGpgEEgEbQD+DHAQE2QAQE2gQKwQgPKygjEsQgjEsicBnQkTC0lqAAQg3AAg4gEg");
	this.shape_33.setTransform(169.8,171);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3,1,1).p("AxrgQQAVrIBPkBQBOkCC7itQFvkpGoALQGqAMEgEIQEGDABOFFQBOFGgbLCQgbLDhAEgQhAEgjQB6Qk6DFmwgZQmugYk4hSQkrhOhBmaQhDmaAVrIg");
	this.shape_34.setTransform(171.2,171.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6E4299").s().p("AAVakQmugYk4hSQkrhOhBmaQhDmaAVrIQAVrIBPkBQBOkCC7itQFvkpGoALQGqAMEgEIQEGDABOFFQBOFGgbLCQgbLDhAEgQhAEgjQB6QkYCvl0AAQguAAgwgDg");
	this.shape_35.setTransform(171.2,171.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3,1,1).p("AzShlQBIrBBqj3QBpj4CtiTQF8kuGpAbQGoAaEiD2QEMC5COFVQCNFVgnLUQgoLVhdEUQhdEUkFCMQk3C6mugSQmugRlHhNQk8hKiBndQiCndBJrAg");
	this.shape_36.setTransform(171.3,171.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6D4199").s().p("AAZa9QmugRlHhNQk8hKiBndQiCndBJrAQBIrBBqj3QBpj4CtiTQF8kuGpAbQGoAaEiD2QEMC5COFVQCNFVgnLUQgoLVhdEUQhdEUkFCMQkcCqmAAAIhJgCg");
	this.shape_37.setTransform(171.3,171.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(3,1,1).p("A04i6QB8q6CEjtQCEjuCfh5QGKkzGoAqQGoAqEjDiQETC0DMFkQDMFkgzLmQgzLmh6EJQh6EIk6CeQk1CvmtgLQmtgKlWhJQlOhGjAogQjBofB9q4g");
	this.shape_38.setTransform(171.3,171.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6C3F99").s().p("AAdbWQmtgKlWhJQlOhGjAogQjBofB9q4QB8q6CEjtQCEjuCfh5QGKkzGoAqQGoAqEjDiQETC0DMFkQDMFkgzLmQgzLmh6EJQh6EIk6CeQkjClmPAAIgwgBg");
	this.shape_39.setTransform(171.3,171.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(3,1,1).p("A2ekPQCwqxCfjkQCfjjCRhhQGWk4GoA6QGoA6EkDPQEaCtELFzQEKF0g/L3Qg+L5iYD8QiXD9luCvQkzClmsgEQmsgDllhEQlfhDkApiQj/piCwqxg");
	this.shape_40.setTransform(171.3,172);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6C3D99").s().p("AAhbwQmsgDllhEQlfhDkApiQj/piCwqxQCwqxCfjkQCfjjCRhhQGWk4GoA6QGoA6EkDPQEaCtELFzQEKF0g/L3Qg+L5iYD8QiXD9luCvQksChmhAAIgSAAg");
	this.shape_41.setTransform(171.3,172);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(3,1,1).p("A4ElkQDjqpC6jaQC6jaCDhGQGjk9GoBJQGoBKElC7QEhCnFJGCQFJGDhKMKQhLMKi0DwQi1DxmiDCQkxCZmrAEQmqADl1g/Qlwg/k/qlQk/qlDkqpg");
	this.shape_42.setTransform(171.3,172.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6B3B99").s().p("Ar6bOQlwg/k/qlQk/qlDkqpQDjqpC6jaQC6jaCDhGQGjk9GoBJQGoBKElC7QEhCnFJGCQFJGDhKMKQhLMKi0DwQi1DxmiDCQkxCZmrAEIgrAAQmTAAlhg8g");
	this.shape_43.setTransform(171.3,172.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(3,1,1).p("A5rm5QEYqiDUjQQDVjPB1gtQGxlCGnBZQGoBYEmCpQEnCgGJGSQGIGShXMbQhWMcjSDlQjRDlnXDUQkuCOmqALQmqAKmEg7QmCg6l+roQl+roEXqhg");
	this.shape_44.setTransform(171.3,172.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6A3A99").s().p("AsEbyQmCg6l+roQl+roEXqhQEYqiDUjQQDVjPB1gtQGxlCGnBZQGoBYEmCpQEnCgGJGSQGIGShXMbQhWMcjSDlQjRDlnXDUQkuCOmqALQhAABg/AAQlmAAlJgyg");
	this.shape_45.setTransform(171.3,172.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(3,1,1).p("AdODhQhiMujvDZQjvDYoLDnQksCDmpASQmpARmTg2QmTg3m+sqQm9srFLqZQFMqbDvjFQDvjGBogTQG+lHGmBoQGoBoEnCWQEvCZHGGiQHHGhhiMtg");
	this.shape_46.setTransform(171.3,172.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#693899").s().p("AsOcXQmTg3m+sqQm9srFLqZQFMqbDvjFQDvjGBogTQG+lHGmBoQGoBoEnCWQEvCZHGGiQHHGhhiMtQhiMujvDZQjvDYoLDnQksCDmpASQhnAEhmAAQk+AAkxgpg");
	this.shape_47.setTransform(171.3,172.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(3,1,1).p("A6NnIQEgqlDcjZQDbjaB6grQG0kmGmBXQGoBWE1CTQEhCcGcGeQGbGfheMdQheMejcDrQjbDqnWDfQk8CBmsATQmrATmBhGQmChHmRrrQmQrqEgqkg");
	this.shape_48.setTransform(171.9,173.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6A3A99").s().p("AsKb4QmChHmRrrQmQrqEgqkQEgqlDcjZQDbjaB6grQG0kmGmBXQGoBWE1CTQEhCcGcGeQGbGfheMdQheMejcDrQjbDqnWDfQk8CBmsATQhaAEhZAAQlKAAkvg3g");
	this.shape_49.setTransform(171.9,173.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(3,1,1).p("A5JmCQD0qvDIjtQDHjtCNhDQGqkHGlBGQGpBFFDCQQETCfFxGbQFwGbhaMOQhbMOjHD9QjID9mhDXQlMB/muAUQmvAUlwhXQlwhXljqqQljqrD1qug");
	this.shape_50.setTransform(172.6,173.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6B3B99").s().p("AsIbYQlwhXljqqQljqrD1quQD0qvDIjtQDHjtCNhDQGqkHGlBGQGpBFFDCQQETCfFxGbQFwGbhaMOQhbMOjHD9QjID9mhDXQlMB/muAUQhRAEhQAAQlUAAkqhHg");
	this.shape_51.setTransform(172.6,173.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(3,1,1).p("A4Fk7QDJq6C0kBQCzkBCfhbQGgjmGkA0QGqA0FRCNQEFCiFGGYQFGGYhXL+QhXL/i0EPQi1EOlrDPQlcB9mxAWQmxAVlfhnQlfhnk1pqQk2prDKq4g");
	this.shape_52.setTransform(173.3,174.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6C3D99").s().p("AsFa5Qlfhnk1pqQk2prDKq4QDJq6C0kBQCzkBCfhbQGgjmGkA0QGqA0FRCNQEFCiFGGYQFGGYhXL+QhXL/i0EPQi1EOlrDPQlcB9mxAWQhKADhIAAQlcAAkihVg");
	this.shape_53.setTransform(173.3,174.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(3,1,1).p("A3Bj1QCdrECgkUQCgkVCxhzQGWjGGkAjQGrAjFeCJQD3CmEbGUQEbGUhTLvQhSLwiiEgQihEhk2DHQlrB6m0AYQm0AXlOh3QlNh4kIoqQkIorCerDg");
	this.shape_54.setTransform(174,175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6C3E99").s().p("AsCabQlNh4kIoqQkIorCerDQCdrECgkUQCgkVCxhzQGWjGGkAjQGrAjFeCJQD3CmEbGUQEbGUhTLvQhSLwiiEgQihEhk2DHQlrB6m0AYQhGADhEAAQlgAAkYhjg");
	this.shape_55.setTransform(174,175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(3,1,1).p("A19iuQByrOCMkoQCMkpDEiLQGMimGjASQGrARFtCGQDpCpDwGRQDwGRhPLfQhPLgiOEzQiOEzkBC/Ql7B4m2AZQm4AYk8iHQk8iIjanqQjbnrBzrNg");
	this.shape_56.setTransform(174.6,175.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6D3F99").s().p("Ar/Z8Qk8iIjanqQjbnrBzrNQByrOCMkoQCMkpDEiLQGMimGjASQGrARFtCGQDpCpDwGRQDwGRhPLfQhPLgiOEzQiOEzkBC/Ql7B4m2AZQhDAEhAAAQllAAkMhzg");
	this.shape_57.setTransform(174.6,175.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(3,1,1).p("AU6A7QhLLRh7FEQh7FEjLC5QmKB1m6AaQm6AakriYQkqiXiumrQitmqBHrYQBHrYB5k9QB4k8DWijQGCiFGjAAQGrAAF7CDQDbCsDFGOQDFGNhLLQg");
	this.shape_58.setTransform(175.2,176);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6E4199").s().p("Ar7ZeQkqiXiumrQitmqBHrYQBHrYB5k9QB4k8DWijQGCiFGjAAQGrAAF7CDQDbCsDFGOQDFGNhLLQQhLLRh7FEQh7FEjLC5QmKB1m6AaQhAAEg+AAQloAAj/iCg");
	this.shape_59.setTransform(175.2,176);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(3,1,1).p("A1zhYQA9rHCblQQArhkA1hVQBtixCUhuQF/iTGogDQAsAAAtABQGAALFTB7QDCCOCwEjQAjA5AiA/QDiGYg+LBQgCAUgCASQg/KliXFPQgyB2g+BkQhnCniEByQmICIm9AZQgoACgnABQmGAIkXiLQj/h+itkzQgkg+gfhFQjPmyA9rMg");
	this.shape_60.setTransform(175.1,175.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6F4499").s().p("AryZaQj/h+itkzQgkg+gfhFQjPmyA9rMQA9rHCblQQArhkA1hVQBtixCUhuQF/iTGogDQAsAAAtABQGAALFTB7QDCCOCwEjQAjA5AiA/QDiGYg+LBIgEAmQg/KliXFPQgyB2g+BkQhnCniEByQmICIm9AZIhPADIgoABQlsAAkJiEg");
	this.shape_61.setTransform(175.1,175.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(3,1,1).p("A2thJQAzq2C+llQAvhhA5hVQB0isCYhtQF8ihGtgGQAtgBAtABQGEAJFTCDQDOCKC3EYQAmA4AkA+QD/GggyK0QgBAUgBATQg1KWi2FiQg3BzhEBkQhtCiiIBwQmGCanDAYQgnADgoAAQmEAHkeiLQkFh/i4koQgng9gjhDQjvm5AyrAg");
	this.shape_62.setTransform(175,175.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#714699").s().p("ArpZXQkFh/i4koQgng9gjhDQjvm5AyrAQAzq2C+llQAvhhA5hVQB0isCYhtQF8ihGtgGQAtgBAtABQGEAJFTCDQDOCKC3EYQAmA4AkA+QD/GggyK0IgCAnQg1KWi2FiQg3BzhEBkQhtCiiIBwQmGCanDAYQgnADgoAAIgiAAQlvAAkRiEg");
	this.shape_63.setTransform(175,175.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(3,1,1).p("A3ng6QApqlDgl5QAzhgA+hTQB7ioCbhsQF6ivGygKQAsgBAuABQGIAHFUCJQDZCIC/EMQApA4AmA8QEcGqgmKmQAAAUgCATQgqKHjVF1Qg7BxhKBiQhzCfiNBuQmECsnGAXQgoADgoAAQmDAFkmiLQkKh/jDkdQgrg8glhBQkRnAAoq0g");
	this.shape_64.setTransform(174.9,175.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#724999").s().p("ArhZTQkKh/jDkdQgrg8glhBQkRnAAoq0QApqlDgl5QAzhgA+hTQB7ioCbhsQF6ivGygKQAsgBAuABQGIAHFUCJQDZCIC/EMQApA4AmA8QEcGqgmKmIgCAnQgqKHjVF1Qg7BxhKBiQhzCfiNBuQmECsnGAXQgoADgoAAIgbAAQlyAAkciGg");
	this.shape_65.setTransform(174.9,175.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(3,1,1).p("A4hgrQAeqUEDmOQA3hcBDhTQCCikCehsQF3i9G3gMQAugBAuAAQGMAGFUCPQDkCGDHEAQArA3ApA6QE5G0gZKYQgBAUgBAUQggJ4j0GIQhABuhPBiQh6CaiRBsQmBC+nLAXQgoACgpAAQmBAEktiMQkQh/jPkSQgtg7gpg/QkznHAfqog");
	this.shape_66.setTransform(174.8,175.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#734B99").s().p("ArYZPQkQh/jPkSQgtg7gpg/QkznHAfqoQAeqUEDmOQA3hcBDhTQCCikCehsQF3i9G3gMQAugBAuAAQGMAGFUCPQDkCGDHEAQArA3ApA6QE5G0gZKYIgCAoQggJ4j0GIQhABuhPBiQh6CaiRBsQmBC+nLAXQgoACgpAAIgVAAQl0AAkliIg");
	this.shape_67.setTransform(174.8,175.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(3,1,1).p("A5bgcQAUqEElmhQA8hbBHhSQCJifChhrQF1jLG7gPQAvgCAuAAQGQAEFVCWQDvCDDPD1QAuA1AqA5QFWG9gMKMQgBATAAAUQgVJqkUGaQhFBrhUBhQiBCXiVBqQl+DQnPAWQgqACgoAAQmBADk0iNQkVh/jbkIQgwg5grg9QlVnOAVqcg");
	this.shape_68.setTransform(174.7,174.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#744E99").s().p("ArQZLQkVh/jbkIQgwg5grg9QlVnOAVqcQAUqEElmhQA8hbBHhSQCJifChhrQF1jLG7gPQAvgCAuAAQGQAEFVCWQDvCDDPD1QAuA1AqA5QFWG9gMKMIgBAnQgVJqkUGaQhFBrhUBhQiBCXiVBqQl+DQnPAWQgqACgoAAIgOAAQl4AAkviKg");
	this.shape_69.setTransform(174.7,174.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(3,1,1).p("A6WgOQALpyFIm2QA/hYBMhSQCPiaCmhrQFxjZHBgSQAvgCAuAAQGVACFUCdQD7CADWDpQAxA1AtA3QFzHGAAJ+QAAAUAAAUQgLJbkzGtQhJBphaBgQiHCSiaBpQl8DinTAVQgqACgpAAQl/ABk7iNQkbiAjmj8Qg0g4gug8Ql2nUAKqRg");
	this.shape_70.setTransform(174.6,174.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#765099").s().p("ArHZHQkbiAjmj8Qg0g4gug8Ql2nUAKqRQALpyFIm2QA/hYBMhSQCPiaCmhrQFxjZHBgSQAvgCAuAAQGVACFUCdQD7CADWDpQAxA1AtA3QFzHGAAJ+IAAAoQgLJbkzGtQhJBphaBgQiHCSiaBpQl8DinTAVQgqACgpAAIgIAAQl6AAk4iMg");
	this.shape_71.setTransform(174.6,174.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(3,1,1).p("Ay3hhQBAqxBtkrQBtkrDBiaQFch+F6AAQGCAAFWB8QDGCjCyF4QCxF4hDKpQhEKphvEzQhvEzi3CuQlkBvmOAZQmQAYkNiPQkOiQidmTQicmUBAqwg");
	this.shape_72.setTransform(175.2,176);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#6E4199").s().p("AqwYGQkOiQidmTQicmUBAqwQBAqxBtkrQBtkrDBiaQFch+F6AAQGCAAFWB8QDGCjCyF4QCxF4hDKpQhEKphvEzQhvEzi3CuQlkBvmOAZQg7AEg3AAQlFAAjmh7g");
	this.shape_73.setTransform(175.2,176);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(3,1,1).p("Aw1hbQA6qJBhkaQBgkaCtiSQE3h2FRAAQFYAAExB1QCxCZCeFiQCfFjg8KCQg9KChiEiQhjEhikCkQk+BpljAXQllAXjwiHQjxiHiLl9QiMl8A5qJg");
	this.shape_74.setTransform(175.2,176);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6E4199").s().p("ApmWuQjxiHiLl9QiMl8A5qJQA6qJBhkaQBgkaCtiSQE3h2FRAAQFYAAExB1QCxCZCeFiQCfFjg8KCQg9KChiEiQhjEhikCkQk+BpljAXQg0ADgyAAQkiAAjNhzg");
	this.shape_75.setTransform(175.2,176);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(3,1,1).p("AuzhWQAzpiBVkIQBVkJCYiJQERhvEpAAQEuAAENBtQCbCQCLFNQCMFOg1JaQg1JchXEQQhXEPiQCaQkYBjk4AWQk5AVjUh+QjTiAh7llQh7llAypig");
	this.shape_76.setTransform(175.2,176);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6E4199").s().p("AocVWQjTiAh7llQh7llAypiQAzpiBVkIQBVkJCYiJQERhvEpAAQEuAAENBtQCbCQCLFNQCMFOg1JaQg1JchXEQQhXEPiQCaQkYBjk4AWQgtADgsAAQj/AAi1hsg");
	this.shape_77.setTransform(175.2,176);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(3,1,1).p("AsxhQQAro7BKj3QBJj4CDiAQDshoEAAAQEFAADnBnQCGCGB5E4QB4E4guIzQguI1hKD+QhMD+h8CQQjxBckNAVQkPAUi2h3Qi3h3hqlOQhplOAro6g");
	this.shape_78.setTransform(175.3,176);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#6E4199").s().p("AnST9Qi3h3hqlOQhplOAro6QAro7BKj3QBJj4CDiAQDshoEAAAQEFAADnBnQCGCGB5E4QB4E4guIzQguI1hKD+QhMD+h8CQQjxBckNAVQgoADgmAAQjbAAichmg");
	this.shape_79.setTransform(175.3,176);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(3,1,1).p("AquhKQAkoUA+jmQA+jnBuh3QDGhhDXAAQDcAADCBgQBxB9BlEiQBlEjgmIMQgnIOg/DsQg/DthoCGQjLBWjiATQjkATiZhvQiahvhZk3QhZk3AloSg");
	this.shape_80.setTransform(175.2,176);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6E4199").s().p("AmHSlQiahvhZk3QhZk3AloSQAkoUA+jmQA+jnBuh3QDGhhDXAAQDcAADCBgQBxB9BlEiQBlEjgmIMQgnIOg/DsQg/DthoCGQjLBWjiATQgiADggAAQi5AAiChfg");
	this.shape_81.setTransform(175.2,176);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(3,1,1).p("AothFQAensAyjVQAyjWBZhuQChhaCvAAQCxAACeBZQBbB0BSEMQBTENggHmQgfHmgzDbQgzDchVB8QilBPi3ASQi4ARh9hmQh8hnhIkgQhIkgAdnrg");
	this.shape_82.setTransform(175.3,176);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6E4199").s().p("Ak+RNQh8hnhIkgQhIkgAdnrQAensAyjVQAyjWBZhuQChhaCvAAQCxAACeBZQBbB0BSEMQBTENggHmQgfHmgzDbQgzDchVB8QilBPi3ASQgaADgaAAQiWAAhrhYg");
	this.shape_83.setTransform(175.3,176);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(3,1,1).p("AGrAlQgYG/gnDKQgnDJhBByQh+BJiMARQiOAQhfheQhghfg3kJQg3kJAWnDQAXnFAmjEQAnjEBEhmQB8hSCFAAQCIAAB5BRQBGBrA/D3QA/D3gYG/g");
	this.shape_84.setTransform(175.3,176);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6E4199").s().p("AjzP1Qhghfg3kJQg3kJAWnDQAXnFAmjEQAnjEBEhmQB8hSCFAAQCIAAB5BRQBGBrA/D3QA/D3gYG/QgYG/gnDKQgnDJhBByQh+BJiMARQgVACgTAAQhzAAhShQg");
	this.shape_85.setTransform(175.3,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},7).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,352,352);


(lib.gameExplain_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.letsClick = new lib.letsClick_btn();
	this.letsClick.parent = this;
	this.letsClick.setTransform(121.3,411.6,1,1,0,0,0,88.9,18.6);
	new cjs.ButtonHelper(this.letsClick, 0, 1, 2, false, new lib.letsClick_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.letsClick).wait(1172));

	// Layer 3
	this.instance = new lib.cursorTutorialInside_mc();
	this.instance.parent = this;
	this.instance.setTransform(596,151.9,0.34,0.34,0,0,0,43.6,43.1);

	this.instance_1 = new lib.cursorTutorialInside_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(234.1,82.1,0.34,0.34,0,0,0,43.6,43.1);

	this.instance_2 = new lib.coin_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(553.5,168.4,1.447,1.447,0,0,0,11.7,10.9);

	this.instance_3 = new lib.coin_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(116.5,133.8,1.447,1.447,0,0,0,11.7,10.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbBIQARgFAMgKQANgKAJgOQAHgPABgRQgBgLgFgEQgEgDgLAAIg5AAIAAgkIgBgQIgBgOIgDgKIAVgDIACAHIAAAOIAAASIAAARIAwAAQAMAAAIAEQAGAEADAIQADAIAAALQgBAUgIASQgHARgMAOQgMANgNAIQgPAJgPADg");
	this.shape.setTransform(570.8,310.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4AyIASgDIASgDIAPgEIgJgZIgOgeIgOgfIgQgZIAbgCIALAWIANAcIALAdIAIAcQAOgFAHgNQAHgOAAgWIgBgPIgDgTIgGgRIAZgCQACAGACANQACAMAAAQQAAASgEAPQgEAQgLAMQgLANgUAJQgKAEgLADIgZAGIgZAEg");
	this.shape_1.setTransform(558.1,314);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjBGIAEgWIAMgBIATAAIARAAIAAg3QAAgLgCgGQgBgHgGgDQgFgEgKgCIgNgDIgJgDIAEgWIAIADIANACQAOADAJAFQAJAFAEAKQAEAKAAATIAAA7IgEAWIgiAAIgMAAIgMABIgJAAg");
	this.shape_2.setTransform(546.2,313.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKBFIAAhMQAAgLgCgHQgBgGgFgEQgEgFgJgBIgLgDIgGgDIAEgVIAGABIALACQANAEAIAEQAIAGAEAKQADALAAATIAABQg");
	this.shape_3.setTransform(537.3,313.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag9AuIAEAAIAGgBIAKAAIAEAAIgBgWIgBgZIgBgZIgBgSIgBAAIgGAAIgHAAIgGgBIAFgWIARABIAWAAIAoAAQASAAAKAEQAJAEAEALQADAMAAAUIAABUIgUAAIAAhNQAAgMgBgIQgCgHgGgEQgFgFgMAAIgrAAIABAPIABATIABAVIABAVIAAAOIgEAXIgTAAIgOAAIgLABg");
	this.shape_4.setTransform(525.7,313.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag4AyIASgDIASgDIAPgEIgJgZIgNgeIgQgfIgPgZIAbgCIAMAWIAMAcIAKAdIAJAcQAOgFAHgNQAHgOAAgWIgBgPIgDgTIgHgRIAagCQACAGACANQACAMAAAQQAAASgEAPQgEAQgLAMQgLANgVAJQgJAEgLADIgZAGIgZAEg");
	this.shape_5.setTransform(505.8,314);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbBIQARgFAMgKQAOgKAHgOQAIgPAAgRQAAgLgEgEQgGgDgJAAIg7AAIAAgkIAAgQIgBgOIgCgKIAUgDIABAHIABAOIAAASIAAARIAwAAQAMAAAHAEQAHAEACAIQADAIAAALQAAAUgIASQgGARgNAOQgMANgOAIQgPAJgOADg");
	this.shape_6.setTransform(492.9,310.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvAtIgFggIgHggIgGgcQgDgNgCgGIAYgCIACAKIAEAXIAHAlQAMgCAGgFQAHgEACgHQACgGAAgJIgCgRIgFgSIAXgCIADAPQABAJAAAKQABAMgEAKQgDALgKAHQgLAIgUAEIAAAGIACAMIACAKIAMgBIAPgDQAPgDALgHQAMgGAFgNQAHgMgBgUQAAgNgCgMQgCgNgEgJIAYgCIAEASIACAaQAAAXgGAPQgHAPgKALQgKAKgOAGQgNAFgOADIgWAEIgRABIgFgYg");
	this.shape_7.setTransform(473.9,313.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAqBEIgXggQgQgWgageQgIAKgDALQgCANAAAMQAAALADAJIAEASIgYAAIgDgPIgBgRQAAgTAFgRQAFgQANgOIgRgTIgQgQIAAgBIAbgCIAYAaIAgApQAIgFAEgIQAFgIAAgMQAAgHgCgJIgGgQIAZgCIADAPIABAPQAAAPgHANQgHAMgOAIIAPAUIAQAVIALARg");
	this.shape_8.setTransform(459,313.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbBIQARgFAMgKQAOgKAHgOQAIgPAAgRQAAgLgEgEQgGgDgKAAIg6AAIAAgkIAAgQIgBgOIgCgKIAUgDIABAHIABAOIABASIAAARIAvAAQANAAAGAEQAHAEACAIQADAIAAALQAAAUgHASQgIARgMAOQgMANgOAIQgPAJgPADg");
	this.shape_9.setTransform(445.3,310.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAKBFIAAhMQAAgLgCgHQgBgGgFgEQgEgFgJgBIgLgDIgGgDIAEgVIAGABIALACQANAEAIAEQAIAGAEAKQADALAAATIAABQg");
	this.shape_10.setTransform(435.3,313.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag9AuIAEAAIAGgBIAKAAIAEAAIgBgWIgBgZIgBgZIgBgSIgBAAIgGAAIgHAAIgGgBIAFgWIARABIAWAAIAoAAQASAAAKAEQAJAEAEALQADAMAAAUIAABUIgUAAIAAhNQAAgMgBgIQgCgHgGgEQgFgFgMAAIgrAAIABAPIABATIABAVIABAVIAAAOIgEAXIgTAAIgOAAIgLABg");
	this.shape_11.setTransform(423.8,313.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKBFIAAhMQAAgLgCgHQgBgGgFgEQgEgFgJgBIgLgDIgGgDIAEgVIAGABIALACQANAEAIAEQAIAGAEAKQADALAAATIAABQg");
	this.shape_12.setTransform(406.5,313.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbBIQARgFAMgKQAOgKAHgOQAIgPAAgRQAAgLgEgEQgGgDgKAAIg6AAIAAgkIAAgQIgBgOIgDgKIAVgDIABAHIABAOIABASIAAARIAvAAQANAAAGAEQAHAEACAIQADAIAAALQAAAUgHASQgIARgMAOQgMANgOAIQgPAJgPADg");
	this.shape_13.setTransform(397.1,310.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAnBEIAAhJQAAgOgBgIQgCgJgGgEQgFgEgMAAIgpAAIgTAAIgKgBIAEgXIANABIAWAAIAhAAQARAAAKAFQAKAEADALQAEALgBAVIAABTgAg0BEIAAhGIATAAIAABGg");
	this.shape_14.setTransform(384.2,313.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMBGIAEgXIALgBIATAAIAaAAIAAgPIAAgPQAAgQgCgNQgCgOgHgJQgIgJgOgBQgKABgHAEQgHAEgFAIQgEAGgDAIIgEAOIgFATIgEAZIgFAaIgUAAIAGgbIAFgbIADgWQADgSgHgJQgGgJgMgCIAFgYQAPADAIAJQAJAJACAOQADgHAGgIQAGgIAKgGQAIgFAOAAQAUAAAKALQALALAEASQAEAUAAAXIAAAgIgBAGIgCAJIgBAHIgxAAIgLAAIgJABIgHAAg");
	this.shape_15.setTransform(368.6,313.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgvAtIgFggIgHggIgGgcQgDgNgCgGIAYgCIACAKIAEAXIAHAlQAMgCAGgFQAGgEADgHQACgGAAgJIgCgRIgFgSIAXgCIADAPQABAJAAAKQABAMgEAKQgDALgKAHQgLAIgUAEIAAAGIACAMIACAKIAMgBIAPgDQAPgDALgHQAMgGAFgNQAHgMAAgUQgBgNgCgMQgCgNgEgJIAYgCIAEASIACAaQAAAXgGAPQgHAPgKALQgKAKgOAGQgNAFgOADIgWAEIgRABIgFgYg");
	this.shape_16.setTransform(352.8,313.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJAkQAIgMADgKQAEgIAAgHQAAgGgEgDQgCgDgKgCIgHgDIgHgDIADgVIAHABIAJADQAQADAIAIQAGAGAAAOQAAALgEANQgGANgKAOg");
	this.shape_17.setTransform(341.2,310.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAcBdIAAiSIAAgKQgBgDgCgBIgGgBIgGAAIgNAAIgNAAIgGAAIgTAAIgJgBIAEgXIANABIAWAAIAoAAQAHABADABQAEACAAAFQACAGAAAKIAACfg");
	this.shape_18.setTransform(331.9,315.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdA2QAPgDAMgHQAKgGAHgJQAGgJABgLQAAgIgEgBQgEgDgIAAIg5AAIAAgtIAAgRIgBgPQgBgHgCgEIAigFIABAJIABAOIABASIAAANIAmAAQALAAAIACQAIADAEAIQAFAJAAAPQAAAWgIARQgIASgOAOQgNANgQAIQgQAIgRACg");
	this.shape_19.setTransform(314.9,310.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAcBFIAAhDQABgMgCgGQgBgHgEgDQgEgCgIAAIgpAAIgTgBQgIAAgDgCIAGglIAPAAIAbAAIAdAAQAUABAKAFQAKAGADAMQADANgBATIAABRgAg3BFIAAhCIAhAAIAABCg");
	this.shape_20.setTransform(301.5,313.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag4BeIAAh0IAgAAIAAB0gAgGABQARgEAJgJQAKgKAAgQQAAgJgEgDQgFgDgKABIgoAAIgUgBQgJAAgEgCIAGgmIAKABIAOAAIANAAIAkAAQARAAAKAEQALAFAEAJQAEAKAAAQQAAAcgLAUQgKATgRAMQgRAMgUAEg");
	this.shape_21.setTransform(286.8,315.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgdA2QAPgDAMgHQAKgGAHgJQAGgJABgLQAAgIgEgBQgEgDgIAAIg5AAIAAgtIAAgRIgBgPQgBgHgCgEIAigFIABAJIABAOIABASIAAANIAmAAQALAAAIACQAIADAEAIQAFAJAAAPQAAAWgIARQgIASgOAOQgNANgQAIQgQAIgRACg");
	this.shape_22.setTransform(272.7,310.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgRAmQAIgMAEgJQAEgJAAgGQAAgEgDgCQgEgCgHgCIgIgCIgIgCIAHgmIAGACIAKACQAOACAJAFQAJAFAEAHQAEAIgBAKQAAAOgGAQQgHAPgKAPg");
	this.shape_23.setTransform(262.7,311.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag4BeIAAh0IAhAAIAAB0gAgFABQAQgEAKgJQAJgKAAgQQAAgJgEgDQgFgDgJABIgpAAIgUgBQgIAAgFgCIAGgmIAKABIAOAAIANAAIAkAAQARAAAKAEQALAFAEAJQAEAKAAAQQgBAcgKAUQgKATgSAMQgRAMgTAEg");
	this.shape_24.setTransform(251.8,315.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgBAmIANgBIAQAAIAQAAIABgWQAAgNgCgLQgBgMgHgHQgGgIgNAAQgMAAgGAHQgHAHgEAKQgEAJgCAIIgFAWIgGAcIgFAcIgnAAIAFgYIAEgaIAEgXIACgPQABgOgGgHQgGgHgNgCIAIgwQAVABAMAKQALALAEARQADgJAHgJQAGgJALgGQAKgGARAAQAWAAANANQANANAFAWQAEAWAAAZIAAAaIgBAIIgCAPIgCAOIgBAIIg7AAIgRAAIgKABg");
	this.shape_25.setTransform(229,311.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAjBTIAAhSQAAgNgCgIQgCgIgFgDQgEgDgKAAIgxAAIgWgBQgKAAgEgBIAHguIASABIAhAAIAiAAQAYAAAMAHQAMAGAEAPQADAPAAAYIAABhgAhCBTIAAhOIAnAAIAABOg");
	this.shape_26.setTransform(210.7,311.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAZBTIAAhWQAAgSgFgGQgFgHgOAAIggAAIgUgBQgJAAgDgBIAHguIARABIAhAAIAPAAQAYAAAMAGQAMAFAEAOQADANAAAYIAABmg");
	this.shape_27.setTransform(193.8,311.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSBOQgIgHAAgNQAAgNAIgHQAHgHALAAQAMAAAIAHQAHAIABAMQgBAMgHAHQgHAIgNAAQgLAAgHgHgAgQAOIgCgMIgDgTIgCgYIgBgVIAAgWIAyAAIAAAUIgBAWIgDAYIgCAUIgCAMg");
	this.shape_28.setTransform(177.6,312);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAgIAKgBIAOAAIANAAIAAgTIgBgTQgBgKgGgGQgFgHgLAAQgJAAgFAGQgGAGgEAIIgEAOIgFATIgEAXIgFAYIggAAIADgVIAEgVIADgUIACgMQABgLgFgGQgFgGgLgBIAGgpQASABAKAJQAKAIADAOQACgHAGgHQAFgHAJgGQAJgFANAAQATAAALALQAKALAEATQAEASAAAVIAAAVIgBAHIgBAMIgCAMIgBAHIgxAAIgOAAIgJAAg");
	this.shape_29.setTransform(425.1,275.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAcBFIAAhDQABgMgCgGQgBgHgEgDQgEgCgIAAIgpAAIgTgBQgIAAgDgCIAGglIAPABIAbAAIAdAAQAUAAAKAFQAKAGADAMQADANgBATIAABRgAg3BFIAAhBIAhAAIAABBg");
	this.shape_30.setTransform(409.8,275.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAcBFIAAhDQABgMgCgGQgBgHgEgDQgEgCgIAAIgpAAIgTgBQgIAAgDgCIAGglIAPABIAbAAIAdAAQAUAAAKAFQAKAGADAMQADANgBATIAABRgAg3BFIAAhBIAhAAIAABBg");
	this.shape_31.setTransform(389.8,275.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAfBGQgFgJgMgTQgMgSgVgaQgEAEgBAHIgBANQABAQACALQADAMAEAJIgrAAIgDgRIgBgRQAAgRAFgRQAGgPAPgMIgSgUIgTgTIAAgCIAugCQAGAFALAOIAcAlQADgDACgFQABgEAAgGQAAgJgDgJQgDgKgEgIIArgDQADAHAAAHIABAOQAAAIgCAJQgDAJgGAJQgGAIgLAGIAQAVIAOAWIALATg");
	this.shape_32.setTransform(375.1,275.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag9AfIAGgBIAKAAIACAAIAAgNIAAgRIgBgQIgCgNIAAAAIgFAAIgGgBIgFgBIAHgmIAKABIAQAAIATAAIAhAAQAUAAAKAEQAKAFADALQADAMgBATIAABWIghAAIAAhJQABgOgEgGQgEgFgMAAIgdAAIABANIABAQIAAARIAAANIgFAnIgbAAIgJAAIgJAAIgHABg");
	this.shape_33.setTransform(359,275.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AglAdQAOgBAKgEQAJgEAEgHQAFgHAAgIIAAgEQABgKgFgEQgDgEgLgDIgOgDIgJgCIAHgmIAKADIAPACQAQADAKAGQAJAGADAMQAEAMABAUIABAbIACAbQABANACAIIghAAIgDgIIgBgMIgBgMQgFARgMAIQgNAJgVAAg");
	this.shape_34.setTransform(346.1,275.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAUBFIAAhIQABgPgEgFQgEgFgMAAIgaAAIgRgBQgHAAgDgCIAGglIAOABIAbAAIAMAAQAVAAAKAEQAJAFADALQADAMAAATIAABVg");
	this.shape_35.setTransform(334.3,275.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQBCQgHgGAAgLQAAgKAHgGQAGgGAKAAQAJAAAGAGQAHAGAAAKQAAAKgGAHQgGAGgKAAQgKAAgGgGgAgQARQgDgDgBgDIAAgHQAAgGAEgFQAEgFAGgEIAJgHQAFgDAAgEQAAgEgEgCQgEgDgHAAQgKABgIACIgNAFIgGgfQAEgDALgDQAKgDARAAQAQAAAKAEQALAFAFAJQAFAIAAALQAAAKgFAHQgEAHgGAFIgLAHQgFAEAAADIABAEIABAEg");
	this.shape_36.setTransform(322,275.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAgIAKgBIAOAAIANAAIAAgTIgBgTQgBgKgGgGQgFgHgLAAQgJAAgFAGQgGAGgEAIIgEAOIgFATIgEAXIgFAYIggAAIADgVIAEgVIADgUIACgMQABgLgFgGQgFgGgLgBIAGgpQASABAKAJQAKAIADAOQACgHAGgHQAFgHAJgGQAJgFANAAQATAAALALQAKALAEATQAEASAAAVIAAAVIgBAHIgBAMIgCAMIgBAHIgxAAIgOAAIgJAAg");
	this.shape_37.setTransform(529.6,167.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AguAXIgJguIgMgsIApgCIAIAuIAHA1IAGAAIAKgCQANgDAJgIQAHgKABgNQAAgMgHgGQgGgHgLAAIgJAAIgHACIAGgnIAJgCIAKAAQAOAAAKAFQAJAGAFAHQAFAJACAKQADAKAAAKQAAASgGAOQgGAOgJAJQgJAKgLAEQgKAGgMACIgYAFIgSACIgJgwg");
	this.shape_38.setTransform(514.2,167.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag3AgIAMgBIAOgBIANAAIAgAAIAAgMIgBgOIAAgKQgBgJgCgFQgBgFgFgCQgFgCgHABIgYAAIgQgBQgIAAgDgCIAGgmIAMABIAZAAIATAAQASAAAJAFQAJAFADAMQADALAAAUIAAARIgBAFIAAAJIAAAJIAAAFIARAAIgHAnIhRAAIgOAAIgNAAIgJABg");
	this.shape_39.setTransform(500.3,167.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag6AiIAWgBIAVgDIgHgVIgMgbIgQgdQgIgPgIgKIAugCQAHAKAHAQIALAhQAGASAEASQAIgCAEgKQAEgJAAgOQAAgJgCgPQgDgPgHgTIAqgCIAFAUQABAMAAANIgBAXQgCALgFAMQgEALgJAKQgKALgPAHQgKAGgNADQgOAEgPADQgQACgRABg");
	this.shape_40.setTransform(485.6,167.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AADBGIAAhIQABgIgCgFQgBgFgDgCQgEgDgIgCIgNgCIgIgCIAGgnIAIADIAQACQAQADAJAGQAJAFAEAMQAEAMgBAUIAABNg");
	this.shape_41.setTransform(473.4,167.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag9AfIAGgBIAKAAIACAAIAAgNIAAgRIgBgQIgCgNIAAAAIgFAAIgGgBIgFgBIAHgmIAKABIAQAAIATAAIAhAAQAUAAAKAEQAKAFADALQADAMgBATIAABWIghAAIAAhJQABgOgEgGQgEgFgMAAIgdAAIABANIABAQIAAARIAAANIgFAnIgbAAIgJAAIgJAAIgHABg");
	this.shape_42.setTransform(461,167.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgQBCQgHgGAAgLQAAgKAHgGQAGgGAKAAQAJAAAGAGQAHAGAAAKQAAAKgGAHQgGAGgKAAQgKAAgGgGgAgQARQgDgDgBgDIAAgHQAAgGAEgFQAEgFAGgEIAJgHQAFgDAAgEQAAgEgEgCQgEgDgHAAQgKABgIACIgNAFIgGgfQAEgDALgDQAKgDARAAQAQAAAKAEQALAFAFAJQAFAIAAALQAAAKgFAHQgEAHgGAFIgLAHQgFAEAAADIABAEIABAEg");
	this.shape_43.setTransform(446.9,167.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgzAgIAJgBIAOAAIAOAAIAlAAIACgPIABgPQAAgMgDgGQgDgHgGgCQgHgDgJABIgVAAIgSgBQgIAAgEgCIAHgmIANABIAUAAIASAAQAWAAALAGQAMAGAEAPQAFAOgBAZQAAARgCASIgGAkIhHAAIgNAAIgNAAIgKABg");
	this.shape_44.setTransform(428.8,167.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AADBFIgBgWIgBgYIAAgWQAAgMACgHQABgHADgDIglAAIgRgBQgGAAgEgBIAHgmIAOABIAbAAIBCAAIgGAnIgFAAQgGAAgDAEQgDAEgBAKIACAoIABAng");
	this.shape_45.setTransform(416,167.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRAmQAIgMAEgJQAEgJAAgGQAAgEgDgCQgEgCgHgCIgIgCIgIgCIAHgmIAGACIAKACQAOACAJAFQAJAFAEAHQAEAIgBAKQAAAOgGAQQgHAPgKAPg");
	this.shape_46.setTransform(405.6,165.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgWArQAMgCAIgFQAJgGAFgHQAFgHAAgJQAAgGgDgBQgDgDgGAAIgtAAIAAgkIAAgNIgBgNQgBgFgBgDIAbgEIABAHIABAMIAAAOIAAAKIAdAAQAKAAAGACQAGACAEAHQADAGAAANQABARgHAPQgGANgLALQgKAKgNAHQgNAGgOACg");
	this.shape_47.setTransform(381.6,166.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgqAhIgEgaIgGgXIgEgWIgFgPIAggDIACAKIACAQIADAVQAIgBADgFQACgEAAgGIgBgNIgEgPIAegDIABANIABANQABALgEAIQgDAJgJAFQgIAFgPADIABADIABAHIAAAEIAMgBIAMgCQAJgDAGgFQAHgEACgIQAEgHAAgMIgCgQQgCgKgDgKIAfgCIADANIABATQAAAUgHANQgFAOgJAIQgKAJgLAFQgKAEgKACIgOACIgNACIgLABIgEgYg");
	this.shape_48.setTransform(370,168.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AACA4IAAgSIgBgTIAAgSQAAgKABgFQABgFADgDIgdAAIgOgBIgIgBIAFgfIALABIAWAAIA1AAIgFAgIgEAAQgFAAgDADQgCADAAAIIABAgIABAgg");
	this.shape_49.setTransform(358.2,168.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAQA4IAAg6QABgLgDgFQgEgEgJAAIgVAAIgNgBIgJgBIAFgfIAMABIAWAAIAJAAQAQAAAIAEQAIAEADAJQACAJAAAQIAABEg");
	this.shape_50.setTransform(347.8,168.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdAXQALAAAIgEQAHgDADgGQAFgFAAgGIAAgEQAAgIgEgDQgCgEgJgBIgLgDIgIgCIAGgeIAIACIAMACQANADAHAFQAIAFADAIQADAKAAAQIABAWIACAVIACARIgaAAIgCgHIgCgJIAAgKQgFAOgJAHQgKAHgRAAg");
	this.shape_51.setTransform(339,168.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgzAgIAJgBIAOAAIAOAAIAlAAIACgPIABgPQAAgMgDgGQgDgHgGgCQgHgDgJABIgVAAIgSgBQgIAAgEgCIAHgmIANABIAUAAIASAAQAWAAALAGQAMAGAEAPQAFAOgBAZQAAARgCASIgGAkIhHAAIgNAAIgNAAIgKABg");
	this.shape_52.setTransform(312.7,167.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAAAgIAKgBIAOAAIANAAIAAgTIgBgTQgBgKgGgGQgFgHgLAAQgJAAgFAGQgGAGgEAIIgEAOIgFATIgEAXIgFAYIggAAIADgVIAEgVIADgUIACgMQABgLgFgGQgFgGgLgBIAGgpQASABAKAJQAKAIADAOQACgHAGgHQAFgHAJgGQAJgFANAAQATAAALALQAKALAEATQAEASAAAVIAAAVIgBAHIgBAMIgCAMIgBAHIgxAAIgOAAIgJAAg");
	this.shape_53.setTransform(297.9,167.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AADBGIAAhIQABgIgCgFQgBgFgDgCQgEgDgIgCIgNgCIgIgCIAGgnIAIADIAQACQAQADAJAGQAJAFAEAMQAEAMgBAUIAABNg");
	this.shape_54.setTransform(285.2,167.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag3AgIAMgBIAOgBIANAAIAfAAIAAgMIAAgOIAAgKQAAgJgCgFQgCgFgFgCQgFgCgHABIgYAAIgRgBQgGAAgEgCIAHgmIALABIAZAAIATAAQASAAAJAFQAJAFADAMQADALAAAUIAAARIAAAFIAAAJIgBAJIAAAFIAQAAIgFAnIhSAAIgOAAIgMAAIgKABg");
	this.shape_55.setTransform(274.5,167.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AADBfIAAh5QABgMgEgFQgDgFgLgCIgNgDIgIgDIAGgmIAIADIAQADQAQACAJAGQAJAFAEALQAEALgBATIAACBg");
	this.shape_56.setTransform(262.5,169.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgPBBQgHgGAAgLQAAgKAHgGQAGgGAJgBQAKAAAGAHQAHAGAAAKQAAAKgGAHQgGAFgLABQgJAAgGgGgAgOAMIgBgKIgCgQIgCgUIgBgSIAAgSIAqAAIAAARIgBATIgCAUIgCAQIgCAKg");
	this.shape_57.setTransform(250.2,167.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgdA2QAPgDAMgHQAKgGAHgJQAGgJABgLQAAgIgEgBQgEgDgIAAIg5AAIAAgtIAAgRIgBgPQgBgHgCgEIAigFIABAJIABAOIABASIAAANIAmAAQALAAAIACQAIADAEAIQAFAJAAAPQAAAWgIARQgIASgOAOQgNANgQAIQgQAIgRACg");
	this.shape_58.setTransform(640.5,131.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAAAgIAKgBIAOAAIANAAIAAgTIgBgTQgBgKgGgGQgFgHgLAAQgJAAgFAGQgGAGgEAIIgEAOIgFATIgEAXIgFAYIggAAIADgVIAEgVIADgUIACgMQABgLgFgGQgFgGgLgBIAGgpQASABAKAJQAKAIADAOQACgHAGgHQAFgHAJgGQAJgFANAAQATAAALALQAKALAEATQAEASAAAVIAAAVIgBAHIgBAMIgCAMIgBAHIgxAAIgOAAIgJAAg");
	this.shape_59.setTransform(626.4,134.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAcBGIAAhFQABgLgCgHQgBgGgEgDQgEgCgIAAIgpAAIgTgBQgIAAgDgBIAGgmIAPABIAbAAIAdAAQAUgBAKAGQAKAGADAMQADAMgBAVIAABRgAg3BGIAAhCIAhAAIAABCg");
	this.shape_60.setTransform(611.1,134.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAAAgIAKgBIAOAAIANAAIAAgTIgBgTQgBgKgGgGQgFgHgLAAQgJAAgFAGQgGAGgEAIIgEAOIgFATIgEAXIgFAYIggAAIADgVIAEgVIADgUIACgMQABgLgFgGQgFgGgLgBIAGgpQASABAKAJQAKAIADAOQACgHAGgHQAFgHAJgGQAJgFANAAQATAAALALQAKALAEATQAEASAAAVIAAAVIgBAHIgBAMIgCAMIgBAHIgxAAIgOAAIgJAAg");
	this.shape_61.setTransform(590.4,134.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ag4BeIAAh0IAhAAIAAB0gAgFABQAQgEAKgJQAJgKAAgQQAAgJgEgDQgFgDgJABIgqAAIgTgBQgIAAgFgCIAGgmIAKABIAOAAIANAAIAkAAQASAAAJAEQALAFAEAJQAEAKAAAQQgBAcgKAUQgKATgSAMQgRAMgTAEg");
	this.shape_62.setTransform(575.5,136.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgdA2QAPgDAMgHQAKgGAHgJQAGgJABgLQAAgIgEgBQgEgDgIAAIg5AAIAAgtIAAgRIgBgPQgBgHgCgEIAigFIABAJIABAOIABASIAAANIAmAAQALAAAIACQAIADAEAIQAFAJAAAPQAAAWgIARQgIASgOAOQgNANgQAIQgQAIgRACg");
	this.shape_63.setTransform(561.4,131.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgRAmQAIgMAEgJQAEgJAAgGQAAgEgDgCQgEgCgHgCIgIgCIgIgCIAHgmIAGACIAKACQAOACAJAFQAJAFAEAHQAEAIgBAKQAAAOgGAQQgHAPgKAPg");
	this.shape_64.setTransform(551.4,132.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Ag5BeIAAh0IAiAAIAAB0gAgFABQAQgEAKgJQAJgKAAgQQAAgJgEgDQgFgDgJABIgqAAIgTgBQgIAAgFgCIAGgmIAKABIAOAAIANAAIAkAAQASAAAJAEQAKAFAFAJQAEAKAAAQQAAAcgLAUQgKATgSAMQgQAMgVAEg");
	this.shape_65.setTransform(540.5,136.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgRAmQAIgMAEgJQAEgJAAgGQAAgEgDgCQgEgCgHgCIgIgCIgIgCIAHgmIAGACIAKACQAOACAJAFQAJAFAEAHQAEAIgBAKQAAAOgGAQQgHAPgKAPg");
	this.shape_66.setTransform(528.8,132.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ag0BGIAAhOIABgLIABgKIgFAAIgGAAIgFgBIAGgmIAPABIAUAAIAuAAQAVAAAKAFQAJAGADAMQADANAAAUIAAAqIgBAFIgBAKIgCANIgCALgAgUAfIA3AAIAAggQABgOgEgHQgEgGgMAAIgkAAg");
	this.shape_67.setTransform(517,134.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgQBCQgHgGAAgLQAAgKAHgGQAGgGAKAAQAJAAAGAGQAHAGAAAKQAAAKgGAHQgGAGgKAAQgKAAgGgGgAgQARQgDgDgBgDIAAgHQAAgGAEgFQAEgFAGgEIAJgHQAFgDAAgEQAAgEgEgCQgEgDgHAAQgKABgIACIgNAFIgGgfQAEgDALgDQAKgDARAAQAQAAAKAEQALAFAFAJQAFAIAAALQAAAKgFAHQgEAHgGAFIgLAHQgFAEAAADIABAEIABAEg");
	this.shape_68.setTransform(503,134.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgzAgIAJgBIAOAAIAOAAIAlAAIACgPIABgPQAAgMgDgGQgDgHgGgCQgHgDgJABIgVAAIgSgBQgIAAgEgCIAHgmIANABIAUAAIASAAQAWAAALAGQAMAGAEAPQAFAOgBAZQAAARgCASIgGAkIhHAAIgNAAIgNAAIgKABg");
	this.shape_69.setTransform(485,134.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AADBGIgBgXIgBgYIAAgWQAAgMACgHQABgHADgDIglAAIgRgBQgHAAgDgBIAHgmIANABIAcAAIBCAAIgGAnIgFAAQgGAAgDAEQgEAEAAAKIABAoIACAog");
	this.shape_70.setTransform(472.2,134.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRAmQAIgMAEgJQAEgJAAgGQAAgEgDgCQgEgCgHgCIgIgCIgIgCIAHgmIAGACIAKACQAOACAJAFQAJAFAEAHQAEAIgBAKQAAAOgGAQQgHAPgKAPg");
	this.shape_71.setTransform(461.7,132.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgdA2QAPgDAMgHQAKgGAHgJQAGgJABgLQAAgIgEgBQgEgDgIAAIg5AAIAAgtIAAgRIgBgPQgBgHgCgEIAigFIABAJIABAOIABASIAAANIAmAAQALAAAIACQAIADAEAIQAFAJAAAPQAAAWgIARQgIASgOAOQgNANgQAIQgQAIgRACg");
	this.shape_72.setTransform(446.5,131.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAcBGIAAhFQABgLgCgHQgBgGgEgDQgEgCgIAAIgpAAIgTgBQgIAAgDgBIAGgmIAPABIAbAAIAdAAQAUgBAKAGQAKAGADAMQADAMgBAVIAABRgAg3BGIAAhCIAhAAIAABCg");
	this.shape_73.setTransform(433.1,134.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAUBGIAAhJQABgOgEgGQgEgFgMAAIgaAAIgRgBQgHAAgDgBIAGgmIAOABIAbAAIAMAAQAVgBAKAFQAJAFADALQADALAAAUIAABWg");
	this.shape_74.setTransform(419,134.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AADBHIAAhIQABgJgCgFQgBgFgDgCQgEgDgIgCIgNgCIgIgCIAGgnIAIADIAQADQAQACAJAGQAJAFAEAMQAEAMgBAUIAABOg");
	this.shape_75.setTransform(408.1,134.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AglAcQAOAAAKgDQAJgFAEgGQAFgHAAgJIAAgFQABgIgFgFQgDgEgLgDIgOgDIgJgCIAHgnIAKAEIAPACQAQADAKAGQAJAHADALQAEAMABATIABAcIACAbQABANACAJIghAAIgDgJIgBgMIgBgMQgFARgMAIQgNAKgVgBg");
	this.shape_76.setTransform(398.8,134.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAAAgIAKgBIAOAAIANAAIAAgTIgBgTQgBgKgGgGQgFgHgLAAQgJAAgFAGQgGAGgEAIIgEAOIgFATIgEAXIgFAYIggAAIADgVIAEgVIADgUIACgMQABgLgFgGQgFgGgLgBIAGgpQASABAKAJQAKAIADAOQACgHAGgHQAFgHAJgGQAJgFANAAQATAAALALQAKALAEATQAEASAAAVIAAAVIgBAHIgBAMIgCAMIgBAHIgxAAIgOAAIgJAAg");
	this.shape_77.setTransform(380.3,134.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ag3AhIAKgBIANgBIAOAAIAwAAIAAgbQAAgKgCgGQgDgGgGgDQgGgDgMgCIgNgCIgMgCIgBAEIgBADIABAEQACACAEACQAEABAIABIgGAiQgXgCgKgJQgKgJAAgPQAAgJADgJIAIgTIAHgTIAQADIAZADQAPACALADQALAEAIAGQAIAGADAMQAEALAAASIAAAkIgBAHIgCALIgBALIgBAHIhRAAIgOAAIgOAAIgLABg");
	this.shape_78.setTransform(364.9,134.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgdA2QAPgDAMgHQAKgGAHgJQAGgJABgLQAAgIgEgBQgEgDgIAAIg5AAIAAgtIAAgRIgBgPQgBgHgCgEIAigFIABAJIABAOIABASIAAANIAmAAQALAAAIACQAIADAEAIQAFAJAAAPQAAAWgIARQgIASgOAOQgNANgQAIQgQAIgRACg");
	this.shape_79.setTransform(351.1,131.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgsAgIAKgBIANAAIAMAAIAaAAIgIgIIgMgQIgUgVIgNgRIgPgTIgNgQIAxgDIAPAXIASAbQAFgDACgFQACgFAAgFIgBgKIgDgKIgEgIIAqgDIACAIIABALQAAAKgCAKQgDAJgHAIQgHAHgNAFIAUAYQAJAKAEADIgIAhIhFAAIgPAAIgPAAIgMAAg");
	this.shape_80.setTransform(337.9,134.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AADBHIAAhIQABgJgCgFQgBgFgDgCQgEgDgIgCIgNgCIgIgCIAGgnIAIADIAQADQAQACAJAGQAJAFAEAMQAEAMgBAUIAABOg");
	this.shape_81.setTransform(326.4,134.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("Ag9AfIAGgBIAKAAIACAAIAAgNIAAgRIgBgQIgCgNIAAAAIgFAAIgGgBIgFgBIAHgmIAKABIAQAAIATAAIAhAAQAUAAAKAEQAKAFADALQADAMgBATIAABWIghAAIAAhJQABgOgEgGQgEgFgMAAIgdAAIABANIABAQIAAARIAAANIgFAnIgbAAIgJAAIgJAAIgHABg");
	this.shape_82.setTransform(314.1,134.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AADBHIAAhIQABgJgCgFQgBgFgDgCQgEgDgIgCIgNgCIgIgCIAGgnIAIADIAQADQAQACAJAGQAJAFAEAMQAEAMgBAUIAABOg");
	this.shape_83.setTransform(296.3,134.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgdA2QAPgDAMgHQAKgGAHgJQAGgJABgLQAAgIgEgBQgEgDgIAAIg5AAIAAgtIAAgRIgBgPQgBgHgCgEIAigFIABAJIABAOIABASIAAANIAmAAQALAAAIACQAIADAEAIQAFAJAAAPQAAAWgIARQgIASgOAOQgNANgQAIQgQAIgRACg");
	this.shape_84.setTransform(285.7,131.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAfBGQgFgJgMgTQgMgSgVgaQgEAEgBAHIgBANQABAQACALQADAMAEAJIgrAAIgDgRIgBgRQAAgRAFgRQAGgPAPgMIgSgUIgTgTIAAgCIAugCQAGAFALAOIAcAlQADgDACgFQABgEAAgGQAAgJgDgJIgHgSIArgDQADAHAAAHIABAOQAAAIgCAJQgDAJgGAJQgGAIgLAGIAQAVIAOAWIALATg");
	this.shape_85.setTransform(272.5,134.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgpA0IgEgXIgEgYIgEgUIgCgPIgFAAIgHgBIAHgmIAKAAIAQABIAPAAIAuAAQARgBAJAGQAJAFADAKQADAKAAAPQAAATgGAPQgGAQgKALQgJALgMAIQgNAGgMADQgMACgKABIgPABIgEgSgAgTgRIADARIADAQIACAPIAGgBIAHgBQAMgDAHgHQAHgHAEgIQADgJAAgJQAAgIgEgEQgFgDgLAAIglAAIADAMg");
	this.shape_86.setTransform(256.9,134.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AADBHIAAhIQABgJgCgFQgBgFgDgCQgEgDgIgCIgNgCIgIgCIAGgnIAIADIAQADQAQACAJAGQAJAFAEAMQAEAMgBAUIAABOg");
	this.shape_87.setTransform(244.4,134.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAZBfIAAhqQABgOgDgHQgCgJgGgDQgHgEgMgCIgOgCIgGgBIgCAFIgBAGIACAFQABAEAFACQAGADAJABIgHAnQgMAAgLgEQgKgEgHgJQgGgJAAgQQAAgKADgLIAJgVIAJgWIAOADIAVADQAPABAMAEQALAEAIAHQAHAHADAMQADAMAAATIAAB1g");
	this.shape_88.setTransform(233.1,136.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAAAgIAKgBIAOAAIANAAIAAgTIgBgTQgBgKgGgGQgFgHgLAAQgJAAgFAGQgGAGgEAIIgEAOIgFATIgEAXIgFAYIggAAIADgVIAEgVIADgUIACgMQABgLgFgGQgFgGgLgBIAGgpQASABAKAJQAKAIADAOQACgHAGgHQAFgHAJgGQAJgFANAAQATAAALALQAKALAEATQAEASAAAVIAAAVIgBAHIgBAMIgCAMIgBAHIgxAAIgOAAIgJAAg");
	this.shape_89.setTransform(212.8,134.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AguAXIgKguIgLgsIAogCIAIAuIAIA1IAHAAIAJgCQAOgDAHgIQAIgKAAgNQAAgMgGgGQgGgHgLAAIgJAAIgGACIAFgnIAKgCIAKAAQAOAAAIAFQAKAFAFAIQAGAJACAKQACAKAAAKQgBASgFAOQgGAOgJAJQgJAKgLAEQgKAGgLACIgZAFIgTACIgIgwg");
	this.shape_90.setTransform(197.5,134.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("Ag3AgIALgBIAPgBIANAAIAfAAIAAgMIAAgOIAAgKQAAgJgCgFQgCgFgFgCQgFgCgHABIgYAAIgRgBQgGAAgEgCIAHgmIAMABIAYAAIAUAAQARAAAJAFQAJAFADAMQADALAAAUIAAARIAAAFIAAAJIgBAJIgBAFIARAAIgFAnIhSAAIgNAAIgNAAIgLABg");
	this.shape_91.setTransform(183.5,134.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("Ag6AiIAWgBIAVgDIgHgVIgNgbIgPgdQgIgPgIgKIAvgCQAGAKAGAPQAHAQAFASQAGASAEASQAIgCAEgKQAFgJAAgOQAAgJgDgPQgDgPgIgTIArgCIAEAUQACAMAAANIgCAXQgBALgEAMQgFALgKAKQgJALgQAHQgJAGgNADQgOAFgQACQgPADgRAAg");
	this.shape_92.setTransform(168.8,135);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AADBHIAAhIQABgJgCgFQgBgFgDgCQgEgDgIgCIgNgCIgIgCIAGgnIAIADIAQADQAQACAJAGQAJAFAEAMQAEAMgBAUIAABOg");
	this.shape_93.setTransform(156.6,134.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("Ag9AfIAGgBIAKAAIACAAIAAgNIAAgRIgBgQIgCgNIAAAAIgFAAIgGgBIgFgBIAHgmIAKABIAQAAIATAAIAhAAQAUAAAKAEQAKAFADALQADAMgBATIAABWIghAAIAAhJQABgOgEgGQgEgFgMAAIgdAAIABANIABAQIAAARIAAANIgFAnIgbAAIgJAAIgJAAIgHABg");
	this.shape_94.setTransform(144.3,134.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgMBDIARgCIAaAAIAkAAIABgWIAAgVQAAgWgDgTQgEgUgKgMQgKgNgUAAQgOAAgKAGQgKAHgGAJQgHAKgEAKIgGAUIgGAcIgGAjIgHAjIgbAAIAHgmIAHglIAFgfQADgagIgMQgJgMgRgEIAGggQAVADAMANQANAMACAVQAEgLAJgLQAIgMAOgHQANgHATgBQAbAAAPAQQAPAPAFAaQAGAaAAAiIAAAtIgBAIIgCANIgCAJIhFAAIgPAAIgNABIgLAAg");
	this.shape_95.setTransform(638.1,58.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AA3BgIAAhoQAAgTgCgMQgDgMgIgFQgIgGgQAAIg6AAIgaAAIgPgCIAGgfIASABIAfAAIAvAAQAYAAAOAGQANAGAFAQQAFAQAAAcIAAB2gAhKBgIAAhjIAcAAIAABjg");
	this.shape_96.setTransform(617.2,58.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AhPBGIAZgEIAagEQAMgDAIgDIgMgjIgTgqIgVgsQgLgUgKgOIAlgDQAIAMAIATIASAnIAPApIAMAnQATgIAKgSQALgSgBgfQAAgLgCgMQgBgMgDgNQgEgNgEgLIAjgEQACAJADARQADATABAWQgBAZgGAVQgFAWgPARQgQASgcANQgNAFgRAFQgRAFgSAEIgiAFg");
	this.shape_97.setTransform(589.2,59.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAOBhIAAhsQAAgPgDgJQgCgKgGgFQgGgGgNgDIgPgEIgJgCIAGgfIAJADIAPACQATAEALAIQALAHAFAPQAFAPAAAaIAABxg");
	this.shape_98.setTransform(573.5,58.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AhCA+IgIgsIgJgtIgIgoIgHgaIAhgDIADAPIAGAfIAJA0QARgDAJgGQAJgGADgJQADgJAAgNQAAgLgDgNIgHgZIAggDIAFAWQACAMABAOQAAAQgFAPQgFAPgOAKQgPALgdAGIABAJIADAQIACAPIAQgCIAWgEQAVgEAQgKQAPgJAJgRQAIgSAAgcQAAgSgDgSQgEgRgFgNIAigDIAGAaQACAQAAAUQAAAfgIAWQgJAWgPAOQgOAPgTAIQgTAIgUADIgfAFIgYADIgGgjg");
	this.shape_99.setTransform(557.3,58.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgNAyQALgQAFgNQAFgOAAgJQAAgIgFgFQgFgEgMgDIgLgDIgKgEIAGgfIAJADIAMADQAXAFALAKQAKAJAAATQgBAQgHASQgHASgNAUg");
	this.shape_100.setTransform(541.1,54.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AhFBgIAAh8IAAgUQABgJABgFIgPgBIgKgBIAGgfIAUACIAcAAIBGAAQAZAAAOAFQANAHAFAQQAEARAAAdIAABTIgBAHIgCANIgDAMgAgrBAIBtAAIAAhKQABgSgDgLQgCgLgIgGQgIgFgQgBIhJAAg");
	this.shape_101.setTransform(525.5,58.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhLBBIAOgBIAUgBIAUAAIA1AAIAAgaIAAgaIAAgWQgBgSgCgMQgDgLgIgFQgIgGgPABIgfAAIgZgBIgOgBIAHgfIAQABIAcAAIAbAAQAZAAAMAIQALAHAFAQQADAQAAAYIAAA5IAAAJIgBAMIgBAIIAaAAIgGAgIhyAAIgQAAIgQABIgNAAg");
	this.shape_102.setTransform(499,58.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgMBDIARgCIAaAAIAkAAIABgWIAAgVQAAgWgDgTQgEgUgKgMQgKgNgUAAQgOAAgKAGQgKAHgGAJQgHAKgEAKIgGAUIgGAcIgGAjIgHAjIgbAAIAHgmIAHglIAFgfQADgagIgMQgJgMgRgEIAGggQAVADAMANQANAMACAVQAEgLAJgLQAIgMAOgHQANgHATgBQAbAAAPAQQAPAPAFAaQAGAaAAAiIAAAtIgBAIIgCANIgCAJIhFAAIgPAAIgNABIgLAAg");
	this.shape_103.setTransform(478.2,58.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AhCA+IgIgsIgJgtIgIgoIgHgaIAhgDIADAPIAGAfIAJA0QARgDAJgGQAJgGADgJQADgJAAgNQAAgLgDgNIgHgZIAggDIAFAWQACAMABAOQAAAQgFAPQgFAPgOAKQgPALgdAGIABAJIADAQIACAPIAQgCIAWgEQAVgEAQgKQAPgJAJgRQAIgSAAgcQAAgSgDgSQgEgRgFgNIAigDQADAKADAQQACAQAAAUQAAAfgIAWQgJAWgPAOQgOAPgTAIQgTAIgUADIgfAFIgYADIgGgjg");
	this.shape_104.setTransform(456.1,58.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AA+BgIAAhqQAAgSgCgMQgDgMgIgEQgHgGgRAAIhAAAIAACeIgbAAIAAhtIABgfIACgSIgJgBIgKAAIgHAAIAGggIASACIAfAAIA+AAQAZgBAOAHQANAGAFARQAFAQgBAdIAABzg");
	this.shape_105.setTransform(433.6,58.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AhJCBIAAisIAcAAIAACsgAgXAbQAWgGAQgMQASgLAKgSQAKgTAAgaQABgRgIgHQgHgHgUABIgvAAIgXgBIgTAAIgKgCIAGgeIAVABIAeAAIAxAAQAWAAAMAFQAMAGAFAMQAEAMAAATQAAAmgPAdQgPAbgZASQgYASgdAIg");
	this.shape_106.setTransform(414.1,62);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AA3BgIAAhoQAAgTgCgMQgDgMgIgFQgIgGgQAAIg6AAIgaAAIgPgCIAGgfIASABIAfAAIAvAAQAYAAAOAGQANAGAFAQQAFAQAAAcIAAB2gAhKBgIAAhjIAcAAIAABjg");
	this.shape_107.setTransform(385.9,58.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgQBhIgDhIQgCgbABgMQAAgPADgKQADgKAGgHIgPgCIgQgEIgMgDIAGgfQAGACAMADIAbAFIAdAEIAXACIgFAfIgNgBIgNgBQgEgBgDACQgEADgBAGIgDATIABAVIABAeIABAkIACAgg");
	this.shape_108.setTransform(369.5,58.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AA3BgIAAhoQAAgTgCgMQgDgMgIgFQgIgGgQAAIg6AAIgaAAIgPgCIAGgfIASABIAfAAIAvAAQAYAAAOAGQANAGAFAQQAFAQAAAcIAAB2gAhKBgIAAhjIAcAAIAABjg");
	this.shape_109.setTransform(353.3,58.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgOBeQgGgFAAgLQAAgJAGgGQAFgGAJAAQAKAAAGAGQAFAGAAAJQAAAKgFAGQgGAFgKABQgIgBgGgFgAgNAhQgEgFgBgGQgCgFAAgFQAAgKAIgHQAHgIAIgHIARgNQAGgHABgJQgBgKgHgGQgJgFgPAAQgNAAgLADQgLAEgJAFIgHgbIAMgGIASgFQAKgCAOgBQAcABAPAMQAQAMAAAXQAAAPgIAKQgHAJgJAHIgRANQgGAHgBAGIACAIQABAEACAFg");
	this.shape_110.setTransform(334,58.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgCA7IAUgCIAaAAIAXAAIABgjQABgUgDgRQgCgSgKgLQgKgMgUAAQgSAAgJALQgLALgGAOQgGAPgDAMQgEAOgEAUIgJArIgIAsIg8AAIAHgmIAHgoIAFgjIADgXQADgVgKgLQgJgLgUgCIAMhMQAgADASAQQASAPAGAaQAFgMAKgOQAKgNARgLQAQgJAZgBQAjABATAVQATAUAIAiQAHAhAAAoIAAAmIgBANIgEAWIgDAWIgCANIhaAAIgaAAIgQACg");
	this.shape_111.setTransform(302.6,55.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AhpCsIAAjWIA9AAIAADWgAgLABQAfgGASgSQARgSAAgfQABgPgJgFQgIgFgSAAIhMAAIgkgBQgQgBgIgCIALhGIATABIAZABIAZgBIBDAAQAgAAASAIQASAIAIASQAIASAAAeQAAAygUAlQgTAkggAWQgfAXglAHg");
	this.shape_112.setTransform(275.1,59.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Ag2BkQAcgHAVgLQAUgMAMgSQAMgQAAgUQABgOgHgEQgHgFgPABIhqAAIAAhVIAAgdIgCgdQgBgNgDgGIA9gJQACADABAMIACAbIABAhIAAAXIBGAAQAUAAAPAFQAPAFAIAPQAIAPAAAdQAAAogPAhQgOAhgZAZQgZAYgdAOQgeAPgfAEg");
	this.shape_113.setTransform(249.3,50.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AggBGQAOgVAIgRQAHgRABgLQAAgIgHgEQgGgEgNgDIgPgEIgOgEIALhFIANADIAQADQAcAEARAJQAQAJAIAOQAGAOAAATQAAAagNAdQgLAdgTAag");
	this.shape_114.setTransform(230.9,51.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AhpCsIAAjWIA9AAIAADWgAgLABQAfgGASgSQARgSAAgfQABgPgJgFQgIgFgSAAIhMAAIgkgBQgQgBgIgCIALhGIATABIAZABIAZgBIBDAAQAgAAASAIQASAIAIASQAIASAAAeQAAAygUAlQgTAkggAWQgfAXglAHg");
	this.shape_115.setTransform(210.8,59.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AggBGQAOgVAIgRQAHgRABgLQAAgIgHgEQgGgEgNgDIgPgEIgOgEIALhFIANADIAQADQAcAEARAJQAQAJAIAOQAGAOAAATQAAAagNAdQgLAdgTAag");
	this.shape_116.setTransform(189.4,51.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AhgCAIAAiPIABgVIADgRIgKgBIgLgBIgJgCIALhGIAcACIAlAAIBVAAQAmAAASALQASAKAFAXQAGAXgBAkIAABPIgBAJIgDATIgEAXIgDAUgAgmA5IBnAAIAAg7QAAgbgHgMQgHgMgVABIhEAAg");
	this.shape_117.setTransform(167.8,55.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgZBoQgKgKAAgRQAAgRAKgJQAKgKAPAAQARAAAJAKQAKAKAAAQQAAAQgJAKQgJAKgSABQgPgBgKgJgAgXATIgCgQIgDgaIgDggIgCgcIAAgeIBEAAIAAAcIgBAdIgEAgIgDAbIgDAQg");
	this.shape_118.setTransform(140.8,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1172));

	// Layer 5
	this.instance_4 = new lib.tutorialUpgrade_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(364.8,184.6,0.699,0.699,0,0,0,57.6,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1172));

	// Layer 1
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FF9977").ss(6,1,1).p("Eg7ugkNMB3dAAAQBkAAAABkMAAABFTQAABkhkAAMh3dAAAQhkAAAAhkMAAAhFTQAAhkBkAAg");
	this.shape_119.setTransform(392.3,231.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFDB").s().p("Eg7uAkOQhkAAAAhkMAAAhFTQAAhkBkAAMB3dAAAQBkAAAABkMAAABFTQAABkhkAAg");
	this.shape_120.setTransform(392.3,231.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120},{t:this.shape_119}]}).wait(1172));

	// Layer 2
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(66,66,66,0.298)").s().p("EheBBCiMAAAiFDMC8DAAAMAAACFDg");
	this.shape_121.setTransform(361.9,248.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(1172));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.8,-177.5,1203.6,851.6);


(lib.dmgFlow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_27 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(1));

	// Layer 1
	this.dmgFlowAnim = new lib.dmgFlowAnim();
	this.dmgFlowAnim.parent = this;
	this.dmgFlowAnim.setTransform(0,-0.1,1.456,1.456);

	this.timeline.addTween(cjs.Tween.get(this.dmgFlowAnim).to({scaleX:0.84,scaleY:0.84,guide:{path:[0.1,-0.2,76.3,-207.1,147.4,-97]},alpha:0},26).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.4,-40.8,357.2,81.3);


(lib.cursorTutorial_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cursorTutorialInside_mc();
	this.instance.parent = this;
	this.instance.setTransform(36.7,53.8,1,1,0,0,0,43.6,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({regX:43.5,regY:43.2,scaleX:0.96,scaleY:0.96,skewX:-8.7,skewY:-7.1,x:36.8,y:53.9},50).wait(50).to({regX:43.6,regY:43,scaleX:1,scaleY:1,skewX:0,skewY:0,x:36.7,y:53.8},30).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFCC").ss(1,1,1).p("ABOgMQAFAfgTAbQgSAaghAGQgfAFgbgTQgagTgGggQgFgfATgbQASgaAhgGQAfgFAbATQAbATAFAgg");
	this.shape.setTransform(-11.7,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,255,235,0.498)").s().p("AgtBAQgagTgGggQgFgfATgbQATgaAggGQAfgFAbATQAaATAGAgQAFAfgTAbQgTAaggAGIgNABQgYAAgVgPg");
	this.shape_1.setTransform(-11.7,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,255,204,0.969)").ss(1,1,1).p("AhcAQQgGgmAXggQAWgfAngHQAlgGAgAWQAgAXAGAnQAGAlgWAgQgWAggnAGQgmAHgggXQgfgXgHgmg");
	this.shape_2.setTransform(-11.8,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,255,235,0.529)").s().p("Ag2BNQgfgXgHgmQgGgmAXggQAWgfAngHQAlgGAgAWQAgAXAGAnQAGAlgWAgQgWAggnAGIgQABQgdAAgZgRg");
	this.shape_3.setTransform(-11.8,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,255,204,0.937)").ss(1,1,1).p("AhrASQgHgsAaglQAaglAtgHQAsgIAlAaQAlAbAHAtQAIAsgbAkQgaAlgtAIQgsAIglgbQgkgagIgtg");
	this.shape_4.setTransform(-11.8,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(153,255,235,0.561)").s().p("Ag/BZQgkgagIgtQgHgsAaglQAaglAtgHQAsgIAlAaQAlAbAHAtQAIAsgbAkQgaAlgtAIQgKACgIAAQgiAAgdgVg");
	this.shape_5.setTransform(-11.8,16.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,255,204,0.906)").ss(1,1,1).p("Ah6AVQgJgzAegqQAegqAzgIQAzgJAqAeQAqAeAIA0QAJAygfAqQgdAqgzAIQgzAJgqgeQgpgegJgzg");
	this.shape_6.setTransform(-11.8,16.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(153,255,235,0.592)").s().p("AhIBmQgpgegJgzQgJgzAegqQAegqAzgIQAzgJAqAeQAqAeAIA0QAJAygfAqQgdAqgzAIQgMACgKAAQgnAAgggXg");
	this.shape_7.setTransform(-11.8,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,255,204,0.875)").ss(1,1,1).p("AiJAYQgKg5AigwQAhgvA6gKQA5gKAvAiQAvAiAJA6QAKA4giAvQghAwg6AKQg5AKgvgiQgugigKg5g");
	this.shape_8.setTransform(-11.8,16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(153,255,235,0.624)").s().p("AhRByQgugigKg5QgKg5AiguQAhgwA6gKQA5gKAvAjQAvAhAJA6QAKA4giAwQghAug6ALQgNACgLAAQgrAAglgbg");
	this.shape_9.setTransform(-11.8,16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,255,204,0.843)").ss(1,1,1).p("AiYAaQgLg/Amg1QAkg0BAgLQBAgLA0AmQA1AlAKBBQAKA+glA1QglA0hAALQhAALg0gmQg0glgKhAg");
	this.shape_10.setTransform(-11.8,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(153,255,235,0.655)").s().p("AhaB/Qg0gmgLg+QgKhAAlg0QAlg1BAgLQBAgLA0AmQA1AmAJBAQALA+gmA1QgkA0hBALQgOACgMAAQgwAAgpgdg");
	this.shape_11.setTransform(-11.8,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,255,204,0.812)").ss(1,1,1).p("AioAdQgMhGAqg5QAog6BGgMQBGgMA6ApQA6AqAKBGQAMBFgpA5QgoA6hHAMQhGAMg5gpQg5gqgMhFg");
	this.shape_12.setTransform(-11.8,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(153,255,235,0.686)").s().p("AhjCMQg4gqgMhFQgNhGAqg5QAog6BGgMQBGgMA6ApQA5AqALBGQAMBFgpA5QgpA6hGAMQgPADgOAAQg1AAgtggg");
	this.shape_13.setTransform(-11.8,16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,255,204,0.78)").ss(1,1,1).p("Ai3AgQgNhNAtg+QAsg/BNgNQBMgNA/AtQA/AtAMBNQANBLgtA+QgsA/hNANQhMANg/gtQg+gtgNhLg");
	this.shape_14.setTransform(-11.8,16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(153,255,235,0.718)").s().p("AhsCYQg+gtgNhLQgNhNAtg+QAsg/BNgNQBMgNA/AtQA/AtAMBNQANBLgtA+QgsA/hNANQgSADgPAAQg5AAgxgjg");
	this.shape_15.setTransform(-11.8,16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,255,204,0.749)").ss(1,1,1).p("AjGAiQgOhTAxhDQAvhEBUgPQBSgOBEAxQBEAxANBTQAOBRgxBEQgvBEhUAOQhSAOhEgwQhDgxgOhSg");
	this.shape_16.setTransform(-11.8,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(153,255,235,0.749)").s().p("Ah1ClQhDgxgOhSQgOhTAxhDQAvhEBUgPQBSgOBEAxQBEAxANBTQAOBRgxBEQgvBEhUAOQgSAEgRAAQg+AAg1gmg");
	this.shape_17.setTransform(-11.8,16.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,255,204,0.718)").ss(1,1,1).p("AjVAlQgPhZA0hJQAzhJBagQQBZgPBJA1QBJA0AOBaQAPBXg0BJQgzBJhaAQQhZAPhJg1QhHg0gQhYg");
	this.shape_18.setTransform(-11.8,16.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(153,255,235,0.78)").s().p("Ah+CxQhHg0gQhYQgPhZA0hJQAzhJBagQQBZgPBJA1QBJA0AOBaQAPBXg1BJQgyBJhaAQQgUADgSAAQhDAAg5gpg");
	this.shape_19.setTransform(-11.8,16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,255,204,0.686)").ss(1,1,1).p("AjkAnQgQhfA4hOQA2hOBhgRQBfgQBOA4QBOA4APBgQARBeg5BOQg2BPhgAQQhgAQhOg4QhNg4gQhfg");
	this.shape_20.setTransform(-11.9,16.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(153,255,235,0.812)").s().p("AiHC+QhNg4gQhfQgQhfA4hOQA2hOBhgRQBfgQBOA4QBOA4APBgQARBeg5BOQg2BPhgAQQgWAEgTAAQhIAAg9gsg");
	this.shape_21.setTransform(-11.9,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,255,204,0.655)").ss(1,1,1).p("AjzAqQgShmA8hTQA6hUBngRQBlgSBUA8QBTA8AQBmQASBlg8BTQg7BUhmARQhmAShTg8QhSg8gRhlg");
	this.shape_22.setTransform(-11.9,16.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(153,255,235,0.843)").s().p("AiQDKQhSg8gRhkQgShmA8hTQA6hUBngRQBlgRBUA7QBTA9AQBlQASBlg8BTQg7BThmASQgXAEgVAAQhNAAhAgvg");
	this.shape_23.setTransform(-11.9,16.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,255,204,0.624)").ss(1,1,1).p("AkDAsQgShsBAhYQA9hZBtgSQBsgTBZBAQBZBAARBsQASBrhABYQg+BZhsASQhsAThZhAQhXhAgThrg");
	this.shape_24.setTransform(-11.9,16.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(153,255,235,0.875)").s().p("AiZDXQhXhAgThrQgShsBAhYQA9hZBtgSQBsgTBZBAQBZBAARBsQASBrhABYQg+BZhsASQgZAEgWAAQhRAAhFgxg");
	this.shape_25.setTransform(-11.9,16.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,255,204,0.592)").ss(1,1,1).p("AkSAvQgThyBDheQBBheB0gUQBygTBeBDQBeBEASBzQATBwhDBeQhCBehzAUQhyAThehDQhchEgUhxg");
	this.shape_26.setTransform(-11.9,16.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(153,255,235,0.906)").s().p("AiiDkQhchEgUhxQgThyBDheQBBheB0gUQBygTBeBDQBeBEASBzQATBwhDBeQhCBehzAUQgaAEgXAAQhWAAhJg0g");
	this.shape_27.setTransform(-11.9,16.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,255,204,0.561)").ss(1,1,1).p("AkhAyQgVh5BIhjQBEhjB6gVQB4gUBkBHQBjBHATB5QAVB3hIBjQhFBjh6AVQh4AUhjhHQhhhHgVh3g");
	this.shape_28.setTransform(-11.9,16.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(153,255,235,0.937)").s().p("AirDwQhhhHgVh3QgVh5BIhjQBEhjB7gVQB4gUBjBHQBjBHATB5QAVB3hIBjQhFBjh5AVQgbAEgZAAQhbAAhNg3g");
	this.shape_29.setTransform(-11.9,16.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,255,204,0.529)").ss(1,1,1).p("AkwA0QgVh/BKhoQBJhoCAgWQB/gWBoBLQBoBLAUCAQAWB9hLBoQhJBoiAAWQh/AVhohKQhmhLgWh+g");
	this.shape_30.setTransform(-11.9,16.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(153,255,235,0.969)").s().p("Ai0D9QhmhLgWh+QgVh/BKhoQBJhoCAgWQB/gWBoBLQBoBLAUCAQAWB9hLBoQhJBoiAAWQgdAFgaAAQhfAAhRg6g");
	this.shape_31.setTransform(-11.9,16.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AFAg0QAXCEhPBtQhMBtiGAXQiGAXhthPQhrhOgXiEQgXiGBPhtQBMhtCGgXQCFgXBuBPQBtBOAVCGg");
	this.shape_32.setTransform(-11.9,16.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#99FFEB").s().p("Ai9EJQhrhOgXiEQgXiGBPhtQBMhtCGgXQCFgXBuBPQBtBOAVCGQAXCEhPBtQhMBtiGAXQgeAFgcAAQhkAAhVg9g");
	this.shape_33.setTransform(-11.9,16.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AknAyQgVh7BJhlQBGhlB9gVQB6gVBmBJQBlBIATB8QAVB5hJBmQhGBlh8AVQh7AUhmhIQhjhJgVh6g");
	this.shape_34.setTransform(-11.9,16.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#99FFEB").s().p("AivD1QhjhIgVh6QgVh8BJhkQBGhmB9gVQB6gVBmBJQBlBJATB8QAVB4hJBmQhGBkh8AWQgcAFgZAAQhdAAhPg5g");
	this.shape_35.setTransform(-11.9,16.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AkPAuQgThxBDhcQBAhdBygUQBxgTBdBDQBdBDASBxQATBwhDBcQhBBdhyAUQhxAThdhDQhahDgUhwg");
	this.shape_36.setTransform(-11.9,16.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#99FFEB").s().p("AihDhQhahDgUhwQgThxBDhcQBAhdBygUQBxgTBdBDQBdBDASBxQATBwhDBcQhBBdhyAUQgZAEgXAAQhVAAhJg0g");
	this.shape_37.setTransform(-11.9,16.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Aj2ArQgShnA9hVQA7hUBogSQBmgSBVA9QBUA9AQBoQASBlg9BUQg7BVhnARQhnAShVg9QhTg8gRhmg");
	this.shape_38.setTransform(-11.9,16.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#99FFEB").s().p("AiSDNQhTg8gRhnQgShmA9hVQA7hUBogSQBmgSBVA9QBUA9AQBnQASBmg9BUQg7BUhnASQgYAEgVAAQhNAAhCgvg");
	this.shape_39.setTransform(-11.9,16.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AjeAmQgQhdA3hMQA1hMBdgQQBdgQBMA3QBMA3APBdQAQBcg3BMQg1BMheAQQhdAQhMg3QhKg3gQhcg");
	this.shape_40.setTransform(-11.8,16.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#99FFEB").s().p("AiEC5QhKg3gQhcQgQhdA3hMQA1hMBegQQBcgQBMA3QBNA3AOBdQAQBcg3BMQg1BMheAQQgVADgTAAQhGAAg7gqg");
	this.shape_41.setTransform(-11.8,16.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AjGAiQgOhTAxhDQAvhEBUgPQBSgOBEAxQBEAxANBTQAOBRgxBEQgvBEhUAOQhSAOhEgwQhDgxgOhSg");
	this.shape_42.setTransform(-11.8,16.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#99FFEB").s().p("Ah1ClQhDgxgOhSQgOhTAxhDQAvhEBUgPQBSgOBEAxQBEAxANBTQAOBRgxBEQgvBEhUAOQgSAEgRAAQg+AAg1gmg");
	this.shape_43.setTransform(-11.8,16.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AiuAeQgMhIArg8QApg8BKgMQBIgMA8AqQA7ArAMBJQAMBHgrA8QgqA8hJAMQhIAMg8gqQg6grgNhIg");
	this.shape_44.setTransform(-11.8,16.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#99FFEB").s().p("AhnCRQg6grgNhIQgMhIArg8QApg8BKgMQBIgMA8AqQA7ArAMBJQAMBHgrA8QgqA8hJAMQgQADgOAAQg3AAgvghg");
	this.shape_45.setTransform(-11.8,16.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AiWAaQgKg/AlgzQAkgzA/gLQA+gLAzAlQA0AlAKA/QAKA+glAzQgkAzg/ALQg+ALg0glQgyglgLg+g");
	this.shape_46.setTransform(-11.8,16.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#99FFEB").s().p("AhZB8QgygkgKg/QgLg9AlgzQAkg0A/gLQA9gKA0AlQA0AlAJA+QALA+glAyQgkA0g/ALQgOACgMAAQgvAAgpgdg");
	this.shape_47.setTransform(-11.8,16.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Ah9AWQgJg0AfgrQAegrA1gJQA0gJArAfQArAeAIA1QAJAzgfArQgeArg1AJQg0AJgrgfQgqgegJg0g");
	this.shape_48.setTransform(-11.8,16.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#99FFEB").s().p("AhKBoQgqgegJg0QgJg0AfgrQAegrA1gJQA0gJArAfQArAeAIA1QAJAzgfArQgeArg0AJQgMACgLAAQgnAAgigYg");
	this.shape_49.setTransform(-11.8,16.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AhlASQgHgqAZgjQAYgjArgHQAqgIAiAZQAjAaAHAqQAHAqgZAiQgYAjgrAHQgqAIgigZQgigagIgpg");
	this.shape_50.setTransform(-11.8,16.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#99FFEB").s().p("Ag7BUQgigYgIgrQgHgqAZgiQAYgjArgHQAqgHAiAZQAjAZAHAqQAHAqgZAiQgYAjgrAHQgKACgIAAQggAAgagUg");
	this.shape_51.setTransform(-11.8,16.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("ABOgMQAFAfgTAbQgSAaghAGQgfAFgbgTQgagTgGggQgFgfATgbQASgaAhgGQAfgFAbATQAbATAFAgg");
	this.shape_52.setTransform(-11.7,16.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#99FFEB").s().p("AgtBAQgagTgGggQgFgfATgbQATgaAggGQAfgFAbATQAaATAGAgQAFAfgTAbQgTAaggAGIgNABQgYAAgVgPg");
	this.shape_53.setTransform(-11.7,16.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AhZAPQgGgkAWgfQAVgeAmgHQAlgGAeAWQAfAWAGAlQAGAkgWAfQgVAfgmAGQglAGgfgWQgegWgGglg");
	this.shape_54.setTransform(-11.7,16.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#99FFEB").s().p("Ag1BKQgegWgGglQgGgkAWgfQAWgeAlgHQAlgGAeAWQAfAWAGAlQAGAkgWAfQgWAfglAGIgPABQgcAAgZgRg");
	this.shape_55.setTransform(-11.7,16.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AhlASQgHgqAZgjQAYgjArgHQAqgHAiAZQAjAZAHAqQAHApgZAjQgYAjgrAHQgpAHgjgZQgigYgIgqg");
	this.shape_56.setTransform(-11.8,16.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#99FFEB").s().p("Ag7BUQgigYgIgqQgHgqAZgjQAYgjArgHQAqgHAiAZQAjAZAHAqQAHApgZAjQgYAjgrAHIgRACQggAAgbgUg");
	this.shape_57.setTransform(-11.8,16.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AhxATQgIgvAcgmQAbgnAwgIQAvgJAnAcQAnAcAHAwQAIAugcAnQgbAngwAIQgvAIgngcQgmgcgIgvg");
	this.shape_58.setTransform(-11.8,16.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#99FFEB").s().p("AhDBeQgmgcgIgvQgIgvAcgmQAbgnAwgIQAvgJAnAcQAnAcAHAwQAIAugcAnQgbAngwAIQgKACgJAAQgkAAgfgWg");
	this.shape_59.setTransform(-11.8,16.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Ah9AVQgJgzAfgrQAegsA1gIQA0gJArAeQArAfAIA1QAJAzgfArQgeArg1AJQg0AJgrgfQgqgfgJg0g");
	this.shape_60.setTransform(-11.8,16.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#99FFEB").s().p("AhKBoQgqgfgJg0QgJgzAfgrQAegsA1gIQA0gJArAeQArAfAIA1QAJAzgfArQgeArg1AJQgMACgKAAQgnAAgigYg");
	this.shape_61.setTransform(-11.8,16.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AiJAYQgKg5AigwQAhgvA6gKQA5gJAvAiQAvAhAJA6QAKA4giAvQghAwg6AKQg5AJgvgiQgughgKg5g");
	this.shape_62.setTransform(-11.8,16.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#99FFEB").s().p("AhRByQgughgKg5QgKg5AigwQAhgvA6gKQA5gJAvAiQAvAhAJA6QAKA4giAvQghAwg6AKQgMACgLAAQgsAAglgbg");
	this.shape_63.setTransform(-11.8,16.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AiVAaQgLg+Alg0QAkgzA/gLQA+gKAzAlQAzAkAKA/QALA9glA0QgkAzg/ALQg+AKgzglQgzgkgKg+g");
	this.shape_64.setTransform(-11.8,16.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#99FFEB").s().p("AhYB8QgzgkgKg+QgLg+Alg0QAkgzA/gLQA+gKAzAlQAzAkAKA/QALA9glA0QgkAzg/ALQgOACgMAAQgvAAgogdg");
	this.shape_65.setTransform(-11.8,16.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AiiAcQgLhDAog4QAmg3BFgMQBDgLA3AoQA4AnAKBEQAMBCgoA4QgnA3hEAMQhDALg4goQg2gngMhDg");
	this.shape_66.setTransform(-11.8,16.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#99FFEB").s().p("AhgCGQg2gngMhDQgLhDAog4QAmg3BFgMQBDgLA3AoQA4AnAKBEQAMBCgoA4QgnA3hEAMQgOACgOAAQgzAAgsgfg");
	this.shape_67.setTransform(-11.8,16.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AiuAeQgMhIArg8QApg7BJgNQBJgMA7ArQA8AqALBJQANBHgrA8QgqA8hJAMQhIAMg8gqQg6grgNhIg");
	this.shape_68.setTransform(-11.8,16.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#99FFEB").s().p("AhnCRQg6grgNhIQgMhIArg8QApg7BJgNQBJgMA7ArQA8AqALBJQANBHgrA8QgqA8hJAMQgQADgOAAQg3AAgvghg");
	this.shape_69.setTransform(-11.8,16.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Ai6AgQgMhOAtg/QAshABPgNQBNgOBAAuQBAAuAMBOQANBMguBAQgsBAhPANQhNANhAguQg+gtgOhNg");
	this.shape_70.setTransform(-11.8,16.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#99FFEB").s().p("AhuCaQg+gtgOhNQgMhOAtg/QAshABPgNQBNgOBAAuQBAAuAMBOQANBMguBAQgsBAhPANQgRADgPAAQg7AAgygkg");
	this.shape_71.setTransform(-11.8,16.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AjGAiQgNhSAwhEQAvhEBUgOQBSgOBEAwQBEAxANBTQAOBRgxBEQgvBEhUAOQhSAOhEgxQhCgwgPhSg");
	this.shape_72.setTransform(-11.8,16.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#99FFEB").s().p("Ah1CkQhCgwgPhSQgNhSAwhEQAvhEBUgOQBSgOBEAwQBEAxANBTQAOBRgxBEQgvBEhUAOQgSADgRAAQg+AAg1gmg");
	this.shape_73.setTransform(-11.8,16.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AjSAkQgOhXAzhIQAyhIBZgPQBXgPBIAzQBIA0AOBYQAPBWg0BIQgyBIhZAQQhXAOhIg0QhHgzgPhXg");
	this.shape_74.setTransform(-11.8,16.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#99FFEB").s().p("Ah8CuQhHgzgPhXQgOhXAzhIQAyhIBZgPQBXgPBIAzQBIA0AOBYQAPBWg0BIQgyBIhZAQQgTADgSAAQhCAAg4gpg");
	this.shape_75.setTransform(-11.8,16.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AjeAmQgPhcA2hMQA1hNBdgPQBdgQBMA2QBMA3APBdQAQBbg3BMQg1BNheAQQhcAPhMg2QhLg3gQhcg");
	this.shape_76.setTransform(-11.8,16.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#99FFEB").s().p("AiDC5QhLg3gQhcQgPhcA2hMQA1hNBdgPQBdgQBMA2QBMA3APBdQAQBbg3BMQg1BNheAQQgUADgTAAQhGAAg7gqg");
	this.shape_77.setTransform(-11.8,16.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AjqAoQgQhhA5hRQA4hQBigRQBigQBQA6QBRA5APBiQARBgg6BRQg4BQhjARQhhAQhRg5QhOg6gRhhg");
	this.shape_78.setTransform(-11.8,16.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#99FFEB").s().p("AiLDDQhOg6gRhhQgQhhA5hRQA4hQBigRQBigQBQA6QBRA5APBiQARBgg6BRQg4BQhjARQgVAEgUAAQhKAAg/gtg");
	this.shape_79.setTransform(-11.8,16.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Aj2ArQgRhnA9hVQA6hUBogSQBngRBUA9QBUA8AQBoQASBlg9BUQg6BUhoASQhnARhUg8QhTg9gShlg");
	this.shape_80.setTransform(-11.9,16.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#99FFEB").s().p("AiRDNQhTg9gShlQgRhnA9hVQA6hUBogSQBngRBUA9QBUA8AQBoQASBlg9BUQg6BUhoASQgXAEgVAAQhNAAhCgvg");
	this.shape_81.setTransform(-11.9,16.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AkCAsQgShsBAhYQA9hZBtgSQBsgTBYBAQBZBAAQBsQATBqhABZQg9BYhtATQhsAShZhAQhWg/gThrg");
	this.shape_82.setTransform(-11.9,16.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#99FFEB").s().p("AiZDWQhWg/gThrQgShsBAhYQA9hZBtgSQBsgTBYBAQBZBAAQBsQATBqhABZQg9BYhtATQgYAEgWAAQhSAAhFgyg");
	this.shape_83.setTransform(-11.9,16.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AkOAuQgThxBDhcQBAhdBygTQBxgUBcBDQBdBDARBxQAUBvhDBdQhABdhyATQhxAThdhDQhbhCgThwg");
	this.shape_84.setTransform(-11.9,16.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#99FFEB").s().p("AigDgQhbhCgThwQgThxBDhcQBAhdBygTQBxgUBcBDQBdBDARBxQAUBvhDBdQhABdhyATQgZAEgXAAQhWAAhIg0g");
	this.shape_85.setTransform(-11.9,16.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AkbAxQgTh2BFhhQBDhhB3gUQB2gUBhBFQBhBGATB2QAUB0hGBhQhDBhh3AVQh2AThhhFQhfhGgVh0g");
	this.shape_86.setTransform(-11.9,16.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#99FFEB").s().p("AinDrQhfhGgVh0QgTh2BFhhQBDhhB3gUQB2gUBhBFQBhBGATB2QAUB0hGBhQhDBhh3AVQgaAEgYAAQhaAAhLg2g");
	this.shape_87.setTransform(-11.9,16.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AknAzQgUh7BIhlQBGhlB8gVQB7gVBlBIQBlBJAUB7QAVB5hJBlQhGBlh8AWQh7AUhlhIQhjhJgWh5g");
	this.shape_88.setTransform(-11.9,16.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#99FFEB").s().p("AiuD1QhjhJgWh5QgUh7BIhlQBGhlB8gVQB7gVBlBIQBlBJAUB7QAVB5hJBlQhGBlh8AWQgcAEgZAAQhdAAhOg4g");
	this.shape_89.setTransform(-11.9,16.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AkzA0QgViABLhpQBJhpCBgWQCAgWBqBMQBpBLAUCBQAWB+hMBpQhJBpiBAXQiBAVhphMQhnhLgWh/g");
	this.shape_90.setTransform(-11.9,16.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#99FFEB").s().p("Ai2D+QhnhLgWh/QgViABLhpQBJhpCBgWQCAgWBqBMQBpBLAUCBQAWB+hMBpQhJBpiBAXQgdAFgaAAQhhAAhSg8g");
	this.shape_91.setTransform(-11.9,16.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Ak/A3QgWiGBOhtQBMhtCGgXQCFgXBuBPQBtBOAVCGQAWCDhOBtQhMBuiGAXQiGAWhthPQhrhOgXiDg");
	this.shape_92.setTransform(-11.9,16.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#99FFEB").s().p("Ai9EIQhrhOgXiDQgWiGBOhtQBMhtCGgXQCFgXBuBPQBtBOAVCGQAWCDhOBtQhMBuiGAXQgeAFgbAAQhkAAhWg+g");
	this.shape_93.setTransform(-11.9,16.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AlLA5QgXiLBRhxQBPhxCLgYQCKgYByBSQBxBRAWCLQAXCIhRByQhPBxiLAYQiLAXhxhSQhvhRgYiIg");
	this.shape_94.setTransform(-11.9,16.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#99FFEB").s().p("AjEESQhvhRgYiIQgXiLBRhxQBPhxCLgYQCKgYByBSQBxBRAWCLQAXCIhRByQhPBxiLAYQgeAFgcAAQhpAAhZhAg");
	this.shape_95.setTransform(-11.9,16.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AlXA7QgYiQBVh1QBRh2CQgYQCQgZB1BVQB2BUAWCQQAZCNhVB2QhRB1iRAZQiPAYh2hUQhzhUgZiOg");
	this.shape_96.setTransform(-11.9,16.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#99FFEB").s().p("AjLEdQhzhUgZiOQgYiQBVh1QBRh2CQgYQCQgZB1BVQB2BUAWCQQAZCNhVB2QhRB1iRAZQggAGgdAAQhsAAhchCg");
	this.shape_97.setTransform(-11.9,16.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AljA9QgZiVBYh5QBUh6CVgZQCVgaB6BYQB5BXAXCVQAaCShYB6QhUB6iWAaQiVAYh5hXQh3hXgaiTg");
	this.shape_98.setTransform(-11.9,16.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#99FFEB").s().p("AjSEnQh3hXgaiTQgZiVBYh5QBUh6CVgZQCVgaB6BYQB5BXAXCVQAaCShYB6QhUB6iWAaQggAFgeAAQhxAAhfhEg");
	this.shape_99.setTransform(-11.9,16.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AlvA/QgaiZBbh+QBXh+CagaQCagaB+BaQB9BaAYCaQAbCXhbB+QhXB+ibAbQiaAZh9haQh8hagaiYg");
	this.shape_100.setTransform(-11.9,16.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#99FFEB").s().p("AjZExQh8hagaiYQgaiZBbh+QBXh+CagaQCagaB+BaQB9BaAYCaQAbCXhbB+QhXB+ibAbQgiAFggAAQh0AAhhhGg");
	this.shape_101.setTransform(-11.9,16.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Al8BBQgaifBeiCQBZiCCggbQCfgbCCBeQCCBdAYCfQAbCchdCCQhaCCigAcQifAaiCheQh/hcgcidg");
	this.shape_102.setTransform(-11.9,16.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#99FFEB").s().p("AjhE6Qh/hcgcidQgaifBeiCQBZiCCggbQCfgbCCBeQCCBdAYCfQAbCchdCCQhaCCigAcQgjAGggAAQh4AAhmhKg");
	this.shape_103.setTransform(-11.9,16.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AmIBDQgbikBhiGQBciGClgcQCkgcCGBhQCGBgAZCkQAcChhgCGQhdCGilAdQikAbiGhgQiDhggdiig");
	this.shape_104.setTransform(-11.9,16.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#99FFEB").s().p("AjoFFQiDhggdiiQgbikBhiGQBciGClgcQCkgcCGBhQCGBgAZCkQAcChhgCGQhdCGilAdQgkAGgiAAQh7AAhphLg");
	this.shape_105.setTransform(-11.9,16.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AmUBFQgcipBkiKQBfiKCqgdQCpgdCKBkQCKBjAaCpQAdCmhjCKQhgCLiqAdQipAciKhjQiHhjgeing");
	this.shape_106.setTransform(-11.9,16.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#99FFEB").s().p("AjvFPQiHhjgeinQgcipBkiKQBfiKCqgdQCpgdCKBkQCKBjAaCpQAdCmhjCKQhgCLiqAdQglAGgiAAQiAAAhshNg");
	this.shape_107.setTransform(-11.9,16.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AmgBHQgdiuBmiOQBjiOCvgeQCugeCOBnQCOBmAcCuQAdCrhmCPQhjCOivAeQiuAdiOhmQiMhmgeisg");
	this.shape_108.setTransform(-11.9,16.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#99FFEB").s().p("Aj2FZQiMhmgeisQgdiuBmiOQBjiOCvgeQCugeCOBnQCOBmAcCuQAdCrhmCPQhjCOivAeQgmAHgkAAQiDAAhvhQg");
	this.shape_109.setTransform(-11.9,16.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AmsBKQgei0BpiSQBmiSC0gfQCzgfCSBqQCTBpAcCzQAeCwhpCTQhmCSi0AgQizAdiThpQiPhpgfiwg");
	this.shape_110.setTransform(-11.9,16.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#99FFEB").s().p("Aj+FjQiPhpgfiwQgei0BpiSQBmiSC0gfQCzgfCSBqQCTBpAcCzQAeCwhpCTQhmCSi0AgQgnAGglAAQiHAAhzhSg");
	this.shape_111.setTransform(-11.9,16.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Am5BMQgei4BsiXQBoiXC6gfQC4gfCWBsQCXBsAdC4QAfC1hsCXQhpCXi5AgQi4AeiXhsQiThsghi1g");
	this.shape_112.setTransform(-11.9,16.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#99FFEB").s().p("AkFFtQiThsghi1Qgei4BsiXQBoiXC6gfQC4gfCWBsQCXBsAdC4QAfC1hsCXQhpCXi5AgQgpAGgmAAQiKAAh2hUg");
	this.shape_113.setTransform(-11.9,16.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AnEBNQgfi9BvibQBriaC+ghQC9ggCbBwQCbBvAdC9QAgC6hvCbQhrCbi/AhQi9AfibhvQiXhvghi7g");
	this.shape_114.setTransform(-12,17);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#99FFEB").s().p("AkMF3QiXhvghi7Qgfi9BvibQBriaC+ghQC9ggCbBwQCbBvAdC9QAgC6hvCbQhrCbi/AhQgqAHgmAAQiPAAh5hXg");
	this.shape_115.setTransform(-12,17);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AnRBQQgfjDByifQBtifDEghQDCghCfBzQCfByAeDCQAhC/hyCfQhuCfjEAiQjCAgifhyQibhygji/g");
	this.shape_116.setTransform(-12,17);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#99FFEB").s().p("AkTGBQibhygji/QgfjDByifQBtifDEghQDCghCfBzQCfByAeDCQAhC/hyCfQhuCfjEAiQgrAHgoAAQiSAAh8hZg");
	this.shape_117.setTransform(-12,17);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AHdhOQAiDEh1CjQhxCjjJAjQjHAhijh1Qigh1gjjEQggjIB1ijQBwijDJgiQDHgiCjB2QCjB1AfDHg");
	this.shape_118.setTransform(-12,17);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#99FFEB").s().p("AkaGLQigh1gjjEQggjIB1ijQBwijDJgiQDHgiCjB2QCjB1AfDHQAiDEh1CjQhxCjjJAjQgrAHgpAAQiXAAh/hbg");
	this.shape_119.setTransform(-12,17);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AnFBOQgfi+BvibQBribC/ggQC9ggCbBwQCbBvAeC9QAgC7hvCbQhsCbi/AhQi9AfibhvQiYhvghi7g");
	this.shape_120.setTransform(-12,16.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#99FFEB").s().p("AkMF4QiYhvghi7Qgfi+BvibQBribC/ggQC9ggCbBwQCbBvAeC9QAgC7hvCbQhsCbi/AhQgpAGgnAAQiPAAh5hWg");
	this.shape_121.setTransform(-12,16.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AmuBKQgdi0BpiTQBmiTC0geQC0gfCTBqQCTBpAcC0QAfCxhqCTQhmCTi1AfQi0AdiThpQiPhpggixg");
	this.shape_122.setTransform(-11.9,16.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#99FFEB").s().p("Aj/FkQiPhpggixQgdi0BpiTQBmiTC0geQC0gfCTBqQCTBpAcC0QAfCxhqCTQhmCTi1AfQgnAGgkAAQiIAAh0hSg");
	this.shape_123.setTransform(-11.9,16.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AmWBGQgciqBkiLQBgiLCrgdQCpgdCLBkQCLBkAbCqQAdCnhkCLQhhCLirAdQiqAciKhkQiIhjgeing");
	this.shape_124.setTransform(-11.9,16.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#99FFEB").s().p("AjwFQQiIhjgeinQgciqBkiLQBgiLCrgdQCpgdCLBkQCLBkAbCqQAdCnhkCLQhhCLirAdQglAGgjAAQiAAAhshOg");
	this.shape_125.setTransform(-11.9,16.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Al/BBQgaigBeiCQBbiDChgcQCggbCCBeQCDBeAZChQAcCdheCDQhcCDihAcQigAaiCheQiAhegdieg");
	this.shape_126.setTransform(-11.9,16.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#99FFEB").s().p("AjiE9QiAhegdieQgaigBeiCQBbiDChgcQCggbCCBeQCDBeAZChQAcCdheCDQhcCDihAcQgjAGggAAQh5AAhmhKg");
	this.shape_127.setTransform(-11.9,16.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AlnA+QgYiWBYh7QBVh7CXgaQCWgZB7BYQB6BYAYCXQAZCThYB7QhVB7iXAaQiWAZh7hYQh5hYgaiUg");
	this.shape_128.setTransform(-11.9,16.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#99FFEB").s().p("AjUEqQh5hYgaiUQgYiWBYh7QBVh7CXgaQCWgZB7BYQB6BYAYCXQAZCThYB7QhVB7iXAaQghAGgfAAQhxAAhghFg");
	this.shape_129.setTransform(-11.9,16.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AlPA6QgXiNBShzQBQhyCNgYQCMgYBzBTQBzBSAVCMQAYCKhSBzQhQBziNAYQiMAXhzhSQhxhSgYiKg");
	this.shape_130.setTransform(-11.9,16.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#99FFEB").s().p("AjGEWQhxhSgYiKQgXiNBShzQBQhyCNgYQCMgYBzBTQBzBSAVCMQAYCKhSBzQhQBziNAYQgfAFgdAAQhqAAhZhAg");
	this.shape_131.setTransform(-11.9,16.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Ak4A1QgViCBMhrQBKhrCDgWQCDgWBqBNQBrBMAVCDQAWCAhNBrQhKBriEAXQiCAVhrhNQhohMgXiBg");
	this.shape_132.setTransform(-11.9,16.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#99FFEB").s().p("Ai5ECQhohMgXiBQgViCBMhrQBKhrCDgWQCDgWBqBNQBrBMAVCDQAWCAhNBrQhKBriEAXQgcAFgbAAQhiAAhUg9g");
	this.shape_133.setTransform(-11.9,16.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AkgAyQgUh5BHhjQBEhiB5gVQB5gVBjBIQBiBGATB5QAVB3hHBjQhFBih5AVQh5AUhjhHQhghGgVh3g");
	this.shape_134.setTransform(-11.9,16.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#99FFEB").s().p("AirDvQhghGgVh3QgUh5BHhjQBEhiB5gVQB5gVBjBIQBiBGATB5QAVB3hHBjQhFBih5AVQgbAFgZAAQhbAAhNg4g");
	this.shape_135.setTransform(-11.9,16.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AkJAtQgShuBBhbQA/hbBwgTQBugSBbBBQBbBBARBvQATBthBBaQhABbhvAUQhvAShahBQhZhBgUhug");
	this.shape_136.setTransform(-11.9,16.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#99FFEB").s().p("AicDcQhZhBgUhuQgShuBBhbQA/hbBwgTQBugSBbBBQBbBBARBvQATBthBBaQhABbhvAUQgZAEgWAAQhUAAhGgzg");
	this.shape_137.setTransform(-11.9,16.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AjxAqQgRhlA7hTQA5hSBmgSQBlgRBTA8QBSA7AQBlQARBjg7BTQg6BThlARQhlARhTg7QhRg8gRhjg");
	this.shape_138.setTransform(-11.8,16.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#99FFEB").s().p("AiPDJQhRg8gRhjQgRhlA7hTQA5hSBmgSQBlgRBTA8QBSA7AQBlQARBjg7BTQg6BThlARQgWAEgVAAQhMAAhBgug");
	this.shape_139.setTransform(-11.8,16.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AjaAlQgPhaA2hLQAzhLBcgPQBbgQBLA2QBKA2APBbQAPBZg1BLQg1BLhbAQQhbAPhLg2QhJg1gQhbg");
	this.shape_140.setTransform(-11.8,16.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#99FFEB").s().p("AiBC1QhJg1gQhbQgPhaA2hLQAzhLBcgPQBbgQBLA2QBKA2APBbQAPBZg1BLQg1BLhbAQQgUADgTAAQhFAAg6gqg");
	this.shape_141.setTransform(-11.8,16.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AjCAhQgOhRAwhCQAuhDBSgOQBRgOBDAwQBDAwAMBSQAOBPgwBDQguBDhSAOQhRANhDgwQhBgvgOhRg");
	this.shape_142.setTransform(-11.8,16.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#99FFEB").s().p("AhzChQhBgvgOhRQgOhRAwhCQAuhDBSgOQBRgOBDAwQBDAwAMBSQAOBPgwBDQguBDhSAOQgSADgRAAQg9AAg0gmg");
	this.shape_143.setTransform(-11.8,16.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AirAeQgMhHAqg7QApg7BIgMQBHgMA7AqQA6AqAMBIQALBGgpA6QgpA7hIAMQhHAMg7gqQg6gqgMhGg");
	this.shape_144.setTransform(-11.8,16.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#99FFEB").s().p("AhlCOQg6gqgMhGQgMhHArg7QAog7BIgMQBHgMA7AqQA7AqAKBIQAMBGgqA6QgoA7hIAMQgQADgOAAQg2AAgughg");
	this.shape_145.setTransform(-11.8,16.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AiTAZQgLg9AlgyQAjgzA+gKQA9gLAzAkQAyAlAKA+QAKA8gkAyQgjAzg+ALQg9AKgzgkQgyglgKg9g");
	this.shape_146.setTransform(-11.8,16.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#99FFEB").s().p("AhXB7QgyglgKg9QgLg9AlgyQAjgzA+gKQA9gLAzAkQAyAlAKA+QAKA8gkAyQgjAzg+ALQgNACgMAAQgvAAgogcg");
	this.shape_147.setTransform(-11.8,16.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("Ah8AVQgIgzAegrQAegqA0gJQAzgJArAfQAqAeAJA0QAIAzgeAqQgeArg0AJQgzAJgrgfQgqgegJg0g");
	this.shape_148.setTransform(-11.8,16.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#99FFEB").s().p("AhJBnQgqgegJg0QgIgzAegrQAegqA0gJQAzgJArAfQAqAeAJA0QAIAzgeAqQgeArg0AJQgMACgKAAQgnAAghgYg");
	this.shape_149.setTransform(-11.8,16.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(0,255,204,0.498)").ss(1,1,1).p("AhkARQgHgpAZgiQAYgjAqgHQAqgHAiAYQAjAZAGArQAHAogYAjQgZAigqAIQgpAHgjgZQgigZgHgqg");
	this.shape_150.setTransform(-11.8,16.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#99FFEB").s().p("Ag7BUQgigZgHgqQgHgpAZgiQAYgjAqgHQAqgHAiAYQAjAZAGArQAHAogYAjQgZAigqAIIgRABQggAAgbgTg");
	this.shape_151.setTransform(-11.8,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},128).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[]},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.9,9.8,89.3,88.1);


(lib.coinText_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(46));

	// Layer 1
	this.coinText2 = new lib.coinText2_mc();
	this.coinText2.parent = this;
	this.coinText2.setTransform(119.7,26.2,1,1,0,0,0,119.7,26.2);

	this.timeline.addTween(cjs.Tween.get(this.coinText2).wait(19).to({regX:119.6,regY:26,scaleX:1.55,scaleY:1.55,x:60.6,y:26.1},8).wait(9).to({regX:119.7,regY:26.2,scaleX:1,scaleY:1,x:119.7,y:26.2},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.4,52.3);


(lib.coinDrop_mc9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[17,17.9,46,-143.7,165.2,-363.7]},alpha:0},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coinDrop_mc8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[17,18,46,-143.6,119.9,-430.8]},alpha:0},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coinDrop_mc7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[16.9,17.9,45.9,-143.6,90.7,-354.6]},alpha:0},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coinDrop_mc6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[17,18,11.6,-143.6,52.7,-472.6]},alpha:0},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coinDrop_mc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[16.8,17.9,21.1,-187.4,25.4,-392.8]},alpha:0},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coinDrop_mc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[16.9,18,27.1,-137.3,-42.1,-315.4]},alpha:0},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coinDrop_mc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[16.9,18,15.8,-143.6,-45.2,-432.8]},alpha:0},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coinDrop_mc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[16.9,17.9,18.7,-110.1,-52.6,-375.9]},alpha:0},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coinDrop_mc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[16.8,18,13.9,-143.6,-98,-345.6]},alpha:0},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coinDrop_mc0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[16.9,18,32.9,-143.7,-12.6,-467.2]},alpha:0},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coinAnim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(46));

	// Layer 1
	this.instance = new lib.coin_mc();
	this.instance.parent = this;
	this.instance.setTransform(16.9,18,1.54,1.54,0,0,0,11.3,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:2.07,scaleY:2.07,rotation:-10.2,x:17.1},10).to({rotation:14.7,x:17,y:18.2},7).to({scaleX:1.54,scaleY:1.54,rotation:0,x:16.9,y:18},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.7,36.3,36.3);


(lib.clickTutorialOut_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.cursorTutorial_mc();
	this.instance.parent = this;
	this.instance.setTransform(635.3,421.2,0.397,0.397,9.5,0,0,36.7,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(163));

	// Layer 1
	this.clickTutorial = new lib.clickTutorial_mc();
	this.clickTutorial.parent = this;
	this.clickTutorial.setTransform(239,45.7,1,1,0,0,0,230.5,43.9);

	this.timeline.addTween(cjs.Tween.get(this.clickTutorial).wait(86).to({regX:230.4,regY:43.8,scaleX:1.13,scaleY:1.13},30).wait(14).to({regX:230.5,regY:43.9,scaleX:1,scaleY:1},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-1,659.3,442.2);


// stage content:
(lib.ClickerIdea21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		var hp = 10;
		var clearHP = 10;
		var coin = 0;
		var progress = [1, 0];
		var stats = [1, 0, 0];
		var clearCoinGain = 2;
		var statsLevel = [1, 1, 1];
		var cost = [6, 6, 6];
		var pointPerAnswer = 3;
		var maxLevel = 20;
		var countClicks = 0;
		
		root.tutorialWindow.letsClick.addEventListener("click", startPlay);
		function startPlay()
		{
			root.tutorialWindow.visible = false;
		}
		
		root.upgradeNotice.visible = false;
		
		var q = [
				{Q:"כמה שעות ביממה ישן הפיל", A1:"2", A2:"6", A3:"10", A4:"8", A:1, stdA:""},
				{Q:"לאיזה בעל חיים יש את הקול החזק ביותר", A1:"פיל", A2:"אריה", A3:"לוויתן כחול", A4:"דוב", A:3, stdA:""},
				{Q:"כמה עיניים יש לדבורה", A1:"4", A2:"1", A3:"2", A4:"5", A:4, stdA:""},
				{Q:"יתושים נטפלים במיוחד לאנשים שזה עתה אכלו", A1:"שוקולד", A2:"בננה", A3:"חריף", A4:"בשר", A:2, stdA:""},
				{Q:"איזה בעל חיים ישן 22 שעות ביממה", A1:"קואלה", A2:"דוב", A3:"אריה", A4:"עצלן", A:1, stdA:""},
				{Q:"כמה שעות ביום מקדישים דובי הפנדה לאכילה", A1:"5", A2:"20", A3:"16", A4:"10", A:3, stdA:""},
				{Q:"איזה בעל חיים יכול להרים משא כבד פי 50 ממשקלו", A1:"גמל", A2:"פיל", A3:"חמור", A4:"נמלה", A:4, stdA:""},
				{Q:"איזה ציפור יכולה לעוף אחורה", A1:"ינשוף", A2:"יונק דבש", A3:"בז", A4:"נקר", A:2, stdA:""},
				{Q:"טרמיטים אוכלים עץ במהירות כפולה כשהם שומעים מוזיקת", A1:"אופרה", A2:"קלאסית", A3:"רוק", A4:"בטהובן", A:3, stdA:""},
				{Q:"מה אורך חייו של זבוב", A1:"חודש", A2:"20 ימים", A3:"14 ימים", A4:"7 ימים", A:3, stdA:""},
				];
				
		var answered = [false, false, false, false, false, false, false, false, false, false];
		var answers = 0;
		var currentQuestion;
				
		// הפעלת ההתקפה בעזרת עכבר ומקלדת //
		root.monster1_click_btn.addEventListener("click", attackMouse);
		window.addEventListener("keydown", attackKey);
		
		function attackMouse()
		{
			attack();
		}
		
		function attackKey(event)
		{
			if(event.keyCode == 32)
			{
				attack();
			}
		}
		// ^ ^ ^ ^ ^ ^ //
		
		function attack()
		{
			countClicks ++;
			if (countClicks == 10)
			{
				root.clickTutorialOut.visible = false;
			}
			if(((coin >= (cost[0]*2.5)) || (coin >= (cost[1]*2.5)) || (coin >= (cost[2]*2.5))) && countClicks < 150)
			{
				root.upgradeNotice.visible = true;
			}
			
			root.monster1_mc.monsterEye1_mc.gotoAndPlay(1);
			root.monster1_mc.monsterEye2_mc.gotoAndPlay(1);
			
			hp -= stats[0];
			
			if(hp <= 0)
			{
				root.monster1_mc.gotoAndPlay(35);
				
				coin += clearCoinGain + stats[1];
				
				var coinRandCount = 0;
				var coinRandomCheck = [false, false, false, false, false, false, false, false, false, false];
				var coinRandom;
				while(coinRandCount < 4)
				{
					coinRandom = Math.floor((Math.random() * 10) + 0);
					while(coinRandomCheck[coinRandom] == true)
					{
						coinRandom = Math.floor((Math.random() * 10) + 0);
					}
					root["coinDrop" + coinRandom].gotoAndPlay(1);
					root.coinText.gotoAndPlay(1);
					coinRandCount ++;
					coinRandomCheck[coinRandom] = true;
				}
				root.coinAnim.gotoAndPlay(1);
				
				
				progress[1] ++;
				if(progress[1] >= 10)
				{
					if((progress[0]&2 != 0) || (progress[0]/2 <= answers))
					{
						progress[0] ++;
						progress[1] = 0;
						clearCoinGain = Math.round(clearHP / 15)+2;
						root.stat1.text = clearCoinGain + stats[1];
						if(progress[0]%10 == 0)
						{
							stats[0] += 50;
							root.stat0.text = stats[0];
							pointPerAnswer = 10*(pointPerAnswer-1);
						}
					}
					else
					{
						alert("כדי לעבור לשלב הבא, עלייך לענות על השאלה בצד ימין");
					}
				}
		
				// חישוב חיים
				clearHP = Math.round(10 * (progress[0] - 1 + (Math.pow(1.55, (progress[0]-1)))));
				hp = clearHP;
				root.hpBar.scaleX = 1;
				
				
				// שאלות
				if(progress[0]%2 == 0 && progress[1] == 0)
				{
					questionCreator();
				}
				
			}
			else
			{
				root.hpBar.scaleX = hp / clearHP;
				root.monster1_mc.gotoAndPlay(1);
			}
			
			root.coinText.coinText2.coins.text = coin;
			root.level.text = progress[0];
			root.remains.text = progress[1] + "/" + 10;
			root.hpNum.text = hp;
		}
		
		root.upgrade0.addEventListener("click", raiseStats);
		root.upgrade1.addEventListener("click", raiseStats);
		root.upgrade2.addEventListener("click", raiseStats);
		var btnCount = 3;
		
		upgradeNames();
		function upgradeNames()
		{
			for (var i = 0; i < btnCount; i++) 
			{
				root["upgrade" + i].name = "upgrade" + i;
				root["upgrade" + i].addEventListener("click", raiseStats);
			}
		}
		
		
		
		function raiseStats(event)
		{
			root.upgradeNotice.visible = false;
			
			var clickNum = event.currentTarget.name.charAt(7);
			
			if(coin >= cost[clickNum])
			{
				coin -= cost[clickNum];
				root.coinText.coinText2.coins.text = coin;	
				
				statsLevel[clickNum] ++;
				root["statLevelText" + clickNum].text = statsLevel[clickNum];
		
				if(clickNum == 0)
				{
					cost[clickNum] = Math.round( 5 + statsLevel[clickNum] * Math.pow(1.07, statsLevel[clickNum]-1))+1;
					
					if(progress[0] >= 10 && progress[0] <= 15)
						{
							stats[0] += 5;
						}
						else
						{
							if(progress[0] >=16 && progress[0]<=20)
							{
								stats[0] += 30;
							}
							else
							{
								stats[0] ++;
							}
						}
					root.stat0.text = stats[0];
					
				}
				else
				{
					if(clickNum == 1)
					{
						cost[clickNum] = Math.round( 5 + statsLevel[clickNum] * Math.pow(1.07, statsLevel[clickNum]-1))+1;
						
						if(progress[0] >= 10 && progress[0] <= 15)
						{
							stats[1] += 5;
						}
						else
						{
							if(progress[0] >=16 && progress[0]<=20)
							{
								stats[1] += 30;
							}
							else
							{
								stats[1] ++;
							}
						}
						root.stat1.text = clearCoinGain+stats[1];
					}
					else
					{
						stats[2]++;
						setInterval(autoClickFunc, 2000);
						root.stat2.text ++;
						cost[2] = Math.round(cost[2] * 2.5);
					}
				}
				root["upgrade"+clickNum]["cost"+clickNum].text = cost[clickNum];
				
			}
		}
		
		function autoClickFunc()
		{
			attack();
		}
		
		// מענה על השאלות
		
		var answersBtnsCount = 4;
		
		answersBtns();
		function answersBtns()
		{
			for (var i = 0; i < answersBtnsCount; i++) 
			{
				root["a" + i].name = "a" + i;
				root["a" + i].addEventListener("click", answerQuestion);
			}
		}
		
		function answerQuestion(event)
		{
			var clickNum = event.currentTarget.name.charAt(1);
			
			if(q[currentQuestion].A - 1 == clickNum)
			{
				answers ++;
				answered[currentQuestion] = true;
				currentQuestion = "";
				clearQuestion();
				
				stats[0] += pointPerAnswer;
				root.stat0.text = stats[0];
			}
			else
			{
				alert("טעית בשאלה, נסה/י את השאלה הבאה");
				questionCreator();
			}
		}
		
		function questionCreator()
		{
			if(progress[0] < maxLevel+1)
			{
				currentQuestion = Math.floor((Math.random() * 10) + 0);
				while(answered[currentQuestion] == true)
				{
					currentQuestion = Math.floor((Math.random() * 10) + 0);
				}
				root.questionText.text = ": " + "שאלה מספר " + (answers + 1) + "\n" + q[currentQuestion].Q;
				root.answer1Text.text = q[currentQuestion].A1;
				root.answer2Text.text = q[currentQuestion].A2;
				root.answer3Text.text = q[currentQuestion].A3;
				root.answer4Text.text = q[currentQuestion].A4;
		
			}
			else
			{
				alert("אין עוד שאלות את/ה מוזמן לצאת");
			}
			
		}
		
		function clearQuestion()
		{
			root.questionText.text = "! כל הכבוד" + "\n" + " קיבלת " + pointPerAnswer + " כוח לחיצה" ;
			root.answer1Text.text = "";
			root.answer2Text.text = "";
			root.answer3Text.text = "";
			root.answer4Text.text = "";
		}
		
		root.questionExplainClose.visible = false;
		
		root.questionExplainClose.addEventListener("click", questionExplainShow);
		function questionExplainShow()
		{
			root.questionExplainOpen.visible = true;
			root.questionExplainClose.visible = false;
		}
		
		root.questionExplainOpen.addEventListener("click", questionExplainHide);
		function questionExplainHide()
		{
			root.questionExplainOpen.visible = false;
			root.questionExplainClose.visible = true;
		}
		
		
		stage.addEventListener("click", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		    var coor = this.globalToLocal(stage.mouseX, stage.mouseY);
		    var dmg = new lib.dmgFlow();
			stage.addChild(dmg);
			dmg.x = coor.x;
			dmg.y = coor.y;
			
			dmg.dmgFlowAnim.dmgFlowText1.text = stats[0];
			dmg.dmgFlowAnim.dmgFlowText2.text = stats[0];
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// explain
	this.tutorialWindow = new lib.gameExplain_mc();
	this.tutorialWindow.parent = this;
	this.tutorialWindow.setTransform(943.6,409.8,1,1,0,0,0,704.2,231.8);

	this.timeline.addTween(cjs.Tween.get(this.tutorialWindow).wait(1));

	// coins
	this.coinDrop0 = new lib.coinDrop_mc0();
	this.coinDrop0.parent = this;
	this.coinDrop0.setTransform(688.9,612.8,1,1,0,0,0,17.4,17.4);

	this.coinDrop9 = new lib.coinDrop_mc9();
	this.coinDrop9.parent = this;
	this.coinDrop9.setTransform(510.7,505.9,1,1,0,0,0,17.4,17.4);

	this.coinDrop8 = new lib.coinDrop_mc8();
	this.coinDrop8.parent = this;
	this.coinDrop8.setTransform(571.3,575.4,1,1,0,0,0,17.4,17.4);

	this.coinDrop7 = new lib.coinDrop_mc7();
	this.coinDrop7.parent = this;
	this.coinDrop7.setTransform(588.8,504,1,1,0,0,0,17.4,17.4);

	this.coinDrop6 = new lib.coinDrop_mc6();
	this.coinDrop6.parent = this;
	this.coinDrop6.setTransform(630.7,618.6,1,1,0,0,0,17.4,17.4);

	this.coinDrop5 = new lib.coinDrop_mc5();
	this.coinDrop5.parent = this;
	this.coinDrop5.setTransform(660.1,540.7,1,1,0,0,0,17.4,17.4);

	this.coinDrop4 = new lib.coinDrop_mc4();
	this.coinDrop4.parent = this;
	this.coinDrop4.setTransform(725.8,469.2,1,1,0,0,0,17.4,17.4);

	this.coinDrop3 = new lib.coinDrop_mc3();
	this.coinDrop3.parent = this;
	this.coinDrop3.setTransform(743.3,581.4,1,1,0,0,0,17.4,17.4);

	this.coinDrop2 = new lib.coinDrop_mc2();
	this.coinDrop2.parent = this;
	this.coinDrop2.setTransform(743.3,532,1,1,0,0,0,17.4,17.4);

	this.coinDrop1 = new lib.coinDrop_mc1();
	this.coinDrop1.parent = this;
	this.coinDrop1.setTransform(812.9,500.5,1,1,0,0,0,17.4,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.coinDrop1},{t:this.coinDrop2},{t:this.coinDrop3},{t:this.coinDrop4},{t:this.coinDrop5},{t:this.coinDrop6},{t:this.coinDrop7},{t:this.coinDrop8},{t:this.coinDrop9},{t:this.coinDrop0}]}).wait(1));

	// Layer 5
	this.a3 = new lib.answerBtn();
	this.a3.parent = this;
	this.a3.setTransform(1014,581.6,1,1.179,0,0,0,119.7,14.5);
	new cjs.ButtonHelper(this.a3, 0, 1, 2, false, new lib.answerBtn(), 3);

	this.a2 = new lib.answerBtn();
	this.a2.parent = this;
	this.a2.setTransform(1014,532.5,1,1.162,0,0,0,119.7,14.5);
	new cjs.ButtonHelper(this.a2, 0, 1, 2, false, new lib.answerBtn(), 3);

	this.a1 = new lib.answerBtn();
	this.a1.parent = this;
	this.a1.setTransform(1014,483.2,1,1.207,0,0,0,119.7,14.5);
	new cjs.ButtonHelper(this.a1, 0, 1, 2, false, new lib.answerBtn(), 3);

	this.a0 = new lib.answerBtn();
	this.a0.parent = this;
	this.a0.setTransform(1014,434.5,1,1.162,0,0,0,119.7,14.6);
	new cjs.ButtonHelper(this.a0, 0, 1, 2, false, new lib.answerBtn(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,1,1).p("A4/jjMAx+AAAQBVAAA8A6QA8A7AABTIAAA4QAABTg8A6Qg8A7hVAAMgx+AAAQhUAAg8g7Qg8g6AAhTIAAg4QAAhTA8g7QA8g6BUAAg");
	this.shape.setTransform(659.8,778.3);

	this.monster1_click_btn = new lib.monster1_click_btn();
	this.monster1_click_btn.parent = this;
	this.monster1_click_btn.setTransform(660.6,502.8,1,1,0,0,0,174.5,174.5);
	new cjs.ButtonHelper(this.monster1_click_btn, 0, 1, 2, false, new lib.monster1_click_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.monster1_click_btn},{t:this.shape},{t:this.a0},{t:this.a1},{t:this.a2},{t:this.a3}]}).wait(1));

	// Layer 1
	this.coinText = new lib.coinText_mc();
	this.coinText.parent = this;
	this.coinText.setTransform(539.6,105.5,1,1,0,0,0,119.7,26.2);

	this.coinAnim = new lib.coinAnim_mc();
	this.coinAnim.parent = this;
	this.coinAnim.setTransform(688.9,99.6,1,1,0,0,0,17.4,17.4);

	this.clickTutorialOut = new lib.clickTutorialOut_mc();
	this.clickTutorialOut.parent = this;
	this.clickTutorialOut.setTransform(314.5,177.1,1,1,0,0,0,240.5,45.5);

	this.instance = new lib.showMaxLevel_btn();
	this.instance.parent = this;
	this.instance.setTransform(683.4,232.4,1,1,0,0,0,77.3,23.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.showMaxLevel_btn(), 3);

	this.questionExplainClose = new lib.questionExplainClose_btn();
	this.questionExplainClose.parent = this;
	this.questionExplainClose.setTransform(1103.6,40.5,1.261,1.261,0,0,0,54.6,11.3);
	new cjs.ButtonHelper(this.questionExplainClose, 0, 1, 1);

	this.instance_1 = new lib.explainAutoClick_btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(408.2,581.4,1.693,1.671,0,0,0,9.5,10.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.explainAutoClick_btn(), 3);

	this.instance_2 = new lib.explainCoinDrop_btn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(407.3,462.1,1.693,1.671,0,0,0,9.5,10.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.explainCoinDrop_btn(), 3);

	this.instance_3 = new lib.explainClickPower_btn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(408.2,341.6,1.693,1.671,0,0,0,9.5,10.8);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.explainClickPower_btn(), 3);

	this.answer4Text = new cjs.Text("", "25px 'Myriad Hebrew'");
	this.answer4Text.name = "answer4Text";
	this.answer4Text.textAlign = "right";
	this.answer4Text.lineHeight = 32;
	this.answer4Text.lineWidth = 235;
	this.answer4Text.parent = this;
	this.answer4Text.setTransform(1131.6,566.4);

	this.answer3Text = new cjs.Text("", "25px 'Myriad Hebrew'");
	this.answer3Text.name = "answer3Text";
	this.answer3Text.textAlign = "right";
	this.answer3Text.lineHeight = 32;
	this.answer3Text.lineWidth = 235;
	this.answer3Text.parent = this;
	this.answer3Text.setTransform(1131.6,517.6);

	this.answer2Text = new cjs.Text("", "25px 'Myriad Hebrew'");
	this.answer2Text.name = "answer2Text";
	this.answer2Text.textAlign = "right";
	this.answer2Text.lineHeight = 32;
	this.answer2Text.lineWidth = 235;
	this.answer2Text.parent = this;
	this.answer2Text.setTransform(1131.6,467.7);

	this.answer1Text = new cjs.Text("", "25px 'Myriad Hebrew'");
	this.answer1Text.name = "answer1Text";
	this.answer1Text.textAlign = "right";
	this.answer1Text.lineHeight = 32;
	this.answer1Text.lineWidth = 236;
	this.answer1Text.parent = this;
	this.answer1Text.setTransform(1132.1,419.5);

	this.questionText = new cjs.Text("", "25px 'Myriad Hebrew'");
	this.questionText.name = "questionText";
	this.questionText.textAlign = "right";
	this.questionText.lineHeight = 32;
	this.questionText.lineWidth = 235;
	this.questionText.parent = this;
	this.questionText.setTransform(1140.5,262.4);

	this.hpNum = new cjs.Text("10", "40px 'Myriad Hebrew'");
	this.hpNum.name = "hpNum";
	this.hpNum.textAlign = "center";
	this.hpNum.lineHeight = 50;
	this.hpNum.lineWidth = 135;
	this.hpNum.parent = this;
	this.hpNum.setTransform(660.8,760.4);

	this.hpBar = new lib.hpBar_mc();
	this.hpBar.parent = this;
	this.hpBar.setTransform(483.7,778.1,1,1,0,0,0,0.3,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAEBmIAAgkIAmAAIAAhHQAAgcgFgMIgGgJQgIgKgPAAQgHAAgGAEQgHADgEAFQgKAKgDAHIgCAEIgMCFIguAAIALh/IABgOQAAgcgLgfIAtAAIAFAOIAEAQIADAAIACgDIAGgIQAFgGAHgFQAGgEAKgEQALgDANAAQAOAAALAFQALAFAHAIQAGAJAFAMQAHAVAAAeIAABxg");
	this.shape_1.setTransform(758.3,284.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AglBnIgbgCIgIgBIAAgjQAkACAkAAQAOAAAIgHQAHgGAEgPQACgJABgLIAAgTIAAgMIgBgNIgCgNIgEgLQgDgFgEgDQgJgIgNAAQgJAAgHADQgHADgEAEQgDADgDAFQgCAHAAAIQAAAHADAGQADAGAEAEQAJAGAHABIAGACIgIAiIgIgBQgWgDgLgFQgggOAAgrQAAgQAFgMQAGgNAIgIQAIgIAMgFQAUgJAZAAQANAAALACQALADALAHQAMAHAIALQAIALAGATQAFATAAAVQAAAVgDAPQgCAPgEAKQgEALgHAIQgGAIgHAFQgHAFgJADQgPAGgVAAIglgBg");
	this.shape_2.setTransform(737.8,284.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNB5IAQhLIAahZIhpAAIAAhOIAwAAIAAAqIBpAAIAAAfIgbBeIgRBLg");
	this.shape_3.setTransform(719.2,282.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhVBlIAAglIBOAAIAjADIAAgBIgrg3IhHhvIA1AAIA4BbQALgQADgfIADgsIAvAAIgDAmQgCAagFANIgGAPQgIAQgQAOIAoAzIAAAcg");
	this.shape_4.setTransform(700.3,284.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXBlIAAjJIAvAAIAADJg");
	this.shape_5.setTransform(685.7,284.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhdBkIAAglQAKADAGAAQAGAAAEgCQADgCACgEQAEgHAAgKIAAhnIgXACIAAgkQAwgHAvAAQAiAAASAJQAJAFAFAFQAGAGADAJQADAJACAJIABAVIAACDIgxAAIAAiDQAAgkgnAAIgSAAIAABrQAAAkgSAPQgHAFgKAEQgLADgNAAQgNAAgKgEg");
	this.shape_6.setTransform(669,284.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTBVQgHgIAAgNQAAgNAHgGQAHgHAMAAQANAAAHAHQAHAHAAAMQAAANgHAHQgHAHgNAAQgMAAgHgGgAgTgsQgHgGAAgNQAAgbAaAAQANAAAHAHQAHAHAAAMQAAAOgHAGQgHAHgNAAQgMAAgHgHg");
	this.shape_7.setTransform(653.8,286);

	this.remains = new cjs.Text("0/10", "40px 'Myriad Hebrew'");
	this.remains.name = "remains";
	this.remains.textAlign = "right";
	this.remains.lineHeight = 50;
	this.remains.lineWidth = 135;
	this.remains.parent = this;
	this.remains.setTransform(630.5,266.6);

	this.level = new cjs.Text("1", "40px 'Myriad Hebrew'");
	this.level.name = "level";
	this.level.textAlign = "right";
	this.level.lineHeight = 50;
	this.level.lineWidth = 135;
	this.level.parent = this;
	this.level.setTransform(630.7,214);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAEBmIAAgkIAmAAIAAhHQAAgcgFgMIgGgJQgIgKgPAAQgHAAgGAEQgHADgEAFQgKAKgDAHIgCAEIgMCFIguAAIALh/IABgOQAAgcgLgfIAtAAIAFAOIAEAQIADAAIACgDIAGgIQAFgGAHgFQAGgEAKgEQALgDANAAQAOAAALAFQALAFAHAIQAGAJAFAMQAHAVAAAeIAABxg");
	this.shape_8.setTransform(715.8,54.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghBhQgPgHgMgNQgLgNgGgTQgHgUAAgZIAAhjIAwAAIAABjQAAAhAJAQQAJARASAAQASAAAKgQQAJgPAAgjQAAgggFgQQgFgNgMgDQgGgBgIAAIgJABIAAgjQAKgEANAAQAZAAAOAJQAfATAABLQAAAygXAbQgWAbgpAAQgRAAgPgHg");
	this.shape_9.setTransform(695.2,54.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhPBmIAAgkIBZAAIAAhfQAAgkgnAAQgUAAgXADIgHABIAAgmQAWgCAjAAQAxAAAQATQAKALACAMQACANAAASIAABeIAYAAIAAAkg");
	this.shape_10.setTransform(675.6,54.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhXBEIA0gHIgsimIAvAAIAZBbIALA/QANgHAHgPQAGgPADgWIAIhfIAvAAIgIBYQgCAbgIATQgWA2hHANIhAAJg");
	this.shape_11.setTransform(655.5,55.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXBlIAAjJIAvAAIAADJg");
	this.shape_12.setTransform(640.8,54.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhdBkIAAglQAKADAGAAQAGAAAEgCQADgCACgEQAEgHAAgKIAAhnIgXACIAAgkQAwgHAvAAQAiAAASAJQAJAFAFAFQAGAGADAJQAEAJABAJIABAVIAACDIgwAAIAAiDQAAgkgoAAIgSAAIAABrQAAAkgSAPQgHAFgKAEQgLADgNAAQgNAAgKgEg");
	this.shape_13.setTransform(624.1,54.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTBUQgHgGAAgNQAAgNAHgHQAHgHAMAAQANAAAHAHQAHAHAAANQAAAMgHAHQgHAHgNAAQgMAAgHgHgAgTgrQgHgIAAgMQAAgbAaAAQANAAAHAHQAHAHAAANQAAAMgHAIQgHAGgNAAQgMAAgHgGg");
	this.shape_14.setTransform(608.9,56);

	this.upgrade2 = new lib.upgrade2_btn();
	this.upgrade2.parent = this;
	this.upgrade2.setTransform(353,626,1,1,0,0,0,57.7,25.5);
	new cjs.ButtonHelper(this.upgrade2, 0, 1, 2, false, new lib.upgrade2_btn(), 3);

	this.upgrade1 = new lib.upgrade1_btn();
	this.upgrade1.parent = this;
	this.upgrade1.setTransform(353,506.9,1,1,0,0,0,57.7,25.5);
	new cjs.ButtonHelper(this.upgrade1, 0, 1, 2, false, new lib.upgrade1_btn(), 3);

	this.upgrade0 = new lib.upgrade0_btn();
	this.upgrade0.parent = this;
	this.upgrade0.setTransform(353,385.1,1,1,0,0,0,57.7,25.5);
	new cjs.ButtonHelper(this.upgrade0, 0, 1, 2, false, new lib.upgrade0_btn(), 3);

	this.stat2 = new cjs.Text("0", "27px 'Myriad Hebrew'");
	this.stat2.name = "stat2";
	this.stat2.textAlign = "center";
	this.stat2.lineHeight = 35;
	this.stat2.lineWidth = 236;
	this.stat2.parent = this;
	this.stat2.setTransform(173.9,627.2);

	this.stat0 = new cjs.Text("1", "27px 'Myriad Hebrew'");
	this.stat0.name = "stat0";
	this.stat0.textAlign = "center";
	this.stat0.lineHeight = 35;
	this.stat0.lineWidth = 235;
	this.stat0.parent = this;
	this.stat0.setTransform(173.9,386.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBMIAJgvIAQg3IhBAAIAAgxIAeAAIAAAaIBBAAIAAATIgRA7IgKAvg");
	this.shape_15.setTransform(250.3,585.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVBAIAAhSQgBgWgYAAIgQABIAABnIgeAAIAAh6QAIgDAPgBIAbgBQAKAAAJABQAIACAFADQAGADADADQAEAEACAFQACAFAAAHIABAMIAABSg");
	this.shape_16.setTransform(238.3,587);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOAqIAAhTIAdAAIAAA5IgTAag");
	this.shape_17.setTransform(228.8,584.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag1A/IAAgXIAxAAIAVACIAAgBIgagiIgthFIAhAAIAjA5QAHgKACgUIACgbIAdAAIgCAYQgBAQgDAIIgEAKQgFAJgKAJIAZAgIAAARg");
	this.shape_18.setTransform(219.5,587.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOA/IAAh9IAdAAIAAB9g");
	this.shape_19.setTransform(210.4,587.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag6A+IAAgWIAKACQAEgBACgBIAEgEQABgEAAgHIAAg/IgNABIAAgWQAegFAcAAQAWAAALAGIAJAGQAEAEACAFIACAMIABAMIAABSIgeAAIAAhSQAAgWgZAAIgKABIAABBQgBAYgKAJQgFADgHACQgHACgHAAQgJAAgGgDg");
	this.shape_20.setTransform(199.9,587.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWA/Igkg/QgFACgCAFQgCAEAAAGIAAAuIgeAAIAAgtIABgJIACgIIAEgHQADgDAFgDQAEgEAHgCIgcgsIAiAAIAYArIAMATQAFgBACgEQABgFABgHIAAgtIAdAAIAAAtQAAAQgHAIQgCAEgFADQgFADgHACIAdAsg");
	this.shape_21.setTransform(181.6,587.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgOA/IAAh9IAdAAIAAB9g");
	this.shape_22.setTransform(172.1,587.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVA8QgJgEgHgHQgHgJgEgMQgEgNAAgPIAAg+IAeAAIAAA+QAAAUAFALQAGAKALAAQALAAAGgJQAGgLAAgVQAAgUgDgJQgDgJgIgBIgJgBIgFAAIAAgWQAHgCAHAAQAQAAAJAGQATALAAAvQAAAfgOASQgOAQgaAAQgKAAgKgFg");
	this.shape_23.setTransform(162.8,587.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOA/IAAh9IAdAAIAAB9g");
	this.shape_24.setTransform(153,587.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AADBAIAAgXIAXAAIAAgsQAAgSgDgHIgEgGQgFgFgJAAQgFAAgDACIgHAFQgGAGgCAFIgBACIgHBTIgeAAIAIhPIAAgJQAAgRgHgUIAdAAIADAJIACAKIACAAIABgCIAEgFIAHgGQAEgEAGgCQAGgCAJAAQAJAAAGADQAHADAFAGQAEAFACAIQAGANAAASIAABHg");
	this.shape_25.setTransform(142.8,587);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVA8QgJgEgHgHQgHgJgEgMQgEgNAAgPIAAg+IAeAAIAAA+QAAAUAGALQAFAKALAAQAMAAAFgJQAGgLAAgVQAAgUgEgJQgCgJgIgBIgIgBIgGAAIAAgWQAGgCAJAAQAPAAAJAGQATALAAAvQAAAfgOASQgOAQgZAAQgLAAgKgFg");
	this.shape_26.setTransform(129.9,587.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAqIAAhTIAdAAIAAA5IgTAag");
	this.shape_27.setTransform(120.2,584.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgOA/IAAh9IAdAAIAAB9g");
	this.shape_28.setTransform(114.3,587.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag6A+IAAgWIAKACQAEgBACgBIAEgEQACgEAAgHIAAg/IgPABIAAgWQAegFAdAAQAWAAALAGIAJAGQAEAEACAFIACAMIABAMIAABSIgeAAIAAhSQAAgWgZAAIgLABIAABBQABAYgLAJQgFADgGACQgIACgHAAQgJAAgGgDg");
	this.shape_29.setTransform(103.8,587.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgMA1QgEgFAAgIQAAgIAEgEQAFgEAHAAQAIAAAEAEQAFAEAAAIQAAAIgFAEQgEAFgIAAQgHAAgFgEgAgMgbQgEgEAAgIQAAgRAQAAQAIAAAEAEQAFAFAAAIQAAAIgFAEQgEAEgIAAQgHAAgFgEg");
	this.shape_30.setTransform(94.4,587.9);

	this.stat1 = new cjs.Text("2", "27px 'Myriad Hebrew'");
	this.stat1.name = "stat1";
	this.stat1.textAlign = "center";
	this.stat1.lineHeight = 35;
	this.stat1.lineWidth = 235;
	this.stat1.parent = this;
	this.stat1.setTransform(173.9,507.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgrA+IAAgXQAQACARAAQAPAAAGgMQADgIAAgKIAAgUQAAgXgNgHQgEgCgHAAQgMAAgVACIAAgXQASgCATAAQAKAAAJAEQAJADAGAFQAGAGADAHQAHAOAAATIAAANIgBARIgFAQQgDAHgGAGQgFAFgKADQgJAEgLAAQgWAAgPgDg");
	this.shape_31.setTransform(273.6,468.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AACBAIAAgXIAYAAIAAgsQAAgRgDgIIgEgFQgFgHgJABQgFgBgDADIgHAFQgGAGgCAFIgBACIgHBTIgdAAIAHhPIAAgJQAAgSgHgTIAdAAIACAJIADALIACAAIABgDIAEgFIAHgHQAEgCAGgCQAGgDAJAAQAIAAAIAEQAHADAEAFQAEAFADAIQAEANAAATIAABGg");
	this.shape_32.setTransform(261.4,468.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgOA/IAAh9IAdAAIAAB9g");
	this.shape_33.setTransform(251.7,468.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag6A+IAAgWIAKABQAEABACgCIAEgEQABgEABgHIAAhAIgPACIAAgWQAfgFAcAAQAWAAALAGIAKAGQADAEACAGIADALIAAAMIAABSIgeAAIAAhSQAAgWgYAAIgMABIAABBQABAXgMAKQgEADgGACQgHACgJAAQgHAAgHgDg");
	this.shape_34.setTransform(241.3,468.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AADBAIAAgXIAXAAIAAgsQAAgRgDgIIgEgFQgFgHgJABQgFgBgDADIgHAFQgGAGgCAFIgBACIgIBTIgdAAIAIhPIAAgJQAAgSgHgTIAcAAIAEAJIACALIACAAIABgDIAEgFIAHgHQAEgCAGgCQAGgDAJAAQAJAAAGAEQAIADADAFQAFAFACAIQAGANAAATIAABGg");
	this.shape_35.setTransform(222.3,468.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgVA8QgJgEgHgHQgHgJgEgMQgEgNAAgPIAAg+IAeAAIAAA+QAAAVAGAKQAFAKALAAQAMAAAFgKQAGgJAAgWQAAgUgDgKQgDgHgIgCIgIgBIgGAAIAAgWQAGgCAJAAQAPAAAJAGQATALAAAvQAAAggOARQgOAQgZAAQgLAAgKgFg");
	this.shape_36.setTransform(209.5,468.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgxBAIAAgXIA3AAIAAg7QAAgWgYAAQgMAAgPACIgEAAIAAgXQAOgCAVAAQAfAAAKANQAGAGABAHQACAJAAAKIAAA7IAOAAIAAAXg");
	this.shape_37.setTransform(197.1,468.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag2ArIAggFIgbhnIAdAAIAQA5IAHAnQAHgFAFgJQAEgJABgOIAFg7IAeAAIgFA3QgBAQgFAMQgOAigsAIIgoAGg");
	this.shape_38.setTransform(184.6,469.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgOA/IAAh9IAdAAIAAB9g");
	this.shape_39.setTransform(175.4,468.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag6A+IAAgWIAKABQAEABACgCIAEgEQACgEgBgHIAAhAIgNACIAAgWQAdgFAdAAQAWAAALAGIAKAGQADAEACAGIADALIAAAMIAABSIgeAAIAAhSQAAgWgYAAIgMABIAABBQAAAXgLAKQgEADgGACQgIACgIAAQgHAAgHgDg");
	this.shape_40.setTransform(165,468.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgIBMIAKgvIAQg3IhBAAIAAgxIAdAAIAAAaIBCAAIAAAUIgRA6IgLAvg");
	this.shape_41.setTransform(147.8,467.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AADBAIAAgXIAXAAIAAgsQAAgRgDgIIgEgFQgFgHgJABQgFgBgDADIgHAFQgGAGgCAFIgBACIgHBTIgeAAIAIhPIAAgJQAAgSgHgTIAdAAIADAJIACALIACAAIABgDIAEgFIAHgHQAEgCAGgCQAGgDAJAAQAJAAAGAEQAHADAFAFQAEAFACAIQAGANAAATIAABGg");
	this.shape_42.setTransform(135.1,468.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXBBIgRgCIgEgBIAAgWQAWACAWAAQAIAAAGgFQAEgDACgKIACgMIAAgMIAAgHIAAgIIgCgIIgCgHQgCgDgCgDQgGgEgIAAQgFAAgEABQgFACgCADIgEAFIgCAJQAAAFACADQACAEADADQAFADAFABIAEABIgGAWIgFgBQgOgCgGgEQgUgIAAgbQAAgKADgIQAEgHAFgFQAFgFAHgDQAMgGAQAAQAIAAAHABQAGACAIAEQAHAEAFAHQAGAIACALQAEAMAAAOQAAAMgBAKQgCAJgDAHQgCAGgEAGQgEAFgFADIgJAEQgKAEgMAAIgYAAg");
	this.shape_43.setTransform(122.3,468.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgIBMIAKgvIAQg3IhBAAIAAgxIAeAAIAAAaIBBAAIAAAUIgRA6IgLAvg");
	this.shape_44.setTransform(110.7,467.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag1A/IAAgXIAxAAIAVABIAAAAIgagiIgthFIAiAAIAiA5QAHgKACgTIACgcIAdAAIgCAXQgBARgDAIIgEAKQgFAJgKAJIAZAgIAAARg");
	this.shape_45.setTransform(98.8,468.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag6A+IAAgWIAKABQAEABACgCIAEgEQACgEgBgHIAAhAIgNACIAAgWQAdgFAdAAQAWAAALAGIAKAGQADAEACAGIADALIAAAMIAABSIgeAAIAAhSQAAgWgYAAIgMABIAABBQAAAXgLAKQgEADgHACQgHACgIAAQgHAAgHgDg");
	this.shape_46.setTransform(85.3,468.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgLA1QgFgFAAgIQAAgIAFgEQADgEAIAAQAIAAAFAEQAEAEAAAIQAAAIgEAEQgFAFgIAAQgHAAgEgEgAgLgbQgFgEAAgIQAAgRAQAAQAIAAAFAEQAEAFAAAIQAAAIgEAEQgFAEgIAAQgHAAgEgEg");
	this.shape_47.setTransform(75.9,469.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgrA+IAAgXQAQACARAAQAPAAAGgMQADgIAAgLIAAgTQAAgXgNgHQgEgCgHAAQgMAAgVACIAAgXQASgCATAAQAKAAAJAEQAJACAGAGQAGAGADAHQAHAOAAATIAAANIgBARIgFAQQgDAHgGAGQgFAFgKAEQgJADgLAAQgWAAgPgDg");
	this.shape_48.setTransform(216.8,345.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgOA/IAAh9IAdAAIAAB9g");
	this.shape_49.setTransform(208.8,345.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAVBAIAAhRQAAgXgYAAIgRAAIAABoIgdAAIAAh7QAHgBAOgBIAbgCQAMAAAHACQAJABAGACQAFADAEAEQADAEACAFQACAFABAGIABAOIAABRg");
	this.shape_50.setTransform(199.2,345.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIBMIAKgvIAQg3IhBAAIAAgxIAdAAIAAAaIBCAAIAAATIgRA7IgLAvg");
	this.shape_51.setTransform(182,344.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAVBAIAAhRQAAgXgYAAIgRAAIAABoIgdAAIAAh7QAHgBAOgBIAbgCQAMAAAHACQAJABAGACQAFADAEAEQADAEACAFQACAFABAGIABAOIAABRg");
	this.shape_52.setTransform(169.9,345.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgOAqIAAhTIAdAAIAAA5IgTAag");
	this.shape_53.setTransform(160.4,343.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag0A/IAAgXIAwAAIAVABIAAAAIgagiIgshFIAhAAIAiA5QAHgKABgTIADgcIAdAAIgBAXQgCARgDAIIgEAJQgFAKgKAIIAZAhIAAARg");
	this.shape_54.setTransform(151.2,345.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAVBAIAAhRQAAgXgYAAIgUABIgTACIgHABIAAgXQAHgBAOgBIAbgCQAMAAAHACQAJABAGACQAFADADAEQAEAEACAFQACAFABAGIABAOIAABRgAgxBAIAAhPIAdAAIAABPg");
	this.shape_55.setTransform(138.5,345.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgLA1QgFgFAAgIQAAgIAFgEQADgEAIAAQAIAAAFAEQAEAEAAAIQAAAIgEAEQgFAFgIAAQgHAAgEgEgAgLgbQgFgEAAgIQAAgRAQAAQAIAAAFAEQAEAFAAAIQAAAIgEAEQgFAEgIAAQgHAAgEgEg");
	this.shape_56.setTransform(129.1,346.8);

	this.monster1_mc = new lib.monster1_mc();
	this.monster1_mc.parent = this;
	this.monster1_mc.setTransform(660.6,502.8,1,1,0,0,0,174.5,174.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AA1BpIAAhwQAAgWgFgNQgFgOgPgHQgQgIgbAAQgRAAgUACIAACuIglAAIAAjKQApgHAjAAQAmAAAXAMQAXALAKASQAJATAAAiIAABzg");
	this.shape_57.setTransform(685.8,734.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgSA2IAAhqIAlAAIAABqg");
	this.shape_58.setTransform(668.8,729.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgSA2IAAhqIAlAAIAABqg");
	this.shape_59.setTransform(659,729.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhZBpIAAjKQApgHAjAAQAmAAAXAMQAXALAKASQAJATAAAiIAABzgAg0hFIAACPIBpAAIAAhRQAAgWgFgNQgFgOgPgHQgQgIgbAAQgRAAgUACg");
	this.shape_60.setTransform(642.1,734.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgUBkQgIgJAAgMQAAgMAIgJQAJgJALABQAMgBAJAJQAIAJAAAMQAAAMgIAJQgJAIgMAAQgLAAgJgIgAgUg5QgIgJAAgNQAAgMAIgIQAJgJALAAQAMAAAJAJQAIAIAAAMQAAANgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_61.setTransform(622.3,734.6);

	this.questionExplainOpen = new lib.questionExplainOpen_btn();
	this.questionExplainOpen.parent = this;
	this.questionExplainOpen.setTransform(986.1,114.5,1.261,1.261,0,0,0,147.6,70.9);
	new cjs.ButtonHelper(this.questionExplainOpen, 0, 1, 2, false, new lib.questionExplainOpen_btn(), 3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(4,1,1).p("EhZYg/dMCyxAAAQBhAAAABhMAAAB7+QgCBchfAAMiyxAAAQhfAAgChcMAAAh7+QAAhhBhAAg");
	this.shape_62.setTransform(602.1,422.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.questionExplainOpen},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.monster1_mc},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.stat1},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.stat0},{t:this.stat2},{t:this.upgrade0},{t:this.upgrade1},{t:this.upgrade2},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.level},{t:this.remains},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.hpBar},{t:this.hpNum},{t:this.questionText},{t:this.answer1Text},{t:this.answer2Text},{t:this.answer3Text},{t:this.answer4Text},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.questionExplainClose},{t:this.instance},{t:this.clickTutorialOut},{t:this.coinAnim},{t:this.coinText}]}).wait(1));

	// Layer 4
	this.upgradeNotice = new lib.upgradeNotice_mc();
	this.upgradeNotice.parent = this;
	this.upgradeNotice.setTransform(354.8,295.8,1,1,0,0,0,43.6,20.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAJAqIAAg1QAAgPgPAAIgVABIAAgOIAVgCIAOABIAIADIAGAEQADACABAEIACAIIAAAIIAAA1g");
	this.shape_63.setTransform(193.3,607.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AACAqIAAgQIAPAAIAAgbQAAgMgCgFIgDgDQgDgFgGAAIgFACIgEAEIgFAGIgBACIgFA2IgTAAIAFgzIAAgHQAAgKgEgNIASAAIACAFIACAHIABAAIABgBIACgEIAFgEIAGgDQAEgCAGAAQAFAAAFADQAEACADADIAFAIQADAJAAAMIAAAug");
	this.shape_64.setTransform(185.6,607.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AANAqIAAg1QAAgPgPAAIgNABIgMABIgFAAIAAgOIAPgCIARgBIAMABQAGABADACIAGAEIAEAGIABAIIABAIIAAA1gAggAqIAAgzIAUAAIAAAzg");
	this.shape_65.setTransform(177,607.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHAjQgDgEAAgEQAAgGADgCQADgDAEgBQAGABADADQACACAAAGQAAAEgDAEQgDACgFAAQgEAAgDgCgAgHgRQgDgDAAgFQAAgLAKAAQAGAAADADQACADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_66.setTransform(170.9,607.7);

	this.statLevelText2 = new cjs.Text("1", "bold 13px 'Open Sans Hebrew'");
	this.statLevelText2.name = "statLevelText2";
	this.statLevelText2.textAlign = "right";
	this.statLevelText2.lineHeight = 20;
	this.statLevelText2.lineWidth = 68;
	this.statLevelText2.parent = this;
	this.statLevelText2.setTransform(166.2,597.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAJAqIAAg1QAAgPgPAAIgVABIAAgOIAVgBIAOAAIAIADIAGAEQADACABAEIACAHIAAAJIAAA1g");
	this.shape_67.setTransform(193.3,489);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AACAqIAAgQIAPAAIAAgcQAAgLgCgFIgDgDQgDgFgGAAIgFACIgEAEIgFAHIgBABIgFA2IgTAAIAFg0IAAgGQAAgKgEgNIASAAIACAFIACAHIABAAIABgCIACgCIAFgFIAGgDQAEgBAGAAQAFAAAFACQAEACADADIAFAIQADAJAAAMIAAAug");
	this.shape_68.setTransform(185.6,489);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AANAqIAAg1QAAgPgPAAIgNABIgMABIgFABIAAgPIAPgCIARAAIAMAAQAGABADACIAGAEIAEAGIABAHIABAJIAAA1gAggAqIAAg0IAUAAIAAA0g");
	this.shape_69.setTransform(177,489);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHAjQgDgDAAgFQAAgGADgDQADgCAEAAQAGAAADACQACADAAAGQAAAFgDADQgDACgFAAQgEAAgDgCgAgHgRQgDgDAAgFQAAgLAKAAQAGAAADADQACADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_70.setTransform(170.9,489.6);

	this.statLevelText1 = new cjs.Text("1", "bold 13px 'Open Sans Hebrew'");
	this.statLevelText1.name = "statLevelText1";
	this.statLevelText1.textAlign = "right";
	this.statLevelText1.lineHeight = 20;
	this.statLevelText1.lineWidth = 68;
	this.statLevelText1.parent = this;
	this.statLevelText1.setTransform(166.2,479.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAJApIAAg0QAAgOgPAAIgVABIAAgQIAVgBIAOABIAIADIAGAEQADADABADIACAHIAAAJIAAA0g");
	this.shape_71.setTransform(193.3,365.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AACApIAAgOIAPAAIAAgdQAAgLgCgEIgDgFQgDgDgGAAIgFABIgEADIgFAHIgBACIgFA1IgTAAIAFgyIAAgGQAAgMgEgNIASAAIACAHIACAGIABAAIABgCIACgDIAFgEIAGgDQAEgBAGgBQAFAAAFACQAEACADAEIAFAJQADAIAAAMIAAAtg");
	this.shape_72.setTransform(185.6,365.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AANApIAAg0QAAgOgPAAIgNAAIgMABIgFAAIAAgOIAPgCIARgBIAMABQAGABADACIAGAEIAEAGIABAHIABAJIAAA0gAggApIAAgyIAUAAIAAAyg");
	this.shape_73.setTransform(177,365.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgHAiQgDgCAAgGQAAgFADgDQADgDAEAAQAGAAADADQACADAAAFQAAAGgDACQgDADgFAAQgEAAgDgDgAgHgRQgDgDAAgFQAAgLAKAAQAGAAADADQACADAAAFQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_74.setTransform(170.9,366.2);

	this.statLevelText0 = new cjs.Text("1", "bold 13px 'Open Sans Hebrew'");
	this.statLevelText0.name = "statLevelText0";
	this.statLevelText0.textAlign = "right";
	this.statLevelText0.lineHeight = 20;
	this.statLevelText0.lineWidth = 68;
	this.statLevelText0.parent = this;
	this.statLevelText0.setTransform(166.2,355.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#69AD76").ss(2,1,1).p("AtHjLIaPAAQBbADADBbIAADcQgDBahbADI6PAAQhbgDgDhaIAAjcQADhbBbgDg");
	this.shape_75.setTransform(174,641.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#D5D555").ss(2,1,1).p("AtHjLIaPAAQBbADADBbIAADcQgDBahbADI6PAAQhbgDgDhaIAAjcQADhbBbgDg");
	this.shape_76.setTransform(174,521.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#D9C482").ss(2,1,1).p("AtHjLIaPAAQBbADADBbIAADcQgDBahbADI6PAAQhbgDgDhaIAAjcQADhbBbgDg");
	this.shape_77.setTransform(174,400);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(101,204,153,0.6)").s().p("AtHDMQhbgDgDhaIAAjcQADhbBbgDIaQAAQBaADADBbIAADcQgDBahaADg");
	this.shape_78.setTransform(174,641.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFF66").s().p("AtHDMQhbgDgDhaIAAjcQADhbBbgDIaQAAQBaADADBbIAADcQgDBahaADg");
	this.shape_79.setTransform(174,521.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFE699").s().p("AtHDMQhbgDgDhaIAAjcQADhbBbgDIaQAAQBaADADBbIAADcQgDBahaADg");
	this.shape_80.setTransform(174,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.statLevelText0},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.statLevelText1},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.statLevelText2},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.upgradeNotice}]}).wait(1));

	// Layer 2
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(2,1,1).p("A888DIEFADMA10gADIAASyIAASrIAASqMg55AAAIAAyqIAAyrIAAysAc9pRMg55AAAAc9JaMg55AAA");
	this.shape_81.setTransform(238.8,503.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFCC").s().p("A88cEIAAyqIAAyrIAAysIEFgDMA10gADIAASyMg55AAAMA55AAAIAASrMg55AAAMA55AAAIAASqgAc9pRg");
	this.shape_82.setTransform(238.8,503.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(599.5,425.5,1203.6,851.6);
// library properties:
lib.properties = {
	width: 1200,
	height: 850,
	fps: 90,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/finger.png?1509977195481", id:"finger"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;