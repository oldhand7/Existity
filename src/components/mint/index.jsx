const mint = () => {
  return (
    <section className='mint' id="mint">
      <div className='card-overlay w-full pt-24'>
				<h1 className="text-white t-title md:px-12 sm:pl-4 pr-2 lg:pl-40 lg:pr-16 sm:text-xl md:text-2xl lg:text-3xl">Mint your NFT</h1>
				<div className="mint-block flex justify-center flex-col items-center">
					<h1 className="text-3xl text-white font-bold">1/10000</h1>
					<div className="count-block flex justify-between items-center mt-4">
						<div className="increase">
							-
						</div>
						<div className="count">1</div>
						<div className="increase">
							+
						</div>
					</div>
					<button className="btn-mint mt-4">
						Mint
					</button>
				</div>				
			</div>
    </section>
  )
}

export default mint
