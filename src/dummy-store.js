const STORE = {
    "supermarkets": [
        {
            "id": 1,
            "supermarket_name": "Megamaxi (6 de Diciembre)",
            "supermarket_city": "Quito",
            "date_created": "2020-04-18T18:57:54.111Z"
        }
    ],

    "users": [
        {
            "id": 1,
            "email": "jd@choretastic.com",
            "password": "jd-password",
            "first_name": "Juan David",
            "last_name": "Nunez",
            "city": "Quito",
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 2,
            "email": "ivanka@choretastic.com",
            "password": "ivanka-password",
            "first_name": "Ivanna",
            "last_name": "Zauzich",
            "city": "Quito",
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 3,
            "email": "mashua@choretastic.com",
            "password": "mashua-password",
            "first_name": "Mashua",
            "last_name": "Lleina",
            "city": "Quito",
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 4,
            "email": "lilili@choretastic.com",
            "password": "lilili-password",
            "first_name": "Capuli",
            "last_name": "Llata",
            "city": "Quito",
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 5,
            "email": "pimienka@choretastic.com",
            "password": "pimienka-password",
            "first_name": "Pimienka",
            "last_name": "Zauria",
            "city": "Quito",
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 6,
            "email": "mashuo@choretastic.com",
            "password": "mashuo-password",
            "first_name": "Mashuo",
            "last_name": "Piundai",
            "city": "Quito",
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        }
    ],

    "item_list": [
        {
            "id": 1,
            "code": "MEGA0001",
            "product_name": "Sausages",
            "aisle": 2,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 2,
            "code": "MEGA0002",
            "product_name": "Fruit Loops",
            "aisle": 10,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 3,
            "code": "MEGA0003",
            "product_name": "Whiskas",
            "aisle": 5,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 4,
            "code": "MEGA0004",
            "product_name": "Oranges",
            "aisle": 4,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 5,
            "code": "MEGA0005",
            "product_name": "Apples",
            "aisle": 4,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 6,
            "code": "MEGA0006",
            "product_name": "Ham",
            "aisle": 2,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 7,
            "code": "MEGA0007",
            "product_name": "Shampoo",
            "aisle": 6,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 8,
            "code": "MEGA0008",
            "product_name": "Flour",
            "aisle": 7,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 9,
            "code": "MEGA0009",
            "product_name": "Beer",
            "aisle": 8,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 10,
            "code": "MEGA0010",
            "product_name": "Ice Cream",
            "aisle": 1,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 11,
            "code": "MEGA0011",
            "product_name": "Ground beef",
            "aisle": 9,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 12,
            "code": "MEGA0012",
            "product_name": "Chicken drums",
            "aisle": 9,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 13,
            "code": "MEGA0013",
            "product_name": "Frozen chicken fingers",
            "aisle": 1,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 14,
            "code": "MEGA0014",
            "product_name": "Red wine",
            "aisle": 8,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        }
    ],

    "shopping_list": [{
        "user_id": 1,
        "supermarket_id": 1,
        "list": [
          {
            "id": 9,
            "code": "MEGA0009",
            "product_name": "Beer",
            "aisle": 8,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 10,
            "code": "MEGA0010",
            "product_name": "Ice Cream",
            "aisle": 1,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 11,
            "code": "MEGA0011",
            "product_name": "Ground beef",
            "aisle": 9,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 12,
            "code": "MEGA0012",
            "product_name": "Chicken drums",
            "aisle": 9,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        ]
      },
      {
        "user_id": 2,
        "supermarket_id": 1,
        "list": [
          {
            "id": 9,
            "code": "MEGA0009",
            "product_name": "Beer",
            "aisle": 8,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 10,
            "code": "MEGA0010",
            "product_name": "Ice Cream",
            "aisle": 1,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 11,
            "code": "MEGA0011",
            "product_name": "Ground beef",
            "aisle": 9,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        {
            "id": 12,
            "code": "MEGA0012",
            "product_name": "Chicken drums",
            "aisle": 9,
            "supermarket_id": 1,
            "date_created": "2020-04-18T18:57:54.111Z"
        },
        ]
      }
    ]
}

export default STORE