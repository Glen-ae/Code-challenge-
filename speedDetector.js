//Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


//PROMPT USER
 let speed = prompt("Input speed of a car(km/hr): ", "");
if (speed !== null && speed >= 0)
{
    //CONDITIONAL STATEMENTS
    let driverLicenseInfo;
    if(speed < 70)
    {
        driverLicenseInfo = "Ok"
    }
    else
    {
        let demeritPoint = Math.ceil((speed - 70)/5);
        if (demeritPoint < 12)
        {
            driverLicenseInfo = `Demerit Points: ${demeritPoint}`
        }
        else
        {
            driverLicenseInfo = `Demerit Points: ${demeritPoint}, LICENSE SUSPENDED!`
        }
    }
    //ALERT STATEMENTS
    alert(driverLicenseInfo)
}
else
{
    alert('Wrong Input')
} 
