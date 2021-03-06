
	
	function displayInfoList(pList, infoList, amount, page){
	    var listEl = document.getElementById('placesList'), 
	    menuEl = document.getElementById('menu_wrap'),
	    fragment = document.createDocumentFragment(),
	    pageList = document.getElementById('pageList'),
	    itemEl;
	    // 검색 결과 목록에 추가된 항목들을 제거합니다
	    removeAllChildNods(listEl);
	    var url = '/map/detail/viewDetailPage?locationSeq=';
	    //페이징 리스트 만들기
	    for(var i=0;i<infoList.length;i++){
	    	// 검색 결과 항목 Element를 생성합니다
		    itemEl = getListItem(infoList[i]);
		 	// 검색결과 항목들을 검색결과 목록 Element에 추가합니다
		    fragment.appendChild(itemEl);
		 	
	        (function(marker, infoList) {
	        	itemEl.onmouseover =  function(){
	            	setOverlay(map, makeContent(infoList), marker.getPosition());
	            	panTo(marker.getPosition());
	            }; 
	            
	            itemEl.onmouseout =  function(){
	            	closeOverlay();
	            }; 
	        })(markers[amount*page+i], infoList[i]); 
	    }
	    
 	    // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
	    listEl.appendChild(fragment);
	    pageList.innerHTML = pList;
	    starRating('.star-rating');
	}
	
	
	function panTo(moveLatLon) {	    
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	    map.panTo(moveLatLon);            
	}    
	
	function getListItem(places) {
	    var el = document.createElement('div');
	    var itemStr ='<div class="listing-item-container list-layout" data-marker-id="1" >';
	    /*href ="/map/detail/viewDetailPage?locationSeq='+places.locationSeq+'"*/
	  			   	if(places.imageUrl){
		  			   	itemStr +=	'<a href ="/map/detail/viewDetailPage?locationSeq='+places.locationSeq+'" class="listing-item">'+
		  			   				'<div class="listing-item-image">'+
					  			    	'<img src="'+places.imageUrl+'" alt="">'+
					  			    	'<span class="tag">Hospital</span>'+
				  			    	'</div>';
	  			   	}else {
		  			  	itemStr +=	'<a href ="/map/detail/viewDetailPage?locationSeq='+places.locationSeq+'" class="listing-item">'+
		  			  				'<div class="listing-item-image">'+
	  			    					'<img src="/resources/images/hospital.jpg" alt="">'+
	  			    					'<span class="tag">Hospital</span>'+
				    				'</div>';		
		  			   	}
		  			  	itemStr +=	'<div class="listing-item-content">'+
					   			    	'<div class="listing-item-inner">'+
					  			    		'<h3>'+places.title+'</h3>'+
		  			  						'<span>'+places.address; 
		  			  	itemStr +=					places.radius!=null?'('+places.radius+'km)':'';
		  			  	itemStr +=			'</span>'+'<br>'+
		  			  						'<div class="star-rating" data-rating="'+places.averageRatings+'">'+
					  			    			'<div class="rating-counter"  style="font-size: 16px"> '+places.countReview+' reviews <i class="sl sl-icon-heart" style="color: #f91942"></i> '+places.countLike+'  <i class="sl sl-icon-bubble" style="color: #f91942"></i> '+places.countReplies+'</div>'+
					  			    		'</div>'+
					  			    	'</div>'+
				  			    	'</div>'+
				  			    	'</a>';
		  			  				
	  			  	if(places.userLikeStatus == null){
	  			  		itemStr +=	'<span class="like-icon" id="like" onclick="no_login_like()"></span>';
	  			  	}else{
	  			  		itemStr +=	'<span class="'+places.userLikeStatus+'" id="like'+places.locationSeq+'" onclick="like_clicked('+places.locationSeq+')"></span>';
	  			  	}
	  			  	itemStr +='</div>';
  		el.innerHTML = itemStr;
  		el.className = 'col-lg-12 col-md-12';
	    return el;
	}
	

	 // 검색결과 목록의 자식 Element를 제거하는 함수입니다
	function removeAllChildNods(el) {   
	    while (el.hasChildNodes()) {
	        el.removeChild (el.lastChild);
	    }
	}
	
	