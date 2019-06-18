let hasClickConfim = false;

// 点击立即购买之后，重新打开了一个新的页面，这段脚本不会自动执行。如何才能让它自动执行呢？
const interval2 = setInterval(() => {
    const $confirmBuy = document.querySelector('.go-btn');

    if (!hasClickConfim && $confirmBuy) {
        $confirmBuy.click();
        console.log('------------------------has click $confirmBuy--------------------');
        hasClickConfim = true;
        clearInterval(interval2);
    }
}, 10);
