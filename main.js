$(document).ready(function(){

  $('#calcBMI').click(() => {
    var height = $('#height').val()
    var weight = $('#weight').val()
    var bmi = (weight / height / height).toFixed(1)
    var weightRange = ''

    $('#bmi').attr({placeholder: '', value: bmi})
    $('.bmiStatement p').toggle()

    if(bmi < 18.5) weightRange = 'underweight'
    else if(bmi < 25) weightRange = 'normal weight'
    else if(bmi < 30) weightRange = 'overweight'
    else weightRange = 'obese'

    $('#bmiResult').text(() => bmi)
    $('#bmiRange').text(() => weightRange)
  })
})
