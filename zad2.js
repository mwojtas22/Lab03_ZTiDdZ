function bezpieczneHaslo() {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "0123456789";
    let special = "!#$%&*+-=?@^_";
    let all = upper + lower + number + special;
    let password = "";

    for (let i = 0; i < 8; i++) {
        password += all.charAt(Math.floor(Math.random() * all.length));
    }

    return password;
}

console.log(bezpieczneHaslo());