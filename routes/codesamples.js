var express = require('express');

module.exports = (function() {
    'use strict';
    var codesamples = express.Router();

    codesamples.get('/codesamplecollection', function(req, res) {
        res.send(samples);
    });
    
    codesamples.get('/tags', function(req, res) {    	
    	var query = req.query.q;
    	
    	var tagsList=[];
        var i,j,sample,u={};
        for(i in samples) {
        	sample=samples[i];
        	//console.log(sample.tags)
        	for(j in sample.tags) {
        		if(u.hasOwnProperty(sample.tags[j])) {
     				continue;
  				}
  				
  				if(sample.tags[j].toLowerCase().search(query.toLowerCase(),"i")>-1) {
	  				tagsList.push(sample.tags[j]);
					u[sample.tags[j]] = 1;	
  				}
				
        	}
        }
    	
    	
        res.send(tagsList);
    });

    return codesamples;
})();

var samples=[
  {
    "id": "express",
    "name": "express",
    "type": "1",
    "ready": true,
    "caption-text": "Web application framework for node",
    "caption-image": "express.png",
    "caption-links":
      {
        "id": 0,
        "type": "github",
        "name" :"",
        "link": ""
      },
     "tags":["nodejs","node","node.js","express","web"]
  },
  {
    "id": "mongo",
    "name": "mongo",
    "type": "1",
    "ready": false,
    "caption-text": "An open source NoSQL database",
    "caption-image": "mongo.png",
    "caption-links":
      {
        "id": 0,
        "type": "github",
        "name" :"",
        "link": ""
      },
     "tags":["nodejs","node","node.js","rest","mongo","mongodb","mongoose"]
  },
  {
    "id": "heroku",
    "name": "heroku",
    "type": "1",
    "ready": false,
    "caption-text": "An cloud platform as a service supporting node",
    "caption-image": "heroku.png",
    "caption-links":
      {
        "id": 0,
        "type": "github",
        "name" :"",
        "link": ""
      },
     "tags":["cloud","cloud platform","heroku","server","node","nodejs","node.js"]
  },
  {
    "id": "spyjs",
    "name": "spyjs",
    "type": "1",
    "ready": false,
    "caption-text": "spy-js is a tool for JavaScript developers that allows to simply debug/trace/profile JavaScript",
    "caption-image": "spyjs.png",
    "caption-links":
      {
        "id": 0,
        "type": "github",
        "name" :"spy-js/spy-js",
        "link": "https://github.com/spy-js/spy-js"
      },
    "tags":["spyjs","spy","js","javascript"]
  },
  {
    "id": "mocha",
    "name": "mocha",
    "type": "1",
    "ready": false,
    "caption-text": "Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser. ",
    "caption-image": "mocha.png",
    "caption-links":
      {
        "id": 0,
        "type": "github",
        "name" :"mochajs/mocha",
        "link": "https://github.com/mochajs/mocha"
      },
    "tags":["mocha","js","javascript","node","nodejs","node.js"]
  },
  {
    "id": "restify",
    "name": "restify",
    "type": "1",
    "ready": false,
    "caption-text": "Restify is a node.js module built specifically to enable you to build correct REST web services.",
    "caption-image": "npmblank.png",
    "caption-links":
      {
        "id": 0,
        "type": "github",
        "name" :"mcavage/node-restify",
        "link": "https://github.com/mcavage/node-restify"
      },
    "tags":["rest","restify","node","nodejs","node.js"]
  },
  {
    "id": "jade",
    "name": "jade",
    "type": "1",
    "ready": false,
    "caption-text": "Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",
    "caption-image": "jade.png",
    "caption-links":
      {
        "id": 0,
        "type": "github",
        "name" :"jadejs/jade",
        "link": "https://github.com/jadejs/jade"
      },
    "tags":["jade","templates","node","nodejs","node.js","js","javascript"]
  }
];