import { faker } from "@faker-js/faker";

let data = [
  {
    city: "Boston",
    for1: "45.7M",
    for2: "65",
  },
  {
    city: "Gurgaon",
    for1: "79.2T",
    for2: "32",
  },
  {
    city: "City3",
    for1: "580.2M",
    for2: "83",
  },
  {
    city: "City4",
    for1: "49.7M",
    for2: "35",
  },
  {
    city: "City5",
    for1: "15.7M",
    for2: "14",
  },
  {
    city: "City6",
    for1: "29K",
    for2: "78",
  },
  {
    city: "City7",
    for1: "422M",
    for2: "13",
  },
  {
    city: "City8",
    for1: "43K",
    for2: "54",
  },
  {
    city: "City9",
    for1: "113M",
    for2: "47",
  },
];

faker.seed(1);

const generateDataArr = () => {
  let arr = [];
  for (let i = 0; i < 12; i++) {
    arr.push(
      faker.finance.amount({
        min: 300000,
        max: 870000,
        dec: 0,
        autoFormat: true,
      })
    );
  }
  return arr;
};

for (let i = 0; i < data.length; i++) {
  data[i]["stackId"] = faker.finance.accountNumber({ length: 12 });
  data[i]["consumptionData"] = generateDataArr();
  data[i]["aiFData"] = generateDataArr();
  data[i]["finalFData"] = generateDataArr();
}

export { data };
