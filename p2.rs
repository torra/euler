fn main(){
    let mut curr = 1;
    let mut prev = 1;
    let mut sum = 0;
    while curr < 4000000 {
        if curr % 2 == 0 {
            sum += curr;
        }
        let next = curr + prev;
        prev = curr;
        curr = next;
    }
    println!("{}",sum);
}
