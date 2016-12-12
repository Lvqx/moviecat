(function(angular) {
	'use strict';
	var data = [{
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u52a8\u4f5c", "\u7231\u60c5"],
		"title": "\u6d41\u91d1",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1048469\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1384913034.2.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1384913034.2.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1384913034.2.jpg"
			},
			"name": "\u5f90\u5c11\u5f3a",
			"id": "1048469"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1365471\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1481115623.69.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1481115623.69.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1481115623.69.jpg"
			},
			"name": "\u5434\u8c28\u897f",
			"id": "1365471"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1340985\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1461563877.97.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1461563877.97.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1461563877.97.jpg"
			},
			"name": "\u674e\u9e64\u6960",
			"id": "1340985"
		}],
		"collect_count": 16,
		"original_title": "\u6d41\u91d1",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1365470\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
				"large": "http://img7.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
				"medium": "http://img3.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
			},
			"name": "\u9648\u592a\u6e90",
			"id": "1365470"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2403392224.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2403392224.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2403392224.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26924279\/",
		"id": "26924279"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u5267\u60c5", "\u52a8\u4f5c", "\u60ac\u7591"],
		"title": "\u7f57\u66fc\u8482\u514b\u6d88\u4ea1\u53f2",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1000905\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/46.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/46.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/46.jpg"
			},
			"name": "\u845b\u4f18",
			"id": "1000905"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1041014\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1359895311.0.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1359895311.0.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1359895311.0.jpg"
			},
			"name": "\u7ae0\u5b50\u6021",
			"id": "1041014"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1036630\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/32309.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/32309.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/32309.jpg"
			},
			"name": "\u6d45\u91ce\u5fe0\u4fe1",
			"id": "1036630"
		}],
		"collect_count": 813,
		"original_title": "\u7f57\u66fc\u8482\u514b\u6d88\u4ea1\u53f2",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1320881\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/59264.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/59264.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/59264.jpg"
			},
			"name": "\u7a0b\u8033",
			"id": "1320881"
		}],
		"year": "2016",
		"images": {
			"small": "http://img3.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2404553168.jpg",
			"large": "http://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2404553168.jpg",
			"medium": "http://img3.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2404553168.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/24751763\/",
		"id": "24751763"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u5267\u60c5", "\u52a8\u4f5c", "\u5947\u5e7b"],
		"title": "\u957f\u57ce",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1054443\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/620.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/620.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/620.jpg"
			},
			"name": "\u9a6c\u7279\u00b7\u8fbe\u8499",
			"id": "1054443"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1275432\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1407683852.1.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1407683852.1.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1407683852.1.jpg"
			},
			"name": "\u666f\u751c",
			"id": "1275432"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1329628\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1397806328.94.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1397806328.94.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1397806328.94.jpg"
			},
			"name": "\u4f69\u5fb7\u7f57\u00b7\u5e15\u65af\u5361",
			"id": "1329628"
		}],
		"collect_count": 1766,
		"original_title": "The Great Wall",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1054398\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/568.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/568.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/568.jpg"
			},
			"name": "\u5f20\u827a\u8c0b",
			"id": "1054398"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2394573821.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2394573821.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2394573821.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/6982558\/",
		"id": "6982558"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u7eaa\u5f55\u7247"],
		"title": "\u6211\u5728\u6545\u5bab\u4fee\u6587\u7269",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1355614\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1457960677.09.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1457960677.09.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1457960677.09.jpg"
			},
			"name": "\u738b\u6d25",
			"id": "1355614"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1355615\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1457960571.78.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1457960571.78.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1457960571.78.jpg"
			},
			"name": "\u4e93\u660a\u6960",
			"id": "1355615"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1355616\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1457961189.28.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1457961189.28.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1457961189.28.jpg"
			},
			"name": "\u5c48\u5cf0",
			"id": "1355616"
		}],
		"collect_count": 441,
		"original_title": "\u6211\u5728\u6545\u5bab\u4fee\u6587\u7269",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1343940\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1413778154.85.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1413778154.85.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1413778154.85.jpg"
			},
			"name": "\u8427\u5bd2",
			"id": "1343940"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2396361760.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2396361760.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2396361760.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26910059\/",
		"id": "26910059"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u72af\u7f6a", "\u60ac\u7591"],
		"title": "\u5c11\u5e74",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1337644\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1415094399.29.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1415094399.29.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1415094399.29.jpg"
			},
			"name": "\u6b27\u8c6a",
			"id": "1337644"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1274761\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/25943.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/25943.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/25943.jpg"
			},
			"name": "\u5f20\u8bd1",
			"id": "1274761"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1050430\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/52860.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/52860.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/52860.jpg"
			},
			"name": "\u4f59\u7537",
			"id": "1050430"
		}],
		"collect_count": 244,
		"original_title": "\u5c11\u5e74",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1315032\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1369281912.97.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1369281912.97.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1369281912.97.jpg"
			},
			"name": "\u6768\u6811\u9e4f",
			"id": "1315032"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2403546172.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2403546172.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2403546172.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26754643\/",
		"id": "26754643"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u7eaa\u5f55\u7247"],
		"title": "\u751f\u95e8",
		"casts": [{
			"alt": null,
			"avatars": null,
			"name": "\u674e\u5bb6\u798f",
			"id": null
		}, {
			"alt": null,
			"avatars": null,
			"name": "\u590f\u9526\u83ca",
			"id": null
		}, {
			"alt": null,
			"avatars": null,
			"name": "\u9648\u5c0f\u51e4",
			"id": null
		}],
		"collect_count": 229,
		"original_title": "\u751f\u95e8",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1305468\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1369906476.6.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1369906476.6.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1369906476.6.jpg"
			},
			"name": "\u9648\u4e3a\u519b",
			"id": "1305468"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2399861515.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2399861515.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2399861515.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26836588\/",
		"id": "26836588"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u559c\u5267", "\u7231\u60c5"],
		"title": "\u4e94\u5973\u95f9\u4eac\u57ce",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1364679\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1479100148.01.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1479100148.01.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1479100148.01.jpg"
			},
			"name": "\u674e\u601d\u777f",
			"id": "1364679"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1318221\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/42396.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/42396.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/42396.jpg"
			},
			"name": "\u5218\u601d\u5f64",
			"id": "1318221"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1340626\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1479109358.79.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1479109358.79.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1479109358.79.jpg"
			},
			"name": "\u738b\u5b50",
			"id": "1340626"
		}],
		"collect_count": 9,
		"original_title": "\u4e94\u5973\u95f9\u4eac\u57ce",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1364681\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1479099984.93.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1479099984.93.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1479099984.93.jpg"
			},
			"name": "\u9648\u5251\u98de",
			"id": "1364681"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2404683173.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2404683173.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2404683173.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26866836\/",
		"id": "26866836"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u5386\u53f2", "\u7231\u60c5", "\u53e4\u88c5"],
		"title": "\u98de\u5929\u7a91\u5973",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1275443\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/34035.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/34035.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/34035.jpg"
			},
			"name": "\u8881\u5f18",
			"id": "1275443"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1327808\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1372061906.48.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1372061906.48.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1372061906.48.jpg"
			},
			"name": "\u59dc\u51b0\u6d01",
			"id": "1327808"
		}, {
			"alt": null,
			"avatars": null,
			"name": "\u5468\u6c90\u6770",
			"id": null
		}],
		"collect_count": 8,
		"original_title": "\u98de\u5929\u7a91\u5973",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1316784\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/37428.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/37428.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/37428.jpg"
			},
			"name": "\u9676\u6d77",
			"id": "1316784"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2402859402.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2402859402.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2402859402.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26928477\/",
		"id": "26928477"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u513f\u7ae5", "\u559c\u5267", "\u52a8\u753b"],
		"title": "\u529f\u592b\u56db\u4fa0",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1359920\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1468223589.2.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1468223589.2.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1468223589.2.jpg"
			},
			"name": "\u5f90\u5eb7",
			"id": "1359920"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1345272\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1468222995.05.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1468222995.05.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1468222995.05.jpg"
			},
			"name": "\u6731\u84c9\u84c9",
			"id": "1345272"
		}],
		"collect_count": 60,
		"original_title": "\u529f\u592b\u56db\u4fa0",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1359893\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1480921951.51.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1480921951.51.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1480921951.51.jpg"
			},
			"name": "\u5218\u90a6\u90a6",
			"id": "1359893"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1359894\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1480921987.07.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1480921987.07.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1480921987.07.jpg"
			},
			"name": "\u5b59\u53cb\u6811",
			"id": "1359894"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2400243401.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2400243401.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2400243401.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26831514\/",
		"id": "26831514"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u707e\u96be"],
		"title": "\u6c42\u751f\u8005",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1325172\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1358822269.36.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1358822269.36.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1358822269.36.jpg"
			},
			"name": "\u9648\u65fa\u6797",
			"id": "1325172"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1314012\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/21305.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/21305.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/21305.jpg"
			},
			"name": "\u9a86\u8fbe\u534e",
			"id": "1314012"
		}, {
			"alt": null,
			"avatars": null,
			"name": "\u5218\u827a\u4e39",
			"id": null
		}],
		"collect_count": 3,
		"original_title": "\u6c42\u751f\u8005",
		"subtype": "movie",
		"directors": [{
			"alt": null,
			"avatars": null,
			"name": "\u6768\u6d9b",
			"id": null
		}],
		"year": "2013",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p1981353645.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p1981353645.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p1981353645.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/24379805\/",
		"id": "24379805"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u5267\u60c5"],
		"title": "\u751c\u6c34\u8c23",
		"casts": [],
		"collect_count": 1,
		"original_title": "\u751c\u6c34\u8c23",
		"subtype": "movie",
		"directors": [],
		"year": "2016",
		"images": {
			"small": "http://img3.doubanio.com\/f\/shire\/a6980e5630cd9e11715c14fb2ca2bd0cc9abee4b\/pics\/movie-default-small.gif",
			"large": "http://img7.doubanio.com\/f\/shire\/21e771816d14ede9a77a01b6c7874c4b05dd05e2\/pics\/movie-default-large.gif",
			"medium": "http://img3.doubanio.com\/f\/shire\/afee3c96d502c5afca2219d69e57cdaea0f756a4\/pics\/movie-default-medium.gif"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26925719\/",
		"id": "26925719"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u559c\u5267", "\u7231\u60c5"],
		"title": "\u6446\u6e21\u4eba",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1115918\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/33525.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/33525.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/33525.jpg"
			},
			"name": "\u6881\u671d\u4f1f",
			"id": "1115918"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1027883\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/6925.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/6925.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/6925.jpg"
			},
			"name": "\u91d1\u57ce\u6b66",
			"id": "1027883"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1023424\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/20210.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/20210.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/20210.jpg"
			},
			"name": "\u9648\u5955\u8fc5",
			"id": "1023424"
		}],
		"collect_count": 644,
		"original_title": "\u6446\u6e21\u4eba",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1313946\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1476694344.05.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1476694344.05.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1476694344.05.jpg"
			},
			"name": "\u5f20\u5609\u4f73",
			"id": "1313946"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2390687452.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2390687452.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2390687452.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/25911694\/",
		"id": "25911694"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u559c\u5267", "\u52a8\u4f5c"],
		"title": "\u94c1\u9053\u98de\u864e",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1054531\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/694.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/694.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/694.jpg"
			},
			"name": "\u6210\u9f99",
			"id": "1054531"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1337445\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1405266144.28.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1405266144.28.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1405266144.28.jpg"
			},
			"name": "\u9ec4\u5b50\u97ec",
			"id": "1337445"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1314544\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1444998211.72.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1444998211.72.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1444998211.72.jpg"
			},
			"name": "\u738b\u51ef",
			"id": "1314544"
		}],
		"collect_count": 195,
		"original_title": "\u94c1\u9053\u98de\u864e",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1274856\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/20143.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/20143.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/20143.jpg"
			},
			"name": "\u4e01\u665f",
			"id": "1274856"
		}],
		"year": "2016",
		"images": {
			"small": "http://img3.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2404720316.jpg",
			"large": "http://img3.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2404720316.jpg",
			"medium": "http://img3.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2404720316.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26389069\/",
		"id": "26389069"
	}, {
		"rating": {
			"max": 10,
			"average": 5.2,
			"stars": "30",
			"min": 0
		},
		"genres": ["\u52a8\u4f5c", "\u72af\u7f6a"],
		"title": "\u63a0\u593a\u8005",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1010509\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/106.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/106.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/106.jpg"
			},
			"name": "\u5e03\u9c81\u65af\u00b7\u5a01\u5229\u65af",
			"id": "1010509"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1000052\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/8356.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/8356.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/8356.jpg"
			},
			"name": "\u514b\u91cc\u65af\u6258\u5f17\u00b7\u7c73\u6d1b\u5c3c",
			"id": "1000052"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1014003\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/6443.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/6443.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/6443.jpg"
			},
			"name": "\u6234\u592b\u00b7\u5df4\u8482\u65af\u5854",
			"id": "1014003"
		}],
		"collect_count": 1722,
		"original_title": "Marauders",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1032824\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1473210941.06.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1473210941.06.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1473210941.06.jpg"
			},
			"name": "\u53f2\u8482\u82ac\u00b7C\u00b7\u7c73\u52d2",
			"id": "1032824"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2404556021.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2404556021.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2404556021.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26703844\/",
		"id": "26703844"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u559c\u5267", "\u7231\u60c5"],
		"title": "\u50bb\u513f\u592b\u59bb\u5c0f\u795e\u90ce",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1324409\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1463992161.02.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1463992161.02.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1463992161.02.jpg"
			},
			"name": "\u5434\u6587",
			"id": "1324409"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1330710\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1471484173.82.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1471484173.82.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1471484173.82.jpg"
			},
			"name": "\u5c39\u6052",
			"id": "1330710"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1357093\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
				"large": "http://img7.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
				"medium": "http://img3.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
			},
			"name": "\u59dc\u660e\u6708",
			"id": "1357093"
		}],
		"collect_count": 13,
		"original_title": "\u50bb\u513f\u592b\u59bb\u5c0f\u795e\u90ce",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1339824\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1418717377.3.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1418717377.3.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1418717377.3.jpg"
			},
			"name": "\u9a6c\u96cd",
			"id": "1339824"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1357095\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
				"large": "http://img7.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
				"medium": "http://img3.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
			},
			"name": "\u963f\u6f58",
			"id": "1357095"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2339621885.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2339621885.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2339621885.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26779537\/",
		"id": "26779537"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u7231\u60c5", "\u72af\u7f6a", "\u60ac\u7591"],
		"title": "\u6709\u8ff9\u53ef\u5faa",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1328280\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1478244755.01.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1478244755.01.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1478244755.01.jpg"
			},
			"name": "\u5f20\u96c5\u73ab",
			"id": "1328280"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1364257\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1478245126.04.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1478245126.04.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1478245126.04.jpg"
			},
			"name": "\u8463\u535a\u777f",
			"id": "1364257"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1364255\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1480061137.69.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1480061137.69.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1480061137.69.jpg"
			},
			"name": "\u989c\u73ae\u826f",
			"id": "1364255"
		}],
		"collect_count": 5,
		"original_title": "\u6709\u8ff9\u53ef\u5faa",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1363150\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1476010702.33.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1476010702.33.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1476010702.33.jpg"
			},
			"name": "\u77f3\u82f1\u6770",
			"id": "1363150"
		}],
		"year": "2015",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2403079835.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2403079835.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2403079835.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26869265\/",
		"id": "26869265"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u60ca\u609a"],
		"title": "\u5931\u5fc3\u8005",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1328420\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1400726587.81.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1400726587.81.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1400726587.81.jpg"
			},
			"name": "\u83c5\u97e7\u59ff",
			"id": "1328420"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1122837\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1540.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1540.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1540.jpg"
			},
			"name": "\u8fde\u51ef",
			"id": "1122837"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1274449\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/4303.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/4303.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/4303.jpg"
			},
			"name": "\u8bb8\u7ecd\u96c4",
			"id": "1274449"
		}],
		"collect_count": 10,
		"original_title": "\u5931\u5fc3\u8005",
		"subtype": "movie",
		"directors": [{
			"alt": null,
			"avatars": null,
			"name": "\u9648\u851a\u5c14",
			"id": null
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2403811511.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2403811511.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2403811511.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26711052\/",
		"id": "26711052"
	}, {
		"rating": {
			"max": 10,
			"average": 5.2,
			"stars": "25",
			"min": 0
		},
		"genres": ["\u5267\u60c5", "\u79d1\u5e7b", "\u72af\u7f6a"],
		"title": "\u7edd\u5bf9\u63a7\u5236",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1031219\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/50837.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/50837.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/50837.jpg"
			},
			"name": "\u76ae\u5c14\u65af\u00b7\u5e03\u9c81\u65af\u5357",
			"id": "1031219"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1009267\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/19323.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/19323.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/19323.jpg"
			},
			"name": "\u5b89\u5a1c\u00b7\u5f17\u83b1\u5c14",
			"id": "1009267"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1036534\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1455297892.24.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1455297892.24.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1455297892.24.jpg"
			},
			"name": "\u65af\u6234\u82ac\u59ae\u00b7\u65af\u8003\u7279",
			"id": "1036534"
		}],
		"collect_count": 375,
		"original_title": "I.T.",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1317351\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/46805.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/46805.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/46805.jpg"
			},
			"name": "\u7ea6\u7ff0\u00b7\u6469\u5c14",
			"id": "1317351"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2371714053.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2371714053.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2371714053.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26608448\/",
		"id": "26608448"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u559c\u5267", "\u52a8\u753b"],
		"title": "\u609f\u7a7a\u5723\u8bde\u5947\u9047\u8bb0",
		"casts": [],
		"collect_count": 15,
		"original_title": "\u609f\u7a7a\u5723\u8bde\u5947\u9047\u8bb0",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1330909\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/f\/movie\/ca527386eb8c4e325611e22dfcb04cc116d6b423\/pics\/movie\/celebrity-default-small.png",
				"large": "http://img7.doubanio.com\/f\/movie\/63acc16ca6309ef191f0378faf793d1096a3e606\/pics\/movie\/celebrity-default-large.png",
				"medium": "http://img3.doubanio.com\/f\/movie\/8dd0c794499fe925ae2ae89ee30cd225750457b4\/pics\/movie\/celebrity-default-medium.png"
			},
			"name": "\u6bb7\u7389\u9e92",
			"id": "1330909"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2394607860.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2394607860.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2394607860.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26878827\/",
		"id": "26878827"
	}, {
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": ["\u559c\u5267", "\u72af\u7f6a", "\u5192\u9669"],
		"title": "\u5192\u724c\u5367\u5e95",
		"casts": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1046960\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/4376.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/4376.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/4376.jpg"
			},
			"name": "\u6f58\u7ca4\u660e",
			"id": "1046960"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1036695\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1355297994.85.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1355297994.85.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1355297994.85.jpg"
			},
			"name": "\u9ad8\u5723\u8fdc",
			"id": "1036695"
		}, {
			"alt": "https:\/\/movie.douban.com\/celebrity\/1327084\/",
			"avatars": {
				"small": "http://img7.doubanio.com\/img\/celebrity\/small\/1363597076.12.jpg",
				"large": "http://img7.doubanio.com\/img\/celebrity\/large\/1363597076.12.jpg",
				"medium": "http://img7.doubanio.com\/img\/celebrity\/medium\/1363597076.12.jpg"
			},
			"name": "\u5e38\u8fdc",
			"id": "1327084"
		}],
		"collect_count": 11,
		"original_title": "\u5192\u724c\u5367\u5e95",
		"subtype": "movie",
		"directors": [{
			"alt": "https:\/\/movie.douban.com\/celebrity\/1334343\/",
			"avatars": {
				"small": "http://img3.doubanio.com\/img\/celebrity\/small\/1441507811.86.jpg",
				"large": "http://img3.doubanio.com\/img\/celebrity\/large\/1441507811.86.jpg",
				"medium": "http://img3.doubanio.com\/img\/celebrity\/medium\/1441507811.86.jpg"
			},
			"name": "\u5510\u65ed",
			"id": "1334343"
		}],
		"year": "2016",
		"images": {
			"small": "http://img7.doubanio.com\/view\/movie_poster_cover\/ipst\/public\/p2402859930.jpg",
			"large": "http://img7.doubanio.com\/view\/movie_poster_cover\/lpst\/public\/p2402859930.jpg",
			"medium": "http://img7.doubanio.com\/view\/movie_poster_cover\/spst\/public\/p2402859930.jpg"
		},
		"alt": "https:\/\/movie.douban.com\/subject\/26743534\/",
		"id": "26743534"
	}];



	var module = angular.module('moviecat.coming_soon', ['ngRoute']);

	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/coming_soon', {
			templateUrl: 'coming_soon/view.html',
			controller: 'ComingSoonController'
		});
	}]);

	module.controller('ComingSoonController', ['$scope',function($scope) {
    $scope.subjects = data;
	}]);
})(angular)
