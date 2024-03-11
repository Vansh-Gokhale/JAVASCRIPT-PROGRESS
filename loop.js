let sum = 0, a = 1;  
outerloop: while (true) {  
    a = 1;  
    innerloop: while (a < 3) {  
        sum += a;  
        if (sum > 12) {  
            break outerloop;  
        }  
        console.log("sum = " + sum);  
        a++;  
    }  
}

//the following code will execute sum from sum=1 to sum=12