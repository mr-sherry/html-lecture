// for loop , while loop , do while loop

// for loop
// for (let i = 10; i <= 20; i++) {
//   console.log("kkka", i);
//   if (i === 16) {
//     break;
//   }
// }

// for loop
for (let i = 10; i <= 20; i++) {
  if (i === 16) {
    continue;
  }
  //   console.log("kkka", i);
}

// for (let index = 0; index <= 10; index++) {
//   console.log(index);
//   for (let index2 = 11; index2 <= 20; index2++) {
//     console.log("innerloop", index2);
//   }
// }

//while loop
// let user = false;
// let a = 0;
// while (user === true) {
//   console.log(a);
//   a++;
// }

// //do while loop

// do {
//   console.log(a);
//   a++;
//   console.log(a);
// } while (user === true);

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}

const students = [
  {
    name: "Ali Khan",
    rollNumber: 101,
    result: "Pass",
    books: [1001, 1002, 1003, 1004, 1005],
  },
  {
    name: "Sara Ahmed",
    rollNumber: 102,
    result: "Pass",
    books: [1006, 1007, 1008, 1009, 1010],
  },
  {
    name: "Bilal Hussain",
    rollNumber: 103,
    result: "Fail",
    books: [1011, 1012, 1013, 1014, 1015],
  },
  {
    name: "Ayesha Noor",
    rollNumber: 104,
    result: "Pass",
    books: [1016, 1017, 1018, 1019, 1020],
  },
  {
    name: "Omar Farooq",
    rollNumber: 105,
    result: "Pass",
    books: [1021, 1022, 1023, 1024, 1025],
  },
  {
    name: "Hina Malik",
    rollNumber: 106,
    result: "Fail",
    books: [1026, 1027, 1028, 1029, 1030],
  },
  {
    name: "Usman Raza",
    rollNumber: 107,
    result: "Pass",
    books: [1031, 1032, 1033, 1034, 1035],
  },
  {
    name: "Fatima Ali",
    rollNumber: 108,
    result: "Pass",
    books: [1036, 1037, 1038, 1039, 1040],
  },
  {
    name: "Hamza Tariq",
    rollNumber: 109,
    result: "Fail",
    books: [1041, 1042, 1043, 1044, 1045],
  },
  {
    name: "Maryam Iqbal",
    rollNumber: 110,
    result: "Pass",
    books: [1046, 1047, 1048, 1049, 1050],
  },
  {
    name: "Zainab Ahmed",
    rollNumber: 111,
    result: "Pass",
    books: [1051, 1052, 1053, 1054, 1055],
  },
  {
    name: "Saad Ali",
    rollNumber: 112,
    result: "Fail",
    books: [1056, 1057, 1058, 1059, 1060],
  },
  {
    name: "Khadija Bibi",
    rollNumber: 113,
    result: "Pass",
    books: [1061, 1062, 1063, 1064, 1065],
  },
  {
    name: "Ahmed Raza",
    rollNumber: 114,
    result: "Fail",
    books: [1066, 1067, 1068, 1069, 1070],
  },
  {
    name: "Fiza Khan",
    rollNumber: 115,
    result: "Pass",
    books: [1071, 1072, 1073, 1074, 1075],
  },
  {
    name: "Hassan Ali",
    rollNumber: 116,
    result: "Fail",
    books: [1076, 1077, 1078, 1079, 1080],
  },
  {
    name: "Sana Fatima",
    rollNumber: 117,
    result: "Pass",
    books: [1081, 1082, 1083, 1084, 1085],
  },
  {
    name: "Ali Hamza",
    rollNumber: 118,
    result: "Fail",
    books: [1086, 1087, 1088, 1089, 1090],
  },
  {
    name: "Arooj Ahmed",
    rollNumber: 119,
    result: "Pass",
    books: [1091, 1092, 1093, 1094, 1095],
  },
  {
    name: "Bilal Khan",
    rollNumber: 120,
    result: "Fail",
    books: [1096, 1097, 1098, 1099, 1100],
  },
];

// output = roll No: 104: total marks: 5019
