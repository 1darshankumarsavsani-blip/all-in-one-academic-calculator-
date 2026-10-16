function calculateCGPA() {

let s1 = Number(document.getElementById("sem1").value);
let s2 = Number(document.getElementById("sem2").value);
let s3 = Number(document.getElementById("sem3").value);

let cgpa = (s1+s2+s3)/3;

document.getElementById("cgpa").innerHTML =
"CGPA : " + cgpa.toFixed(2);
}