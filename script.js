


"use strict";

function optionSelect() {
    var selectorOne = document.getElementById('annualTime');
    var valueOne = selectorOne[selectorOne.selectedIndex].value;

    var selectorTwo = document.getElementById('timeNumber');
    var valueTwo = selectorTwo[selectorTwo.selectedIndex].value;

    var subBtn = document.getElementById("submitBtn");

    if(valueOne == "daily" && valueTwo == "10"){
      subBtn.href="site.com/purchase/daily-10";
      console.log("daily:10");
    }else if(valueOne == "daily" && valueTwo == "20"){
      subBtn.href="site.com/purchase/daily-20";
      console.log("daily:20");
    }else if(valueOne == "daily" && valueTwo == "30"){
      subBtn.href="site.com/purchase/daily-30";
      console.log("daily:30");
    }else if(valueOne == "daily" && valueTwo == "40"){
      subBtn.href="site.com/purchase/daily-40";
      console.log("daily:40");
    }else if(valueOne == "daily" && valueTwo == "50"){
      subBtn.href="site.com/purchase/daily-50";
      console.log("daily:50");
    }else if(valueOne == "monthly" && valueTwo == "10"){
      subBtn.href="site.com/purchase/monthly-10";
      console.log("monthly:10");
    }else if(valueOne == "monthly" && valueTwo == "20"){
      subBtn.href="site.com/purchase/monthly-20";
      console.log("monthly:20");
    }else if(valueOne == "monthly" && valueTwo == "30"){
      subBtn.href="site.com/purchase/monthly-30";
      console.log("monthly:30");
    }else if(valueOne == "monthly" && valueTwo == "40"){
      subBtn.href="site.com/purchase/monthly-40";
      console.log("monthly:40");
    }else if(valueOne == "monthly" && valueTwo == "50"){
      subBtn.href="site.com/purchase/monthly-50";
      console.log("monthly:50");
    }else if(valueOne == "yearly" && valueTwo == "10"){
      subBtn.href="site.com/purchase/yearly-10";
      console.log("yearly:10");
    }else if(valueOne == "yearly" && valueTwo == "20"){
      subBtn.href="site.com/purchase/yearly-20";
      console.log("yearly:20");
    }else if(valueOne == "yearly" && valueTwo == "30"){
      subBtn.href="site.com/purchase/yearly-30";
      console.log("yearly:30");
    }else if(valueOne == "yearly" && valueTwo == "40"){
      subBtn.href="site.com/purchase/yearly-40";
      console.log("yearly:40");
    }else if(valueOne == "yearly" && valueTwo == "50"){
      subBtn.href="site.com/purchase/yearly-50";
      console.log("yearly:50");
    }

}
