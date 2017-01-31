$(document).ready(function(){

  var clickCount = 0
  var height = 0
  var weight = 0
  var bmi = 0
  var weightRange = ''
  var lowNorm = 0
  var highNorm = 0

  $('#calcBMI').click((event) => {
    
    event.preventDefault()

    clickCount++

    if(clickCount === 1) {
      height = $('#height').val()
      weight = $('#weight').val()
      bmi = (weight / height / height).toFixed(1)
      lowNorm = 18.5 * height * height
      highNorm = 24.9 * height * height

      $('#calcBMI').text('RESET').css({'background':'red'})
      
      if(height && weight) {
        
        $('#bmi').val(bmi)

        if(bmi < 18.5) weightRange = 'underweight'
        else if(bmi <= 24.9) weightRange = 'a healthy weight'
        else if(bmi <= 29.9) weightRange = 'overweight'
        else weightRange = 'obese'

        $('#bmiResult').text(bmi)
        $('#bmiRange').text(weightRange)

        $('#lowNorm').text( lowNorm.toFixed(1) )
        $('#highNorm').text( highNorm.toFixed(1) )
        
        $('#inputStatement').hide()
        $('#outputStatement').show()

        if(bmi < 18.5) {
          $('#loseGain').text('gain')
          $('#lowKg').text( (lowNorm - weight).toFixed(1) )
          $('#highKg').text( (highNorm - weight).toFixed(1) )
          $('#normalStatement').show()
        } else if(bmi > 24.9) {
          $('#loseGain').text('lose')
          $('#lowKg').text( (weight - lowNorm).toFixed(1) )
          $('#highKg').text( (weight - highNorm).toFixed(1) )
          $('#normalStatement').show()
        }
      }
    } else {
      clickCount = 0
      $('#height').val('').focus()
      $('#weight').val('')
      $('#bmi').val('')
      $('#calcBMI').text('Calculate BMI').css({'background':''})
      $('#inputStatement').show()
      $('#outputStatement').hide()
      $('#normalStatement').hide()
    }
  })
})