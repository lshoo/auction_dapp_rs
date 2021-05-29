import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as auction_dapp_rs_idl, canisterId as auction_dapp_rs_id } from 'dfx-generated/auction_dapp_rs';

const agent = new HttpAgent();
const auction_dapp_rs = Actor.createActor(auction_dapp_rs_idl, { agent, canisterId: auction_dapp_rs_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await auction_dapp_rs.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
