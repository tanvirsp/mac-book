const btn8 = document.getElementById('bg8');
const btn16 = document.getElementById('bg16');

btn8.addEventListener('click', function(){
    memorySize(0, true);
    total()
})


btn16.addEventListener('click', function(){
    memorySize(100, false);
    total();
})




const ssd256 = document.getElementById('ssd256');
const ssd512 = document.getElementById('ssd512');
const ssd1tb = document.getElementById('ssd1tb');

ssd256.addEventListener('click', function(){
    storage(0, 256);
    total();
})


ssd512.addEventListener('click', function(){
    storage(200, 512);
    total();

})

ssd1tb.addEventListener('click', function(){
    storage(300, 1000);
    total()

})


//Delivery Charge Capture HTML
const aug25 = document.getElementById('aug25');
const aug21 = document.getElementById('aug21');


aug25.addEventListener('click', function(){
    deliveryCharge(0, true);
    total()
})

aug21.addEventListener('click', function(){
    deliveryCharge(50, false);
    total()
})



//Delivery Charge Calculation

function deliveryCharge(price, isFree){
    const deliveryCharge= document.getElementById('delivery-charge');
    deliveryCharge.innerText = price;

    if(isFree){
        aug25.classList.add('active');
        aug21.classList.remove('active');
    }else {
        aug25.classList.remove('active');
        aug21.classList.add('active');
    }

}




//Memory Size Calculation

function memorySize(price, isActive){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = price;
    if(isActive){
        btn8.classList.add('active');
        btn16.classList.remove('active')
    } else{
        btn16.classList.add('active')
        btn8.classList.remove('active')
    }

}




//Storage SSD Calculation

function storage(price, size){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = price;
    if(size == 256){
        ssd256.classList.add('active');
        ssd512.classList.remove('active')
        ssd1tb.classList.remove('active')
    } else if(size == 512) {
        ssd256.classList.remove('active');
        ssd512.classList.add('active')
        ssd1tb.classList.remove('active')
    } else{
        ssd256.classList.remove('active');
        ssd512.classList.remove('active')
        ssd1tb.classList.add('active')
    }
    
}




//Total Calculate
function total(){
    const price = document.getElementById('price').innerText;
    const memoryCostPrice= document.getElementById('memory-cost').innerText;
    const storageCostPrice= document.getElementById('storage-cost').innerText;
    const deliveryChargePrice= document.getElementById('delivery-charge').innerText;

    
    const totalPrice = parseInt(price) + parseInt(memoryCostPrice)+ parseInt(storageCostPrice) + parseInt(deliveryChargePrice);
    
 
    const total = document.getElementById('total');
    total.innerText = totalPrice;
    const netCost = document.getElementById('net-cost');
    netCost.innerText = totalPrice;
    
}


const submit = document.getElementById('submit');
submit.addEventListener('click', function(){
    const inputText = document.getElementById('text');


    if(inputText.value === "EID"){
        const netCost = document.getElementById('net-cost');
        netCostValue = netCost.innerText;
        const coupon = parseInt(netCostValue) * .10;

        const newPrice = parseInt(netCostValue) - coupon;
        netCost.innerText = newPrice;

        inputText.value = ''
        

    }else{
        alert("Coupon is not Valid");
        inputText.value = ''
    }
})




