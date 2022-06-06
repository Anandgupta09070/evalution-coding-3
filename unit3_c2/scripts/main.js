// let api = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
document.getElementById("form").addEventListener("submit", mybutton)

function mybutton(event) {
    event.preventDefault();

    let arr = JSON.parse(localStorage.getItem("user")) || []

    let obj = {
        name: form.name.value,
        email: form.email.value,
        address: form.address.value,
        amount: form.amount.value
        
    }
    arr.push(obj)
    console.log(arr)

    localStorage.setItem("user", JSON.stringify(arr))

}