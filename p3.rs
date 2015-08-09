
fn main(){
    let val = 600851475143;
    let val_isqrt = (val as f64).sqrt() as usize + 1;
    // println!("size: {}",val_isqrt);
    let mut vals = vec![true; val_isqrt];
    for i in 2..val_isqrt {
        // println!("val {}",i);
        if vals[i] {
            // println!("oth {}",(val_isqrt/i) as usize);
            for j in 2..( (val_isqrt/i) as usize + 1) {
                let ind = j*i;
                // println!("ind {}",ind);
                if ind < val_isqrt {
                    vals[ind] = false;
                }
            }
        }
    }

    let mut it = vals.len() - 1;
    loop {
        if vals[it] && val % it == 0 {
            println!("{}",it);
            break;
        }
        it = it-1;
    }
}
