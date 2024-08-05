const returnFibonacci = (length = 13) => {
  const result = [0, 1];
  for (let i = 2; i < length; i++) {
    const newItem = result[i - 1] + result[i - 2];
    result.push(newItem);
  }
  return result;
};
console.log("returnFibonacci: ", returnFibonacci());

const checksPalindrome = (checkString = "") => {
  const strReverse = checkString.split("").reverse().join("");
  return strReverse === checkString;
};
console.log("checksPalindrome: ", checksPalindrome("level"));

const returnSortString = (str) => {
  return str
    .split("")
    .filter((x) => x !== " ")
    .sort()
    .join("");
};
const checksAnagram = (stringOne, stringTwo) => {
  const strOneSorted = returnSortString(stringOne);
  const strTwoSorted = returnSortString(stringTwo);
  return strOneSorted === strTwoSorted;
};
console.log("checksAnagram: ", checksAnagram("dormitory", "dirty room"));

const countsVowels = (string) => {
  const lstVowels = ["a", "e", "i", "o", "u", "y"];
  let count = 0;
  string.split("").forEach((char) => {
    if (lstVowels.includes(char.toLowerCase())) count += 1;
  });
  return count;
};
console.log("countsVowels: ", countsVowels("Simplify DaLat"));

const titleCase = (string) => {
  let strResult = string
    .toLowerCase()
    .split(" ")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");

  return strResult;
};
console.log("titleCase: ", titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

const convertTo24HrsFormat = (hrs) => {
  const period = hrs.slice(-2);
  hrs = hrs.slice(0, hrs.length - 2);
  let [hours, minutes] = hrs.split(":");
  const intHours = parseInt(hours);

  if (period === "PM" && intHours < 12) hours = intHours + 12;
  if (period === "AM" && intHours === 12) hours = 0;

  const newHrs =
    hours.toString().padStart(2, "0") + ":" + minutes.padStart(2, "0");
  return newHrs;
};
console.log("convertTo24HrsFormat: ", convertTo24HrsFormat("12:10AM"));

const mapDataToFrontendFormat = () => {
  const loc = [
    {
      location_key: [32, 22, 11],
      autoassign: 1,
    },
    {
      location_key: [41, 42],
      autoassign: 1,
    },
  ];

  const bulkConfig = [
    {
      dataValues: {
        config_key: 100,
      },
    },
    {
      dataValues: {
        config_key: 200,
      },
    },
  ];

  const lst_config_key = bulkConfig.map(
    (bulk_cf) => bulk_cf.dataValues.config_key
  );
  const result = [];
  loc.forEach((l) => {
    l.location_key.forEach((lct_key) => {
      lst_config_key.forEach((cf_key) => {
        const objRes = {
          config_key: cf_key,
          location_key: lct_key,
          autoassign: l.autoassign,
        };

        result.push(objRes);
      });
    });
  });

  return result;
};
console.log("mapDataToFrontendFormat: ", mapDataToFrontendFormat());

const replaceParamsInUrl = (url, dataReplace) => {
  const urlSplit = url.split("/");
  const result = urlSplit.map((urlS) => {
    if (urlS[0] === ":")
      return dataReplace.find((rpl) => rpl.from === urlS.slice(1)).to;
    else return urlS;
  });

  return result.join("/");
};
console.log(
  "replaceParamsInUrl: ",
  replaceParamsInUrl("/posts/:postId/comments/:commentId", [
    { from: "postId", to: "1" },
    { from: "commentId", to: "3" },
  ])
);

const formatBackendValidation = () => {
  const backendErrors = {
    email: {
      errors: [
        {
          message: "Can't be blank",
        },
      ],
    },
    password: {
      errors: [
        {
          message: "Must contain symbols in different case",
        },
        {
          message: "Must be at least 8 symbols length",
        },
      ],
    },
    passwordConfirmation: {
      errors: [
        {
          message: "Must match with password",
        },
      ],
    },
  };

  const result = Object.entries(backendErrors).map(([k, v]) => {
    const strRes =
      titleCase(k) + ": " + v.errors.map((err) => err.message).join(", ");
    return strRes;
  });

  return result;
};
console.log("formatBackendValidation: ", formatBackendValidation());
