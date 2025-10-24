const companies = [
  {
    "company": "Company1",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company1.com"
  },
  {
    "company": "Company2",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company2.com"
  },
  {
    "company": "Company3",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company3.com"
  },
  {
    "company": "Company4",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company4.com"
  },
  {
    "company": "Company5",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company5.com"
  },
  {
    "company": "Company6",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company6.com"
  },
  {
    "company": "Company7",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company7.com"
  },
  {
    "company": "Company8",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company8.com"
  },
  {
    "company": "Company9",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company9.com"
  },
  {
    "company": "Company10",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company10.com"
  },
  {
    "company": "Company11",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company11.com"
  },
  {
    "company": "Company12",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company12.com"
  },
  {
    "company": "Company13",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company13.com"
  },
  {
    "company": "Company14",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company14.com"
  },
  {
    "company": "Company15",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company15.com"
  },
  {
    "company": "Company16",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company16.com"
  },
  {
    "company": "Company17",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company17.com"
  },
  {
    "company": "Company18",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company18.com"
  },
  {
    "company": "Company19",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company19.com"
  },
  {
    "company": "Company20",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company20.com"
  },
  {
    "company": "Company21",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company21.com"
  },
  {
    "company": "Company22",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company22.com"
  },
  {
    "company": "Company23",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company23.com"
  },
  {
    "company": "Company24",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company24.com"
  },
  {
    "company": "Company25",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company25.com"
  },
  {
    "company": "Company26",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company26.com"
  },
  {
    "company": "Company27",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company27.com"
  },
  {
    "company": "Company28",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company28.com"
  },
  {
    "company": "Company29",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company29.com"
  },
  {
    "company": "Company30",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company30.com"
  },
  {
    "company": "Company31",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company31.com"
  },
  {
    "company": "Company32",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company32.com"
  },
  {
    "company": "Company33",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company33.com"
  },
  {
    "company": "Company34",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company34.com"
  },
  {
    "company": "Company35",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company35.com"
  },
  {
    "company": "Company36",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company36.com"
  },
  {
    "company": "Company37",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company37.com"
  },
  {
    "company": "Company38",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company38.com"
  },
  {
    "company": "Company39",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company39.com"
  },
  {
    "company": "Company40",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company40.com"
  },
  {
    "company": "Company41",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company41.com"
  },
  {
    "company": "Company42",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company42.com"
  },
  {
    "company": "Company43",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company43.com"
  },
  {
    "company": "Company44",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company44.com"
  },
  {
    "company": "Company45",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company45.com"
  },
  {
    "company": "Company46",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company46.com"
  },
  {
    "company": "Company47",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company47.com"
  },
  {
    "company": "Company48",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company48.com"
  },
  {
    "company": "Company49",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company49.com"
  },
  {
    "company": "Company50",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company50.com"
  },
  {
    "company": "Company51",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company51.com"
  },
  {
    "company": "Company52",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company52.com"
  },
  {
    "company": "Company53",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company53.com"
  },
  {
    "company": "Company54",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company54.com"
  },
  {
    "company": "Company55",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company55.com"
  },
  {
    "company": "Company56",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company56.com"
  },
  {
    "company": "Company57",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company57.com"
  },
  {
    "company": "Company58",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company58.com"
  },
  {
    "company": "Company59",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company59.com"
  },
  {
    "company": "Company60",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company60.com"
  },
  {
    "company": "Company61",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company61.com"
  },
  {
    "company": "Company62",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company62.com"
  },
  {
    "company": "Company63",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company63.com"
  },
  {
    "company": "Company64",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company64.com"
  },
  {
    "company": "Company65",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company65.com"
  },
  {
    "company": "Company66",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company66.com"
  },
  {
    "company": "Company67",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company67.com"
  },
  {
    "company": "Company68",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company68.com"
  },
  {
    "company": "Company69",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company69.com"
  },
  {
    "company": "Company70",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company70.com"
  },
  {
    "company": "Company71",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company71.com"
  },
  {
    "company": "Company72",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company72.com"
  },
  {
    "company": "Company73",
    "sector": "Energy",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company73.com"
  },
  {
    "company": "Company74",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company74.com"
  },
  {
    "company": "Company75",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company75.com"
  },
  {
    "company": "Company76",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company76.com"
  },
  {
    "company": "Company77",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company77.com"
  },
  {
    "company": "Company78",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company78.com"
  },
  {
    "company": "Company79",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company79.com"
  },
  {
    "company": "Company80",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company80.com"
  },
  {
    "company": "Company81",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company81.com"
  },
  {
    "company": "Company82",
    "sector": "Energy",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company82.com"
  },
  {
    "company": "Company83",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company83.com"
  },
  {
    "company": "Company84",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company84.com"
  },
  {
    "company": "Company85",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company85.com"
  },
  {
    "company": "Company86",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company86.com"
  },
  {
    "company": "Company87",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company87.com"
  },
  {
    "company": "Company88",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company88.com"
  },
  {
    "company": "Company89",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company89.com"
  },
  {
    "company": "Company90",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company90.com"
  },
  {
    "company": "Company91",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company91.com"
  },
  {
    "company": "Company92",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company92.com"
  },
  {
    "company": "Company93",
    "sector": "Finance",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company93.com"
  },
  {
    "company": "Company94",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company94.com"
  },
  {
    "company": "Company95",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company95.com"
  },
  {
    "company": "Company96",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company96.com"
  },
  {
    "company": "Company97",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company97.com"
  },
  {
    "company": "Company98",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company98.com"
  },
  {
    "company": "Company99",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company99.com"
  },
  {
    "company": "Company100",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company100.com"
  },
  {
    "company": "Company101",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company101.com"
  },
  {
    "company": "Company102",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company102.com"
  },
  {
    "company": "Company103",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company103.com"
  },
  {
    "company": "Company104",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company104.com"
  },
  {
    "company": "Company105",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company105.com"
  },
  {
    "company": "Company106",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company106.com"
  },
  {
    "company": "Company107",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company107.com"
  },
  {
    "company": "Company108",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company108.com"
  },
  {
    "company": "Company109",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company109.com"
  },
  {
    "company": "Company110",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company110.com"
  },
  {
    "company": "Company111",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company111.com"
  },
  {
    "company": "Company112",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company112.com"
  },
  {
    "company": "Company113",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company113.com"
  },
  {
    "company": "Company114",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company114.com"
  },
  {
    "company": "Company115",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company115.com"
  },
  {
    "company": "Company116",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company116.com"
  },
  {
    "company": "Company117",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company117.com"
  },
  {
    "company": "Company118",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company118.com"
  },
  {
    "company": "Company119",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company119.com"
  },
  {
    "company": "Company120",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company120.com"
  },
  {
    "company": "Company121",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company121.com"
  },
  {
    "company": "Company122",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company122.com"
  },
  {
    "company": "Company123",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company123.com"
  },
  {
    "company": "Company124",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company124.com"
  },
  {
    "company": "Company125",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company125.com"
  },
  {
    "company": "Company126",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company126.com"
  },
  {
    "company": "Company127",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company127.com"
  },
  {
    "company": "Company128",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company128.com"
  },
  {
    "company": "Company129",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company129.com"
  },
  {
    "company": "Company130",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company130.com"
  },
  {
    "company": "Company131",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company131.com"
  },
  {
    "company": "Company132",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company132.com"
  },
  {
    "company": "Company133",
    "sector": "Energy",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company133.com"
  },
  {
    "company": "Company134",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company134.com"
  },
  {
    "company": "Company135",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company135.com"
  },
  {
    "company": "Company136",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company136.com"
  },
  {
    "company": "Company137",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company137.com"
  },
  {
    "company": "Company138",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company138.com"
  },
  {
    "company": "Company139",
    "sector": "Finance",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company139.com"
  },
  {
    "company": "Company140",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company140.com"
  },
  {
    "company": "Company141",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company141.com"
  },
  {
    "company": "Company142",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company142.com"
  },
  {
    "company": "Company143",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company143.com"
  },
  {
    "company": "Company144",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company144.com"
  },
  {
    "company": "Company145",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company145.com"
  },
  {
    "company": "Company146",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company146.com"
  },
  {
    "company": "Company147",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company147.com"
  },
  {
    "company": "Company148",
    "sector": "Energy",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company148.com"
  },
  {
    "company": "Company149",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company149.com"
  },
  {
    "company": "Company150",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company150.com"
  },
  {
    "company": "Company151",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company151.com"
  },
  {
    "company": "Company152",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company152.com"
  },
  {
    "company": "Company153",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company153.com"
  },
  {
    "company": "Company154",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company154.com"
  },
  {
    "company": "Company155",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company155.com"
  },
  {
    "company": "Company156",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company156.com"
  },
  {
    "company": "Company157",
    "sector": "Energy",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company157.com"
  },
  {
    "company": "Company158",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company158.com"
  },
  {
    "company": "Company159",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company159.com"
  },
  {
    "company": "Company160",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company160.com"
  },
  {
    "company": "Company161",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company161.com"
  },
  {
    "company": "Company162",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company162.com"
  },
  {
    "company": "Company163",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company163.com"
  },
  {
    "company": "Company164",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company164.com"
  },
  {
    "company": "Company165",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company165.com"
  },
  {
    "company": "Company166",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company166.com"
  },
  {
    "company": "Company167",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company167.com"
  },
  {
    "company": "Company168",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company168.com"
  },
  {
    "company": "Company169",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company169.com"
  },
  {
    "company": "Company170",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company170.com"
  },
  {
    "company": "Company171",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company171.com"
  },
  {
    "company": "Company172",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company172.com"
  },
  {
    "company": "Company173",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company173.com"
  },
  {
    "company": "Company174",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company174.com"
  },
  {
    "company": "Company175",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company175.com"
  },
  {
    "company": "Company176",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company176.com"
  },
  {
    "company": "Company177",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company177.com"
  },
  {
    "company": "Company178",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company178.com"
  },
  {
    "company": "Company179",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company179.com"
  },
  {
    "company": "Company180",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company180.com"
  },
  {
    "company": "Company181",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company181.com"
  },
  {
    "company": "Company182",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company182.com"
  },
  {
    "company": "Company183",
    "sector": "Finance",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company183.com"
  },
  {
    "company": "Company184",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company184.com"
  },
  {
    "company": "Company185",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company185.com"
  },
  {
    "company": "Company186",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company186.com"
  },
  {
    "company": "Company187",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company187.com"
  },
  {
    "company": "Company188",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company188.com"
  },
  {
    "company": "Company189",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company189.com"
  },
  {
    "company": "Company190",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company190.com"
  },
  {
    "company": "Company191",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company191.com"
  },
  {
    "company": "Company192",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company192.com"
  },
  {
    "company": "Company193",
    "sector": "Finance",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company193.com"
  },
  {
    "company": "Company194",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company194.com"
  },
  {
    "company": "Company195",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company195.com"
  },
  {
    "company": "Company196",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company196.com"
  },
  {
    "company": "Company197",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company197.com"
  },
  {
    "company": "Company198",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company198.com"
  },
  {
    "company": "Company199",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company199.com"
  },
  {
    "company": "Company200",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company200.com"
  },
  {
    "company": "Company201",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company201.com"
  },
  {
    "company": "Company202",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company202.com"
  },
  {
    "company": "Company203",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company203.com"
  },
  {
    "company": "Company204",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company204.com"
  },
  {
    "company": "Company205",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company205.com"
  },
  {
    "company": "Company206",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company206.com"
  },
  {
    "company": "Company207",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company207.com"
  },
  {
    "company": "Company208",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company208.com"
  },
  {
    "company": "Company209",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company209.com"
  },
  {
    "company": "Company210",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company210.com"
  },
  {
    "company": "Company211",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company211.com"
  },
  {
    "company": "Company212",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company212.com"
  },
  {
    "company": "Company213",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company213.com"
  },
  {
    "company": "Company214",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company214.com"
  },
  {
    "company": "Company215",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company215.com"
  },
  {
    "company": "Company216",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company216.com"
  },
  {
    "company": "Company217",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company217.com"
  },
  {
    "company": "Company218",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company218.com"
  },
  {
    "company": "Company219",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company219.com"
  },
  {
    "company": "Company220",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company220.com"
  },
  {
    "company": "Company221",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company221.com"
  },
  {
    "company": "Company222",
    "sector": "Finance",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company222.com"
  },
  {
    "company": "Company223",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company223.com"
  },
  {
    "company": "Company224",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company224.com"
  },
  {
    "company": "Company225",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company225.com"
  },
  {
    "company": "Company226",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company226.com"
  },
  {
    "company": "Company227",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company227.com"
  },
  {
    "company": "Company228",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company228.com"
  },
  {
    "company": "Company229",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company229.com"
  },
  {
    "company": "Company230",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company230.com"
  },
  {
    "company": "Company231",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company231.com"
  },
  {
    "company": "Company232",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company232.com"
  },
  {
    "company": "Company233",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company233.com"
  },
  {
    "company": "Company234",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company234.com"
  },
  {
    "company": "Company235",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company235.com"
  },
  {
    "company": "Company236",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company236.com"
  },
  {
    "company": "Company237",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company237.com"
  },
  {
    "company": "Company238",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company238.com"
  },
  {
    "company": "Company239",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company239.com"
  },
  {
    "company": "Company240",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company240.com"
  },
  {
    "company": "Company241",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company241.com"
  },
  {
    "company": "Company242",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company242.com"
  },
  {
    "company": "Company243",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company243.com"
  },
  {
    "company": "Company244",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company244.com"
  },
  {
    "company": "Company245",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company245.com"
  },
  {
    "company": "Company246",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company246.com"
  },
  {
    "company": "Company247",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company247.com"
  },
  {
    "company": "Company248",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company248.com"
  },
  {
    "company": "Company249",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company249.com"
  },
  {
    "company": "Company250",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company250.com"
  },
  {
    "company": "Company251",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company251.com"
  },
  {
    "company": "Company252",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company252.com"
  },
  {
    "company": "Company253",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company253.com"
  },
  {
    "company": "Company254",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company254.com"
  },
  {
    "company": "Company255",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company255.com"
  },
  {
    "company": "Company256",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company256.com"
  },
  {
    "company": "Company257",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company257.com"
  },
  {
    "company": "Company258",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company258.com"
  },
  {
    "company": "Company259",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company259.com"
  },
  {
    "company": "Company260",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company260.com"
  },
  {
    "company": "Company261",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company261.com"
  },
  {
    "company": "Company262",
    "sector": "Energy",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company262.com"
  },
  {
    "company": "Company263",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company263.com"
  },
  {
    "company": "Company264",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company264.com"
  },
  {
    "company": "Company265",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company265.com"
  },
  {
    "company": "Company266",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company266.com"
  },
  {
    "company": "Company267",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company267.com"
  },
  {
    "company": "Company268",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company268.com"
  },
  {
    "company": "Company269",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company269.com"
  },
  {
    "company": "Company270",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company270.com"
  },
  {
    "company": "Company271",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company271.com"
  },
  {
    "company": "Company272",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company272.com"
  },
  {
    "company": "Company273",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company273.com"
  },
  {
    "company": "Company274",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company274.com"
  },
  {
    "company": "Company275",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company275.com"
  },
  {
    "company": "Company276",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company276.com"
  },
  {
    "company": "Company277",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company277.com"
  },
  {
    "company": "Company278",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company278.com"
  },
  {
    "company": "Company279",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company279.com"
  },
  {
    "company": "Company280",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company280.com"
  },
  {
    "company": "Company281",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company281.com"
  },
  {
    "company": "Company282",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company282.com"
  },
  {
    "company": "Company283",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company283.com"
  },
  {
    "company": "Company284",
    "sector": "Energy",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company284.com"
  },
  {
    "company": "Company285",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company285.com"
  },
  {
    "company": "Company286",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company286.com"
  },
  {
    "company": "Company287",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company287.com"
  },
  {
    "company": "Company288",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company288.com"
  },
  {
    "company": "Company289",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company289.com"
  },
  {
    "company": "Company290",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company290.com"
  },
  {
    "company": "Company291",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company291.com"
  },
  {
    "company": "Company292",
    "sector": "Finance",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company292.com"
  },
  {
    "company": "Company293",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company293.com"
  },
  {
    "company": "Company294",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company294.com"
  },
  {
    "company": "Company295",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company295.com"
  },
  {
    "company": "Company296",
    "sector": "Energy",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company296.com"
  },
  {
    "company": "Company297",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company297.com"
  },
  {
    "company": "Company298",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company298.com"
  },
  {
    "company": "Company299",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company299.com"
  },
  {
    "company": "Company300",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company300.com"
  },
  {
    "company": "Company301",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company301.com"
  },
  {
    "company": "Company302",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company302.com"
  },
  {
    "company": "Company303",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company303.com"
  },
  {
    "company": "Company304",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company304.com"
  },
  {
    "company": "Company305",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company305.com"
  },
  {
    "company": "Company306",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company306.com"
  },
  {
    "company": "Company307",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company307.com"
  },
  {
    "company": "Company308",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company308.com"
  },
  {
    "company": "Company309",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company309.com"
  },
  {
    "company": "Company310",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company310.com"
  },
  {
    "company": "Company311",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company311.com"
  },
  {
    "company": "Company312",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company312.com"
  },
  {
    "company": "Company313",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company313.com"
  },
  {
    "company": "Company314",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company314.com"
  },
  {
    "company": "Company315",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company315.com"
  },
  {
    "company": "Company316",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company316.com"
  },
  {
    "company": "Company317",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company317.com"
  },
  {
    "company": "Company318",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company318.com"
  },
  {
    "company": "Company319",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company319.com"
  },
  {
    "company": "Company320",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company320.com"
  },
  {
    "company": "Company321",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company321.com"
  },
  {
    "company": "Company322",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company322.com"
  },
  {
    "company": "Company323",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company323.com"
  },
  {
    "company": "Company324",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company324.com"
  },
  {
    "company": "Company325",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company325.com"
  },
  {
    "company": "Company326",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company326.com"
  },
  {
    "company": "Company327",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company327.com"
  },
  {
    "company": "Company328",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company328.com"
  },
  {
    "company": "Company329",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company329.com"
  },
  {
    "company": "Company330",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company330.com"
  },
  {
    "company": "Company331",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company331.com"
  },
  {
    "company": "Company332",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company332.com"
  },
  {
    "company": "Company333",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company333.com"
  },
  {
    "company": "Company334",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company334.com"
  },
  {
    "company": "Company335",
    "sector": "Finance",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company335.com"
  },
  {
    "company": "Company336",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company336.com"
  },
  {
    "company": "Company337",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company337.com"
  },
  {
    "company": "Company338",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company338.com"
  },
  {
    "company": "Company339",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company339.com"
  },
  {
    "company": "Company340",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company340.com"
  },
  {
    "company": "Company341",
    "sector": "Energy",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company341.com"
  },
  {
    "company": "Company342",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company342.com"
  },
  {
    "company": "Company343",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company343.com"
  },
  {
    "company": "Company344",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company344.com"
  },
  {
    "company": "Company345",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company345.com"
  },
  {
    "company": "Company346",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company346.com"
  },
  {
    "company": "Company347",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company347.com"
  },
  {
    "company": "Company348",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company348.com"
  },
  {
    "company": "Company349",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company349.com"
  },
  {
    "company": "Company350",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company350.com"
  },
  {
    "company": "Company351",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company351.com"
  },
  {
    "company": "Company352",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company352.com"
  },
  {
    "company": "Company353",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company353.com"
  },
  {
    "company": "Company354",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company354.com"
  },
  {
    "company": "Company355",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company355.com"
  },
  {
    "company": "Company356",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company356.com"
  },
  {
    "company": "Company357",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company357.com"
  },
  {
    "company": "Company358",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company358.com"
  },
  {
    "company": "Company359",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company359.com"
  },
  {
    "company": "Company360",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company360.com"
  },
  {
    "company": "Company361",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company361.com"
  },
  {
    "company": "Company362",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company362.com"
  },
  {
    "company": "Company363",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company363.com"
  },
  {
    "company": "Company364",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company364.com"
  },
  {
    "company": "Company365",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company365.com"
  },
  {
    "company": "Company366",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company366.com"
  },
  {
    "company": "Company367",
    "sector": "Energy",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company367.com"
  },
  {
    "company": "Company368",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company368.com"
  },
  {
    "company": "Company369",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company369.com"
  },
  {
    "company": "Company370",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company370.com"
  },
  {
    "company": "Company371",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company371.com"
  },
  {
    "company": "Company372",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company372.com"
  },
  {
    "company": "Company373",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company373.com"
  },
  {
    "company": "Company374",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company374.com"
  },
  {
    "company": "Company375",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company375.com"
  },
  {
    "company": "Company376",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company376.com"
  },
  {
    "company": "Company377",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company377.com"
  },
  {
    "company": "Company378",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company378.com"
  },
  {
    "company": "Company379",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company379.com"
  },
  {
    "company": "Company380",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company380.com"
  },
  {
    "company": "Company381",
    "sector": "Finance",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company381.com"
  },
  {
    "company": "Company382",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company382.com"
  },
  {
    "company": "Company383",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company383.com"
  },
  {
    "company": "Company384",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company384.com"
  },
  {
    "company": "Company385",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company385.com"
  },
  {
    "company": "Company386",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company386.com"
  },
  {
    "company": "Company387",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company387.com"
  },
  {
    "company": "Company388",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company388.com"
  },
  {
    "company": "Company389",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company389.com"
  },
  {
    "company": "Company390",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company390.com"
  },
  {
    "company": "Company391",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company391.com"
  },
  {
    "company": "Company392",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company392.com"
  },
  {
    "company": "Company393",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company393.com"
  },
  {
    "company": "Company394",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company394.com"
  },
  {
    "company": "Company395",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company395.com"
  },
  {
    "company": "Company396",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company396.com"
  },
  {
    "company": "Company397",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company397.com"
  },
  {
    "company": "Company398",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company398.com"
  },
  {
    "company": "Company399",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company399.com"
  },
  {
    "company": "Company400",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company400.com"
  },
  {
    "company": "Company401",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company401.com"
  },
  {
    "company": "Company402",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company402.com"
  },
  {
    "company": "Company403",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company403.com"
  },
  {
    "company": "Company404",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company404.com"
  },
  {
    "company": "Company405",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company405.com"
  },
  {
    "company": "Company406",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company406.com"
  },
  {
    "company": "Company407",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company407.com"
  },
  {
    "company": "Company408",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company408.com"
  },
  {
    "company": "Company409",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company409.com"
  },
  {
    "company": "Company410",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company410.com"
  },
  {
    "company": "Company411",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company411.com"
  },
  {
    "company": "Company412",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company412.com"
  },
  {
    "company": "Company413",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company413.com"
  },
  {
    "company": "Company414",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company414.com"
  },
  {
    "company": "Company415",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company415.com"
  },
  {
    "company": "Company416",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company416.com"
  },
  {
    "company": "Company417",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company417.com"
  },
  {
    "company": "Company418",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company418.com"
  },
  {
    "company": "Company419",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company419.com"
  },
  {
    "company": "Company420",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company420.com"
  },
  {
    "company": "Company421",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company421.com"
  },
  {
    "company": "Company422",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company422.com"
  },
  {
    "company": "Company423",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company423.com"
  },
  {
    "company": "Company424",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company424.com"
  },
  {
    "company": "Company425",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company425.com"
  },
  {
    "company": "Company426",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company426.com"
  },
  {
    "company": "Company427",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company427.com"
  },
  {
    "company": "Company428",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company428.com"
  },
  {
    "company": "Company429",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company429.com"
  },
  {
    "company": "Company430",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company430.com"
  },
  {
    "company": "Company431",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company431.com"
  },
  {
    "company": "Company432",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company432.com"
  },
  {
    "company": "Company433",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company433.com"
  },
  {
    "company": "Company434",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company434.com"
  },
  {
    "company": "Company435",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company435.com"
  },
  {
    "company": "Company436",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company436.com"
  },
  {
    "company": "Company437",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company437.com"
  },
  {
    "company": "Company438",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company438.com"
  },
  {
    "company": "Company439",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company439.com"
  },
  {
    "company": "Company440",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company440.com"
  },
  {
    "company": "Company441",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company441.com"
  },
  {
    "company": "Company442",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company442.com"
  },
  {
    "company": "Company443",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company443.com"
  },
  {
    "company": "Company444",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company444.com"
  },
  {
    "company": "Company445",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company445.com"
  },
  {
    "company": "Company446",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company446.com"
  },
  {
    "company": "Company447",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company447.com"
  },
  {
    "company": "Company448",
    "sector": "Finance",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company448.com"
  },
  {
    "company": "Company449",
    "sector": "Finance",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company449.com"
  },
  {
    "company": "Company450",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company450.com"
  },
  {
    "company": "Company451",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company451.com"
  },
  {
    "company": "Company452",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company452.com"
  },
  {
    "company": "Company453",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company453.com"
  },
  {
    "company": "Company454",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company454.com"
  },
  {
    "company": "Company455",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company455.com"
  },
  {
    "company": "Company456",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company456.com"
  },
  {
    "company": "Company457",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company457.com"
  },
  {
    "company": "Company458",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company458.com"
  },
  {
    "company": "Company459",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company459.com"
  },
  {
    "company": "Company460",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company460.com"
  },
  {
    "company": "Company461",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company461.com"
  },
  {
    "company": "Company462",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company462.com"
  },
  {
    "company": "Company463",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company463.com"
  },
  {
    "company": "Company464",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company464.com"
  },
  {
    "company": "Company465",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company465.com"
  },
  {
    "company": "Company466",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company466.com"
  },
  {
    "company": "Company467",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company467.com"
  },
  {
    "company": "Company468",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company468.com"
  },
  {
    "company": "Company469",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company469.com"
  },
  {
    "company": "Company470",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company470.com"
  },
  {
    "company": "Company471",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company471.com"
  },
  {
    "company": "Company472",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company472.com"
  },
  {
    "company": "Company473",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company473.com"
  },
  {
    "company": "Company474",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company474.com"
  },
  {
    "company": "Company475",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company475.com"
  },
  {
    "company": "Company476",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company476.com"
  },
  {
    "company": "Company477",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company477.com"
  },
  {
    "company": "Company478",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company478.com"
  },
  {
    "company": "Company479",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company479.com"
  },
  {
    "company": "Company480",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company480.com"
  },
  {
    "company": "Company481",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company481.com"
  },
  {
    "company": "Company482",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company482.com"
  },
  {
    "company": "Company483",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company483.com"
  },
  {
    "company": "Company484",
    "sector": "Energy",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company484.com"
  },
  {
    "company": "Company485",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company485.com"
  },
  {
    "company": "Company486",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company486.com"
  },
  {
    "company": "Company487",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company487.com"
  },
  {
    "company": "Company488",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company488.com"
  },
  {
    "company": "Company489",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company489.com"
  },
  {
    "company": "Company490",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company490.com"
  },
  {
    "company": "Company491",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company491.com"
  },
  {
    "company": "Company492",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company492.com"
  },
  {
    "company": "Company493",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company493.com"
  },
  {
    "company": "Company494",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company494.com"
  },
  {
    "company": "Company495",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company495.com"
  },
  {
    "company": "Company496",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company496.com"
  },
  {
    "company": "Company497",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company497.com"
  },
  {
    "company": "Company498",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company498.com"
  },
  {
    "company": "Company499",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company499.com"
  },
  {
    "company": "Company500",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company500.com"
  },
  {
    "company": "Company501",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company501.com"
  },
  {
    "company": "Company502",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company502.com"
  },
  {
    "company": "Company503",
    "sector": "Finance",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company503.com"
  },
  {
    "company": "Company504",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company504.com"
  },
  {
    "company": "Company505",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company505.com"
  },
  {
    "company": "Company506",
    "sector": "Energy",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company506.com"
  },
  {
    "company": "Company507",
    "sector": "Finance",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company507.com"
  },
  {
    "company": "Company508",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company508.com"
  },
  {
    "company": "Company509",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company509.com"
  },
  {
    "company": "Company510",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company510.com"
  },
  {
    "company": "Company511",
    "sector": "Finance",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company511.com"
  },
  {
    "company": "Company512",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company512.com"
  },
  {
    "company": "Company513",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company513.com"
  },
  {
    "company": "Company514",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company514.com"
  },
  {
    "company": "Company515",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company515.com"
  },
  {
    "company": "Company516",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company516.com"
  },
  {
    "company": "Company517",
    "sector": "Energy",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company517.com"
  },
  {
    "company": "Company518",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company518.com"
  },
  {
    "company": "Company519",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company519.com"
  },
  {
    "company": "Company520",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company520.com"
  },
  {
    "company": "Company521",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company521.com"
  },
  {
    "company": "Company522",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company522.com"
  },
  {
    "company": "Company523",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company523.com"
  },
  {
    "company": "Company524",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company524.com"
  },
  {
    "company": "Company525",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company525.com"
  },
  {
    "company": "Company526",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company526.com"
  },
  {
    "company": "Company527",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company527.com"
  },
  {
    "company": "Company528",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company528.com"
  },
  {
    "company": "Company529",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company529.com"
  },
  {
    "company": "Company530",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company530.com"
  },
  {
    "company": "Company531",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company531.com"
  },
  {
    "company": "Company532",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company532.com"
  },
  {
    "company": "Company533",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company533.com"
  },
  {
    "company": "Company534",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company534.com"
  },
  {
    "company": "Company535",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company535.com"
  },
  {
    "company": "Company536",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company536.com"
  },
  {
    "company": "Company537",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company537.com"
  },
  {
    "company": "Company538",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company538.com"
  },
  {
    "company": "Company539",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company539.com"
  },
  {
    "company": "Company540",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company540.com"
  },
  {
    "company": "Company541",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company541.com"
  },
  {
    "company": "Company542",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company542.com"
  },
  {
    "company": "Company543",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company543.com"
  },
  {
    "company": "Company544",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company544.com"
  },
  {
    "company": "Company545",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company545.com"
  },
  {
    "company": "Company546",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company546.com"
  },
  {
    "company": "Company547",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company547.com"
  },
  {
    "company": "Company548",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company548.com"
  },
  {
    "company": "Company549",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company549.com"
  },
  {
    "company": "Company550",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company550.com"
  },
  {
    "company": "Company551",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company551.com"
  },
  {
    "company": "Company552",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company552.com"
  },
  {
    "company": "Company553",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company553.com"
  },
  {
    "company": "Company554",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company554.com"
  },
  {
    "company": "Company555",
    "sector": "Finance",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company555.com"
  },
  {
    "company": "Company556",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company556.com"
  },
  {
    "company": "Company557",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company557.com"
  },
  {
    "company": "Company558",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company558.com"
  },
  {
    "company": "Company559",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company559.com"
  },
  {
    "company": "Company560",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company560.com"
  },
  {
    "company": "Company561",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company561.com"
  },
  {
    "company": "Company562",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company562.com"
  },
  {
    "company": "Company563",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company563.com"
  },
  {
    "company": "Company564",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company564.com"
  },
  {
    "company": "Company565",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company565.com"
  },
  {
    "company": "Company566",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company566.com"
  },
  {
    "company": "Company567",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company567.com"
  },
  {
    "company": "Company568",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company568.com"
  },
  {
    "company": "Company569",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company569.com"
  },
  {
    "company": "Company570",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company570.com"
  },
  {
    "company": "Company571",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company571.com"
  },
  {
    "company": "Company572",
    "sector": "Finance",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company572.com"
  },
  {
    "company": "Company573",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company573.com"
  },
  {
    "company": "Company574",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company574.com"
  },
  {
    "company": "Company575",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company575.com"
  },
  {
    "company": "Company576",
    "sector": "Energy",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company576.com"
  },
  {
    "company": "Company577",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company577.com"
  },
  {
    "company": "Company578",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company578.com"
  },
  {
    "company": "Company579",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company579.com"
  },
  {
    "company": "Company580",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company580.com"
  },
  {
    "company": "Company581",
    "sector": "Finance",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company581.com"
  },
  {
    "company": "Company582",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company582.com"
  },
  {
    "company": "Company583",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company583.com"
  },
  {
    "company": "Company584",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company584.com"
  },
  {
    "company": "Company585",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company585.com"
  },
  {
    "company": "Company586",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company586.com"
  },
  {
    "company": "Company587",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company587.com"
  },
  {
    "company": "Company588",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company588.com"
  },
  {
    "company": "Company589",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company589.com"
  },
  {
    "company": "Company590",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company590.com"
  },
  {
    "company": "Company591",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company591.com"
  },
  {
    "company": "Company592",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company592.com"
  },
  {
    "company": "Company593",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company593.com"
  },
  {
    "company": "Company594",
    "sector": "Manufacturing",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company594.com"
  },
  {
    "company": "Company595",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company595.com"
  },
  {
    "company": "Company596",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company596.com"
  },
  {
    "company": "Company597",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company597.com"
  },
  {
    "company": "Company598",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company598.com"
  },
  {
    "company": "Company599",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company599.com"
  },
  {
    "company": "Company600",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company600.com"
  },
  {
    "company": "Company601",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company601.com"
  },
  {
    "company": "Company602",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company602.com"
  },
  {
    "company": "Company603",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company603.com"
  },
  {
    "company": "Company604",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company604.com"
  },
  {
    "company": "Company605",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company605.com"
  },
  {
    "company": "Company606",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company606.com"
  },
  {
    "company": "Company607",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company607.com"
  },
  {
    "company": "Company608",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company608.com"
  },
  {
    "company": "Company609",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company609.com"
  },
  {
    "company": "Company610",
    "sector": "Energy",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company610.com"
  },
  {
    "company": "Company611",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company611.com"
  },
  {
    "company": "Company612",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company612.com"
  },
  {
    "company": "Company613",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company613.com"
  },
  {
    "company": "Company614",
    "sector": "Energy",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company614.com"
  },
  {
    "company": "Company615",
    "sector": "Retail",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company615.com"
  },
  {
    "company": "Company616",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company616.com"
  },
  {
    "company": "Company617",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company617.com"
  },
  {
    "company": "Company618",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company618.com"
  },
  {
    "company": "Company619",
    "sector": "Healthcare",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company619.com"
  },
  {
    "company": "Company620",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company620.com"
  },
  {
    "company": "Company621",
    "sector": "Manufacturing",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company621.com"
  },
  {
    "company": "Company622",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company622.com"
  },
  {
    "company": "Company623",
    "sector": "Finance",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company623.com"
  },
  {
    "company": "Company624",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company624.com"
  },
  {
    "company": "Company625",
    "sector": "Finance",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company625.com"
  },
  {
    "company": "Company626",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company626.com"
  },
  {
    "company": "Company627",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company627.com"
  },
  {
    "company": "Company628",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company628.com"
  },
  {
    "company": "Company629",
    "sector": "Healthcare",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company629.com"
  },
  {
    "company": "Company630",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company630.com"
  },
  {
    "company": "Company631",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company631.com"
  },
  {
    "company": "Company632",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company632.com"
  },
  {
    "company": "Company633",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company633.com"
  },
  {
    "company": "Company634",
    "sector": "Energy",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company634.com"
  },
  {
    "company": "Company635",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company635.com"
  },
  {
    "company": "Company636",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company636.com"
  },
  {
    "company": "Company637",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company637.com"
  },
  {
    "company": "Company638",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company638.com"
  },
  {
    "company": "Company639",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company639.com"
  },
  {
    "company": "Company640",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company640.com"
  },
  {
    "company": "Company641",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company641.com"
  },
  {
    "company": "Company642",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company642.com"
  },
  {
    "company": "Company643",
    "sector": "Finance",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company643.com"
  },
  {
    "company": "Company644",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company644.com"
  },
  {
    "company": "Company645",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company645.com"
  },
  {
    "company": "Company646",
    "sector": "Information Technology",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company646.com"
  },
  {
    "company": "Company647",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company647.com"
  },
  {
    "company": "Company648",
    "sector": "Healthcare",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company648.com"
  },
  {
    "company": "Company649",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company649.com"
  },
  {
    "company": "Company650",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company650.com"
  },
  {
    "company": "Company651",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company651.com"
  },
  {
    "company": "Company652",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company652.com"
  },
  {
    "company": "Company653",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company653.com"
  },
  {
    "company": "Company654",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company654.com"
  },
  {
    "company": "Company655",
    "sector": "Information Technology",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company655.com"
  },
  {
    "company": "Company656",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company656.com"
  },
  {
    "company": "Company657",
    "sector": "Information Technology",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company657.com"
  },
  {
    "company": "Company658",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company658.com"
  },
  {
    "company": "Company659",
    "sector": "Manufacturing",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company659.com"
  },
  {
    "company": "Company660",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company660.com"
  },
  {
    "company": "Company661",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company661.com"
  },
  {
    "company": "Company662",
    "sector": "Energy",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company662.com"
  },
  {
    "company": "Company663",
    "sector": "Energy",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company663.com"
  },
  {
    "company": "Company664",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company664.com"
  },
  {
    "company": "Company665",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company665.com"
  },
  {
    "company": "Company666",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company666.com"
  },
  {
    "company": "Company667",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company667.com"
  },
  {
    "company": "Company668",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company668.com"
  },
  {
    "company": "Company669",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company669.com"
  },
  {
    "company": "Company670",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company670.com"
  },
  {
    "company": "Company671",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Mysore",
    "website": "https://company671.com"
  },
  {
    "company": "Company672",
    "sector": "Energy",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company672.com"
  },
  {
    "company": "Company673",
    "sector": "Energy",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company673.com"
  },
  {
    "company": "Company674",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company674.com"
  },
  {
    "company": "Company675",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company675.com"
  },
  {
    "company": "Company676",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company676.com"
  },
  {
    "company": "Company677",
    "sector": "Information Technology",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company677.com"
  },
  {
    "company": "Company678",
    "sector": "Healthcare",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company678.com"
  },
  {
    "company": "Company679",
    "sector": "Automotive",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company679.com"
  },
  {
    "company": "Company680",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company680.com"
  },
  {
    "company": "Company681",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company681.com"
  },
  {
    "company": "Company682",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "New Delhi",
    "website": "https://company682.com"
  },
  {
    "company": "Company683",
    "sector": "Automotive",
    "state": "Andhra Pradesh",
    "city": "Visakhapatnam",
    "website": "https://company683.com"
  },
  {
    "company": "Company684",
    "sector": "Automotive",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company684.com"
  },
  {
    "company": "Company685",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company685.com"
  },
  {
    "company": "Company686",
    "sector": "Energy",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company686.com"
  },
  {
    "company": "Company687",
    "sector": "Retail",
    "state": "Andhra Pradesh",
    "city": "Vijayawada",
    "website": "https://company687.com"
  },
  {
    "company": "Company688",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company688.com"
  },
  {
    "company": "Company689",
    "sector": "Retail",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company689.com"
  },
  {
    "company": "Company690",
    "sector": "Retail",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company690.com"
  },
  {
    "company": "Company691",
    "sector": "Finance",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company691.com"
  },
  {
    "company": "Company692",
    "sector": "Information Technology",
    "state": "Maharashtra",
    "city": "Pune",
    "website": "https://company692.com"
  },
  {
    "company": "Company693",
    "sector": "Retail",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company693.com"
  },
  {
    "company": "Company694",
    "sector": "Automotive",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company694.com"
  },
  {
    "company": "Company695",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Coimbatore",
    "website": "https://company695.com"
  },
  {
    "company": "Company696",
    "sector": "Automotive",
    "state": "Maharashtra",
    "city": "Mumbai",
    "website": "https://company696.com"
  },
  {
    "company": "Company697",
    "sector": "Retail",
    "state": "Karnataka",
    "city": "Bangalore",
    "website": "https://company697.com"
  },
  {
    "company": "Company698",
    "sector": "Manufacturing",
    "state": "Delhi",
    "city": "Dwarka",
    "website": "https://company698.com"
  },
  {
    "company": "Company699",
    "sector": "Manufacturing",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company699.com"
  },
  {
    "company": "Company700",
    "sector": "Healthcare",
    "state": "Tamil Nadu",
    "city": "Chennai",
    "website": "https://company700.com"
  }
];
