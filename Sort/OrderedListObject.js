//name age tel
class OrderList{
    constructor(){
        this.data=[]
    }
    
    insert = function(item, key){
        var start=0, end=this.data.length;
        var mid, mItem, pos;
        while(start<=end){
            mid= Math.floor((start+end)/2);
            mItem = this.data[mid];
            if(mItem!=null && item[key] == mItem[key]){
                break;
            }
            else if(mItem!=null&& item[key] < mItem[key]){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }
        pos = (start>end) ? start : mid;
        this.data.splice(pos, 0, item);
    }
    bSearch = function(keyvalue, key){
        var start=0, end=this.data.length;
        var mid, mItem;
        while(start<=end){
            mid= Math.floor((start+end)/2);
            mItem=this.data[mid]
            if(mItem!=null && keyvalue == mItem[key]){
                return mid;
            }
            else if(mItem!=null && keyvalue <mItem[key]){
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
myOrderList.insert({name:"amy", age: 15, tel: 5500},"age");
myOrderList.insert({name:"bob", age: 17, tel: 5500},"age");
myOrderList.insert({name:"coby", age: 10, tel: 5500},"age");
myOrderList.insert({name:"durtson", age: 25, tel: 5500},"age");
myOrderList.insert({name:"elan", age: 31, tel: 5500},"age");
myOrderList.insert({name:"future", age: 29, tel: 5500},"age");
myOrderList.insert({name:"gibson", age: 11, tel: 5500},"age");
myOrderList.insert({name:"hellen", age: 12, tel: 5500},"age");
 
console.log("Binary Search: 20=>"+myOrderList.bSearch(20,"age"));
console.log("Binary Search: 12=>"+myOrderList.bSearch(12,"age"));