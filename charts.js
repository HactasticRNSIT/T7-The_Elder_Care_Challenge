window.onload = function(){

  const riskCtx = document.getElementById("riskChart");

  if(riskCtx){

    new Chart(riskCtx,{

      type:"line",

      data:{
        labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

        datasets:[{
          label:"Risk Level",
          data:[12,19,8,15,10,7,5]
        }]
      }

    });
  }

  const adherenceCtx = document.getElementById("adherenceChart");

  if(adherenceCtx){

    new Chart(adherenceCtx,{

      type:"bar",

      data:{
        labels:["Mon","Tue","Wed","Thu","Fri"],

        datasets:[{
          label:"Medication %",
          data:[95,88,92,97,91]
        }]
      }

    });
  }
}