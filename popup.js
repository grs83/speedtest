let loc = 91206
let radius = 30
const tempData = [
        {
            "Id": 3034814,
            "Date": "2018-08-03T00:00:00",
            "Venue": {
                "Id": 331,
                "Name": "Staples Center",
                "Address": "1111 S. Figueroa Street",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90015",
                "Url": "http://www.staplescenter.com/",
                "Latitude": 34.046579,
                "Longitude": -118.26249
            },
            "Artists": [
                {
                    "Id": 62127,
                    "Name": "Shania Twain"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Faxs.com%2Fevents%2F341266%2Fshania-twain-tickets%3Fskin%3Dstaples"
        },
        {
            "Id": 3091195,
            "Date": "2018-08-03T00:00:00",
            "Venue": {
                "Id": 26254,
                "Name": "Whisky A Go Go",
                "Address": "8901 W Sunset Blvd",
                "City": "West Hollywood",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90069",
                "Url": "http://www.whiskyagogo.com",
                "Latitude": 34.09821,
                "Longitude": -118.37222
            },
            "Artists": [
                {
                    "Id": 42041,
                    "Name": "Sponge"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=https%3A%2F%2Fwww.ticketweb.com%2Fevent%2Fsponge-whisky-a-go-go-tickets%2F7945055%3FREFERRAL_ID%3Dtmfeed"
        },
        {
            "Id": 3107511,
            "Date": "2018-08-03T00:00:00",
            "Venue": {
                "Id": 157166,
                "Name": "The Rose",
                "Address": "245 East Green Street",
                "City": "Pasadena",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "91101",
                "Url": "",
                "Latitude": 0,
                "Longitude": 0
            },
            "Artists": [
                {
                    "Id": 84264,
                    "Name": "Gino Vannelli"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Fgino-vannelli-pasadena-california-08-03-2018%2Fevent%2F09005437D1C78317"
        },
        {
            "Id": 3077989,
            "Date": "2018-08-04T00:00:00",
            "Venue": {
                "Id": 16838,
                "Name": "The Forum",
                "Address": "3900 West Manchester Boulevard ",
                "City": "Inglewood",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90301",
                "Url": "http://www.thelaforum.com",
                "Latitude": 33.959725,
                "Longitude": -118.340572
            },
            "Artists": [
                {
                    "Id": 95441,
                    "Name": "Jeff Lynne's ELO"
                }
            ],
            "TicketUrl": ""
        },
        {
            "Id": 3086323,
            "Date": "2018-08-05T00:00:00",
            "Venue": {
                "Id": 16838,
                "Name": "The Forum",
                "Address": "3900 West Manchester Boulevard ",
                "City": "Inglewood",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90301",
                "Url": "http://www.thelaforum.com",
                "Latitude": 33.959725,
                "Longitude": -118.340572
            },
            "Artists": [
                {
                    "Id": 95441,
                    "Name": "Jeff Lynne's ELO"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Fjeff-lynnes-elo-inglewood-california-08-05-2018%2Fevent%2F0900536D0EDE6F1F"
        },
        {
            "Id": 3049164,
            "Date": "2018-08-05T00:00:00",
            "Venue": {
                "Id": 161925,
                "Name": "FivePoint Amphitheatre",
                "Address": "14800 Chinon",
                "City": "Irvine",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "92618",
                "Url": "",
                "Latitude": 0,
                "Longitude": 0
            },
            "Artists": [
                {
                    "Id": 113724,
                    "Name": "Maren Morris"
                },
                {
                    "Id": 118343,
                    "Name": "Niall Horan"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Flivemu.sc%2FMarenMorris-Irvine"
        },
        {
            "Id": 3049181,
            "Date": "2018-08-07T00:00:00",
            "Venue": {
                "Id": 3150,
                "Name": "Greek Theatre",
                "Address": "2700 N. Vermont",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90027",
                "Url": "http://www.greektheatrela.com/",
                "Latitude": 34.117262,
                "Longitude": -118.291566
            },
            "Artists": [
                {
                    "Id": 113724,
                    "Name": "Maren Morris"
                },
                {
                    "Id": 118343,
                    "Name": "Niall Horan"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Flivemu.sc%2FMarenMorris-LosAngeles"
        },
        {
            "Id": 3051688,
            "Date": "2018-08-08T00:00:00",
            "Venue": {
                "Id": 3150,
                "Name": "Greek Theatre",
                "Address": "2700 N. Vermont",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90027",
                "Url": "http://www.greektheatrela.com/",
                "Latitude": 34.117262,
                "Longitude": -118.291566
            },
            "Artists": [
                {
                    "Id": 113724,
                    "Name": "Maren Morris"
                },
                {
                    "Id": 118343,
                    "Name": "Niall Horan"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Flivemu.sc%2FMarenMorris-LosAngeles2"
        },
        {
            "Id": 3092974,
            "Date": "2018-08-08T00:00:00",
            "Venue": {
                "Id": 16838,
                "Name": "The Forum",
                "Address": "3900 West Manchester Boulevard ",
                "City": "Inglewood",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90301",
                "Url": "http://www.thelaforum.com",
                "Latitude": 33.959725,
                "Longitude": -118.340572
            },
            "Artists": [
                {
                    "Id": 10166,
                    "Name": "Weezer"
                },
                {
                    "Id": 23652,
                    "Name": "Pixies"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Fweezer-pixies-inglewood-california-08-08-2018%2Fevent%2F0900538CD3FD265E"
        },
        {
            "Id": 3097796,
            "Date": "2018-08-08T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622308/tfly?utm_medium=api"
        },
        {
            "Id": 3092836,
            "Date": "2018-08-14T00:00:00",
            "Venue": {
                "Id": 3150,
                "Name": "Greek Theatre",
                "Address": "2700 N. Vermont",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90027",
                "Url": "http://www.greektheatrela.com/",
                "Latitude": 34.117262,
                "Longitude": -118.291566
            },
            "Artists": [
                {
                    "Id": 96737,
                    "Name": "Charlie Puth"
                },
                {
                    "Id": 112855,
                    "Name": "Hailee Steinfeld"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Flivemu.sc%2FCharliePuth-LosAngeles"
        },
        {
            "Id": 3104436,
            "Date": "2018-08-15T00:00:00",
            "Venue": {
                "Id": 3150,
                "Name": "Greek Theatre",
                "Address": "2700 N. Vermont",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90027",
                "Url": "http://www.greektheatrela.com/",
                "Latitude": 34.117262,
                "Longitude": -118.291566
            },
            "Artists": [
                {
                    "Id": 60501,
                    "Name": "Nathaniel Rateliff & the Night Sweats"
                }
            ],
            "TicketUrl": ""
        },
        {
            "Id": 3092829,
            "Date": "2018-08-15T00:00:00",
            "Venue": {
                "Id": 161925,
                "Name": "FivePoint Amphitheatre",
                "Address": "14800 Chinon",
                "City": "Irvine",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "92618",
                "Url": "",
                "Latitude": 0,
                "Longitude": 0
            },
            "Artists": [
                {
                    "Id": 96737,
                    "Name": "Charlie Puth"
                },
                {
                    "Id": 112855,
                    "Name": "Hailee Steinfeld"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fconcerts.livenation.com%2Fevent%2F0900538D853815A0"
        },
        {
            "Id": 3097797,
            "Date": "2018-08-15T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622309/tfly?utm_medium=api"
        },
        {
            "Id": 3052980,
            "Date": "2018-08-18T00:00:00",
            "Venue": {
                "Id": 26059,
                "Name": "The Rose Bowl",
                "Address": "1001 Rose Bowl Dr.",
                "City": "Pasadena",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "91103",
                "Url": "http://www.rosebowlstadium.com",
                "Latitude": 0,
                "Longitude": 0
            },
            "Artists": [
                {
                    "Id": 91762,
                    "Name": "Ed Sheeran"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Fevent%2F0B005334B5703868"
        },
        {
            "Id": 3097798,
            "Date": "2018-08-22T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622310/tfly?utm_medium=api"
        },
        {
            "Id": 3104997,
            "Date": "2018-08-24T00:00:00",
            "Venue": {
                "Id": 161925,
                "Name": "FivePoint Amphitheatre",
                "Address": "14800 Chinon",
                "City": "Irvine",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "92618",
                "Url": "",
                "Latitude": 0,
                "Longitude": 0
            },
            "Artists": [
                {
                    "Id": 49597,
                    "Name": "Lady Antebellum "
                },
                {
                    "Id": 57374,
                    "Name": "Darius Rucker"
                },
                {
                    "Id": 118176,
                    "Name": "Russell Dickerson"
                }
            ],
            "TicketUrl": ""
        },
        {
            "Id": 3108446,
            "Date": "2018-08-25T00:00:00",
            "Venue": {
                "Id": 7011,
                "Name": "The Wiltern",
                "Address": "3790 Wilshire Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90010",
                "Url": "http://www.livenation.com/venues/14361/the-wiltern",
                "Latitude": 34.06191,
                "Longitude": -118.308992
            },
            "Artists": [
                {
                    "Id": 28737,
                    "Name": "Erasure"
                },
                {
                    "Id": 128462,
                    "Name": "Reed & Caroline"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fconcerts.livenation.com%2Fevent%2F09005438AFCC3A0F"
        },
        {
            "Id": 3105243,
            "Date": "2018-08-26T00:00:00",
            "Venue": {
                "Id": 7011,
                "Name": "The Wiltern",
                "Address": "3790 Wilshire Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90010",
                "Url": "http://www.livenation.com/venues/14361/the-wiltern",
                "Latitude": 34.06191,
                "Longitude": -118.308992
            },
            "Artists": [
                {
                    "Id": 28737,
                    "Name": "Erasure"
                },
                {
                    "Id": 128462,
                    "Name": "Reed & Caroline"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fconcerts.livenation.com%2Fevent%2F09005431E9EBA5C7"
        },
        {
            "Id": 3057894,
            "Date": "2018-08-28T00:00:00",
            "Venue": {
                "Id": 331,
                "Name": "Staples Center",
                "Address": "1111 S. Figueroa Street",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90015",
                "Url": "http://www.staplescenter.com/",
                "Latitude": 34.046579,
                "Longitude": -118.26249
            },
            "Artists": [
                {
                    "Id": 45257,
                    "Name": "Sam Smith"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Faxs.com%2Fevents%2F344159%2Fsam-smith-tickets%3Fskin%3Dstaples"
        },
        {
            "Id": 3095809,
            "Date": "2018-08-28T00:00:00",
            "Venue": {
                "Id": 16838,
                "Name": "The Forum",
                "Address": "3900 West Manchester Boulevard ",
                "City": "Inglewood",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90301",
                "Url": "http://www.thelaforum.com",
                "Latitude": 33.959725,
                "Longitude": -118.340572
            },
            "Artists": [
                {
                    "Id": 44449,
                    "Name": "Shakira"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Fshakira-el-dorado-world-tour-inglewood-california-08-28-2018%2Fevent%2F090052D412363FF5"
        },
        {
            "Id": 3057895,
            "Date": "2018-08-29T00:00:00",
            "Venue": {
                "Id": 331,
                "Name": "Staples Center",
                "Address": "1111 S. Figueroa Street",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90015",
                "Url": "http://www.staplescenter.com/",
                "Latitude": 34.046579,
                "Longitude": -118.26249
            },
            "Artists": [
                {
                    "Id": 45257,
                    "Name": "Sam Smith"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Faxs.com%2Fevents%2F344161%2Fsam-smith-tickets%3Fskin%3Dstaples"
        },
        {
            "Id": 3097799,
            "Date": "2018-08-29T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622312/tfly?utm_medium=api"
        },
        {
            "Id": 3095805,
            "Date": "2018-08-31T00:00:00",
            "Venue": {
                "Id": 332,
                "Name": "Honda Center",
                "Address": "2695 E. Katella Avenue",
                "City": "Anaheim",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "92806",
                "Url": "http://www.hondacenter.com/",
                "Latitude": 33.806335,
                "Longitude": -117.875851
            },
            "Artists": [
                {
                    "Id": 44449,
                    "Name": "Shakira"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Fshakira-el-dorado-world-tour-anaheim-california-08-31-2018%2Fevent%2F090052D0C4B265C8"
        },
        {
            "Id": 3097800,
            "Date": "2018-09-05T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622313/tfly?utm_medium=api"
        },
        {
            "Id": 3101026,
            "Date": "2018-09-06T00:00:00",
            "Venue": {
                "Id": 16597,
                "Name": "Los Angeles County Fairgrounds",
                "Address": "1101 West McKinley",
                "City": "Pomona",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "91768",
                "Url": "http://www.fairplex.com/",
                "Latitude": 34.080909,
                "Longitude": -117.76679
            },
            "Artists": [
                {
                    "Id": 36462,
                    "Name": "A Flock Of Seagulls"
                },
                {
                    "Id": 55061,
                    "Name": "The Motels"
                },
                {
                    "Id": 64340,
                    "Name": "Wang Chung"
                },
                {
                    "Id": 87302,
                    "Name": "Men Without Hats"
                },
                {
                    "Id": 109041,
                    "Name": "Missing Persons"
                },
                {
                    "Id": 128403,
                    "Name": "Animotion"
                },
                {
                    "Id": 128404,
                    "Name": "Farrington & Mann"
                }
            ],
            "TicketUrl": ""
        },
        {
            "Id": 3082514,
            "Date": "2018-09-08T00:00:00",
            "Venue": {
                "Id": 11580,
                "Name": "Hollywood Palladium",
                "Address": "6215 Sunset Boulevard",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90002",
                "Url": "http://www.ticketmaster.com/venue/73794",
                "Latitude": 34.098009,
                "Longitude": -118.324499
            },
            "Artists": [
                {
                    "Id": 52999,
                    "Name": "Helloween"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fconcerts.livenation.com%2Fevent%2F09005353972C2A3F"
        },
        {
            "Id": 3054106,
            "Date": "2018-09-09T00:00:00",
            "Venue": {
                "Id": 16838,
                "Name": "The Forum",
                "Address": "3900 West Manchester Boulevard ",
                "City": "Inglewood",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90301",
                "Url": "http://www.thelaforum.com",
                "Latitude": 33.959725,
                "Longitude": -118.340572
            },
            "Artists": [
                {
                    "Id": 117648,
                    "Name": "Ramin Djawadi"
                },
                {
                    "Id": 125490,
                    "Name": "Game Of Thrones Live Concert Experience"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Fevent%2F090053371F338647"
        },
        {
            "Id": 3102973,
            "Date": "2018-09-10T00:00:00",
            "Venue": {
                "Id": 117,
                "Name": "Hollywood Bowl",
                "Address": "2301 N Highland Ave",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90068",
                "Url": "http://www.hollywoodbowl.com/",
                "Latitude": 34.081809,
                "Longitude": -118.33851
            },
            "Artists": [
                {
                    "Id": 1032,
                    "Name": "Dave Matthews Band"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Fdave-matthews-band-hollywood-california-09-10-2018%2Fevent%2F0B005428D66D3F9E"
        },
        {
            "Id": 3097801,
            "Date": "2018-09-12T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622315/tfly?utm_medium=api"
        },
        {
            "Id": 3108495,
            "Date": "2018-09-14T00:00:00",
            "Venue": {
                "Id": 331,
                "Name": "Staples Center",
                "Address": "1111 S. Figueroa Street",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90015",
                "Url": "http://www.staplescenter.com/",
                "Latitude": 34.046579,
                "Longitude": -118.26249
            },
            "Artists": [
                {
                    "Id": 35570,
                    "Name": "Train"
                },
                {
                    "Id": 35583,
                    "Name": "Daryl Hall & John Oates"
                }
            ],
            "TicketUrl": ""
        },
        {
            "Id": 3108496,
            "Date": "2018-09-15T00:00:00",
            "Venue": {
                "Id": 331,
                "Name": "Staples Center",
                "Address": "1111 S. Figueroa Street",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90015",
                "Url": "http://www.staplescenter.com/",
                "Latitude": 34.046579,
                "Longitude": -118.26249
            },
            "Artists": [
                {
                    "Id": 35570,
                    "Name": "Train"
                },
                {
                    "Id": 35583,
                    "Name": "Daryl Hall & John Oates"
                }
            ],
            "TicketUrl": ""
        },
        {
            "Id": 3097802,
            "Date": "2018-09-19T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622316/tfly?utm_medium=api"
        },
        {
            "Id": 3097803,
            "Date": "2018-09-26T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622318/tfly?utm_medium=api"
        },
        {
            "Id": 3105779,
            "Date": "2018-09-29T00:00:00",
            "Venue": {
                "Id": 332,
                "Name": "Honda Center",
                "Address": "2695 E. Katella Avenue",
                "City": "Anaheim",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "92806",
                "Url": "http://www.hondacenter.com/",
                "Latitude": 33.806335,
                "Longitude": -117.875851
            },
            "Artists": [
                {
                    "Id": 13619,
                    "Name": "Machine Gun Kelly"
                },
                {
                    "Id": 37030,
                    "Name": "Fall Out Boy"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Ffall-out-boy-the-m-a-anaheim-california-09-29-2018%2Fevent%2F09005432AA963A69"
        },
        {
            "Id": 3097804,
            "Date": "2018-10-03T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622324/tfly?utm_medium=api"
        },
        {
            "Id": 3105146,
            "Date": "2018-10-06T00:00:00",
            "Venue": {
                "Id": 16838,
                "Name": "The Forum",
                "Address": "3900 West Manchester Boulevard ",
                "City": "Inglewood",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90301",
                "Url": "http://www.thelaforum.com",
                "Latitude": 33.959725,
                "Longitude": -118.340572
            },
            "Artists": [
                {
                    "Id": 37687,
                    "Name": "Def Leppard"
                },
                {
                    "Id": 37688,
                    "Name": "Journey"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Fjourney-def-leppard-inglewood-california-10-06-2018%2Fevent%2F090054310F8EBBB2"
        },
        {
            "Id": 3085235,
            "Date": "2018-10-06T00:00:00",
            "Venue": {
                "Id": 157166,
                "Name": "The Rose",
                "Address": "245 East Green Street",
                "City": "Pasadena",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "91101",
                "Url": "",
                "Latitude": 0,
                "Longitude": 0
            },
            "Artists": [
                {
                    "Id": 37920,
                    "Name": "Hiroshima"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=http%3A%2F%2Fwww.ticketmaster.com%2Fhiroshima-pasadena-california-10-06-2018%2Fevent%2F0900537DD307484C"
        },
        {
            "Id": 3097805,
            "Date": "2018-10-10T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622325/tfly?utm_medium=api"
        },
        {
            "Id": 3097806,
            "Date": "2018-10-17T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622326/tfly?utm_medium=api"
        },
        {
            "Id": 3097807,
            "Date": "2018-10-24T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622328/tfly?utm_medium=api"
        },
        {
            "Id": 3090390,
            "Date": "2018-10-31T00:00:00",
            "Venue": {
                "Id": 26254,
                "Name": "Whisky A Go Go",
                "Address": "8901 W Sunset Blvd",
                "City": "West Hollywood",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90069",
                "Url": "http://www.whiskyagogo.com",
                "Latitude": 34.09821,
                "Longitude": -118.37222
            },
            "Artists": [
                {
                    "Id": 66097,
                    "Name": "Stryper"
                }
            ],
            "TicketUrl": "http://ticketmaster.evyy.net/c/252938/264167/4272?u=https%3A%2F%2Fwww.ticketweb.com%2Fevent%2Fstryper-whisky-a-go-go-tickets%2F7940545%3FREFERRAL_ID%3Dtmfeed"
        },
        {
            "Id": 3097808,
            "Date": "2018-10-31T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622329/tfly?utm_medium=api"
        },
        {
            "Id": 3097809,
            "Date": "2018-11-07T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622330/tfly?utm_medium=api"
        },
        {
            "Id": 3097810,
            "Date": "2018-11-14T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622332/tfly?utm_medium=api"
        },
        {
            "Id": 3097811,
            "Date": "2018-11-21T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622333/tfly?utm_medium=api"
        },
        {
            "Id": 3097812,
            "Date": "2018-11-28T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622335/tfly?utm_medium=api"
        },
        {
            "Id": 3097813,
            "Date": "2018-12-05T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622336/tfly?utm_medium=api"
        },
        {
            "Id": 3097814,
            "Date": "2018-12-12T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622337/tfly?utm_medium=api"
        },
        {
            "Id": 3097815,
            "Date": "2018-12-19T21:00:00",
            "Venue": {
                "Id": 42957,
                "Name": "Echoplex",
                "Address": "1154 Glendale Blvd",
                "City": "Los Angeles",
                "State": "California",
                "StateCode": "CA",
                "Country": "US",
                "CountryCode": "US",
                "ZipCode": "90026",
                "Url": "http://www.theecho.com/",
                "Latitude": 34.076794,
                "Longitude": -118.261126
            },
            "Artists": [
                {
                    "Id": 110894,
                    "Name": "Boss Harmony"
                }
            ],
            "TicketUrl": "http://www.shareasale.com/r.cfm?u=460319&b=234786&m=27601&afftrack=&urllink=https://www.ticketfly.com/purchase/event/1622338/tfly?utm_medium=api"
        }
    ]


// function getNewInfo(){
//   $.getJSON(`http://api.jambase.com/events?zipCode=${loc}&radius=${radius}&api_key=3sr3rt37bp3fkej3z3mgyrm4`, function(data){
//     // console.log(data.Events);
//     buildEventInfo(data.Events)
//   })
// }


let form = document.querySelector('.input-wrapper');
form.onsubmit = function(e){
  e.preventDefault();

  loc = e.target.location.value;
  radius = e.target.distance.value;

  $('#results-wrapper').empty();

  form.reset();
  // getNewInfo();
}

buildEventInfo(tempData)

function buildEventInfo(data){
  const eventInfoBoxWrapper = document.querySelector("#results-wrapper");
  // iterate through the object and add appropriate info
  data.forEach(info => {
    // resultInfo div
    const resultInfo = document.createElement("div");
    resultInfo.setAttribute("class", "resultInfo");
    // resultName
    const resultName = document.createElement("h2");
    resultName.setAttribute("class", "resultName");
    resultName.innerHTML = info.Artists[0].Name;
    // topContainer
    const topContainer = document.createElement("div");
    topContainer.setAttribute("class", "sideInfoBox row");
    // resultDate
    const resultDate = document.createElement("p");
    resultDate.setAttribute("class", "resultText");
    resultDate.innerHTML = formatDate(info.Date);
    // resultVenue
    const resultVenue = document.createElement("p");
    resultVenue.setAttribute("class", "resultText");
    resultVenue.innerHTML = info.Venue.Name;
    // bottomContainer
    const bottomContainer = document.createElement("div");
    bottomContainer.setAttribute("class", "sideInfoBox row");
    // resultCity
    const resultCity = document.createElement("p");
    resultCity.setAttribute("class", "resultText");
    resultCity.innerHTML = info.Venue.City;
    // resultLink
    const resultLink = document.createElement("a");
    resultLink.setAttribute("class", "resultText cursor");
    resultLink.setAttribute("href", info.TicketUrl);
    resultLink.setAttribute("target", "_blank");


    // resultLink.innerHTML = info.TicketUrl


    resultInfo.appendChild(resultName);
    resultInfo.appendChild(topContainer);
    topContainer.appendChild(resultVenue);
    topContainer.appendChild(resultCity);
    resultInfo.appendChild(bottomContainer);
    bottomContainer.appendChild(resultDate);
    // bottomContainer.appendChild(resultLink);
    resultLink.appendChild(resultInfo);
    eventInfoBoxWrapper.appendChild(resultLink);
  })
}

function formatDate(date) {
  let newDate = date.slice(0, 10).split("-")
  newDate = `${newDate[1]}/${newDate[2]}/${newDate[0]}`
  return newDate
}

// getNewInfo();
