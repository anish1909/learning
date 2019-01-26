var cstring=function(ostring)
{
	var rstring="";
	var stlen=ostring.length;
	alert(stlen)
	for(i=0;i<ostring.length;i++)
	{
		if(ostring[i]=='a')
		{
			alert(ostring[i])
			console.log(ostring[i]);

		}
		else if(ostring[i]=='e')
		{

		}
		else if(ostring[i]=='i')
		{
			
		}
		else if(ostring[i]=='o')
		{
			
		}
		else if(ostring[i]=='u')
		{
			
		}
		else
		{
			//alert(ostring[i])
			//console.log(ostring[i]);
			rstring=rstring.concat(ostring[i]);
		}
	}
	return rstring;
}
