/*!
 * jQuery simple html dom parser
 * Original author: @pathaksagar (sagarpathak.com.np)
 * Licensed under the MIT license
 */
;(function($, window, document){
	var pluginName = 'simpleHTMLDomJs',
	defaults = {

	};

	function Plugin( element, options ){
		this.element = element;
		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name     = pluginName;

		this.init();
	}

	Plugin.prototype.init = function(){

	};

	$.fn[pluginName] = function ( options ){
		return this.each(function(){
			if(!$.data(this, 'plugin_'+pluginName)){
				$.data(this, 'plugin_'+pluginName, new Plugin(this, options));
			}
		});
	}

})(jQuery, window, document );