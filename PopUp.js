$(document).ready(function () {
    $(document).on("change", "#SetTimeSpeed", () => {
        var NewSpeed = parseInt($("#SetTimeSpeed option:selected").val());
        console.log(NewSpeed)

        switch (NewSpeed) {
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
                break;
        }

        $("#changeSpeed").click(() => {
            console.log(timeSpeed);
        })
        window.NewSpeede = timeSpeed;
    })


    $("#randomNumberBtn").click(() => {
        let Textval1 = parseInt($("#randomNumbertext1").val());
        let Textval2 = parseInt($("#randomNumbertext2").val());
        let randomOp = Math.floor((Math.random() * 4) + 1);

        console.log(NewSpeede);

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

        $("#answerNumber").html(finalNumber);

        setTimeout(() => {
            $(".hover_bkgr_fricc").show();
            $("#answerNumber").html("Nice Try");
            $("#randomNumbertext1").val("");
            $("#randomNumbertext2").val("");

        }, NewSpeede);
         
        $('.popupCloseButton').click(function () {
            $('.hover_bkgr_fricc').hide();
        });

        $("#SubmitButtonAnswer").click(() => {
            var OpitionSelected = $("#OprationSelect option:selected").val();
            console.log(OpitionSelected);
            console.log(answer);

            if (OpitionSelected === "Division" & answer === "Division") {

                console.log("You got it right");
                $("#PopUpDisplay").css("background", "#00B140");

            } else if (OpitionSelected === "Addition" & answer === "Addition") {

                console.log("You got it right");
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

            $("#retryGame").css("display", "block");
            $("#retryGame").click(() => {
                location.reload();
            })
            





        })
    })
})