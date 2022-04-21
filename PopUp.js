$(document).ready(function () {
    $(document).on("change", "#SetTimeSpeed", () => {

        // Get the vals of all the options from the change speed selection
        var NewSpeed = parseInt($("#SetTimeSpeed option:selected").val());
        var timeSpeed;

        // Go threw all of them and see which one is selected for the speed
        switch (NewSpeed) {
            default:
                var timeSpeed = 50;
                break;
            case (NewSpeed = 1):
                var timeSpeed = 50;
                break;
            case (NewSpeed = 2):
                var timeSpeed = 100;
                break;
            case (NewSpeed = 3):
                var timeSpeed = 300;
                break;
            case (NewSpeed = 4):
                var timeSpeed = 500;
                return timeSpeed;
        }

        console.log(timeSpeed)

        // Makeing the timeSpeed variable globle to the entire page, not local 
        window.NewSpeede = timeSpeed;
    });

    $("#randomNumberBtn").click(() => {
        // Get the values of the two textboxs and also genrate the random number 
        let Textval1 = parseInt($("#randomNumbertext1").val());
        let Textval2 = parseInt($("#randomNumbertext2").val());
        let randomOp = Math.floor((Math.random() * 4) + 1);

        // Look throw the random genrated number and assign an operation to it 
        switch (randomOp) {
            case (randomOp = 1):
                // This case will be multiply
                var finalNumber = Textval1 * Textval2;
                var answer = "Multiplication";
                break;
            case (randomOp = 2):
                // This case will be devide
                var finalNumber = Textval1 / Textval2;
                var answer = "Division";
                break;
            case (randomOp = 3):
                // This case will be subtraction
                var finalNumber = Textval1 - Textval2;
                var answer = "Subtraction";
                break;
            case (randomOp = 4):
                // This case will be addition 
                var finalNumber = Textval1 + Textval2;
                var answer = "Addition"
                break;
        }

        // Show the answer for the two numbers at the top of the page
        $("#answerNumber").html(finalNumber);

        // Make it where based on the Time the person choice it effect is here. Everhting bellow will excute depending on the chosen speed
        setTimeout(() => {
            $(".hover_bkgr_fricc").show();
            $("#answerNumber").html("Nice Try");
            $("#randomNumbertext1").val("");
            $("#randomNumbertext2").val("");

        }, NewSpeede);

        // This is where the person has to guss what they thought the operation was 
        $("#SubmitButtonAnswer").click(() => {

            // Get all the values of the operationSelect dropdown list and find the one that is seleted
            var OpitionSelected = $("#OprationSelect option:selected").val();

            // Going threw all the possiabilty, if one is a match it will turn the background of the popUp green and if wrong background will be red 
            if (OpitionSelected === "Division" & answer === "Division") {

                console.log("You got it right");
                $("#PopUpDisplay").css("background", "#00B140");

            } else if (OpitionSelected === "Addition" & answer === "Addition") {

                $("#PopUpDisplay").css("background", "#00B140");
            } else if (OpitionSelected === "Subtraction" & answer === "Subtraction") {

                console.log("You got it right");
                $("#PopUpDisplay").css("background", "#00B140");
            } else if (OpitionSelected === "Multiplication" & answer === "Multiplication") {

                console.log("You got it right");
                $("#PopUpDisplay").css("background", "#00B140");
            } else {

                console.log("You got it wrong");
                $("#PopUpDisplay").css("background", "#ff0000");
            }

            // The button for them thats going to reset it 
            $("#retryGame").css("display", "block");
            $("#retryGame").click(() => {
                location.reload();
            })
        })
    })
})