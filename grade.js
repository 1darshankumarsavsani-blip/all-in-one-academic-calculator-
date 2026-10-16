function getGrade(marks){

if(marks >= 85)
    return "AA (10)";
else if(marks >= 75)
    return "AB (9)";
else if(marks >= 65)
    return "BB (8)";
else if(marks >= 55)
    return "BC (7)";
else if(marks >= 45)
    return "CC (6)";
else if(marks >= 40)
    return "CD (5)";
else if(marks >= 35)
    return "DD (4)";
else
    return "FF (0)";
}
