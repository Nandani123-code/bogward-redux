import axios from "axios";

function Theory() {
  //   setTimeout(() => {
  //     console.log("HELLO !");
  //   }, 2000);

  //   console.log("HELLO");

  //   console.log("HELLO 2");

  // examples of async operations
  // Fetching data, fileReading, etc

  // Promises
  // Promises are the way to resolve async operations systematically.
  // pending, resolved and rejected.

  const state = true;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === true) {
        resolve("RESOLVED");
      } else {
        reject("REJECTED sdfsdf sdf sdf ");
      }
    }, 1000);
  });

  /// .then and .catch
  //   promise.then((res) => console.log(res)).catch((err) => console.log(err));

  // async , awiat

  //   async function myFunc() {
  //     try {
  //       const res = await promise;
  //       console.log(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   myFunc();

  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));

  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => console.log(res.data));

  async function myFunc2() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  myFunc2();

  return <div></div>;
}

export default Theory;
