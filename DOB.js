//calculate Date of birth
let DOB=(bday,bmonth,byear)=>{
	var today=new Date();
	var day=today.getDate();
	var month1=today.getMonth();
	var month=month1+1;
	var year=today.getFullYear();
	if((month<bmonth)||(month==bmonth&&bday>day))
	{

		return(year-byear-1);
		
	}
	else
	{
	 return(year-byear);	
	}
}
