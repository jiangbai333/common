//̫�����⣬����ȫ�㷨����Ҫ�Ż�
// ���������д���
//$a = array(2,6,8,10,30,30,50,50,60,100);  
//$b = array(0,1,2,3,4,6,6,7,7,8);
var start = +new Date();
var arr1 = new Array(),
    arr2 = new Array(),
    sum = 0,
    rtSum = 0;

for (let i = 0; i < 10000; i++) {
    arr1.push(~~( Math.random() * ( 1 << 5 ) + 1 ));
    arr2.push(~~( Math.random() * ( 1 << 5 ) + 1 ));
}

arr3 = (arr1.concat(arr2)).sort(function sortNumber(a, b) {
    return b - a
})

var rt = new Array();
rt.push(arr3.pop());
rtSum = rt[0];

sum = (function(d) {
    var sum = 0;
    for (var o in d) {
        sum += d[o];
    }
    return sum;
})(arr3);

while(arr3.length) {
    var dataf = arr3[0], datal = arr3[arr3.length - 1];
    if ( (sum - dataf) > (rtSum + dataf) ) {
        sum -= dataf;
        rtSum += dataf;
        arr3.shift();
        rt.push(dataf);
    } else if ( (sum - datal) > (rtSum + datal) ) {
        sum -= datal;
        rtSum += datal;
        arr3.pop();
        rt.push(datal);
    } else {
        break;
    }
}

console.log("ԭʼ���飺", arr1, arr2);
console.log("�����飺", arr3, rt);
console.log("������ͣ�sum(arr3) = " + (function(d) {
    var sum = 0;
    for (var o in d) {
        sum += d[o];
    }
    return sum;
})(arr3) + "----sum(rt)=" + (function(d) {
    var sum = 0;
    for (var o in d) {
        sum += d[o];
    }
    return sum;
})(rt));
console.log("ÿ������1�����ݣ���ʱ��", (+new Date() - start)/1000, "��");