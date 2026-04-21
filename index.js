let UserInput = document.getElementById("user_input");
let GuessBtn = document.getElementById("guess_btn");
let Result = document.getElementById("display_result");
let CPUNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let ResetBtn = document.getElementById("reset_btn")

function PickingNum() {
    let RandomNum = CPUNum[Math.floor(Math.random() * CPUNum.length)]
    return RandomNum;

}

let RandomNum = PickingNum();

GuessBtn.addEventListener("click", function() {
    let UserNum = parseFloat(UserInput.value);

    if (UserNum === RandomNum) {
        Result.textContent="You guessed it correctly"
        console.log("Correct")        
        let RandomNum = PickingNum();

    } else if (UserNum > RandomNum) {
        Result.textContent="Too High!"
        console.log("Too High")

    } else if (RandomNum > UserNum) {
        Result.textContent="Too Low!"
        console.log("Too Low")
    }
    
});

ResetBtn.addEventListener("onclick", function() {
    RandomNum = PickingNum();
    Reset.textContent=""
});