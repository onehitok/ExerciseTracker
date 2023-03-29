
// Full page.js
$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        anchors: ['section1', 'section2','section3'],
        sectionsColor: ['#', '#', '#'],
        navigation: false,
        navigationPosition: 'right',
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 1) { //section 2
                section2.play(); //anime.js play method
            } else if (destination.index==2) { //section 3
                section3.play(); 
            }
        }
    });
});

// Landing page bike animation
anime({
    targets: '#demo1',
    keyframes: [
        { translateX: -20 },
        { translateX: 20 }
    ],
    duration: 1000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
});
document.getElementById('demo1').style.width = '50%';
document.getElementById('demo1').style.margin = '0 auto';




// Tippy
tippy('#tip', {
    theme: 'light',
    animation: 'scale',
    arrow: true,
    arrowType: 'round',
    delay: [0, 50],
    duration: 250,
    maxWidth: 300,
    placement: 'bottom', //place tippy to the right
    interactive: true, //allow interaction in tippy (e.g. click and select text)
    content: 'Exercise Tracker is an online app that helps users keep track of their weekly exercise regime.',
    allowHTML: true, //allow HTML in tippy content
    followCursor: true //get tippy to follow mouse cursor
});

//Enter Name
$(document).ready(function () {
    $("#btn1").click(function () {
        $("#bubbleText").html("Hello, " + $("#TextBoxId").val() + "!");
    });
})

//Locked Levels
$("#cycling").addClass("disabled");
$("#weightLifting").addClass("disabled");

//Section 3 (Level 1)
$(document).ready(function () {
    $("#add-button").click(function() {
        var num1 = parseInt($("#number1").val());
        var num2 = parseInt($("#number2").val());
        var num3 = parseInt($("#number3").val());
        var num4 = parseInt($("#number4").val());
        var num5 = parseInt($("#number5").val());
        var num6 = parseInt($("#number6").val());
        var num7 = parseInt($("#number7").val());
        var sum = num1 + num2 + num3+ num4+ num5+ num6+ num7;
        if (sum >= 10) {
            $("#display").html(
            "You ran " + sum + "KM in total. <br>" +
            $("#number1").val() + "KM on the first day. "+ "<br>" +
            $("#number2").val() + "KM on the second day. "+ "<br>" +
            $("#number3").val() + "KM on the third day. "+ "<br>" +
            $("#number4").val() + "KM on the fourth day. "+ "<br>" +
            $("#number5").val() + "KM on the fifth day. "+ "<br>" +
            $("#number6").val() + "KM on the sixth day. "+ "<br>" +
            $("#number7").val() + "KM on the seventh day." + "<br>" +
            "Verdict: Great job!"
            )
            $("#cycling").removeClass("disabled");
            var element = document.querySelector('div.col:nth-child(2) > div:nth-child(1)');
            element.style.backgroundImage = 'linear-gradient(45deg,#0000FF, #90DEFF)';

        } else if (sum < 10) {
            $("#display").html(
                "You ran " + sum + "KM in total. <br>" +
                $("#number1").val() + "KM on the first day. "+ "<br>" +
                $("#number2").val() + "KM on the second day. "+ "<br>" +
                $("#number3").val() + "KM on the third day. "+ "<br>" +
                $("#number4").val() + "KM on the fourth day. "+ "<br>" +
                $("#number5").val() + "KM on the fifth day. "+ "<br>" +
                $("#number6").val() + "KM on the sixth day. "+ "<br>" +
                $("#number7").val() + "KM on the seventh day." + "<br>" +
                "Verdict: You jog too little, jog at least 10km to clear this level!"
            )
        }
        else { $("#display").text("Did you fill up all the fields?")}

        $("#display")
        .hide()
        .fadeIn(2000)
        .addClass("message");
    });
});


//Hover share button
$(document).ready(function(){
    $(".Capa_1").hover(function () {
        var st0 = document.querySelector('.st0');
        st0.style.fill = "white";
    }, function () {
        var st0 = document.querySelector('.st0');
        st0.style.fill = "black";
    });
});

//Show chart button
const btn = document.getElementById("add-button");
btn.addEventListener("click", function() {
  const chartContainer = document.getElementById("chartContainer");
  chartContainer.style.display = "block";
  chartContainer.style.opacity = 0;
  setTimeout(function () {
    chartContainer.style.transition = "opacity 2s";
    chartContainer.style.opacity = 1;
  }, 0);
});


//Generate chart
let chartData = [];
const chartElement = document.getElementById("myLineChart");
const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const input3 = document.getElementById("number3");
const input4 = document.getElementById("number4");
const input5 = document.getElementById("number5");
const input6 = document.getElementById("number6");
const input7 = document.getElementById("number7");
const addDataButton = document.getElementById("add-button");

const myChart = new Chart(chartElement, {
  type: 'line',
  data: {
    labels: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
    datasets: [{
      label: 'Distance ran',
      data: chartData,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {}
});

addDataButton.addEventListener("click", function() {
  chartData.push(input1.value, input2.value, input3.value, input4.value, input5.value, input6.value, input7.value);
  myChart.update();
});

//Animations

var section2 = anime({
    targets: ".demo1",
    rotate: 360,
    opacity: [0, 1], //start and end values
    autoplay: false
    });

var section3 = anime({
    targets: '#custom-cards',
    translateX: 300,
    duration: 1000,
    opacity: [1,0],
    delay: anime.stagger(300, {start: 0}), 
    direction: 'reverse',
    });

    
anime({
    targets: ".navanime",
    opacity: [0, 1], //start and end values
    duration: 15000
    });

anime({
    targets: ".position",
    opacity: [0, 1], //start and end values
    duration: 15000
    });

anime({
    targets: '.float_center',
    keyframes: [
        { translateY: -20 },
        { translateY: 20 }
    ],
    duration: 1900,
    easing: 'linear',
    loop: true,
    direction:'alternate'
})

anime({
    targets: '#day1data1, #number1,#day1data2, #number2, #day1data3, #number3, #day1data4, #number4, #day1data5, #number5, #day1data6, #number6, #day1data7, #number7',
    translateX: 1000,
    delay: anime.stagger(150),
    direction: 'reverse'
    });

anime({
    targets: '#add-button',
    keyframes: [
        { translateX: 0, duration: 2500},
        { translateX: 220, duration: 2500 },
        { translateX: 0, duration: 2500 },
        { translateX: 220, duration: 2500 },
        { translateX: 0, duration: 2500 },
        { translateX: 220, duration: 2500 },
        { translateX: 0, duration: 2500 },
        { translateX: 220, duration: 2500 },
    ],
    duration: 1,
    easing: 'linear',
    loop: true,
    direction:'alternate'
    })

    
//style="background-image: linear-gradient(45deg,#C02425, #F0CB35)">
//linear-gradient(45deg,#0000FF, #90DEFF)';

