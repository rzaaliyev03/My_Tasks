const data = [
    {
        "name": "Bitcoin",
        "ticker": "BTC",
        "value": "9685",
        "change": "2.83%"
    },
    {
        "name": "Ethereum",
        "ticker": "ETH",
        "value": "210.5",
        "change": "6.17%"
    },
    {
        "name": "Ripple",
        "ticker": "XRP",
        "value": "0.2812",
        "change": "2.47%"
    },
    {
        "name": "Bitcoin Cash",
        "ticker": "BCH",
        "value": "441.4",
        "change": "5.01%"
    },
    {
        "name": "Bitcoin SV",
        "ticker": "BSV",
        "value": "303.17",
        "change": "5.53%"
    },
    {
        "name": "Litecoin",
        "ticker": "LTC",
        "value": "74.935",
        "change": "4.25%"
    },
    {
        "name": "Tether",
        "ticker": "USDT",
        "value": "0.9994",
        "change": "-1.7%"
    },
    {
        "name": "EOS",
        "ticker": "EOS",
        "value": "4.6161",
        "change": "3.15%"
    },
    {
        "name": "Binance Coin",
        "ticker": "BNB",
        "value": "19.824",
        "change": "-3.82%"
    },
    {
        "name": "Cardano",
        "ticker": "ADA",
        "value": "0.060389",
        "change": "2.93%"
    },
    {
        "name": "Tezos",
        "ticker": "XTZ",
        "value": "2.1247",
        "change": "6.12%"
    },
    {
        "name": "Ethereum Classic",
        "ticker": "ETC",
        "value": "12.5988",
        "change": "4.09%"
    },
    {
        "name": "Stellar",
        "ticker": "XLM",
        "value": "0.07034",
        "change": "-4.10%"
    },
    {
        "name": "Monero",
        "ticker": "XMR",
        "value": "79.523",
        "change": "3.45%"
    },
    {
        "name": "TRON",
        "ticker": "TRX",
        "value": "0.020881",
        "change": "5.21%"
    }
];

const tbody = document.querySelector("tbody")
tableRender()
function tableRender() {

    data.forEach(item => {
        tbody.innerHTML += `
<tr>
    <td>${item.name}</td>
    <td>${item.ticker}</td>
    <td>${item.value}</td>
    <td class="${item.change[0] !== "-" ? "text-[#51ff51cd]" : "text-[red]"}">${item.change}</td>
</tr>
`

    })

}

const namebtn = document.getElementById("namebtn")
const tickerbtn = document.getElementById("tickerbtn")
const valuebtn = document.getElementById("valuebtn")
const changebtn = document.getElementById("changebtn")



function sortAndRender(key, isNum) {
    data.sort((a, b) => {
        if (isNum) {
           
            let valA = a[key].replace('%', '') * 1;
            let valB = b[key].replace('%', '') * 1;
            
            return valA - valB;
        } else {
           
            return a[key].localeCompare(b[key]);
        }
    });
tbody.innerHTML = "";
    tableRender();
}


namebtn.addEventListener("click", () => sortAndRender('name' ,false));
tickerbtn.addEventListener("click", () => sortAndRender('ticker', false));
valuebtn.addEventListener("click", () => sortAndRender('value', true));
changebtn.addEventListener("click", () => sortAndRender('change',true));



