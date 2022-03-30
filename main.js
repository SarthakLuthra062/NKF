let endpoint = "https://wax.greymass.com";
const wax = new waxjs.WaxJS({
  rpcEndpoint: endpoint,
  tryAutoLogin: false
});
const transport = new AnchorLinkBrowserTransport();
const anchorLink = new AnchorLink({
  transport,
  chains: [{
    chainId: '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4',
    nodeUrl: endpoint,
  }],
});
const dapp = "NiftyKicks";
const tokenContract = "nkfactorytkn";
const labourer_schema = "skilledlabor";
var t = 0;
let staked_lbr = [];

var anchorAuth = "owner";
main();
var loggedIn = false;
var src = "https://ipfs.infura.io/ipfs/";
var switchtostaked = true;
var collection = 'niftykicksio';
var canclick = false;
var mainDiv = document.getElementById("maindiv");
var scrolldiv = document.getElementById("scrolldiv");
var loader = document.getElementById('loader').style;
var lvlloader = document.getElementById('lvlloader').style;
var overflow = document.getElementById('body').style;
let bank_index = 'true';
let labour_index = 'true';
let main_view_type = 'Factory Building';
let craft_index = 'true';
let deposit_index = 'true';
var bank_input = document.getElementById("bank_input");
var deposit_input = document.getElementById("sliderRangeText");
var final_amt = document.getElementById("final_amt");
var fees = document.getElementById("fees");
fees.value = "BANK FEES : " + "7%";
var selected_token_bank = "NKFE";
var wax_balance_static = [];
var user_balance_static = [];
var allintervals = {};
var interval_ids = []
var start_timer = false;
var reg_dereg = false;
var dropdown_clicked = false;

async function main() {

  if (!loggedIn)
    autoLogin();
  else {

    clearUi();
    loader.display = "block";
    lvlloader.display = "none";

    ratespromise = GetFctryData();
    rates = await ratespromise;
    document.getElementById("loadingText").value = "Loading Factory Data ...";

    staked_lbrs = await GetStakedLbrData();

    boostpromise = GetBoostData();
    boostdata = await boostpromise;
    console.log("rate " + new Date().toUTCString());
    document.getElementById("loadingText").value = "Loading Boost Data ...";

    pack = GetCraftData();
    craftdata = await pack;
    console.log("pack " + new Date().toUTCString());
    document.getElementById("loadingText").value = "Loading Craft Data ...";

    assetPromise = GetAssets(collection, rates);
    assets = await assetPromise;
    document.getElementById("loadingText").value = "Loading Asset Data ...";

    lbrPromise = GetLbrers(collection, boostdata, staked_lbrs);
    labourers = await lbrPromise;
    console.log("asset " + new Date().toUTCString());
    console.log(labourers);
    document.getElementById("loadingText").value = "Loading Labourer Data ...";

    stakepromise = FilterStaked(assets);
    staked = await stakepromise;
    console.log(staked);
    console.log("stk " + new Date().toUTCString());
    document.getElementById("loadingText").value = "Loading Staked Assets Data ...";

    balancepromise = GetGBalance();
    balance = await balancepromise;
    console.log("balance " + new Date().toUTCString());
    user_balance_static = balance;
    document.getElementById("loadingText").value = "Loading User Balance Data ...";

    wbalancepromise = GetBalance();
    wbalance = await wbalancepromise;
    console.log("balance " + new Date().toUTCString());
    wax_balance_static = wbalance;
    unstaked = FilterUnstaked(assets, staked);

    document.getElementById("loadingText").value = "Setting UI ...";
    !reg_dereg ? PopulateMenu(rates, craftdata, boostdata, labourers, staked, unstaked, balance) : "";

    canclick = true;
    console.log("ui " + new Date().toUTCString());
  }
}

async function switchmaintype(type) {
  main_view_type = type;
  await clearUi();
  PopulateMenu(rates, craftdata, boostdata, labourers, staked, unstaked, balance);
}

async function stakeall() {

  if (unstaked.length == 0) {
    Toastify({
      text: "No unstaked assets!",
      duration: 2000,
    }).showToast();
    return;
  }
  if (loggedIn) {

    HideMessage();

    var ids = [];
    for (let i = 0; i < unstaked.length; i++) {
      ids.push(parseInt(unstaked[i].asset_id));
    }
    try {

      const result = await wallet_transact([{
        account: contract,
        name: "regmch",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: {
          asset_ids: ids,
          player: wallet_userAccount,
        },
      }, ]);
      await main();
      ShowToast("All Assets Staked Successfully !");
    } catch (e) {
      console.log(e);
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}

async function stakeasset(assetId) {

  if (loggedIn) {

    HideMessage();

    try {

      const result = await wallet_transact([{
        account: contract,
        name: "stakeassets",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: {
          _user: wallet_userAccount,
          asset_ids: [assetId]
        },
      }, ]);
      await main();
      ShowToast("All Assets Staked Successfully !");
    } catch (e) {
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}



function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}


async function assetunstake(assetId) {
  if (loggedIn) {

    HideMessage();

    try {

      var data1 = {
        asset_ids: [assetId]
      };
      const result = await wallet_transact([{
        account: contract,
        name: "removenft",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: data1,
      }, ]);
      await main();
      ShowToast("Asset Unstaked Successfully");
    } catch (e) {
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}

async function deregmch(asset_id) {
  if (loggedIn) {

    HideMessage();

    try {

      var data1 = {
        asset_ids: [asset_id],
        player: wallet_userAccount
      };
      const result = await wallet_transact([{
        account: contract,
        name: "deregmch",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: data1,
      }, ]);
      ShowToast("Asset staked Successfully!");
      await main();
    } catch (e) {
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}
async function regmch(asset_id) {
  if (loggedIn) {

    HideMessage();

    try {

      var data1 = {
        asset_ids: [asset_id],
        player: wallet_userAccount
      };
      const result = await wallet_transact([{
        account: contract,
        name: "regmch",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: data1,
      }, ]);
      ShowToast("Asset staked Successfully!");
      await main();
    } catch (e) {
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}
async function claimfctry(asset_id) {
  if (loggedIn) {

    HideMessage();

    try {

      var data1 = {
        asset_id: asset_id,
      };
      const result = await wallet_transact([{
        account: contract,
        name: "claimmch",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: data1,
      }, ]);
      ShowToast("Tokens Claimed Successfully !");
      await main();
    } catch (e) {
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}
async function regboost(asset_id, mch_id) {
  if (loggedIn) {

    HideMessage();

    try {

      var data1 = {
        asset_ids: [asset_id],
        player: wallet_userAccount,
        building_id: mch_id
      };
      const result = await wallet_transact([{
        account: contract,
        name: "regboost",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: data1,
      }, ]);
      ShowToast("Boost registered Successfully !");
      switch_to_labourers();
      await main();
    } catch (e) {
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}

async function deregboost(asset_id) {
  if (loggedIn) {

    HideMessage();

    try {

      var data1 = {
        asset_ids: [asset_id],
        player: wallet_userAccount,
      };
      const result = await wallet_transact([{
        account: contract,
        name: "deregboost",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: data1,
      }, ]);
      ShowToast("Boost deregistered Successfully !");
      await main();
    } catch (e) {
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}
async function withdraw_tokens(quantity, asset_id) {
  console.log(quantity);
  if (loggedIn) {

    HideMessage();

    try {

      var data1 = {
        player: wallet_userAccount,
        asset_id: asset_id,
        quantity: quantity
      };
      const result = await wallet_transact([{
        account: contract,
        name: "withdraw",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: data1,
      }, ]);
      ShowToast("Tokens Withdrawn Successfully !");
      if(bank_index == "false")
      {
        switch_to_bank();
        await main();
        switch_to_bank();
      }
      else{
        switch_to_deposit();
        await main();
      }
      bank_select(document.getElementById("bank_dropdown").value);
    } catch (e) {
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}

async function deposit_tokens(quantity) {
  console.log(quantity);
  if (loggedIn) {

    HideMessage();

    try {

      var data1 = {
        from: wallet_userAccount,
        to: contract,
        quantity: quantity,
        memo: "deposit"
      };
      const result = await wallet_transact([{
        account: "nkfactorytkn",
        name: "transfer",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: data1,
      }, ]);
      ShowToast("Tokens Deposited Successfully !");
      switch_to_bank();
      await main();
      switch_to_bank();
      bank_select(document.getElementById("bank_dropdown").value);
    } catch (e) {
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}

async function deposit(asset_id, quantity) {
  if (loggedIn) {
    HideMessage();
    try {
      console.log(quantity);
      var data1 = {
        player: wallet_userAccount,
        asset_id: asset_id,
        quantity: quantity,
      };
      const result = await wallet_transact([{
        account: contract,
        name: "depositnrg",
        authorization: [{
          actor: wallet_userAccount,
          permission: anchorAuth
        }],
        data: data1,
      }, ]);
      ShowToast("Tokens Deposited Successfully !");
      switch_to_deposit();
      await main();
    } catch (e) {
      ShowToast(e.message);
    }

  } else {
    WalletListVisible(true);
  }
}

function FilterUnstaked(assets, staked) {
  let results = [];
  for (let i = 0; i < assets.length; i++) {
    var check = false;
    for (let j = 0; j < staked.length; j++) {
      if (staked[j].asset_id == assets[i].asset_id)
        check = true;
    }
    if (!check) {
      results.push(assets[i]);
    }
  }
  return results;
}


async function FilterStaked(assets) {
  let results = [];
  var path = "/v1/chain/get_table_rows";
  var data = JSON.stringify({
    json: true,
    code: contract,
    scope: contract,
    table: "machines",
    key_type: `i64`,
    index_position: 2,
    lower_bound: eosjsName.nameToUint64(wallet_userAccount),
    upper_bound: eosjsName.nameToUint64(wallet_userAccount),
    limit: 2000,
  });

  const response = await fetch(endpoint + path, {
    headers: {
      "Content-Type": "text/plain"
    },
    body: data,
    method: "POST",
  });

  const body = await response.json();
  if (typeof data !== "undefined") {
    for (let i = 0; i < body.rows.length; i++) {
      var data = body.rows[i];
      for (let i = 0; i < assets.length; i++) {
        if (data.asset_id == assets[i].asset_id && data.owner == wallet_userAccount) {
          if (data.labourer_id != "0")
            staked_lbr.push(data.labourer_id);
          results.push({
            asset_id: data.asset_id,
            name: assets[i].name,
            owner: data.owner,
            template_id: data.template_id,
            power: data.power,
            last_claim: data.last_claim,
            delay: data.delay,
            token_in: data.token_in,
            nrgstorage: data.nrgstorage,
            maxstorage: assets[i].maxstorage,
            rarity: assets[i].rarity,
            labourer_boost: data.labourer_boost,
            labourer_id: data.labourer_id,
            badge: data.badge,
            craft_id: data.craft_id,
            img: assets[i].img,
            rarity_type: assets[i].rarity_type,
            material_type: assets[i].material_type
          });
        }
      }
    }
  }
  return results;
}


function restartTimer() {

}

async function GetLbrers(colc, rates, staked_lbrs) {
  let results = [];
  var path = "atomicassets/v1/assets?collection_name=" + colc + "&schema_name=" + labourer_schema + "&owner=" + wallet_userAccount + "&page=1&limit=1000&order=desc&sort=asset_id";
  const response = await fetch("https://wax-aa.eu.eosamsterdam.net/" + path, {
    headers: {
      "Content-Type": "text/plain"
    },
    method: "POST",
  });
  console.log(staked_lbrs);
  const body = await response.json();
  console.log(body.data);
  for (i = 0; i < body.data.length; i++) {
    var data = body.data[i];
    for (n = 0; n < rates.length; n++) {
      if (data.template.template_id == rates[n].template_id) {
        let status = false;
        if (staked_lbrs.includes(data.asset_id))
          status = true;
        results.push({
          asset_id: data.asset_id,
          img: data.data.img,
          name: data.name,
          machines: rates[n].machines,
          type: rates[n].type,
          boostdata: rates[n].boostdata,
          rarity: typeof (data.data.rarity) != 'undefined' ? data.data.rarity : "",
          staked: status
        });
      }
    }

  }
  console.log(results);
  return results;
}

async function GetAssets(colc, rates) {
  let results = [];
  var path = "atomicassets/v1/assets?collection_name=" + colc + "&owner=" + wallet_userAccount + "&page=1&limit=1000&order=desc&sort=asset_id";
  const response = await fetch("https://wax-aa.eu.eosamsterdam.net/" + path, {
    headers: {
      "Content-Type": "text/plain"
    },
    method: "POST",
  });
  const body = await response.json();
  for (const data of body.data) {
    var maxstorage, rarity = "";
    for (const rate of rates) {
      if (data.template.template_id == rate.template_id) {
        maxstorage = rate.nrgstorage;
        rarity = rate.rarity;
        results.push({
          asset_id: data.asset_id,
          img: data.data.img,
          name: data.name,
          maxstorage: maxstorage,
          rarity: rarity,
          rarity_type: typeof (data.data.rarity) != 'undefined' ? data.data.rarity : "",
          schema: data.schema.schema_name,
          material_type: typeof (data.data.material) != 'undefined' ? data.data.material : "",
        });
      }
    }
  }
  return results;
}

async function GetFctryData() {
  var path = "/v1/chain/get_table_rows";

  var data = JSON.stringify({
    json: true,
    code: contract,
    scope: contract,
    table: "fctrydata",
    limit: 1000,
  });

  const response = await fetch(endpoint + path, {
    headers: {
      "Content-Type": "text/plain"
    },
    body: data,
    method: "POST",
  });

  var rates = [];
  const body = await response.json();

  if (body.rows.length != 0) {
    for (let i = 0; i < body.rows.length; i++) {
      rates.push({
        template_id: body.rows[i].template_id,
        type: body.rows[i].type,
        token_in: body.rows[i].token_in,
        token_out: body.rows[i].token_out,
        nrgstorage: body.rows[i].nrgstorage,
        rarity: body.rows[i].rarity,
      })
    }
  }
  return rates;
}
async function GetBoostData() {
  var path = "/v1/chain/get_table_rows";

  var data = JSON.stringify({
    json: true,
    code: contract,
    scope: contract,
    table: "boostdata",
    limit: 1000,
  });

  const response = await fetch(endpoint + path, {
    headers: {
      "Content-Type": "text/plain"
    },
    body: data,
    method: "POST",
  });

  var rates = [];
  const body = await response.json();

  if (body.rows.length != 0) {
    for (let i = 0; i < body.rows.length; i++) {
      rates.push({
        template_id: body.rows[i].template_id,
        type: body.rows[i].type,
        boostdata: body.rows[i].boostdata,
        machines: body.rows[i].machines,
        rarity: body.rows[i].rarity
      })
    }
  }
  console.log(rates);
  return rates;
}

async function GetStakedLbrData() {
  var path = "/v1/chain/get_table_rows";

  var data = JSON.stringify({
    json: true,
    code: contract,
    scope: contract,
    table: "boosts",
    key_type: `i64`,
    index_position: 2,
    lower_bound: eosjsName.nameToUint64(wallet_userAccount),
    upper_bound: eosjsName.nameToUint64(wallet_userAccount),
    limit: 2000
  });

  const response = await fetch(endpoint + path, {
    headers: {
      "Content-Type": "text/plain"
    },
    body: data,
    method: "POST",
  });

  var lbr_data = [];
  const body = await response.json();
  console.log(body);

  if (body.rows.length != 0) {
    for (const bdata of body.rows) {
      if (bdata.owner == wallet_userAccount)
        lbr_data.push(bdata.asset_id);
    }
  }
  return lbr_data;
}

async function GetGBalance() {

  var path = "/v1/chain/get_table_rows";

  var data = JSON.stringify({
    json: true,
    code: contract,
    scope: wallet_userAccount,
    table: "balances",
    limit: 1000,
  });

  const response = await fetch(endpoint + path, {
    headers: {
      "Content-Type": "text/plain"
    },
    body: data,
    method: "POST",
  });

  var result = [];
  const body = await response.json();
  balance = parseFloat(0.0000);
  balance1 = parseFloat(0.0000);
  balance2 = parseFloat(0.0000);
  balance3 = parseFloat(0.0000);
  if (body.rows.length != 0) {
    for (j = 0; j < body.rows.length; j++) {
      var bb = parseFloat(body.rows[j].balance).toFixed(4);
      result.push(body.rows[j]);
      if (body.rows[j].balance.includes("NKFE"))
        balance = bb;
      if (body.rows[j].balance.includes("NKFL"))
        balance1 = bb;
      if (body.rows[j].balance.includes("NKFT"))
        balance2 = bb;
      if (body.rows[j].balance.includes("NKFR"))
        balance3 = bb;
    }
  }
  document.getElementById('NKFE').value = balance.toLocaleString('en-US') + " " + "NKFE";
  document.getElementById('NKFL').value = balance1.toLocaleString('en-US') + " " + "NKFL";
  document.getElementById('NKFT').value = balance2.toLocaleString('en-US') + " " + "NKFT";
  document.getElementById('NKFR').value = balance3.toLocaleString('en-US') + " " + "NKFR";

  console.log(result);
  return result;

}

async function GetBalance() {

  var path = "/v1/chain/get_table_rows";

  var data = JSON.stringify({
    json: true,
    code: "nkfactorytkn",
    scope: wallet_userAccount,
    table: "accounts",
    limit: 1000,
  });

  const response = await fetch(endpoint + path, {
    headers: {
      "Content-Type": "text/plain"
    },
    body: data,
    method: "POST",
  });

  const body = await response.json();

  balance = parseFloat(0.0000);
  balance1 = parseFloat(0.0000);
  balance2 = parseFloat(0.0000);
  balance3 = parseFloat(0.0000);
  if (body.rows.length != 0) {
    for (j = 0; j < body.rows.length; j++) {
      if (body.rows[j].balance.includes("NKFE"))
        balance = parseFloat(body.rows[j].balance).toFixed(4);
      if (body.rows[j].balance.includes("NKFL"))
        balance1 = parseFloat(body.rows[j].balance).toFixed(4);
      if (body.rows[j].balance.includes("NKFT"))
        balance2 = parseFloat(body.rows[j].balance).toFixed(4);
      if (body.rows[j].balance.includes("NKFR"))
        balance3 = parseFloat(body.rows[j].balance).toFixed(4);
    }
  }
  /*document.getElementById('balance').innerHTML = balance.toLocaleString('en-US') + " " + symbol;
  document.getElementById('balance1').innerHTML = balance1.toLocaleString('en-US') + " " + symbol;
  document.getElementById('balance2').innerHTML = balance2.toLocaleString('en-US') + " " + symbol;
  document.getElementById('balance3').innerHTML = balance3.toLocaleString('en-US') + " " + symbol;*/

  return body.rows;

}

async function GetCraftData() {
  var path = "/v1/chain/get_table_rows";

  var data = JSON.stringify({
    json: true,
    code: contract,
    scope: contract,
    table: "craftdata",
    limit: 1000,
  });

  const response = await fetch(endpoint + path, {
    headers: {
      "Content-Type": "text/plain"
    },
    body: data,
    method: "POST",
  });

  var rates = [];
  const body = await response.json();

  if (body.rows.length != 0) {
    for (let i = 0; i < body.rows.length; i++) {
      rates.push({
        craft_id: body.rows[i].craft_id,
        template_id: body.rows[i].template_id,
        costs: body.rows[i].costs,
        craft_time: body.rows[i].craft_time,
        schema: body.rows[i].schema
      })
    }
  }
  return rates;


}

function startTimer(duration, index) {
  var timer = duration, minutes, seconds;
  var new_interval = setInterval(function () {
      hours=  parseInt(timer / 3600, 10)
      minutes = parseInt((timer-hours*3600) / 60,10);
      seconds = parseInt(timer % 60, 10);

      hours = hours < 10 ? "0" + hours : hours;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds; 
      display= hours+":"+minutes+":"+seconds;
      if(display == "00:00:00")
        display = "Claim Now !";
      if (document.getElementById(index) != 'undefined' || document.getElementById(index) != 'null')
        document.getElementById(index).innerHTML="Time to claim : " + display;
      if (--timer < 0) {
          timer =0;
      }
  }, 1000);
  interval_ids.push(new_interval);
}

async function PopulateFactory(data, labourers) {

  clearUi();
  for(let i = 0;i < interval_ids ; i++){
    window.clearInterval(i);
  }
  console.log(interval_ids);
  reg_dereg = true;
  scrolldiv.style.justifyContent = "center";
  var items = document.createElement('div');
  var div = document.createElement('div');

  if (data.labourer_id != "0") {

    div.id = "tablecontainer_type3";
    items.className = "itemwrapper_3";

    let div_container_1 = document.createElement('div');
    div_container_1.className = "flex-container";
    div_container_1.style = "margin-left: 8px;";

    let div_container_2 = document.createElement('div');
    div_container_2.className = "flex-container";
    div_container_2.style = "justify-content:right;align-items:center;margin-right: 8px;";

    var div2 = document.createElement('p');
    div2.textContent = "#" + data.labourer_id;
    div2.className = 'textstyle';
    div_container_1.appendChild(div2);

    var title_bar = document.createElement('div');
    title_bar.className = "bar";
    title_bar.style = "margin-left:0px;justify-content:flex-start;";

    for (const labouerData of labourers) {
      if (labouerData.asset_id == data.labourer_id) {

        console.log(labouerData);
        var div3_2 = document.createElement('div');
        div3_2.className = 'textstyle';
        div3_2.id = 'textstyle';
        div3_2.style = "font-size:12px;color:#D9490D;";
        div3_2.textContent = labouerData.rarity;

        var div3 = document.createElement('div');
        div3.className = 'textstyle textstyle16';
        div3.id = 'textstyle';
        div3.textContent = labouerData.name;

        title_bar.appendChild(div3_2);
        title_bar.appendChild(div3);
        div_container_1.appendChild(title_bar);

        var img2 = document.createElement('img');
        img2.src = src + labouerData.img;
        img2.className = 'nftimg';
        div_container_1.appendChild(img2);

      }
    }

    const utcMilllisecondsSinceEpoch = Date.now();
    var utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000);
    var tr = data.last_claim + data.delay - utcSecondsSinceEpoch;
    var text_div = document.createElement('div');
    text_div.className = "text-div";
    text_div.style = "display:flex;flex-direction:colum;justify-content:center;align-items:center;width:100%;height:50px;background:black;border-radius:8px;";
    var timer_div = document.createElement('p');
    timer_div.disabled = "disabled";
    timer_div.id = "timer 2" + data.asset_id;
    timer_div.textContent = "Time to claim : 00 : 00 : 00";
    timer_div.className = 'textstyle textstyle15';
    text_div.appendChild(timer_div);
    div_container_1.appendChild(text_div);
    startTimer(tr, timer_div.id);

    var title_bar_3 = document.createElement('div');
    title_bar_3.className = "bar";
    title_bar_3.style = "margin-left:0px;justify-content:flex-end;";

    let close_div = document.createElement('BUTTON');
    close_div.className = "dot dot-btn";
    close_div.style = "background-color: white;border:none;";
    close_div.textContent = "X";
    close_div.onclick = async function () {
      await clearUi();
      PopulateMenu(rates, craftdata, boostdata, labourers, staked, unstaked, balance);
    };
    title_bar_3.appendChild(close_div);
    div_container_2.appendChild(title_bar_3);

    var div5 = document.createElement('div');
    div5.className = 'textstyle fontSize18';
    div5.id = 'textstyle';
    div5.textContent = "FACTORY";
    div5.style = "text-decoration:underline;";
    div_container_2.appendChild(div5);

    var div4_2 = document.createElement('div');
    div4_2.className = 'textstyle';
    div4_2.id = 'textstyle';
    div4_2.style = "font-size:11px;";
    div4_2.textContent = data.rarity_type;

    var div4 = document.createElement('div');
    div4.className = 'textstyle';
    div4.id = 'textstyle';
    div4.style = "font-size:14px;color:#D9490D;";
    div4.textContent = data.name;

    var title_bar_2 = document.createElement('div');
    title_bar_2.className = "bar";
    title_bar_2.style = "margin-left:0px;justify-content:center;";

    title_bar_2.appendChild(div4_2);
    title_bar_2.appendChild(div4);
    div_container_2.appendChild(title_bar_2);

    var storage_div = document.createElement('div');
    storage_div.className = "storage_div";

    var div5 = document.createElement('div');
    div5.id = 'textstyle';
    div5.textContent = "Info :";
    div5.className = 'textstyle fontSize18';

    var div6 = document.createElement('div');
    div6.id = 'textstyle';
    div6.style = "font-size:13px";
    var txt = data.token_in.includes("X") ? "" : "-" + data.token_in;
    div6.textContent = "Power : + " + parseFloat(data.power.split(' ')[0]).toFixed(0).toString() + " " + data.power.split(' ')[1] + txt + " / H";
    div6.className = 'fontSize13';

    //storage_div.appendChild(div5);
    storage_div.appendChild(div6);

    var div7 = document.createElement('div');
    div7.id = 'textstyle';
    div7.style = "font-size:13px";
    div7.textContent = "Boost : " + parseFloat(data.labourer_boost.split(' ')[0]).toFixed(0).toString() + " " + data.labourer_boost.split(' ')[1];
    div7.className = 'fontSize13';
    storage_div.appendChild(div7);

    div_container_2.appendChild(storage_div);

    let claimbtn = document.createElement('BUTTON');
    claimbtn.id = data.asset_id;
    claimbtn.className = "stkbtn";
    claimbtn.style.bottom = "5px";
    claimbtn.textContent = "Claim";
    claimbtn.onclick = async function s() {
      claimfctry(claimbtn.id);
    };
    var bar_2 = document.createElement('div');
    bar_2.className = "bar";
    bar_2.appendChild(claimbtn);
    div_container_2.appendChild(bar_2);

    var labourer_div = document.createElement('div');
    labourer_div.className = "labourer_div";
    labourer_div.style = "margin-top:10px;";

    var new_bar = document.createElement('div');
    new_bar.className = 'bar_type5';
    var div9 = document.createElement('div');
    div9.className = 'flex-textstyle';

    div9.textContent = 'Remove Labourer ';
    let new_div = document.createElement('BUTTON');
    new_div.id = data.asset_id;
    new_div.className = "minusBtn";
    new_div.style = "width: 25px;height: 100%;";
    new_div.name = data.name;
    new_div.onclick = async function s() {
      deregboost(new_div.id);
    };
    new_bar.appendChild(div9);
    new_bar.appendChild(new_div);
    labourer_div.appendChild(new_bar);

    div_container_2.appendChild(labourer_div);

    items.appendChild(div_container_1);
    items.appendChild(div_container_2);

  } else {

    div.id = "tablecontainer_type2";
    items.className = "itemwrapper";

    var title_bar_3 = document.createElement('div');
    title_bar_3.className = "bar_type2";
    title_bar_3.style = "justify-content:flex-end;";

    let close_div = document.createElement('BUTTON');
    close_div.className = "dot dot-btn";
    close_div.style = "background-color: white;border:none;margin-right:20px;";
    close_div.textContent = "X";
    close_div.onclick = async function () {
      await clearUi();
      PopulateMenu(rates, craftdata, boostdata, labourers, staked, unstaked, balance);
    };

    title_bar_3.appendChild(close_div);
    items.appendChild(title_bar_3);

    var div5 = document.createElement('div');
    div5.className = 'textstyle';
    div5.id = 'textstyle';
    div5.textContent = "FACTORY";
    div5.style = "text-decoration:underline;";
    items.appendChild(div5);

    var div4_2 = document.createElement('div');
    div4_2.className = 'textstyle';
    div4_2.id = 'textstyle';
    div4_2.style = "font-size:11px;";
    div4_2.textContent = data.rarity_type;

    var div4 = document.createElement('div');
    div4.className = 'textstyle';
    div4.id = 'textstyle';
    div4.style = "font-size:14px;color:#D9490D;";
    div4.textContent = data.name;

    var title_bar_2 = document.createElement('div');
    title_bar_2.className = "bar_type2";
    title_bar_2.style = "margin-left:0px;justify-content:center;";

    title_bar_2.appendChild(div4_2);
    title_bar_2.appendChild(div4);
    items.appendChild(title_bar_2);

    var bar_3 = document.createElement('div');
    bar_3.className = "bar_type2";
    bar_3.style = "justify-content:center;height:80px;";

    var storage_div = document.createElement('div');
    storage_div.className = "storage_div";
    storage_div.style.width = "70%";

    var div5 = document.createElement('div');
    div5.id = 'textstyle';
    div5.textContent = "Info :";
    div5.className = 'textstyle';

    var div6 = document.createElement('div');
    div6.id = 'textstyle textstyle15';
    var txt = data.token_in.includes("X") ? "" : "-" + data.token_in;
    div6.textContent = "Power : + " + parseFloat(data.power.split(' ')[0]).toFixed(0).toString() + txt + " / H";
    div6.className = 'textstyle';

    storage_div.appendChild(div5);
    storage_div.appendChild(div6);
    bar_3.appendChild(storage_div);
    items.appendChild(bar_3);

    var bar_4 = document.createElement('div');
    bar_4.className = "bar_type2";
    bar_4.style = "justify-content:center;height:40px;";

    const utcMilllisecondsSinceEpoch = Date.now();
    var utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000);
    var tr = data.last_claim + data.delay - utcSecondsSinceEpoch;
    var text_div = document.createElement('div');
    text_div.style = "display:flex;flex-direction:colum;justify-content:center;align-items:center;width:80%;height:100%;background:transparent;border-radius:8px;";
    var timer_div = document.createElement('p');
    timer_div.disabled = "disabled";
    timer_div.id = "timer " + data.asset_id;
    timer_div.textContent = "Time to claim : 00 : 00 : 00";
    timer_div.className = 'textstyle textstyle15';
    text_div.appendChild(timer_div);
    bar_4.appendChild(text_div);
    items.appendChild(bar_4);
    startTimer(tr, timer_div.id);

    let claimbtn = document.createElement('BUTTON');
    claimbtn.id = data.asset_id;
    claimbtn.className = "stkbtnclaim";
    claimbtn.style.bottom = "5px";
    claimbtn.textContent = "Claim";
    claimbtn.onclick = async function s() {
      claimfctry(claimbtn.id);
    };

    var bar_2 = document.createElement('div');
    bar_2.className = "bar_type3";
    bar_2.appendChild(claimbtn);
    items.appendChild(bar_2);

    var bar_5 = document.createElement('div');
    bar_5.className = "bar_type4";

    var labourer_div = document.createElement('div');
    labourer_div.className = "labourer_div_type2";

    var new_bar = document.createElement('div');
    new_bar.className = 'bar_type6';
    var div9 = document.createElement('div');
    div9.className = 'flex-textstyle';

    div9.textContent = 'Add Labourer';
    let new_div = document.createElement('BUTTON');
    new_div.id = data.asset_id;
    new_div.className = "addBtn";
    new_div.style = "width: 25px;height: 100%;";
    new_div.name = data.name;
    new_div.labourers = filterlbrs(labourers, data.name);
    new_div.rarity = data.rarity;
    new_div.onclick = async function s() {
      populate_lpanel(new_div.id, new_div.name, new_div.labourers, new_div.rarity);
      switch_to_labourers();
    };
    new_bar.appendChild(div9);
    new_bar.appendChild(new_div);
    labourer_div.appendChild(new_bar);

    bar_5.appendChild(labourer_div);
    items.appendChild(bar_5);

  }

  div.appendChild(items);
  scrolldiv.appendChild(div);
  mainDiv.style.visibility = "visible";
  start_timer = true;
}


function PopulateMenu(rates, craftdata, boostdata, labourers, staked, unstaked, balance) {

  clearUi();
  console.log(interval_ids);
  console.log(staked_lbr);

  var unstaked = switchtostaked ? staked : unstaked;
  console.log(unstaked);
  console.log(switchtostaked);
  var pools = "";
  var ids = [];
  var stakepower = 0.00;

  if (unstaked.length == 0) {
    loader.display = "none";
    ShowToast("No Assets To Display !");
    document.getElementById("footer").style.visibility = "visible";
    document.getElementById("sidebar").style.visibility = "visible";
    document.getElementById("sidebar-right").style.visibility = "visible";
    return;
  } else if (unstaked.length > 0) {
    let found = false;
    for (const data of unstaked) {
      if (main_view_type == "Machine" && data.name.includes("Cutter")) check = true;
      if (data.name.includes(main_view_type) || check) {
        found = true;
        break;
      }
    }
    if (!found) {
      loader.display = "none";
      ShowToast("No Assets To Display !");
      document.getElementById("footer").style.visibility = "visible";
      document.getElementById("sidebar").style.visibility = "visible";
      document.getElementById("sidebar-right").style.visibility = "visible";
      return;
    }
  }

  document.getElementById("scrolldiv").style.justifyContent = "flex-start";
  let factory = 1;
  for (var index = 0; index < unstaked.length; ++index) {
    var check = false;
    if (main_view_type == "Machine" && unstaked[index].name.includes("Cutter")) check = true;
    if (unstaked[index].name.includes(main_view_type) || main_view_type == "all" || check) {

      if (main_view_type == "Factory Building") {

        var items = document.createElement('div');
        items.id = index;
        var div = document.createElement('div');
        div.id = "tablecontainer";
        items.className = "itemwrapper";

        var container = document.createElement('div');
        container.className = "textcontainer";

        var div2 = document.createElement('p');
        div2.className = 'textstyle';
        div2.style = 'font-size:18px';
        items.appendChild(div2);

        img2 = document.createElement('BUTTON');
        let img_src = src + unstaked[index].img;
        img2.className = 'factory_img';
        img2.id = unstaked[index].asset_id;
        img2.style.backgroundImage = 'url(' + img_src + ')';
        let asset_id = img2.id;
        items.appendChild(img2);

        var div3 = document.createElement('div');
        div3.textContent = "*Select Factory To view more details";
        div3.className = 'textstyle';
        div3.style = "color:white;font-size:12px;font-family:Times New Roman, Times, serif;=";

        let data = unstaked[index];
        let labourerData = labourers;

        if (switchtostaked) {
          console.log(unstaked[index]);
          div2.textContent = "Factory # " + factory + " ( " + unstaked[index].asset_id + " )";
          img2.onclick = async function () {
            ShowToast("Selected Factory #" + asset_id);
            PopulateFactory(data, labourerData)
          };

          const utcMilllisecondsSinceEpoch = Date.now();
          var utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000);
          var tr = unstaked[index].last_claim + unstaked[index].delay - utcSecondsSinceEpoch;

          var timer_div = document.createElement('p');
          timer_div.disabled = "disabled";
          timer_div.id = "timer " + unstaked[index].asset_id;
          timer_div.className = 'textstyle textstyle15';
          container.appendChild(timer_div);
          startTimer(tr, timer_div.id);
        } else {
          div2.textContent = "Factory " + " ( " + unstaked[index].asset_id + " )";
          img2.onclick = async function () {
            ShowToast("Please Stake this Factory First !");
          };
        }

        container.appendChild(div3);

        var bar = document.createElement('div');
        bar.className = "stkbtn-bar";
        if (switchtostaked) {
          let claimbtn = document.createElement('BUTTON');
          claimbtn.id = unstaked[index].asset_id;
          claimbtn.className = "stkbtn";
          claimbtn.style.bottom = "5px";
          claimbtn.textContent = "Claim";
          claimbtn.onclick = async function s() {
            claimfctry(claimbtn.id);
          };

          let deregb = document.createElement('BUTTON');
          deregb.id = unstaked[index].asset_id;
          deregb.className = "stkbtn";
          deregb.style.bottom = "5px";
          deregb.textContent = "Unstake";
          deregb.onclick = async function s() {
            deregmch(deregb.id);
          };

          if (!unstaked[index].nrgstorage.includes("X")) {
            let dbtn = document.createElement('BUTTON');
            dbtn.id = unstaked[index].asset_id;
            dbtn.className = "stkbtn";
            dbtn.textContent = "Deposit";
            dbtn.max = parseInt(unstaked[index].maxstorage) - parseInt(unstaked[index].nrgstorage);
            dbtn.onclick = async function s() {
              switch_to_deposit(dbtn.id, dbtn.max);
            };
            bar.appendChild(dbtn);
          }
          bar.appendChild(claimbtn);
          bar.appendChild(deregb);

        } else {
          let claimbtn = document.createElement('BUTTON');
          claimbtn.id = unstaked[index].asset_id;
          claimbtn.className = "stkbtn";
          claimbtn.style.bottom = "5px";
          claimbtn.textContent = "Stake";
          claimbtn.onclick = async function s() {
            regmch(claimbtn.id);
          };
          bar.appendChild(claimbtn);
        }

        items.appendChild(container);
        items.appendChild(bar);
        div.appendChild(items);
        scrolldiv.appendChild(div);
        factory++;

      } else {

        var items = document.createElement('div');
        items.id = index;
        var div = document.createElement('div');
        div.id = "tablecontainer_type2";
        items.className = "itemwrapper_2";

        let div_container_1 = document.createElement('div');
        div_container_1.className = "flex-container";

        let div_container_2 = document.createElement('div');
        div_container_2.className = "flex-container_2";

        var div2 = document.createElement('p');
        div2.textContent = "#" + unstaked[index].asset_id;
        div2.className = 'textstyle';
        div_container_1.appendChild(div2);

        var title_bar = document.createElement('div');
        title_bar.className = "bar";
        title_bar.style = "margin-left:0px;justify-content:flex-start;";

        var div3_2 = document.createElement('div');
        div3_2.className = 'textstyle';
        div3_2.id = 'textstyle';
        div3_2.style = "font-size:12px;color:#D9490D;";
        div3_2.textContent = unstaked[index].rarity_type;

        var div3 = document.createElement('div');
        div3.className = 'textstyle textstyle16';
        div3.id = 'textstyle';
        div3.textContent = unstaked[index].name;

        title_bar.appendChild(div3_2);
        title_bar.appendChild(div3);
        div_container_1.appendChild(title_bar);

        img2 = document.createElement('img');
        img2.src = src + unstaked[index].img;
        img2.className = 'nftimg';
        div_container_1.appendChild(img2);

        var div4 = document.createElement('div');
        div4.className = 'textstyle';
        div4.id = 'textstyle';
        div4.style = "color:#D9490D;font-size:20px;margin-top:5px;";
        switch (unstaked[index].material_type) {
          case "Rubber":
            div4.textContent = "NKFR / Rubber";
            break;
          case "Textile":
            div4.textContent = "NKFT / Textile";
            break;
          case "Leather":
            div4.textContent = "NKFL / Leather";
            break;
        }
        div_container_2.appendChild(div4);

        if (switchtostaked) {
          const utcMilllisecondsSinceEpoch = Date.now();
          var utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000);
          var tr = unstaked[index].last_claim + unstaked[index].delay - utcSecondsSinceEpoch;

          var text_div = document.createElement('div');
          text_div.style = "display:flex;flex-direction:colum;justify-content:center;align-items:center;width:100%;height:50px;background:black;border-radius:8px;";
          var timer_div = document.createElement('p');
          timer_div.disabled = "disabled";
          timer_div.id = "timer 3" + unstaked[index].asset_id;
          timer_div.textContent = "Time to claim : 00 : 00 : 00";
          timer_div.className = 'textstyle textstyle15';
          text_div.appendChild(timer_div);
          div_container_1.appendChild(text_div);
          startTimer(tr, timer_div.id);

          if (!unstaked[index].nrgstorage.includes("X")) {

            var storage_div = document.createElement('div');
            storage_div.style = "background:rgba(255,255,255,0.1);border-radius:8px;height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;border:1px solid white;margin-top:5px;";

            var div5 = document.createElement('div');
            div5.id = 'textstyle';
            div5.textContent = "Storage :";
            div5.className = 'textstyle';
            var div6 = document.createElement('div');
            div6.id = 'textstyle';
            div6.style = "font-size:15px";
            div6.textContent = parseFloat(unstaked[index].nrgstorage.split(' ')[0]).toFixed(0) + " / " + parseFloat(unstaked[index].maxstorage.split(' ')[0]).toFixed(0) + " " + unstaked[index].maxstorage.split(' ')[1];
            div6.className = 'textstyle';

            storage_div.appendChild(div5);
            storage_div.appendChild(div6);
            div_container_2.appendChild(storage_div);

            var bar_1 = document.createElement('div');
            bar_1.className = "mobile_bar";

            var bar_2 = document.createElement('div');
            bar_2.className = "bar";

            let deregb = document.createElement('BUTTON');
            deregb.id = unstaked[index].asset_id;
            deregb.className = "stkbtn_type2";
            deregb.textContent = "Unstake";
            deregb.onclick = async function s() {
              deregmch(deregb.id);
            };

            if (!unstaked[index].nrgstorage.includes("X")) {
              let dbtn = document.createElement('BUTTON');
              dbtn.id = unstaked[index].asset_id;
              dbtn.className = "stkbtn_type2";
              dbtn.textContent = "Deposit";
              dbtn.max = parseInt(unstaked[index].maxstorage) - parseInt(unstaked[index].nrgstorage);
              dbtn.onclick = async function s() {
                switch_to_deposit(dbtn.id, dbtn.max);
              };
              bar_1.appendChild(dbtn);
            }
            bar_1.appendChild(deregb);

            let claimbtn = document.createElement('BUTTON');
            claimbtn.id = unstaked[index].asset_id;
            claimbtn.className = "stkbtn";
            claimbtn.textContent = "Claim";
            claimbtn.onclick = async function s() {
              claimfctry(claimbtn.id);
            };

            bar_2.appendChild(claimbtn);
            div_container_2.appendChild(bar_1);
            div_container_2.appendChild(bar_2);

            var div7 = document.createElement('div');
            div7.id = 'textstyle';
            var txt = unstaked[index].token_in.includes("X") ? "" : '\n' + unstaked[index].token_in;
            div7.textContent = "Production : + " + parseFloat(unstaked[index].power.split(' ')[0]).toFixed(0).toString() + " " + unstaked[index].power.split(' ')[1] + " / H";
            div7.className = 'textstyle textstyle15';

            var power_prod_bar = document.createElement('div');
            power_prod_bar.className = "pp_bar";


            var text_div = document.createElement('div');
            var txt = unstaked[index].token_in.includes("X") ? "" : '\n' + unstaked[index].token_in;
            text_div.textContent = "Consumption : " + parseFloat(txt.split(' ')[0]).toFixed(0).toString() + " " + txt.split(' ')[1] + " / H";
            text_div.className = 'textstyle textstyle15';
            //text_div.style = "margin-bottom:-5px;";

            power_prod_bar.appendChild(div7);
            power_prod_bar.appendChild(text_div);
            div_container_2.appendChild(power_prod_bar);

            var labourer_div = document.createElement('div');
            labourer_div.className = "labourer_div";

            var new_bar = document.createElement('div');
            new_bar.className = 'bar_type2';
            var div9 = document.createElement('div');
            div9.className = 'flex-textstyle';

            if (unstaked[index].labourer_id == "0") {
              div9.textContent = 'Add Labourer ';
              let new_div = document.createElement('BUTTON');
              new_div.id = unstaked[index].asset_id;
              new_div.className = "addBtn";
              new_div.name = unstaked[index].name;
              new_div.labourers = filterlbrs(labourers, unstaked[index].name);
              new_div.rarity = unstaked[index].rarity;
              new_div.onclick = async function s() {
                populate_lpanel(new_div.id, new_div.name, new_div.labourers, new_div.rarity);
                switch_to_labourers();
              };
              new_bar.appendChild(div9);
              new_bar.appendChild(new_div);
              labourer_div.appendChild(new_bar);
            } else {

              for (const labouerData of labourers) {
                if (labouerData.asset_id == unstaked[index].labourer_id) {

                  var labr_title_bar = document.createElement('div');
                  labr_title_bar.className = "bar";
                  labr_title_bar.style = "margin-left:2px;justify-content:center;";

                  let div10 = document.createElement('div');
                  div10.className = "textstyle textstyle16";
                  div10.id = 'textstyle ';
                  div10.textContent = labouerData.name;

                  var div10_2 = document.createElement('div');
                  div10_2.className = 'textstyle';
                  div10_2.id = 'textstyle';
                  div10_2.style = "font-size:12px;color:#D9490D;";
                  div10_2.textContent = labouerData.rarity;

                  labr_title_bar.appendChild(div10_2);
                  labr_title_bar.appendChild(div10);
                  labourer_div.appendChild(labr_title_bar);

                  let labr_div = document.createElement('div');
                  labr_div.className = "labr_div";


                  let labr_subdiv_type1 = document.createElement('div');
                  labr_subdiv_type1.style = "width:50%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;";

                  let boost_text = document.createElement('p');
                  boost_text.className = "textstyle";
                  boost_text.style = "font-size:12px;";
                  boost_text.textContent = "Boost : ";

                  let boost_div = document.createElement('div');
                  boost_div.className = "dot";
                  boost_div.textContent = unstaked[index].labourer_boost.split('.')[0];

                  labr_subdiv_type1.appendChild(boost_text);
                  labr_subdiv_type1.appendChild(boost_div);

                  let labr_subdiv_type2 = document.createElement('div');
                  labr_subdiv_type2.style = "width:50%;height:100%;";

                  img2 = document.createElement('img');
                  img2.src = src + labouerData.img;
                  img2.className = 'lbr_nftimg';
                  labr_subdiv_type2.appendChild(img2);

                  labr_div.appendChild(labr_subdiv_type1);
                  labr_div.appendChild(labr_subdiv_type2);
                  labourer_div.appendChild(labr_div);

                  break;
                }
              }

              div9.textContent = '#' + unstaked[index].labourer_id;
              div9.style.fontSize = "15px";

              var new_div = document.createElement('BUTTON');
              new_div.className = 'minusBtn';
              new_div.id = unstaked[index].labourer_id;
              new_div.onclick = async function s() {
                deregboost(new_div.id);
              };

              new_bar.appendChild(div9);
              new_bar.appendChild(new_div);
              new_bar.style = "margin-bottom: 5px;";
              labourer_div.appendChild(new_bar);
            }
            div_container_2.appendChild(labourer_div);
          }
        } else {
          var bar_2 = document.createElement('div');
          bar_2.className = "bar";

          let deregb = document.createElement('BUTTON');
          deregb.id = unstaked[index].asset_id;
          deregb.className = "stkbtn_type2";
          deregb.textContent = "Stake";
          deregb.onclick = async function s() {
            regmch(deregb.id);
          };
          bar_2.appendChild(deregb);
          div_container_2.appendChild(bar_2);
        }

        items.appendChild(div_container_1);
        items.appendChild(div_container_2);
        div.appendChild(items);
        scrolldiv.appendChild(div);
      }
    }

    loader.display = "none";
    document.getElementById("footer").style.visibility = "visible";
    document.getElementById("sidebar").style.visibility = "visible";
    document.getElementById("sidebar-right").style.visibility = "visible";
    document.getElementById("navheader").style.visibility = "visible";
    mainDiv.style.visibility = "visible";
  }
}


function filterlbrs(labourz, name) {
  var result = [];
  labourz.forEach(x => {
    x.machines.forEach(y => {
      if (y == name) {
        result.push(x);
      }
    });
  });
  return result;
}

function switchstaked(index) {
  switchtostaked = index;
  clearUi();
  PopulateMenu(rates, craftdata, boostdata, labourers, staked, unstaked, balance);

}


function switchtodiffcoll(index) {
  if (collection != index.id) {
    collection = index.id;
    main();
  }
}

deposit_input.oninput = function () {
  var input = parseFloat(this.value).toFixed(4) + " NKFE";
  var depositmchbtn = document.getElementById('depositmchbtn');
  var withdrawbtn = document.getElementById('withdrawmchbtn');
  var asset_id = document.getElementById('dmchid').value.split('#')[1];
  depositmchbtn.onclick =
        async function () {
          deposit(asset_id, input);
        }
      withdrawbtn.onclick = async function () {
        withdraw_tokens(input,asset_id);
      }
}

bank_input.oninput = function () {
  console.log(this.value);
  var input = parseFloat(this.value).toFixed(4);
  var final_amount = parseFloat(input * (1 - (7 / 100))).toFixed(4);
  final_amt.value = "FINAL WITHDRAW AMOUNT: " + final_amount + " " + selected_token_bank;

  var depositbtn = document.getElementById("depositbtn");
  depositbtn.onclick =
    async function s() {
      var final = parseFloat(bank_input.value).toFixed(4) + " " + selected_token_bank;
      deposit_tokens(final);
    }
  var withdrawbtn = document.getElementById("withdrawbtn");
  withdrawbtn.onclick =
    async function s() {
      var final2 = parseFloat(bank_input.value).toFixed(4) + " " + selected_token_bank;
      withdraw_tokens(final2, "0");
    }
}

function getkeybalance(balance_static, symbol) {
  var bb = [];
  bb = balance_static;
  for (let i = 0; i < bb.length; i++) {
    if (bb[i].balance) {
      if (bb[i].balance.includes(symbol))
        return bb[i].balance;
    }
  }
  return "0.0000 " + symbol;
}

function dropdown_content() {
  if(document.getElementById("bank-dropdown_content").style.display == "block")
    document.getElementById("bank-dropdown_content").style.display == "none";
  else 
    document.getElementById("bank-dropdown_content").style.display == "block"
}

function bank_select(symbol) {
  dropdown_content();
  ShowToast("Selected Token " + symbol);
  document.getElementById("bank_dropdown").value = symbol;
  selected_token_bank = symbol;
  var user_balance = document.getElementById("user_balance");
  var wax_balance = document.getElementById("wax_balance");
  user_balance.value = "Game Balance : " + getkeybalance(user_balance_static, selected_token_bank);
  wax_balance.value = "Wax Wallet Balance : " + getkeybalance(wax_balance_static, selected_token_bank);
  var input = parseFloat(bank_input.value).toFixed(4);
  var final_amount = parseFloat(input * (1 - (5 / 100))).toFixed(4);
  final_amt.value = "Final Withdraw Amount : " + final_amount + " " + selected_token_bank;
}

async function show_api(){
  if(document.getElementById("api_dropdown_content").style.display == "block")
    document.getElementById("api_dropdown_content").style.display = "none";
  else 
    document.getElementById("api_dropdown_content").style.display = "block";
} 

const select_api = async (api) => {
  show_api();
  endpoint = "https://" + api;
  document.getElementById("api_dropdown").value = endpoint;
}

async function switch_to_bank() {

  if (bank_index == 'true') {
    craft_index = 'false';
    deposit_index = 'false';
    labour_index = 'false';
    switch_to_craft();
    switch_to_deposit();
    switch_to_labourers();
    ShowToast("Please Select Token Type to Proceed");
    document.getElementById('bank').style.visibility = "visible";
    document.getElementById('bank-child').style.visibility = "visible";
    document.getElementById('bank-header').style.display = "block";
    var element = document.getElementById('bank-child');
    var children = element.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.style.visibility = "visible";
    }
    bank_index = 'false';
  } else if (bank_index == 'false') {
    document.getElementById('bank').style.visibility = "hidden";
    document.getElementById('bank-child').style.visibility = "hidden";
    document.getElementById('bank-header').style.display = "none";
    var element = document.getElementById('bank-child');
    var children = element.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.style.visibility = "hidden";
    }
    bank_index = 'true';
    craft_index = 'true';
    deposit_index = 'true';
    labour_index = 'true';
  }
}


async function switch_to_deposit(asset_id, max) {
  var output = parseFloat(deposit_input.value).toFixed(4) + " NKFE";
  console.log(output);
  if(typeof(max) != 'undefined')
    ShowToast("FYI Max Storage Value on this machine is " + max + " NKFE");
  if(parseFloat(output.value) > parseFloat(max))
    ShowToast("Value greater than machines max storage value");
  else{
    if (deposit_index == 'true') {
      document.getElementById('depositmch').style.visibility = "visible";
      document.getElementById('depositmch-child').style.visibility = "visible";
      document.getElementById('depositmch-header').style.display = "block";
      var element = document.getElementById('depositmch-child');
      var children = element.children;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        child.style.visibility = "visible";
      }
      var element = document.getElementById('dmchid');
      element.value = "Machine Asset ID : #" + asset_id;
      var depositmchbtn = document.getElementById('depositmchbtn');
      var withdrawbtn = document.getElementById('withdrawmchbtn');
      depositmchbtn.onclick =
        async function () {
          var amount = output;
          console.log(output);
          console.log(amount);
          deposit(asset_id, amount);
        }
      withdrawbtn.onclick = async function () {
        var amount = output;
        withdraw_tokens(amount,asset_id);
      }
  
      deposit_index = 'false';
    } else if (deposit_index == 'false') {
      document.getElementById('depositmch').style.visibility = "hidden";
      document.getElementById('depositmch-child').style.visibility = "hidden";
      document.getElementById('depositmch-header').style.display = "none";
      var element = document.getElementById('depositmch-child');
  
      var children = element.children;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        child.style.visibility = "hidden";
      }
      deposit_index = 'true';
    }
  }
  /*var output = document.getElementById("demo");
  output.innerHTML = parseFloat(rangeslider.value).toFixed(4);
  rangeslider.max = max;*/
  /*rangeslider.oninput = function () {
    output.innerHTML = parseFloat(this.value).toFixed(4) + " NKFE";
  }*/
}
async function populate_lpanel(asset_idd, name, labourerz, rarity) {

  var element1 = document.getElementById('lmchild');
  element1.value = "Selected Machine : #" + asset_idd + " | " + name;

  var element2 = document.getElementById('labourscroll');
  var unstaked = labourerz;

  if (element2.children.length > 0) {
    var child = element2.lastElementChild;
    while (child) {
      element2.removeChild(child);
      child = element2.lastElementChild;
    }
  }

  if(labourerz.length < 1){
    ShowToast("No Labourers To Display !");
    return;
  }

  for (var index = 0; index < unstaked.length; ++index) {

    if (!unstaked[index].staked) {
      var items = document.createElement('div');
      items.id = index + "l";
      var div = document.createElement('div');
      div.id = "tablecontainer";
      div.style = "margin-bottom:30px;background:transparent;border:none";
      items.className = "itemwrapper";

      img2 = document.createElement('img');
      img2.src = src + unstaked[index].img;
      img2.className = 'labr_panel_img';
      items.appendChild(img2);

      var div2 = document.createElement('p');
      div2.textContent = "# " + unstaked[index].asset_id;
      div2.className = 'textstyle textstyle15';
      items.appendChild(div2);

      var div3 = document.createElement('div');
      div3.id = 'textstyle';
      div3.textContent = unstaked[index].name;
      div3.className = 'textstyle';
      div3.style.textDecoration = 'underline';
      items.appendChild(div3);

      var power = "0.00";
      unstaked[index].boostdata.forEach(x => {
        if (x.rarity == rarity)
          power = x.boost;
      });

      var div5 = document.createElement('div');
      div5.id = 'textstyle';
      div5.textContent = "Boost : + " + power;
      div5.className = 'textstyle';
      items.appendChild(div5);

      var new_bar = document.createElement('div');
      new_bar.className = 'bar';
      new_bar.style.height = "25px";
      let new_div = document.createElement('BUTTON');
      new_div.id = unstaked[index].asset_id;
      new_div.mch = asset_idd;
      new_div.className = "addBtn";
      new_div.onclick = async function s() {
        regboost(new_div.id, new_div.mch);
      };
      new_bar.appendChild(new_div);

      items.appendChild(new_bar);
      div.appendChild(items);
      element2.appendChild(div);
    }
  }
  if(element2.children.length < 1)
    ShowToast("All Labourers Already Staked !");
}
async function switch_to_labourers() {
  if (labour_index == 'true') {
    document.getElementById('labourer').style.visibility = "visible";
    document.getElementById('labourer-child').style.visibility = "visible";
    document.getElementById('labourer-header').style.display = "block";
    var element = document.getElementById('labourer-child');
    var children = element.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.style.visibility = "visible";
    }
    labour_index = 'false';

  } else if (labour_index == 'false') {
    document.getElementById('labourer').style.visibility = "hidden";
    document.getElementById('labourer-child').style.visibility = "hidden";
    document.getElementById('labourer-header').style.display = "none";
    var element = document.getElementById('labourer-child');
    var children = element.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.style.visibility = "hidden";
    }
    labour_index = 'true';
  }

}

async function switch_to_craft() {
  if (craft_index == 'true') {
    document.getElementById('craft').style.visibility = "visible";
    document.getElementById('craft-child').style.visibility = "visible";
    document.getElementById('craft-header').style.display = "block";
    var element = document.getElementById('craft-child');
    var children = element.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.style.visibility = "visible";
    }
    craft_index = 'false';
  } else if (craft_index == 'false') {
    document.getElementById('craft').style.visibility = "hidden";
    document.getElementById('craft-child').style.visibility = "hidden";
    document.getElementById('craft-header').style.display = "none";
    var element = document.getElementById('craft-child');
    var children = element.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      child.style.visibility = "hidden";
    }
    craft_index = 'true';
  }
}

async function clearUi() {
  for(const ids of interval_ids){
    clearInterval(ids);
  }
  start_timer = false;
  reg_dereg = false;
  document.getElementById('staking').style.display = "none";
  mainDiv.style.visibility = "hidden";
  overflow.overflowY = "hidden";
  if (scrolldiv.children.length > 0) {
    var child = scrolldiv.lastElementChild;
    while (child) {
      scrolldiv.removeChild(child);
      child = scrolldiv.lastElementChild;
    }
  }
}

function clearlUi() {

  var l_scroll = document.getElementById('labourscroll');
  if (l_scroll.children.length >= 1) {
    var child = l_scroll.lastElementChild;
    while (child) {
      l_scroll.removeChild(child);
      child = l_scroll.lastElementChild;
    }
  }
}

function CustomInputChanged() {
  var element = document.getElementById("custominput");
  element.value = parseInt(element.value);
  var valid = element.value > 0;
  var timeMultiplier = GetTimeMultiplier();
  document.getElementById("customamount").innerHTML =
    (timeMultiplier * element.value) / config.Multiplier;
  document.getElementById("buy" + menuPrices.length).disabled = !valid;
}


function GetTimeMultiplier() {
  var textValue = document.getElementById("timeinput").value;
  if (textValue.length > 0) {
    var timeMultiplier = parseInt(textValue);
    if (timeMultiplier < 1) {
      timeMultiplier = 1;
    }
    return timeMultiplier;
  } else {
    return 1;
  }
}

function WalletListVisible(visible) {
  if (!loggedIn)
    document.getElementById("login_title").style.visibility = !visible ? "visible" : "hidden";
  document.getElementById("walletlist").style.visibility = visible ?
    "visible" :
    "hidden";
}

function ShowMessage(message) {
  document.getElementById("messagecontent").innerHTML = message;
  document.getElementById("message").style.visibility = "visible";
}

function HideMessage(message) {
  document.getElementById("message").style.visibility = "hidden";
}



function CalcDecimals(quantity) {
  var dotPos = quantity.indexOf(".");
  var spacePos = quantity.indexOf(" ");
  if (dotPos != -1 && spacePos != -1) {
    return spacePos - dotPos - 1;
  }
  return 0;
}

async function GetFreeSpace() {
  for (var index = 0; index < pools.length; index++) {
    var path = "/v1/chain/get_table_rows";
    var data = JSON.stringify({
      json: true,
      code: "eosio.token",
      scope: pools[index].contract,
      table: "accounts",
      lower_bound: "WAX",
      upper_bound: "WAX",
      limit: 1,
    });
    const response = await fetch(endpoint + path, {
      headers: {
        "Content-Type": "text/plain"
      },
      body: data,
      method: "POST",
    });
    const body = await response.json();
    if (body.rows && Array.isArray(body.rows) && body.rows.length == 1) {
      pools[index].freeSpace = Math.floor(parseFloat(body.rows[0].balance));
      if (pools[index].contract == contract) {
        document.getElementById("freevalue").innerHTML =
          pools[index].name +
          ": " +
          pools[index].freeSpace +
          " WAX" +
          " available";
      }
    } else {
      ShowToast("Unexpected response retrieving balance");
    }
  }
}

function GetSymbol(quantity) {
  var spacePos = quantity.indexOf(" ");
  if (spacePos != -1) {
    return quantity.substr(spacePos + 1)
  }
  return ""
}

async function ShowToast(message) {
  Toastify({
    text: message,
    duration: 2500,
  }).showToast();
}
async function autoLogin() {
  var isAutoLoginAvailable = await wallet_isAutoLoginAvailable();
  if (isAutoLoginAvailable) {
    document.getElementById("login_title").style.visibility = "hidden";
    login();
  }
}
async function selectWallet(walletType) {
  wallet_selectWallet(walletType);
  login();
}
async function logout() {
  await wallet_logout();
  location.reload();
  /*clearUi();
  if(bank_index == "false")
    switch_to_bank();
  if(craft_index == "false")
    switch_to_craft();
  if(labour_index == "false")
    switch_to_labourers();
  if(deposit_index == "false")
    switch_to_deposit();
  document.getElementById("loggedin").style.display = "none";
  document.getElementById("loggedout").style.display = "block";
  document.getElementById('staking').style.display = "none";
  document.getElementById("footer").style.visibility = "hidden";
  document.getElementById("sidebar").style.visibility = "hidden";
  document.getElementById("sidebar-right").style.visibility = "hidden";
  document.getElementById("login_title").style.visibility = "visible";
  document.getElementById("navheader").style.visibility = "hidden";
  document.getElementById("username").value = "";
  document.getElementById("api_dropdown").value = "RPC Endpoints Available <>";
  loggedIn = false;
  HideMessage();*/
}
async function login() {
  try {
    if (!loggedIn) {
      loggedIn = true;
      const userAccount = await wallet_login();
      document.getElementById("loggedout").style.display = "none";
      document.getElementById("loggedin").style.display = "block";
      WalletListVisible(false);
      document.getElementById("username").value = "Factory Owner : " + userAccount;
      await main();
      document.getElementById("login_title").style.visibility = "hidden";
      ShowToast("Logged in as: " + userAccount);
      console.log(endpoint);
    }
  } catch (e) {
    Toastify({
      text: e.message,
      duration: 2000,
    }).showToast();
  }
}
async function wallet_isAutoLoginAvailable() {
  var sessionList = await anchorLink.listSessions(dapp);
  if (sessionList && sessionList.length > 0) {
    useAnchor = true;
    return true;
  } else {
    useAnchor = false;
    return await wax.isAutoLoginAvailable();
  }
}


async function wallet_selectWallet(walletType) {
  useAnchor = walletType == "anchor";
}
async function wallet_login() {
  if (useAnchor) {
    var sessionList = await anchorLink.listSessions(dapp);
    if (sessionList && sessionList.length > 0) {
      wallet_session = await anchorLink.restoreSession(dapp);
    } else {
      wallet_session = (await anchorLink.login(dapp)).session;
    }
    wallet_userAccount = String(wallet_session.auth).split("@")[0];
    auth = String(wallet_session.auth).split("@")[1];
    anchorAuth = auth;

  } else {
    wallet_userAccount = await wax.login();
    wallet_session = wax.api;
    anchorAuth = "active";
  }
  return wallet_userAccount;
}
async function wallet_logout() {
  if (useAnchor) {
    await anchorLink.clearSessions(dapp);
  }
}
async function wallet_transact(actions) {
  if (useAnchor) {
    var result = await wallet_session.transact({
      actions: actions
    }, {
      blocksBehind: 3,
      expireSeconds: 30
    });
    result = {
      transaction_id: result.processed.id
    };
  } else {
    var result = await wallet_session.transact({
      actions: actions
    }, {
      blocksBehind: 3,
      expireSeconds: 30
    });
  }
  return result;
}