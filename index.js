let TrackingIndex = [Clicks, Wins, Losses] = [0, 0, 0];
let CPUNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let UserInput = document.getElementById("user_input");
let GuessBtn = document.getElementById("guess_btn");
let Result = document.getElementById("display_result");
let ResetBTN = document.getElementById("reset_btn");
let TrackingFeild = document.getElementById("tracking_feild");
let LimitReachedFeild = document.getElementById("Limit_Reached");
let ErrorFeild = document.getElementById("Error_Result");

function PickingNum() {
    let RandomNum = CPUNum[Math.floor(Math.random() * CPUNum.length)]
    return RandomNum;
}
TrackingFeild.textContent = `Clicks: ${Clicks} Wins: ${Wins} Losses: ${Losses}`;


let RandomNum = PickingNum();    
    
GuessBtn.addEventListener("click", function() {
        let UserNum = parseFloat(UserInput.value);
        TrackingFeild.textContent = `Clicks: ${Clicks} Wins: ${Wins} Losses: ${Losses}`;
        TrackingIndex[0] = [Clicks ++];

   if (UserNum === RandomNum) {
        TrackingIndex[1] = [Wins ++];
        TrackingFeild.textContent = `Clicks: ${Clicks} Wins: ${Wins} Losses: ${Losses}`;
        Result.textContent="You guessed it correctly";
        console.log("Correct")        
        let RandomNum = PickingNum();
        
    } else if (UserNum > RandomNum) {
        Result.textContent="Too High!"
        console.log("Too High")

    } else if (RandomNum > UserNum) {
        Result.textContent="Too Low!"
        console.log("Too Low")
    } else if (UserNum < 0) {
        ErrorFeild.textContent="Error! Please fill a valid Number"
        console.log("ni")
    };

    if (TrackingIndex[0] == 5) {
        TrackingIndex[2] = [Losses ++];
        console.log("5 Limit Reached");
        LimitReached();
    } else if (TrackingIndex[0] == 10) {
        TrackingIndex[2] = [Losses ++];
        LimitReached();
    } else if (TrackingIndex[0] == 10) {
        TrackingIndex[2] = [Losses ++];
        LimitReached();
    } else if (TrackingIndex[0] == 15) {
        TrackingIndex[2] = [Losses ++];
        LimitReached();
    } else if (TrackingIndex[0] == 20) {
        TrackingIndex[2] = [Losses ++];
        LimitReached();
    } else if (TrackingIndex[0] == 25) {
        TrackingIndex[2] = [Losses ++];
        LimitReached();
    } else if (TrackingIndex[0] == 30) {
        TrackingIndex[2] = [Losses ++];
        LimitReached();
    }
    
    if (UserNum < 0)  {
        ErrorFeild.textContent="Error! Please input a valid Num"
    } else {
        ErrorFeild.textContent=""
    }
});


function Reset() { 
    document.getElementById('user_input').value='';
    RandomNum = PickingNum();
    Result.textContent="";
    LimitReachedFeild.textContent=""
}

ResetBTN.addEventListener("click", function() {
    Reset();
});

function LimitReached() {
    LimitReachedFeild.textContent="Your 5 Click Limit has been reached"
    setTimeout(Reset, 2100)

}



