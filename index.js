let encryptMessage = () => {

  let mssg = document.querySelector('#mssg');
  let E_mssg = document.querySelector('#E_mssg');

  let Encrypted_Mssg = [];
  let Message = mssg.value;
  let splitedMessageArr = Message.split('');

  if (mssg.value != "") {
    mssg.value = '';
    for (let i = 0; i <= splitedMessageArr.length; i++) {
      switch (splitedMessageArr[i]) {
        case 'a':
          splitedMessageArr[i] = "¢";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'b':
          splitedMessageArr[i] = "₤";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'c':
          splitedMessageArr[i] = "§";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'd':
          splitedMessageArr[i] = "@";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'e':
          splitedMessageArr[i] = "₱";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'f':
          splitedMessageArr[i] = "£";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'g':
          splitedMessageArr[i] = "î";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'h':
          splitedMessageArr[i] = "š";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'i':
          splitedMessageArr[i] = "ä";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'j':
          splitedMessageArr[i] = "ī";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'k':
          splitedMessageArr[i] = "å";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'l':
          splitedMessageArr[i] = "λ";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'm':
          splitedMessageArr[i] = "μ";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'n':
          splitedMessageArr[i] = "ñ";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'o':
          splitedMessageArr[i] = "ø";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'p':
          splitedMessageArr[i] = "π";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'q':
          splitedMessageArr[i] = "Q";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'r':
          splitedMessageArr[i] = "R";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 's':
          splitedMessageArr[i] = "ß";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 't':
          splitedMessageArr[i] = "T";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'u':
          splitedMessageArr[i] = "û";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'v':
          splitedMessageArr[i] = "V";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'w':
          splitedMessageArr[i] = "W";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'x':
          splitedMessageArr[i] = "X";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'y':
          splitedMessageArr[i] = "¥";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;
        case 'z':
          splitedMessageArr[i] = "ž";
          Encrypted_Mssg.push(splitedMessageArr[i]);
          break;

        default:
          E_mssg.innerHTML = splitedMessageArr.join('');
        }
      }
      console.log(Encrypted_Mssg);
    }
  };
  let dencryptMessage = () => {

    let Emssg = document.querySelector('#mssg');
    let D_mssg = document.querySelector('#E_mssg');

    let Dencrypted_Mssg = [];
    let EMessage = Emssg.value;
    let splitedEncryptedMessageArr = EMessage.split('');

    if (Emssg.value != "") {
      Emssg.value = '';
      for (let i = 0; i <= splitedEncryptedMessageArr.length; i++) {
        switch (splitedEncryptedMessageArr[i]) {
        case '¢':
          splitedEncryptedMessageArr[i] = "a";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case '₤':
          splitedEncryptedMessageArr[i] = "b";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case '§':
          splitedEncryptedMessageArr[i] = "c";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case '@':
          splitedEncryptedMessageArr[i] = "d";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case '₱':
          splitedEncryptedMessageArr[i] = "e";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case '£':
          splitedEncryptedMessageArr[i] = "f";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'î':
          splitedEncryptedMessageArr[i] = "g";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'š':
          splitedEncryptedMessageArr[i] = "h";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'ä':
          splitedEncryptedMessageArr[i] = "i";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'ī':
          splitedEncryptedMessageArr[i] = "j";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'å':
          splitedEncryptedMessageArr[i] = "k";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'λ':
          splitedEncryptedMessageArr[i] = "l";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'μ':
          splitedEncryptedMessageArr[i] = "m";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'ñ':
          splitedEncryptedMessageArr[i] = "n";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'ø':
          splitedEncryptedMessageArr[i] = "o";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'π':
          splitedEncryptedMessageArr[i] = "p";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'Q':
          splitedEncryptedMessageArr[i] = "q";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'R':
          splitedEncryptedMessageArr[i] = "r";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'ß':
          splitedEncryptedMessageArr[i] = "s";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'T':
          splitedEncryptedMessageArr[i] = "t";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'û':
          splitedEncryptedMessageArr[i] = "u";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'V':
          splitedEncryptedMessageArr[i] = "v";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'W':
          splitedEncryptedMessageArr[i] = "w";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'X':
          splitedEncryptedMessageArr[i] = "x";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case '¥':
          splitedEncryptedMessageArr[i] = "y";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;
        case 'ž':
          splitedEncryptedMessageArr[i] = "z";
          Dencrypted_Mssg.push(splitedEncryptedMessageArr[i]);
          break;

        default:
          D_mssg.innerHTML = splitedEncryptedMessageArr.join('');
        }
      }
      console.log(Dencrypted_Mssg);
    }
  };