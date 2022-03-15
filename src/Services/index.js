import axios from "axios";
import React ,{usestate} from "react"
const endpoint = "testnet.waxsweden.org";
const url = "https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=nkftestnetio&page=1&limit=100&order=desc&sort=asset_id"


export const GetAssets = (colc, rates) => {
  axios
    .get(
      `https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=nkftestnetio&page=1&limit=100&order=desc&sort=asset_id`
    )
    .then((response) => {
      if (response.data.success === true) {
        console.log("Response", response.data.data);
      } else {
        console.log("Error");
      }
    });
};
// get model machine
export let storemodlingMachine = [];

export const getmodlingMachine = () => {
  axios.get(url).then((res) => {
    if (res.data.success === true) {
      console.log("storemodlingMachineResponse", res.data.data);
      let resultData = res.data.data;
      resultData.filter((i) => {
        if (i.data.name === "Molding Machine")

          storemodlingMachine.push({
            asset_id: i.asset_id,
            description: i.data.description,
            img: i.data.img, 
            material: i.data.material,
             rarity: i.data.rarity
          });
      })
    } else {
      console.log("Error");
    }

  }).catch((err) => {
    console.log(err);
  })
}
//leather cutter
export let storeLeatherCutter = [];

export const getLeatherCutter = () => {
  axios.get(url).then((res) => {
    if (res.data.success === true) {
     // console.log("Leather Cutter", res.data.data);
      let resultData = res.data.data;
     // console.log("resultData" ,resultData);
      resultData.filter((i) => {
        if (i.data.name === "Leather Cutter")
             // console.log(i,"hiucguiydcghudiwghciu");
              storeLeatherCutter.push({
            asset_id: i.asset_id,
            description: i.data.description,
            img: i.data.img, 
            material: i.data.material,
             rarity: i.data.rarity
          });
      })
    } else {
      console.log("Error");
    }

  }).catch((err) => {
    console.log(err);
  })
}
// sewing machince
export let storeSewingMachine = [];

export const getsewingMachine = () => {
  axios.get(url).then((res) => {
    if (res.data.success === true) {
     console.log("Leather Cutter", res.data.data);
      let resultData = res.data.data;
     // console.log("resultData" ,resultData);
      resultData.filter((i) => {
        if (i.data.name === "Leather Cutter")
             // console.log(i,"hiucguiydcghudiwghciu");
             storeSewingMachine.push({
            asset_id: i.asset_id,
            description: i.data.description,
            img: i.data.img, 
            material: i.data.material,
             rarity: i.data.rarity
          });
      })
    } else {
      console.log("Error");
    }

  }).catch((err) => {
    console.log(err);
  })
}
getsewingMachine();
//Factory Building
export let storeFactoryBuilding = [];

export const getFactoryBuilding = () => {
  axios.get(url).then((res) => {
    if (res.data.success === true) {
      console.log("Leather Cutter333", res.data.data);
      let resultData = res.data.data;
     // console.log("resultData" ,resultData);
      resultData.filter((i) => {
        if (i.data.name === "Leather Cutter")
             // console.log(i,"hiucguiydcghudiwghciu");
             storeFactoryBuilding.push({
            asset_id: i.asset_id,
            description: i.data.description,
            img: i.data.img, 
            material: i.data.material,
             rarity: i.data.rarity,
             owner:i.owner,
          });
      })
    } else {
      console.log("Error");
    }

  }).catch((err) => {
    console.log(err);
  })
}
getFactoryBuilding();
// console.log(storeFactoryBuilding ,"gajubhai");
const urls = "https://testnet.waxsweden.org";
const path = "/v1/chain/get_table_rows";

export const GetConfige = () => {
  const payload = {
    json: true,
    code: "nkfactoryyyy",
    scope: "nkfactoryyyy",
    table: "fctrydata",
    limit: 1000,
  };
  axios({
    method: "post",
    url: `${urls}` + `${path}`,
    data: payload,
    // body:
    headers: {
      // 'Authorization': `bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
};

export const FilterStaked = () => {
  const payload = {
    json: true,
    code: "nkfactoryyyy",
    scope: "nkfactoryyyy",
    table: "machines",
    key_type: `i64`,
    index_position: 2,
    //lower_bound: eosjsName.nameToUint64(wallet_userAccount),
    limit: 2000,
  };
  axios({
    method: "post",
    url: `${urls}` + `${path}`,
    data: payload,
    headers: {
      // 'Authorization': `bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
};


export const GetBalance = () => {
  const payload = {
    json: true,
    code: "nkfactorytkn",
    //scope: wallet_userAccount,
    table: "accounts",
    limit: 1000,
  };
  axios({
    method: "post",
    url: `${urls}` + `${path}`,
    data: payload,
    // body:
    headers: {
      // 'Authorization': `bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      console.log('test',response);
    })
    .catch(function (response) {
      console.log('test error',response);
    });
};
//create array to store the image and building name


// var templateid= ""
// // start new funtion of get template ID
// export const GetTemplatesById= (templateid)=>{
//   const storeDataTemplateById= []

// const url=`https://test.wax.api.atomicassets.io/atomicassets/v1/templates/nkftestnetio/`+templateid;
// const payload = {
//   json: true,
//   code: "nkfactorytkn",
//   table: "accounts",
//   limit: 100,
// };
// axios({
//   method: "post",
//   url: `${url}` ,
//   data: payload,
//   // body:
//   headers: {
//     // 'Authorization': `bearer ${token}`,
//     "Content-Type": "application/json",
//   },
// }).then((res)=>{
//   if (res.data.success === true){
//     // console.log(res.data.data.immutable_data,"GetTemplatesById")
//     let resultData=res.data.data;
//     console.log("GetTemplatesByIdsunil" ,resultData);
//     resultData.immutable_data.map((i)=>{
//      const name = {
//        img:i.img,
//        rarity:i.rarity
//      }
//      console.log(name ,"namenamenamenamename");

//     })
//   }
//   // console.log(storeDataTemplateById ,"11111========") 
// }).then((err)=>{
// console.log(err);
// })
// }
// GetTemplatesById("337615" );


export let arrdropdown = [];

export const GetTemplatesById = (templateid) => {
  const url=`https://test.wax.api.atomicassets.io/atomicassets/v1/templates/nkftestnetio/`+templateid;
  axios.get(url).then((res) => {
    if (res.data.success === true) {
    // console.log("sumill", res.data.data.immutable_data);
      let resultData = res.data.data;
     // console.log("resultData" ,resultData);
      // resultData.filter((i) => {
      //   if (i.data.name === "Leather Cutter")
      //        // console.log(i,"hiucguiydcghudiwghciu");
      //        storeSewingMachine.push({
      //       asset_id: i.asset_id,
      //       description: i.data.description,
      //       img: i.data.img, 
      //       material: i.data.material,
      //        rarity: i.data.rarity
      //     });
      // })
      arrdropdown.push({
        img:res.data.data.immutable_data.img,
        rarity:res.data.data.immutable_data.rarity
      })
      
    } else {
      console.log("Error");
    }

  }).catch((err) => {
    console.log(err);
  })
}
GetTemplatesById(337615);
GetTemplatesById(337616);
GetTemplatesById(337617);

let assectdata = [];


const assectid = (asset_id )=>{
  const url =`https://test.wax.api.atomicassets.io/atomicassets/v1/assets/`+asset_id;
  axios.get(url).then((res)=>{
    //console.log(res.data ,"1099527545128")
    let resultdata=res.data.data;
    assectdata.push({
      img:res.data.data.img,
      name:res.data.data.name
    })
  })
}
console.log(assectdata ,"assectidassectidassectid")

assectid(1099527545128);


