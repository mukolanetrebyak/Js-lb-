
setTimeout(
  () => {
	Data = new Date();
	Hour = Data.getHours();
	Minutes = Data.getMinutes();
	Seconds = Data.getSeconds();
    function date(d = today()){
	alert("Дата і час становлять: "+d+" "+Hour + ":" + Minutes + ":" + Seconds);
}
function today(){
	return (new Date()).toLocaleDateString("en-US");
}
date();
  },
  5 * 1000 //затримка 5 секунд
);

