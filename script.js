  let name = prompt("Ismingiz nima ?");
  let lastName = prompt(name +" familiyangizni  kiriting ?");
  let year = prompt(name + " yilingizni kiriting ?")*1;
  let adress = prompt (name + " yashab turgan joyingizni kiriting ?");
  let seria = prompt(name + " pasport seriyangiz kiriting ?");
  let pnumber = prompt(name +" pasport raqamingiz kiriting ?");



confirm(`Ma'lumotlaringiz to'g'rimi: \n -${name} ${lastName} \n -Yoshingiz: ${"2022"-year} \n -Manzil: ${adress} \n -Paport: ${seria + pnumber}`);
