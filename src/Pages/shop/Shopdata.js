const SHOP_DATA = [
    {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 35
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 25
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 18
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 18
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 14
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 16
            }
        ]
    },
    {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
            {
                id: 11,
                name: 'Adidas NMD',
                imageUrl: [
                    { "id": 1, "image": 'https://i.ibb.co/0s3pdnc/adidas-nmd.png' },
                    { "id": 2, "image": 'https://i.ibb.co/dJbG1cT/yeezy.png' }
                ],
                price: 220
            },
            {
                id: 12,
                name: 'Adidas Yeezy',
                imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                price: 280
            },
            {
                id: 13,
                name: 'Black Converse',
                imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                price: 110
            },
            {
                id: 14,
                name: 'Nike White AirForce',
                imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                price: 160
            },
            {
                id: 15,
                name: 'Nike Red High Tops',
                imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                price: 160
            },
            {
                id: 16,
                name: 'Nike Brown High Tops',
                imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
                price: 160
            },
            {
                id: 17,
                name: 'Air Jordan Limited',
                imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                price: 190
            },
            {
                id: 18,
                name: 'Timberlands',
                imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                price: 200
            }
        ]
    },
    {
        id: 3,
        title: 'SWEATERS',
        routeName: 'sweaters',
        items: [
            {
                id: 20,
                name: 'Brown Shearling',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/KkpAx1E.jpgg' },
                    { "id": 2, "image": 'https://i.imgur.com/dWbkjJD.jpg' }
                ],
                price: 165
            },

            {
                id: 21,
                name: 'Black Jean Shearling',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/DK7Axbm.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/gqGmC6B.jpg' }
                ],
                price: 125
            },
            {
                id: 22,
                name: 'Blue Jean Jacket',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/nkLCaWB.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/HQq1cQS.jpg' }
                ],
                price: 90
            },
            {
                id: 23,
                name: 'Grey Jean Jacket',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/YsuBc6z.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/TSJMMOp.jpg' }
                ],
                price: 90
            },
            {
                id: 25,
                name: 'Tan Trench',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/jEnPBD5.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/BfVrxjr.jpg' }
                ],
                price: 185
            },
            {
                id: 26,
                name: 'Tan Trench',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/CGDlRcg.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/rRHN7R7.jpg' }
                ],
                price: 185
            },
            {
                id: 27,
                name: 'Tan Trench',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/eq7NFCb.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/qxeKgQM.jpg' }
                ],
                price: 185
            },
            {
                id: 28,
                name: 'Tan Trench',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/3oc3bRi.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/Pw9QSWs.jpg' }
                ],
                price: 185
            },
            {
                id: 29,
                name: 'Tan Trench',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/bGCAXK8.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/McA4GHI.jpg' }
                ],
                price: 185
            },
            {
                id: 200,
                name: 'Black Jean Shearling',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/xvD4Ans.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/nStnvth.jpg' }
                ],
                price: 125
            },
            {
                id: 201,
                name: 'Tan Trench',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/sZEvTXS.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/Ci8LoVt.jpg' }
                ],
                price: 185
            },
            {
                id: 202,
                name: 'Tan Trench',
                imageUrl: [
                    { "id": 1, "image": 'https://i.imgur.com/1oyPvfT.jpg' },
                    { "id": 2, "image": 'https://i.imgur.com/0aljnnP.jpg    ' }
                ],
                price: 185
            }
        ]
    },
    {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: [
            {
                id: 31,
                name: 'Blue Tanktop',
                imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                price: 25
            },
            {
                id: 32,
                name: 'Floral Blouse',
                imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                price: 20
            },
            {
                id: 33,
                name: 'Floral Dress',
                imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                price: 80
            },
            {
                id: 34,
                name: 'Red Dots Dress',
                imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                price: 80
            },
            {
                id: 35,
                name: 'Striped Sweater',
                imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                price: 45
            },
            {
                id: 36,
                name: 'Yellow Track Suit',
                imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                price: 135
            },
            {
                id: 37,
                name: 'White Blouse',
                imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                price: 20
            }
        ]
    },
    {
        id: 5,
        title: 'Mens',
        routeName: 'mens',
        items: [
            {
                id: 41,
                name: 'Camo Down Vest',
                imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                price: 325
            },
            {
                id: 42,
                name: 'Floral T-shirt',
                imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                price: 20
            },
            {
                id: 43,
                name: 'Black & White Longsleeve',
                imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                price: 25
            },
            {
                id: 44,
                name: 'Pink T-shirt',
                imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                price: 25
            },
            {
                id: 45,
                name: 'Jean Long Sleeve',
                imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                price: 40
            },
            {
                id: 46,
                name: 'Burgundy T-shirt',
                imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                price: 25
            }
        ]
    }
]

export default SHOP_DATA;