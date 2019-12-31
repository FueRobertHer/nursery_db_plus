let pressGO = () => {
  let inputs = document.querySelectorAll('.form-control');
  let goBtn = document.querySelector('.btn-primary');

  inputs[8].addEventListener("keypress", (e) => {
    if (e.key === 'Enter') goBtn.click()
  })
}

pressGO();