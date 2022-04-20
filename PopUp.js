$(document).ready(function() {
    let randomOp = Math.floor((Math.random() * 4) + 1);
    
    $("#randomNumberBtn").click( () => {
        let Textval1 = $("#randomNumbertext1").val();
        let Textval2 = $("#randomNumbertext2").val();
        console.log(Textval1);
        console.log(Textval2);
        
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
                var finalNumber = Textval1 * Textval2;
                var answer = "Addition"
                break;    
        }

        $("#answerNumber").html(finalNumber);

        setTimeout(() => { 
            $(".hover_bkgr_fricc").show(); 
            // $("#answerNumber").html("Nice Try");
            $("#randomNumbertext1").val("");
            $("#randomNumbertext2").val("");
            
        }, 500);
        
        $('.popupCloseButton').click(function(){
            $('.hover_bkgr_fricc').hide();
        });
    
        $("#SubmitButtonAnswer").click(() => {    
            var OpitionSelected = $("#OprationSelect option:selected").val();
            console.log(OpitionSelected);
            console.log(answer);
            
            switch (OpitionSelected) {
                case (OpitionSelected === "Division" & answer === "Division"):
                    console.log("You got it right");
                    break;
                case (OpitionSelected === "Addition" & answer === "Addition"):
                    console.log("You got it right");
                    break;
                case (OpitionSelected === "Subtraction" & answer === "Subtraction"):
                    console.log("You got it right");
                    break;
                case (OpitionSelected === "Multiplication" & answer === "Multiplication"):
                    console.log("You got it right");
                    break;

            }
        })
    })
})