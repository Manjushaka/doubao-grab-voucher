function money() {
    const $buyDiv = document.querySelector('.tb-btn-buy');

    if ($buyDiv) {
        const $buyA = $buyDiv.querySelector('#J_LinkBuy');
        let hasClickBuyA = false;

        const interval1 = setInterval(() => {
            if (!$buyDiv.classList.contains('tb-hidden') && !hasClickBuyA) {
                $buyA.click();
                console.log('------------------------has click $buyA--------------------', $buyA);
                hasClickBuyA = true;
                clearInterval(interval1);
            }
        } , 10);
    }
}

function startMoney(hours, minutes) {
    let hasStart = false;
    console.log('*************倒计时开始***********');
    const interval0 = setInterval(() => {
        const date = new Date();

        if (!hasStart && date.getHours() === hours && date.getMinutes() === minutes) {
            money();
            console.log('-------------------------start, doubao go !!!--------------------------');
            hasStart = true;
            clearInterval(interval0); 
        }
    }, 10)
}

startMoney(15, 59);