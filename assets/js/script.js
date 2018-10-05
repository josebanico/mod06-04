// let size ="S";
// switch (size){
// 	case "S":
// 	// alert("small");
// 	// break;
// 	case "M":
// 	alert("medium")
// 	break;
// 	case "L":
// 	alert("large");
// 	break;
// 	default:
// 	alert("invalid size");
// 	break;
// }
const sing = () => {
let x = Number(document.getElementById('num').value);
switch (x){
	case "1":
		document.getElementById('result').innerHTML = x + "On the first day of Christmas";
		break;
	case "2":
		document.getElementById('result').innerHTML = x + "On the second day of Christmas";
		break;
	case "3":
		document.getElementById('result').innerHTML = x + "On the third day of Christmas";
		break;
	case "4"
		document.getElementById('result').innerHTML = x + "On the fourth day of Christmas";
		break;
	default:
		alert ("invalid day");
		break;
	}
}