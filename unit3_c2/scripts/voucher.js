async function getData() {

    let api = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

    let res = await fetch(api)

    let data = await res.json()
    console.log(data)
    append(data[0].vouchers)
}
getData()

function append(data) {

    let contain = document.querySelector(".voucher")


    data.forEach(function (ele) {
        let div = document.createElement("div")
        div.setAttribute("class", "voucher_list")

        let image = document.createElement("img");
        image.src = ele.image

        let name = document.createElement("h2");
        name.innerText = ele.name;

        let price = document.createElement("h4")
        price.innerText = ele.price

        let btn = document.createElement("button")
        btn.innerText = "Buy";
     


        div.append(image, name, price, btn)
        contain.append(div)
    })
}