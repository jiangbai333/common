/**
 * 如果(a, b, c)满足 a*x + b*y = c 则输出 "yes" 否则输出 "no"
 */
function t(a, b, c) {
    for (x=0; ; x++){
        if ( (c - a*x) % b == 0 ) {
            console.log("yes", a + "*" + x + "+" + b + "*" + (c - a*x) / b + "=" + c);
            break;
        } else if( (c - a*x)  < (b+1) && (c - a*x) % a !==0) {
            console.log("no", "循环次数" + x);
            break;
        }
    }
}

t(6, 11, 5); //yes
