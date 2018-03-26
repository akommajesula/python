console.log("hi");

// variables
{
	// chinese
	var Clow1 = [];
	var Clow2 = [];
	var Clow3 = [];
	var Clow4 = [];
	var Clow5 = [];

	var Cmid1 = [];
	var Cmid2 = [];
	var Cmid3 = [];
	var Cmid4 = [];
	var Cmid5 = [];

	var Chigh1 = [];
	var Chigh2 = [];
	var Chigh3 = [];
	var Chigh4 = [];
	var Chigh5 = [];

	var Cvhigh1 = [];
	var Cvhigh2 = [];
	var Cvhigh3 = [];
	var Cvhigh4 = [];
	var Cvhigh5 = [];
	// french
	var Flow1 = [];
	var Flow2 = [];
	var Flow3 = [];
	var Flow4 = [];
	var Flow5 = [];

	var Fmid1 = [];
	var Fmid2 = [];
	var Fmid3 = [];
	var Fmid4 = [];
	var Fmid5 = [];

	var Fhigh1 = [];
	var Fhigh2 = [];
	var Fhigh3 = [];
	var Fhigh4 = [];
	var Fhigh5 = [];

	var Fvhigh1 = [];
	var Fvhigh2 = [];
	var Fvhigh3 = [];
	var Fvhigh4 = [];
	var Fvhigh5 = [];
	//italian
	var Itlow1 = [];
	var Itlow2 = [];
	var Itlow3 = [];
	var Itlow4 = [];
	var Itlow5 = [];

	var Itmid1 = [];
	var Itmid2 = [];
	var Itmid3 = [];
	var Itmid4 = [];
	var Itmid5 = [];

	var Ithigh1 = [];
	var Ithigh2 = [];
	var Ithigh3 = [];
	var Ithigh4 = [];
	var Ithigh5 = [];

	var Itvhigh1 = [];
	var Itvhigh2 = [];
	var Itvhigh3 = [];
	var Itvhigh4 = [];
	var Itvhigh5 = [];
	//american
	var Alow1 = [];
	var Alow2 = [];
	var Alow3 = [];
	var Alow4 = [];
	var Alow5 = [];

	var Amid1 = [];
	var Amid2 = [];
	var Amid3 = [];
	var Amid4 = [];
	var Amid5 = [];

	var Ahigh1 = [];
	var Ahigh2 = [];
	var Ahigh3 = [];
	var Ahigh4 = [];
	var Ahigh5 = [];

	var Avhigh1 = [];
	var Avhigh2 = [];
	var Avhigh3 = [];
	var Avhigh4 = [];
	var Avhigh5 = [];
	//Mexican
	var Mlow1 = [];
	var Mlow2 = [];
	var Mlow3 = [];
	var Mlow4 = [];
	var Mlow5 = [];

	var Mmid1 = [];
	var Mmid2 = [];
	var Mmid3 = [];
	var Mmid4 = [];
	var Mmid5 = [];

	var Mhigh1 = [];
	var Mhigh2 = [];
	var Mhigh3 = [];
	var Mhigh4 = [];
	var Mhigh5 = [];

	var Mvhigh1 = [];
	var Mvhigh2 = [];
	var Mvhigh3 = [];
	var Mvhigh4 = [];
	var Mvhigh5 = [];
	//Indian
	var Inlow1 = [];
	var Inlow2 = [];
	var Inlow3 = [];
	var Inlow4 = [];
	var Inlow5 = [];

	var Inmid1 = [];
	var Inmid2 = [];
	var Inmid3 = [];
	var Inmid4 = [];
	var Inmid5 = [];

	var Inhigh1 = [];
	var Inhigh2 = [];
	var Inhigh3 = [];
	var Inhigh4 = [];
	var Inhigh5 = [];

	var Invhigh1 = [];
	var Invhigh2 = [];
	var Invhigh3 = [];
	var Invhigh4 = [];
	var Invhigh5 = [];
}

// formating data
d3.csv("/static/js/restaurants.csv",function(error, rows)
{

	for (var x=0; x<rows.length;x++)
	{

			// variables gathered
			{
				var name = rows[x]['businesses__name'];
			    var price = rows[x]['businesses__price'];
				var type = rows[x]['businesses__categories__title'];
				var rating = rows[x]['businesses__rating'];
				var url = rows[x]['businesses__url'];
				console.log(price);
				price.toString();
			}
			

				switch(type)
			{

				case ("Chinese"):
				console.log("Chinese");
				switch (price)
				{
					case "$$$$":
						console.log("very high");
						switch(true)
							{
								case (rating>4.0):
									{
										console.log(5);
										Cvhigh5.push({"name":name,"size":1,"url":url});
										break;
									}
								case (rating>3.0):
									{
										console.log(4);
										Cvhigh4.push({"name":name,"size":1,"url":url});
										break;
									}
								case (rating>2.0):
									{
										console.log(3);
										Cvhigh3.push({"name":name,"size":1,"url":url});
										break;
									}
								case (rating>1.0):
									{
										console.log(2);
										Cvhigh2.push({"name":name,"size":1,"url":url});
										break;
									}
									case (rating>0):
									{
										console.log(1);
										Cvhigh1.push({"name":name,"size":1,"url":url});
										break;
									}
								break;
							}
						break;
					case "$$$":
						console.log("high");
						switch(true)
							{
								case (rating>4.0):
									{
										console.log(5);
										Chigh5.push({"name":name,"size":1,"url":url});
										break;
									}
								case (rating>3.0):
									{
										console.log(4);
										Chigh4.push({"name":name,"size":1,"url":url});
										break;
									}
								case (rating>2.0):
									{
										console.log(3);
										Chigh3.push({"name":name,"size":1,"url":url});
										break;
									}
								case (rating>1.0):
									{
										console.log(2);
										Chigh2.push({"name":name,"size":1,"url":url});
										break;
									}
								case (rating>0):
									{
										console.log(1);
										Chigh1.push({"name":name,"size":1,"url":url});
										break;
									}
								break;
							}
							break;
					case "$$":
						console.log("middle");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Cmid5.push({"name":name,"size":1,"url":url});
							break;
						case(rating>= 3.0):
							console.log(4);
							Cmid4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Cmid3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Cmid2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Cmid1.push({"name":name,"size":1,"url":url});
							break;
						break;}
						break;
					case "$":
						console.log("low");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Clow5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 3.0):
							console.log(4);
							Clow4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Clow3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Clow2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Clow1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
				}
				break;
				case ("French"):
				console.log("French");
				switch (price)
				{
					case '$$$$':
						console.log("very high");
						switch(true){
						case (rating>4.0):
							console.log(5);
							Fvhigh5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>3.0):
							console.log(4);
							Fvhigh4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>2.0):
							console.log(3);
							Fvhigh3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>1.0):
							console.log(2);
							Fvhigh2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>0):
							console.log(1);
							Fvhigh1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$$$':
						console.log("high");
						switch(true){
						case (rating>4.0):
							console.log(5);
							Fhigh5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>3.0):
							console.log(4);
							Fhigh4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>2.0):
							console.log(3);
							Fhigh3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>1.0):
							console.log(2);
							Fhigh2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>0):
							console.log(1);
							Fhigh1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					case '$$':
						console.log("middle");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Fmid5.push({"name":name,"size":1,"url":url});
							break;
						case(rating>= 3.0):
							console.log(4);
							Fmid4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Fmid3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Fmid2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Fmid1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$':
						console.log("low");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Flow5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 3.0):
							console.log(4);
							Flow4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Flow3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Flow2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Flow1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
				}
				break;
				case ("Italian"):
				console.log("Italian");
				switch (price)
				{
					case '$$$$':
						console.log("very high");
						switch(true){
						case (rating>4.0):
							console.log(5);
							Itvhigh5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>3.0):
							console.log(4);
							Itvhigh4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>2.0):
							console.log(3);
							Itvhigh3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>1.0):
							console.log(2);
							Itvhigh2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>0):
							console.log(1);
							Itvhigh1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$$$':
						console.log("high");
						switch(true){
						case (rating>4.0):
							console.log(5);
							Ithigh5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>3.0):
							console.log(4);
							Ithigh4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>2.0):
							console.log(3);
							Ithigh3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>1.0):
							console.log(2);
							Ithigh2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>0):
							console.log(1);
							Ithigh1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$$':
						console.log("middle");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Itmid5.push({"name":name,"size":1,"url":url});
							break;
						case(rating>= 3.0):
							console.log(4);
							Itmid4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Itmid3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Itmid2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Itmid1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$':
						console.log("low");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Itlow5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 3.0):
							console.log(4);
							Itlow4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Itlow3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Itlow2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Itlow1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
				}
				break;
				case ("American"):
				console.log("American");
				switch (price)
				{
					case '$$$$':
						console.log("very high");
						switch(true){
						case (rating>4.0):
							console.log(5);
							Avhigh5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>3.0):
							console.log(4);
							Avhigh4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>2.0):
							console.log(3);
							Avhigh3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>1.0):
							console.log(2);
							Avhigh2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>0):
							console.log(1);
							Avhigh1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$$$':
						console.log("high");
						switch(true){
						case (rating>4.0):
							console.log(5);
							Ahigh5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>3.0):
							console.log(4);
							Ahigh4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>2.0):
							console.log(3);
							Ahigh3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>1.0):
							console.log(2);
							Ahigh2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>0):
							console.log(1);
							Ahigh1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$$':
						console.log("middle");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Amid5.push({"name":name,"size":1,"url":url});
							break;
						case(rating>= 3.0):
							console.log(4);
							Amid4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Amid3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Amid2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Amid1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$':
						console.log("low");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Alow5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 3.0):
							console.log(4);
							Alow4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Alow3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Alow2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Alow1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
				}
				break;
				case ("Mexican"):
				console.log("Mexican");
				switch (price)
				{
					case '$$$$':
						console.log("very high");
						switch(true){
						case (rating>4.0):
							console.log(5);
							Mvhigh5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>3.0):
							console.log(4);
							Mvhigh4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>2.0):
							console.log(3);
							Mvhigh3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>1.0):
							console.log(2);
							Mvhigh2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>0):
							console.log(1);
							Mvhigh1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$$$':
						console.log("high");
						switch(true){
						case (rating>4.0):
							console.log(5);
							Mhigh5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>3.0):
							console.log(4);
							Mhigh4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>2.0):
							console.log(3);
							Mhigh3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>1.0):
							console.log(2);
							Mhigh2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>0):
							console.log(1);
							Mhigh1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					case '$$':
						console.log("middle");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Mmid5.push({"name":name,"size":1,"url":url});
							break;
						case(rating>= 3.0):
							console.log(4);
							Mmid4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Mmid3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Mmid2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Mmid1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$':
						console.log("low");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Mlow5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 3.0):
							console.log(4);
							Mlow4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Mlow3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Mlow2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Mlow1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
				}
				break;
				case ("Indian"):
				console.log("Indian");
				switch (price)
				{
					case '$$$$':
						console.log("very high");
						switch(true){
						case (rating>4.0):
							console.log(5);
							Invhigh5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>3.0):
							console.log(4);
							Invhigh4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>2.0):
							console.log(3);
							Invhigh3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>1.0):
							console.log(2);
							Invhigh2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>0):
							console.log(1);
							Invhigh1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$$$':
						console.log("high");
						switch(true){
						case (rating>4.0):
							console.log(5);
							Inhigh5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>3.0):
							console.log(4);
							Inhigh4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>2.0):
							console.log(3);
							Inhigh3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>1.0):
							console.log(2);
							Inhigh2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>0):
							console.log(1);
							Inhigh1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$$':
						console.log("middle");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Inmid5.push({"name":name,"size":1,"url":url});
							break;
						case(rating>= 3.0):
							console.log(4);
							Inmid4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Inmid3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Inmid2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Inmid1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
					case '$':
						console.log("low");
						switch(true){
						case (rating>= 4.0):
							console.log(5);
							Inlow5.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 3.0):
							console.log(4);
							Inlow4.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 2.0):
							console.log(3);
							Inlow3.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 1.0):
							console.log(2);
							Inlow2.push({"name":name,"size":1,"url":url});
							break;
						case (rating>= 0):
							console.log(1);
							Inlow1.push({"name":name,"size":1,"url":url});
							break;
						break;}
					break;
				}
				break;
			}
	}

	d3.json("/static/js/flare.json",function(data)
	{

		// entering data into flare.json

			//Chinese
				data.children[0].children[2].children[0].children = Cmid5;
				data.children[0].children[2].children[1].children = Cmid4;
				data.children[0].children[2].children[2].children = Cmid3;
				data.children[0].children[2].children[3].children = Cmid2;
				data.children[0].children[2].children[4].children = Cmid1;

				data.children[0].children[1].children[0].children = Chigh5;
				data.children[0].children[1].children[1].children = Chigh4;
				data.children[0].children[1].children[2].children = Chigh3;
				data.children[0].children[1].children[3].children = Chigh2;
				data.children[0].children[1].children[4].children = Chigh1;

				data.children[0].children[0].children[0].children = Cvhigh5;
				data.children[0].children[0].children[1].children = Cvhigh4;
				data.children[0].children[0].children[2].children = Cvhigh3;
				data.children[0].children[0].children[3].children = Cvhigh2;
				data.children[0].children[0].children[4].children = Cvhigh1;

				data.children[0].children[3].children[0].children = Clow5;
				data.children[0].children[3].children[1].children = Clow4;
				data.children[0].children[3].children[2].children = Clow3;
				data.children[0].children[3].children[3].children = Clow2;
				data.children[0].children[3].children[4].children = Clow1;
			// French
				data.children[1].children[2].children[0].children = Fmid5;
				data.children[1].children[2].children[1].children = Fmid4;
				data.children[1].children[2].children[2].children = Fmid3;
				data.children[1].children[2].children[3].children = Fmid2;
				data.children[1].children[2].children[4].children = Fmid1;

				data.children[1].children[1].children[0].children = Fhigh5;
				data.children[1].children[1].children[1].children = Fhigh4;
				data.children[1].children[1].children[2].children = Fhigh3;
				data.children[1].children[1].children[3].children = Fhigh2;
				data.children[1].children[1].children[4].children = Fhigh1;

				data.children[1].children[0].children[0].children = Fvhigh5;
				data.children[1].children[0].children[1].children = Fvhigh4;
				data.children[1].children[0].children[2].children = Fvhigh3;
				data.children[1].children[0].children[3].children = Fvhigh2;
				data.children[1].children[0].children[4].children = Fvhigh1;

				data.children[1].children[3].children[0].children = Flow5;
				data.children[1].children[3].children[1].children = Flow4;
				data.children[1].children[3].children[2].children = Flow3;
				data.children[1].children[3].children[3].children = Flow2;
				data.children[1].children[3].children[4].children = Flow1;
			// Italian
				data.children[2].children[2].children[0].children = Itmid5;
				data.children[2].children[2].children[1].children = Itmid4;
				data.children[2].children[2].children[2].children = Itmid3;
				data.children[2].children[2].children[3].children = Itmid2;
				data.children[2].children[2].children[4].children = Itmid1;

				data.children[2].children[1].children[0].children = Ithigh5;
				data.children[2].children[1].children[1].children = Ithigh4;
				data.children[2].children[1].children[2].children = Ithigh3;
				data.children[2].children[1].children[3].children = Ithigh2;
				data.children[2].children[1].children[4].children = Ithigh1;

				data.children[2].children[0].children[0].children = Itvhigh5;
				data.children[2].children[0].children[1].children = Itvhigh4;
				data.children[2].children[0].children[2].children = Itvhigh3;
				data.children[2].children[0].children[3].children = Itvhigh2;
				data.children[2].children[0].children[4].children = Itvhigh1;

				data.children[2].children[3].children[0].children = Itlow5;
				data.children[2].children[3].children[1].children = Itlow4;
				data.children[2].children[3].children[2].children = Itlow3;
				data.children[2].children[3].children[3].children = Itlow2;
				data.children[2].children[3].children[4].children = Itlow1;
			//American
				data.children[3].children[2].children[1].children = Amid4;
				data.children[3].children[2].children[2].children = Amid3;
				data.children[3].children[2].children[3].children = Amid2;
				data.children[3].children[2].children[4].children = Amid1;
				data.children[3].children[2].children[0].children = Amid5;

				data.children[3].children[1].children[0].children = Ahigh5;
				data.children[3].children[1].children[1].children = Ahigh4;
				data.children[3].children[1].children[2].children = Ahigh3;
				data.children[3].children[1].children[3].children = Ahigh2;
				data.children[3].children[1].children[4].children = Ahigh1;

				data.children[3].children[0].children[0].children = Avhigh5;
				data.children[3].children[0].children[1].children = Avhigh4;
				data.children[3].children[0].children[2].children = Avhigh3;
				data.children[3].children[0].children[3].children = Avhigh2;
				data.children[3].children[0].children[4].children = Avhigh1;

				data.children[3].children[3].children[0].children = Alow5;
				data.children[3].children[3].children[1].children = Alow4;
				data.children[3].children[3].children[2].children = Alow3;
				data.children[3].children[3].children[3].children = Alow2;
				data.children[3].children[3].children[4].children = Alow1;
			//Mexican
				data.children[4].children[2].children[0].children = Mmid5;
				data.children[4].children[2].children[1].children = Mmid4;
				data.children[4].children[2].children[2].children = Mmid3;
				data.children[4].children[2].children[3].children = Mmid2;
				data.children[4].children[2].children[4].children = Mmid1;

				data.children[4].children[1].children[0].children = Mhigh5;
				data.children[4].children[1].children[1].children = Mhigh4;
				data.children[4].children[1].children[2].children = Mhigh3;
				data.children[4].children[1].children[3].children = Mhigh2;
				data.children[4].children[1].children[4].children = Mhigh1;

				data.children[4].children[0].children[0].children = Mvhigh5;
				data.children[4].children[0].children[1].children = Mvhigh4;
				data.children[4].children[0].children[2].children = Mvhigh3;
				data.children[4].children[0].children[3].children = Mvhigh2;
				data.children[4].children[0].children[4].children = Mvhigh1;

				data.children[4].children[3].children[0].children = Mlow5;
				data.children[4].children[3].children[1].children = Mlow4;
				data.children[4].children[3].children[2].children = Mlow3;
				data.children[4].children[3].children[3].children = Mlow2;
				data.children[4].children[3].children[4].children = Mlow1;
			//Indian
				data.children[5].children[2].children[0].children = Inmid5;
				data.children[5].children[2].children[1].children = Inmid4;
				data.children[5].children[2].children[2].children = Inmid3;
				data.children[5].children[2].children[3].children = Inmid2;
				data.children[5].children[2].children[4].children = Inmid1;

				data.children[5].children[1].children[0].children = Inhigh5;
				data.children[5].children[1].children[1].children = Inhigh4;
				data.children[5].children[1].children[2].children = Inhigh3;
				data.children[5].children[1].children[3].children = Inhigh2;
				data.children[5].children[1].children[4].children = Inhigh1;

				data.children[5].children[0].children[0].children = Invhigh5;
				data.children[5].children[0].children[1].children = Invhigh4;
				data.children[5].children[0].children[2].children = Invhigh3;
				data.children[5].children[0].children[3].children = Invhigh2;
				data.children[5].children[0].children[4].children = Invhigh1;

				data.children[5].children[3].children[0].children = Inlow5;
				data.children[5].children[3].children[1].children = Inlow4;
				data.children[5].children[3].children[2].children = Inlow3;
				data.children[5].children[3].children[3].children = Inlow2;
				data.children[5].children[3].children[4].children = Inlow1;



		{


			 partition
			      .value(function(d) { return d.size; })
			      .nodes(data)
			      .forEach(function(d) {
			        d._children = d.children;
			        d.sum = d.value;
			        d.key = key(d);
			        d.fill = fill(d);
			      });

			  // Now redefine the value function to use the previously-computed sum.
			  partition
			      .children(function(d, depth) { return depth < 2 ? d._children : null; })
			      .value(function(d) { return d.sum; });

			  var center = svg.append("circle")
			      .attr("r", radius / 3)
			      .on("click", zoomOut);

			  center.append("title")
			      .text("zoom out");
			      
			  var partitioned_data=partition.nodes(data).slice(1)

			  var path = svg.selectAll("path")
			      .data(partitioned_data)
			      .enter().append("path")
			      .attr("d", arc)
			      .style("fill", function(d) { return d.fill; })
			      .each(function(d) { this._current = updateArc(d); })
			      .on("click", zoomIn)
			      .on("mouseover", mouseOverArc)
			      .on("mousemove", mouseMoveArc)
			      .on("mouseout", mouseOutArc);
			  
			      
			  var texts = svg.selectAll("text")
			      .data(partitioned_data)
			      .enter().append("text")
			      .filter(filter_min_arc_size_text)     
			      .attr("transform", function(d) { return "rotate(" + computeTextRotation(d) + ")"; })
			      .attr("x", function(d) { return radius / 3 * d.depth; })  
			      .attr("dx", "6") // margin
			      .attr("dy", ".35em") // vertical-align  
			      .text(function(d,i) {return d.name})

			  function zoomIn(p) {
			    if (p.depth > 1) p = p.parent;

			    if (!p.children) 
			    {
			    	console.log(p);
			    	var myWin = window.open(p.url);
			    	return;
			    }
			    zoom(p, p);
			    console.log("Zoom!")
			  }

			  function zoomOut(p) {
			    if (!p.parent) return;
			    zoom(p.parent, p);
			  }

			  // Zoom to the specified new data.
			  function zoom(data, p) {
			    if (document.documentElement.__transition__) return;

			    // Rescale outside angles to match the new layout.
			    var enterArc,
			        exitArc,
			        outsideAngle = d3.scale.linear().domain([0, 2 * Math.PI]);

			    function insideArc(d) {
			      return p.key > d.key
			          ? {depth: d.depth - 1, x: 0, dx: 0} : p.key < d.key
			          ? {depth: d.depth - 1, x: 2 * Math.PI, dx: 0}
			          : {depth: 0, x: 0, dx: 2 * Math.PI};
			    }

			    function outsideArc(d) {
			      return {depth: d.depth + 1, x: outsideAngle(d.x), dx: outsideAngle(d.x + d.dx) - outsideAngle(d.x)};
			    }

			    center.datum(data);

			    // When zooming in, arcs enter from the outside and exit to the inside.
			    // Entering outside arcs start from the old layout.
			    if (data === p) enterArc = outsideArc, exitArc = insideArc, outsideAngle.range([p.x, p.x + p.dx]);
			  
			   var new_data=partition.nodes(data).slice(1)

			    path = path.data(new_data, function(d) { return d.key; });
			     
			   // When zooming out, arcs enter from the inside and exit to the outside.
			    // Exiting outside arcs transition to the new layout.
			    if (data !== p) enterArc = insideArc, exitArc = outsideArc, outsideAngle.range([p.x, p.x + p.dx]);

			    d3.transition().duration(d3.event.altKey ? 7500 : 750).each(function() {
			      path.exit().transition()
			          .style("fill-opacity", function(d) { return d.depth === 1 + (data === p) ? 1 : 0; })
			          .attrTween("d", function(d) { return arcTween.call(this, exitArc(d)); })
			          .remove();
			          
			      path.enter().append("path")
			          .style("fill-opacity", function(d) { return d.depth === 2 - (data === p) ? 1 : 0; })
			          .style("fill", function(d) { return d.fill; })
			          .on("click", zoomIn)
			       .on("mouseover", mouseOverArc)
			         .on("mousemove", mouseMoveArc)
			         .on("mouseout", mouseOutArc)
			          .each(function(d) { this._current = enterArc(d); });

			    
			      path.transition()
			          .style("fill-opacity", 1)
			          .attrTween("d", function(d) { return arcTween.call(this, updateArc(d)); });
			          
			      
			         
			    });
			    
			    
			   texts = texts.data(new_data, function(d) { return d.key; })
			   
			   texts.exit()
			           .remove()    
			    texts.enter()
			            .append("text")
			        
			    texts.style("opacity", 0)
			      .attr("transform", function(d) { return "rotate(" + computeTextRotation(d) + ")"; })
			    .attr("x", function(d) { return radius / 3 * d.depth; })  
			    .attr("dx", "6") // margin
			      .attr("dy", ".35em") // vertical-align
			      .filter(filter_min_arc_size_text)     
			      .text(function(d,i) {return d.name})
			    .transition().delay(750).style("opacity", 1)	        
		}	     
}

});
});

//console.log(info[0].coordinates);
//console.log(info[0].location.display_address);
//console.log(info[0].display_phone);
