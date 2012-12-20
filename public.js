var Public = {
	//iframe auto
	reinitIframe:function(){
		var iframe = document.getElementById("commentsIframe");
		try{
			var bHeight = iframe.contentWindow.document.body.scrollHeight;
			var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
			var bro=$.browser;
			if(bro.msie || bro.mozilla){
				height=bHeight
			}else{
				height=	dHeight		
			}
			//var height = Math.max(bHeight, dHeight);
			iframe.height =  height;
		}catch (ex){}		
	},
	commentsInt:function(){
		window.setInterval(this.reinitIframe, 200);		
	}

	//新窗口打开
	window.open("http://","_blank");
	//随机数生成
	Math.random()*1000;//1000以内
	//input提示文字
		$("#mapsearch").focus(function(){
			if($(this).val()=="请输入搜索关键字")$(this).val("");
		});
		$("#mapsearch").blur(function(){
			if($(this).val()=="")$(this).val("请输入搜索关键字");
		});
	
