console.log("Hello world ... ");

nums = [1,2,3,4]

const printNums = () => {
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }   
}

const printString = (str) => {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

printNums();
