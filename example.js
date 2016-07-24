$(document).ready(function () {
     

	$('#get-data').click(function () {
		   $("#show-data").fadeIn(2000);

    var showData = $('#show-data');
    	var Normal;
    	var url;
        var foodName;
    	var theOrigin;
    	var ingredients;
    	var theRecipe;
    	var dayOfWeek;
      		
     
    $.getJSON('example.json', function (data) {
      //console.log(data);
      		
      		today = new Date();
      		dayIndex = today.getDay();

      		//alert(today.getDate());

      		url= data.Normal[dayIndex].url;
      		foodName= "The food name : " + data.Normal[dayIndex].foodName;
      		theOrigin= data.Normal[dayIndex].theOrigin + "  dish";
      		ingredients= "Ingredients : " + data.Normal[dayIndex].ingredients;
      		theRecipe= "Recipe : " + data.Normal[dayIndex].theRecipe;


      		$("#url").attr("src", url);
      		$("#foodName").html(foodName);
      		$("#theOrigin").html(theOrigin);
      		$("#ingredients").html(ingredients);
      		$("#theRecipe").html(theRecipe);
		      //document.getElementById("show-data").innerHTML = data.Normal[2].url + " <br/> " + data.Normal[2].foodName + " <br/> " + data.Normal[2].theOrigin + " <br/> " +  data.Normal[2].ingredients + " <br/> " +  data.Normal[2].theRecipe + " <br/> " ;
      						
		
		      	});


					$('#get-data1').click(function () {
			    	
						
			      


 
					
			   
			    //var showData = $('#show-data');
			    		var Vegetarian;
					   	var url;
			        		var foodName;
			    			var theOrigin;
			    			var ingredients;
			    			var theRecipe;
			      		
			     
			   		 $.getJSON('example.json', function (data1) {
			      //console.log(data);
						   	    today = new Date();
      							dayIndex = today.getDay();
			      				//Vegetarian= data1.Vegetarian;

			      				url= data1.Vegetarian[dayIndex].url;
			      				foodName= "The food name : " + data1.Vegetarian[dayIndex].foodName;
			      				theOrigin= data1.Vegetarian[dayIndex].theOrigin + "  dish";
			      				ingredients= "Ingredients : " + data1.Vegetarian[dayIndex].ingredients;
			      				theRecipe= "Recipe : " + data1.Vegetarian[dayIndex].theRecipe;


			      				$("#url").attr("src", url);
			      				$("#foodName").html(foodName);
			      				$("#theOrigin").html(theOrigin);
			      				$("#ingredients").html(ingredients);
			      				$("#theRecipe").html(theRecipe);
			      				});

      				//.done(function() {
    		//$('#show-data').fadeIn('slow');
					});					 
					

 				});
 			});

    	 	 