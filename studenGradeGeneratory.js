//Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows: 

//A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.


//PROMPT USER
let marks = prompt("Present your marks here", "");
if(marks !== null && marks >= 0 && marks <= 100)
{
    //CONDITIONAL STATEMENTS
    function grades(marks)
    {
        let grade;
        if (marks > 79)
        {
            grade = "A"
        }
        else if (marks > 60)
        {
            grade = "B"
        }
        else if (marks > 49)
        {
            grade = "C"
        }
        else if (marks > 40)
        {
            grade = "D"
        }
        else{
            grading = "E"
        }
        return grade
        //ALERT STATEMENTS
    }
    alert(`Your grade is; ${grading(marks)}`);
}