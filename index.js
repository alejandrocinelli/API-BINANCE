//'https://api.binance.com/api/v3/ticker/price' 
//'https://api.coingecko.com/api/v3/coins/bitcoin'

let objData = {
    0:"BTCUSDT",
    1:"ETHUSDT",
    2:"BNBUSDT",
    3:"DOTUSDT",
    4:"ADAUSDT",
    5:"MATICUSDT"
}
function pasarData (){
for (const prop3 of Object.values(objData) ){
  
PedirData2(prop3) 

}}

let array =[]

async function PedirData2(id) 
{
const response = await fetch('https://fapi.binance.com/fapi/v1/ticker/24hr')//me gusta mas esta API concentra mejor informacion 
const data2 = await response.json()
//console.log(data2)
let data_filter24hs= data2.filter(element => element.symbol ==`${id}`)

array.push(data_filter24hs)

mostradata2(array)

} 

pasarData()

const mostradata2 = (data2)=>{
    let htmlRend = ""
for (const prop of Object.values(data2)){
   
    for(const prop2 of Object.values(prop)){
        
        htmlRend += `

        <div id="starred" class="bg-white px-2 pt-1 mt-2">
        <div class="table-responsive">
            <table class="table">
                <tbody>
                    <tr>
                        <td>
                            <div class="d-flex flex-column">
                                <div class="text-muted">Name</div>
                                <div class="d-flex align-items-center">
                                    <b class="pl-0">${prop2.symbol}</b>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex flex-column">
                                <div class="text-muted align-items-left">Price</div>
                                <div><b>${parseFloat(prop2.lastPrice).toFixed(2)}</b></div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex flex-column">
                                <div class="text-muted">High Price 24hs</div>
                                <div><b>${parseFloat(prop2.highPrice).toFixed(2)}</b></div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex flex-column">
                                <div class="text-muted">Low Price 24hs</div>
                                <div><b>${parseFloat(prop2.lowPrice).toFixed(2)}</b></div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center labels">
                                    <div class="text-muted">Volume</div>
                                    <div class="green-label mx-1 px-1 rounded">x</div>
                                </div>
                                <div><b>${parseFloat(prop2.volume).toFixed(2)}</b></div>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex flex-column">
                                <div class="d-flex align-items-center labels">
                                    <div class="text-muted">Change</div>
                                    <div class="orange-label mx-1 px-1 rounded">${parseFloat(prop2.priceChangePercent).toFixed(2)}%</div>
                                </div>
                                <div><b class="red">${parseFloat(prop2.priceChangePercent).toFixed(2)}%</b></div>
                            </div>
                        </td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    

        ` 
    }
    document.getElementById('data2').innerHTML = htmlRend
}

}

