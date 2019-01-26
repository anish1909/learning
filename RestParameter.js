/*
let alluserAddress=[];

let userAddress=(userId,...storeAddress)=>{
	//console.log(userId);
	//console.log(storeAddress)
	let customAddress={userId:userId,useraddress:storeAddress}
	alluserAddress.push(customAddress);
	console.log(alluserAddress)
	return alluserAddress
}
let firstAddress={
	"houseno":"246 A",
	"district":"gorakhpur",
	 "pincode":273404,
	 "mono":9935208629
}
let secondAddress={
	"houseno":"256 A",
	"district":"Maharajgunj",
	 "pincode":273304,
	 "mono":8535060410
}
userAddress("anishKumarSrivastava",firstAddress,secondAddress);
*/

let allpeopleInvitedList=[];
let peopleuWanttoinvite=(...people)=>{
	let newpeopleArray=people;
	console.log(newpeopleArray);
		allpeopleInvitedList=allpeopleInvitedList.concat(newpeopleArray);
console.log(allpeopleInvitedList);
return allpeopleInvitedList;
}

peopleuWanttoinvite("anish","jay");
peopleuWanttoinvite("shubham" ,"shivam","ashwani")
peopleuWanttoinvite("yash")
