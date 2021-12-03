fn main() {
    println!("Hello, world!");
    generator(34);
    loopes(12);
}


//generator funcor
fn generator(params : i32){
    if params > 5{
        println!("greater than bro")
    }
    else{
        println!("oops s,all")
    }
    println!("another banger {}", params);
}

fn loopes(mut number : i64){
    while number != 0{
        println!("the number isss {}", number);
        number = number -1;
    }
}