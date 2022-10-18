export async function run(target) {
  console.log(target);
  const data = {
    "test": "test",
    "data": [
      {
        "id": "1",
        "name": "test",
        "description": "test",
        "price": "100",
        "currency": "USD",
        "image": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      },
      {
        "id": "2",
        "name": "test",
        "description": "test",
        "price": "100",
        "currency": "USD",
        "image": ""
      }
    ]
  }

  return data
}