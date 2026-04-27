let ClickingCounter = document.getElementById("Clicking_counter");
ClickingCounter = null;
let ClickingResult = document.getElementById("Clicking_Result");
let CPUNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let UserInput = document.getElementById("user_input");
let GuessBtn = document.getElementById("guess_btn");
let Result = document.getElementById("display_result");
let ResetBTN = document.getElementById("reset_btn");
let ErrorFeild = document.getElementById("Error_Result");

function PickingNum() {
    let RandomNum = CPUNum[Math.floor(Math.random() * CPUNum.length)]
    return RandomNum;
}

let RandomNum = PickingNum();    
    
GuessBtn.addEventListener("click", function() {
        let UserNum = parseFloat(UserInput.value);
        ClickingCounter++
        console.log(ClickingCounter)
        ClickingResult.textContent=(ClickingCounter)
        if (UserNum === RandomNum) {
        Result.textContent="You guessed it correctly";
        console.log("Correct")        
        RandomNum = PickingNum();
        
    } else if (UserNum > RandomNum) {
        Result.textContent="Too High!"
        console.log("Too High")

    } else if (RandomNum > UserNum) {
        Result.textContent="Too Low!"
        console.log("Too Low")
    };
     if (UserNum < 0) {
            ErrorFeild.textContent="Error! Please fill a valid Number"
        } else {
            ErrorFeild.textContent=""
        }
});


function Reset() { 
    document.getElementById('user_input').value='';
    RandomNum = PickingNum();
    LimitReachedFeild.textContent="";
    Result.textContent="";
    ClickingCounter = null;
    ClickingResult.textContent=(ClickingCounter)
}

ResetBTN.addEventListener("click", function() {
    Reset();
});



