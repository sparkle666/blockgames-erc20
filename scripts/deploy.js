async function main() {
  const SparkleFT = await ethers.getContractFactory("SparkleFT")

  // Start deployment, returning a promise that resolves to a contract object
  const sparkleFT = await SparkleFT.deploy()
  await sparkleFT.deployed()
  console.log("Contract deployed to address:", sparkleFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
