'use strict';
var app = angular.module('npmStartApp');
app.filter('selectedTags', function() {
    return function(codeSampleCollection, tags) {
        return codeSampleCollection.filter(function(codeSample) {
        	if(tags.length===0)
        		return true;
        	
            for (var i in codeSample.tags) {
            	
            	for(var j in tags) {
            		if(codeSample.tags[i].search(tags[j].text,"i")>-1){
            			return true;
            		}
            	}
            }
            return false;

        });
    };
});