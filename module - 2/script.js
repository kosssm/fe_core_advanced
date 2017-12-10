var res1 = 'taba';
var res2 = 'sharm';
var res3 = 'hurgada';
var text;

let resort = prompt('Enter number between 1 to 3');

switch(resort) {
    case "1":
        alert(`You have choosed ${res1} resort`);
        break;
    case "2":
        alert(`You have choosed ${res2} resort`);
        break;
    case "3":
        alert(`You have choosed ${res3} resort`);
        break;
    default:
        alert("Such resort do not exist");
        break;
}