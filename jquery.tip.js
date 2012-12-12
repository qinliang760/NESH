/*!
 * Base On jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 * Libs:Jay tip
 * Copyright 2012, QinLiang
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2012.11.28
 */

(function($){  
	tip={
		defaults: {
			tipTxt:'"玩法精选"页面全新上线！',
			tipLink:"/gameguide/",
			tipLinkTxt:"",
			close:true,
			showOnce:false
		}
	}
	function Tip(root,defaults){
		var self=this,
			boxObj=root;
		
		$.extend(this,{
			setWrap:function(){
				var tipBtn='<a class="tipLink" href="'+defaults.tipLink+'">'+defaults.tipLinkTxt+'</a>';
				var tipTxt='<a class="tipLinkTxt" href="'+defaults.tipLink+'">'+defaults.tipTxt+'</a>';
				var closeBtn="";
				defaults.close?closeBtn='<a href="#" class="tipClose"></a>':"";
				var wrap='<div class="tipBox">'+tipTxt+tipBtn+closeBtn+'</div>';
				boxObj.append(wrap);
			},
			appendTip:function(){
				var n=$.cookie("TIPCOUNT");
				if(n==null){
					self.setWrap();	
				}
				var tipBtn=$(".tipLink");
				var closeBtn=$(".tipClose");
				var tipTxt=$(".tipLinkTxt");
				tipBtn.live("click",function(){
					defaults.showOnce?$.cookie("TIPCOUNT",1):"";
					$(".tipBox").remove();					
				})
				tipTxt.live("click",function(){
					defaults.showOnce?$.cookie("TIPCOUNT",1):"";
					$(".tipBox").remove();					
				})				
				closeBtn.click(function(){
					$(".tipBox").remove();
				})
				
				
			},
			init:function(){
				self.appendTip();
			}
		})
		self.init();	
	}


	$.fn.tip = function(defaults){
		defaults=$.extend({},tip.defaults,defaults);		
		return this.each(function(){
			el = new Tip($(this), defaults);
		})

	}
})(jQuery);