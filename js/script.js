$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD" ;
        var imgSrc ="https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var actResult = $("#activity").val();
        var seasResult = $("#season").val();
        var breakResult = $("#breakfast").val();
        var holResult = $("#holiday").val();
        var animResult = $("#animal").val();
        var totalScore;
        totalScore = calculateActivityScore(sizeResult);
        totalScore = totalScore + calculateSeasonScore(gpaResult);
        totalScore = totalScore + calculateHolidayScore(tempResult);
        console.log(totalScore);
        placement(totalScore, name);
    });
    function displayResult(techplacement,name, imgSrc){
        return $(".result").html("<h2>Congratulations, " + name + " you should consider " + techplacement + "</h2>"+"<img src=" +imgSrc+">");

    }
    function calculateActivityScore(size) {
        if (activity === "Big" || activity === "big") {
            return 2;
        }
        else if (activity === "Sports" || activity === "sports") {
            return 3;
    }

    function calculateSeasonScore(gpa) {
        if (season === "High" || season === "high") {
            return 2;
        }
        else if (season === "Low" || season === "low") {
            return 3;
        }
    }

    function calculateBreakfastScore(weather) {
        if (breakfast === "Hot" || breakfast === "hot") {
            return 2;
        }
        else if (breakfast === "Cold" || breakfast === "cold") {
            return 3;
        }
    }

    function placement(totalScore,name) {
        var techplacement;
        var imgSrc;
        if (totalScore > 21) {
            techplacement = "Harvard";
            imgSrc="https://www.harvard.edu/sites/default/files/user13/harvard_shield_wreath.png";
            displayResult(techplacement,name,imgSrc);
        }
        else if (totalScore >16 && totalScore <= 21) {
            techplacement = "Stanford";
            imgSrc="https://identity.stanford.edu/img/block-s-2color.png";
            displayResult(techplacement,name,imgSrc);
        }
        else if (totalScore > 11 && totalScore <= 16) {
            techplacement = "UC LA";
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/UCLA_Bruins_logo.svg/2000px-UCLA_Bruins_logo.svg.png";
            displayResult(techplacement,name,imgSrc);
        }
        else if (totalScore > 8 && totalScore <= 11) {
            techplacement = "UC Davis";
            imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/UC_Davis_Aggies_logo.svg/1200px-UC_Davis_Aggies_logo.svg.png";
            displayResult(techplacement,name,imgSrc);
        }
         else if (totalScore == 8) {
            techplacement = "SF State";
            imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/San_Francisco_State_Gators_logo.svg/1200px-San_Francisco_State_Gators_logo.svg.png";
            displayResult(techplacement,name,imgSrc);
        }
        else{
            $(".result").html("<h2>Make sure to answer all of the questions, " + name + " We want to make sure we get this right!</h2>");
        }
    }


});