function game()
{
  var number=parseInt(document.getElementById('num').value)
  
  
  if(number%3==0 && number%5==0)
    document.getElementById('out').innerText="FIZZ-BUZZ"
  else if (number%3==0)
    document.getElementById('out').innerText="FIZZ"
  else if(number%5==0)
    document.getElementById('out').innerText="BUZZ"
  else
    document.getElementById('out').innerText=number
}