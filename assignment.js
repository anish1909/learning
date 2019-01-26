let citydata={
	"up":["gkp","maharajgunj","deoria"],
	"uk":["haridwar","jwalapur"],
	"rajasthan":["kota","jaipur"]
}
 let cityname=(statename)=>{

	for(city in citydata)
	{
		//console.log(city);
		let c=[];
		let first=[];
		let output;
		c=citydata[statename];
		//console.log(c)
		for(i=0;i<c.length;i++)
		{
			
			first[i]=c[i].slice(0,1);
			//console.log(first);
				output=first.toString();
	         
		}
		 console.log(output);
		break;
		
	}
		/*if(city===citynmame)
		{
			let cities=[];
			cities=citydata.cityanme;
			console.log(cities);
		}*/
	//}

	
	/*let name={
		"a":"anish",
		"b":"bani",
		"c":"cotu"
	
	for(i in name)
	{
		console.log(i);
		console.log(name.a);
	}*/
	
}