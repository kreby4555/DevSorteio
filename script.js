function generateNumber() {
    const min = Math.ceil(document.querySelector(".entre").value)
    const max = Math.floor(document.querySelector(".e").value)
    const result2 = document.querySelector(".result")

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  result2.innerHTML = result

}