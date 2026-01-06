class OrderList{
    constructor(){
        this.data=[]
    }
    insert = function(item){
        var start=0, end=this.data.length;
        var mid, pos;
        while(start<=end){
            mid= Math.floor((start+end)/2);
            if(item == this.data[mid]){
                break;
            }
            else if(item <this.data[mid]){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
        pos = (start>end) ? start : mid;
        this.data.splice(pos, 0, item);
    }
    bSearch = function(item){
        var start=0, end=this.data.length;
        var mid;
        while(start<=end){
            mid= Math.floor((start+end)/2);
            if(item == this.data[mid]){
                return mid;
            }
            else if(item <this.data[mid]){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
        return -1;
    }
}
//
var myOrderList = new OrderList();
myOrderList.insert(9);
myOrderList.insert(19);
myOrderList.insert(2);
myOrderList.insert(13);
myOrderList.insert(5);
myOrderList.insert(15);
myOrderList.insert(6);
myOrderList.insert(8);
myOrderList.insert(11);
myOrderList.insert(7);
console.log("Binary Search: 20=>"+myOrderList.bSearch(20));
console.log("Binary Search: 13=>"+myOrderList.bSearch(13));