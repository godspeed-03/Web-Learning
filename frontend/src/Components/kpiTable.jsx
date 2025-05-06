import { useState } from "react";

const data = {
    "Affordable kids' clothing": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "hopscotch clothing": {
                "cpc": 3,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "soft organic cotton clothes for kids": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "hopscotch kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes": {
                "cpc": 17.01,
                "ctr": 100,
                "cpm": 17010,
                "cpa": 8.505
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear": {
                "cpc": 6.29,
                "ctr": 33.33333333333333,
                "cpm": 2096.6666666666665,
                "cpa": 0
            },
            "hopscotch clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "gifts for 1 year old baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small children clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids cloths": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for kids": {
                "cpc": 48.93,
                "ctr": 100,
                "cpm": 48930,
                "cpa": 12.2325
            },
            "firstcry newborn clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "birthday dress for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear in pantaloons": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry party wear dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry must haves for baby and mom": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping clothes": {
                "cpc": 45.81,
                "ctr": 100,
                "cpm": 45810,
                "cpa": 6.5442857142857145
            },
            "firstcry dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry sweater for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girl clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "unisex new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for 12 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "christmas dress for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry cotton frocks": {
                "cpc": 80.22,
                "ctr": 100,
                "cpm": 80220,
                "cpa": 40.11
            },
            "firstcry kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry offers today clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry frock for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids shirt": {
                "cpc": 15.84,
                "ctr": 100,
                "cpm": 15840,
                "cpa": 15.84
            },
            "pantaloons dress for girl": {
                "cpc": 32.62,
                "ctr": 100,
                "cpm": 32619.999999999996,
                "cpa": 16.31
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch birthday dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry jacket for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry suit for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www firstcry com clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for 10 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping clothes": {
                "cpc": 14.82,
                "ctr": 100,
                "cpm": 14820,
                "cpa": 7.41
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pine kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids tshirt": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party dress for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress first cry": {
                "cpc": 5.11,
                "ctr": 7.6923076923076925,
                "cpm": 393.0769230769231,
                "cpa": 2.555
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "boys new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for newborn baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes on firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girls clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes store near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons winter wear kids collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids collection": {
                "cpc": 21.36,
                "ctr": 100,
                "cpm": 21360,
                "cpa": 5.34
            },
            "firstcry baby girl clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "obori kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "lehenga for kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes 2 3 years firstcry": {
                "cpc": 14.35,
                "ctr": 100,
                "cpm": 14350,
                "cpa": 7.175
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "dress for girls first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby cotton top": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids fashion brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter collection": {
                "cpc": 16.35,
                "ctr": 100,
                "cpm": 16350.000000000002,
                "cpa": 8.175
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Cute toddler outfits online": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "first cry com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1st cry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "how to order dress in first firstcry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping kaise kare": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www hopscotch online com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping clothes": {
                "cpc": 45.81,
                "ctr": 100,
                "cpm": 45810,
                "cpa": 6.5442857142857145
            },
            "first cry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com online shopping tamil": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "firstcry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1st cry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www hopscotch com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping tamil": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping app": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch india online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch shopping online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com online shopping kaise kare": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry shop online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shop online": {
                "cpc": 23.15,
                "ctr": 100,
                "cpm": 23150,
                "cpa": 11.575
            },
            "firstcry online shopping store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch app online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "firstcry online shopping for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "New Year Gift for kids": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "hopscotch kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear": {
                "cpc": 6.29,
                "ctr": 33.33333333333333,
                "cpm": 2096.6666666666665,
                "cpa": 0
            },
            "firstcry dress for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "gifts for 1 year old baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids cloths": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for kids": {
                "cpc": 48.93,
                "ctr": 100,
                "cpm": 48930,
                "cpa": 12.2325
            },
            "birthday dress for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear in pantaloons": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry party wear dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry must haves for baby and mom": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry sweater for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "hopscotch kids wear near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for 12 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "christmas dress for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry frock for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids shirt": {
                "cpc": 15.84,
                "ctr": 100,
                "cpm": 15840,
                "cpa": 15.84
            },
            "pantaloons dress for girl": {
                "cpc": 32.62,
                "ctr": 100,
                "cpm": 32619.999999999996,
                "cpa": 16.31
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch birthday dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry jacket for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry suit for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for 10 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pine kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids tshirt": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party dress for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress first cry": {
                "cpc": 5.11,
                "ctr": 7.6923076923076925,
                "cpm": 393.0769230769231,
                "cpa": 2.555
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for newborn baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons winter wear kids collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids collection": {
                "cpc": 21.36,
                "ctr": 100,
                "cpm": 21360,
                "cpa": 5.34
            },
            "frocks for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "obori kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "lehenga for kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "dress for girls first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids fashion brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter collection": {
                "cpc": 16.35,
                "ctr": 100,
                "cpm": 16350.000000000002,
                "cpa": 8.175
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Seasonal kids' wear discounts": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "firstcry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear": {
                "cpc": 6.29,
                "ctr": 33.33333333333333,
                "cpm": 2096.6666666666665,
                "cpa": 0
            },
            "hopscotch winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear in pantaloons": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry party wear dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys winter wear haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry ethnic wear haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear frocks haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girls wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry infant wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons winter wear kids collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party wear dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry girls ethnic wear haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Best baby clothes for winter": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "hopscotch baby girl dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes": {
                "cpc": 17.01,
                "ctr": 100,
                "cpm": 17010,
                "cpa": 8.505
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl winter dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dresses review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "gifts for 1 year old baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl sweater haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby oye": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small children clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for kids": {
                "cpc": 48.93,
                "ctr": 100,
                "cpm": 48930,
                "cpa": 12.2325
            },
            "firstcry newborn clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "birthday dress for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter haul baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl frock haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry party wear dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry must haves for baby and mom": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping clothes": {
                "cpc": 45.81,
                "ctr": 100,
                "cpm": 45810,
                "cpa": 6.5442857142857145
            },
            "firstcry dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress 1 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys winter wear haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dresses firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry sweater for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girl clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "unisex new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for 12 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "christmas dress for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry offers today clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter jackets": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry frock for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby rompers": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons dress for girl": {
                "cpc": 32.62,
                "ctr": 100,
                "cpm": 32619.999999999996,
                "cpa": 16.31
            },
            "firstcry baby boy party wear dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch sale winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby sweater firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch birthday dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy birthday dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl winter dress": {
                "cpc": 98.35,
                "ctr": 100,
                "cpm": 98350,
                "cpa": 49.175
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry girl baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry jacket for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry suit for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www firstcry com clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy": {
                "cpc": 19.49,
                "ctr": 100,
                "cpm": 19490,
                "cpa": 19.49
            },
            "hopscotch dresses for 10 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl birthday dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby t shirts": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping clothes": {
                "cpc": 14.82,
                "ctr": 100,
                "cpm": 14820,
                "cpa": 7.41
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy winter dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry 2 year baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party dress for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby shopping firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress 2 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress 1 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "boys new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for newborn baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby cloth": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes on firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girls clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1 year baby boy birthday dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress on first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul babyhug disney simba print cute dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes store near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party dress 5 years": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons winter wear kids collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party wear dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl stylish dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls first cry baby dress": {
                "cpc": 18.87,
                "ctr": 100,
                "cpm": 18870,
                "cpa": 9.435
            },
            "lehenga for kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes 2 3 years firstcry": {
                "cpc": 14.35,
                "ctr": 100,
                "cpm": 14350,
                "cpa": 7.175
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "dress for girls first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress 4 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby girl collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby cotton top": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby products": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby hug": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby party frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter collection": {
                "cpc": 16.35,
                "ctr": 100,
                "cpm": 16350.000000000002,
                "cpa": 8.175
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry new born baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Trendy casual wear for kids": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "hopscotch kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear": {
                "cpc": 6.29,
                "ctr": 33.33333333333333,
                "cpm": 2096.6666666666665,
                "cpa": 0
            },
            "hopscotch winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "gifts for 1 year old baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids cloths": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for kids": {
                "cpc": 48.93,
                "ctr": 100,
                "cpm": 48930,
                "cpa": 12.2325
            },
            "birthday dress for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear in pantaloons": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry party wear dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry must haves for baby and mom": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys winter wear haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry sweater for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "hopscotch kids wear near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for 12 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "christmas dress for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry frock for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids shirt": {
                "cpc": 15.84,
                "ctr": 100,
                "cpm": 15840,
                "cpa": 15.84
            },
            "pantaloons dress for girl": {
                "cpc": 32.62,
                "ctr": 100,
                "cpm": 32619.999999999996,
                "cpa": 16.31
            },
            "firstcry baby boy party wear dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch birthday dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry jacket for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry suit for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for 10 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pine kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry ethnic wear haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear frocks haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids tshirt": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party dress for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress first cry": {
                "cpc": 5.11,
                "ctr": 7.6923076923076925,
                "cpm": 393.0769230769231,
                "cpa": 2.555
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for newborn baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girls wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry infant wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons winter wear kids collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids collection": {
                "cpc": 21.36,
                "ctr": 100,
                "cpm": 21360,
                "cpa": 5.34
            },
            "frocks for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party wear dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry girls ethnic wear haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "obori kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "lehenga for kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "dress for girls first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids fashion brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter collection": {
                "cpc": 16.35,
                "ctr": 100,
                "cpm": 16350.000000000002,
                "cpa": 8.175
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "None": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {}
    },
    "tracksuits for juniors sale": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "hopscotch for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "gifts for 1 year old baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for kids": {
                "cpc": 48.93,
                "ctr": 100,
                "cpm": 48930,
                "cpa": 12.2325
            },
            "birthday dress for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry party wear dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry must haves for baby and mom": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry sweater for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for 12 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "christmas dress for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry frock for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons dress for girl": {
                "cpc": 32.62,
                "ctr": 100,
                "cpm": 32619.999999999996,
                "cpa": 16.31
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch sale winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch birthday dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry jacket for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry suit for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch sale 2024": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for 10 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party dress for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for newborn baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "lehenga for kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "dress for girls first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch summer sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Best quality kids clothes": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "hopscotch kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes": {
                "cpc": 17.01,
                "ctr": 100,
                "cpm": 17010,
                "cpa": 8.505
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear": {
                "cpc": 6.29,
                "ctr": 33.33333333333333,
                "cpm": 2096.6666666666665,
                "cpa": 0
            },
            "hopscotch clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small children clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids cloths": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for kids": {
                "cpc": 48.93,
                "ctr": 100,
                "cpm": 48930,
                "cpa": 12.2325
            },
            "firstcry newborn clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear in pantaloons": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping clothes": {
                "cpc": 45.81,
                "ctr": 100,
                "cpm": 45810,
                "cpa": 6.5442857142857145
            },
            "first cry for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girl clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "unisex new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry offers today clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids shirt": {
                "cpc": 15.84,
                "ctr": 100,
                "cpm": 15840,
                "cpa": 15.84
            },
            "children clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry suit for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www firstcry com clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping clothes": {
                "cpc": 14.82,
                "ctr": 100,
                "cpm": 14820,
                "cpa": 7.41
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pine kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids tshirt": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress first cry": {
                "cpc": 5.11,
                "ctr": 7.6923076923076925,
                "cpm": 393.0769230769231,
                "cpa": 2.555
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "boys new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes on firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girls clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes store near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons winter wear kids collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids collection": {
                "cpc": 21.36,
                "ctr": 100,
                "cpm": 21360,
                "cpa": 5.34
            },
            "firstcry baby girl clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "obori kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "lehenga for kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes 2 3 years firstcry": {
                "cpc": 14.35,
                "ctr": 100,
                "cpm": 14350,
                "cpa": 7.175
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids fashion brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter collection": {
                "cpc": 16.35,
                "ctr": 100,
                "cpm": 16350.000000000002,
                "cpa": 8.175
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Kids Winterwear Online": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {}
    },
    "guugly wuugly": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {}
    },
    "festival outfits for toddlers": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "hopscotch for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "gifts for 1 year old baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for kids": {
                "cpc": 48.93,
                "ctr": 100,
                "cpm": 48930,
                "cpa": 12.2325
            },
            "birthday dress for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry party wear dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry must haves for baby and mom": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry sweater for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for 12 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "christmas dress for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry frock for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons dress for girl": {
                "cpc": 32.62,
                "ctr": 100,
                "cpm": 32619.999999999996,
                "cpa": 16.31
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch birthday dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry jacket for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry suit for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for 10 year girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party dress for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for newborn": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for newborn baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "lehenga for kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "dress for girls first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Sustainable baby clothing": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "hopscotch baby girl dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl winter dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dresses review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "gifts for 1 year old baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl sweater haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby oye": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "birthday dress for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter haul baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl frock haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry must haves for baby and mom": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress 1 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dresses firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry sweater for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "unisex new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "christmas dress for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry frock for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby rompers": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby sweater firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy birthday dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl winter dress": {
                "cpc": 98.35,
                "ctr": 100,
                "cpm": 98350,
                "cpa": 49.175
            },
            "hopscotch baby clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry girl baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry jacket for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy": {
                "cpc": 19.49,
                "ctr": 100,
                "cpm": 19490,
                "cpa": 19.49
            },
            "firstcry baby girl birthday dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby t shirts": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy winter dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry 2 year baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby shopping firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress 2 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress 1 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "boys new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for newborn baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby cloth": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes on firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1 year baby boy birthday dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress on first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes store near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party dress 5 years": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party wear dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl stylish dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls first cry baby dress": {
                "cpc": 18.87,
                "ctr": 100,
                "cpm": 18870,
                "cpa": 9.435
            },
            "baby boy clothes 2 3 years firstcry": {
                "cpc": 14.35,
                "ctr": 100,
                "cpm": 14350,
                "cpa": 7.175
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress 4 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby girl collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby cotton top": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby products": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby hug": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby party frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry new born baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Seasonal discounts on kidswear": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "pantaloons kidswear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes on firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress on first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Comfortable kids activewear": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "hopscotch kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear": {
                "cpc": 6.29,
                "ctr": 33.33333333333333,
                "cpm": 2096.6666666666665,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids cloths": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for kids": {
                "cpc": 48.93,
                "ctr": 100,
                "cpm": 48930,
                "cpa": 12.2325
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear in pantaloons": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "hopscotch kids wear near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids shirt": {
                "cpc": 15.84,
                "ctr": 100,
                "cpm": 15840,
                "cpa": 15.84
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry suit for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pine kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids tshirt": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress first cry": {
                "cpc": 5.11,
                "ctr": 7.6923076923076925,
                "cpm": 393.0769230769231,
                "cpa": 2.555
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons winter wear kids collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids collection": {
                "cpc": 21.36,
                "ctr": 100,
                "cpm": 21360,
                "cpa": 5.34
            },
            "kids dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "obori kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "lehenga for kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids fashion brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter collection": {
                "cpc": 16.35,
                "ctr": 100,
                "cpm": 16350.000000000002,
                "cpa": 8.175
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "kids' fashion India": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "hopscotch fashion": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry fashion": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry fashion": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids fashion brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Trendy kids' fashion": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "hopscotch fashion": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry fashion": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry fashion": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids fashion brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Buy baby clothes online": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "first cry com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes": {
                "cpc": 17.01,
                "ctr": 100,
                "cpm": 17010,
                "cpa": 8.505
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1st cry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl winter dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dresses review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "gifts for 1 year old baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl sweater haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby oye": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small children clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "birthday dress for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter haul baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "how to order dress in first firstcry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl frock haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping kaise kare": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry must haves for baby and mom": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www hopscotch online com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping clothes": {
                "cpc": 45.81,
                "ctr": 100,
                "cpm": 45810,
                "cpa": 6.5442857142857145
            },
            "firstcry dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress 1 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com online shopping tamil": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dresses firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry sweater for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girl clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "unisex new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "christmas dress for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1st cry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry offers today clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry frock for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby rompers": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby sweater firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www hopscotch com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy birthday dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl winter dress": {
                "cpc": 98.35,
                "ctr": 100,
                "cpm": 98350,
                "cpa": 49.175
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry girl baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping tamil": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry jacket for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping app": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www firstcry com clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch india online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy": {
                "cpc": 19.49,
                "ctr": 100,
                "cpm": 19490,
                "cpa": 19.49
            },
            "firstcry baby girl birthday dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby t shirts": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping clothes": {
                "cpc": 14.82,
                "ctr": 100,
                "cpm": 14820,
                "cpa": 7.41
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch shopping online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy winter dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry 2 year baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby shopping firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress 2 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress 1 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "boys new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for newborn baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby cloth": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com online shopping kaise kare": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes on firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girls clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1 year baby boy birthday dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress on first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry shop online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes store near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party dress 5 years": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shop online": {
                "cpc": 23.15,
                "ctr": 100,
                "cpm": 23150,
                "cpa": 11.575
            },
            "hopscotch baby girl party wear dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl stylish dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls first cry baby dress": {
                "cpc": 18.87,
                "ctr": 100,
                "cpm": 18870,
                "cpa": 9.435
            },
            "online shopping hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes 2 3 years firstcry": {
                "cpc": 14.35,
                "ctr": 100,
                "cpm": 14350,
                "cpa": 7.175
            },
            "hopscotch app online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress 4 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby girl collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby cotton top": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby products": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby hug": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby party frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry new born baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Kids fashion trends 2024": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "hopscotch fashion": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch sale 2024": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry fashion": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry fashion": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids fashion brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Premium baby outfits": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "hopscotch baby girl dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl winter dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dresses review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "gifts for 1 year old baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl sweater haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby oye": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "birthday dress for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter haul baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl frock haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry must haves for baby and mom": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress 1 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dresses firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry sweater for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "unisex new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "christmas dress for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry frock for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby rompers": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby sweater firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy birthday dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl winter dress": {
                "cpc": 98.35,
                "ctr": 100,
                "cpm": 98350,
                "cpa": 49.175
            },
            "hopscotch baby clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry girl baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry jacket for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy": {
                "cpc": 19.49,
                "ctr": 100,
                "cpm": 19490,
                "cpa": 19.49
            },
            "firstcry baby girl birthday dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby t shirts": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy winter dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry 2 year baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby shopping firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress 2 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress 1 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "boys new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for newborn baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby cloth": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes on firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1 year baby boy birthday dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress on first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes store near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party dress 5 years": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party wear dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl stylish dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls first cry baby dress": {
                "cpc": 18.87,
                "ctr": 100,
                "cpm": 18870,
                "cpa": 9.435
            },
            "baby boy clothes 2 3 years firstcry": {
                "cpc": 14.35,
                "ctr": 100,
                "cpm": 14350,
                "cpa": 7.175
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress 4 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby girl collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby cotton top": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby products": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby hug": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby party frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry new born baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Baby clothes sale in India": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "hopscotch shop in kochi": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes": {
                "cpc": 17.01,
                "ctr": 100,
                "cpm": 17010,
                "cpa": 8.505
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch in": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small children clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch in shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "how to order dress in first firstcry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear in pantaloons": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch store in lucknow": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch store in jaipur": {
                "cpc": 19.98,
                "ctr": 100,
                "cpm": 19980,
                "cpa": 9.99
            },
            "firstcry near me online shopping clothes": {
                "cpc": 45.81,
                "ctr": 100,
                "cpm": 45810,
                "cpa": 6.5442857142857145
            },
            "hopscotch winter sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girl clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "unisex new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch store in indore": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch store in hyderabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "https www hopscotch in": {
                "cpc": 9.8,
                "ctr": 100,
                "cpm": 9800,
                "cpa": 0
            },
            "new born baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry offers today clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch sale winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www firstcry com clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch store in gurgaon": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch sale 2024": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping clothes": {
                "cpc": 14.82,
                "ctr": 100,
                "cpm": 14820,
                "cpa": 7.41
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry shop address in hyderabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www hopscotch in": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry in dlf mall of india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "boys new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes on firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girls clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch showroom in delhi": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry shop in indore": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shop in coimbatore": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www hopscotch in company": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes store near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch store in delhi": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry in mysore": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry in": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes 2 3 years firstcry": {
                "cpc": 14.35,
                "ctr": 100,
                "cpm": 14350,
                "cpa": 7.175
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "hopscotch store in chennai": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch summer sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry in vijayawada": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry in nellore": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "how to order firstcry in tamil": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry in faridabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Designer baby clothes India": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "hopscotch baby girl dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes": {
                "cpc": 17.01,
                "ctr": 100,
                "cpm": 17010,
                "cpa": 8.505
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl winter dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dresses review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "gifts for 1 year old baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl sweater haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby oye": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small children clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "birthday dress for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter collection for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter haul baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl frock haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dresses for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry must haves for baby and mom": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry haul baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping clothes": {
                "cpc": 45.81,
                "ctr": 100,
                "cpm": 45810,
                "cpa": 6.5442857142857145
            },
            "firstcry dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress 1 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping haul baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dresses firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry sweater for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girl clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "unisex new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "christmas dress for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry offers today clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry frock for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby rompers": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby sweater firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy birthday dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl winter dress": {
                "cpc": 98.35,
                "ctr": 100,
                "cpm": 98350,
                "cpa": 49.175
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry girl baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry jacket for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www firstcry com clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy": {
                "cpc": 19.49,
                "ctr": 100,
                "cpm": 19490,
                "cpa": 19.49
            },
            "firstcry baby girl birthday dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby t shirts": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping clothes": {
                "cpc": 14.82,
                "ctr": 100,
                "cpm": 14820,
                "cpa": 7.41
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy winter dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry 2 year baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby shopping firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress 2 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress 1 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "boys new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry dress for newborn baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby cloth": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes on firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girls clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1 year baby boy birthday dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby girl dress on first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch dress for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry new born baby girl dress haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes store near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party dress 5 years": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party wear dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl stylish dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls first cry baby dress": {
                "cpc": 18.87,
                "ctr": 100,
                "cpm": 18870,
                "cpa": 9.435
            },
            "baby boy clothes 2 3 years firstcry": {
                "cpc": 14.35,
                "ctr": 100,
                "cpm": 14350,
                "cpa": 7.175
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "frocks for baby girl firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress 4 year": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby girl collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby cotton top": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby products": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter haul for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby jacket": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby hug": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby suit": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby party frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry new born baby girl dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Christmas Gifts": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {}
    },
    "Buy kids party wear online": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "first cry com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1st cry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear": {
                "cpc": 6.29,
                "ctr": 33.33333333333333,
                "cpm": 2096.6666666666665,
                "cpa": 0
            },
            "hopscotch winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids cloths": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for kids": {
                "cpc": 48.93,
                "ctr": 100,
                "cpm": 48930,
                "cpa": 12.2325
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "how to order dress in first firstcry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear in pantaloons": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry party wear dress for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping kaise kare": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www hopscotch online com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping clothes": {
                "cpc": 45.81,
                "ctr": 100,
                "cpm": 45810,
                "cpa": 6.5442857142857145
            },
            "first cry for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys winter wear haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com online shopping tamil": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "hopscotch kids wear near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1st cry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids shirt": {
                "cpc": 15.84,
                "ctr": 100,
                "cpm": 15840,
                "cpa": 15.84
            },
            "firstcry baby boy party wear dresses": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www hopscotch com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping tamil": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry suit for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping app": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch india online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pine kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch shopping online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry ethnic wear haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch winter wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear frocks haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl dress haul party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids tshirt": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party dress for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress first cry": {
                "cpc": 5.11,
                "ctr": 7.6923076923076925,
                "cpm": 393.0769230769231,
                "cpa": 2.555
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com online shopping kaise kare": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry shop online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby boy dress party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girls wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl ethnic wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party dress 5 years": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry infant wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons winter wear kids collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids collection": {
                "cpc": 21.36,
                "ctr": 100,
                "cpm": 21360,
                "cpa": 5.34
            },
            "online firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch party wear dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shop online": {
                "cpc": 23.15,
                "ctr": 100,
                "cpm": 23150,
                "cpa": 11.575
            },
            "hopscotch baby girl party wear dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry girls ethnic wear haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "obori kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "lehenga for kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch app online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids fashion brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby girl party dress review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry party frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby party frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter collection": {
                "cpc": 16.35,
                "ctr": 100,
                "cpm": 16350.000000000002,
                "cpa": 8.175
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "kids clothes online": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {
            "buy kids clothes online": {
                "cpc": 23.67,
                "ctr": 100,
                "cpm": 23670,
                "cpa": 11.835
            },
            "kids clothes online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes online india": {
                "cpc": 27.65,
                "ctr": 100,
                "cpm": 27650,
                "cpa": 5.529999999999999
            },
            "kids clothes india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        },
        "phrase match (close variant)": {
            "kids clothes brands": {
                "cpc": 23.49,
                "ctr": 100,
                "cpm": 23490,
                "cpa": 11.745
            },
            "first cry com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes": {
                "cpc": 17.01,
                "ctr": 100,
                "cpm": 17010,
                "cpa": 8.505
            },
            "kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1st cry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear": {
                "cpc": 6.29,
                "ctr": 33.33333333333333,
                "cpm": 2096.6666666666665,
                "cpa": 0
            },
            "hopscotch clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "small children clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids cloths": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry for kids": {
                "cpc": 48.93,
                "ctr": 100,
                "cpm": 48930,
                "cpa": 12.2325
            },
            "firstcry newborn clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "how to order dress in first firstcry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch newborn baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear in pantaloons": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping kaise kare": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothing": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www hopscotch online com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping clothes": {
                "cpc": 45.81,
                "ctr": 100,
                "cpm": 45810,
                "cpa": 6.5442857142857145
            },
            "first cry for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby winter clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india baby kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com online shopping tamil": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for baby girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girl clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry near me online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "unisex new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes winter": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids dress": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby dresses firstcry online shopping for girl": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "1st cry online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry offers today clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids shirt": {
                "cpc": 15.84,
                "ctr": 100,
                "cpm": 15840,
                "cpa": 15.84
            },
            "firstcry online shopping for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "children clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www hopscotch com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "newborn baby clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "girls pantaloons online shopping for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry com online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping sale": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping tamil": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping malayalam": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry suit for kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids party wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids sweater": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping app": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "www firstcry com clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best brands for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch india online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shopping clothes": {
                "cpc": 14.82,
                "ctr": 100,
                "cpm": 14820,
                "cpa": 7.41
            },
            "kids clothes branded": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes set": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "include kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes myntra": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pine kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch shopping online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands list": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry kids wear": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online shopping india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids tshirt": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress first cry": {
                "cpc": 5.11,
                "ctr": 7.6923076923076925,
                "cpm": 393.0769230769231,
                "cpa": 2.555
            },
            "firstcry online shopping for baby": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand for kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "branded kids clothes near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "boys new born baby clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry com online shopping kaise kare": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes on firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch girls clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry india online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby firstcry online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids wear for girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids girls": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids clothes ahmedabad": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby clothes hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry shop online": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids com": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch online store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby clothes india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids first cry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "top brand kids clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes best brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "new born baby clothes store near me": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "babyoye clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons winter wear kids collection": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids collection": {
                "cpc": 21.36,
                "ctr": 100,
                "cpm": 21360,
                "cpa": 5.34
            },
            "online firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry baby girl clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids dress firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry india baby and kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids apparel brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "best kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry online shop": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry shop online": {
                "cpc": 23.15,
                "ctr": 100,
                "cpm": 23150,
                "cpa": 11.575
            },
            "firstcry online shopping store": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids frocks": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "pantaloons kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry clothes for baby boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry boys clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "online shopping hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "obori kids": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "lehenga for kids firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids boys": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "baby boy clothes 2 3 years firstcry": {
                "cpc": 14.35,
                "ctr": 100,
                "cpm": 14350,
                "cpa": 7.175
            },
            "hopscotch app online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "first cry baby and kids shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "popular kids clothes brands": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "winter wear for kids hopscotch": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids wear firstcry": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids frock": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands in india": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids fashion brand": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "kids clothes brands name": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry kids lehenga": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping for boy": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids online shopping": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "hopscotch kids winter collection": {
                "cpc": 16.35,
                "ctr": 100,
                "cpm": 16350.000000000002,
                "cpa": 8.175
            },
            "hopscotch kids clothes review": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "firstcry online shopping baby boy clothes": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            },
            "meesho new born baby clothes haul": {
                "cpc": 0,
                "ctr": 0,
                "cpm": 0,
                "cpa": 0
            }
        }
    },
    "Travelling Essential": {
        "exact match": {},
        "exact match (close variant)": {},
        "phrase match": {},
        "phrase match (close variant)": {}
    }
}

export default function KeywordTable() {
    const [expanded, setExpanded] = useState({});
    const [selectedMatchType, setSelectedMatchType] = useState("phrase match (close variant)");

    const toggleExpand = (keyword) => {
        setExpanded((prev) => ({ ...prev, [keyword]: !prev[keyword] }));
    };

    return (
        <div className="p-4">
            <select
                className="border p-2 mb-4"
                value={selectedMatchType}
                onChange={(e) => setSelectedMatchType(e.target.value)}
            >
                <option value="phrase match (close variant)">Phrase Match (Close Variant)</option>
                <option value="exact match">Exact Match</option>
                <option value="exact match (close variant)">Exact Match (Close Variant)</option>
            </select>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Keyword</th>
                        <th className="border p-2">CPC</th>
                        <th className="border p-2">CTR</th>
                        <th className="border p-2">CPM</th>
                        <th className="border p-2">CPA</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([keyword, matchTypes]) => {
                        const aggregated = matchTypes[selectedMatchType]
                            ? Object.values(matchTypes[selectedMatchType]).reduce(
                                (acc, kpi) => ({
                                    cpc: acc.cpc + kpi.cpc,
                                    ctr: acc.ctr + kpi.ctr,
                                    cpm: acc.cpm + kpi.cpm,
                                    cpa: acc.cpa + kpi.cpa,
                                }),
                                { cpc: 0, ctr: 0, cpm: 0, cpa: 0 }
                            )
                            : { cpc: 0, ctr: 0, cpm: 0, cpa: 0 };

                        return (
                            <>
                                <tr key={keyword} className="bg-gray-50">
                                    <td className="border p-2 font-bold">
                                        <button
                                            className="text-left w-full"
                                            onClick={() => toggleExpand(keyword)}
                                        >
                                            {expanded[keyword] ? "▼" : "▶"} {keyword}
                                        </button>
                                    </td>
                                    <td className="border p-2 font-bold">{aggregated.cpc.toFixed(2)}</td>
                                    <td className="border p-2 font-bold">{aggregated.ctr.toFixed(2)}</td>
                                    <td className="border p-2 font-bold">{aggregated.cpm.toFixed(2)}</td>
                                    <td className="border p-2 font-bold">{aggregated.cpa.toFixed(2)}</td>
                                </tr>
                                {expanded[keyword] && matchTypes[selectedMatchType] &&
                                    Object.entries(matchTypes[selectedMatchType]).map(([searchTerm, kpi]) => (
                                        <tr key={searchTerm} className="text-gray-600">
                                            <td className="border p-2 pl-8">{searchTerm}</td>
                                            <td className="border p-2">{Number(kpi.cpc).toFixed(2)}</td>
                                            <td className="border p-2">{Number(kpi.ctr).toFixed(2)}</td>
                                            <td className="border p-2">{Number(kpi.cpm).toFixed(2)}</td>
                                            <td className="border p-2">{Number(kpi.cpa).toFixed(2)}</td>
                                        </tr>
                                    ))}
                            </>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
